import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Frontend Developer",
    icon: <FrontendIcon />,
  },
  {
    title: "Backend Developer",
    icon: <BackendIcon />,
  },
  // {
  //   title: "Backend Developer",
  //   icon: <FreelancerIcon />,
  // },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Leadership",
    icon: <LeaderShipIcon />,
  },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "C#",
      icon: "/assets/tech/c1.png",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
    {
      name: "PHP",
      icon: "/assets/tech/php.png",
      link: "https://www.php.org/",
    },
  ],
  frameworks: [
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "Angular",
      icon: "/assets/tech/angular.png",
      link: "https://www.angular.org/",
    },
    {
      name: "Vue.js",
      icon: "/assets/tech/vue.png",
      link: "https://www.angular.org/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Laravel",
      icon: "/assets/tech/laravel.png",
      link: "https://www.laravel.com/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
    {
      name: "Flutter",
      icon: "/assets/tech/flutter.svg",
      link: "https://flutter.dev/",
    },
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Three.js",
      icon: "/assets/tech/threejs.svg",
      link: "https://threejs.org/",
    },
    {
      name: "Styled-Components",
      icon: "/assets/tech/styled-components.png",
      link: "https://styled-components.com/",
    },
    {
      name: "Framer-motion",
      icon: "/assets/tech/framer.svg",
      link: "https://www.framer.com/motion/",
    },
    {
      name: "Zustand",
      icon: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg",
      link: "https://zustand-demo.pmnd.rs",
    },
    {
      name: "Redux/Redux-toolkit",
      icon: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
      link: "https://redux.js.org",
    },
    {
      name: "NextAuth.js",
      icon: "/assets/tech/nextauthjs.png",
      link: "https://next-auth.js.org/",
    },
    {
      name: "Prisma",
      icon: "/assets/tech/prisma.svg",
      link: "https://www.prisma.io/",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Figma",
      icon: "/assets/tech/figma.svg",
      link: "https://www.figma.com/",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
  ],
  databases: [
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "PostgreSQL",
      icon: "/assets/tech/postgresql.png",
      link: "https://www.postgresql.org",
    },
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
  ],
};

