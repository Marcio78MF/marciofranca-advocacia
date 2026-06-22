/* Dados centrais do site Márcio França Advocacia */

export const ASSETS = {
  logo: "/images/logo-mf.png",
  fotoVerde: "/images/IMG_5151-opt.jpg",
  fotoRetrato: "/images/IMG_5136-opt.jpg",
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
  icone: string;
  categoria: "Previdenciário" | "Bancário" | "Consumidor" | "Família" | "Criminal" | "Agro";
  resumo: string;
  beneficios: string[];
  paraQuem: string[];
  fundamentos: { titulo: string; texto: string }[];
  comoFunciona: string[];
  faq: { q: string; a: string }[];
  agro?: boolean;
  destaque?: boolean;
  ctaTexto?: string;
  ctaWhatsapp?: string;
  problema?: string;
  quandoProcurar?: string[];
  documentos?: string[];
  situacoes?: { titulo: string; texto: string }[];
};

export const AREAS: Area[] = [
  {
    slug: "bpc-loas",
    titulo: "BPC/LOAS",
    curto: "Benefício de Prestação Continuada",
    icone: "HeartHandshake",
    categoria: "Previdenciário",
    destaque: true,
    ctaTexto: "Seu benefício foi negado? Envie sua documentação para análise.",
    ctaWhatsapp: "Olá, tive meu BPC/LOAS negado e gostaria de uma análise do meu caso.",
    resumo:
      "O Benefício de Prestação Continuada (BPC/LOAS) garante um salário mínimo mensal à pessoa idosa (65 anos ou mais) ou à pessoa com deficiência que comprove não possuir meios de prover a própria manutenção. É um direito assistencial, não exige contribuição prévia ao INSS.",
    problema:
      "Milhares de pessoas no Acre e em todo o Brasil têm direito ao BPC/LOAS e não sabem, ou tiveram o benefício negado pelo INSS sem orientação adequada. A negativa acontece por falhas na documentação, erro na avaliação de renda familiar ou perícia mal conduzida. Em Rio Branco, Cruzeiro do Sul, Sena Madureira e demais municípios do Acre, famílias de baixa renda enfrentam dificuldades para comprovar a miserabilidade exigida pela lei, especialmente quando a renda familiar está próxima do limite legal. O INSS frequentemente nega o benefício de forma mecânica, sem considerar as particularidades do caso concreto — gastos com saúde, medicamentos, condições de moradia e vulnerabilidade social.",
    quandoProcurar: [
      "O INSS negou seu pedido de BPC/LOAS",
      "Você tem 65 anos ou mais e renda familiar baixa",
      "Possui deficiência física, mental, intelectual ou sensorial de longo prazo",
      "A renda per capita da família está próxima de 1/4 do salário mínimo",
      "Precisa de orientação sobre quais documentos reunir",
      "A perícia médica do INSS não considerou sua real condição",
      "Seu benefício foi cessado ou cortado indevidamente",
    ],
    documentos: [
      "RG e CPF do requerente e do grupo familiar",
      "Comprovante de residência atualizado",
      "CadÚnico (Cadastro Único) atualizado",
      "Laudos médicos e exames (para deficiência)",
      "Comprovantes de renda de todos os membros da família",
      "Receitas de medicamentos e comprovantes de despesas com saúde",
      "Certidão de nascimento ou casamento",
      "Declaração escolar (se aplicável)",
    ],
    situacoes: [
      { titulo: "Idoso sem renda", texto: "Pessoa com 65 anos ou mais, sem aposentadoria ou pensão, vivendo com a família em situação de vulnerabilidade. Mesmo sem nunca ter contribuído ao INSS, tem direito ao BPC." },
      { titulo: "Criança com deficiência", texto: "Famílias com filhos que possuem deficiência diagnosticada — TEA, paralisia cerebral, síndromes — têm direito ao benefício, independentemente da idade da criança." },
      { titulo: "Benefício negado por renda", texto: "O INSS calculou a renda per capita acima de 1/4 do salário mínimo, mas não considerou despesas com medicamentos, tratamentos e condições especiais de saúde que o STF autoriza descontar." },
      { titulo: "Perícia desfavorável", texto: "A perícia do INSS não reconheceu a deficiência ou o impedimento de longo prazo. A ação judicial permite nova perícia, com quesitos técnicos elaborados pelo advogado." },
    ],
    beneficios: [
      "Análise do critério de renda (1/4 do salário mínimo per capita) e das hipóteses de flexibilização reconhecidas pelo STF",
      "Avaliação social e médica (perícia) para deficiência, com estratégia documental",
      "Recurso administrativo e ação judicial em caso de indeferimento indevido",
      "Acompanhamento da perícia judicial com formulação de quesitos técnicos",
    ],
    paraQuem: ["Idosos com 65 anos ou mais", "Pessoas com deficiência de qualquer idade", "Famílias de baixa renda", "Responsáveis por crianças com deficiência"],
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
      { q: "O BPC/LOAS pode ser acumulado com outro benefício?", a: "Em regra, não. O BPC não pode ser acumulado com outro benefício previdenciário (aposentadoria, pensão). Porém, há exceções reconhecidas pela jurisprudência, como a acumulação com pensão especial de natureza indenizatória." },
      { q: "Quem mora no interior do Acre também pode pedir?", a: "Sim. Atendemos clientes de Rio Branco, Cruzeiro do Sul, Sena Madureira, Tarauacá, Feijó, Brasiléia e todos os demais municípios do Acre, de forma presencial ou digital." },
      { q: "Quanto tempo demora o processo judicial de BPC/LOAS?", a: "Nos Juizados Especiais Federais, o processo costuma tramitar entre 6 e 18 meses, a depender da complexidade e da necessidade de perícia. A tutela antecipada pode garantir o benefício antes do julgamento final." },
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
    ctaTexto: "Trabalhou no campo e quer se aposentar? Avaliamos seus documentos.",
    ctaWhatsapp: "Olá, sou trabalhador rural e gostaria de saber se tenho direito à aposentadoria.",
    resumo:
      "A aposentadoria rural por idade é devida ao trabalhador rural — inclusive o segurado especial (agricultor familiar, em regime de economia familiar) — que comprove o exercício de atividade rural pelo período exigido em lei, com idade reduzida (60 anos para homens e 55 para mulheres).",
    problema:
      "No Acre, milhares de trabalhadores rurais passaram décadas no campo sem carteira assinada. Agricultores familiares em Sena Madureira, Tarauacá, Feijó, Xapuri e demais municípios enfrentam dificuldades para reunir a documentação exigida pelo INSS. O resultado é a negativa do benefício por insuficiência de provas — mesmo quando o trabalho rural é real e comprovável. A falta de orientação técnica na fase de requerimento é a principal causa de indeferimentos no Acre.",
    quandoProcurar: [
      "Completou 60 anos (homem) ou 55 anos (mulher) e trabalhou no campo",
      "O INSS negou seu pedido por falta de documentos",
      "Não tem carteira assinada, mas trabalhou como agricultor familiar",
      "É pescador artesanal, extrativista ou seringueiro",
      "Precisa organizar provas do trabalho rural para o requerimento",
      "Quer saber se o tempo de trabalho rural conta para aposentadoria",
    ],
    documentos: [
      "Contratos de parceria, arrendamento ou comodato rural",
      "Notas fiscais de venda de produção (bloco de produtor)",
      "Declaração do Sindicato dos Trabalhadores Rurais",
      "Cadastro no INCRA ou comprovante de posse de terra",
      "ITR (Imposto Territorial Rural)",
      "Certidões de nascimento, casamento ou óbito com qualificação rural",
      "Fichas de matrícula escolar (dos filhos) com endereço rural",
      "Prontuários médicos com qualificação de lavrador/agricultor",
    ],
    situacoes: [
      { titulo: "Agricultor familiar sem documentos formais", texto: "O produtor que cultivou a terra durante décadas sem contrato formal pode comprovar o trabalho rural por meio de documentos indiretos — certidões, cadastros, notas fiscais e testemunhas — organizados estrategicamente." },
      { titulo: "Segurado especial com períodos urbanos", texto: "Períodos curtos de trabalho urbano não descaracterizam a condição de segurado especial, desde que demonstrado o retorno à atividade rural. A jurisprudência admite a intercalação." },
      { titulo: "Seringueiro e extrativista na Amazônia", texto: "Seringueiros e extrativistas florestais no Acre têm direito à aposentadoria rural como segurados especiais, com prova material adaptada à realidade amazônica." },
      { titulo: "Aposentadoria negada por falta de prova", texto: "O INSS exige documentação que o trabalhador rural frequentemente não possui. A ação judicial permite ampliar a produção de provas, incluindo estudo social e perícia indireta." },
    ],
    beneficios: [
      "Reconstrução da prova material e testemunhal do labor rural",
      "Enquadramento como segurado especial e contagem de período de carência",
      "Atuação administrativa e judicial, inclusive Juizados Especiais Federais",
      "Estratégia documental adaptada à realidade rural amazônica",
    ],
    paraQuem: ["Trabalhadores rurais", "Agricultores familiares (segurado especial)", "Pescadores artesanais e extrativistas", "Seringueiros e ribeirinhos"],
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
      { q: "Trabalhei um tempo na cidade. Perco o direito à aposentadoria rural?", a: "Não necessariamente. Períodos curtos de trabalho urbano não descaracterizam a condição de segurado especial, desde que haja retorno à atividade rural. A jurisprudência admite a intercalação de períodos." },
      { q: "Declaração do sindicato rural é suficiente?", a: "A declaração do sindicato é um início de prova material importante, mas não é suficiente isoladamente. Deve ser complementada por outros documentos e por prova testemunhal idônea." },
      { q: "Moro no interior do Acre. Consigo resolver sem ir a Rio Branco?", a: "Sim. Atendemos trabalhadores rurais de todo o Acre — Cruzeiro do Sul, Tarauacá, Feijó, Sena Madureira, Brasiléia, Xapuri e demais municípios — de forma presencial e digital." },
    ],
  },
  {
    slug: "consignado-indevido",
    titulo: "Consignado Indevido",
    curto: "Empréstimo e cartão consignado, RMC",
    icone: "Landmark",
    categoria: "Bancário",
    destaque: true,
    ctaTexto: "Recebeu uma cobrança indevida? Entenda quais medidas podem ser avaliadas.",
    ctaWhatsapp: "Olá, estou com descontos de consignado que não reconheço e gostaria de uma análise.",
    resumo:
      "Descontos indevidos em benefícios e salários por empréstimos consignados não contratados, cartão consignado (RMC/RCC) disfarçado de empréstimo e cobranças abusivas são passíveis de revisão, suspensão dos descontos e devolução dos valores, muitas vezes em dobro.",
    problema:
      "Aposentados e pensionistas do INSS em Rio Branco e em todo o Acre são alvo frequente de práticas abusivas envolvendo empréstimos consignados. Bancos e financeiras contratam empréstimos sem autorização, convertem empréstimos comuns em cartão consignado (RMC) sem informação clara e realizam descontos que comprometem a renda mínima do beneficiário. Muitas vítimas só percebem o problema ao verificar o extrato e encontrar parcelas de empréstimos que não reconhecem. Em outros casos, o segurado procurou um empréstimo simples e acabou vinculado a um cartão de crédito consignado cuja dívida nunca se quita.",
    quandoProcurar: [
      "Descobriu descontos de empréstimo que não reconhece no benefício ou salário",
      "Contratou empréstimo, mas virou cartão consignado (RMC/RCC)",
      "Os descontos comprometem mais de 35% do benefício",
      "Foi vítima de fraude por correspondente bancário",
      "O banco se recusa a cancelar o contrato ou devolver os valores",
      "Quer saber se tem direito à devolução em dobro",
    ],
    documentos: [
      "Extrato de empréstimos do INSS (HISCON) ou contracheque",
      "Extratos bancários dos últimos 12 meses",
      "Contrato do empréstimo (se tiver)",
      "Comprovante de reclamação ao banco (se houver)",
      "RG e CPF",
      "Comprovante de residência",
      "Carta de concessão do benefício INSS",
    ],
    situacoes: [
      { titulo: "Empréstimo não contratado", texto: "Descontos aparecem no benefício sem que o segurado tenha assinado qualquer contrato. Configura fraude, com direito a suspensão dos descontos, restituição dos valores e indenização por danos morais." },
      { titulo: "Empréstimo que virou cartão RMC", texto: "O segurado procurou um empréstimo consignado comum e descobriu que foi vinculado a um cartão de crédito consignado (RMC), cuja fatura nunca se quita. O STJ reconhece a abusividade dessa prática." },
      { titulo: "Margem consignável estourada", texto: "Os descontos excedem o limite legal de 35% da renda. É possível obter a suspensão dos descontos excedentes e a revisão dos contratos." },
      { titulo: "Fraude por correspondente bancário", texto: "Intermediários utilizam dados do segurado para contratar empréstimos sem autorização. A responsabilidade é solidária entre o banco e o correspondente." },
    ],
    beneficios: [
      "Suspensão dos descontos e bloqueio de novas contratações fraudulentas",
      "Revisão de contratos com juros abusivos e cobrança de RMC indevida",
      "Pedido de restituição (eventualmente em dobro) e indenização por danos morais",
      "Tutela de urgência para cessação imediata dos descontos",
    ],
    paraQuem: ["Aposentados e pensionistas do INSS", "Servidores públicos", "Pensionistas com descontos não reconhecidos", "Vítimas de fraude bancária"],
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
      { q: "O banco diz que tenho contrato assinado. Ainda posso contestar?", a: "Sim. Mesmo com contrato assinado, é possível contestar vícios de consentimento, falta de informação adequada e cláusulas abusivas. A análise do contrato revela se houve irregularidade." },
      { q: "Sou do interior do Acre. Consigo resolver isso à distância?", a: "Sim. Atendemos de forma digital clientes de Cruzeiro do Sul, Sena Madureira, Brasiléia, Tarauacá e todos os municípios do Acre. A análise do extrato pode ser feita remotamente." },
    ],
  },
  {
    slug: "energisa",
    titulo: "Energisa",
    curto: "Cobranças e cortes indevidos de energia",
    icone: "Zap",
    categoria: "Consumidor",
    destaque: true,
    ctaTexto: "Conta de energia abusiva? Veja se você tem direito à revisão.",
    ctaWhatsapp: "Olá, estou com problemas com a Energisa (cobrança/corte indevido) e preciso de orientação.",
    resumo:
      "Faturas com valores incompatíveis com o consumo, cobrança de recuperação de consumo (TOI) sem o devido processo, negativação indevida e corte abusivo de energia são situações que podem ser questionadas judicialmente, com pedido de revisão da dívida e indenização.",
    problema:
      "No Acre, consumidores residenciais, pequenos comerciantes e produtores rurais enfrentam cobranças abusivas da Energisa com frequência. Faturas que triplicam de um mês para outro, cobranças retroativas por recuperação de consumo (TOI) sem prova técnica e cortes de energia por dívidas antigas são problemas recorrentes em Rio Branco, Cruzeiro do Sul, Sena Madureira e no interior do estado. Muitos consumidores pagam por medo do corte, sem saber que a cobrança pode ser ilegal.",
    quandoProcurar: [
      "Recebeu fatura com valor muito acima do histórico de consumo",
      "A Energisa cobra recuperação de consumo (TOI) retroativa",
      "Teve a energia cortada por dívida antiga ou contestada",
      "Seu nome foi negativado pela concessionária",
      "A concessionária se recusa a parcelar ou rever a cobrança",
      "O medidor foi trocado sem explicação e a fatura subiu",
    ],
    documentos: [
      "Últimas 12 faturas de energia",
      "Termo de Ocorrência de Irregularidade (TOI), se recebido",
      "Protocolo de reclamação junto à Energisa ou ANEEL",
      "Comprovante de negativação (se houver)",
      "Fotos do medidor (se relevante)",
      "RG e CPF do titular",
      "Comprovante de residência",
    ],
    situacoes: [
      { titulo: "Fatura incompatível com o consumo", texto: "A conta de energia salta de R$ 150 para R$ 800 sem mudança nos hábitos de consumo. A concessionária alega 'ajuste' ou 'recuperação' sem apresentar laudo técnico que justifique a diferença." },
      { titulo: "Corte por dívida antiga", texto: "A concessionária corta a energia por débito de meses ou anos atrás, usando o corte como instrumento de cobrança. O STJ considera essa prática ilegal quando se trata de débitos pretéritos e consolidados." },
      { titulo: "TOI e recuperação de consumo", texto: "A Energisa lavra um Termo de Ocorrência de Irregularidade e cobra valores retroativos sem perícia contraditória. A apuração unilateral tem sido afastada pelos Tribunais." },
      { titulo: "Negativação indevida", texto: "O nome do consumidor é incluído nos cadastros de inadimplentes por dívida que está sendo contestada ou que já foi paga. Gera direito a indenização por danos morais." },
    ],
    beneficios: [
      "Contestação de faturas e de cobranças por recuperação de consumo (TOI)",
      "Pedido de religação e proibição de corte do serviço essencial",
      "Reparação por negativação indevida e danos morais",
      "Revisão de débitos retroativos cobrados sem prova técnica",
    ],
    paraQuem: ["Consumidores residenciais", "Pequenos comércios e produtores rurais", "Quem teve o nome negativado pela concessionária", "Moradores do interior do Acre"],
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
      { q: "A Energisa pode cobrar recuperação de consumo de anos anteriores?", a: "A cobrança retroativa exige prova técnica robusta e contraditório. Cobranças apuradas unilateralmente, sem perícia contraditória, têm sido afastadas pelos Tribunais." },
      { q: "Moro na zona rural do Acre. A Energisa pode cortar minha luz?", a: "O corte por débitos antigos é ilegal independentemente da localidade. Atendemos consumidores de todo o Acre, incluindo áreas rurais de Sena Madureira, Tarauacá, Feijó e demais municípios." },
    ],
  },
  {
    slug: "familia",
    titulo: "Família",
    curto: "Divórcio, guarda, alimentos, inventário",
    icone: "Users",
    categoria: "Família",
    ctaTexto: "Precisa resolver uma questão familiar? Converse com sigilo e orientação.",
    ctaWhatsapp: "Olá, preciso de orientação sobre uma questão de família (divórcio/guarda/alimentos/inventário).",
    resumo:
      "Atuação em direito de família e sucessões com sensibilidade e técnica: divórcio (consensual ou litigioso), guarda e convivência, pensão alimentícia, partilha de bens e inventário, sempre buscando soluções economicamente inteligentes e a preservação das relações quando possível.",
    problema:
      "Conflitos familiares envolvem patrimônio, filhos e emoções. Em Rio Branco e no interior do Acre, muitas famílias adiam decisões importantes — divórcio, guarda, pensão, inventário — por falta de orientação ou receio dos custos. O resultado é a deterioração das relações, prejuízo patrimonial e insegurança jurídica para os filhos. A via extrajudicial, quando possível, resolve essas questões com rapidez e economia.",
    quandoProcurar: [
      "Deseja se divorciar (consensual ou litigioso)",
      "Precisa fixar ou revisar pensão alimentícia",
      "Há disputa sobre guarda ou convivência com os filhos",
      "Um familiar faleceu e é necessário fazer o inventário",
      "Precisa reconhecer ou contestar paternidade",
      "Quer formalizar uma união estável",
    ],
    documentos: [
      "Certidão de casamento ou declaração de união estável",
      "Certidão de nascimento dos filhos",
      "Comprovantes de renda de ambas as partes",
      "Documentos dos bens a partilhar (imóveis, veículos, contas)",
      "Certidão de óbito (para inventário)",
      "RG e CPF das partes",
    ],
    situacoes: [
      { titulo: "Divórcio consensual em cartório", texto: "Quando não há filhos menores e o casal está de acordo, o divórcio pode ser feito por escritura pública em cartório, com rapidez e menor custo." },
      { titulo: "Guarda compartilhada e convivência", texto: "A guarda compartilhada é a regra legal. O advogado atua na regulamentação da convivência, assegurando o melhor interesse da criança." },
      { titulo: "Revisão de pensão alimentícia", texto: "Quando há mudança nas necessidades ou na capacidade financeira, a pensão pode ser revisada judicialmente, tanto para aumento quanto para redução." },
      { titulo: "Inventário com conflito entre herdeiros", texto: "Quando os herdeiros não concordam sobre a partilha, o inventário judicial é necessário. A atuação técnica busca preservar o patrimônio e resolver o conflito." },
    ],
    beneficios: [
      "Divórcio consensual e litigioso, com partilha de bens",
      "Guarda, regulamentação de convivência e fixação/revisão de alimentos",
      "Inventário e partilha (judicial ou extrajudicial)",
      "Reconhecimento e dissolução de união estável",
    ],
    paraQuem: ["Cônjuges e companheiros", "Pais e responsáveis", "Herdeiros e familiares", "Casais em união estável"],
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
      { q: "Qual o prazo para abrir inventário?", a: "O prazo legal é de 60 dias a contar do óbito (art. 611 do CPC). O atraso pode gerar multa sobre o ITCMD. Quanto antes, menor o custo e a complexidade." },
      { q: "A guarda compartilhada é obrigatória?", a: "É a regra preferencial (Lei 13.058/2014), mas pode ser afastada quando não atender ao melhor interesse da criança, a depender do caso concreto." },
    ],
  },
  {
    slug: "criminal",
    titulo: "Criminal",
    curto: "Flagrante, custódia e defesa criminal",
    icone: "Scale",
    categoria: "Criminal",
    ctaTexto: "Precisa de defesa criminal urgente? O tempo conta. Fale agora.",
    ctaWhatsapp: "Olá, preciso de um advogado criminal com urgência.",
    resumo:
      "Defesa criminal técnica e tempestiva em todas as fases: atuação imediata em prisão em flagrante e audiência de custódia, pedidos de liberdade e relaxamento de prisão, defesa em inquéritos e ações penais, com estrita observância às garantias constitucionais.",
    problema:
      "No sistema penal brasileiro, as primeiras horas após a prisão são decisivas. Em Rio Branco e em todo o Acre, a ausência de defesa técnica imediata pode significar a manutenção de uma prisão ilegal, a perda de oportunidades processuais e o comprometimento da estratégia defensiva. A audiência de custódia, que deveria ser uma garantia, frequentemente ocorre sem que o preso tenha tido acesso a um advogado de confiança.",
    quandoProcurar: [
      "Um familiar foi preso em flagrante",
      "Recebeu intimação policial ou judicial",
      "É investigado em inquérito policial",
      "Precisa de defesa em ação penal",
      "Deseja pedir revisão de prisão preventiva",
      "Busca habeas corpus ou liberdade provisória",
    ],
    documentos: [
      "Auto de Prisão em Flagrante (se disponível)",
      "Intimação ou mandado (se recebido)",
      "RG e CPF do preso/investigado",
      "Informações sobre a unidade prisional",
      "Comprovante de residência e trabalho (para liberdade provisória)",
      "Documentos que comprovem bons antecedentes",
    ],
    situacoes: [
      { titulo: "Prisão em flagrante", texto: "Atuação imediata para análise da legalidade do flagrante e preparação da defesa para a audiência de custódia. As primeiras horas são determinantes." },
      { titulo: "Audiência de custódia", texto: "A apresentação do preso ao juiz é o momento para pleitear a liberdade provisória, o relaxamento da prisão ilegal ou a aplicação de medidas cautelares diversas." },
      { titulo: "Inquérito policial", texto: "Acompanhamento das diligências investigatórias, garantia dos direitos do investigado e construção antecipada da tese defensiva." },
      { titulo: "Ação penal em curso", texto: "Defesa técnica completa em todas as fases do processo criminal, incluindo audiências, alegações e recursos." },
    ],
    beneficios: [
      "Atuação urgente em flagrante e audiência de custódia",
      "Pedidos de liberdade provisória, relaxamento e revogação de prisão",
      "Defesa técnica em inquéritos e ações penais",
      "Habeas corpus e medidas cautelares diversas da prisão",
    ],
    paraQuem: ["Investigados e acusados", "Familiares de presos", "Quem busca defesa preventiva", "Réus em ações penais"],
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
      { q: "Quanto custa um advogado criminal?", a: "Os honorários dependem da complexidade do caso, da fase processual e do tipo de atuação. Fazemos uma avaliação inicial para apresentar um orçamento transparente e adequado." },
      { q: "Atende casos criminais no interior do Acre?", a: "Sim. Atuamos em comarcas de todo o estado — Rio Branco, Cruzeiro do Sul, Sena Madureira, Tarauacá, Feijó, Brasiléia e demais comarcas acreanas." },
    ],
  },
  {
    slug: "regularizacao-fundiaria",
    titulo: "Regularização Fundiária",
    curto: "Titulação e regularização de imóveis rurais",
    icone: "MapPinned",
    categoria: "Agro",
    agro: true,
    ctaTexto: "Sua terra precisa de regularização? Faça um diagnóstico fundiário.",
    ctaWhatsapp: "Olá, preciso regularizar a documentação de um imóvel rural no Acre.",
    resumo:
      "Regularização da posse e da propriedade de imóveis rurais na Amazônia Legal, com atuação junto a órgãos como INCRA, ITERACRE e SPU, incluindo titulação, georreferenciamento, usucapião e adequação à legislação fundiária federal e estadual.",
    problema:
      "No Acre, grande parte dos imóveis rurais não possui documentação regular. Produtores em Sena Madureira, Tarauacá, Feijó, Cruzeiro do Sul, Brasiléia e demais municípios ocupam terras há gerações sem título de propriedade, o que impede o acesso a crédito rural, a venda regular do imóvel e a segurança jurídica da família. A regularização fundiária na Amazônia Legal possui regras específicas que exigem conhecimento técnico dos procedimentos junto ao INCRA, ITERACRE e SPU.",
    quandoProcurar: [
      "Possui posse de imóvel rural sem título de propriedade",
      "Precisa regularizar documentação junto ao INCRA ou ITERACRE",
      "Quer obter crédito rural e o banco exige documentação regular",
      "Está em conflito possessório com vizinhos ou com o poder público",
      "Precisa de georreferenciamento certificado pelo INCRA",
      "Deseja ingressar com usucapião rural",
    ],
    documentos: [
      "Documentos da posse (recibos, contratos, declarações antigas)",
      "Planta e memorial descritivo do imóvel (se houver)",
      "CCIR (Certificado de Cadastro de Imóvel Rural)",
      "ITR (Imposto Territorial Rural) dos últimos 5 anos",
      "CAR (Cadastro Ambiental Rural)",
      "Georreferenciamento certificado (se já realizado)",
      "RG e CPF do posseiro/proprietário",
      "Certidão do imóvel no Registro de Imóveis (se houver matrícula)",
    ],
    situacoes: [
      { titulo: "Posse antiga sem título", texto: "Famílias que ocupam a terra há décadas sem documento formal. A regularização pode ocorrer pela via administrativa (INCRA/ITERACRE) ou judicial (usucapião especial rural), conforme a origem da ocupação." },
      { titulo: "Conflito de limites entre vizinhos", texto: "Disputas sobre os limites do imóvel rural são resolvidas com georreferenciamento, retificação de matrícula e, quando necessário, ação demarcatória." },
      { titulo: "Terra em área da União", texto: "Imóveis rurais situados em terras da União na Amazônia Legal podem ser regularizados pela Lei nº 11.952/2009, com critérios específicos de tamanho, tempo de ocupação e destinação." },
      { titulo: "Imóvel sem georreferenciamento", texto: "O georreferenciamento é obrigatório para imóveis acima de determinada área. Sem ele, o imóvel fica bloqueado para transferência, hipoteca e outros atos registrais." },
    ],
    beneficios: [
      "Análise da cadeia dominial e da situação possessória",
      "Titulação e regularização junto a INCRA, ITERACRE e SPU",
      "Usucapião rural e regularização documental do imóvel",
      "Retificação de matrícula e resolução de conflitos de limites",
    ],
    paraQuem: ["Produtores rurais", "Posseiros de boa-fé", "Famílias com imóveis sem título", "Proprietários que precisam de georreferenciamento"],
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
      { q: "Qual a diferença entre INCRA e ITERACRE?", a: "O INCRA é o órgão federal responsável por terras da União. O ITERACRE é o Instituto de Terras do Acre, responsável por terras estaduais. O caminho da regularização depende de quem é o titular originário da terra." },
      { q: "A regularização fundiária valoriza meu imóvel?", a: "Sim. O imóvel regularizado tem valor de mercado significativamente maior, permite acesso a crédito rural, financiamentos e pode ser transferido, hipotecado ou arrendado com segurança jurídica." },
      { q: "Atende produtores rurais de todo o Acre?", a: "Sim. Atendemos de forma presencial e digital produtores de Rio Branco, Cruzeiro do Sul, Sena Madureira, Tarauacá, Feijó, Brasiléia, Xapuri, Bujari, Porto Acre e todos os demais municípios." },
    ],
  },
  {
    slug: "ambiental-rural",
    titulo: "Ambiental Rural",
    curto: "CAR, Reserva Legal, APP, embargos",
    icone: "Trees",
    categoria: "Agro",
    agro: true,
    ctaTexto: "Autuado pelo IBAMA ou SEMA? Avaliamos sua defesa administrativa.",
    ctaWhatsapp: "Olá, recebi um auto de infração/embargo ambiental e preciso de orientação jurídica.",
    resumo:
      "Assessoria jurídica ambiental para o produtor rural: Cadastro Ambiental Rural (CAR), regularização de Reserva Legal e Área de Preservação Permanente (APP), defesa em autos de infração e embargos do IBAMA e da SEMA, e adequação ao Código Florestal.",
    problema:
      "O produtor rural no Acre enfrenta uma legislação ambiental complexa e fiscalização rigorosa. Autos de infração do IBAMA e da SEMA, embargos de áreas produtivas, exigências de recomposição de Reserva Legal e APP geram insegurança e prejuízo financeiro. Em Sena Madureira, Tarauacá, Feijó, Brasiléia e outros municípios, produtores são autuados sem orientação prévia e perdem prazos de defesa, transformando multas que poderiam ser reduzidas ou anuladas em dívidas consolidadas.",
    quandoProcurar: [
      "Recebeu auto de infração do IBAMA ou da SEMA",
      "A propriedade foi embargada total ou parcialmente",
      "Precisa regularizar o CAR (Cadastro Ambiental Rural)",
      "Tem passivo de Reserva Legal ou APP",
      "Quer aderir ao Programa de Regularização Ambiental (PRA)",
      "Precisa de licenciamento ambiental para atividade rural",
      "Foi notificado sobre desmatamento ou queimada irregular",
    ],
    documentos: [
      "Auto de infração e/ou termo de embargo (se recebido)",
      "CAR (recibo ou comprovante de inscrição)",
      "Matrícula do imóvel ou documento de posse",
      "Georreferenciamento da propriedade",
      "Licenças ambientais (se houver)",
      "Fotos aéreas ou imagens de satélite da propriedade",
      "RG e CPF do proprietário/posseiro",
      "CCIR e ITR",
    ],
    situacoes: [
      { titulo: "Auto de infração por desmatamento", texto: "O IBAMA ou a SEMA lavrou auto por desmatamento irregular. A defesa técnica analisa a legalidade do auto, a precisão da área desmatada, a existência de autorização prévia e eventuais vícios no procedimento." },
      { titulo: "Embargo de área produtiva", texto: "A área foi embargada e o produtor não pode exercer atividade econômica. O desembargo depende de defesa administrativa ou judicial, regularização ambiental e comprovação de conformidade." },
      { titulo: "Regularização de Reserva Legal", texto: "A propriedade não atinge o percentual de Reserva Legal exigido (80% na Amazônia Legal). O Código Florestal prevê instrumentos de recomposição, regeneração natural ou compensação." },
      { titulo: "CAR pendente ou com erro", texto: "O Cadastro Ambiental Rural está pendente, com informações incorretas ou não validado. A regularização do CAR é pré-requisito para a adesão ao PRA e para evitar restrições ao crédito rural." },
    ],
    beneficios: [
      "Regularização do CAR e adesão a programas de regularização ambiental",
      "Defesa administrativa e judicial em autos de infração e embargos (IBAMA/SEMA)",
      "Adequação de Reserva Legal e APP ao Código Florestal",
      "Licenciamento ambiental e assessoria preventiva para o produtor rural",
    ],
    paraQuem: ["Produtores rurais", "Empresas do agronegócio", "Proprietários autuados por órgãos ambientais", "Posseiros com passivo ambiental"],
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
      { q: "Qual o percentual de Reserva Legal exigido no Acre?", a: "Na Amazônia Legal, o percentual de Reserva Legal é de 80% para áreas de floresta. Para áreas de cerrado situadas na Amazônia Legal, é de 35%. Há possibilidade de redução em casos previstos no Código Florestal." },
      { q: "A multa do IBAMA pode ser reduzida?", a: "Sim. A legislação prevê hipóteses de redução, conversão em serviços ambientais e parcelamento. A defesa técnica pode identificar vícios que levem à anulação ou à redução significativa da multa." },
      { q: "Atende produtores rurais de todo o Acre?", a: "Sim. Atuamos em todo o estado — Rio Branco, Cruzeiro do Sul, Sena Madureira, Tarauacá, Feijó, Brasiléia, Xapuri, Bujari, Porto Acre, Capixaba, Acrelândia, Plácido de Castro e demais municípios." },
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
