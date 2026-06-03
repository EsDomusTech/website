/**
 * Central content data for DomusTech — drives the SEO landing pages,
 * service detail pages, project portfolio and listing pages.
 */

export const SITE = {
  name: "DomusTech",
  domain: "https://domustech.lovable.app",
  tagline: "Casas Modulares Inteligentes no Porto",
  phone: "+351 220 000 000",
  email: "ola@domustech.pt",
  address: "Rua das Flores 100, 4050-262 Porto",
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
];

export const FAQS = [
  {
    q: "Quanto tempo demora a construir uma casa modular?",
    a: "Uma casa modular DomusTech é normalmente entregue entre 4 a 6 meses, dependendo da dimensão e dos acabamentos. O fabrico em fábrica decorre em paralelo com a preparação do terreno, reduzindo significativamente os prazos.",
  },
  {
    q: "As casas modulares são tão duráveis como as tradicionais?",
    a: "Sim. As nossas casas modulares cumprem as mesmas normas de construção e são frequentemente mais robustas, graças ao controlo de qualidade rigoroso do fabrico em ambiente controlado.",
  },
  {
    q: "Posso personalizar totalmente o projeto?",
    a: "Absolutamente. Personalizamos plantas, materiais, acabamentos e soluções energéticas. Cada projeto é único e adaptado ao seu estilo de vida e orçamento.",
  },
  {
    q: "Tratam do licenciamento e das licenças?",
    a: "Sim, o nosso serviço chave na mão inclui o projeto de arquitetura, o licenciamento camarário e todo o acompanhamento técnico até à entrega.",
  },
  {
    q: "Trabalham apenas no Porto?",
    a: "Estamos sediados no Porto e operamos em toda a região Norte de Portugal. Para projetos noutras regiões, contacte-nos para avaliarmos a viabilidade.",
  },
];
