# Migração Manus → Vercel — marciofranca.adv.br

## Diagnóstico Técnico

| Item | Valor |
|------|-------|
| Framework | Vite 7 + React 19 + TypeScript |
| Tipo de aplicação | SPA (Single Page Application) |
| Router | Wouter (client-side) |
| Build command (Vercel) | `npm run build:client` |
| Output directory | `dist/public` |
| Servidor Express | **Dispensável na Vercel** — só faz SPA fallback (`res.sendFile("index.html")`) |
| Node.js necessário em produção? | **Não** — site 100% estático após o build |

## Dependências Manus — Classificação

| Dependência | Classificação | Ação tomada |
|-------------|--------------|-------------|
| `vite-plugin-manus-runtime` | **Removível** — injetava script de runtime do Manus | Removido do `vite.config.ts` |
| `vitePluginManusDebugCollector` | **Removível** — coletava logs de debug | Removido do `vite.config.ts` |
| `vitePluginStorageProxy` | **Removível** — proxy para `/manus-storage/` (dev only) | Removido do `vite.config.ts` |
| `@builder.io/vite-plugin-jsx-loc` | **Removível** — localizador de JSX para debugging | Removido do `vite.config.ts` |
| Domínios `.manus.computer` em `allowedHosts` | **Removível** — Vercel gerencia seus próprios domínios | Removido |
| `client/public/__manus__/` | **Removível** — debug collector + version | Removido |
| `Disallow: /__manus__/` em robots.txt | **Removível** — path não existe mais | Removido |

> **Nota:** Os pacotes npm `vite-plugin-manus-runtime` e `@builder.io/vite-plugin-jsx-loc` permanecem no `package.json` como dev dependencies mas não são mais importados. Podem ser removidos com `npm uninstall` quando conveniente, mas não afetam o build.

## Imagens — AÇÃO MANUAL NECESSÁRIA

### Status: MIGRADO

Todas as referências a CloudFront e Manus foram removidas do código fonte. As imagens agora são locais:

| Arquivo | Path | Status |
|---------|------|--------|
| Logo MF | `/images/logo-mf.png` (15 KB) | ✅ Real |
| Foto terno verde | `/images/IMG_5151-opt.jpg` (33 KB) | ✅ Real |
| Foto retrato | `/images/IMG_5136-opt.jpg` (44 KB) | ✅ Real |
| Hero background | `/images/hero-bg.webp` (4 KB) | ⚠️ Placeholder (cor sólida navy) |
| Agro background | `/images/agro-bg.webp` (4 KB) | ⚠️ Placeholder (cor sólida verde) |
| OG image | `/images/og-image.webp` (1 KB) | ⚠️ Placeholder (cor sólida navy) |

### Ação recomendada (APÓS o deploy)

Os 3 placeholders funcionam (o site carrega normalmente), mas os backgrounds ficarão sem a foto real. Para substituir:

1. Obtenha as imagens originais (hero-bg, agro-bg, og-image) — do Manus ou de arquivo próprio
2. Coloque-as em `client/public/images/` mantendo os nomes exatos
3. Faça commit e push — a Vercel deploya automaticamente

## Configuração Vercel

### vercel.json (já criado)

```json
{
  "buildCommand": "npm run build:client",
  "outputDirectory": "dist/public",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

O `rewrites` garante que todas as rotas SPA (ex.: `/bpc-loas`, `/blog`) retornem `index.html` em vez de 404.

### Configuração no painel Vercel

| Campo | Valor |
|-------|-------|
| Framework Preset | Vite |
| Build Command | `npm run build:client` |
| Output Directory | `dist/public` |
| Install Command | `npm install --legacy-peer-deps` |
| Node.js Version | 20.x |

### Variáveis de ambiente (configurar no painel Vercel)

| Variável | Descrição | Obrigatória? |
|----------|-----------|-------------|
| `VITE_ANALYTICS_ENDPOINT` | URL do servidor Umami analytics | Opcional (sem ela, analytics não carrega) |
| `VITE_ANALYTICS_WEBSITE_ID` | ID do website no Umami | Opcional |

## DNS — Configuração na Hostinger

Após importar o projeto na Vercel e adicionar o domínio personalizado, configure na Hostinger:

### Para `marciofranca.adv.br` (apex domain)

| Tipo | Host | Valor | TTL |
|------|------|-------|-----|
| **A** | `@` | `76.76.21.21` | 3600 |

### Para `www.marciofranca.adv.br`

| Tipo | Host | Valor | TTL |
|------|------|-------|-----|
| **CNAME** | `www` | `cname.vercel-dns.com` | 3600 |

> **Importante:** Remova qualquer registro A ou CNAME existente para esses hosts antes de adicionar os novos. O IP `76.76.21.21` é o IP global da Vercel. Após configurar, a propagação DNS pode levar até 48 horas (geralmente menos de 1 hora).

## SEO — Preservação

| Item | Status |
|------|--------|
| `sitemap.xml` | ✅ Preservado em `client/public/sitemap.xml` → copiado para `dist/public/` |
| `robots.txt` | ✅ Preservado (removido apenas `Disallow: /__manus__/`) |
| Canonical URLs | ✅ Gerados dinamicamente via `useSeo()` — `https://marciofranca.adv.br/...` |
| Meta titles/descriptions | ✅ Dinâmicos por página |
| Open Graph | ✅ `og:title`, `og:description`, `og:image`, `og:url`, `og:locale` |
| Twitter Cards | ✅ `summary_large_image` |
| Attorney Schema | ✅ JSON-LD com `@id` |
| LegalService Schema | ✅ JSON-LD com 16 cidades, horário, endereço |
| FAQPage Schema | ✅ Em todas as landing pages + Hub Agro |
| BreadcrumbList Schema | ✅ Em todas as páginas internas |
| Geo meta tags | ✅ `geo.region=BR-AC`, coordenadas |
| Google Analytics | ⚠️ Não configurado — uses Umami (requer variáveis de ambiente) |
| Microsoft Clarity | ⚠️ Não encontrado no projeto — adicionar se necessário |
| Google Business Profile | ℹ️ Externo ao site — não afetado pela migração |

