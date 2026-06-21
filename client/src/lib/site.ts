/* Dados centrais do site Márcio França Advocacia */

export const ASSETS = {
  logo: "/manus-storage/logo-mf_a29e7663.png",
  fotoVerde: "/manus-storage/IMG_5151-opt_0b52805e.jpg", // terno verde, corpo
  fotoRetrato: "/manus-storage/IMG_5136-opt_ce8e6fa7.jpg", // retrato terno azul
  heroBg: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028326121/eBp8cXACY4aYoeuz5UG4H2/hero-bg-ka6KpLDXevyJDUn5aQ5w7b.webp",
  agroBg: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028326121/eBp8cXACY4aYoeuz5UG4H2/agro-bg-T5dp3ibmHMZ26Vnuy47sZb.webp",
  pattern: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028326121/eBp8cXACY4aYoeuz5UG4H2/pattern-mf-K88xQbaetoBzGpuN4iv3Zh.webp",
  escritorio: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028326121/eBp8cXACY4aYoeuz5UG4H2/escritorio-detalhe-DYH8Fq7JvuhSuEQwrPJiwZ.webp",
  ogImage: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028326121/eBp8cXACY4aYoeuz5UG4H2/og-image-M5iZVmQAhaex4b73SMLKKB.webp",
};

export const FIRM = {
  nome: "Márcio França Advocacia",
  advogado: "Dr. Márcio França",
  oab: "OAB/AC 2882",
  cidade: "Rio Branco",
  uf: "AC",
  localizacao: "Rio Branco — Acre",
  anos: "15",
  telefoneRaw: "5568999511555",
  telefoneFmt: "(68) 99951-1555",
  instagram: "marcio4dv",
  instagramUrl: "https://instagram.com/marcio4dv",
  googleBusiness: "Advocacia Dr. Márcio França",
  posicionamento: "Atuação estratégica, técnica e personalizada.",
  endereco: "Av. Epaminondas Jácome, nº 2172",
  bairro: "Cerâmica",
  cep: "69905-076",
  enderecoCompleto: "Av. Epaminondas Jácome, nº 2172, Cerâmica, Rio Branco/AC, CEP 69905-076",
  mapsEmbed:
    "https://maps.google.com/maps?q=Av.%20Epaminondas%20J%C3%A1come%2C%202172%2C%20Cer%C3%A2mica%2C%20Rio%20Branco%20-%20AC&t=&z=16&ie=UTF8&iwloc=&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Av.%20Epaminondas%20J%C3%A1come%2C%202172%2C%20Cer%C3%A2mica%2C%20Rio%20Branco%20-%20AC%2C%2069905-076",
  reviewsLink: "https://www.google.com/search?q=Advocacia+Dr.+M%C3%A1rcio+Fran%C3%A7a",
  site: "https://marciofranca.adv.br",
};

const WPP_BASE = `https://wa.me/${FIRM.telefoneRaw}`;
export function whatsapp(msg?: string) {
  const m = msg ?? "Olá, vim pelo site e gostaria de uma análise do meu caso.";
  return `${WPP_BASE}?text=${encodeURIComponent(m)}`;
}

export type Area = {
  slug: string;
  titulo: string;
  curto: string;
  icone: string; // lucide icon name
  categoria: "Previdenciário" | "Bancário" | "Consumidor" | "Família" | "Criminal" | "Agro";
  resumo: string;
  beneficios: string[];
  paraQuem: string[];
  fundamentos: { titulo: string; texto: string }[];
  comoFunciona: string[];
  faq: { q: string; a: string }[];
  agro?: boolean;
  destaque?: boolean;
};

