export const personalInfo = {
  brand: 'Samuel.dev',
  fullName: 'Samuel Landry Woulle Ndedy',
  role: 'Développeur Mobile & Fullstack (Flutter • React) & UI/UX Designer',
  rotatingFocus: [
    'applications mobiles Flutter.',
    'interfaces React & React Native.',
    'design systems & prototypes Figma.',
    'APIs REST & architectures Supabase.',
  ],
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
  { id: 'projects', label: 'Projets', href: '#projects', code: '01' },
  { id: 'skills', label: 'Compétences', href: '#skills', code: '02' },
  { id: 'experience', label: 'Expériences', href: '#experience', code: '03' },
  { id: 'contact', label: 'Contact', href: '#contact', code: '04' },
];

export const projectCategories = ['Tous', 'Mobile', 'Web', 'UI/UX'];

export const projectTechFilters = [
  'Flutter',
  'React',
  'Supabase',
  'Firebase',
  'Figma',
  'API REST',
];

export const projects = [
  {
    id: 'choozz',
    index: '01',
    title: 'Choozz',
    subtitle: 'Mobile / UI-UX',
    year: '2025',
    role: 'Conception UI/UX & Développement Flutter',
    categories: ['Mobile', 'UI/UX'],
    description:
      'Application mobile de découverte de restaurants, bars et lieux de sortie à Douala et Yaoundé (menus, réservations VIP, catalogue géolocalisé).',
    context:
      'Trouver rapidement un lieu de sortie fiable à Douala ou Yaoundé, consulter les menus à jour et réserver une table VIP sans friction téléphonique.',
    longDescription:
      "Conçue de bout en bout sur Figma puis développée avec Flutter et Supabase, Choozz aide les utilisateurs à explorer les meilleurs établissements de Douala et Yaoundé grâce à une recherche géolocalisée, la consultation des menus en temps réel et un parcours de réservation VIP fluide.",
    highlights: [
      'Catalogue géolocalisé filtrable par quartier, ambiance et budget (Douala & Yaoundé)',
      'Consultation des menus détaillés et système de réservations VIP',
      'Architecture temps réel propulsée par Supabase et design system complet sous Figma',
    ],
    deliverables: ['Maquettes & Prototype Figma', 'App Mobile Flutter', 'Backend Supabase'],
    stack: ['Flutter', 'Supabase', 'Figma'],
    image: '/projects/choozz.png',
    githubUrl: 'https://github.com/Yrdnal147',
    demoUrl: null,
    accent: 'from-blue-500/20 via-indigo-500/10 to-transparent',
    mockupVariant: 'choozz',
  },
  {
    id: 'sonoritiz',
    index: '02',
    title: 'Sonoritiz',
    subtitle: 'Mobile / UI-UX',
    year: '2025',
    role: 'UI/UX Designer & Développeur Flutter',
    categories: ['Mobile', 'UI/UX'],
    description:
      "Application mobile de streaming musical en mode sombre intégrant une API de titres Creative Commons.",
    context:
      "Offrir une expérience d'écoute musicale fluide, minimaliste et sombre reposant sur un catalogue ouvert Creative Commons.",
    longDescription:
      "Sonoritiz propose une expérience d'écoute moderne pensée pour le mode sombre. L'application consomme une API REST de musiques Creative Commons avec lecteur audio fluide, gestion de playlists, recherche instantanée et interface soignée conçue sur Figma.",
    highlights: [
      'Lecteur audio natif avec contrôles persistants et gestion de file de lecture',
      "Intégration complète d'une API REST de catalogues Creative Commons",
      'Interface dark-first pensée pour la lisibilité et le confort visuel',
    ],
    deliverables: ['Design Dark Mode Figma', 'Lecteur Audio Flutter', 'Client API REST'],
    stack: ['Flutter', 'API REST', 'Figma'],
    image: '/projects/sonoritiz.png',
    githubUrl: 'https://github.com/Yrdnal147',
    demoUrl: null,
    accent: 'from-sky-500/20 via-blue-500/10 to-transparent',
    mockupVariant: 'sonoritiz',
  },
  {
    id: 'jobconnect',
    index: '03',
    title: 'JobConnect',
    subtitle: 'Web & Mobile',
    year: '2025',
    role: 'Développeur Fullstack (Flutter • React • Supabase)',
    categories: ['Web', 'Mobile'],
    description:
      "Plateforme de mise en relation professionnelle et gestion d'offres.",
    context:
      "Connecter candidats et recruteurs sur un socle unifié permettant de publier, filtrer et suivre des offres aussi bien sur navigateur que sur mobile.",
    longDescription:
      "Écosystème multiplateforme combinant une interface web React et une application mobile Flutter autour d'un backend Supabase commun. JobConnect facilite la publication d'offres, le suivi des candidatures et la mise en relation directe entre recruteurs et talents.",
    highlights: [
      'Synchronisation multiplateforme Web (React) et Mobile (Flutter)',
      'Authentification sécurisée, gestion des profils et tableau de bord des offres',
      'Base de données relationnelle et API temps réel avec Supabase',
    ],
    deliverables: ['Portail Web React', 'App Mobile Flutter', 'Schéma & Auth Supabase'],
    stack: ['Flutter', 'Supabase', 'React'],
    image: '/projects/jobconnect.png',
    githubUrl: 'https://github.com/Yrdnal147',
    demoUrl: null,
    accent: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    mockupVariant: 'jobconnect',
  },
  {
    id: 'reseau-social',
    index: '04',
    title: 'Réseau Social Multiplateforme',
    subtitle: 'Mobile — projet Localhost Digital',
    year: '2024',
    role: 'Développeur Mobile Flutter (Travail en équipe)',
    categories: ['Mobile'],
    description:
      "Application mobile communautaire développée en équipe (fil d'actualité, authentification, architecture collaborative).",
    context:
      "Construire en équipe une application mobile communautaire robuste avec séparation claire des responsabilités et workflow Git rigoureux.",
    longDescription:
      "Projet mené en équipe au sein de Localhost Digital : conception et implémentation d'une application communautaire Flutter / Firebase intégrant un fil d'actualité dynamique, la gestion des comptes utilisateurs et un workflow Git collaboratif structuré.",
    highlights: [
      "Fil d'actualité dynamique, interactions utilisateurs et gestion des profils",
      'Authentification et stockage cloud via Firebase',
      'Travail collaboratif en équipe avec revues de code et workflow Git',
    ],
    deliverables: ['Modules Flutter/Dart', 'Intégration Firebase', 'Workflow Git collaboratif'],
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
    code: '01',
    title: 'Mobile',
    icon: 'Smartphone',
    description:
      'Applications natives et multiplateformes fluides, centrées sur la performance et l’UX.',
    items: [
      { name: 'Flutter', filterTech: 'Flutter' },
      { name: 'Dart', filterTech: null },
      { name: 'Architecture multiplateforme', filterTech: null },
      { name: 'Transition React Native (Expo)', filterTech: 'React' },
    ],
  },
  {
    id: 'web-backend',
    code: '02',
    title: 'Web & Backend',
    icon: 'Server',
    description:
      'Interfaces modernes, APIs REST robustes et architectures cloud prêtes pour la production.',
    items: [
      { name: 'React JS', filterTech: 'React' },
      { name: 'Laravel', filterTech: null },
      { name: 'Django REST Framework', filterTech: null },
      { name: 'APIs REST', filterTech: 'API REST' },
      { name: 'Supabase', filterTech: 'Supabase' },
      { name: 'Firebase', filterTech: 'Firebase' },
      { name: 'MySQL', filterTech: null },
    ],
  },
  {
    id: 'design-tools',
    code: '03',
    title: 'Design & Outils',
    icon: 'Layers',
    description:
      'De la maquette interactive Figma jusqu’au versionning collaboratif en équipe Agile.',
    items: [
      { name: 'Figma (UI/UX, prototypage)', filterTech: 'Figma' },
      { name: 'Git & GitHub', filterTech: null },
      { name: 'Méthodes Agiles', filterTech: null },
    ],
  },
];

