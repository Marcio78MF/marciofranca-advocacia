# Walkthrough — Fase 5: Autoridade, SEO e Conversão

## Alterações Realizadas

### ETAPA 0 — Ajuste do Hero (Home)
- **Arquivo:** `client/src/pages/Home.tsx`
- Substituído texto institucional genérico por copy focado na identificação do visitante
- Novo H1: "Você não precisa enfrentar sozinho um benefício negado, descontos bancários indevidos, problemas rurais ou conflitos que exigem proteção jurídica."
- Subtítulo: "Atuação estratégica e personalizada nas áreas previdenciária, bancária, rural, familiar e criminal."
- Fonte reduzida de `text-[3.4rem]` para `text-[2.8rem]` — compacto e elegante em desktop e mobile
- CTA final atualizado: "Seu direito não pode esperar. Fale com quem entende."

### ETAPA 1 — Auditoria de Conteúdo (Relatório)

| Página | Força | Potencial SEO | Potencial Conversão | Ação |
|--------|-------|---------------|---------------------|------|
| `/bpc-loas` | Alta | Alto (long-tail INSS) | Alto | Expandida ✅ |
| `/aposentadoria-rural` | Alta | Alto (segurado especial Acre) | Alto | Expandida ✅ |
| `/consignado-indevido` | Alta | Alto (bancário) | Alto | Expandida ✅ |
| `/energisa` | Alta | Alto (consumidor local) | Alto | Expandida ✅ |
| `/familia` | Média | Médio | Médio | Expandida ✅ |
| `/criminal` | Média | Médio | Alto (urgência) | Expandida ✅ |
| `/regularizacao-fundiaria` | Alta | Alto (agro Amazônia) | Alto | Expandida ✅ |
| `/ambiental-rural` | Alta | Alto (IBAMA/SEMA) | Alto | Expandida ✅ |
| `/agro` | Alta | Alto (hub) | Alto | Expandida ✅ |
| `/blog` | Média | Médio | Baixo | Manter e expandir |
| `/diagnostico` | Alta | Baixo | Alto | Manter |
| `/sobre` | Média | Médio | Baixo | Manter |

### ETAPA 2 — Expansão das Landing Pages
- **Arquivo:** `client/src/lib/site.ts` — cada área agora contém:
  - `problema`: parágrafo descrevendo o problema enfrentado pelo cliente (SEO + empatia)
  - `quandoProcurar`: 5-7 situações em que procurar advogado
  - `documentos`: 6-8 documentos necessários
  - `situacoes`: 3-4 casos mais comuns com título e descrição
  - `ctaTexto`: CTA personalizado por área
  - `ctaWhatsapp`: mensagem de WhatsApp personalizada
  - FAQs expandidas (5-6 perguntas por área, incluindo SEO local)
  - `beneficios` e `paraQuem` ampliados

- **Arquivo:** `client/src/pages/AreaPage.tsx` — template completamente reescrito:
  - Nova seção "O problema" (contextualização)
  - Nova seção "Quando procurar um advogado" (com ícones)
  - Nova seção "Documentos necessários" (checklist)
  - Nova seção "Situações mais comuns" (cards 2x2)
  - CTA intermediário personalizado entre seções
  - CTA final personalizado com texto da área
  - Seção SeoLocal integrada
  - CTAs do hero personalizados por área (não mais genéricos)

### ETAPA 3 — SEO Local
- **Novo componente:** `client/src/components/SeoLocal.tsx`
  - Seção reutilizável "Atendemos clientes em todo o Acre"
  - 16 municípios listados como badges: Rio Branco, Cruzeiro do Sul, Sena Madureira, Tarauacá, Feijó, Brasiléia, Epitaciolândia, Xapuri, Bujari, Porto Acre, Acrelândia, Plácido de Castro, Assis Brasil, Mâncio Lima, Rodrigues Alves, Capixaba
  - Integrado na Home, em todas as landing pages de área e no Hub Agro
  - Menções naturais a cidades do Acre nos textos de FAQ e problema de cada área

### ETAPA 4 — Hub Agro
- **Arquivo:** `client/src/pages/Agro.tsx`
  - Nova seção "Temas especializados" com 9 cards temáticos:
    1. Regularização Fundiária
    2. CAR — Cadastro Ambiental Rural
    3. Reserva Legal e APP
    4. PRA — Programa de Regularização Ambiental
    5. Georreferenciamento
    6. SEMA — Defesa Administrativa
    7. IBAMA — Defesa em Embargos
    8. Licenciamento Ambiental
    9. Produtor Rural — Direitos e Obrigações
  - Seção SeoLocal integrada
  - Links internos entre áreas agro

### ETAPA 5 — Provas de Autoridade
- **Arquivo:** `client/src/components/Authority.tsx`
  - Atualizado "Brasil" → "Todo o Acre" (SEO local)
  - Atualizado "Perfil verificado da Empresa" → "avaliações reais verificadas"
  - Componente reutilizável já presente em Home e demais páginas via Layout

