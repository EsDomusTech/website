/**
 * Central content data for EsDomusTech — drives the SEO landing pages,
 * service detail pages, project portfolio and listing pages.
 */

export const SITE = {
  name: "EsDomusTech",
  domain: "https://domustech.lovable.app",
  tagline: "Casas Modulares Tecnológicas",
  phone: "+351 935 677 556",
  email: "geral@esdomustech.com",
  address: "Tv. Joaquim Dias Salgueiro 186, 4470-558 Vila Nova da Telha",
  hours: "Segunda a Sexta, 8h-17h",
  mapsUrl: "https://maps.app.goo.gl/g1MDpujHhEtBvNqs7",
} as const;

/** Preço de referência chave-na-mão. Desativar campanha: CAMPAIGN_ACTIVE = false. */
export const PRICING = {
  CAMPAIGN_ACTIVE: true,
  REGULAR: 1500,
  CAMPAIGN: 1350,
} as const;

/** Schema.org areaServed — Norte de Portugal, onde fazemos entrega e acompanhamento direto da obra. */
export const AREA_SERVED_NORTE = [
  { "@type": "AdministrativeArea", name: "Norte de Portugal" },
  { "@type": "City", name: "Porto" },
  { "@type": "City", name: "Braga" },
  { "@type": "City", name: "Aveiro" },
  { "@type": "City", name: "Viana do Castelo" },
  { "@type": "City", name: "Vila Real" },
  { "@type": "City", name: "Bragança" },
] as const;