## Checklist de Migração

### Antes do deploy

- [x] ~~Baixar as 3 imagens locais do Manus~~ — **feito** (logo, fotos)
- [x] ~~Remover todas as referências CloudFront/Manus do código~~ — **feito**
- [ ] (Pós-deploy) Substituir 3 placeholders por imagens reais (hero-bg, agro-bg, og-image)
- [ ] Configurar Umami analytics (se usar) — obter `VITE_ANALYTICS_ENDPOINT` e `VITE_ANALYTICS_WEBSITE_ID`
- [ ] (Opcional) Adicionar Microsoft Clarity — colar script no `index.html`

### Deploy na Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login com GitHub
2. Clique em **"Add New Project"**
3. Importe o repositório `marcio78mf/marciofranca-advocacia`
4. Configure:
   - Framework Preset: **Vite**
   - Build Command: `npm run build:client`
   - Output Directory: `dist/public`
   - Install Command: `npm install --legacy-peer-deps`
5. Adicione as variáveis de ambiente (se aplicável)
6. Clique em **Deploy**
7. Aguarde o build completar
8. Teste no domínio `.vercel.app` gerado automaticamente

### Após deploy bem-sucedido

- [ ] Testar todas as rotas no domínio `.vercel.app`
- [ ] Verificar que imagens carregam
- [ ] Verificar WhatsApp links
- [ ] Adicionar domínio personalizado no painel da Vercel: `marciofranca.adv.br`
- [ ] Adicionar domínio: `www.marciofranca.adv.br`
- [ ] Configurar DNS na Hostinger (A record + CNAME conforme acima)
- [ ] Aguardar propagação DNS
- [ ] Verificar HTTPS (Vercel provisiona certificado automaticamente)
- [ ] Testar acesso via `https://marciofranca.adv.br`
- [ ] Validar schemas via [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Validar sitemap via [Google Search Console](https://search.google.com/search-console)

## Fluxo de Deploy Automático

Após configuração:

```
push na branch main
       ↓
Vercel detecta automaticamente
       ↓
Executa: npm install --legacy-peer-deps
       ↓
Executa: npm run build:client
       ↓
Publica dist/public/ no edge global
       ↓
Site atualizado em ~60 segundos
```

Preview deploys: cada branch/PR gera uma URL de preview automática.

## Riscos

| Risco | Severidade | Mitigação |
|-------|-----------|-----------|
| 3 backgrounds são placeholder (cor sólida) | **MÉDIA** | Substituir pelas fotos reais quando disponíveis |
| Umami analytics sem configuração | **BAIXA** | Site funciona sem — adicionar variáveis quando disponíveis |
| Peer dependency warnings no install | **BAIXA** | `--legacy-peer-deps` resolve; não afeta o build |

## Plano de Rollback

Se a Vercel apresentar problemas:

1. **DNS**: Reverter os registros na Hostinger para apontar para o IP/CNAME do Manus original
2. **Manus**: Manter o projeto ativo no Manus por pelo menos 30 dias após a migração
3. **Código**: O branch `main` continua funcional no Manus — basta fazer `npm run build && npm run start`
4. **Tempo de rollback**: ~1-5 minutos (alteração DNS) + propagação (~1h)

## Pendências

| Pendência | Prioridade | Responsável |
|-----------|-----------|-------------|
| Substituir placeholder hero-bg.webp pela foto real | **MÉDIA** | Você |
| Substituir placeholder agro-bg.webp pela foto real | **MÉDIA** | Você |
| Substituir placeholder og-image.webp pela foto real | **MÉDIA** | Você |
| Configurar Umami ou Google Analytics na Vercel | **MÉDIA** | Você |
| Adicionar Microsoft Clarity (se desejado) | **BAIXA** | Você |
| Remover pacotes npm não utilizados do Manus | **BAIXA** | Opcional |
