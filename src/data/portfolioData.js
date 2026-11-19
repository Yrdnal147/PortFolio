export const personalInfo = {
  brandFirst: 'Samuel Ndedy',
  brandSuffix: '.dev',
  fullName: 'Samuel Landry Woulle Ndedy',
  initials: 'SN',
  photoPath: '/photo-samuel.jpg',
  shortRole: 'Développeur Mobile & Web (Flutter • React) & Designer UI/UX',
  headline:
    'Je crée des applications mobiles et des sites web simples, beaux et efficaces.',
  tagline:
    "Titulaire d'un cursus Master en Génie Logiciel, j'accompagne entreprises et équipes de la première maquette jusqu'à la mise en ligne, sur téléphone comme sur ordinateur.",
  availability: 'Disponible — Douala & à distance',
  responseTime: 'Réponse habituelle en moins de 24h',
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
  keyMetrics: [
    { value: '+4 ans', label: 'Expérience terrain' },
    { value: 'Master 2', label: 'Génie Logiciel' },
    { value: 'De A à Z', label: 'Design, Mobile & Web' },
  ],
};

export const navLinks = [
  { id: 'hero', label: 'Accueil', href: '#hero' },
  { id: 'projects', label: 'Réalisations', href: '#projects' },
  { id: 'skills', label: 'Services', href: '#skills' },
  { id: 'experience', label: 'Parcours', href: '#experience' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const projectCategories = [
  { id: 'all', label: 'Tout voir' },
  { id: 'mobile', label: 'Applications mobiles' },
  { id: 'web', label: 'Web & Plateformes' },
  { id: 'design', label: 'Design UI/UX' },
];

export const projects = [
  {
    id: 'choozz',
    title: 'Choozz',
    badge: 'Application mobile & Design',
    year: '2025',
    categories: ['mobile', 'design'],
    summary:
      'Trouver les meilleurs restaurants, bars et lieux de sortie à Douala et Yaoundé, consulter les menus et réserver une table VIP en quelques clics.',
    problem:
      "Chercher un bon lieu de sortie à Douala ou Yaoundé demande souvent des appels et des recherches éparpillées. L'objectif de Choozz est de réunir adresses, menus et réservations VIP dans une seule application simple.",
    whatIBuilt: [
      'Conception complète des écrans et du parcours utilisateur sur Figma.',
      'Catalogue géolocalisé pour découvrir les établissements de Douala et Yaoundé.',
      'Consultation des menus détaillés et réservation VIP directe depuis le téléphone.',
      'Base de données temps réel sécurisée avec Supabase.',
    ],
    stack: ['Flutter', 'Supabase', 'Figma'],
    image: '/projects/choozz.png',
    githubUrl: 'https://github.com/Yrdnal147',
    demoUrl: null,
    mockupVariant: 'choozz',
  },
  {
    id: 'sonoritiz',
    title: 'Sonoritiz',
    badge: 'Application mobile & Design',
    year: '2025',
    categories: ['mobile', 'design'],
    summary:
      "Une application d'écoute musicale en mode sombre, pensée pour le confort visuel et connectée à un catalogue ouvert de titres Creative Commons.",
    problem:
      "Proposer une expérience d'écoute musicale fluide, moderne et agréable le soir, permettant de découvrir et lancer des morceaux libres de droits sans publicité envahissante.",
    whatIBuilt: [
      "Création d'une interface sombre élégante et intuitive sur Figma.",
      'Lecteur audio fluide avec gestion de la lecture en continu.',
      "Connexion à une API de musiques Creative Commons pour explorer les titres en direct.",
    ],
    stack: ['Flutter', 'API REST', 'Figma'],
    image: '/projects/sonoritiz.png',
    githubUrl: 'https://github.com/Yrdnal147',
    demoUrl: null,
    mockupVariant: 'sonoritiz',
  },
  {
    id: 'jobconnect',
    title: 'JobConnect',
    badge: 'Site Web & Application mobile',
    year: '2025',
    categories: ['web', 'mobile'],
    summary:
      "Une plateforme complète pour publier des offres d'emploi et mettre rapidement en relation recruteurs et candidats, sur ordinateur comme sur mobile.",
    problem:
      "Faciliter la rencontre entre entreprises qui recrutent et talents disponibles, en offrant un espace web clair pour les recruteurs et une application mobile pratique pour les candidats.",
    whatIBuilt: [
      'Interface web moderne développée avec React pour gérer et consulter les offres.',
      'Application mobile Flutter synchronisée pour suivre les opportunités partout.',
      'Système de comptes utilisateurs et gestion des données centralisée avec Supabase.',
    ],
    stack: ['Flutter', 'React', 'Supabase'],
    image: '/projects/jobconnect.png',
    githubUrl: 'https://github.com/Yrdnal147',
    demoUrl: null,
    mockupVariant: 'jobconnect',
  },
  {
    id: 'reseau-social',
    title: 'Réseau Social Multiplateforme',
    badge: 'Application mobile (Projet en équipe)',
    year: '2024',
    categories: ['mobile'],
    summary:
      "Application communautaire réalisée en équipe chez Localhost Digital : création de compte, partage de publications et fil d'actualité fluide.",
    problem:
      "Concevoir en équipe une application sociale fiable, capable de fonctionner aussi bien sur Android que sur iOS, avec une organisation de travail professionnelle.",
    whatIBuilt: [
      "Développement du fil d'actualité et des écrans communautaires en Flutter.",
      "Mise en place de l'authentification et du stockage des données avec Firebase.",
      "Travail collaboratif en équipe structuré avec Git et revues de code.",
    ],
    stack: ['Flutter', 'Dart', 'Firebase', 'Git'],
    image: '/projects/reseau-social.png',
    githubUrl: 'https://github.com/Yrdnal147',
    demoUrl: null,
    mockupVariant: 'social',
  },
];

export const servicesAndSkills = [
  {
    id: 'mobile',
    title: 'Applications Mobiles',
    subtitle: 'Android & iOS',
    icon: 'Smartphone',
    plainDescription:
      'Je conçois des applications rapides et agréables à prendre en main sur téléphone, pensées pour fonctionner sans ralentissement au quotidien.',
    toolsLabel: 'Technologies utilisées',
    items: [
      'Flutter',
      'Dart',
      'Architecture multiplateforme',
      'Transition React Native (Expo)',
    ],
  },
  {
    id: 'web-backend',
    title: 'Sites & Plateformes Web',
    subtitle: 'Interface & Serveur',
    icon: 'Globe',
    plainDescription:
      'Je construis des sites web modernes et des plateformes connectées à vos données, sécurisées et faciles à faire évoluer avec votre activité.',
    toolsLabel: 'Technologies utilisées',
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
    title: 'Design UI/UX & Méthode',
    subtitle: 'Maquettes & Suivi',
    icon: 'Palette',
    plainDescription:
      'Avant de coder, je dessine des maquettes claires et cliquables pour que vous puissiez visualiser et valider votre projet dès le départ.',
    toolsLabel: 'Outils & méthodes',
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
    type: 'Poste actuel',
    description:
      "Conception et développement collaboratif d'applications mobiles innovantes.",
    tags: ['Flutter', 'Dart', 'Application mobile'],
  },
  {
    id: 'oif-inchclass',
    role: 'Stagiaire Développeur Web Fullstack',
    company: 'OIF Inchclass',
    location: 'Douala',
    period: 'Janv. 2025 – Avr. 2025',
    current: false,
    type: 'Stage',
    description:
      "Développement d'applications web complètes (interface et serveur), création d'APIs REST et conception de maquettes interactives sur Figma.",
    tags: ['Web Fullstack', 'APIs REST', 'Figma'],
  },
  {
    id: 'localhost-digital',
    role: 'Stagiaire Développeur Mobile Flutter',
    company: 'Localhost Digital',
    location: 'Douala',
    period: 'Oct. 2023 – Août 2024',
    current: false,
    type: 'Stage',
    description:
      "Développement en équipe d'une application mobile communautaire (réseau social) fonctionnant sur plusieurs plateformes avec Flutter.",
    tags: ['Flutter', 'Firebase', 'Travail en équipe'],
  },
  {
    id: 'fulife-consulting',
    role: 'Développeur Web',
    company: 'Fulife Consulting Sarl',
    location: 'Douala',
    period: 'Mars 2022 – Juil. 2023',
    current: false,
    type: 'Expérience pro',
    description:
      'Participation à tout le cycle de création de solutions web : écoute des besoins métiers, développement des fonctionnalités et vérification avant mise en ligne.',
    tags: ['Développement Web', 'Analyse métier', 'Tests'],
  },
  {
    id: 'viettel-nexttel',
    role: 'Stagiaire Développeur Web',
    company: 'Viettel Cameroon S.A. (Nexttel)',
    location: 'Douala',
    period: 'Août 2021 – Fév. 2022',
    current: false,
    type: 'Stage',
    description:
      "Participation au développement d'outils web internes au sein de l'équipe informatique.",
    tags: ['Solutions internes', 'Équipe IT'],
  },
];

export const education = {
  degrees: [
    {
      title: 'Master 2 en Génie Logiciel',
      institution: 'IUGET Douala',
      period: 'Depuis nov. 2025',
      current: true,
    },
    {
      title: 'Master 1 en Génie Logiciel',
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