export const AREAS: Area[] = [
  {
    slug: "bpc-loas",
    titulo: "BPC/LOAS",
    curto: "Benefício de Prestação Continuada",
    icone: "HeartHandshake",
    categoria: "Previdenciário",
    destaque: true,
    resumo:
      "O Benefício de Prestação Continuada (BPC/LOAS) garante um salário mínimo mensal à pessoa idosa (65 anos ou mais) ou à pessoa com deficiência que comprove não possuir meios de prover a própria manutenção. É um direito assistencial, não exige contribuição prévia ao INSS.",
    beneficios: [
      "Análise do critério de renda (1/4 do salário mínimo per capita) e das hipóteses de flexibilização reconhecidas pelo STF",
      "Avaliação social e médica (perícia) para deficiência, com estratégia documental",
      "Recurso administrativo e ação judicial em caso de indeferimento indevido",
    ],
    paraQuem: ["Idosos com 65 anos ou mais", "Pessoas com deficiência", "Famílias de baixa renda"],
    fundamentos: [
      { titulo: "Base legal", texto: "Art. 203, V, da CF/88 e Lei nº 8.742/93 (LOAS), regulamentada pelo Decreto nº 6.214/2007." },
      { titulo: "Critério de renda", texto: "O STF (RE 567.985 e RE 580.963) admitiu a flexibilização do critério de 1/4 do salário mínimo per capita diante do caso concreto, permitindo prova da miserabilidade por outros meios." },
      { titulo: "Estratégia", texto: "A instrução probatória robusta — laudos, estudo social e documentação de despesas — é decisiva para a concessão administrativa ou judicial." },
    ],
    comoFunciona: [
      "Conte seu caso e enviamos a lista de documentos necessários",
      "Avaliamos o critério de renda e o enquadramento (idoso ou deficiência)",
      "Requerimento administrativo ou ação judicial conforme a estratégia",
      "Acompanhamento de perícia, recursos e implantação do benefício",
    ],
    faq: [
      { q: "Preciso ter contribuído ao INSS para receber o BPC/LOAS?", a: "Não. O BPC/LOAS é um benefício assistencial previsto na Constituição e na LOAS (Lei 8.742/93), independente de contribuição prévia. Exige apenas o enquadramento como idoso (65+) ou pessoa com deficiência e a comprovação da hipossuficiência econômica." },
      { q: "Minha renda familiar é um pouco acima de 1/4 do salário mínimo. Posso receber?", a: "Pode ser possível. O STF reconheceu que o critério de 1/4 do salário mínimo per capita não é absoluto, admitindo a comprovação da miserabilidade por outros meios, como despesas com saúde e medicamentos. A análise do caso concreto é essencial." },
      { q: "Meu pedido foi negado pelo INSS. O que fazer?", a: "O indeferimento administrativo não encerra o direito. É possível recorrer administrativamente e, principalmente, ajuizar ação judicial, frequentemente com reanálise pericial e produção de prova social qualificada." },
    ],
  },
  {
    slug: "aposentadoria-rural",
    titulo: "Aposentadoria Rural",
    curto: "Trabalhador rural e segurado especial",
    icone: "Wheat",
    categoria: "Previdenciário",
    destaque: true,
    agro: true,
    resumo:
      "A aposentadoria rural por idade é devida ao trabalhador rural — inclusive o segurado especial (agricultor familiar, em regime de economia familiar) — que comprove o exercício de atividade rural pelo período exigido em lei, com idade reduzida (60 anos para homens e 55 para mulheres).",
    beneficios: [
      "Reconstrução da prova material e testemunhal do labor rural",
      "Enquadramento como segurado especial e contagem de período de carência",
      "Atuação administrativa e judicial, inclusive Juizados Especiais Federais",
    ],
    paraQuem: ["Trabalhadores rurais", "Agricultores familiares (segurado especial)", "Pescadores artesanais e extrativistas"],
    fundamentos: [
      { titulo: "Base legal", texto: "Arts. 39, 48 e 143 da Lei nº 8.213/91 e art. 195, §8º, da CF/88, que define o segurado especial." },
      { titulo: "Prova", texto: "A jurisprudência do STJ (Súmula 149) exige início de prova material, complementada por prova testemunhal idônea; documentos como contratos de parceria, notas de produtor e cadastros são fundamentais." },
      { titulo: "Estratégia", texto: "A organização cronológica das provas e a coerência entre documentos e testemunhos definem o êxito do pedido." },
    ],
    comoFunciona: [
      "Levantamento da vida laboral rural e dos documentos disponíveis",
      "Organização do início de prova material e indicação de testemunhas",
      "Requerimento administrativo ou ação judicial",
      "Acompanhamento até a concessão e implantação do benefício",
    ],
    faq: [
      { q: "Qual a idade mínima para a aposentadoria rural por idade?", a: "60 anos para homens e 55 anos para mulheres, com comprovação do exercício de atividade rural pelo período de carência exigido (em regra, equivalente em meses ao número de contribuições exigidas)." },
      { q: "Não tenho carteira assinada. Consigo comprovar o trabalho rural?", a: "Sim. O trabalho rural, especialmente o do segurado especial, é comprovado por início de prova material (documentos) complementado por prova testemunhal, conforme a Súmula 149 do STJ. Reunimos e organizamos essa documentação com estratégia." },
      { q: "O segurado especial precisa contribuir mensalmente?", a: "Em regra, não. O segurado especial em regime de economia familiar tem tratamento previdenciário diferenciado pela Constituição (art. 195, §8º), com contribuição sobre a comercialização da produção." },
    ],
  },
  {
    slug: "consignado-indevido",
    titulo: "Consignado Indevido",
    curto: "Empréstimo e cartão consignado, RMC",
    icone: "Landmark",
    categoria: "Bancário",
    destaque: true,
    resumo:
      "Descontos indevidos em benefícios e salários por empréstimos consignados não contratados, cartão consignado (RMC/RCC) disfarçado de empréstimo e cobranças abusivas são passíveis de revisão, suspensão dos descontos e devolução dos valores, muitas vezes em dobro.",
    beneficios: [
      "Suspensão dos descontos e bloqueio de novas contratações fraudulentas",
      "Revisão de contratos com juros abusivos e cobrança de RMC indevida",
      "Pedido de restituição (eventualmente em dobro) e indenização por danos morais",
    ],
    paraQuem: ["Aposentados e pensionistas do INSS", "Servidores públicos", "Pensionistas com descontos não reconhecidos"],
    fundamentos: [
      { titulo: "Base legal", texto: "Código de Defesa do Consumidor (Lei 8.078/90), em especial arts. 42, parágrafo único, e 46; arts. 186 e 927 do Código Civil para a reparação civil." },
      { titulo: "Cartão RMC", texto: "O STJ tem reconhecido a abusividade da contratação de Reserva de Margem Consignável (RMC) quando o consumidor pretendia empréstimo comum, autorizando a reconversão e a restituição dos valores." },
      { titulo: "Devolução em dobro", texto: "A cobrança indevida pode ensejar repetição em dobro (art. 42, parágrafo único, do CDC), conforme entendimento consolidado no EAREsp 676.608/RS." },
    ],
    comoFunciona: [
      "Análise do extrato de empréstimos (HISCON/INSS) e dos contratos",
      "Identificação de descontos não reconhecidos e cláusulas abusivas",
      "Pedido administrativo e/ou ação judicial com tutela de urgência",
      "Acompanhamento da suspensão, restituição e eventual indenização",
    ],
    faq: [
      { q: "Estão descontando um empréstimo que eu não fiz. O que fazer?", a: "É possível ajuizar ação para declarar a inexistência do débito, suspender os descontos por tutela de urgência e pleitear a restituição dos valores, além de indenização por danos morais quando configurada a fraude." },
      { q: "Contratei um empréstimo, mas virou 'cartão consignado' (RMC). Isso é legal?", a: "Frequentemente não. Quando o consumidor pretendia um empréstimo comum e foi inserido em um cartão com Reserva de Margem Consignável, o STJ admite a revisão, a reconversão para empréstimo e a devolução de valores cobrados a maior." },
      { q: "Posso receber os valores descontados de volta?", a: "Sim. A depender do caso, a restituição pode ocorrer de forma simples ou em dobro (art. 42, parágrafo único, do CDC), além de eventual indenização por danos morais." },
    ],
  },
  {
    slug: "energisa",
    titulo: "Energisa",
    curto: "Cobranças e cortes indevidos de energia",
    icone: "Zap",
    categoria: "Consumidor",
    destaque: true,
    resumo:
      "Faturas com valores incompatíveis com o consumo, cobrança de recuperação de consumo (TOI) sem o devido processo, negativação indevida e corte abusivo de energia são situações que podem ser questionadas judicialmente, com pedido de revisão da dívida e indenização.",
    beneficios: [
      "Contestação de faturas e de cobranças por recuperação de consumo (TOI)",
      "Pedido de religação e proibição de corte do serviço essencial",
      "Reparação por negativação indevida e danos morais",
    ],
    paraQuem: ["Consumidores residenciais", "Pequenos comércios e produtores rurais", "Quem teve o nome negativado pela concessionária"],
    fundamentos: [
      { titulo: "Base legal", texto: "CDC (Lei 8.078/90), Lei nº 8.987/95 (concessões) e Resolução Normativa ANEEL nº 1.000/2021." },
      { titulo: "Corte de energia", texto: "O STJ entende que o corte por débitos pretéritos e consolidados, especialmente os apurados unilateralmente, é ilegítimo, por se tratar de serviço essencial (art. 22 do CDC)." },
      { titulo: "Recuperação de consumo", texto: "A cobrança baseada em TOI exige observância do devido processo e prova técnica idônea; a apuração unilateral tem sido afastada pelos Tribunais." },
    ],
    comoFunciona: [
      "Análise das faturas, do histórico de consumo e do TOI (se houver)",
      "Identificação de cobranças e cortes indevidos",
      "Ação judicial com pedido de tutela de urgência (religação/abstenção de corte)",
      "Acompanhamento da revisão da dívida e da indenização",
    ],
    faq: [
      { q: "Recebi uma fatura muito acima do normal. Posso contestar?", a: "Sim. É possível discutir judicialmente a fatura incompatível com o histórico de consumo, especialmente quando há cobrança de recuperação de consumo (TOI) apurada unilateralmente, sem prova técnica idônea." },
      { q: "Posso ter a energia cortada por uma dívida antiga?", a: "O STJ considera ilegítimo o corte por débitos pretéritos e consolidados, por se tratar de serviço essencial. O corte como meio de cobrança de dívidas antigas é abusivo." },
      { q: "Meu nome foi negativado pela concessionária. Tenho direito a indenização?", a: "Se a negativação for indevida — por dívida questionável ou inexistente — é possível pleitear a retirada do nome dos cadastros e indenização por danos morais." },
    ],
  },
  {
    slug: "familia",
    titulo: "Família",
    curto: "Divórcio, guarda, alimentos, inventário",
    icone: "Users",
    categoria: "Família",
    resumo:
      "Atuação em direito de família e sucessões com sensibilidade e técnica: divórcio (consensual ou litigioso), guarda e convivência, pensão alimentícia, partilha de bens e inventário, sempre buscando soluções economicamente inteligentes e a preservação das relações quando possível.",
    beneficios: [
      "Divórcio consensual e litigioso, com partilha de bens",
      "Guarda, regulamentação de convivência e fixação/revisão de alimentos",
      "Inventário e partilha (judicial ou extrajudicial)",
    ],
    paraQuem: ["Cônjuges e companheiros", "Pais e responsáveis", "Herdeiros e familiares"],
    fundamentos: [
      { titulo: "Base legal", texto: "Código Civil (Lei 10.406/2002), arts. 1.511 e seguintes, e CPC/2015 para os procedimentos." },
      { titulo: "Alimentos", texto: "A fixação observa o binômio necessidade x possibilidade (art. 1.694 do CC), admitindo revisão diante da mudança das circunstâncias." },
      { titulo: "Estratégia", texto: "Privilegiamos a via consensual e extrajudicial quando viável, reduzindo custos e desgaste emocional, sem abrir mão da defesa técnica em litígios." },
    ],
    comoFunciona: [
      "Conte sua situação familiar com confidencialidade",
      "Avaliamos a melhor via (consensual, extrajudicial ou litigiosa)",
      "Elaboração de acordos ou propositura da ação",
      "Acompanhamento até a solução definitiva",
    ],
    faq: [
      { q: "É possível fazer divórcio sem brigar na Justiça?", a: "Sim. O divórcio consensual pode ser feito de forma rápida, inclusive extrajudicial (em cartório) quando não há filhos menores ou incapazes e há acordo sobre os termos. É mais econômico e menos desgastante." },
      { q: "Como é definido o valor da pensão alimentícia?", a: "Pelo binômio necessidade de quem recebe e possibilidade de quem paga (art. 1.694 do CC). O valor pode ser revisado quando há alteração relevante na situação financeira ou nas necessidades." },
      { q: "Posso fazer o inventário fora da Justiça?", a: "Sim, por escritura pública, quando todos os herdeiros são maiores, capazes e estão de acordo, e não há testamento. É um caminho mais célere do que o inventário judicial." },
    ],
  },
  {
    slug: "criminal",
    titulo: "Criminal",
    curto: "Flagrante, custódia e defesa criminal",
    icone: "Scale",
    categoria: "Criminal",
    resumo:
      "Defesa criminal técnica e tempestiva em todas as fases: atuação imediata em prisão em flagrante e audiência de custódia, pedidos de liberdade e relaxamento de prisão, defesa em inquéritos e ações penais, com estrita observância às garantias constitucionais.",
    beneficios: [
      "Atuação urgente em flagrante e audiência de custódia",
      "Pedidos de liberdade provisória, relaxamento e revogação de prisão",
      "Defesa técnica em inquéritos e ações penais",
    ],
    paraQuem: ["Investigados e acusados", "Familiares de presos", "Quem busca defesa preventiva"],
    fundamentos: [
      { titulo: "Base legal", texto: "Constituição Federal (art. 5º, incisos sobre garantias penais e processuais), Código Penal e Código de Processo Penal." },
      { titulo: "Audiência de custódia", texto: "A apresentação do preso à autoridade judicial (art. 310 do CPP e jurisprudência do STF) é momento decisivo para avaliar a legalidade da prisão e pleitear a liberdade." },
      { titulo: "Estratégia", texto: "A atuação nas primeiras horas é determinante; a análise do auto de prisão e das provas orienta a tese defensiva." },
    ],
    comoFunciona: [
      "Contato imediato em caso de prisão ou intimação",
      "Análise do auto de prisão / inquérito e das provas",
      "Atuação na custódia e formulação dos pedidos cabíveis",
      "Defesa técnica ao longo de todo o processo",
    ],
    faq: [
      { q: "Um familiar foi preso em flagrante. O que devo fazer?", a: "Buscar defesa o quanto antes. A atuação nas primeiras horas — antes e durante a audiência de custódia — é decisiva para avaliar a legalidade da prisão e pleitear liberdade provisória, relaxamento ou medidas cautelares diversas da prisão." },
      { q: "O que é audiência de custódia?", a: "É a apresentação da pessoa presa a um juiz, em curto prazo, para verificar a legalidade e a necessidade da prisão (art. 310 do CPP). É um momento estratégico para a defesa." },
      { q: "Vale a pena ter advogado já na fase de investigação?", a: "Sim. A atuação preventiva no inquérito permite acompanhar as diligências, garantir direitos do investigado e construir a estratégia de defesa desde o início." },
    ],
  },
  {
    slug: "regularizacao-fundiaria",
    titulo: "Regularização Fundiária",
    curto: "Titulação e regularização de imóveis rurais",
    icone: "MapPinned",
    categoria: "Agro",
    agro: true,
    resumo:
      "Regularização da posse e da propriedade de imóveis rurais na Amazônia Legal, com atuação junto a órgãos como INCRA, ITERACRE e SPU, incluindo titulação, georreferenciamento, usucapião e adequação à legislação fundiária federal e estadual.",
    beneficios: [
      "Análise da cadeia dominial e da situação possessória",
      "Titulação e regularização junto a INCRA, ITERACRE e SPU",
      "Usucapião rural e regularização documental do imóvel",
    ],
    paraQuem: ["Produtores rurais", "Posseiros de boa-fé", "Famílias com imóveis sem título"],
    fundamentos: [
      { titulo: "Base legal", texto: "Lei nº 11.952/2009 (regularização na Amazônia Legal), Lei nº 13.465/2017 e normas do INCRA; art. 191 da CF/88 (usucapião especial rural)." },
      { titulo: "Georreferenciamento", texto: "A Lei nº 10.267/2001 e a certificação do INCRA são essenciais para a regularização e segurança jurídica do imóvel rural." },
      { titulo: "Estratégia", texto: "O diagnóstico documental e fundiário define o caminho mais seguro — administrativo ou judicial — para a titulação." },
    ],
    comoFunciona: [
      "Diagnóstico documental e fundiário do imóvel",
      "Definição do instrumento adequado (titulação, usucapião, retificação)",
      "Atuação junto aos órgãos competentes ou no Judiciário",
      "Acompanhamento até a regularização registral",
    ],
    faq: [
      { q: "Tenho a posse da terra há anos, mas não tenho título. Como regularizar?", a: "A depender da origem e do tempo de posse, é possível buscar a titulação administrativa (INCRA/ITERACRE) ou a usucapião especial rural (art. 191 da CF), com a devida instrução documental e o georreferenciamento do imóvel." },
      { q: "O que é georreferenciamento e por que é importante?", a: "É a definição precisa dos limites do imóvel por coordenadas, certificada pelo INCRA (Lei 10.267/2001). É requisito para diversos atos de regularização e confere segurança jurídica à propriedade." },
      { q: "É possível regularizar imóvel na Amazônia Legal?", a: "Sim. A Lei nº 11.952/2009 disciplina a regularização fundiária de ocupações em terras da União na Amazônia Legal, com critérios específicos que analisamos caso a caso." },
    ],
  },
  {
    slug: "ambiental-rural",
    titulo: "Ambiental Rural",
    curto: "CAR, Reserva Legal, APP, embargos",
    icone: "Trees",
    categoria: "Agro",
    agro: true,
    resumo:
      "Assessoria jurídica ambiental para o produtor rural: Cadastro Ambiental Rural (CAR), regularização de Reserva Legal e Área de Preservação Permanente (APP), defesa em autos de infração e embargos do IBAMA e da SEMA, e adequação ao Código Florestal.",
    beneficios: [
      "Regularização do CAR e adesão a programas de regularização ambiental",
      "Defesa administrativa e judicial em autos de infração e embargos (IBAMA/SEMA)",
      "Adequação de Reserva Legal e APP ao Código Florestal",
    ],
    paraQuem: ["Produtores rurais", "Empresas do agronegócio", "Proprietários autuados por órgãos ambientais"],
    fundamentos: [
      { titulo: "Base legal", texto: "Lei nº 12.651/2012 (Código Florestal), Lei nº 9.605/98 (crimes ambientais) e Decreto nº 6.514/2008 (infrações administrativas)." },
      { titulo: "CAR e PRA", texto: "O Cadastro Ambiental Rural e a adesão ao Programa de Regularização Ambiental (PRA) permitem a regularização de passivos e a suspensão de sanções, observados os prazos legais." },
      { titulo: "Defesa em embargos", texto: "Autos de infração e embargos podem conter vícios formais e materiais; a defesa técnica analisa a legalidade e a proporcionalidade da sanção." },
    ],
    comoFunciona: [
      "Diagnóstico ambiental e documental da propriedade",
      "Regularização do CAR e, se cabível, adesão ao PRA",
      "Defesa em autos de infração e embargos administrativos/judiciais",
      "Acompanhamento até a regularização e o desembargo",
    ],
    faq: [
      { q: "Recebi um auto de infração ambiental e um embargo. O que fazer?", a: "É fundamental apresentar defesa no prazo. Analisamos a legalidade do auto, eventuais vícios formais e materiais e a proporcionalidade da sanção, buscando a anulação, a redução ou o desembargo da área, na via administrativa e/ou judicial." },
      { q: "O que é o CAR e por que ele é importante?", a: "O Cadastro Ambiental Rural é o registro eletrônico obrigatório das propriedades rurais (Código Florestal). É a porta de entrada para a regularização ambiental, inclusive a adesão ao Programa de Regularização Ambiental (PRA)." },
      { q: "Tenho passivo de Reserva Legal ou APP. É possível regularizar?", a: "Sim. O Código Florestal (Lei 12.651/2012) prevê instrumentos de regularização, como o PRA, que podem suspender sanções e permitir a recomposição ou compensação, conforme o caso." },
    ],
  },
];

