import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { PlaceHolderImages } from "./placeholder-images";

const avatar = PlaceHolderImages.find(p => p.id === 'avatar');
const project1 = PlaceHolderImages.find(p => p.id === 'project-1');
const project2 = PlaceHolderImages.find(p => p.id === 'project-2');
const project3 = PlaceHolderImages.find(p => p.id === 'project-3');
const project4 = PlaceHolderImages.find(p => p.id === 'project-4');

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const PROFILE_DATA = {
  name: 'Alex Doe',
  headline: 'Senior Software Engineer & Creative Technologist',
  bio: "I'm a passionate software engineer with a knack for building beautiful, functional, and accessible digital experiences. With over a decade in the industry, I specialize in full-stack development, with a deep focus on modern frontend technologies.",
  avatar: avatar!,
  social: [
    { name: 'GitHub', url: '#', icon: Github },
    { name: 'LinkedIn', url: '#', icon: Linkedin },
    { name: 'Twitter', url: '#', icon: Twitter },
    { name: 'Email', url: 'mailto:alex.doe@email.com', icon: Mail },
  ],
};

export const SKILLS_DATA = {
  title: "Skills & Expertise",
  description: "I have experience with a wide range of technologies and tools. Here are some of my key skills.",
  skills: [
    'React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Node.js', 
    'Python', 'GraphQL', 'REST APIs', 'PostgreSQL', 'Docker', 'Kubernetes',
    'Google Cloud', 'Firebase', 'Tailwind CSS', 'Figma'
  ]
};

export const EXPERIENCE_DATA = {
  title: "Professional Experience",
  description: "A timeline of my career, highlighting my roles and accomplishments.",
  experiences: [
    {
      role: 'Senior Software Engineer',
      company: 'Innovate Inc.',
      period: '2020 - Present',
      description: 'Led the development of a new design system and component library, improving development velocity by 30%. Architected and built a new serverless backend for the flagship product, enhancing scalability and reducing costs.'
    },
    {
      role: 'Software Engineer',
      company: 'Tech Solutions',
      period: '2016 - 2020',
      description: 'Developed and maintained a large-scale e-commerce platform using React and Node.js. Collaborated with cross-functional teams to deliver high-quality features and improve user experience.'
    },
    {
      role: 'Junior Developer',
      company: 'CodeCrafters',
      period: '2014 - 2016',
      description: 'Assisted in the development of various client websites and internal tools. Gained foundational experience in web development, version control with Git, and agile methodologies.'
    }
  ]
};

export const PROJECTS_DATA = {
  title: "Featured Projects",
  description: "A selection of projects that showcase my skills and passion for building.",
  projects: [
    {
      title: 'Project Phoenix',
      description: 'A comprehensive dashboard for data analysis, built with Next.js and a custom charting library. Features real-time data streaming and advanced filtering capabilities.',
      image: project1!,
      tags: ['Next.js', 'TypeScript', 'Data Viz'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'AI Content Generator',
      description: 'A platform that leverages generative AI to create marketing copy and social media posts. Built using Python, FastAPI, and React, with a focus on a simple and intuitive user experience.',
      image: project2!,
      tags: ['React', 'Python', 'AI/ML'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'ConnectSphere Mobile',
      description: 'A cross-platform social networking app developed with React Native. It includes features like instant messaging, a dynamic news feed, and profile customization.',
      image: project3!,
      tags: ['React Native', 'Firebase', 'Mobile'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'E-commerce Storefront',
      description: 'A fully-featured e-commerce site with a custom CMS for product management. Optimized for performance and SEO, resulting in a 20% increase in conversion rates.',
      image: project4!,
      tags: ['Next.js', 'GraphQL', 'E-commerce'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ]
};

export const CONTACT_DATA = {
  title: "Get in Touch",
  description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Feel free to reach out."
};
