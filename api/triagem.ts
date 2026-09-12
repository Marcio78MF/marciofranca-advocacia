/**
 * Vercel Serverless Function — proxy site → n8n triagem-mf
 *
 * Secrets (never commit values):
 *   TRIAGEM_MF_WEBHOOK_URL — n8n webhook URL
 *   TRIAGEM_MF_TOKEN       — value for X-MF-TOKEN header
 *
 * Set both in Vercel Project → Settings → Environment Variables.
 */

const ALLOWED_FIELDS = [
  "nome",
  "cidade",
  "fone",
  "tema",
  "doc_sn",
  "data_papel_sn",
  "origem",
  "lgpd_sn",
  "obs",
  "id_externo",
] as const;

const TEMAS = new Set(["Terra", "INSS", "Banco", "Outro"]);

const ALLOWED_ORIGINS = new Set([
  "https://marciofranca.adv.br",
  "https://www.marciofranca.adv.br",
]);

type AllowedField = (typeof ALLOWED_FIELDS)[number];

type VercelReq = {
  method?: string;
  body?: unknown;
  headers: Record<string, string | string[] | undefined>;
};

type VercelRes = {
  status: (code: number) => VercelRes;
  setHeader: (name: string, value: string) => void;
  json: (body: unknown) => void;
  end: (body?: string) => void;
};

function headerValue(
  headers: VercelReq["headers"],
  name: string,
): string | undefined {
  const key = Object.keys(headers).find(
    (k) => k.toLowerCase() === name.toLowerCase(),
  );
  if (!key) return undefined;
  const v = headers[key];
  return Array.isArray(v) ? v[0] : v;
}

function applyCors(req: VercelReq, res: VercelRes): boolean {
  const origin = headerValue(req.headers, "origin");
  if (!origin) {
    // No Origin → treat as same-origin / non-browser; allow without ACAO
    return true;
  }
  if (ALLOWED_ORIGINS.has(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type",
    );
    return true;
  }
  const host = headerValue(req.headers, "host");
  if (host) {
    try {
      const u = new URL(origin);
      if (u.host === host) {
        res.setHeader("Access-Control-Allow-Origin", origin);
        res.setHeader("Vary", "Origin");
        res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");
        return true;
      }
    } catch {
      // fall through
    }
  }
  return false;
}

function sn(value: unknown, fallback = "N"): "S" | "N" {
  const s = String(value ?? fallback)
    .trim()
    .toUpperCase();
  return s.startsWith("S") ? "S" : "N";
}

function sanitize(raw: Record<string, unknown>): {
  ok: true;
  data: Record<AllowedField, string>;
} | { ok: false; error: string; status: number } {
  const out: Partial<Record<AllowedField, string>> = {};
  for (const k of ALLOWED_FIELDS) {
    if (raw[k] !== undefined && raw[k] !== null) {
      out[k] = String(raw[k]).trim();
    }
  }

  if (!out.nome || !out.tema) {
    return { ok: false, error: "nome e tema obrigatórios", status: 400 };
  }
  if (!TEMAS.has(out.tema)) {
    return { ok: false, error: "tema inválido", status: 400 };
  }

  out.doc_sn = sn(out.doc_sn, "N");
  out.data_papel_sn = sn(out.data_papel_sn, "N");
  out.lgpd_sn = sn(out.lgpd_sn, "N");
  out.origem = out.origem || "Site";

  return { ok: true, data: out as Record<AllowedField, string> };
}

export default async function handler(req: VercelReq, res: VercelRes) {
  if (!applyCors(req, res)) {
    res.status(403).json({ ok: false, error: "origin não permitida" });
    return;
  }

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "method not allowed" });
    return;
  }

  const webhookUrl = process.env.TRIAGEM_MF_WEBHOOK_URL;
  const token = process.env.TRIAGEM_MF_TOKEN;
  if (!webhookUrl || !token) {
    res.status(503).json({
      ok: false,
      error:
        "Triagem temporariamente indisponível: configure TRIAGEM_MF_WEBHOOK_URL e TRIAGEM_MF_TOKEN no Vercel.",
    });
    return;
  }

  let body: Record<string, unknown> = {};
  try {
    if (typeof req.body === "string") {
      body = JSON.parse(req.body || "{}") as Record<string, unknown>;
    } else if (req.body && typeof req.body === "object") {
      body = req.body as Record<string, unknown>;
    }
  } catch {
    res.status(400).json({ ok: false, error: "JSON inválido" });
    return;
  }

  const cleaned = sanitize(body);
  if (!cleaned.ok) {
    res.status(cleaned.status).json({ ok: false, error: cleaned.error });
    return;
  }

  try {
    const upstream = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-MF-TOKEN": token,
      },
      body: JSON.stringify(cleaned.data),
    });

    const text = await upstream.text();
    let payload: unknown = { ok: true };
    if (text) {
      try {
        payload = JSON.parse(text);
      } catch {
        payload = { ok: upstream.ok, raw: text.slice(0, 200) };
      }
    }

    if (!upstream.ok) {
      res.status(upstream.status >= 400 && upstream.status < 600 ? upstream.status : 502).json({
        ok: false,
        error: "falha ao encaminhar triagem",
      });
      return;
    }

    // Prefer n8n body when it looks like { ok: true }; else wrap
    if (
      payload &&
      typeof payload === "object" &&
      "ok" in (payload as object)
    ) {
      res.status(200).json(payload);
      return;
    }
    res.status(200).json({ ok: true });
  } catch {
    res.status(502).json({ ok: false, error: "falha de rede ao n8n" });
  }
}
