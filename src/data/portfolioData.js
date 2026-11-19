export const personalInfo = {
  brand: 'Samuel.dev',
  fullName: 'Samuel Landry Woulle Ndedy',
  role: 'Développeur Mobile & Fullstack (Flutter • React) & UI/UX Designer',
  tagline:
    "Titulaire d'un cursus Master en Génie Logiciel, je conçois et développe des applications mobiles et web performantes, de la maquette Figma jusqu'au déploiement backend.",
  availability:
    'Disponible pour un emploi ou stage professionnel (Douala / Remote)',
  location: 'Douala, Cameroun',
  email: 'samuellandry147@gmail.com',
  phoneDisplay: '+237 6 58 00 44 24',
  whatsappUrl: 'https://wa.me/237658004424',
  githubUrl: 'https://github.com/Yrdnal147',
  githubHandle: '@Yrdnal147',
  linkedinName: 'Samuel Ndedy',
  linkedinUrl: 'https://www.linkedin.com/in/samuel-ndedy',
  cvPath: '/cv-samuel-woulle-ndedy.pdf',
  copyrightYear: 2026,
};

export const navLinks = [
  { label: 'Projets', href: '#projects' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Expériences', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const projectCategories = ['Tous', 'Mobile', 'Web', 'UI/UX'];

export const projects = [
  {
    id: 'choozz',
    title: 'Choozz',
    subtitle: 'Mobile / UI-UX',
    categories: ['Mobile', 'UI/UX'],
    description:
      'Application mobile de découverte de restaurants, bars et lieux de sortie à Douala et Yaoundé (menus, réservations VIP, catalogue géolocalisé).',
    longDescription:
      "Conçue de bout en bout sur Figma puis développée avec Flutter et Supabase, Choozz aide les utilisateurs à explorer les meilleurs établissements de Douala et Yaoundé grâce à une recherche géolocalisée, la consultation des menus en temps réel et un parcours de réservation VIP fluide.",
    highlights: [
      'Catalogue géolocalisé filtrable par quartier, ambiance et budget (Douala & Yaoundé)',
      'Consultation des menus détaillés et système de réservations VIP',
      'Architecture temps réel propulsée par Supabase et design system complet sous Figma',
    ],
    stack: ['Flutter', 'Supabase', 'Figma'],
    image: '/projects/choozz.png',
    githubUrl: 'https://github.com/Yrdnal147',
    demoUrl: null,
    accent: 'from-blue-500/20 via-indigo-500/10 to-transparent',
    mockupVariant: 'choozz',
  },
  {
    id: 'sonoritiz',
    title: 'Sonoritiz',
    subtitle: 'Mobile / UI-UX',
    categories: ['Mobile', 'UI/UX'],
    description:
      "Application mobile de streaming musical en mode sombre intégrant une API de titres Creative Commons.",
    longDescription:
      "Sonoritiz propose une expérience d'écoute moderne pensée pour le mode sombre. L'application consomme une API REST de musiques Creative Commons avec lecteur audio fluide, gestion de playlists, recherche instantanée et interface soignée conçue sur Figma.",
    highlights: [
      'Lecteur audio natif avec contrôles persistants et gestion de file de lecture',
      'Intégration complète d’une API REST de catalogues Creative Commons',
      'Interface dark-first pensée pour la lisibilité et le confort visuel',
    ],
    stack: ['Flutter', 'API REST', 'Figma'],
    image: '/projects/sonoritiz.png',
    githubUrl: 'https://github.com/Yrdnal147',
    demoUrl: null,
    accent: 'from-sky-500/20 via-blue-500/10 to-transparent',
    mockupVariant: 'sonoritiz',
  },
  {
    id: 'jobconnect',
    title: 'JobConnect',
    subtitle: 'Web & Mobile',
    categories: ['Web', 'Mobile'],
    description:
      "Plateforme de mise en relation professionnelle et gestion d'offres.",
    longDescription:
      "Écosystème multiplateforme combinant une interface web React et une application mobile Flutter autour d'un backend Supabase commun. JobConnect facilite la publication d'offres, le suivi des candidatures et la mise en relation directe entre recruteurs et talents.",
    highlights: [
      'Synchronisation multiplateforme Web (React) et Mobile (Flutter)',
      'Authentification sécurisée, gestion des profils et tableau de bord des offres',
      'Base de données relationnelle et API temps réel avec Supabase',
    ],
    stack: ['Flutter', 'Supabase', 'React'],
    image: '/projects/jobconnect.png',
    githubUrl: 'https://github.com/Yrdnal147',
    demoUrl: null,
    accent: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    mockupVariant: 'jobconnect',
  },
  {
    id: 'reseau-social',
    title: 'Réseau Social Multiplateforme',
    subtitle: 'Mobile — projet Localhost Digital',
    categories: ['Mobile'],
    description:
      "Application mobile communautaire développée en équipe (fil d'actualité, authentification, architecture collaborative).",
    longDescription:
      "Projet mené en équipe au sein de Localhost Digital : conception et implémentation d'une application communautaire Flutter / Firebase intégrant un fil d'actualité dynamique, la gestion des comptes utilisateurs et un workflow Git collaboratif structuré.",
    highlights: [
      "Fil d'actualité dynamique, interactions utilisateurs et gestion des profils",
      'Authentification et stockage cloud via Firebase',
      'Travail collaboratif en équipe avec revues de code et workflow Git',
    ],
    stack: ['Flutter', 'Dart', 'Firebase', 'Git'],
    image: '/projects/reseau-social.png',
    githubUrl: 'https://github.com/Yrdnal147',
    demoUrl: null,
    accent: 'from-blue-600/20 via-slate-500/10 to-transparent',
    mockupVariant: 'social',
  },
];

export const skillCategories = [
  {
    id: 'mobile',
    title: 'Mobile',
    icon: 'Smartphone',
    description:
      'Applications natives et multiplateformes fluides, centrées sur la performance et l’UX.',
    items: [
      'Flutter',
      'Dart',
      'Architecture multiplateforme',
      'Transition React Native (Expo)',
    ],
  },
  {
    id: 'web-backend',
    title: 'Web & Backend',
    icon: 'Server',
    description:
      'Interfaces modernes, APIs REST robustes et architectures cloud prêtes pour la production.',
    items: [
      'React JS',
      'Laravel',
      'Django REST Framework',
      'APIs REST',
      'Supabase',
      'Firebase',
      'MySQL',
    ],
  },
  {
    id: 'design-tools',
    title: 'Design & Outils',
    icon: 'Layers',
    description:
      'De la maquette interactive Figma jusqu’au versionning collaboratif en équipe Agile.',
    items: [
      'Figma (UI/UX, prototypage)',
      'Git & GitHub',
      'Méthodes Agiles',
    ],
  },
];

export const experiences = [
  {
    id: 'ziloo',
    role: 'Développeur Mobile Flutter',
    company: 'Ziloo',
    location: 'Douala',
    period: 'Depuis nov. 2025',
    current: true,
    description:
      "Conception et développement collaboratif d'applications mobiles innovantes.",
    tags: ['Flutter', 'Dart', 'Mobile'],
  },
  {
    id: 'oif-inchclass',
    role: 'Stagiaire Développeur Web Fullstack',
    company: 'OIF Inchclass',
    location: 'Douala',
    period: 'Janv. 2025 – Avr. 2025',
    current: false,
    description:
      "Développement d'applications web fullstack, création d'APIs REST et conception de maquettes/prototypes Figma.",
    tags: ['Fullstack', 'APIs REST', 'Figma'],
  },
  {
    id: 'localhost-digital',
    role: 'Stagiaire Développeur Mobile Flutter',
    company: 'Localhost Digital',
    location: 'Douala',
    period: 'Oct. 2023 – Août 2024',
    current: false,
    description:
      "Développement en équipe d'une application mobile multiplateforme de type réseau social avec Flutter.",
    tags: ['Flutter', 'Firebase', 'Git'],
  },
  {
    id: 'fulife-consulting',
    role: 'Développeur Web',
    company: 'Fulife Consulting Sarl',
    location: 'Douala',
    period: 'Mars 2022 – Juil. 2023',
    current: false,
    description:
      'Intervention sur le cycle complet de développement web : analyse des besoins métiers, développement et tests.',
    tags: ['Web', 'Analyse métier', 'Tests'],
  },
  {
    id: 'viettel-nexttel',
    role: 'Stagiaire Développeur Web',
    company: 'Viettel Cameroon S.A. (Nexttel)',
    location: 'Douala',
    period: 'Août 2021 – Fév. 2022',
    current: false,
    description:
      "Participation au développement de solutions web internes au sein de l'équipe IT.",
    tags: ['Web interne', 'Équipe IT'],
  },
];

export const education = {
  degrees: [
    {
      title: 'Master 2 Génie Logiciel',
      institution: 'IUGET Douala',
      period: 'Depuis nov. 2025',
      current: true,
    },
    {
      title: 'Master 1 Génie Logiciel',
      institution: 'IUGET Douala',
      period: 'Nov. 2024 – Juin 2025',
      current: false,
    },
    {
      title: 'Licence Professionnelle en Génie Logiciel',
      institution: 'IME Douala',
      period: 'Oct. 2022 – Juil. 2023',
      current: false,
    },
    {
      title: 'BTS en Génie Logiciel',
      institution: 'IME Business School Douala',
      period: 'Sept. 2020 – Juin 2022',
      current: false,
    },
  ],
  certifications: [
    {
      title: 'Développement Web Fullstack',
      institution: 'OIF Inchclass Douala',
      period: '2023 – 2025',
    },
    {
      title: 'Développement Mobile Flutter',
      institution: 'Localhost Académie Douala',
      period: 'Nov. 2023 – Avr. 2025',
    },
  ],
};