export const experiences = [
  {
    id: 'ziloo',
    index: '01',
    monogram: 'ZL',
    role: 'Développeur Mobile Flutter',
    company: 'Ziloo',
    location: 'Douala',
    period: 'Depuis nov. 2025',
    shortPeriod: 'Nov. 2025',
    type: 'Poste actuel',
    current: true,
    description:
      "Conception et développement collaboratif d'applications mobiles innovantes.",
    highlights: [
      "Conception et développement d'applications mobiles multiplateformes avec Flutter & Dart.",
      'Collaboration étroite avec l’équipe produit pour livrer des interfaces soignées et performantes.',
      'Structuration du code et bonnes pratiques collaboratives sur des fonctionnalités innovantes.',
    ],
    tags: ['Flutter', 'Dart', 'Mobile'],
  },
  {
    id: 'oif-inchclass',
    index: '02',
    monogram: 'OI',
    role: 'Stagiaire Développeur Web Fullstack',
    company: 'OIF Inchclass',
    location: 'Douala',
    period: 'Janv. 2025 – Avr. 2025',
    shortPeriod: 'Janv. 2025',
    type: 'Stage',
    current: false,
    description:
      "Développement d'applications web fullstack, création d'APIs REST et conception de maquettes/prototypes Figma.",
    highlights: [
      "Développement d'applications web fullstack de bout en bout.",
      "Conception et intégration d'APIs REST structurées.",
      'Création de maquettes haute fidélité et prototypes interactifs sous Figma.',
    ],
    tags: ['Fullstack', 'APIs REST', 'Figma'],
  },
  {
    id: 'localhost-digital',
    index: '03',
    monogram: 'LD',
    role: 'Stagiaire Développeur Mobile Flutter',
    company: 'Localhost Digital',
    location: 'Douala',
    period: 'Oct. 2023 – Août 2024',
    shortPeriod: 'Oct. 2023',
    type: 'Stage',
    current: false,
    description:
      "Développement en équipe d'une application mobile multiplateforme de type réseau social avec Flutter.",
    highlights: [
      "Développement en équipe d'une application mobile communautaire multiplateforme en Flutter.",
      "Implémentation de fonctionnalités clés : authentification, fil d'actualité et gestion d'état.",
      'Intégration Firebase et workflow Git collaboratif en environnement agile.',
    ],
    tags: ['Flutter', 'Firebase', 'Git'],
  },
  {
    id: 'fulife-consulting',
    index: '04',
    monogram: 'FC',
    role: 'Développeur Web',
    company: 'Fulife Consulting Sarl',
    location: 'Douala',
    period: 'Mars 2022 – Juil. 2023',
    shortPeriod: 'Mars 2022',
    type: 'Expérience pro',
    current: false,
    description:
      'Intervention sur le cycle complet de développement web : analyse des besoins métiers, développement et tests.',
    highlights: [
      'Recueil et analyse des besoins métiers en lien direct avec les équipes.',
      'Développement de modules web complets et maintenance évolutive.',
      'Rédaction et exécution de phases de tests avant mise en production.',
    ],
    tags: ['Web', 'Analyse métier', 'Tests'],
  },
  {
    id: 'viettel-nexttel',
    index: '05',
    monogram: 'VN',
    role: 'Stagiaire Développeur Web',
    company: 'Viettel Cameroon S.A. (Nexttel)',
    location: 'Douala',
    period: 'Août 2021 – Fév. 2022',
    shortPeriod: 'Août 2021',
    type: 'Stage',
    current: false,
    description:
      "Participation au développement de solutions web internes au sein de l'équipe IT.",
    highlights: [
      "Participation au développement d'outils et solutions web internes.",
      "Intégration au sein de l'équipe IT dans un environnement télécom exigeant.",
      'Apprentissage des standards professionnels de développement et de suivi applicatif.',
    ],
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
