export type CidadeContent = {
  slug: string;
  nome: string;
  titulo: string;
  descricao: string;
  contexto: string;
  intro: string;
  faq: { q: string; a: string }[];
};

export type AtendimentoContent = {
  slug: string;
  nome: string;
  titulo: string;
  descricao: string;
  intro: string;
  bullets: string[];
  faq: { q: string; a: string }[];
};

export const CIDADES_CONTENT: CidadeContent[] = [
  {
    slug: 'londrina',
    nome: 'Londrina',
    titulo: 'Agência de Marketing em Londrina',
    descricao:
      'Agência de marketing digital em Londrina: tráfego pago, SEO, sites e automação com foco em resultado. Atendimento presencial na cidade.',
    contexto:
      'Segunda maior cidade do Paraná e principal polo do norte do estado, Londrina concentra uma economia diversificada e madura, ancorada em saúde, educação e agronegócio. A cidade é referência regional em serviços médicos e hospitalares, abriga universidades como a UEL e uma forte rede de faculdades particulares, e movimenta um agro robusto ligado à soja, café e cadeia agroindustrial. O comércio e os serviços do centro e da região da Gleba Palhano são intensos, com grande presença de clínicas, escritórios, franquias e imobiliárias disputando a atenção de um público urbano exigente e conectado.',
    intro:
      'Como agência sediada em Londrina, a Matra atende empresas locais presencialmente, com reuniões na cidade e times dedicados a cada conta. Conhecemos o mercado londrinense de perto e construímos estratégias sob medida para clínicas, comércio, indústria e serviços da região.',
    faq: [
      {
        q: 'A Matra atende presencialmente em Londrina?',
        a: 'Sim. Como somos sediados em Londrina, fazemos reuniões presenciais, visitas e acompanhamento próximo do seu negócio na cidade e região.',
      },
      {
        q: 'Quanto custa contratar marketing digital em Londrina?',
        a: 'O investimento varia conforme o serviço e o porte da empresa. Montamos um plano sob medida após entender seus objetivos, sem pacotes engessados.',
      },
      {
        q: 'Em quanto tempo aparecem os primeiros resultados?',
        a: 'Campanhas de tráfego pago geram resultados nas primeiras semanas. SEO e construção de marca são estratégias de médio prazo, com evolução consistente a partir de 3 a 6 meses.',
      },
    ],
  },
  {
    slug: 'maringa',
    nome: 'Maringá',
    titulo: 'Agência de Marketing em Maringá',
    descricao:
      'Agência de marketing digital em Maringá: tráfego pago, SEO e sites para empresas locais. Estratégia orientada a resultado com atendimento próximo.',
    contexto:
      'Conhecida como a "Cidade Canção" e planejada em torno de amplas avenidas e áreas verdes, Maringá tem um dos melhores índices de qualidade de vida do Paraná e uma economia pujante puxada por serviços, construção civil, confecção e agronegócio. A cidade é um forte polo de moda e vestuário, com destaque para o setor de confecção e atacado, além de sediar cooperativas e empresas agroindustriais de grande porte. O mercado imobiliário é aquecido, com verticalização acelerada, e o comércio de alto padrão atrai consumidores de toda a região metropolitana.',
    intro:
      'A Matra atende Maringá com estratégias digitais alinhadas ao perfil dinâmico da cidade, combinando reuniões presenciais quando necessário e operação remota ágil. Trabalhamos com confecções, imobiliárias, comércio e serviços que querem crescer com previsibilidade.',
    faq: [
      {
        q: 'A Matra atende empresas de Maringá?',
        a: 'Sim. Atendemos Maringá de forma remota com agilidade e, quando o projeto exige, fazemos reuniões presenciais para alinhamento e planejamento.',
      },
      {
        q: 'Quanto custa uma estratégia de marketing em Maringá?',
        a: 'Definimos o investimento conforme os canais e o volume de trabalho. Elaboramos uma proposta personalizada após entender suas metas de crescimento.',
      },
      {
        q: 'Vocês atendem o setor de confecção e moda de Maringá?',
        a: 'Sim. Temos experiência com comércio, atacado e confecção, criando campanhas de tráfego e presença digital para vender no varejo e no atacado.',
      },
    ],
  },
  {
    slug: 'curitiba',
    nome: 'Curitiba',
    titulo: 'Agência de Marketing em Curitiba',
    descricao:
      'Agência de marketing digital para Curitiba: tráfego pago, SEO e desenvolvimento de sites e sistemas. Operação remota com padrão de resultado.',
    contexto:
      'Capital do Paraná e um dos maiores centros econômicos do Sul do Brasil, Curitiba abriga um parque industrial diversificado — com forte presença automotiva, tecnologia e logística — além de um setor de serviços altamente qualificado. A cidade é reconhecida como um dos principais polos de tecnologia e inovação do país, com startups, softwarehouses e empresas de TI, e concentra grandes redes de saúde, educação superior e serviços financeiros. O consumidor curitibano é sofisticado e digital, o que eleva a concorrência por atenção nos canais online.',
    intro:
      'A Matra atende Curitiba de forma remota, com processos ágeis e comunicação constante. Levamos à capital a mesma exigência de resultado que aplicamos no norte do Paraná, ideal para empresas de serviços, tecnologia e comércio que competem em um mercado maduro.',
    faq: [
      {
        q: 'A Matra atende Curitiba mesmo sendo de Londrina?',
        a: 'Sim. Atendemos Curitiba integralmente de forma remota, com reuniões online, relatórios e acompanhamento próximo do desempenho das campanhas.',
      },
      {
        q: 'Como funciona o atendimento remoto para Curitiba?',
        a: 'Todo o trabalho é conduzido online, com videochamadas de alinhamento, aprovações digitais e relatórios periódicos de resultado, sem perda de proximidade.',
      },
      {
        q: 'Vocês atendem empresas de tecnologia e serviços?',
        a: 'Sim. Temos experiência em tráfego, SEO, sites e sistemas para empresas de tecnologia, serviços e comércio que atuam em mercados competitivos.',
      },
    ],
  },
  {
    slug: 'cascavel',
    nome: 'Cascavel',
    titulo: 'Agência de Marketing em Cascavel',
    descricao:
      'Agência de marketing digital para Cascavel: tráfego pago, SEO e sites com foco no agronegócio e comércio do oeste do Paraná.',
    contexto:
      'Principal cidade do oeste do Paraná, Cascavel é um forte polo agroindustrial, comercial e de serviços que funciona como centro de referência para uma vasta região. A economia gira em torno do agronegócio — com cooperativas, cadeia de grãos, avicultura e suinocultura de grande escala — além de um comércio atacadista e varejista robusto e um setor de saúde e educação que atende municípios vizinhos. A cidade combina o dinamismo do campo com um centro urbano em expansão, o que cria oportunidades para negócios que sabem se comunicar com públicos do agro e da cidade.',
    intro:
      'A Matra atende Cascavel remotamente, com estratégias que dialogam tanto com o agronegócio quanto com o comércio e os serviços urbanos da região oeste. Estruturamos campanhas e presença digital para empresas que querem liderar no seu mercado local.',
    faq: [
      {
        q: 'A Matra atende empresas de Cascavel?',
        a: 'Sim. Atendemos Cascavel e toda a região oeste do Paraná de forma remota, com acompanhamento próximo e reuniões online recorrentes.',
      },
      {
        q: 'Vocês têm experiência com agronegócio?',
        a: 'Sim. Criamos campanhas e conteúdo para empresas ligadas ao agro, cooperativas, revendas e serviços que atendem o produtor rural.',
      },
      {
        q: 'Quanto custa começar com marketing digital em Cascavel?',
        a: 'O investimento é definido conforme os canais e objetivos. Fazemos um diagnóstico inicial e apresentamos uma proposta adequada ao seu porte.',
      },
    ],
  },
  {
    slug: 'ponta-grossa',
    nome: 'Ponta Grossa',
    titulo: 'Agência de Marketing em Ponta Grossa',
    descricao:
      'Agência de marketing digital para Ponta Grossa: tráfego pago, SEO e sites para indústria, comércio e serviços dos Campos Gerais.',
    contexto:
      'Maior cidade dos Campos Gerais, Ponta Grossa tem um dos parques industriais mais relevantes do Paraná, com destaque para os setores de alimentos, madeira e papel, metalmecânica e agroindústria. Localizada em um importante entroncamento rodoferroviário, a cidade concentra logística, distribuição e um comércio forte que atende toda a região. Abriga a UEPG e um ecossistema de educação e serviços que sustenta um mercado consumidor sólido, com presença crescente de indústrias que buscam se posicionar também no digital.',
    intro:
      'A Matra atende Ponta Grossa de forma remota, com foco em conectar indústria, comércio e serviços ao público certo. Desenvolvemos sites, campanhas e estratégias de SEO que dão visibilidade a empresas dos Campos Gerais.',
    faq: [
      {
        q: 'A Matra atende Ponta Grossa e os Campos Gerais?',
        a: 'Sim. Atendemos Ponta Grossa e a região dos Campos Gerais de forma remota, com reuniões online e acompanhamento contínuo dos resultados.',
      },
      {
        q: 'Vocês atendem indústrias?',
        a: 'Sim. Trabalhamos com indústria e negócios B2B, criando sites, campanhas e geração de leads qualificados para o setor produtivo.',
      },
      {
        q: 'Em quanto tempo vejo resultado das campanhas?',
        a: 'No tráfego pago os primeiros resultados aparecem em semanas. Estratégias de SEO e autoridade de marca amadurecem ao longo de alguns meses.',
      },
    ],
  },
  {
    slug: 'foz-do-iguacu',
    nome: 'Foz do Iguaçu',
    titulo: 'Agência de Marketing em Foz do Iguaçu',
    descricao:
      'Agência de marketing digital para Foz do Iguaçu: tráfego pago, SEO e sites para turismo, hotelaria e comércio da tríplice fronteira.',
    contexto:
      'Um dos principais destinos turísticos do Brasil, Foz do Iguaçu tem sua economia fortemente ligada ao turismo, à hotelaria, ao comércio e à energia, impulsionada pelas Cataratas do Iguaçu, pela Usina de Itaipu e pela posição estratégica na tríplice fronteira com Argentina e Paraguai. A cidade recebe fluxo constante de visitantes nacionais e internacionais, o que sustenta hotéis, restaurantes, agências de turismo, câmbio e um comércio voltado tanto ao turista quanto ao mercado transfronteiriço. Esse perfil exige presença digital multilíngue e campanhas orientadas à conversão de reservas e visitas.',
    intro:
      'A Matra atende Foz do Iguaçu remotamente, com estratégias pensadas para o turismo, a hotelaria e o comércio da fronteira. Criamos campanhas e sites que capturam a demanda de visitantes e transformam interesse em reservas e vendas.',
    faq: [
      {
        q: 'A Matra atende empresas de turismo em Foz do Iguaçu?',
        a: 'Sim. Atendemos hotéis, pousadas, agências e comércio ligados ao turismo, com campanhas focadas em reservas e captação de visitantes.',
      },
      {
        q: 'Vocês fazem campanhas para atrair turistas de outras cidades?',
        a: 'Sim. Segmentamos anúncios por região e intenção de viagem para alcançar turistas no momento certo da decisão, dentro e fora do Paraná.',
      },
      {
        q: 'Como é o atendimento à distância para Foz do Iguaçu?',
        a: 'Todo o trabalho é remoto, com reuniões online, aprovações digitais e relatórios de desempenho, mantendo proximidade e agilidade.',
      },
    ],
  },
  {
    slug: 'apucarana',
    nome: 'Apucarana',
    titulo: 'Agência de Marketing em Apucarana',
    descricao:
      'Agência de marketing digital para Apucarana: tráfego pago, SEO e sites para a indústria de bonés, confecção e comércio local.',
    contexto:
      'Conhecida como a "Capital Nacional do Boné", Apucarana tem na indústria de bonés e na confecção o coração de sua economia, com centenas de fábricas que produzem e distribuem para todo o Brasil. A cidade também é forte em vestuário, brindes personalizados e comércio, e mantém uma base agrícola relevante ligada ao café e aos grãos da região. Esse tecido produtivo, formado por muitas pequenas e médias indústrias, cria uma demanda clara por vendas online, presença em marketplaces e campanhas que alcancem clientes e revendedores em escala nacional.',
    intro:
      'A Matra atende Apucarana remotamente, com estratégias voltadas à indústria de bonés, confecção e comércio da cidade. Ajudamos fabricantes e lojistas a vender para todo o Brasil com tráfego pago, e-commerce e presença digital profissional.',
    faq: [
      {
        q: 'A Matra atende a indústria de bonés e confecção de Apucarana?',
        a: 'Sim. Temos experiência com fabricantes e confecções, criando campanhas e canais de venda para atacado, varejo e revendedores em todo o país.',
      },
      {
        q: 'Vocês ajudam a vender para fora de Apucarana?',
        a: 'Sim. Estruturamos tráfego pago e presença digital para alcançar clientes e revendedores em escala nacional, não apenas na região.',
      },
      {
        q: 'Quanto custa começar a divulgar minha fábrica online?',
        a: 'O investimento depende dos canais e objetivos. Fazemos um diagnóstico e montamos uma proposta compatível com o porte da sua indústria.',
      },
    ],
  },
  {
    slug: 'cambe',
    nome: 'Cambé',
    titulo: 'Agência de Marketing em Cambé',
    descricao:
      'Agência de marketing digital para Cambé: tráfego pago, SEO e sites para indústria, logística e comércio da região metropolitana de Londrina.',
    contexto:
      'Integrante da Região Metropolitana de Londrina e praticamente conurbada com a capital regional, Cambé tem forte vocação industrial e logística, favorecida pela posição estratégica junto às rodovias que cortam o norte do Paraná. A cidade abriga indústrias de alimentos, metalmecânica e distribuição, além de uma base agrícola tradicional ligada aos grãos. O crescimento residencial é expressivo, com muitos moradores que trabalham em Londrina, o que aquece o comércio de bairro, os serviços locais e o mercado imobiliário voltado a famílias.',
    intro:
      'A Matra atende Cambé com a vantagem da proximidade: estando na vizinha Londrina, oferecemos acompanhamento próximo, presencial quando necessário, e estratégias digitais para indústria, comércio e serviços da cidade.',
    faq: [
      {
        q: 'A Matra atende empresas de Cambé presencialmente?',
        a: 'Sim. Por estarmos na vizinha Londrina, atendemos Cambé com facilidade, incluindo reuniões presenciais e acompanhamento próximo do seu negócio.',
      },
      {
        q: 'Vocês atendem indústria e logística em Cambé?',
        a: 'Sim. Criamos sites, campanhas e geração de leads para indústria, distribuição e serviços, além de comércio local e mercado imobiliário.',
      },
      {
        q: 'Quanto custa começar com marketing digital em Cambé?',
        a: 'O investimento é definido conforme os canais e objetivos. Fazemos um diagnóstico inicial e apresentamos uma proposta sob medida.',
      },
    ],
  },
  {
    slug: 'ibipora',
    nome: 'Ibiporã',
    titulo: 'Agência de Marketing em Ibiporã',
    descricao:
      'Agência de marketing digital para Ibiporã: tráfego pago, SEO e sites para indústria, agronegócio e comércio da região de Londrina.',
    contexto:
      'Conhecida como "Cidade das Águas" pela abundância de nascentes e rios da região, Ibiporã faz parte da Região Metropolitana de Londrina e combina um perfil industrial em expansão com uma forte tradição agrícola. A cidade tem distritos industriais que atraem indústrias de alimentos, embalagens e metalmecânica, ao mesmo tempo em que mantém a produção de grãos e a agroindústria como pilares. A proximidade com Londrina impulsiona o setor de serviços, o comércio local e um mercado residencial em crescimento.',
    intro:
      'A Matra atende Ibiporã com a agilidade de quem está ao lado, em Londrina. Estruturamos presença digital e campanhas para indústria, agro, comércio e serviços, com acompanhamento próximo e presencial quando preciso.',
    faq: [
      {
        q: 'A Matra atende Ibiporã?',
        a: 'Sim. Por estarmos na vizinha Londrina, atendemos Ibiporã de perto, com reuniões presenciais e operação remota conforme a necessidade do projeto.',
      },
      {
        q: 'Vocês têm experiência com indústria e agronegócio?',
        a: 'Sim. Trabalhamos com indústria, agroindústria e comércio, criando sites, campanhas e geração de leads adequados a cada setor.',
      },
      {
        q: 'Em quanto tempo vejo resultado das campanhas?',
        a: 'No tráfego pago os resultados aparecem em semanas. SEO e construção de marca evoluem de forma consistente ao longo de alguns meses.',
      },
    ],
  },
  {
    slug: 'rolandia',
    nome: 'Rolândia',
    titulo: 'Agência de Marketing em Rolândia',
    descricao:
      'Agência de marketing digital para Rolândia: tráfego pago, SEO e sites para agro, comércio e indústria da região de Londrina.',
    contexto:
      'Marcada pela colonização de imigrantes alemães e italianos, Rolândia carrega essa herança cultural em sua identidade e mantém uma economia sólida ancorada no agronegócio, no comércio e em uma indústria diversificada. A cidade é tradicional na produção de café e grãos, com forte presença de agroindústria e cooperativismo, e conta com um comércio central ativo que atende tanto a população local quanto o entorno. Situada no eixo de Londrina, combina o dinamismo agrícola com um mercado urbano consumidor em crescimento.',
    intro:
      'A Matra atende Rolândia com proximidade e conhecimento do mercado regional. Criamos estratégias digitais para o agro, o comércio e a indústria local, com acompanhamento próximo a partir da vizinha Londrina.',
    faq: [
      {
        q: 'A Matra atende empresas de Rolândia?',
        a: 'Sim. Atendemos Rolândia de perto, a partir de Londrina, com reuniões presenciais quando necessário e operação remota ágil.',
      },
      {
        q: 'Vocês atendem o agronegócio e o comércio local?',
        a: 'Sim. Criamos campanhas e presença digital para agro, cooperativas, comércio e serviços, adaptando a estratégia a cada tipo de público.',
      },
      {
        q: 'Quanto custa contratar marketing digital em Rolândia?',
        a: 'O investimento varia conforme os serviços e o porte da empresa. Elaboramos uma proposta personalizada após entender seus objetivos.',
      },
    ],
  },
  {
    slug: 'arapongas',
    nome: 'Arapongas',
    titulo: 'Agência de Marketing em Arapongas',
    descricao:
      'Agência de marketing digital para Arapongas: tráfego pago, SEO e e-commerce para o polo moveleiro e a indústria de móveis da cidade.',
    contexto:
      'Reconhecida nacionalmente como um dos maiores polos moveleiros do Brasil, Arapongas — a "Cidade dos Pássaros", cujas ruas levam nomes de aves — tem sua economia movida pela indústria de móveis, com centenas de fábricas e uma cadeia de fornecedores, madeireiras e transportadoras que abastece todo o país. Além do setor moveleiro, a cidade tem indústria de colchões, estofados e um comércio robusto. Esse parque industrial, forte em vendas B2B e distribuição nacional, cria demanda clara por catálogos digitais, presença em canais de venda e campanhas que alcancem lojistas e revendedores.',
    intro:
      'A Matra atende Arapongas com foco no seu polo moveleiro. Ajudamos fábricas de móveis, estofados e a indústria local a vender para todo o Brasil com tráfego pago, e-commerce, catálogos digitais e presença profissional, com apoio próximo da vizinha Londrina.',
    faq: [
      {
        q: 'A Matra atende a indústria moveleira de Arapongas?',
        a: 'Sim. Temos experiência com fábricas de móveis e estofados, criando campanhas e canais de venda para alcançar lojistas e revendedores em todo o país.',
      },
      {
        q: 'Vocês ajudam a vender móveis para fora de Arapongas?',
        a: 'Sim. Estruturamos tráfego pago, e-commerce e catálogos digitais para vender em escala nacional, tanto no atacado quanto no varejo.',
      },
      {
        q: 'Vocês atendem Arapongas presencialmente?',
        a: 'Sim. Por estarmos na região, na vizinha Londrina, oferecemos atendimento próximo, com reuniões presenciais quando o projeto exige.',
      },
    ],
  },
  {
    slug: 'cornelio-procopio',
    nome: 'Cornélio Procópio',
    titulo: 'Agência de Marketing em Cornélio Procópio',
    descricao:
      'Agência de marketing digital para Cornélio Procópio: tráfego pago, SEO e sites para agro, comércio e serviços do norte pioneiro do Paraná.',
    contexto:
      'Polo regional do norte pioneiro do Paraná, Cornélio Procópio tem sua economia baseada no agronegócio, no comércio e nos serviços que atendem uma ampla área de municípios vizinhos. A produção de grãos, café e cana-de-açúcar sustenta a agroindústria da região, enquanto a cidade se destaca também como centro educacional, sediando um campus da Universidade Estadual do Norte do Paraná (UENP) e uma unidade da UTFPR. Essa combinação de agro forte com um polo universitário movimenta o comércio, os serviços e um mercado consumidor jovem e conectado.',
    intro:
      'A Matra atende Cornélio Procópio de forma remota, com estratégias voltadas ao agro, comércio e serviços do norte pioneiro. Levamos à cidade campanhas, sites e SEO com o mesmo padrão de resultado que aplicamos na região de Londrina.',
    faq: [
      {
        q: 'A Matra atende Cornélio Procópio e o norte pioneiro?',
        a: 'Sim. Atendemos Cornélio Procópio e a região do norte pioneiro de forma remota, com reuniões online e acompanhamento contínuo dos resultados.',
      },
      {
        q: 'Vocês têm experiência com agronegócio e comércio?',
        a: 'Sim. Criamos campanhas e presença digital para o agro, comércio e serviços, ajustando a comunicação ao público de cada segmento.',
      },
      {
        q: 'Como funciona o atendimento à distância?',
        a: 'Todo o trabalho é conduzido online, com videochamadas de alinhamento, aprovações digitais e relatórios periódicos de desempenho.',
      },
    ],
  },
];