export const AREAS_DESTAQUE = AREAS.filter((a) => a.destaque);
export const AREAS_AGRO = AREAS.filter((a) => a.agro);

export function getArea(slug: string) {
  return AREAS.find((a) => a.slug === slug);
}

/* Avaliações reais devem ser integradas ao Google Business Profile.
   NÃO inventamos depoimentos. Estes campos ficam como placeholder estrutural. */
export const REVIEWS_PLACEHOLDER = true;

/* ===================== BLOG ===================== */
export type Post = {
  slug: string;
  titulo: string;
  resumo: string;
  categoria: string;
  data: string;
  leitura: string;
  conteudo: string; // markdown
};

export const POSTS: Post[] = [
  {
    slug: "bpc-loas-como-funciona",
    titulo: "BPC/LOAS: quem tem direito e como solicitar o benefício",
    resumo:
      "Entenda os requisitos do Benefício de Prestação Continuada, o critério de renda e o que fazer em caso de indeferimento pelo INSS.",
    categoria: "Previdenciário",
    data: "2026-01-15",
    leitura: "6 min",
    conteudo: `O **Benefício de Prestação Continuada (BPC/LOAS)** garante um salário mínimo mensal à pessoa idosa (65 anos ou mais) ou à pessoa com deficiência que comprove não possuir meios de prover a própria manutenção, nem de tê-la provida por sua família.

## Quem tem direito

Têm direito ao benefício, em síntese:

- **Pessoa idosa**, com 65 anos ou mais;
- **Pessoa com deficiência**, de qualquer idade, com impedimento de longo prazo (físico, mental, intelectual ou sensorial).

Em ambos os casos, exige-se a comprovação da **hipossuficiência econômica**.

## O critério de renda e a posição do STF

A LOAS estabelece como parâmetro a renda familiar per capita inferior a **1/4 do salário mínimo**. Contudo, o **Supremo Tribunal Federal**, no julgamento dos RE 567.985 e RE 580.963, reconheceu que esse critério **não é absoluto**, admitindo a comprovação da miserabilidade por outros meios, como gastos elevados com saúde e medicamentos.

> Em resumo: mesmo quem está ligeiramente acima de 1/4 do salário mínimo pode ter direito, a depender do caso concreto.

## E se o INSS negar?

O indeferimento administrativo **não encerra o direito**. É possível:

1. Recorrer administrativamente;
2. Ajuizar **ação judicial**, frequentemente com reanálise pericial e produção de prova social qualificada (estudo social, laudos, comprovantes de despesas).

A instrução probatória robusta é decisiva. Por isso, a atuação técnica desde o requerimento aumenta significativamente as chances de êxito.

*Este conteúdo tem caráter informativo e não substitui a análise individualizada do seu caso.*`,
  },
  {
    slug: "consignado-indevido-rmc",
    titulo: "Descontos de consignado que você não reconhece: o que fazer",
    resumo:
      "Cartão consignado disfarçado de empréstimo (RMC), descontos não contratados e a possibilidade de devolução em dobro.",
    categoria: "Bancário",
    data: "2026-02-03",
    leitura: "5 min",
    conteudo: `Muitos aposentados, pensionistas e servidores identificam em seus extratos **descontos de empréstimos consignados que não reconhecem** ou que se transformaram em **cartão consignado (RMC)** sem que essa fosse a intenção.

## Empréstimo que virou cartão (RMC)

A **Reserva de Margem Consignável (RMC)** é uma modalidade de cartão de crédito consignado. O problema surge quando o consumidor pretendia um **empréstimo comum** e foi inserido, sem informação clara, em um cartão cujo saldo nunca se quita pelos descontos mínimos.

O **STJ** tem reconhecido a abusividade dessa prática, autorizando a **reconversão** para empréstimo comum e a **restituição** dos valores cobrados a maior.

## Descontos não contratados

Quando há **fraude** — empréstimo que você simplesmente não contratou — é possível:

- Pleitear a **declaração de inexistência do débito**;
- Obter a **suspensão dos descontos** por tutela de urgência;
- Buscar a **restituição** dos valores e **indenização por danos morais**.

## Devolução em dobro

O art. 42, parágrafo único, do **Código de Defesa do Consumidor** prevê a repetição do indébito em dobro. O STJ (EAREsp 676.608/RS) consolidou parâmetros para sua aplicação.

> O primeiro passo é obter o **extrato de empréstimos** (HISCON, no caso do INSS) e analisar contrato a contrato.

*Conteúdo informativo. A análise do seu extrato é individual e gratuita em nossa triagem inicial.*`,
  },
  {
    slug: "aposentadoria-rural-prova",
    titulo: "Aposentadoria rural: como comprovar o tempo de trabalho no campo",
    resumo:
      "Início de prova material, prova testemunhal e a Súmula 149 do STJ: o caminho para o segurado especial.",
    categoria: "Previdenciário",
    data: "2026-02-20",
    leitura: "6 min",
    conteudo: `A **aposentadoria rural por idade** é devida ao trabalhador rural — inclusive o **segurado especial** (agricultor familiar) — com **60 anos (homem)** ou **55 anos (mulher)**, desde que comprovado o exercício de atividade rural pelo período de carência exigido.

## O desafio: comprovar o trabalho sem carteira assinada

Boa parte dos trabalhadores rurais nunca teve vínculo formal. A lei e a jurisprudência resolvem isso por meio de:

- **Início de prova material** — documentos que indiquem a atividade rural (contratos de parceria, notas de produtor, ITR, cadastros, certidões);
- **Prova testemunhal** — depoimentos que complementam e confirmam a prova documental.

A **Súmula 149 do STJ** é clara: a prova exclusivamente testemunhal não basta; é preciso início de prova material.

## Estratégia probatória

O êxito depende da **organização cronológica** das provas e da **coerência** entre documentos e testemunhos. Reunir, classificar e contextualizar cada documento faz diferença no resultado.

> O segurado especial em regime de economia familiar tem tratamento previdenciário diferenciado pela Constituição (art. 195, §8º).

*Este texto é informativo. Avaliamos gratuitamente quais documentos você já possui e quais ainda precisam ser reunidos.*`,
  },
  {
    slug: "energisa-conta-alta-corte",
    titulo: "Conta de energia alta e ameaça de corte: conheça seus direitos",
    resumo:
      "Faturas incompatíveis, recuperação de consumo (TOI) e a ilegalidade do corte por dívidas antigas.",
    categoria: "Consumidor",
    data: "2026-03-10",
    leitura: "5 min",
    conteudo: `Faturas de energia muito acima do consumo habitual e ameaças de corte são situações comuns — e, em muitos casos, **questionáveis judicialmente**.

## Recuperação de consumo (TOI)

A concessionária às vezes cobra valores retroativos a título de **recuperação de consumo**, com base em Termo de Ocorrência de Irregularidade (TOI). Os Tribunais têm afastado a cobrança quando a apuração é **unilateral**, sem prova técnica idônea e sem o devido processo.

## Corte de energia por dívida antiga

O **STJ** considera **ilegítimo o corte** por débitos **pretéritos e consolidados**, por se tratar de **serviço essencial** (art. 22 do CDC). O corte não pode ser usado como instrumento de cobrança de dívidas antigas.

## Negativação indevida

Se o nome do consumidor foi **negativado** por dívida questionável ou inexistente, é possível pleitear a retirada do cadastro e **indenização por danos morais**.

> O primeiro passo é reunir as **faturas** e o **histórico de consumo** para identificar a incompatibilidade.

*Conteúdo informativo. Cada caso é analisado individualmente.*`,
  },
  {
    slug: "agro-regularizacao-ambiental",
    titulo: "Produtor rural autuado: defesa em embargos e regularização ambiental",
    resumo:
      "CAR, PRA, autos de infração do IBAMA/SEMA e os caminhos para regularizar a propriedade rural.",
    categoria: "Agro",
    data: "2026-03-28",
    leitura: "7 min",
    conteudo: `O produtor rural na Amazônia Legal convive com uma teia de obrigações ambientais. Receber um **auto de infração** ou um **embargo** do IBAMA ou da SEMA exige reação técnica e tempestiva.

## CAR: a porta de entrada da regularização

O **Cadastro Ambiental Rural (CAR)** é obrigatório (Lei nº 12.651/2012, o Código Florestal) e é o ponto de partida para a regularização. A partir dele, é possível aderir ao **Programa de Regularização Ambiental (PRA)**, que pode **suspender sanções** e viabilizar a recomposição ou compensação de passivos.

## Defesa em autos de infração e embargos

Autos e embargos frequentemente contêm **vícios formais e materiais**. A defesa técnica analisa:

- A legalidade e a competência do ato;
- A **proporcionalidade** da sanção;
- A correção da área embargada e do enquadramento.

O objetivo é a **anulação**, a **redução** da penalidade ou o **desembargo** da área.

## Reserva Legal e APP

O Código Florestal prevê instrumentos para regularizar passivos de **Reserva Legal** e **Área de Preservação Permanente (APP)**, conciliando produção e conformidade ambiental.

> A regularização ambiental, além de evitar sanções, valoriza a propriedade e dá segurança jurídica ao negócio rural.

*Texto informativo. O diagnóstico da sua propriedade é individual.*`,
  },
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
