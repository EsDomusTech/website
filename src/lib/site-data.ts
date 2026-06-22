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
      "Eficiência energética classe A+",
      "Prazos de construção até 60% mais rápidos",
      "Acabamentos totalmente personalizáveis",
    ],
    image: "https://images.unsplash.com/photo-1613490493576-4a48d6622a4a?w=1200&h=800&fit=crop&auto=format&q=80",
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
  },
  {
    slug: "design-de-interiores",
    name: "Design de Interiores",
    titleFirst: "DESIGN DE",
    titleSecond: "INTERIORES",
    metaTitle: "Design de Interiores Porto | Projetos | DomusTech",
    metaDescription:
      "Design de interiores no Porto: projetos personalizados que valorizam cada espaço. Conceito, mobiliário, iluminação e decoração chave na mão.",
    excerpt:
      "Projetos de interiores personalizados que equilibram estética, funcionalidade e conforto em cada divisão.",
    intro: [
      "Criamos interiores que contam a sua história. Estudamos a luz, o fluxo e a utilização de cada espaço para desenhar ambientes elegantes e funcionais.",
      "Da seleção de materiais e mobiliário à iluminação e decoração final, entregamos projetos de interiores completos, prontos a viver.",
    ],
    features: [
      "Conceito e moodboard personalizados",
      "Seleção de materiais e mobiliário",
      "Planeamento de iluminação",
      "Acompanhamento de obra e styling final",
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop&auto=format&q=80",
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
    image: "https://images.unsplash.com/photo-1448630358273-1e5ccc24bc87?w=1200&h=800&fit=crop&auto=format&q=80",
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

export const BLOG_POSTS = [
  {
    slug: "quanto-custa-casa-modular-portugal",
    title: "Quanto Custa uma Casa Modular em Portugal? Guia de Preços 2026",
    cat: "Preços",
    date: "15 Jun 2026",
    image: "https://images.unsplash.com/photo-1560440021-33f9b867899d?w=1200&h=800&fit=crop&auto=format&q=80",
    excerpt:
      "Da variante estrutura/laje/exterior a partir de 1.150 €/m² ao chave-na-mão a 1.350 €/m², veja exemplos reais entre 108.000 € e 230.000 € e como funciona o plano de pagamento em 4 prestações.",
    href: "/precos",
  },
  {
    slug: "tendencias-design-modular-2026",
    title: "Tendências do design modular em 2026",
    cat: "Arquitetura",
    date: "12 Mai 2026",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&h=800&fit=crop&auto=format&q=80",
    excerpt:
      "Do fabrico digital aos materiais bio-baseados, exploramos as tendências que vão definir a construção modular.",
    href: "/blog",
  },
  {
    slug: "materiais-ecologicos-construcao",
    title: "Materiais ecológicos na construção moderna",
    cat: "Sustentabilidade",
    date: "28 Abr 2026",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&h=800&fit=crop&auto=format&q=80",
    excerpt:
      "Uma análise aos materiais sustentáveis que reduzem a pegada de carbono sem comprometer o design.",
    href: "/blog",
  },
  {
    slug: "domotica-casa-modular-futuro",
    title: "Domótica e casas modulares: o futuro da habitação inteligente",
    cat: "Tecnologia",
    date: "10 Mar 2026",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop&auto=format&q=80",
    excerpt:
      "Como a integração de sistemas inteligentes transforma a experiência de habitar uma casa modular.",
    href: "/blog",
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
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop&auto=format&q=80",
  },
  {
    name: "Juliane Zombini",
    role: "Administrativa & Financeira",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&auto=format&q=80",
  },
  {
    name: "Marina Dias",
    role: "Recursos Humanos",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=800&fit=crop&auto=format&q=80",
  },
  {
    name: "Karine Ribeiro",
    role: "Comercial",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=800&fit=crop&auto=format&q=80",
  },
  {
    name: "Fernanda Lopes",
    role: "Comercial",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&h=800&fit=crop&auto=format&q=80",
  },
];

export const FAQS = [
  {
    q: "Uma casa modular é tão sólida como uma tradicional?",
    a: "Sim. Usamos os mesmos materiais de acabamento da construção tradicional, e a estrutura em aço galvanizado oferece segurança adicional e melhor isolamento térmico e acústico.",
  },
  {
    q: "Quanto tempo demora a construção?",
    a: "Até 360 dias úteis após a emissão da licença de construção, com o licenciamento camarário a demorar tipicamente entre 2 a 4 meses.",
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
];