const experiences = [
  // {
  //   title: "Software Engineer",
  //   company_name: "Tech Lead at GDSC MVJCE",
  //   icon: "/assets/company/gdsc-logo.svg",
  //   iconBg: "#E6DEDD",
  //   date: "July 2023 - Present",
  //   points: [
  //     "Currently serving as the Tech Lead of GDSC, responsible for guiding technical aspects, fostering collaboration, and contributing to strategic decisions.",
  //     "Led induction programs, ensured new member alignment with GDSC's mission, and provided technical mentorship.",
  //     "Developed GDSC MVJCE website, enhancing the organization's online visibility.",
  //     "Spearheaded promotional campaigns, actively engaged with the GDSC community, and played a key role in planning and executing events.",
  //   ],
  // },
  {
    title: "Senior Software Engineer",
    company_name: "ABC Technologies ",
    icon: "/assets/company/2.png",
    iconBg: "#E6DEDD",
    date: "01/2020 - 05/2025",
    points: [
      "Developed a Facility Bookings Manager for DRDO CABS using TypeScript, React, Node.js, Express, Prisma, and MySQL within a month.",
      "Actively addressed client issues and queries, ensuring seamless integration with their platform and local cluster system.",
      "Led the design and implementation of the frontend, providing a user-friendly interface for efficient facility management.",
      "Collaborated with a backend intern throughout the internship to deliver a comprehensive solution tailored to DRDO CABS's needs.",
      "Mentored and guided junior developers, improving team performance by 20%.",
    ],
  },
  {
    title: "Junior Software Engineer",
    company_name: "Intern at DRDO CABS",
    icon: "/assets/company/1.png",
    iconBg: "#E6DEDD",
    date: "10/2016 - 10/2019",
    points: [
      "Assisted in the development of web applications using PHP,Laravel, and MySQL.",
      "Participated in code reviews and collaborated with senior developers to improve code quality.",
      "Developed reusable components and optimized existing code,improving system efficiency.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Tech team member at GDSC MVJCE",
    icon: "/assets/company/gdsc-logo.svg",
    iconBg: "#E6DEDD",
    date: "2014/1 - 2016/9",
    points: [
      "Successfully planned and executed induction programs, providing new members with crucial information about the organization's goals and values.",
      "Demonstrated web development expertise by conducting CSS workshops, equipping participants with practical web design and styling skills.",
      "Played a crucial role in promoting GDSC events and actively collaborated with cross-functional teams to deliver high-quality projects, fostering teamwork and innovation.",
      "Actively engaged with the GDSC community, assisted in workshops, and contributed to planning and managing GDSC events, ensuring their success and growth.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AuthGPT",
    description:
      "AutoGPT is a powerful platform that allows you to create, deploy, and manage continuous AI agents that automate complex workflows.AutoGPT is the vision of accessible AI for everyone, to use and to build on. Our mission is to provide the tools, so that you can focus on what matters.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "Dart",
        color: "yellow-text-gradient",
      },
      {
        name: "PlpgSQL",
        color: "pink-text-gradient",
      },
      {
        name: "Jinja",
        color: "orange-text-gradient",
      },
      {
        name: "C++",
        color: "blue-text-gradient",
      },
    ],
    image: "/assets/projects/authgpt.png",
    source_code_link: "https://github.com/BrunoCat118/Auth_GPT",
    deployed_link: "https://agpt.co/",
  },
  {
    name: "Diem",
    description:
      "Diem’s mission is to build a trusted and innovative financial network that empowers people and businesses around the world. Diem Core implements a decentralized, programmable distributed ledger which provides a financial infrastructure that can empower billions of people.",
    tags: [
      {
        name: "Rust",
        color: "blue-text-gradient",
      },
      {
        name: "Javasscript",
        color: "green-text-gradient",
      },
      {
        name: "SMT",
        color: "yellow-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Shell",
        color: "orange-text-gradient",
      },
      {
        name: "TEX",
        color: "blue-text-gradient",
      },
    ],
    image: "/assets/projects/diem.png",
    source_code_link: "https://github.com/BrunoCat118/Diem",
    deployed_link: "https://www.diem.com/en-us/",
  },
  {
    name: "Basic-MERN-Stack",
    description:
      "Front-End - React + Redux, Back- End - Node.js, Express.js & MongoDBThe AI PaaS For Deploying, Managing, and Scaling Apps Heroku tackles the toil — patching and upgrading, 24/7 ops and security, build systems, failovers, and more. Stay focused on building great data-driven applications.",
    tags: [
      {
        name: "redux",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "reactjs",
        color: "orange-text-gradient",
      },
      {
        name: "expressjs",
        color: "blue-text-gradient",
      },
    ],
    image: "/assets/projects/basic.png",
    source_code_link: "https://github.com/BrunoCat118/MERN-Stack-APP",
    deployed_link: "https://www.heroku.com/",
  },
  {
    name: "QuickEdit: AI-Powered Image & Video Editor",
    description:
      "QuickEdit is an AI-powered online image and video editor built using the Cloudinary AI API. It offers robust features for both images and videos, with user-friendly authentication and a tiered credit system. Enhance your media editing experience with cutting-edge AI tools!",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "shadcn",
        color: "orange-text-gradient",
      },
      {
        name: "cloudinary",
        color: "yellow-text-gradient",
      },
    ],
    image:
      "https://res.cloudinary.com/dqiqi75hm/image/upload/v1734187202/quickedit/dp6y8s8dstqfpq7svmj5.png",
    source_code_link: "https://github.com/BrunoCat118/Quick_Edit",
    deployed_link: "https://quick-edit-app.vercel.app",
  },
  {
    name: "Unity-Game-Framework",
    description:
      "This is literally a game framework, based on Unity game engine. It encapsulates commonly used game modules during development, and, to a large degree, standardises the process, enhances the development speed and ensures the product quality.",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "game-development",
        color: "green-text-gradient",
      },
      {
        name: "unity3D",
        color: "yellow-text-gradient",
      },
      {
        name: "game-frameworks",
        color: "pink-text-gradient",
      },
      {
        name: "game-modules",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/projects/unitygame.png",
    source_code_link: "https://github.com/BrunoCat118/Unity_Game_Framwork",
    deployed_link: "http://gameframework.cn/",
  },
  {
    name: "Angular-Fire",
    description:
      "AngularFire is a library for Firebase and Angular. It is a wrapper around the Firebase SDK that makes it easier to use Firebase with Angular.AngularFire smooths over the rough edges an Angular developer might encounter when implementing the framework-agnostic Firebase JS SDK & aims to provide a more natural developer experience by conforming to Angular conventions.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "rxjs",
        color: "yellow-text-gradient",
      },
      {
        name: "ngrx",
        color: "pink-text-gradient",
      },
      {
        name: "realtime-database",
        color: "orange-text-gradient",
      },
      {
        name: "angularfire",
        color: "blue-text-gradient",
      },
      {
        name: "cloud-firestore",
        color: "green-text-gradient",
      },
      {
        name: "cloud-functions",
        color: "yellow-text-gradient",
      },
      {
        name: "notifications",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/projects/angular.png",
    source_code_link: "https://github.com/BrunoCat118/Angular_Fire",
    deployed_link: "https://firebaseopensource.com/projects/angular/angularfire2",
  },
  {
    name: "FigPro",
    description:
      "FigPro is a web-based collaborative design tool similar to Figma, built using Next.js, TypeScript, Tailwind CSS, and LiveBlocks API, Fabric.js. With FigPro, teams can seamlessly collaborate on designing interfaces in real-time with a plethora of features.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "fabricjs",
        color: "orange-text-gradient",
      },
      {
        name: "liveblocks",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/fig-pro.png",
    source_code_link: "https://github.com/BrunoCat118/MyFigPro",
    deployed_link: "https://fig-pro-github.vercel.app",
  },
  {
    name: "PHP-swagger",
    description:
      "Generate interactive OpenAPI documentation for your RESTful API using PHP attributes (preferred) or doctrine annotations (requires additional doctrine/annotations library).Annotations are deprecated and may be removed in a future release of swagger- php.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/swagger.png",
    source_code_link: "https://github.com/BrunoCat118/PHP-swagger",
    deployed_link: "https://zircote.github.io/swagger-php/",
  },
  {
    name: "Laradock",
    description:
      "Full PHP development environment for Docker. A Docker setup that lets you run a full PHP development environment in seconds.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "laravel",
        color: "pink-text-gradient",
      },
      {
        name: "docker",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/projects/laradock.png",
    source_code_link: "https://github.com/BrunoCat118/laradock",
    deployed_link: "https://laradock.io/",
  },
  {
    name: "SpreedSheet",
    description:
      "PhpSpreadsheet is a library written in pure PHP and offers a set of classes that allow you to read and write various spreadsheet file formats such as Excel and LibreOffice Calc. A pure PHP library for reading and writing spreadsheet files",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "office",
        color: "pink-text-gradient",
      },
      {
        name: "excel",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/projects/spreedsheet.png",
    source_code_link: "https://github.com/BrunoCat118/PHP-Spreed-Sheet",
    deployed_link: "https://phpspreadsheet.readthedocs.io/en/latest/",
  },
  {
    name: "Facility Management System",
    description:
      "The Facility Management System is a comprehensive management solution developed using the MERN (MongoDB, Express.js, React, Node.js) stack. It allows users to book time slots in facilities and provides role-based access control for various functionalities.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      },
      {
        name: "tanstack/react-query",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/facility-manager.png",
    source_code_link:
      "https://github.com/BrunoCat118/System",
    deployed_link:
      "https://github.com/BrunoCat118/System",
  },
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/BrunoCat118",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/dargonking118",
  },
  {
    id: "x",
    icon: <XIcon />,
    link: "https://twitter.com/BrunoCat118",
  },
  
];

const heroTexts = [
  "Software Engineer",
  500,
  "Full-Stack developer",
  500,
  "Frontend developer",
  500,
  "Backend developer",
  500,
  "Problem solver",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