### ETAPA 6 — Conversão
- **CTAs personalizados por área** (não mais genéricos):
  - BPC/LOAS: "Seu benefício foi negado? Envie sua documentação para análise."
  - Aposentadoria Rural: "Trabalhou no campo e quer se aposentar? Avaliamos seus documentos."
  - Consignado: "Recebeu uma cobrança indevida? Entenda quais medidas podem ser avaliadas."
  - Energisa: "Conta de energia abusiva? Veja se você tem direito à revisão."
  - Família: "Precisa resolver uma questão familiar? Converse com sigilo e orientação."
  - Criminal: "Precisa de defesa criminal urgente? O tempo conta. Fale agora."
  - Regularização: "Sua terra precisa de regularização? Faça um diagnóstico fundiário."
  - Ambiental: "Autuado pelo IBAMA ou SEMA? Avaliamos sua defesa administrativa."
- **Mensagens de WhatsApp personalizadas** por área
- **CTA intermediário** entre seções nas landing pages
- **CtaButtons** atualizado para aceitar `wppLabel` e `wppMsg` customizados

### ETAPA 7 — FAQ e Schema
- **Arquivo:** `client/src/lib/seo.ts`
  - Schema Attorney separado com `@id` para JSON-LD referencing
  - Schema LegalService completo com:
    - `areaServed` incluindo todas as 16 cidades do Acre
    - `openingHoursSpecification`
    - `knowsAbout` expandido com "Direito do Agronegócio"
  - FAQ Schema já implementado em todas as landing pages
  - Breadcrumb Schema em todas as páginas internas
- Cada landing page injeta: LegalService + FAQ + Breadcrumb schemas

### ETAPA 8 — SEO Técnico
- **Sitemap:** `client/public/sitemap.xml`
  - Páginas de área atualizadas com `changefreq="weekly"` (conteúdo dinâmico)
  - Comentários organizacionais adicionados
- **Robots.txt:** `client/public/robots.txt`
  - Adicionado `Disallow: /__manus__/` (debug files)
- **Headings:** Hierarquia H1→H2→H3 validada em todas as páginas
- **Links internos:** Páginas de área linkam entre si (seção "Áreas relacionadas"), Hub Agro linka para todas as áreas agro, FAQ inclui menções a cidades
- **Acessibilidade:** Todos os CTAs com aria-labels, ícones com `aria-hidden`, contraste WCAG mantido

## Arquivos Modificados

| Arquivo | Tipo |
|---------|------|
| `client/src/pages/Home.tsx` | Modificado |
| `client/src/pages/AreaPage.tsx` | Reescrito |
| `client/src/pages/Agro.tsx` | Modificado |
| `client/src/lib/site.ts` | Expandido significativamente |
| `client/src/lib/seo.ts` | Schemas reescritos |
| `client/src/components/Authority.tsx` | Modificado |
| `client/src/components/Bits.tsx` | Modificado |
| `client/src/components/SeoLocal.tsx` | Novo |
| `client/public/sitemap.xml` | Atualizado |
| `client/public/robots.txt` | Atualizado |

## Oportunidades Futuras

1. **Blog editorial**: Criar 2-4 artigos/mês focados em long-tail keywords (ex: "aposentadoria rural segurado especial Acre", "embargo IBAMA defesa Acre")
2. **Google Business Profile**: Otimizar perfil com todas as áreas de atuação e solicitar avaliações de clientes
3. **Páginas satélite Agro**: Criar páginas individuais para cada tema do Hub (CAR, PRA, Reserva Legal, etc.)
4. **Conteúdo dinâmico**: Integrar blog com landing pages (posts relacionados por área)
5. **Performance**: Implementar SSR/SSG para melhorar Core Web Vitals e indexação
6. **Link building**: Parcerias com sindicatos rurais, associações e portais jurídicos do Acre
7. **Calendário editorial Agro**: Conteúdo sazonal (safra, prazos CAR, convocações INCRA)

## Estimativa de Impacto Orgânico

| Métrica | 30 dias | 90 dias | 12 meses |
|---------|---------|---------|----------|
| Impressões orgânicas | +30-50% | +80-120% | +200-400% |
| Cliques orgânicos | +20-35% | +60-90% | +150-300% |
| Posições top 10 (Acre) | 3-5 palavras-chave | 10-15 palavras-chave | 25-40 palavras-chave |
| Conversões WhatsApp | +15-25% | +40-60% | +100-180% |

### Roadmap de Tráfego

**Próximos 30 dias:**
- Indexar novas páginas expandidas no Google Search Console
- Otimizar Google Business Profile
- Publicar 2 artigos no blog (long-tail)
- Monitorar Core Web Vitals

**Próximos 90 dias:**
- Criar páginas satélite do Hub Agro (CAR, PRA, IBAMA)
- Publicar 6-8 artigos focados em SEO local
- Implementar Google Analytics 4 e eventos de conversão
- Buscar backlinks de portais jurídicos e associações do Acre

**Próximos 12 meses:**
- Dominar buscas locais em todas as áreas de atuação no Acre
- Hub Agro como referência em direito rural na Amazônia Legal
- 30+ artigos no blog cobrindo todas as long-tail keywords
- Implementar SSR para performance máxima
- Explorar Google Ads para palavras-chave de alta conversão

---

*Todas as alterações mantêm conformidade com o Provimento 205/2021 da OAB: sem depoimentos inventados, sem promessas de resultado, sem captação indevida de clientela. Conteúdo informativo com disclaimers apropriados.*
