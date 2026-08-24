// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];

export const experiences = [];

export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "AMC Engineering College, Bengaluru",
    date: "Sept 2024 – Present",
    grade: "8.0 / 10.0 CGPA",
    desc: "Currently pursuing a Bachelor of Engineering in Computer Science Engineering at AMC Engineering College, Bengaluru. Gaining a strong foundation in programming, software development, data structures, algorithms, and database management systems. Actively working on full-stack web development projects and integrating machine learning models into real-world applications.",
    degree: "B.E., Computer Science Engineering",
  },
];

export const projects = [
  {
    id: 0,
    title: "Real-Time Accident Reporting System (RoadSOS)",
    description:
      "A full-stack web app enabling real-time accident reporting with live data updates. Designed and implemented RESTful APIs for efficient backend communication and structured data handling. Built a de-duplication mechanism using vehicle registration numbers and geolocation data to eliminate duplicate incident entries. Optimized backend processing pipelines, improving data accuracy and reporting efficiency.",
    image: null,
    tags: ["React.js", "Node.js", "Express.js", "Supabase"],
    github: "https://github.com/janasouvik/roadsos",
    webapp: "https://roadsos-exy4-nine.vercel.app/",
  },
  {
    id: 1,
    title: "PlantaeWiki – Plant Care & Smart Identification",
    description:
      "A full-stack web app providing plant care recommendations and detailed plant information. Integrated ML models using Python and FastAPI for image-based plant disease detection. Developed an automated plant identification system using image processing for species recognition. Applied predictive data processing to generate growth insights, improving user engagement.",
    image: null,
    tags: ["React.js", "Node.js", "Express.js", "Supabase", "Python", "FastAPI"],
    github: "https://github.com/janasouvik/plantaewiki-final",
    webapp: "https://plantaewiki-final.vercel.app/",
  },
  {
    id: 2,
    title: "UnbiasedAI – Bias Detection & Fairness Platform",
    description:
      "A platform focused on detecting and reducing AI bias, promoting fairness across machine learning models. Built as part of the Google Solution Challenge, UnbiasedAI analyzes outputs for bias patterns and provides actionable fairness metrics to developers and researchers.",
    image: null,
    tags: ["React.js", "Node.js", "Python", "Machine Learning", "AI"],
    github: "https://github.com/janasouvik/gsc-hackathon",
    webapp: "https://gsc-hackathon.vercel.app/",
  },
  {
    id: 3,
    title: "EduBridge AI – Multilingual AI Tutoring",
    description:
      "A multilingual AI-powered tutoring platform with adaptive practice and scholarship matching. Provides personalized learning paths, interactive exercises, and connects students with scholarship opportunities using AI-driven recommendations.",
    image: null,
    tags: ["React.js", "Node.js", "AI", "Multilingual", "Education"],
    github: "https://github.com/janasouvik/edubridge-ai",
    webapp: "https://frontend-two-kappa-qjz70mm3fo.vercel.app/",
  },
];