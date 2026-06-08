/**
 * Central content data for DomusTech — drives the SEO landing pages,
 * service detail pages, project portfolio and listing pages.
 */

export const SITE = {
  name: "DomusTech",
  domain: "https://domustech.lovable.app",
  tagline: "Casas Modulares Tecnológicas",
  phone: "+351 938 802 664",
  email: "geral@esdomustech.com",
  address: "Tv. Joaquim Dias Salgueiro 186, 4470-558 Vila Nova da Telha",
  mapsUrl: "https://maps.app.goo.gl/LJQN6T5pS541ABgT6",
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
};

export const SERVICES: Service[] = [
  {
    slug: "casas-modulares-porto",
    name: "Casas Modulares no Porto",
    titleFirst: "CASAS",
    titleSecond: "MODULARES",
    metaTitle: "Casas Modulares no Porto | Construção Modular Chave na Mão — DomusTech",
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
      "Eficiência energética classe A+",
      "Prazos de construção até 60% mais rápidos",
      "Acabamentos totalmente personalizáveis",
    ],
    image: "https://picsum.photos/seed/modular1/1200/800",
  },
  {
    slug: "construcao-modular",
    name: "Construção Modular",
    titleFirst: "CONSTRUÇÃO",
    titleSecond: "MODULAR",
    metaTitle: "Construção Modular no Porto | Edifícios e Soluções Industriais — DomusTech",
    metaDescription:
      "Construção modular para habitação, comércio e espaços corporativos no Porto. Soluções pré-fabricadas escaláveis, sustentáveis e de montagem rápida.",
    excerpt:
      "Soluções de construção modular escaláveis para habitação, comércio e espaços corporativos, com montagem rápida e limpa.",
    intro: [
      "A nossa construção modular adapta-se a projetos de qualquer escala — desde moradias unifamiliares a edifícios comerciais e estruturas corporativas. O fabrico em fábrica reduz desperdício, ruído e impacto ambiental na obra.",
      "Combinamos engenharia rigorosa com design flexível, permitindo expandir ou reconfigurar os espaços à medida que as suas necessidades evoluem.",
    ],
    features: [
      "Estruturas escaláveis e reconfiguráveis",
      "Menor desperdício e impacto ambiental",
      "Controlo de qualidade em fábrica",
      "Integração de domótica e energias renováveis",
    ],
    image: "https://picsum.photos/seed/modular2/1200/800",
  },
  {
    slug: "design-de-interiores",
    name: "Design de Interiores",
    titleFirst: "DESIGN DE",
    titleSecond: "INTERIORES",
    metaTitle: "Design de Interiores no Porto | Projetos Personalizados — DomusTech",
    metaDescription:
      "Design de interiores no Porto: projetos personalizados que valorizam cada espaço. Conceito, mobiliário, iluminação e decoração chave na mão.",
    excerpt:
      "Projetos de interiores personalizados que equilibram estética, funcionalidade e conforto em cada divisão.",
    intro: [
      "Criamos interiores que contam uma história — a sua. Estudamos a luz, o fluxo e a utilização de cada espaço para desenhar ambientes elegantes e funcionais.",
      "Da seleção de materiais e mobiliário à iluminação e decoração final, entregamos projetos de interiores completos, prontos a viver.",
    ],
    features: [
      "Conceito e moodboard personalizados",
      "Seleção de materiais e mobiliário",
      "Planeamento de iluminação",
      "Acompanhamento de obra e styling final",
    ],
    image: "https://picsum.photos/seed/interior1/1200/800",
  },
  {
    slug: "remodelacao",
    name: "Remodelação",
    titleFirst: "REMODELAÇÃO",
    titleSecond: "DE ESPAÇOS",
    metaTitle: "Remodelação no Porto | Renovação de Casas e Espaços — DomusTech",
    metaDescription:
      "Remodelação de casas e espaços comerciais no Porto. Renovamos por completo com rigor, prazos cumpridos e acabamentos de qualidade.",
    excerpt:
      "Renovação completa de casas e espaços comerciais, com gestão de obra rigorosa e acabamentos de excelência.",
    intro: [
      "Transformamos espaços antigos em ambientes modernos e funcionais. A nossa equipa gere toda a remodelação, desde a demolição às instalações e acabamentos finais.",
      "Trabalhamos com prazos claros e orçamentos transparentes, garantindo uma renovação sem surpresas e com resultados que valorizam o seu imóvel.",
    ],
    features: [
      "Diagnóstico técnico e orçamento detalhado",
      "Gestão integral da obra",
      "Soluções de eficiência energética",
      "Acabamentos de qualidade superior",
    ],
    image: "https://picsum.photos/seed/remodel1/1200/800",
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
    image: "https://picsum.photos/seed/project1/1200/800",
    summary: "Moradia modular de três pisos com vista para o mar e eficiência energética A+.",
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
    image: "https://picsum.photos/seed/project2/1200/800",
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
    image: "https://picsum.photos/seed/project3/1200/800",
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
    image: "https://picsum.photos/seed/project4/1200/800",
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
    image: "https://picsum.photos/seed/cotton1/1200/800",
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
    image: "https://picsum.photos/seed/armada1/1200/800",
    summary: "Edifício de escritórios com fachada modular e espaços de trabalho flexíveis.",
    description: [
      "O Armada Center é um edifício de escritórios premium desenhado para atrair empresas de tecnologia e criativas. A fachada modular ventilada permite personalização e eficiência energética máxima.",
      "Os espaços interiores foram concebidos com flexibilidade total — open spaces, salas de reunião modulares e terraços jardim definem este espaço de trabalho do futuro.",
    ],
  },
  {
    slug: "solar-douro",
    name: "Solar do Douro",
    category: "Residencial",
    location: "Peso da Régua",
    year: "2023",
    image: "https://picsum.photos/seed/solar1/1200/800",
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

export const BLOG_POSTS = [
  {
    slug: "tendencias-design-modular-2026",
    title: "Tendências do design modular em 2026",
    cat: "Arquitetura",
    date: "12 Mai 2026",
    image: "https://picsum.photos/seed/news1/1200/800",
    excerpt:
      "Do fabrico digital aos materiais bio-baseados, exploramos as tendências que vão definir a construção modular.",
  },
  {
    slug: "materiais-ecologicos-construcao",
    title: "Materiais ecológicos na construção moderna",
    cat: "Sustentabilidade",
    date: "28 Abr 2026",
    image: "https://picsum.photos/seed/news2/1200/800",
    excerpt:
      "Uma análise aos materiais sustentáveis que reduzem a pegada de carbono sem comprometer o design.",
  },
  {
    slug: "domotica-casa-modular-futuro",
    title: "Domótica e casas modulares: o futuro da habitação inteligente",
    cat: "Tecnologia",
    date: "10 Mar 2026",
    image: "https://picsum.photos/seed/news3/1200/800",
    excerpt:
      "Como a integração de sistemas inteligentes transforma a experiência de habitar uma casa modular.",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  image: string;
};

export const TEAM: TeamMember[] = [
  {
    name: "Ana Ferreira",
    role: "Fundadora & Arquitecta Principal",
    image: "https://picsum.photos/seed/portrait-ana/600/800",
  },
  {
    name: "Juliane Zombini",
    role: "Administrativa & Financeira",
    image: "https://picsum.photos/seed/portrait-juliane/600/800",
  },
  {
    name: "Marina Dias",
    role: "Recursos Humanos",
    image: "https://picsum.photos/seed/portrait-marina/600/800",
  },
  {
    name: "Karine Ribeiro",
    role: "Comercial",
    image: "https://picsum.photos/seed/portrait-karine/600/800",
  },
  {
    name: "Fernanda Lopes",
    role: "Comercial",
    image: "https://picsum.photos/seed/portrait-fernanda/600/800",
  },
];

export const FAQS = [
  {
    q: "Uma casa modular é tão sólida como uma tradicional?",
    a: "Sim — usamos os mesmos materiais de acabamento da construção tradicional, e a estrutura em aço galvanizado oferece segurança adicional e melhor isolamento térmico e acústico.",
  },
  {
    q: "Quanto tempo demora a construção?",
    a: "Até 360 dias úteis após a emissão da licença de construção, com o licenciamento camarário a demorar tipicamente entre 2 a 4 meses.",
  },
  {
    q: "O que está incluído no preço?",
    a: "Uma lista alargada que cobre desde a visita técnica e o projeto de arquitetura até à entrega chave na mão — estrutura, casas de banho completas, isolamento, pavimentos, janelas e portas, eletricidade e canalizações, cobertura, transporte, garantia estrutural de 10 anos e acompanhamento de licenciamento.",
  },
  {
    q: "A casa pode ser ampliada no futuro?",
    a: "Sim — a construção modular permite uma abordagem evolutiva ao longo do tempo, ajustando a casa às necessidades futuras da família.",
  },
  {
    q: "Que classe energética tem?",
    a: "Classe A.",
  },
  {
    q: "Preciso de contratar um arquiteto?",
    a: "Não — o projeto de arquitetura e engenharia, com imagens 3D, está incluído no nosso serviço chave na mão.",
  },
  {
    q: "Como funciona o licenciamento camarário?",
    a: "A DomusTech trata da totalidade do processo — projeto, comunicação prévia ou licença de construção e acompanhamento até à licença de habitação. O cliente paga apenas as taxas camarárias.",
  },
  {
    q: "Qual é a garantia da casa?",
    a: "10 anos de garantia estrutural, sujeita a avaliação da nossa equipa de engenharia.",
  },
  {
    q: "Posso personalizar o interior?",
    a: "Sim, através do nosso sistema de \"plafon\": pode substituir qualquer elemento de catálogo — casa de banho, cozinha, portas, janelas — pagando apenas a diferença de valor face ao item standard.",
  },
  {
    q: "A DomusTech constrói em todo o país?",
    a: "Sim — construímos em todo o território nacional. Já entregámos casas em 13 localizações diferentes.",
  },
];
