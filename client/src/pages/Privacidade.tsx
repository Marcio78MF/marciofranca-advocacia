/* PRIVACIDADE — política mínima LGPD (informativa). */
import { Shield, Mail, MessageCircle, Eye, Cookie, Scale } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Eyebrow } from "@/components/Bits";
import { FIRM, whatsapp } from "@/lib/site";
import { useSeo, legalServiceSchema, breadcrumbSchema } from "@/lib/seo";

const PRIVACY_EMAIL = "marciosantosfranca@gmail.com";

export default function Privacidade() {
  useSeo({
    title: `Política de Privacidade | ${FIRM.nome}`,
    description:
      "Como o escritório Márcio França Advocacia trata dados pessoais no site, no diagnóstico jurídico, no WhatsApp e na análise de audiência, em conformidade com a LGPD.",
    path: "/privacidade",
    jsonLd: [
      legalServiceSchema,
      breadcrumbSchema([
        { name: "Início", path: "/" },
        { name: "Privacidade", path: "/privacidade" },
      ]),
    ],
  });

  return (
    <Layout>
      <section className="relative overflow-hidden bg-navy pt-32 pb-16 text-white lg:pt-40">
        <div className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.05]" />
        <div className="container relative max-w-3xl">
          <Eyebrow className="text-white/70">LGPD · Lei 13.709/2018</Eyebrow>
          <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight text-balance sm:text-5xl">
            Política de Privacidade
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/75 text-pretty">
            Este texto explica, de forma objetiva, quais dados podem ser tratados quando você
            navega no site, preenche o diagnóstico jurídico ou entra em contato pelo WhatsApp —
            e como exercer seus direitos.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-20">
        <div className="container max-w-3xl space-y-12">
          <article className="reveal space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/8 text-primary">
                <Shield className="h-5 w-5" />
              </div>
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                Controlador dos dados
              </h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">
              O controlador é o escritório <strong className="text-foreground">{FIRM.nome}</strong>,
              representado por {FIRM.advogado} ({FIRM.oab}), com sede em {FIRM.endereco},{" "}
              {FIRM.bairro}, {FIRM.cidade}/{FIRM.uf}, CEP {FIRM.cep}. Site:{" "}
              <a
                href={FIRM.site}
                className="text-primary underline-offset-2 hover:underline"
              >
                {FIRM.site.replace(/^https?:\/\//, "")}
              </a>
              .
            </p>
          </article>

          <article className="reveal space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/8 text-primary">
                <Eye className="h-5 w-5" />
              </div>
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                Quais dados e para quê
              </h2>
            </div>
            <ul className="list-disc space-y-3 pl-5 text-base leading-relaxed text-muted-foreground">
              <li>
                <strong className="text-foreground">Formulário de diagnóstico jurídico:</strong>{" "}
                nome, WhatsApp e respostas sobre a situação narrada — usados apenas para triagem
                inicial e para montar o resumo que você envia ao escritório.
              </li>
              <li>
                <strong className="text-foreground">WhatsApp e telefone:</strong> dados que você
                informar na conversa (identificação, fatos do caso, documentos enviados) — usados
                para atendimento, análise jurídica e comunicação sobre o acompanhamento.
              </li>
              <li>
                <strong className="text-foreground">Navegação e análise de audiência:</strong>{" "}
                quando configurado, o site utiliza ferramenta de analytics (Umami) para estatísticas
                agregadas de visitas (páginas vistas, origem aproximada). Trata-se de medição de
                audiência, não de publicidade comportamental.
              </li>
            </ul>
            <p className="text-base leading-relaxed text-muted-foreground">
              Bases legais típicas: execução de diligências preliminares a pedido do titular
              (contato/triagem), legítimo interesse na segurança e melhoria do site, e cumprimento
              de obrigações legais ou regulatórias quando couber.
            </p>
          </article>

          <article className="reveal space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/8 text-primary">
                <Cookie className="h-5 w-5" />
              </div>
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                Cookies e tecnologias semelhantes
              </h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">
              O site não utiliza cookies de marketing ou remarketing. A análise de audiência
              (Umami), quando ativa, é configurada de modo a priorizar estatísticas agregadas e
              evitar identificação desnecessária. O navegador pode ainda armazenar dados técnicos
              próprios (por exemplo, preferência de tema) apenas no seu dispositivo.
            </p>
          </article>

          <article className="reveal space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/8 text-primary">
                <MessageCircle className="h-5 w-5" />
              </div>
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                Compartilhamento
              </h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">
              Dados de contato e do caso não são vendidos. Podem ser tratados por prestadores
              estritamente necessários à operação (hospedagem do site, provedor de WhatsApp/Meta,
              ferramenta de analytics) e, quando a atuação exigir, por correspondentes ou
              profissionais sob dever de confidencialidade. Autoridades públicas somente mediante
              obrigação legal ou ordem válida.
            </p>
          </article>

          <article className="reveal space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/8 text-primary">
                <Scale className="h-5 w-5" />
              </div>
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                Seus direitos (LGPD)
              </h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">
              Você pode solicitar confirmação de tratamento, acesso, correção, anonimização,
              portabilidade, eliminação de dados desnecessários, informação sobre compartilhamentos
              e revogação de consentimento, quando aplicável — nos termos dos arts. 18 e seguintes
              da LGPD. Responderemos pelo canal de contato abaixo, no prazo razoável previsto na
              legislação.
            </p>
          </article>

          <article className="reveal space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/8 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                Como falar sobre privacidade
              </h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">
              E-mail:{" "}
              <a
                href={`mailto:${PRIVACY_EMAIL}`}
                className="text-primary underline-offset-2 hover:underline"
              >
                {PRIVACY_EMAIL}
              </a>
              <br />
              WhatsApp:{" "}
              <a
                href={whatsapp(
                  "Olá, gostaria de exercer um direito ou esclarecer dúvida sobre privacidade/LGPD."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline-offset-2 hover:underline"
              >
                {FIRM.telefoneFmt}
              </a>
              <br />
              Endereço: {FIRM.enderecoCompleto}.
            </p>
          </article>

          <p className="reveal border-t border-border pt-8 text-sm leading-relaxed text-muted-foreground">
            Conteúdo informativo · {FIRM.advogado} · {FIRM.oab} · não substitui consulta. Em
            conformidade com o Provimento 205/2021 da OAB e a LGPD (Lei 13.709/2018). Esta página
            pode ser atualizada para refletir mudanças no site ou na legislação; a versão vigente é
            a publicada neste endereço.
          </p>
        </div>
      </section>
    </Layout>
  );
}
