import type { ProjectDetails } from "~/models/ProjectDetails";

export const data: ProjectDetails[] = [
  {
    description:
      "L'IUT de Meaux ne dispose actuellement d'aucune application pour gérer efficacement les notes, les absences et la visualisation de l’établissement. En réponse à ce besoin, le projet MMIPlatform a été proposé par notre équipe. Cette application vise à centraliser et simplifier la gestion académique et administrative grâce à des outils modernes, notamment une vue interactive 3D des salles et une gestion avancée des matrices Excel.",
    technologies: [
      "Next.js",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
    ],
    github: [
      {
        name: "Backend",
        description: "Backend de l'application",
        html_url: "https://github.com/GuedesAlexandre/MMIPlatform_back",
      },
      {
        name: "Frontend",
        description: "Frontend de l'application",
        html_url: "https://github.com/GuedesAlexandre/MMIPlatform_front",
      },
      {
        name: "Mobile",
        description: "Mobile de l'application",
        html_url: "https://github.com/GuedesAlexandre/MMIPlatform_mobile",
      },
    ],
    date: "Septembre 2024 à mars 2025",
    services: [
      "Branding",
      "UI/UX Design",
      "Dévelopement côté serveur",
      "Développement côté client",
      "Hébergement",
    ],
    img: new URL(
      "../assets/ressources/MMIPlatform.png",
      import.meta.url
    ).toString(),
    imgDetails: [
      new URL(
        "../assets/ressources/MMIPlatform/dashboard.png",
        import.meta.url
      ).toString(),
      new URL(
        "../assets/ressources/MMIPlatform/3d.png",
        import.meta.url
      ).toString(),
    ],

    identifier: "MMIPlatform",
    name: "MMIPlatform",
    url: "https://nightgaunt.cloud",
  },
  {
    description:
      "À l'issue de ma formation, mon projet de fin de deuxième année était la réalisation, en équipe, d’une application web FullStack. Pour cela la problématique était de réaliser une application de commande de sushi pouvant être installer sur des bornes ou à l’intérieur d’un site. Pour cela nous devions réaliser le branding de notre restaurant, nous avons choisi Zushi qui pour symbole possédait un chat Neko japonais. Le projet comportait deux principales missions : le développement d’une RestAPI en Symfony et l’implémentation de l’application côté Front avec Angular.",
    technologies: ["Symfony", "Angular", "PostgreSQL", "Docker", "TailwindCSS"],
    github: [
      {
        name: "Backend",
        description: "Backend de l'application",
        html_url: "https://github.com/GuedesAlexandre/ZushiRestAPI",
      },
      {
        name: "Frontend",
        description: "Frontend de l'application",
        html_url: "https://github.com/GuedesAlexandre/Zushi",
      },
    ],
    services: [
      "Branding",
      "UI/UX Design",
      "Dévelopement côté serveur",
      "Développement côté client",
    ],
    date: "Janvier 2024 à avril 2024",
    img: new URL("../assets/ressources/Zushi.png", import.meta.url).toString(),
    imgDetails: [
      new URL(
        "../assets/ressources/Zushi/landing.png",
        import.meta.url
      ).toString(),
      new URL(
        "../assets/ressources/Zushi/board.png",
        import.meta.url
      ).toString(),
    ],
    identifier: "Zushi",
    name: "Zushi",
  },
  {
    description:
      "ACF2L est un projet universitaire réalisé en équipe de 4. L'objectif était de réaliser un site web fullstack pour l'aeroclub de Frotey-les-lures. Le site devait être une refonte de l'existant avec une toute nouvelle allure et des fonctionnalitées en plus.",
    technologies: ["PHP", "Boostrap", "MySQL", "JavaScript"],
    github: [
      {
        name: "",
        description: "",
        html_url: "https://github.com/GuedesAlexandre/ACF2L",
      },
    ],
    services: ["Branding", "UI/UX Design", "Dévelopement côté serveur"],
    img: new URL("../assets/ressources/ACF2L.png", import.meta.url).toString(),
    date: "Septembre 2023 à décembre 2023",
    imgDetails: [
      new URL(
        "../assets/ressources/ACF2L/landing.png",
        import.meta.url
      ).toString(),
      new URL("../assets/ressources/ACF2L/ulm.png", import.meta.url).toString(),
    ],
    identifier: "ACF2L",
    name: "ACF2L",
  },
  {
    description:
      "L'italie à emporter est un projet universtaire qui a pour but de mélanger tout les médias existants sur le web. Pour cela nous devions pitcher en équipe un sujet de webdocumentaire. Nous sommes allez à la rencontre de la boutique de produit artisanal italien : Le Comptoir d'Italie. Le but pour nous était de faire découvrir quelque chose de nouveau au jury, nous avons donc réaliser un shooting dans la boutique ainsi que des plans vidéos et une interview du propriétaire. Une expérience enrichissante et source de connaissance. Derrière en découle le développement d'un site web où se mélange tout notre travail.",
    technologies: ["Html", "Css", "JavaScript"],
    github: [
      {
        name: "",
        description: "",
        html_url: "https://github.com/GuedesAlexandre/Webdoc",
      },
    ],
    date: "Septembre 2023 à décembre 2023",
    services: [
      "Branding",
      "UI/UX Design",
      "Dévelopement côté client",
      "Vidéo",
      "Photo",
      "Redaction Web",
    ],
    img: new URL("../assets/ressources/WebDoc.png", import.meta.url).toString(),
    imgDetails: [
      new URL(
        "../assets/ressources/WebDoc/landing.png",
        import.meta.url
      ).toString(),
      new URL(
        "../assets/ressources/WebDoc/story.png",
        import.meta.url
      ).toString(),
    ],
    identifier: "ItalieAEmporter",
    name: "L'Italie à emporter",
  },
  {
    description:
      "Evolve est un projet universitaire qui avait pour but de faire découvrir une culture oublié de tous. Nous avons choisi avec un camarade de nous porter sur l'ère moderne de la musique somalienne. La musique somalienne est aujourd'hui très peu écouté au vu des évènements tragiques qui se sont déroulés. Mais il y a de cela quelques années c'était le point de connexion de nombreux artistes développant ainsi un mélange de différents styles de musiques formant la musique somalienne. Nous avons intégrer un modèle 3D du Kanban pour rappeler un instrument populaire de cet ère.",
    technologies: ["React", "JavaScript", "Three.js", "TailwindCss", "Blender"],
    github: [
      {
        name: "",
        description: "",
        html_url: "https://github.com/GuedesAlexandre/Evolve",
      },
    ],
    services: [
      "Branding",
      "Animations",
      "Dévelopement côté client",
      "Modélisation 3D",
    ],
    date: "Janvier 2024 à avril 2024",
    img: new URL("../assets/ressources/Evolve.png", import.meta.url).toString(),
    imgDetails: [
      new URL(
        "../assets/ressources/Evolve/landing.png",
        import.meta.url
      ).toString(),
    ],
    identifier: "Evolve",
    name: "Evolve",
  },
];
