export const myProjects = [
  {
    id: 1,
    title: "Maze Runners (cub3d)",
    description:
      "A 3D maze exploration game inspired by Wolfenstein 3D, built using raycasting in C.",
    subDescription: [
      "Implemented a raycasting engine from scratch for rendering 3D walls and environments.",
      "Added texture mapping, smooth player movement, and collision detection.",
      "Managed game loop, frame rendering, and keyboard input handling.",
      "Optimized performance for real-time rendering using pure C.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/MAZE-RUNNERS.png",
    tags: [
      { id: 1, name: "C", path: "/assets/logos/c.svg" },
      { id: 2, name: "Raycasting" },
      { id: 3, name: "Math" },
      { id: 4, name: "GameDev" },
    ],
  },
  {
    id: 2,
    title: "Minishell",
    description:
      "A lightweight shell inspired by Bash, implementing core UNIX commands and features.",
    subDescription: [
      "Built a custom command-line interpreter handling pipes, redirections, and environment variables.",
      "Implemented process management with `fork`, `execve`, and `wait`.",
      "Developed signal handling for Ctrl+C, Ctrl+D, and Ctrl+\\.",
      "Focused on memory management and preventing leaks using `valgrind`.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/minishell.png",
    tags: [
      { id: 1, name: "C", path: "/assets/logos/c.svg" },
      { id: 2, name: "UNIX" },
      { id: 3, name: "Shell" },
      { id: 4, name: "System Calls" },
    ],
  },
  {
    id: 3,
    title: "Space Pong (ft_transcendence)",
    description:
      "A full-stack multiplayer web game inspired by Pong, enhanced with modern features.",
    subDescription: [
      "Developed a multiplayer Pong game with matchmaking, tournaments, and live chat.",
      "Built with a TypeScript/React frontend and NestJS backend.",
      "Implemented JWT authentication, real-time WebSocket communication, and OAuth2 login.",
      "Designed a responsive UI with TailwindCSS and Shadcn.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/space-pong.png",
    tags: [
      { id: 1, name: "TypeScript", path: "/assets/logos/typescript.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "NestJS" },
      { id: 4, name: "PostgreSQL" },
    ],
  },
  {
    id: 4,
    title: "Inception",
    description:
      "A Docker-based project to set up and manage multiple services in isolated containers.",
    subDescription: [
      "Built a WordPress site with Nginx, MariaDB, and Redis using Docker Compose.",
      "Configured volumes for persistent storage and container networking.",
      "Implemented SSL/TLS for secure connections using Nginx.",
      "Focused on container orchestration and scalable architecture.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/inception.png",
    tags: [
      { id: 1, name: "Docker", path: "/assets/logos/docker.svg" },
      { id: 2, name: "Nginx" },
      { id: 3, name: "MariaDB" },
      { id: 4, name: "DevOps" },
    ],
  },
  {
    id: 5,
    title: "IRC",
    description:
      "An IRC (Internet Relay Chat) server built from scratch with C++.",
    subDescription: [
      "Implemented socket programming with TCP/IP for client-server communication.",
      "Added support for multiple clients with channel management.",
      "Handled IRC commands such as JOIN, PART, PRIVMSG, KICK, and more.",
      "Designed with asynchronous communication and scalability in mind.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/irc.png",
    tags: [
      { id: 1, name: "C++", path: "/assets/logos/cplusplus.svg" },
      { id: 2, name: "Sockets" },
      { id: 3, name: "Networking" },
      { id: 4, name: "Linux" },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ali-sanati/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ali.sanatidev/reels/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const certifications = [
  {
    title: "Front End Development Libraries",
    issuer: "freeCodeCamp",
    date: "2023",
    image: "/assets/certifications/front-end-development-libraries.png",
    url: "https://www.freecodecamp.org/certification/",
    skills: [
      "React",
      "Redux",
      "Bootstrap",
      "jQuery",
      "SASS"
    ]
  },
  {
    title: "Back End Development and APIs",
    issuer: "freeCodeCamp",
    date: "2023",
    image: "/assets/certifications/back-end-development-and-apis.png",
    url: "https://www.freecodecamp.org/certification/",
    skills: [
      "Node.js",
      "Express",
      "MongoDB",
      "REST APIs",
      "Microservices"
    ]
  },
  {
    title: "PostgreSQL",
    issuer: "freeCodeCamp",
    date: "2023",
    image: "/assets/certifications/PostgreSQL.png",
    url: "https://www.freecodecamp.org/certification/",
    skills: [
      "SQL",
      "Database Design",
      "Query Optimization",
      "Data Modeling",
      "Database Administration"
    ]
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2023",
    image: "/assets/certifications/responsive-web-design.png",
    url: "https://www.freecodecamp.org/certification/",
    skills: [
      "HTML5",
      "CSS3",
      "Flexbox",
      "CSS Grid",
      "Responsive Design"
    ]
  }
];