export const ATENDIMENTO_CONTENT: AtendimentoContent[] = [
  {
    slug: 'agencia-de-marketing-digital-em-londrina',
    nome: 'Agência de Marketing Digital em Londrina',
    titulo: 'Agência de Marketing Digital em Londrina',
    descricao:
      'Agência de marketing digital completa em Londrina: tráfego pago, SEO, sites, social media e automação com foco em resultado mensurável.',
    intro:
      'A Matra é uma agência de marketing digital full-service em Londrina, que reúne tráfego pago, SEO, sites e conteúdo em uma estratégia única e integrada. Cada canal trabalha alinhado ao seu objetivo de crescimento, com métricas claras e acompanhamento próximo.',
    bullets: [
      'Estratégia integrada de aquisição: tráfego pago, SEO e social media trabalhando juntos',
      'Criação de sites e landing pages otimizados para conversão',
      'Relatórios transparentes com foco em leads, vendas e retorno sobre investimento',
      'Atendimento presencial em Londrina e time dedicado à sua conta',
    ],
    faq: [
      {
        q: 'O que uma agência de marketing digital faz?',
        a: 'Planeja e executa a presença online do seu negócio: anúncios, SEO, site, conteúdo e automação, sempre com foco em gerar leads e vendas mensuráveis.',
      },
      {
        q: 'A Matra atende presencialmente em Londrina?',
        a: 'Sim. Somos sediados em Londrina e oferecemos reuniões presenciais, além de operação remota ágil quando preferir.',
      },
      {
        q: 'Preciso contratar todos os serviços de uma vez?',
        a: 'Não. Montamos um plano por etapas conforme sua prioridade e orçamento, começando pelos canais de maior impacto para o seu negócio.',
      },
    ],
  },
  {
    slug: 'agencia-de-trafego-pago-em-londrina',
    nome: 'Agência de Tráfego Pago em Londrina',
    titulo: 'Agência de Tráfego Pago em Londrina',
    descricao:
      'Agência de tráfego pago em Londrina: campanhas no Google Ads e Meta Ads otimizadas para gerar leads e vendas com previsibilidade.',
    intro:
      'A Matra é especialista em tráfego pago em Londrina, criando e otimizando campanhas no Google Ads e no Meta Ads para transformar investimento em anúncios em leads e vendas reais. Trabalhamos com segmentação precisa, testes constantes e foco total em retorno.',
    bullets: [
      'Campanhas no Google Ads (Pesquisa, Display, YouTube) e Meta Ads (Instagram e Facebook)',
      'Segmentação por região, interesse e intenção de compra para reduzir desperdício',
      'Otimização contínua de criativos, públicos e lances com base em dados',
      'Acompanhamento de custo por lead, ROAS e resultados reais das campanhas',
    ],
    faq: [
      {
        q: 'Qual o investimento mínimo em tráfego pago?',
        a: 'Depende do seu mercado e objetivo. Definimos um orçamento de mídia que faça sentido para gerar volume de resultados sem desperdício.',
      },
      {
        q: 'Em quanto tempo o tráfego pago traz resultado?',
        a: 'Os primeiros resultados costumam aparecer nas primeiras semanas, com a performance melhorando conforme a campanha é otimizada com dados.',
      },
      {
        q: 'Vocês trabalham com Google e Meta Ads?',
        a: 'Sim. Atuamos nas duas plataformas e definimos o melhor mix conforme o comportamento do seu público e a jornada de compra.',
      },
    ],
  },
  {
    slug: 'agencia-de-marketing-em-londrina',
    nome: 'Agência de Marketing em Londrina',
    titulo: 'Agência de Marketing em Londrina',
    descricao:
      'Agência de marketing em Londrina: estratégia, branding, tráfego e conteúdo para posicionar sua marca e gerar crescimento consistente.',
    intro:
      'A Matra é uma agência de marketing em Londrina que une estratégia, marca e performance. Vamos além dos anúncios: ajudamos a posicionar seu negócio, fortalecer sua marca e construir um crescimento sustentável no digital e fora dele.',
    bullets: [
      'Planejamento de marketing e posicionamento de marca alinhado aos seus objetivos',
      'Produção de conteúdo, social media e vídeo para fortalecer a presença da marca',
      'Campanhas de performance integradas à estratégia de longo prazo',
      'Atendimento próximo e presencial em Londrina, com visão de negócio',
    ],
    faq: [
      {
        q: 'Qual a diferença entre marketing e tráfego pago?',
        a: 'Tráfego pago é um canal de aquisição. Marketing é a estratégia completa: marca, posicionamento, conteúdo e canais trabalhando juntos pelo crescimento.',
      },
      {
        q: 'A Matra cuida da minha marca por completo?',
        a: 'Sim. Podemos conduzir desde o posicionamento e a identidade até as campanhas, conteúdo e presença digital do seu negócio.',
      },
      {
        q: 'Vocês atendem pequenas empresas em Londrina?',
        a: 'Sim. Trabalhamos com negócios de diferentes portes, adaptando a estratégia e o investimento à realidade de cada empresa.',
      },
    ],
  },
  {
    slug: 'gestor-de-trafego-em-londrina',
    nome: 'Gestor de Tráfego em Londrina',
    titulo: 'Gestor de Tráfego em Londrina',
    descricao:
      'Gestor de tráfego em Londrina: gestão profissional de campanhas no Google e Meta Ads com otimização diária e foco em resultado.',
    intro:
      'A Matra oferece gestão de tráfego profissional em Londrina, com um gestor dedicado cuidando das suas campanhas no dia a dia. Nada de campanhas no piloto automático: fazemos análise contínua, ajustes e otimização para extrair o máximo de cada real investido.',
    bullets: [
      'Gestor de tráfego dedicado acompanhando suas campanhas de perto',
      'Otimização frequente de públicos, criativos, lances e orçamento',
      'Estruturação de campanhas do zero: pixel, conversões e rastreamento',
      'Relatórios claros de desempenho e reuniões de alinhamento periódicas',
    ],
    faq: [
      {
        q: 'O que faz um gestor de tráfego?',
        a: 'Planeja, cria e otimiza suas campanhas de anúncios continuamente, cuidando de segmentação, orçamento, criativos e rastreamento de conversões.',
      },
      {
        q: 'Preciso de um gestor de tráfego ou posso rodar sozinho?',
        a: 'Você pode rodar sozinho, mas um gestor evita desperdício, testa com método e costuma reduzir o custo por resultado de forma significativa.',
      },
      {
        q: 'Como acompanho os resultados das campanhas?',
        a: 'Você recebe relatórios objetivos e participa de reuniões de alinhamento, com total transparência sobre investimento e retorno.',
      },
    ],
  },
  {
    slug: 'marketing-para-clinicas-em-londrina',
    nome: 'Marketing para Clínicas em Londrina',
    titulo: 'Marketing para Clínicas em Londrina',
    descricao:
      'Marketing para clínicas em Londrina: tráfego pago, site e captação de pacientes com estratégias que respeitam as normas do setor de saúde.',
    intro:
      'A Matra faz marketing para clínicas e consultórios em Londrina, atraindo pacientes de forma ética e alinhada às normas dos conselhos de saúde. Estruturamos anúncios, site e agendamento para encher a agenda com o público certo, valorizando a autoridade do profissional.',
    bullets: [
      'Captação de pacientes com campanhas segmentadas por especialidade e região',
      'Sites e páginas de agendamento otimizados para converter contatos em consultas',
      'Comunicação alinhada às normas de publicidade do CFM e demais conselhos',
      'Presença digital que reforça a autoridade e a confiança na clínica',
    ],
    faq: [
      {
        q: 'Clínica pode anunciar respeitando o conselho?',
        a: 'Sim. Construímos campanhas dentro das diretrizes do CFM e dos conselhos, focando em informação e autoridade, sem promessas indevidas.',
      },
      {
        q: 'Como o marketing ajuda a agenda da clínica?',
        a: 'Atraímos pacientes com real intenção de agendar e facilitamos o contato, reduzindo horários ociosos e aumentando o número de consultas.',
      },
      {
        q: 'Vocês atendem clínicas de qual especialidade?',
        a: 'Atendemos diversas especialidades médicas, odontológicas e de estética, adaptando a estratégia ao perfil de paciente de cada clínica.',
      },
    ],
  },
  {
    slug: 'marketing-para-restaurantes-em-londrina',
    nome: 'Marketing para Restaurantes em Londrina',
    titulo: 'Marketing para Restaurantes em Londrina',
    descricao:
      'Marketing para restaurantes em Londrina: tráfego pago, delivery e presença local para lotar mesas e aumentar pedidos.',
    intro:
      'A Matra faz marketing para restaurantes, bares e delivery em Londrina, atraindo clientes com fome no momento certo. Trabalhamos presença local, campanhas geolocalizadas e conteúdo que dá água na boca para lotar o salão e aumentar os pedidos.',
    bullets: [
      'Campanhas geolocalizadas para alcançar quem está perto e com intenção de comer',
      'Otimização do perfil no Google e redes sociais para atrair movimento local',
      'Estratégias para delivery, reservas e datas de pico do restaurante',
      'Conteúdo e criativos que valorizam o cardápio e a experiência do lugar',
    ],
    faq: [
      {
        q: 'Como atrair mais clientes para o meu restaurante?',
        a: 'Com presença local forte no Google e redes, campanhas geolocalizadas e conteúdo atrativo do cardápio, alcançando quem está por perto e pronto para comer.',
      },
      {
        q: 'Vocês ajudam a aumentar pedidos no delivery?',
        a: 'Sim. Criamos campanhas e conteúdo voltados ao delivery, promovendo pratos, combos e horários de pico para elevar o volume de pedidos.',
      },
      {
        q: 'Marketing funciona para restaurante pequeno?',
        a: 'Sim. Ajustamos investimento e alcance à realidade do seu negócio, priorizando o público da sua região para gerar movimento constante.',
      },
    ],
  },
  {
    slug: 'marketing-para-imobiliarias-em-londrina',
    nome: 'Marketing para Imobiliárias em Londrina',
    titulo: 'Marketing para Imobiliárias em Londrina',
    descricao:
      'Marketing para imobiliárias e corretores em Londrina: geração de leads qualificados, anúncios de imóveis e sites que convertem.',
    intro:
      'A Matra faz marketing para imobiliárias e corretores em Londrina, gerando leads qualificados de compra e locação. Estruturamos campanhas por perfil de imóvel, sites com busca eficiente e captação que entrega contatos realmente interessados para o seu time comercial.',
    bullets: [
      'Geração de leads qualificados para venda e locação por perfil de imóvel',
      'Anúncios segmentados por região, faixa de preço e intenção de compra',
      'Sites e portais de imóveis com busca eficiente e páginas que convertem',
      'Integração com CRM para organizar e acompanhar os contatos gerados',
    ],
    faq: [
      {
        q: 'Como gerar leads qualificados para imóveis?',
        a: 'Com campanhas segmentadas por região, tipo e faixa de preço do imóvel, atraindo pessoas com real intenção de comprar ou alugar.',
      },
      {
        q: 'Vocês criam site e portal de imóveis?',
        a: 'Sim. Desenvolvemos sites e portais com busca eficiente, integração de anúncios e páginas otimizadas para transformar visitas em contatos.',
      },
      {
        q: 'O marketing atende corretor autônomo também?',
        a: 'Sim. Trabalhamos tanto com imobiliárias quanto com corretores autônomos, dimensionando a estratégia ao volume de imóveis e ao orçamento.',
      },
    ],
  },
];
