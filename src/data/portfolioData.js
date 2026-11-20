export const personalInfo = {
  brandFirst: 'Samuel Ndedy',
  brandSuffix: '.dev',
  fullName: 'Samuel Landry Woulle Ndedy',
  initials: 'SN',
  photoPath: '/photo-samuel.jpg',
  shortRole: 'Développeur Mobile & Web (Flutter, React Js, Django Rest Framework) & Designer UI/UX',
  headline:
    'Je crée des applications mobiles et des sites web, ergoniques et agréables à utiliser, avec un design moderne et une expérience utilisateur fluide.',
  tagline:
    "Titulaire d'un Master en Génie Logiciel, je participe à la conception et au développement d'applications web et mobiles de la description des besoins metiers à la mise en production.",
  availability: 'CDI, stage Professionnel, missions freelance',
  responseTime: 'Réponse habituelle en moins de 24h',
  location: 'Douala, Cameroun',
  email: 'samuellandry147@gmail.com',
  phoneDisplay: '+237 6 58 00 44 24/ 641  00 44 24',
  whatsappUrl: 'https://wa.me/237658004424',
  githubUrl: 'https://github.com/Yrdnal147',
  githubHandle: '@Yrdnal147',
  linkedinName: 'Samuel Ndedy',
  linkedinUrl: 'https://www.linkedin.com/in/samuel-ndedy',
  cvPath: '/cv-samuel-woulle-ndedy.pdf',
  copyrightYear: 2026,
  keyMetrics: [
    { value: '+4 ans', label: 'Expérience dans le développement' },
    { value: 'Master 2', label: 'Génie Logiciel' },

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
      'Trouver les meilleurs restaurants, bars et lieux de sortie à Douala, consulter les menus et réserver une table VIP en quelques clics.',
    problem:
      "Chercher un bon lieu de sortie à Douala demande souvent non seulement une cbonne connaissance de la ville mais aussides appels et des recherches éparpillées. L'objectif de Choozz est de réunir adresses, prix, menus et réservations VIP dans une seule plateforme.",
    whatIBuilt: [
      'Conception complète des écrans et du parcours utilisateur sur Figma.',
      'Catalogue géolocalisé pour découvrir les établissements de Douala.',
      'Consultation des menus détaillés et réservation VIP directe depuis le téléphone ou via le site web.',
      'Coté restaurant, gestion des réservations et des menus via une interface web sécurisée et surtout haut niveau de la visibilité de la structure et de ses services.',
      'Base de données en temps réel sécurisée avec Supabase.',
    ],
    stack: ['Flutter', 'Supabase', 'Figma', 'React Js'],
    image: '/projects/choozz.png',
    githubUrl: 'https://github.com/Yrdnal147',
    demoUrl: null,
    mockupVariant: 'choozz',
  },
  {
    id: 'gesform',
    title: 'Gesform',
    badge: 'Application Web Fullstack & Design',
    year: '2025',
    categories: ['web', 'design'],
    summary:
      'Application web complète de gestion de centre de formation (projet de fin de formation OIF) : planification des cours, disponibilité des salles et formateurs, suivi du cursus des étudiants et gestion des présences et absences.',
    problem:
      "Centraliser toute l'organisation quotidienne d'un centre de formation pour éviter les conflits de salles ou de formateurs et suivre facilement la progression et l'assiduité de chaque étudiant.",
    whatIBuilt: [
      "Backend & API REST (Laravel + Supabase) : conception de l'architecture serveur et développement de l'API REST gérant les cours, la disponibilité des salles et des formateurs, le suivi des cursus ainsi que les absences et présences.",
      "Application web (React JS) : développement d'une interface claire, rapide et réactive à partir des maquettes réalisées sur Figma.",
      'Hébergement & Déploiement (Vercel) : configuration, mise en ligne et hébergement continu du site web sur Vercel.',
    ],
    stack: ['React JS', 'Laravel', 'API REST', 'Supabase', 'Figma', 'Vercel'],
    image: '/projects/gesform.png',
    githubUrl: 'https://github.com/Yrdnal147',
    demoUrl: null,
    mockupVariant: 'gesform',
  },
  {
    id: 'sonoritiz',
    title: 'Sonoritiz',
    badge: 'Application mobile & Design',
    year: '2025',
    categories: ['mobile', 'design'],
    summary:
      "Une application d'écoute musicale 100% gratuite, pensée pour le confort visuel et connectée à un catalogue ouvert de titres Creative Commons.",
    problem:
      "Proposer une expérience d'écoute musicale fluide, moderne et agréable le soir, permettant de découvrir et lancer des morceaux libres de droits sans publicité envahissante.",
    whatIBuilt: [
      "Création d'une interface sombre élégante et intuitive sur Figma.",
      'Lecteur audio fluide avec gestion de la lecture en continu.',
      "Connexion à une API des musiques Creative Commons  pour explorer et ecouter des titres .",
    ],
    stack: ['Flutter', 'API REST', 'Figma', 'Audio Streaming', 'Design UI/UX', 'Django Rest Framework'],
    image: '/projects/sonoritiz.png',
    githubUrl: 'https://github.com/Yrdnal147',
    demoUrl: null,
    mockupVariant: 'sonoritiz',
  },
  {
    id: 'jobconnect',
    title: 'JobConnect',
    badge: 'Application mobile',
    year: '2025',
    categories: ['mobile'],
    summary:
      "Une plateforme intelligente basée sur un système multi-agents IA pour publier des offres d'emploi et mettre rapidement en relation recruteurs et candidats(jeunes diplômés,étudiants) basés le matching intelligent et la recommandation de cv.",
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
    id: 'SnapChoice ',
    title: 'Réseau Social Communautaire',
    badge: 'Application mobile (Projet en équipe)',
    year: '2024',
    categories: ['mobile'],
    summary:
      "Application communautaire réalisée en équipe chez Localhost Digital : création de compte, partage de publications et fil d'actualité fluide.",
    problem:
      "Concevoir en équipe une application sociale fiable, capable de fonctionner aussi bien sur Android que sur iOS, avec une organisation de travail professionnelle.",
    whatIBuilt: [
  
      "Dans ce projeet, j'ai participé à la conception des interfaces utilisateurs, à la mise en place des authentifications des utilisateurs, à la création du fil d'actualité et à l'intégration de fonctionnalités de publications .",
    ],
    stack: ['Flutter', 'Dart', 'Firebase', 'Git', 'Laravel', 'Design UI/UX'],
    image: '/projects/reseau-social.png',
    githubUrl: 'https://github.com/Yrdnal147',
    demoUrl: null,
    mockupVariant: 'social',
  },
];

