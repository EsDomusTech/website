/**
 * Central content data for DomusTech — drives the SEO landing pages,
 * service detail pages, project portfolio and listing pages.
 */

export const SITE = {
  name: "DomusTech",
  domain: "https://domustech.lovable.app",
  tagline: "Casas Modulares Tecnológicas",
  phone: "+351 935 677 556",
  email: "geral@esdomustech.com",
  address: "Tv. Joaquim Dias Salgueiro 186, 4470-558 Vila Nova da Telha",
  hours: "Segunda a Sexta, 8h-17h",
  mapsUrl: "https://maps.app.goo.gl/g1MDpujHhEtBvNqs7",
} as const;

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
    metaTitle: "Casas Modulares Porto | Construção Modular | DomusTech",
    metaDescription:
      "Casas modulares no Porto: rápidas, sustentáveis e totalmente personalizadas. Projeto, fabrico e montagem chave na mão pela DomusTech.",
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
      { num: "04", title: "Montagem e Entrega", text: "Instalação no terreno em 60 a 90 dias, com entrega chave na mão, ligações às redes e garantia estrutural de 10 anos." },
    ],
  },
  {
    slug: "construcao-modular",
    name: "Construção Modular",
    titleFirst: "CONSTRUÇÃO",
    titleSecond: "MODULAR",
    metaTitle: "Construção Modular Porto | Edifícios e Habitação | DomusTech",
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
  location: string;
  year: string;
  image: string;
  summary: string;
  description: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "villa-atlantico",
    name: "Villa Atlântico",
    category: "Residencial",
    location: "Foz do Douro, Porto",
    year: "2025",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop&auto=format&q=80",
    summary: "Moradia modular de três pisos com vista para o mar e eficiência energética classe A.",
    description: [
      "A Villa Atlântico é uma moradia modular contemporânea desenhada para tirar o máximo partido da luz natural e das vistas sobre o Atlântico.",
      "Os módulos pré-fabricados permitiram uma construção rápida e limpa, integrando soluções de energia renovável e domótica de ponta.",
    ],
  },
  {
    slug: "edificio-ribeira",
    name: "Edifício Ribeira",
    category: "Comercial",
    location: "Ribeira, Porto",
    year: "2024",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop&auto=format&q=80",
    summary: "Reabilitação modular de um edifício histórico para uso comercial e escritórios.",
    description: [
      "Um projeto de reabilitação que preserva a fachada histórica enquanto introduz interiores modulares modernos e flexíveis.",
      "O resultado combina o carácter da Ribeira com espaços de trabalho eficientes e sustentáveis.",
    ],
  },
  {
    slug: "loft-boavista",
    name: "Loft Boavista",
    category: "Interiores",
    location: "Boavista, Porto",
    year: "2025",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=800&fit=crop&auto=format&q=80",
    summary: "Projeto de interiores de um loft urbano com linhas minimalistas e materiais naturais.",
    description: [
      "O Loft Boavista é um exercício de design de interiores minimalista, onde cada elemento foi escolhido a dedo.",
      "Materiais naturais, iluminação cuidada e mobiliário à medida criam um ambiente sereno e sofisticado.",
    ],
  },
  {
    slug: "praca-central",
    name: "Praça Central",
    category: "Urbanismo",
    location: "Matosinhos, Porto",
    year: "2023",
    image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=1200&h=800&fit=crop&auto=format&q=80",
    summary: "Requalificação de um espaço público com soluções modulares e mobiliário urbano.",
    description: [
      "A requalificação da Praça Central devolveu à comunidade um espaço público moderno e funcional.",
      "Estruturas modulares, zonas verdes e mobiliário urbano sustentável definem este projeto de urbanismo.",
    ],
  },
  {
    slug: "cotton-house",
    name: "Cotton House",
    category: "Interiores",
    location: "Bonfim, Porto",
    year: "2024",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop&auto=format&q=80",
    summary: "Renovação de apartamento histórico com interiores têxteis e materialidade artesanal.",
    description: [
      "O Cotton House é uma ode à textura e ao artesanato. Um apartamento do século XIX foi completamente renovado, preservando os azulejos originais e introduzindo interiores têxteis de luxo.",
      "Cada divisão conta uma história de contrastes: o antigo e o contemporâneo, o rugoso e o suave, o branco e o ouro.",
    ],
  },
  {
    slug: "armada-center",
    name: "Armada Center",
    category: "Comercial",
    location: "Cedofeita, Porto",
    year: "2024",
    image: "https://images.unsplash.com/photo-1461088945293-0c17689e48ac?w=1200&h=800&fit=crop&auto=format&q=80",
    summary: "Edifício de escritórios com fachada modular e espaços de trabalho flexíveis.",
    description: [
      "O Armada Center é um edifício de escritórios premium desenhado para atrair empresas de tecnologia e criativas. A fachada modular ventilada permite personalização e eficiência energética máxima.",
      "Os espaços interiores foram concebidos com flexibilidade total: open spaces, salas de reunião modulares e terraços jardim definem este espaço de trabalho do futuro.",
    ],
  },
  {
    slug: "solar-douro",
    name: "Solar do Douro",
    category: "Residencial",
    location: "Peso da Régua",
    year: "2023",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=800&fit=crop&auto=format&q=80",
    summary: "Quinta de turismo rural com módulos de hospedagem integrados na paisagem.",
    description: [
      "O Solar do Douro é um projeto de enoturismo onde seis módulos de hospedagem foram inseridos na encosta vinhateira sem alterar a topografia.",
      "Cada módulo tem vistas panorâmicas para o rio Douro e integra sistemas de energia solar e recolha de água da chuva.",
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
  image: string;
  excerpt: string;
  readTime: string;
  body: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "quanto-custa-casa-modular-portugal",
    title: "Quanto Custa uma Casa Modular em Portugal? Guia de Preços 2026",
    cat: "Preços",
    date: "15 Jun 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1560440021-33f9b867899d?w=1200&h=800&fit=crop&auto=format&q=80",
    excerpt:
      "Do chave-na-mão a 1.350 €/m², veja exemplos reais entre 108.000 € e 230.000 € e como funciona o plano de pagamento em 4 prestações.",
    body: [
      "Para quem está a considerar construir uma casa modular em Portugal, o preço é, naturalmente, uma das primeiras perguntas. Neste artigo, reunimos os valores de referência reais da DomusTech para 2026, com total transparência sobre o que está incluído e o que fica fora.",
      "O preço de referência para uma casa modular chave-na-mão é de 1.350 €/m², sem IVA. Este valor cobre um pacote completo: projeto de arquitetura e engenharia com 4 imagens 3D, acompanhamento do licenciamento camarário, estrutura em aço galvanizado (3 mm de parede, durabilidade estimada de 50 anos), casas de banho completas, isolamento termoacústico em lã de rocha, pavimentos, janelas e portas, eletricidade e canalizações (ramal até 10 m), cobertura em telha sandwich e garantia estrutural de 10 anos.",
      "Usando as áreas mínimas de referência do RGEU e o preço de 1.350 €/m², os valores por tipologia ficam: T1 (52 m²) a partir de 70.200 €; T2 (72 m²) a partir de 97.200 €; T3 (91 m²) a partir de 122.850 €; T4 (120 m²) a partir de 162.000 €. Na prática, os projetos reais da DomusTech situam-se entre 108.000 € e 230.000 €, conforme tipologia, localização e opções de personalização.",
      "O plano de pagamento está estruturado em 4 prestações iguais de 25% + IVA, associadas a marcos concretos: assinatura do contrato, início de fabrico, compra de materiais e entrega final. O orçamento aprovado fica fixo por contrato — não há revisões de preço a meio do caminho.",
      "Ficam fora do preço chave-na-mão as taxas camarárias (variáveis por município), a instalação efetiva — não a pré-instalação — de ar condicionado, painéis solares e estores elétricos, projetos de especialidades (estimativa até 4.000 €) e extras como garagem, piscina ou cozinha equipada de gama superior. Estes podem ser orçamentados à parte e são frequentemente propostos como opcionais de fecho.",
      "Em 2026, o Pacote Fiscal (DL n.º 97/2026) permite aplicar IVA reduzido de 6% a empreitadas de construção para habitação própria permanente (até 660.982 €), em obras iniciadas entre setembro de 2025 e dezembro de 2029. Numa casa de 120.000 €, a diferença entre IVA a 23% e IVA a 6% representa uma poupança de mais de 20.000 €. Consulte a nossa página de vantagens fiscais para saber se o seu projeto é elegível.",
      "A pergunta mais frequente: 'vale a pena em comparação com a construção tradicional?' A resposta honesta: a construção modular situa-se tendencialmente no mesmo intervalo de preço por metro quadrado que a construção tradicional de qualidade. A vantagem real não é o custo, mas a previsibilidade: orçamento fixo, prazo definido e processo industrial com controlo de qualidade em fábrica.",
    ],
  },
  {
    slug: "tendencias-design-modular-2026",
    title: "Tendências do design modular em 2026",
    cat: "Arquitetura",
    date: "12 Mai 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&h=800&fit=crop&auto=format&q=80",
    excerpt:
      "Do fabrico digital aos materiais bio-baseados, exploramos as tendências que vão definir a construção modular.",
    body: [
      "A construção modular está a mudar mais rápido do que o mercado imagina. Em 2026, cinco tendências dominam os projetos que chegam ao nosso atelier e moldam o que os clientes pedem — e esperam.",
      "A classe energética A deixou de ser um diferenciador para se tornar uma expectativa de base. O SCE (Sistema de Certificação Energética) tornou obrigatório o cálculo do desempenho térmico em qualquer nova construção. Casas modulares em estrutura metálica, com 10 cm de lã de rocha e sistema ETICS, chegam naturalmente à classe A sem tecnologias dispendiosas — menos custo de certificação, menos correções no final.",
      "Os clientes de 2026 querem ver antes de decidir. Plantas 3D, simuladores de materiais e visualizações fotorrealistas tornaram-se parte do processo de venda. O projeto DomusTech inclui 4 imagens 3D no standard — mas a tendência é ir mais longe, com modelos BIM que permitem 'entrar' na casa antes da primeira sapata e testar variações de planta sem custos adicionais.",
      "O painel técnico pré-fabricado (XPS + cimentícia) está a ganhar terreno face ao sistema OSB + ETICS para projetos com prazos apertados: permite montar até 120 m² de parede por dia, reduz o desperdício e tem maior resistência à humidade. Para projetos de arrendamento ou segunda habitação, onde o retorno depende da rapidez de execução, esta opção faz cada vez mais sentido económico.",
      "A construção modular permite acrescentar módulos, mudar a disposição interior ou adaptar a casa a novas realidades de forma muito menos dispendiosa do que na construção tradicional. Clientes que antecipam um quarto adicional em 5 a 10 anos, ou que pensam em transformar parte da casa em alojamento local, perguntam cada vez mais por esta flexibilidade desde o projeto.",
      "Pré-instalação de painéis solares, pontos de carregamento para veículo elétrico e automatismos de iluminação entram nos contratos standard. A DomusTech inclui pré-instalação de AC, painéis solares e estores elétricos como padrão — a instalação efetiva fica a cargo do cliente, mas a infraestrutura está preparada, evitando obras dispendiosas no futuro.",
    ],
  },
  {
    slug: "materiais-ecologicos-construcao",
    title: "Materiais ecológicos na construção moderna",
    cat: "Sustentabilidade",
    date: "28 Abr 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&h=800&fit=crop&auto=format&q=80",
    excerpt:
      "Uma análise aos materiais sustentáveis que reduzem a pegada de carbono sem comprometer o design.",
    body: [
      "Construir de forma sustentável não é apenas uma questão de imagem — afeta o conforto térmico, a durabilidade e os custos de manutenção ao longo de décadas. Analisamos os materiais que fazem a diferença nas casas modulares DomusTech e o porquê de cada escolha.",
      "A lã de rocha é o isolamento térmico e acústico de eleição nas paredes e cobertura (10 cm, não inflamável). Ao contrário do EPS standard, a lã de rocha não inflama — fator crítico para a segurança e para a conformidade com exigências anti-fogo em cozinhas e salas com lareira. O seu fabrico usa rocha basáltica, um recurso abundante, e o material é reciclável no fim de vida.",
      "O capoto (ETICS com EPS de 10 cm) no exterior garante que o ponto de orvalho se mantém fora da parede, evitando condensações internas — um problema frequente em paredes sem isolamento exterior. Combinado com a lã de rocha interior, o resultado é uma parede com 21 cm de espessura total e desempenho térmico superior à construção de tijolo de espessura equivalente.",
      "As casas DomusTech usam três tipos de pladur conforme a zona: branco (uso geral), hidrófugo verde (casas de banho) e anti-fogo vermelho (obrigatório em cozinha e salas com lareira). Este detalhe, ignorado em construção de menor qualidade, tem impacto direto na durabilidade do interior e na resistência ao fogo da habitação.",
      "A estrutura tubular em aço galvanizado DX51D (3 mm de parede, EN 10346 e EN 10143) tem durabilidade estimada de 50 anos. A galvanização protege o aço da corrosão permanentemente, sem tratamentos adicionais periódicos — um fator subestimado quando se compara o custo total de propriedade com betão armado.",
      "As placas OSB (9 mm nas paredes, 22 mm no piso) são produzidas com madeira de reflorestação em processo industrial com mínimo desperdício. Face ao MDF, o OSB tem maior resistência mecânica e menor absorção de humidade — a escolha mais sustentável e tecnicamente correta para uso estrutural.",
    ],
  },
  {
    slug: "domotica-casa-modular-futuro",
    title: "Domótica e casas modulares: o futuro da habitação inteligente",
    cat: "Tecnologia",
    date: "10 Mar 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop&auto=format&q=80",
    excerpt:
      "Como a integração de sistemas inteligentes transforma a experiência de habitar uma casa modular.",
    body: [
      "As casas inteligentes já não são um nicho de luxo. Em 2026, a automação doméstica está a tornar-se uma expectativa de base em projetos de construção nova — e as casas modulares têm uma vantagem estrutural neste domínio que vale a pena perceber.",
      "Uma das vantagens mais práticas das casas DomusTech é que a pré-instalação de domótica está incluída no standard: pontos preparados para ar condicionado, painéis solares e estores elétricos ficam integrados durante a construção. É muito mais económico integrar a infraestrutura elétrica durante o fabrico — quando as paredes ainda estão abertas — do que instalar sistemas num imóvel já acabado.",
      "Os sistemas de automatização de iluminação e climatização são hoje compatíveis com os principais assistentes de voz (Google Home, Amazon Alexa, Apple HomeKit). Uma casa modular preparada com calhas para cabos, caixas de encastrar nas posições certas e quadro elétrico com circuitos dedicados pode integrar estes sistemas sem obras de roço — que são o principal custo numa habitação existente.",
      "A combinação de painéis solares com monitorização em tempo real do consumo permite reduzir significativamente a fatura energética. Numa casa de classe A com boa orientação solar, a autoprodução pode cobrir a maioria das necessidades nos meses de maior insolação. O sistema de baterias domésticas ainda tem relação custo-benefício marginal em 2026, mas os preços estão a baixar rapidamente.",
      "A infraestrutura elétrica adequada facilita a integração de câmeras IP, fechaduras eletrónicas e centrais de alarme. Em construção nova, a diferença de custo entre uma instalação básica e uma preparada para segurança inteligente é pequena — ao contrário da adaptação posterior, que implica abertura de roços e revisão do quadro elétrico.",
      "A recomendação prática: os sistemas com melhor relação custo-benefício em 2026 são ainda os relativamente simples — termostatos programáveis, iluminação por cenas pré-definidas e estores automatizados. Preparar a infraestrutura agora durante a construção, instalar o que faz sentido hoje, e expandir à medida que a tecnologia amadurece.",
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export type TeamMember = {
  name: string;
  role: string;
  image: string;
};

export const TEAM: TeamMember[] = [
  {
    name: "Raquel Figueiredo",
    role: "Gestora de Obras",
    image: "/images/equipa/raquel.webp",
  },
  {
    name: "Marisa Xavier",
    role: "Administrativo de Obras e Compras",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop&auto=format&q=80",
  },
  {
    name: "Juliane Zombini",
    role: "Responsável Administrativo",
    image: "/images/equipa/julliana.webp",
  },
  {
    name: "Marina Dias",
    role: "Assistente Administrativo e de RH",
    image: "/images/equipa/marina.webp",
  },
];

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
    q: "Preciso de contratar um arquiteto?",
    a: "Não. O projeto de arquitetura e engenharia, com imagens 3D, está incluído no nosso serviço chave na mão.",
  },
  {
    q: "Como funciona o licenciamento camarário?",
    a: "A DomusTech trata da totalidade do processo: projeto, comunicação prévia ou licença de construção e acompanhamento até à licença de habitação. O cliente paga apenas as taxas camarárias.",
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
    q: "A DomusTech constrói em todo o país?",
    a: "Sim. Construímos em todo o território nacional e já entregámos casas em 13 localizações diferentes.",
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
