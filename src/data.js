import { Briefcase, GraduationCap, Code2, User, Mail, FolderOpen } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const navigation = [
  { name: 'About', id: 'about', icon: User },
  { name: 'Experience', id: 'experience', icon: Briefcase },
  { name: 'Projects', id: 'projects', icon: FolderOpen },
  { name: 'Education', id: 'education', icon: GraduationCap },
  { name: 'Skills', id: 'skills', icon: Code2 },
  { name: 'Contact', id: 'contact', icon: Mail },
];

export const socials = [
  { name: 'GitHub', icon: FaGithub, link: 'https://github.com/xaloftal' },
  { name: 'LinkedIn', icon: FaLinkedin, link: 'https://linkedin.com/in/dianacdinis/' },
  { name: 'Email', icon: FaEnvelope, link: 'mailto:dianaacdinis@gmail.com' },
];

export const experience = [
  {
    id: 1,
    title: 'Student Researcher',
    company: 'INESC TEC',
    period: 'Jul. 2026 - Jul. 2026',
    location: 'Porto, Portugal',
    description: [
      'Theme: Towards a National Sleep Data Repository: Design and Feasibility of a Standardised Registry Using REDCap.',
      'Developed the REDCap project and schema and created a website to collect data from patients and professionals, based on the schema and metadata, reducing manual labor from researchers.',
    ],
    type: 'Summer Internship',
  },
  {
    id: 2,
    title: 'Backend / Database Developer',
    company: 'Coreflux Portugal Lda / AI Square',
    period: 'Oct. 2024 - Jun. 2025',
    location: 'Porto, Portugal',
    description: [
      'Developed the database for the SkyRise project (solar park construction management platform), supporting the platform and the digital twin, with business logic built in complex queries.',
      'Helped develop the Skyrise platform API and frontend components.',
      'Developed the Coreflux product (IoT Platform), specifically developing and maintaining connectors, including a product launch (Slack connector).',
      'Development of internal tools for tests and configuration conversions.',
    ],
    type: 'Professional Internship',
  },
  {
    id: 3,
    title: 'Fullstack Developer',
    company: 'AlmeidasTextile By StarBellaTex',
    period: 'Jul. 2024 - Sep. 2024',
    location: 'Guimaraes, Portugal',
    description: [
      'End-to-end development of a document management application.',
    ],
    type: 'Summer Internship',
  },
  {
    id: 4,
    title: 'Data Protection Officer',
    company: 'Sincronideia Lda',
    period: 'Feb. 2024 - May 2024',
    location: 'Guimaraes, Portugal',
    description: [
      'Analysis and management of risks.',
      'Security plan and safety information policy.',
      'Resources to raise user awareness of cyber security threats and training.',
    ],
    type: 'Curricular Internship',
  },
];

export const education = [
  {
    id: 1,
    degree: 'Master\'s - Informatics Engineering',
    institution: 'University of Minho',
    period: 'Sep. 2025 - Jul. 2027',
    location: 'Braga, Portugal',
    gpa: '16/20',
    note: 'Specializing in Applications Engineering and Knowledge Engineering.',
  },
  {
    id: 2,
    degree: 'Bachelor\'s - Medical Informatics Engineering',
    institution: 'Polytechnic University of Cavado and Ave',
    period: 'Oct. 2021 - Jul. 2024',
    location: 'Barcelos, Portugal',
    gpa: '15/20',
    note: 'Thesis: Information Security Management System - Health Context. Development of an information security management system for a social sector medical clinic, including a security plan, a security policy, development of a risk management methodology, and risk assessment.',
  },
];

export const skills = {
  'Languages': [
    '.NET C#', 'Python', 'TypeScript', 'JavaScript', 'Java', 'C',
  ],
  'Frameworks & Libraries': [
    'React', 'Vue.js', 'Node.js', 'Streamlit', 'Quasar',
  ],
  'Tools & Platforms': [
    'PostgreSQL', 'TimescaleDB', 'MySQL', 'MongoDB', 'Redis',
    'Docker', 'Ansible', 'Git', 'CI/CD', 'PGAdmin', 'DbVisualizer',
    'Prefect', 'Visual Paradigm', 'Postman', 'Neo4j', 'Qodrant',
    'MQTT', 'Lazygit', 'Github Copilot', 'REDCap',
  ],
  'Concepts': [
    'Database Design', 'API Development', 'IoT Platforms', 'Digital Twin',
    'Information Security', 'Data Protection (GDPR)', 'Knowledge Engineering',
    'Full-Stack Development', 'Agile',
  ],
};

export const projects = [
  {
    id: 1,
    title: 'Ekonoomix',
    class: 'Knowledge Engineering',
    description: 'Investment dashboard with an agentic LLM with function calling integrated. Developed the relational schema, the stored procedures and functions in the PostgreSQL database, and the welcome and login pages.',
    link: 'https://github.com/xaloftal/ekonoomix',
  },
  {
    id: 2,
    title: 'CatchIt',
    class: 'Applications Engineering',
    description: 'Mobile application for ticketing in multi modal public transportation in Porto. Developed the front-end, the data injection tool with real data, and designed the integration with OTP2 for real time path calculations.',
    link: 'https://github.com/xaloftal/catchit',
  },
];