export type Service = {
  slug: string;
  name: string;
  /** Page H1, split into two words for the gold-accent title pattern. */
  titleFirst: string;
  titleSecond: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  intro: string[];
  features: string[];
  image: string;
  process: { num: string; title: string; text: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "casas-modulares-porto",
    name: "Casas Modulares no Porto",
    titleFirst: "CASAS",
    titleSecond: "MODULARES",
    metaTitle: "Casas Modulares Porto | Construção Modular | EsDomusTech",
    metaDescription:
      "Casas modulares no Porto: rápidas, sustentáveis e totalmente personalizadas. Projeto, fabrico e montagem chave na mão pela EsDomusTech.",
    excerpt:
      "Casas modulares pré-fabricadas, entregues chave na mão, com eficiência energética e prazos de construção reduzidos.",
    intro: [
      "Construímos casas modulares no Porto que unem arquitetura contemporânea, conforto e sustentabilidade. Cada módulo é fabricado em ambiente controlado, garantindo qualidade superior e prazos de obra muito mais curtos do que na construção tradicional.",
      "Do estudo do terreno à montagem final, acompanhamos todo o processo. Personalizamos plantas, acabamentos e soluções energéticas para que a sua casa modular reflita exatamente o seu estilo de vida.",
    ],
    features: [
      "Projeto e licenciamento incluídos",
      "Eficiência energética classe A",
      "Prazos de construção até 60% mais rápidos",
      "Acabamentos totalmente personalizáveis",
    ],
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1200&h=800&fit=crop&auto=format&q=80",
    process: [
      { num: "01", title: "Consulta e Terreno", text: "Visita técnica ao terreno, análise de condicionantes legais e briefing detalhado do programa de necessidades." },
      { num: "02", title: "Projeto e Licenciamento", text: "Arquitetura, engenharia estrutural e gestão completa do processo de licenciamento camarário." },
      { num: "03", title: "Fabrico em Fábrica", text: "Produção dos módulos em ambiente fabril controlado, em paralelo com a aprovação do projeto — sem paragens de obra." },
      { num: "04", title: "Montagem e Entrega", text: "Transporte e montagem dos módulos no terreno em poucos dias, seguidos de acabamentos e ligações às redes. Entrega chave na mão com garantia estrutural de 10 anos. Prazos e condições sob consulta." },
    ],
  },
  {
    slug: "construcao-modular",
    name: "Construção Modular",
    titleFirst: "CONSTRUÇÃO",
    titleSecond: "MODULAR",
    metaTitle: "Construção Modular Porto | Edifícios e Habitação | EsDomusTech",
    metaDescription:
      "Construção modular para habitação, comércio e espaços corporativos no Porto. Soluções pré-fabricadas escaláveis, sustentáveis e de montagem rápida.",
    excerpt:
      "Soluções de construção modular escaláveis para habitação, comércio e espaços corporativos, com montagem rápida e limpa.",
    intro: [
      "A nossa construção modular adapta-se a projetos de qualquer escala: desde moradias unifamiliares a edifícios comerciais e estruturas corporativas. O fabrico em fábrica reduz desperdício, ruído e impacto ambiental na obra.",
      "Combinamos engenharia rigorosa com design flexível, permitindo expandir ou reconfigurar os espaços à medida que as suas necessidades evoluem.",
    ],
    features: [
      "Estruturas escaláveis e reconfiguráveis",
      "Menor desperdício e impacto ambiental",
      "Controlo de qualidade em fábrica",
      "Integração de domótica e energias renováveis",
    ],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=800&fit=crop&auto=format&q=80",
    process: [
      { num: "01", title: "Análise de Requisitos", text: "Estudo da escala do projeto, uso pretendido (habitacional, comercial ou corporativo) e requisitos técnicos e regulamentares." },
      { num: "02", title: "Engenharia e Sistemas", text: "Cálculo estrutural, dimensionamento de especialidades (AVAC, elétrica, redes) e integração de domótica e energias renováveis." },
      { num: "03", title: "Pré-fabricação", text: "Módulos produzidos em fábrica com controlo de qualidade rigoroso — rastreabilidade total de materiais e inspecção final antes do envio." },
      { num: "04", title: "Montagem no Local", text: "Instalação com mínima perturbação do entorno, baixa produção de resíduos e cronograma cumprido — entregamos o que prometemos." },
    ],
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export type Project = {
  slug: string;
  name: string;
  category: string;
  spec: string;
  year: string;
  image: string;
  summary: string;
  description: string[];
  gallery?: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "moradia-t3-jardim",
    name: "Moradia T3",
    category: "Casa Modular",
    spec: "T3",
    year: "2026",
    image: "/projects/t3-hero.jpg",
    summary:
      "Moradia térrea T3 com fachada branca contínua, entrada em pátio recuado e jardim de acesso com iluminação exterior integrada no muro.",
    description: [
      "Esta moradia T3 destaca-se pela entrada recuada sob a cobertura saliente, criando um pátio de transição que protege a porta principal e o envidraçado de correr da sala.",
      "O muro perimetral em reboco branco integra iluminação led embutida e portão automatizado, e o jardim de acesso foi desenhado com percurso em lajetas sobre relva — um remate exterior cuidado até ao portão.",
    ],
    gallery: ["/projects/t3-hero.jpg"],
  },
  {
    slug: "moradia-t2-madeira",
    name: "Moradia T2",
    category: "Casa Modular",
    spec: "T2",
    year: "2026",
    image: "/projects/t2-nova-hero.jpg",
    summary:
      "Moradia T2 térrea com fachada mista em reboco branco e revestimento em compósito de madeira, deck exterior e relva sintética de baixa manutenção.",
    description: [
      "O contraste entre o reboco branco e as réguas de compósito de madeira na fachada principal dá profundidade ao volume, reforçado pela caixilharia escura dos envidraçados de correr.",
      "O deck em compósito prolonga-se da entrada até à zona de estar exterior, sobre um jardim em relva sintética que elimina manutenção — uma solução pensada para quem procura uma segunda casa pronta a usar.",
    ],
    gallery: ["/projects/t2-nova-hero.jpg"],
  },
  {
    slug: "moradia-t1-48-ii",
    name: "Moradia T1 · 48 m²",
    category: "Casa Modular",
    spec: "T1 · 48 m²",
    year: "2026",
    image: "/projects/t1-48-ii-hero.jpg",
    summary:
      "Moradia T1 de 48 m² com fachada totalmente branca, cobertura plana e deck em compósito de madeira ao longo de toda a frente envidraçada.",
    description: [
      "Um volume compacto e limpo: fachada branca sem interrupções, alpendre integrado sob a cobertura e uma frente contínua de portas e estores elétricos que abre a casa para o deck exterior.",
      "O deck em compósito de madeira acompanha todo o comprimento da fachada, criando uma zona de estar exterior directamente ligada à sala — o mesmo conceito chave-na-mão da tipologia T1 · 48 m², aplicado a um terreno diferente.",
    ],
    gallery: ["/projects/t1-48-ii-hero.jpg"],
  },
  {
    slug: "moradia-t2-72",
    name: "Moradia T2 · 72 m²",
    category: "Casa Modular",
    spec: "T2 · 72 m²",
    year: "2025",
    image: "/projects/t2-72-hero.jpg",
    summary:
      "Moradia térrea chave na mão com fachada em reboco branco e revestimento em compósito de madeira, zona exterior com piscina e interiores totalmente equipados.",
    description: [
      "Esta moradia T2 de 72 m² é um exemplo completo do nosso conceito chave na mão: estrutura em aço leve galvanizado produzida em fábrica, montagem rápida em obra e acabamentos prontos a habitar — cozinha equipada, caixilharia com estores elétricos e climatização preparada.",
      "O exterior combina reboco branco com painéis de compósito de madeira, deck, relvado e piscina, criando uma zona de estar exterior que prolonga a área útil da casa durante todo o ano.",
    ],
    gallery: [
      "/projects/t2-72-exterior.jpg",
      "/projects/t2-72-piscina.jpg",
      "/projects/t2-72-cozinha.jpg",
      "/projects/t2-72-terraco.jpg",
    ],
  },
  {
    slug: "moradia-t1-48",
    name: "Moradia T1 · 48 m²",
    category: "Casa Modular",
    spec: "T1 · 48 m²",
    year: "2026",
    image: "/projects/t1-48-hero.jpg",
    summary:
      "Moradia compacta de linhas puras com fachada bitone em cinza e branco, cobertura plana e deck exterior em madeira.",
    description: [
      "Com 48 m² de área útil, esta moradia T1 prova que uma casa compacta pode ter presença arquitetónica: volumes limpos, cobertura plana com remate saliente e uma paleta bitone que valoriza a geometria do edifício.",
      "A estrutura em aço leve (LSF) foi montada em poucas semanas — do esqueleto galvanizado ao isolamento, painéis OSB e reboco final — um processo controlado que garante rigor dimensional e eficiência térmica muito acima da construção tradicional.",
    ],
    gallery: [
      "/projects/t1-48-fachada.jpg",
      "/projects/t1-48-deck.jpg",
      "/projects/t1-48-estrutura.jpg",
    ],
  },
  {
    slug: "moradia-100",
    name: "Moradia · 100 m²",
    category: "Casa Modular",
    spec: "100 m²",
    year: "2026",
    image: "/projects/m100-hero.jpg",
    summary:
      "Moradia térrea de 100 m² com pátio coberto, palas marcadas e volumetria em L que organiza as zonas de dia e de noite.",
    description: [
      "Esta moradia de 100 m² desenvolve-se num volume em L que separa naturalmente a zona social da zona privada, com um pátio coberto de transição que funciona como alpendre e zona de sombra.",
      "As palas salientes sobre os vãos principais dão profundidade à fachada e protegem os envidraçados da exposição solar direta — um desenho pensado para o conforto térmico passivo, complementado pelo isolamento contínuo do sistema modular.",
    ],
    gallery: ["/projects/m100-exterior.jpg"],
  },
  {
    slug: "moradia-t2-92",
    name: "Moradia T2 · 92 m²",
    category: "Casa Modular",
    spec: "T2 · 92 m²",
    year: "2026",
    image: "/projects/t2-92-hero.jpg",
    summary:
      "Moradia T2 de 92 m² implantada em terreno arborizado, com módulos transportados prontos e assentes sobre fundações pontuais.",
    description: [
      "Os módulos desta moradia T2 chegaram à obra já com paredes, vãos e instalações integradas, sendo assentes sobre apoios pontuais — uma implantação de impacto mínimo no terreno, sem grandes movimentações de terras.",
      "O registo fotográfico da fase de obra mostra a vantagem do sistema: em poucos dias a casa fica fechada e estanque, pronta para a fase de acabamentos, independentemente das condições do terreno envolvente.",
    ],
    gallery: ["/projects/t2-92-exterior.jpg"],
  },
  {
    slug: "moradia-dois-pisos",
    name: "Moradia de Dois Pisos",
    category: "Casa Modular",
    spec: "Dois pisos",
    year: "2026",
    image: "/projects/dois-pisos-hero.jpg",
    summary:
      "Moradia de dois pisos em estrutura de aço leve, com painéis de fachada em betão reforçado e instalações técnicas integradas na estrutura.",
    description: [
      "Este projeto demonstra a escalabilidade do sistema construtivo: dois pisos completos em estrutura de aço leve galvanizado, com lajes treliçadas, painéis de fachada e pé-direito generoso no vazio da escada.",
      "Toda a rede técnica — eletricidade, águas e climatização — é integrada na estrutura antes do fecho das paredes, o que elimina roços e retrabalho e permite inspecionar cada instalação antes dos acabamentos.",
    ],
    gallery: [
      "/projects/dois-pisos-exterior.jpg",
      "/projects/dois-pisos-estrutura.jpg",
      "/projects/dois-pisos-instalacoes.jpg",
    ],
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

export type BlogPost = {
  slug: string;
  title: string;
  cat: string;
  date: string;
  isoDate: string;
  image: string;
  excerpt: string;
  readTime: string;
  body: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "licenciamento-casas-modulares-portugal",
    title: "Licenciamento de casas modulares em Portugal: guia completo 2026",
    cat: "Licenciamento",
    date: "Jul 2026",
    isoDate: "2026-07-01",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=800&fit=crop&auto=format&q=80",
    excerpt: "Comunicação prévia ou licença de construção? Quais as taxas camarárias a contar? Quanto tempo demora? Tudo o que precisa de saber sobre o licenciamento de casas modulares em Portugal.",
    body: [
      "O licenciamento é, de longe, a fase que mais dúvidas gera em quem pondera construir uma casa modular. A boa notícia: o processo é idêntico ao de qualquer construção convencional. A casa modular não tem um regime especial, mais complicado ou mais lento. O que muda é o prazo de obra — não o de licenciamento.",
      "Em Portugal, existem dois regimes principais para licenciar uma habitação: a comunicação prévia e o pedido de licença de construção. A comunicação prévia aplica-se a obras que cumpram os planos municipais de ordenamento do território (PMOT) e não se situem em zonas condicionadas (RAN, REN, áreas protegidas). Neste regime, após a submissão da documentação, o município tem um prazo legal de 20 dias úteis para rejeitar — findo esse prazo sem resposta, a obra pode arrancar. Na prática, é o caminho mais rápido e o mais comum para moradias unifamiliares modulares em terreno urbano.",
      "Quando o terreno está em zona condicionada, quando o projeto exige consulta a entidades externas (ICNF, APA, CCDR) ou quando o município assim o exige, o processo passa pelo pedido de licença de construção. Aqui os prazos são mais longos: tipicamente entre 3 a 6 meses, podendo estender-se em casos com pareceres externos. O alvará é emitido após aprovação e pagamento das taxas.",
      "Que documentação é necessária? O projeto de arquitetura (peças desenhadas e escritas), projeto de estabilidade, especialidades (elétrica, AVAC, abastecimento de água e drenagem) e certificação energética. Na EsDomusTech, toda esta documentação é preparada pelos nossos técnicos — o cliente não precisa de contratar arquitecto nem engenheiro separadamente. Fazemos parte do processo.",
      "As taxas camarárias variam de município para município e dependem da área de construção, do tipo de uso e dos índices urbanísticos locais. Para uma moradia de 100 m² em zona urbana, os valores mais comuns situam-se entre 2.000 € e 6.000 €. Municípios de maior dimensão (Porto, Lisboa, Braga) tendem a ter taxas mais elevadas; municípios do interior podem aplicar valores significativamente mais baixos. Este custo não está incluído no preço de construção e deve ser orçamentado separadamente.",
      "Uma questão que surge frequentemente: a casa modular precisa de licença de habitação? Sim, obrigatoriamente. Após a conclusão da obra, é necessário solicitar a autorização de utilização (vulgo licença de habitação) ao município, que verifica a conformidade com o projeto aprovado e emite o documento. Sem este passo, a casa não pode ser registada na conservatória do registo predial como habitação permanente — e sem registo, o acesso a crédito habitação fica inviabilizado.",
      "E em terreno rústico? Este é um ponto sensível. A legislação portuguesa restringe significativamente a construção em solo rústico. Existem exceções — como habitação para agricultores em explorações ativas, ou em áreas incluídas em planos de pormenor que permitam habitação — mas cada caso exige uma análise camarária prévia. A EsDomusTech avalia estas situações individualmente antes de avançar com qualquer proposta.",
      "O nosso conselho prático: antes de comprar um terreno com o objetivo de construir uma casa modular, peça informação prévia ao município. Esta consulta é gratuita, não tem prazo vinculativo para o requerente e permite perceber, com segurança jurídica, o que é permitido construir naquele lote. Evita surpresas — e investimentos num terreno que depois não permite o projeto que tinha em mente.",
    ],
  },
  {
    slug: "quanto-custa-casa-modular",
    title: "Quanto custa uma casa modular? Guia de preços 2026",
    cat: "Preços e Custos",
    date: "Jun 2026",
    isoDate: "2026-06-01",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop&auto=format&q=80",
    excerpt: "Quanto custa uma casa modular chave-na-mão? Descubra o preço de referência por m², o que está incluído, o que pagar fora do preço de construção, e como funciona o financiamento.",
    body: [
      "A pergunta que mais recebemos é direta: quanto custa uma casa modular? A resposta honesta — e útil — é que o custo depende do tamanho, dos acabamentos e dos serviços incluídos. Mas há um número concreto que pode usar como referência.",
      "Na EsDomusTech, o valor de referência para a solução chave-na-mão — que inclui tudo, desde fundações ao mobiliário de cozinha e casa de banho — é de 1.500 €/m² (+ IVA), podendo haver reduções sobre este valor mediante campanhas ativas. Para uma casa de 80 m², estamos a falar de um investimento de referência de 120.000 €; para 170 m², de 255.000 €. O valor final depende sempre da tipologia, da área e das opções de personalização escolhidas.",
      "O que está incluído no preço chave-na-mão? Estrutura metálica em aço galvanizado DX51D de 3 mm, fundações e laje, isolamentos, paredes e tecto em gesso cartonado, cozinha equipada, casas de banho completas, instalações elétrica e hidráulica, janelas e portas. Quando recebe as chaves, a casa está pronta a habitar.",
      "Muitas vezes comparamos os custos por metro quadrado com a construção tradicional. Em Portugal, a construção convencional ronda frequentemente os 1.500 €/m² a 2.200 €/m² para soluções equivalentes — sem incluir os imprevistos que derivam de obras longas a céu aberto. Com construção modular, a maior parte do processo acontece em fábrica, com controlo de qualidade mais rigoroso e prazos mais previsíveis.",
      "O pagamento na EsDomusTech está estruturado em quatro fases iguais de 25%: assinatura do contrato, início de produção, entrega em obra e conclusão. Esta divisão permite planear o financiamento ao longo do processo, sem grandes adiantamentos numa única fase.",
      "Há custos que não entram no preço de construção e que deve orçamentar separadamente: o terreno, o projeto de arquitetura (obrigatório para licenciamento), as taxas camarárias e as ligações às redes de água, esgotos e eletricidade. Estes variam conforme a localização e o município.",
      "Uma dúvida frequente é se casas modulares têm acesso a crédito habitação. A resposta é sim — desde que a casa tenha alvará de construção e seja registada na conservatória, os bancos financiam-na como qualquer outra habitação permanente. O processo de licenciamento é idêntico ao de uma construção convencional.",
      "Se está a fazer o cálculo de viabilidade, o nosso conselho é começar pela área desejada e depois contactar-nos para um orçamento sem compromisso. Acumulámos experiência suficiente para perceber rapidamente o que é exequível para cada situação.",
    ],
  },
  {
    slug: "casa-modular-vs-construcao-tradicional",
    title: "Casa modular vs. construção tradicional: o que muda de facto",
    cat: "Construção Modular",
    date: "Mai 2026",
    isoDate: "2026-05-01",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop&auto=format&q=80",
    excerpt: "Prazo, qualidade, custos, personalização e durabilidade — comparação honesta entre as duas formas de construir, sem exageros de nenhum lado.",
    body: [
      "A comparação entre construção modular e tradicional surge em quase todas as conversas que temos com clientes. Há mitos de ambos os lados — e algumas verdades que vale a pena clarificar.",
      "O primeiro ponto é o processo. Numa obra tradicional, tudo acontece no terreno: fundações, paredes, cobertura, instalações — meses de trabalho exposto às condições meteorológicas, a subcontratados diferentes, a imprevistos em cadeia. Numa casa modular, a estrutura é produzida em fábrica, em condições controladas, antes de ser transportada e montada em obra. O que chega ao terreno é um produto já fabricado, não uma obra a construir.",
      "Em termos de prazo, a diferença é significativa. Uma construção tradicional de 120 m² pode demorar entre 18 e 36 meses, dependendo de licenciamentos, disponibilidade de mão-de-obra e imprevistos. Com construção modular, o licenciamento camarário ronda os 2 a 4 meses e a construção em si fica concluída entre 12 a 18 meses após aprovação — um prazo mais previsível, mesmo que não instantâneo.",
      "E a qualidade? É aqui que mais surpresas existem. As casas modulares modernas usam materiais de especificação industrial — na EsDomusTech, a estrutura é em aço galvanizado DX51D de 3 mm, com isolamentos de alto desempenho nas paredes, piso e tecto. A produção em fábrica permite controlos de qualidade que são difíceis de replicar em obra, onde as condições mudam todos os dias.",
      "No que toca à durabilidade e comportamento estrutural, uma casa modular bem executada é equivalente — ou superior — a uma construção convencional. Está sujeita às mesmas normas sísmicas e de segurança aplicáveis em Portugal. O facto de ser modular não significa que seja temporária ou menos robusta.",
      "A personalização também é maior do que a maioria imagina. Dentro de limites técnicos, é possível configurar o número de divisões, o pé-direito, os acabamentos interiores, a orientação solar e a expansibilidade futura da casa. Não é um produto de catálogo — é uma construção pensada para a situação específica de cada cliente.",
      "Onde a construção tradicional ainda tem vantagem é na integração de soluções muito específicas ou em lotes com geometrias complexas. Para terrenos com acessos difíceis ou inclinações pronunciadas, o transporte e montagem dos módulos pode exigir soluções adicionais. É algo que avaliamos caso a caso antes de avançar.",
      "A conclusão prática: para quem procura uma habitação permanente de qualidade, com prazo previsível e custo transparente, a construção modular elimina grande parte da incerteza associada às obras tradicionais. Não é a solução certa para toda a gente — mas para muitos dos nossos clientes, foi a decisão que mais gostariam de ter tomado mais cedo.",
    ],
  },
  {
    slug: "processo-construcao-modular",
    title: "Do projeto à entrega: como funciona o processo de construção modular",
    cat: "Processo",
    date: "Abr 2026",
    isoDate: "2026-04-01",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1590725121839-892b458a74fe?w=1200&h=800&fit=crop&auto=format&q=80",
    excerpt: "Desde o briefing inicial até à entrega das chaves, o processo modular tem fases claras e sequências previsíveis. Explicamos cada passo — e quanto tempo demora.",
    body: [
      "Uma das maiores vantagens da construção modular é a previsibilidade. Ao contrário de uma obra convencional, onde o processo pode deparar-se com bloqueios a qualquer momento, a construção modular tem fases claras e sequências bem definidas. Explicamos como funciona, passo a passo.",
      "Tudo começa na reunião de briefing. Nesta fase, percebemos as necessidades do cliente: quantos quartos, qual o orçamento, que uso vai ter a casa — habitação permanente, residência secundária, geração de rendimento — e as características do terreno. Esta informação alimenta a proposta inicial e o orçamento preliminar.",
      "Aprovada a proposta, avançamos para o projeto de arquitetura. Um arquitecto credenciado elabora o projeto técnico e submete-o ao município para licenciamento. Este processo — idêntico ao de uma construção convencional — demora tipicamente entre 2 e 4 meses, dependendo do município e da complexidade do projeto. É nesta fase que é emitido o alvará de construção.",
      "Com o alvará em mão, começa a produção em fábrica. Os módulos são fabricados em ambiente controlado: estrutura metálica em aço DX51D, paredes, pavimentos, cobertura, instalações elétrica e hidráulica — tudo montado e verificado antes de sair da fábrica. Esta fase demora geralmente entre 6 a 10 semanas para a maioria das tipologias.",
      "Paralelamente à produção, preparam-se as fundações no terreno. Escavação, betão e laje decorrem enquanto os módulos estão a ser fabricados — e é aqui que está uma das razões pelas quais o prazo total é mais curto do que numa obra tradicional: as fases acontecem em simultâneo, não em sequência.",
      "A montagem em obra é rápida. O transporte dos módulos para o local e a sua montagem demora tipicamente 2 a 5 dias, dependendo do número de módulos e das condições de acesso. A seguir vêm os acabamentos interiores — pintura, pavimentos, montagem de cozinha e casas de banho — e as ligações às redes públicas.",
      "Antes da entrega, realizamos uma vistoria completa. Verificamos todas as instalações, os acabamentos e o correto funcionamento de todos os equipamentos. Só depois de aprovada nesta vistoria é que emitimos a folha de entrega e entregamos as chaves.",
      "O prazo total desde a assinatura do contrato até à entrega da casa depende sobretudo do licenciamento municipal. Em média, os nossos projetos ficam concluídos entre 12 a 18 meses após aprovação do alvará. É um prazo mais previsível do que o de uma obra convencional equivalente — e, na nossa experiência, muito mais próximo do prazo original do que os clientes estão habituados a ouvir na construção tradicional.",
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export const FAQS = [
  {
    q: "Uma casa modular é tão sólida como uma tradicional?",
    a: "Sim. Usamos os mesmos materiais de acabamento da construção tradicional, e a estrutura em aço galvanizado (espessura mínima 3 mm, durabilidade estimada de 50 anos) oferece segurança adicional e melhor isolamento térmico e acústico.",
  },
  {
    q: "Quanto tempo demora a construção?",
    a: "Entre 12 e 18 meses após a emissão da licença de construção, com o licenciamento camarário a demorar tipicamente entre 2 a 4 meses.",
  },
  {
    q: "O que está incluído no preço?",
    a: "Uma lista alargada que cobre desde a visita técnica e o projeto de arquitetura até à entrega chave na mão: estrutura, casas de banho completas, isolamento, pavimentos, janelas e portas, eletricidade e canalizações, cobertura, transporte, garantia estrutural de 10 anos e acompanhamento de licenciamento.",
  },
  {
    q: "A casa pode ser ampliada no futuro?",
    a: "Sim. A construção modular permite uma abordagem evolutiva ao longo do tempo, ajustando a casa às necessidades futuras da família.",
  },
  {
    q: "Que classe energética tem?",
    a: "Classe A.",
  },
  {
    q: "Preciso de contratar um arquitecto?",
    a: "Não. O projeto de arquitetura e engenharia, com imagens 3D, está incluído no nosso serviço chave na mão.",
  },
  {
    q: "Como funciona o licenciamento camarário?",
    a: "A EsDomusTech trata da totalidade do processo: projeto, comunicação prévia ou licença de construção e acompanhamento até à licença de habitação. O cliente paga apenas as taxas camarárias.",
  },
  {
    q: "Qual é a garantia da casa?",
    a: "10 anos de garantia estrutural, sujeita a avaliação da nossa equipa de engenharia.",
  },
  {
    q: "Posso personalizar o interior?",
    a: "Sim, através do nosso sistema de \"plafon\": pode substituir qualquer elemento de catálogo (casa de banho, cozinha, portas, janelas), pagando apenas a diferença de valor face ao item standard.",
  },
  {
    q: "A EsDomusTech constrói em todo o país?",
    a: "Sim. Construímos em todo o território nacional, do Algarve ao Minho.",
  },
  {
    q: "A casa pode ser construída em terreno rústico?",
    a: "Caso a caso — em terreno rústico é necessário analisar a necessidade de pilares. Fale connosco para avaliarmos as condições específicas do seu terreno.",
  },
  {
    q: "Existe financiamento bancário disponível?",
    a: "Não temos parceria formal com nenhuma instituição bancária. Os nossos clientes recorrem habitualmente ao crédito bancário por iniciativa própria. Podemos fornecer toda a documentação técnica necessária para o processo.",
  },
];

export const DISTRITOS_PT = [
  "Aveiro",
  "Beja",
  "Braga",
  "Bragança",
  "Castelo Branco",
  "Coimbra",
  "Évora",
  "Faro",
  "Guarda",
  "Leiria",
  "Lisboa",
  "Portalegre",
  "Porto",
  "Santarém",
  "Setúbal",
  "Viana do Castelo",
  "Vila Real",
  "Viseu",
  "Açores",
  "Madeira",
] as const;