export const servicesAndSkills = [
  {
    id: 'mobile-apps',
    title: 'Applications Mobiles',
    subtitle: ' Cross platform (Android & iOS)',
    icon: 'Smartphone',
    plainDescription:
      'Je conçois des applications rapides et agréables à prendre en main sur téléphone, pensées pour fonctionner sans ralentissement au quotidien.',
    toolsLabel: 'Technologies utilisées',
    items: [
      'Flutter',
      'Dart',
      'Architecture multiplateforme',
      
    ],
  },
  {
    id: 'web-backend',
    title: 'Sites, Backend & Déploiement',
    subtitle: 'Interface, API REST & Hébergement',
    icon: 'Globe',
    plainDescription:
      "Je construis des applications web complètes : interface moderne, logique serveur solide (APIs REST et bases de données) et mise en ligne clé en main sur un hébergement fiable.",
    toolsLabel: 'Technologies & hébergement',
    items: [
      'React JS',
      'Laravel (API REST)',
      'Django REST Framework',
      'Architecture Backend',
      'Supabase',
      'Firebase',
      'MySQL',
      'Déploiement & Hébergement (Vercel)',
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
      "Conception et développement complet de Gesform (gestion de formations, salles, formateurs, cursus et présences) : maquettes Figma, application web React JS hébergée sur Vercel et API REST backend développée avec Laravel et Supabase.",
    tags: ['React JS', 'Laravel', 'Django', 'API REST', 'Supabase', 'Vercel', 'Figma'],
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
    tags: ['Flutter', 'Firebase', 'Travail en équipe', 'php'],
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
      period: ' nov. 2025 - Juillet 2026',
      current: false,
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
  Attestations: [
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
