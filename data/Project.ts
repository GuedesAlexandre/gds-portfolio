import type { ProjectDetails } from "~/models/ProjectDetails";

export const data: ProjectDetails[] = [
  {
    description:
      "Azathoth est un projet personel développé en collaboration avec un amis. Il s'agit d'une application de monitoring qui fait le bilan de tout ce que je dois effectuer au quotidien. Elle me permet d'ograniser mes tâches en cours et en entreprise me permettant d'obtenir une origanisation plus stable. Elle analyse ce que j'effectue et là où je manque d'attention. Je dépose mes fichiers de notes dessus pour que en fonction d'une matrice, je sois capable de me situer dans l'avancé de mes cours.",
    technologies: ["Angular", "Java", "Spring Boot", "PostgreSQL"],
    github: "https://github.com/user/projet1",
    services: [
      "Branding",
      "UI/UX Design",
      "Dévelopement côté serveur",
      "Développement côté client",
    ],
    img: new URL("../assets/ressources/Azathoth", import.meta.url).toString(),
    imgDetails: [
      "https://example.com/img1_detail1.jpg",
      "https://example.com/img1_detail2.jpg",
    ],
    identifier: "Azathoth",
    name: "Azathoth",
  },
  {
    description:
      "À l'issue de ma formation, mon projet de fin de deuxième année était la réalisation, en équipe, d’une application web FullStack. Pour cela la problématique était de réaliser une application de commande de sushi pouvant être installer sur des bornes ou à l’intérieur d’un site. Pour cela nous devions réaliser le branding de notre restaurant, nous avons choisi Zushi qui pour symbole possédait un chat Neko japonais. Le projet comportait deux principales missions : le développement d’une RestAPI en Symfony et l’implémentation de l’application côté Front avec Angular.",
    technologies: ["Symfony", "Angular", "PostgreSQL", "Docker", "TailwindCSS"],
    github: "https://github.com/user/projet2",
    services: [
      "Branding",
      "UI/UX Design",
      "Dévelopement côté serveur",
      "Développement côté client",
    ],
    img: new URL("../assets/ressources/Zushi", import.meta.url).toString(),
    imgDetails: [
      "https://example.com/img2_detail1.jpg",
      "https://example.com/img2_detail2.jpg",
    ],
    identifier: "Zushi",
    name: "Zushi",
  },
  {
    description:
      "ACF2L est un projet universitaire réalisé en équipe de 4. L'objectif était de réaliser un site web fullstack pour l'aeroclub de Frotey-les-lures. Le site devait être une refonte de l'existant avec une toute nouvelle allure et des fonctionnalitées en plus.",
    technologies: ["PHP", "Boostrap", "MySQL", "JavaScript"],
    github: "https://github.com/user/projet3",
    services: ["Branding", "UI/UX Design", "Dévelopement côté serveur"],
    img: new URL("../assets/ressources/ACF2L", import.meta.url).toString(),
    imgDetails: [
      "https://example.com/img3_detail1.jpg",
      "https://example.com/img3_detail2.jpg",
    ],
    identifier: "ACF2L",
    name: "ACF2L",
  },
  {
    description:
      "L'italie à emporter est un projet universtaire qui a pour but de mélanger tout les médias existants sur le web. Pour cela nous devions pitcher en équipe un sujet de webdocumentaire. Nous sommes allez à la rencontre de la boutique de produit artisanal italien : Le Comptoir d'Italie. Le but pour nous était de faire découvrir quelque chose de nouveau au jury, nous avons donc réaliser un shooting dans la boutique ainsi que des plans vidéos et une interview du propriétaire. Une expérience enrichissante et source de connaissance. Derrière en découle le développement d'un site web où se mélange tout notre travail.",
    technologies: ["Html", "Css", "JavaScript"],
    github: "https://github.com/user/projet4",
    services: [
      "Branding",
      "UI/UX Design",
      "Dévelopement côté client",
      "Vidéo",
      "Photo",
      "Redaction Web",
    ],
    img: new URL("../assets/ressources/WebDoc", import.meta.url).toString(),
    imgDetails: [
      "https://example.com/img4_detail1.jpg",
      "https://example.com/img4_detail2.jpg",
    ],
    identifier: "ItalieAEmporter",
    name: "L'Italie à emporter",
  },
  {
    description:
      "Evolve est un projet universitaire qui avait pour but de faire découvrir une culture oublié de tous. Nous avons choisi avec un camarade de nous porter sur l'ère moderne de la musique somalienne. La musique somalienne est aujourd'hui très peu écouté au vu des évènements tragiques qui se sont déroulés. Mais il y a de cela quelques années c'était le point de connexion de nombreux artistes développant ainsi un mélange de différents styles de musiques formant la musique somalienne. Nous avons intégrer un modèle 3D du Kanban pour rappeler un instrument populaire de cet ère.",
    technologies: ["React", "JavaScript", "Three.js", "TailwindCss", "Blender"],
    github: "https://github.com/user/projet5",
    services: [
      "Branding",
      "Animations",
      "Dévelopement côté client",
      "Modélisation 3D",
    ],
    img: new URL("../assets/ressources/Evolve", import.meta.url).toString(),
    imgDetails: [
      "https://example.com/img5_detail1.jpg",
      "https://example.com/img5_detail2.jpg",
    ],
    identifier: "Evolve",
    name: "Evolve",
  },
];
