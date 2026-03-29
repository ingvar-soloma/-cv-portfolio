import React, { useState, useEffect } from 'react';
import {
  Printer,
  Mail,
  MapPin,
  User,
  Brain,
  Network,
  Box,
  MessageSquare,
  Keyboard,
  Briefcase,
  Code,
  GraduationCap,
  Languages,
  Send,
  Rocket,
  ExternalLink,
  ChevronRight,
  Settings,
  Eye,
  EyeOff,
  Sun,
  Moon,
  ChevronDown,
  Globe
} from 'lucide-react';
// Using inline paths for Brand Icons to ensure zero-bundle impact and perfect Tree Shaking.
const siLinkedin = {
  title: 'LinkedIn',
  path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
};

const siGithub = {
  title: 'GitHub',
  path: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
};
import { initAnalytics } from './analytics';
import ScrollBicyclist from './components/ScrollBicyclist';

// ==========================================
// ДАНІ CV
// ==========================================
const cvData = {
  header: {
    name: "Ihor Solomianyi",
    title: "Architect & Software Engineer",
    location: "Gdansk, Poland",
    email: "ingvar.soloma@gmail.com",
    linkedin: "linkedin.com/in/ingvar-soloma",
    github: "github.com/ingvar-soloma",
    logo: "/cv_logo.png",
    favicon: "/favicon.svg",
    blog: "ingvarsoloma.dev",
    badges: [
      { text: "B2B / IE", color: "indigo" },
      { text: "Rate: $40/hr", color: "emerald" },
      { text: "6 Years Exp.", color: "blue" }
    ]
  },
  summary: [
    "Senior Full-Stack Developer (Laravel/Vue.js) with over 6 years of commercial experience in architecting scalable ecosystems and integrating advanced AI solutions. Expert in developing complex LLM pipelines and RAG systems to automate critical business processes and significantly increase operational efficiency.",
    "A champion of technical excellence: actively leveraging SOLID, TDD, and Clean Architecture to resolve legacy technical debt and optimize high-load system performance. Business-oriented and driven to solve complex architectural challenges."
  ],
  cognitiveProfile: [
    {
      title: "Systemic Constructor",
      icon: Network,
      desc: "I perceive the product not as a set of standalone objects, but as a network of interconnections. I seamlessly integrate new solutions without disrupting system integrity. Hence my passion for Docker, DOT diagrams, and safe refactoring."
    },
    {
      title: "Aphantasic Modeling",
      icon: Box,
      desc: "The absence of visual imagination frees up massive memory resources for abstractions. I work in a \"clean space\" of logic, providing a critical advantage in complex Backend development and data processing for LLMs."
    },
    {
      title: "Verbal-Logical Focus",
      icon: MessageSquare,
      desc: "My primary tool is internal dialogue and operating with assertions. I \"articulate\" code as a sequence of conditions, making me completely resilient to visual noise and strictly focused on the core algorithm."
    },
    {
      title: "Kinesthetic Feedback",
      icon: Keyboard,
      desc: "To validate ideas, I need to \"type with my hands\", configure the environment, and see results in real-time. This physical interaction with code guarantees a rapid transition from hypothesis to a working feature."
    }
  ],
  experience: [
    {
      role: "Senior Full-Stack Developer / Independent Contractor",
      company: "SEOProfy",
      location: "Remote (B2B Contract)",
      date: "August 2025 - Present",
      achievements: [
        { bold: "LLM Pipelines & AI Integration:", text: "Engineered a complex 6-step content analysis pipeline using LLMs to evaluate competitor pages and generate automated SEO recommendations." },
        { bold: "AI Evangelism & Mentorship:", text: "Conducted internal webinars on leveraging Cognitive Profiles for advanced Prompt Engineering, training the team to extract high-quality, context-aware architectural solutions from LLMs." },
        { bold: "Frontend Architecture & AI-Optimization:", text: "Initiated a paradigm shift in the Vue.js architecture. Decoupled API calls from UI components into a centralized State Management system and enforced a unified UI theme. This not only accelerated frontend development but created a highly predictable codebase optimized for automated LLM code generation." },
        { bold: "System Migration:", text: "Led the migration from Webpack to Vite, resolving critical legacy bugs and improving frontend build performance by 40%.", highlight: "40%" },
        { bold: "Data Processing & Tech Debt:", text: "Developed a keyword clustering system for large-scale semantic data. Configured Docker environments and documented architectural decisions, significantly reducing long-term technical debt." }
      ]
    },
    {
      role: "Independent Software Engineer",
      company: "Self-Employed / Freelance",
      location: "Iceland (Remote)",
      date: "April 2024 - August 2025",
      achievements: [
        { bold: "EdTech Platform Architecture:", text: "Designed and developed a custom Language Learning application with a spaced repetition system (SRS). Engineered dynamic exercise generation algorithms based on user proficiency and category selection." },
        { bold: "DOM Manipulation & UX (EdTech Platform):", text: "Implemented complex DOM control logic to gracefully integrate the platform with Google Chrome's native translation features, preventing the translation of core educational content while allowing contextual hints." },
        { bold: "Cross-Platform Mobile App (Ionic):", text: "Built a geolocation tracking application using Ionic and Vue.js with Telegram API integration. Researched and implemented architectural workarounds to maintain background location broadcasting." },
        { bold: "Third-Party Integrations:", text: "Successfully integrated OAuth (Google, Telegram) and external translation APIs into independent project ecosystems." }
      ]
    },
    {
      role: "Full-Stack Developer",
      company: "Nev Gen",
      location: "Remote",
      date: "January 2022 - March 2024",
      achievements: [
        { bold: "FinTech Integration & Compliance:", text: "Engineered a secure integration with the Binance API to process complex trading histories and automate the generation of US tax compliance reports." },
        { bold: "Bug Reduction (75%):", text: "Implemented rigorous testing (TDD) and code refactoring practices, decreasing new bug reports by 75%.", highlight: "75%" },
        { bold: "Architectural Consulting:", text: "Guided the development team on scalable solutions and conducted code reviews to ensure adherence to SOLID principles." },
        { bold: "Platform Maintenance & APIs:", text: "Developed and maintained multiple Laravel/Vue.js platforms (CRM, Custom Portals), designing and integrating complex REST APIs." },
        { bold: "Client Success:", text: "Proactively identified opportunities for new features, pitched them to clients, and led their full-cycle development." }
      ]
    },
    {
      role: "Backend Developer",
      company: "AniArt",
      location: "Kyiv, Ukraine",
      date: "January 2021 - January 2022",
      achievements: [
        { bold: "HR Tech Automation (360° Review):", text: "Architected and developed a comprehensive 360-degree performance evaluation system from scratch. Replaced manual Excel-based HR calculations with a fully automated, transparent digital pipeline." },
        { bold: "End-to-End Ownership & Integration:", text: "Acted as the sole developer driving the project lifecycle. Successfully integrated the complex multi-user evaluation module directly into the company's core CRM ecosystem." },
        { bold: "Legacy Migration:", text: "Successfully migrated legacy PHP systems to Laravel 8, establishing a more maintainable architecture and managing sprint planning." }
      ]
    },
    {
      role: "Software Developer",
      company: "TCM Group Ukraine",
      location: "Kyiv, Ukraine",
      date: "January 2019 - January 2021",
      achievements: [
        { bold: "Complex Communication Pipeline:", text: "Proactively architected and replaced an inefficient low-code tool with a custom, scalable notification matrix. Managed a 9-step, 9-language, multi-channel (Email, SMS, Voice) automation system, reducing template update times from 1 month to under 1 week." },
        { bold: "InfoSec & Compliance:", text: "Championed internal security protocols within a highly sensitive legal/debt-collection environment. Conducted regular social engineering audits and staff training to mitigate injection attacks and human-factor vulnerabilities." },
        { bold: "VoIP/CRM Integration:", text: "Engineered a seamless one-click ticketing integration within the CRM to automatically report, log, and track IP telephony anomalies directly with the external VoIP provider, significantly optimizing issue resolution." },
        { bold: "Support & Mentorship:", text: "Supported core PHP projects and collaborated with the team to enforce better code structure and Git discipline." }
      ]
    }
  ],
  projects: [
    {
      title: "NP42 | Neuro Profile",
      desc: "Interactive tool mapping engineering cognitive styles. Integrating a RAG pipeline to deliver personalized, context-aware workflow recommendations. Utilized within the team to optimize communication and task delegation based on individual thinking patterns.",
      url: "https://np42.dev/",
      tags: ["AI", "React", "RAG Pipelines", "Team Analytics"]
    },
    {
      title: "EdTech Spaced Repetition Platform",
      desc: "Architected a custom language learning ecosystem with a dynamic Spaced Repetition System (SRS) and algorithmic difficulty scaling. Implemented advanced DOM manipulation to securely control Google Chrome's native translation behavior, preserving core educational content while enabling contextual UX hints. Integrated Google/Telegram OAuth and third-party translation APIs.",
      tags: ["Vue.js", "Laravel", "SRS Algorithms", "DOM API", "OAuth"]
    },
    {
      title: "Geolocation Tracking App",
      desc: "Developed a cross-platform mobile application for real-time geolocation sharing. Engineered architectural workarounds in Ionic/Vue.js to ensure persistent background location broadcasting and seamless Telegram API integration.",
      tags: ["Ionic", "Vue.js", "Telegram API", "Geolocation", "Background Tasks"]
    }
  ],
  skills: {
    "Backend Engineering": ["PHP 8+", "Laravel 10+", "Lumen", "Python", "REST API", "SOLID / TDD"],
    "Data & AI": ["LLM Integrations", "RAG Pipelines", "Prompt Engineering", "MySQL", "Redis"],
    "Frontend": ["Vue.js 3", "TypeScript", "JavaScript (ES6+)", "Vite", "Tailwind CSS"],
    "DevOps & Tools": ["Docker / Compose", "Git / CI/CD", "Linux Admin"]
  },
  education: {
    degree: "B.Sc. in Software Engineering",
    university: "National Aviation University (NAU)",
    date: "2018 - 2023 • Kyiv, Ukraine",
    desc: "Focus on software architecture and engineering principles."
  },
  languages: [
    { name: "English", level: "Upper-Intermediate (B2)" },
    { name: "Ukrainian", level: "Native" },
    { name: "Russian", level: "Native" }
  ]
};

// ==========================================
// BRAND ICONS HELPER
// ==========================================
const BrandIcon = ({ icon, size = 24, className = "" }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    fill="currentColor"
    width={size}
    height={size}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{icon.title}</title>
    <path d={icon.path} />
  </svg>
);


export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [isBicyclistVisible, setIsBicyclistVisible] = useState(() => {
    const saved = localStorage.getItem('bicyclist-visible');
    return saved === null ? true : saved === 'true';
  });

  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      document.documentElement.style.colorScheme = 'light';
    }
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem('bicyclist-visible', String(isBicyclistVisible));
  }, [isBicyclistVisible]);

  const getBadgeColors = (colorName) => {
    const colors = {
      indigo: "bg-indigo-50/50 text-indigo-700 border-indigo-100 dark:bg-indigo-500/10 dark:text-indigo-400 dark:border-indigo-500/30",
      emerald: "bg-emerald-50/50 text-emerald-700 border-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30",
      blue: "bg-blue-50/50 text-blue-700 border-blue-100 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/30",
      default: "bg-gray-50/50 text-gray-700 border-gray-200 dark:bg-slate-800 dark:text-gray-400 dark:border-slate-700"
    };
    return colors[colorName] || colors.default;
  };

  return (
    <div className="min-h-screen w-full bg-[#fafafa] dark:bg-slate-900 text-gray-900 dark:text-gray-100 font-sans antialiased selection:bg-indigo-600 selection:text-white scroll-smooth overflow-x-hidden transition-colors duration-500">
      <ScrollBicyclist isVisible={isBicyclistVisible} />


      {/* Background patterns */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden print:hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-slate-200/40 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100/30 dark:bg-slate-800/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-slate-200/20 dark:bg-indigo-800/10 rounded-full blur-3xl opacity-40"></div>
      </div>

      <nav className="fixed w-full bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-slate-800/50 z-50 print:hidden transition-colors duration-500">

        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" aria-label="Home" className="flex items-center gap-3 transition-transform hover:scale-105 active:scale-95" data-track="nav-home">
            {/* Explicit width/height attributes prevent nav logo from causing CLS */}
            <img src={cvData.header.favicon} alt="Ihor Solomianyi - Senior Software Engineer Logo" width="32" height="32" className="h-8 w-8 aspect-square object-cover rounded shadow-sm border border-gray-100 dark:border-slate-800" />
            <span className="font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-100 dark:to-gray-400 border-l border-gray-300 dark:border-gray-700 pl-3">IS.dev</span>
          </a>
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="relative group/settings">
              <button
                onClick={() => setShowSettings(!showSettings)}
                aria-label="Open Settings"
                className={`flex items-center gap-1 p-2 rounded-xl transition-all ${showSettings ? 'bg-gray-100 dark:bg-slate-800 text-indigo-600' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-800/50'}`}
              >
                <Settings size={20} className={showSettings ? 'rotate-90 transition-transform' : ''} />
                <ChevronDown size={14} className={`hidden sm:block transition-transform ${showSettings ? 'rotate-180' : ''}`} />
              </button>

              {showSettings && (
                <>
                  <div className="fixed inset-0 z-0" onClick={() => setShowSettings(false)}></div>
                  <div className="absolute top-12 right-0 w-64 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-800 p-2 z-10 animate-in fade-in zoom-in-95 duration-200">
                    <div className="p-3">
                      <h4 className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3 px-2">Preferences</h4>

                      <div className="space-y-1">
                        <button
                          onClick={() => setIsDarkMode(!isDarkMode)}
                          className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-gray-100 dark:bg-slate-800 rounded-lg group-hover:bg-white dark:group-hover:bg-slate-700 transition-colors">
                              {isDarkMode ? <Moon size={18} className="text-blue-400" /> : <Sun size={18} className="text-amber-500" />}
                            </div>
                            <span className="text-sm font-bold text-gray-700 dark:text-gray-200">Dark Mode</span>
                          </div>
                          <div className={`w-10 h-6 rounded-full p-1 transition-colors ${isDarkMode ? 'bg-indigo-600' : 'bg-gray-200 dark:bg-slate-700'}`}>
                            <div className={`w-4 h-4 bg-white rounded-full transition-transform ${isDarkMode ? 'translate-x-4' : 'translate-x-0'}`}></div>
                          </div>
                        </button>

                        <button
                          onClick={() => setIsBicyclistVisible(!isBicyclistVisible)}
                          className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-gray-100 dark:bg-slate-800 rounded-lg group-hover:bg-white dark:group-hover:bg-slate-700 transition-colors">
                              {isBicyclistVisible ? <Eye size={18} className="text-emerald-500" /> : <EyeOff size={18} className="text-gray-400" />}
                            </div>
                            <span className="text-sm font-bold text-gray-700 dark:text-gray-200">Bicyclist</span>
                          </div>
                          <div className={`w-10 h-6 rounded-full p-1 transition-colors ${isBicyclistVisible ? 'bg-indigo-600' : 'bg-gray-200 dark:bg-slate-700'}`}>
                            <div className={`w-4 h-4 bg-white rounded-full transition-transform ${isBicyclistVisible ? 'translate-x-4' : 'translate-x-0'}`}></div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            <a
              href={`https://${cvData.header.blog}`}
              target="_blank"
              rel="noopener"
              className="hidden sm:flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all font-inter"
              data-track="nav-blog"
            >
              <Globe size={18} />
              <span>Blog</span>
            </a>
            <a
              href="#projects"
              className="hidden sm:flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all font-inter"
              data-track="nav-projects"
            >
              <Rocket size={18} />
              <span>Projects</span>
            </a>
            <button
              onClick={() => window.print()}
              aria-label="Print to PDF"
              className="flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
              data-track="nav-print"
            >
              <Printer size={18} />
              <span className="hidden sm:inline">PDF</span>
            </button>
            <a
              href="#contact"
              className="group flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-indigo-500/20 transition-all hover:translate-y-[-2px] active:translate-y-0"
              data-track="nav-contact"
            >
              <Mail size={18} className="group-hover:rotate-12 transition-transform" />
              <span className="hidden xs:inline">Contact</span>
            </a>
          </div>
        </div>
      </nav>

      <main className="relative pt-20 pb-16 max-w-6xl mx-auto px-6 print:pt-0 print:pb-0">

        {/* Header Section */}
        <header id="hero" data-track="hero" className="mb-20 print:mb-6 flex flex-col items-center text-center md:text-left md:items-start md:flex-row justify-between gap-10 print:gap-4 scroll-mt-32">
          <div className="flex-1 space-y-6 print:space-y-2">
            <div className="inline-flex gap-2 p-1 px-2 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-full shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-1000 print:hidden">
              {cvData.header.badges.map((badge, index) => (
                <span
                  key={index}
                  className={`px-3 py-0.5 rounded-full text-[10px] uppercase font-black tracking-widest border ${getBadgeColors(badge.color)}`}
                >
                  {badge.text}
                </span>
              ))}
            </div>

            <div className="space-y-4 print:space-y-1">
              {/* <div className="h-1 w-20 bg-indigo-600 rounded-full print:hidden"></div> */}
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white leading-tight tracking-tight print:text-3xl">
              Ihor <span className="text-indigo-600 dark:text-indigo-400">Solomianyi</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-medium max-w-2xl leading-relaxed print:text-base print:max-w-none">
              Design-driven <span className="text-emerald-600 dark:text-emerald-400 font-bold">Architect & Software Engineer</span> specializing in scalable AI ecosystems and high-load backend architecture.
            </h2>

            <address className="flex flex-wrap justify-center md:justify-start gap-y-4 gap-x-8 print:gap-x-4 print:gap-y-1 text-gray-500 dark:text-gray-400 not-italic font-medium text-sm print:text-xs">
              <div className="flex items-center gap-2.5 group">
                <div className="p-2 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-gray-100 dark:border-slate-800 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors print:p-0 print:border-none"><MapPin size={16} className="print:w-3" /></div>
                {cvData.header.location}
              </div>
              <div className="flex items-center gap-2.5 group" data-track="contact-email">
                <div className="p-2 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-gray-100 dark:border-slate-800 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors print:p-0 print:border-none"><Mail size={16} className="print:w-3" /></div>
                <a href={`mailto:${cvData.header.email}`} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{cvData.header.email}</a>
              </div>
              <div className="flex items-center gap-2.5 group" data-track="contact-linkedin">
                <div className="p-2 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-gray-100 dark:border-slate-800 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors print:p-0 print:border-none"><BrandIcon icon={siLinkedin} size={16} className="print:w-3" /></div>
                <a href={`https://${cvData.header.linkedin}`} target="_blank" rel="noopener" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{cvData.header.linkedin}</a>
              </div>
              <div className="flex items-center gap-2.5 group" data-track="contact-github">
                <div className="p-2 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-gray-100 dark:border-slate-800 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors print:p-0 print:border-none"><BrandIcon icon={siGithub} size={16} className="print:w-3" /></div>
                <a href={`https://${cvData.header.github}`} target="_blank" rel="noopener" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{cvData.header.github}</a>
              </div>
              <div className="flex items-center gap-2.5 group" data-track="contact-blog">
                <div className="p-2 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-gray-100 dark:border-slate-800 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors print:p-0 print:border-none"><Globe size={16} className="print:w-3" /></div>
                <a href={`https://${cvData.header.blog}`} target="_blank" rel="noopener" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{cvData.header.blog}</a>
              </div>
            </address>
          </div>

          <div className="hidden md:block w-64 h-64 print:w-24 print:h-24 relative group">
            {/* Aesthetic Rotation Background */}
            <div className="absolute inset-0 bg-indigo-600/5 dark:bg-indigo-500/10 rounded-[3rem] rotate-3 group-hover:rotate-6 transition-transform duration-700 border border-indigo-100 dark:border-indigo-900/30 print:hidden"></div>
            
            <div className="relative z-10 w-full h-full rounded-[3rem] border-4 border-white dark:border-slate-800 shadow-2xl overflow-hidden transition-all duration-500 group-hover:translate-y-[-8px] print:border-none print:shadow-none">
              <img src={cvData.header.logo} alt="Ihor Solomianyi" width="256" height="256" fetchpriority="high" loading="eager" className="w-full h-full aspect-square object-cover" />
            </div>
          </div>
        </header>

        {/* Professional Summary */}
        <section id="summary" data-track="summary" className="mb-12 print:mb-6">
          <div className="flex items-center gap-4 mb-8 print:mb-2">
            <div className="h-[2px] w-12 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
            <h3 className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-widest flex items-center gap-3 print:text-lg">
              <User className="text-indigo-600 dark:text-indigo-400" size={24} /> Summary
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 print:gap-4 bg-white dark:bg-slate-900/50 p-10 print:p-4 rounded-3xl shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100/50 dark:border-slate-800 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 dark:bg-indigo-950/30 rounded-bl-[100%] z-0 pointer-events-none group-hover:scale-110 transition-transform duration-700 print:hidden"></div>
            {cvData.summary.map((paragraph, idx) => (
              <p key={idx} className="relative z-10 leading-relaxed text-gray-600 dark:text-gray-300 font-medium text-lg print:text-sm">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Cognitive Profile */}
        <section id="cognitive" data-track="cognitive" className="mb-12 print:mb-6">
          <div className="flex items-center gap-4 mb-8 print:mb-4">
            <div className="h-[2px] w-12 bg-emerald-600 dark:bg-emerald-400 rounded-full"></div>
            <h3 className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-widest flex items-center gap-3 print:text-lg">
              <Brain className="text-emerald-600 dark:text-emerald-400" size={24} /> Philosophical Roots
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 print:grid-cols-2 gap-6 print:gap-2">
            {cvData.cognitiveProfile.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="bg-white dark:bg-slate-900 p-8 print:p-3 rounded-3xl shadow-lg border border-gray-50 dark:border-slate-800 hover:border-emerald-200 dark:hover:border-emerald-900/50 hover:shadow-emerald-500/5 transition-all duration-300 group">
                  <div className="mb-6 print:mb-2 p-4 print:p-1 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 rounded-2xl w-fit group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-500 ring-8 ring-emerald-50/50 dark:ring-emerald-900/20 print:ring-2">
                    <IconComponent size={24} className="print:w-4 print:h-4" />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3 text-lg print:text-sm print:mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium print:text-[10px]">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Toolkit (Skills) - Moved here from sidebar */}
        <section id="skills" data-track="skills" className="mb-12 print:mb-6">
          <div className="flex items-center gap-4 mb-8 print:mb-4">
            <div className="h-[2px] w-12 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
            <h3 className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-widest flex items-center gap-3 print:text-lg">
              <Code className="text-indigo-600 dark:text-indigo-400" size={24} /> Toolkit
            </h3>
          </div>
          <div className="bg-white dark:bg-slate-900 p-10 print:p-4 rounded-[2.5rem] shadow-xl dark:shadow-none border border-gray-50 dark:border-slate-800">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 print:gap-4">
              {Object.entries(cvData.skills).map(([category, items], idx) => (
                <div key={idx} className="print:break-inside-avoid">
                  <h4 className="text-[10px] font-black text-gray-500 dark:text-gray-300 uppercase tracking-[0.2em] mb-4 print:mb-1">{category}</h4>
                  <div className="flex flex-wrap gap-2 print:gap-1">
                    {items.map((skill, i) => {
                      const isAi = category === "Data & AI";
                      const isFront = category === "Frontend" && skill.includes("Vue");

                      return (
                        <span key={i} className={`px-3 py-2 print:px-2 print:py-0.5 rounded-xl text-xs font-bold transition-all border ${isAi ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-100 dark:shadow-none' : isFront ? 'bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/50' : 'bg-gray-50 dark:bg-slate-800 text-gray-600 dark:text-gray-300 border-gray-100 dark:border-slate-700 hover:border-indigo-200 dark:hover:border-indigo-800'}`}>
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="space-y-12">
          {/* Experience */}
          <section id="experience" data-track="experience">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-[2px] w-12 bg-indigo-600 rounded-full"></div>
              <h3 className="text-xl font-black text-gray-900 uppercase tracking-widest flex items-center gap-3">
                <Briefcase className="text-indigo-600" size={24} /> Trajectory
              </h3>
            </div>

            <div className="space-y-12 print:space-y-4 relative">
              <div className="absolute left-[20px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-100 via-gray-100 to-transparent print:hidden"></div>

              {cvData.experience.map((job, idx) => (
                <article key={idx} className="relative pl-12 print:pl-0 group">
                  <div className={`absolute left-0 top-1.5 h-10 w-10 rounded-xl flex items-center justify-center z-10 border-4 border-gray-50 dark:border-slate-800 transition-all duration-300 ${idx === 0 ? 'bg-indigo-600 dark:bg-indigo-500 text-white shadow-lg shadow-indigo-200 dark:shadow-none' : 'bg-white dark:bg-slate-900 text-gray-400 group-hover:bg-gray-50 dark:group-hover:bg-slate-800'} print:hidden`}>
                    {idx === 0 ? <Rocket size={18} /> : <Briefcase size={18} />}
                  </div>

                  <header className="mb-6 print:mb-2">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2 gap-2 print:mb-1">
                      <h4 className="text-2xl font-black text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors uppercase tracking-tight print:text-base">{job.role}</h4>
                      <time className={`text-xs font-black tracking-widest uppercase px-3 py-1.5 rounded-full ${idx === 0 ? 'bg-indigo-600 dark:bg-indigo-500 text-white' : 'bg-gray-100 dark:bg-slate-800 text-gray-500'} print:bg-transparent print:text-gray-400 print:px-0 print:py-0`}>
                        {job.date}
                      </time>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-bold text-sm print:text-xs">
                      <span className="text-indigo-600 dark:text-indigo-400">{job.company}</span>
                      <span className="opacity-30">•</span>
                      <span>{job.location}</span>
                    </div>
                  </header>

                  <ul className="space-y-4 print:space-y-1">
                    {job.achievements.map((ach, i) => (
                      <li key={i} className="flex gap-4 items-start text-gray-600 dark:text-gray-300 font-medium print:gap-2">
                        <ChevronRight size={16} className="mt-1 text-indigo-300 dark:text-indigo-700 flex-shrink-0 print:w-3" />
                        <span className="leading-tight">
                          <strong className="text-gray-900 dark:text-gray-100 font-black print:font-bold">{ach.bold}</strong> {ach.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section id="projects" data-track="projects">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-[2px] w-12 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
              <h3 className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-widest flex items-center gap-3">
                <Rocket className="text-blue-600 dark:text-blue-400" size={24} /> Artifacts
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 print:gap-4">
              {cvData.projects.map((project, idx) => {
                const CardWrapper = project.url ? 'a' : 'div';
                const wrapperProps = project.url ? {
                  href: project.url,
                  target: "_blank",
                  rel: "noopener",
                  className: "group block bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-3xl p-8 print:p-4 shadow-lg dark:shadow-none hover:shadow-2xl dark:hover:border-indigo-900/50 hover:translate-y-[-8px] transition-all duration-500 relative overflow-hidden cursor-pointer",
                  "data-track": `project-${idx}`
                } : {
                  className: "group block bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-3xl p-8 print:p-4 shadow-lg dark:shadow-none relative overflow-hidden",
                  "data-track": `project-${idx}`
                };

                return (
                  <CardWrapper key={idx} {...wrapperProps}>
                    {project.url && (
                      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity print:hidden">
                        <ExternalLink size={20} className="text-indigo-600" />
                      </div>
                    )}
                    <h4 className="font-black text-xl text-gray-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors print:text-base print:mb-1">
                      {project.title}
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 mb-6 font-medium text-sm leading-relaxed print:text-xs print:mb-2">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 print:gap-1">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] font-black uppercase tracking-wider px-3 py-1 bg-gray-50 dark:bg-slate-800/80 text-gray-500 dark:text-gray-400 rounded-lg group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/10 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors print:px-1 print:py-0.5 print:text-[8px]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardWrapper>
                );
              })}
            </div>
          </section>
          {/* Education & Languages - Combined in one row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 print:grid-cols-2 gap-8 print:gap-4">
            <section className="bg-white dark:bg-slate-900 p-8 print:p-4 rounded-[2rem] shadow-lg dark:shadow-none border border-gray-50 dark:border-slate-800 print-card">
              <h3 className="text-lg font-black text-gray-900 dark:text-white uppercase tracking-widest mb-6 print:mb-2 flex items-center gap-3 print:text-base">
                <GraduationCap className="text-emerald-600 dark:text-emerald-400" size={20} /> Education
              </h3>
              <div className="space-y-4 print:space-y-1">
                <h4 className="font-bold text-gray-900 dark:text-gray-100 leading-tight print:text-sm">{cvData.education.degree}</h4>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider print:text-[10px]">{cvData.education.university}</div>
                <time className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 px-2 py-1 bg-indigo-50 dark:bg-indigo-950/30 rounded-md print:bg-transparent print:p-0">{cvData.education.date}</time>
              </div>
            </section>

            <section className="bg-white dark:bg-slate-900 p-8 print:p-4 rounded-[2rem] shadow-lg dark:shadow-none border border-gray-50 dark:border-slate-800 print-card">
              <h3 className="text-lg font-black text-gray-900 dark:text-white uppercase tracking-widest mb-6 print:mb-2 flex items-center gap-3 print:text-base">
                <Languages className="text-blue-600 dark:text-blue-400" size={20} /> Languages
              </h3>
              <div className="space-y-4 print:space-y-1">
                {cvData.languages.map((lang, idx) => (
                  <div key={idx} className="flex justify-between items-baseline">
                    <span className="font-bold text-gray-800 dark:text-gray-200 print:text-sm">{lang.name}</span>
                    <span className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">{lang.level}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Contact Form */}
        <section id="contact" data-track="contact" className="mt-32 print:hidden">
          <div className="max-w-4xl mx-auto bg-indigo-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-indigo-200">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full translate-x-1/3 translate-y-1/3"></div>

            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">Let's build <br /> something systemic.</h2>
              <p className="text-indigo-100 text-lg font-medium max-w-xl mx-auto opacity-80">
                Ready to architect scalable LLM pipelines or refactor your high-load infrastructure? Let's connect and solve your technical challenges.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a href={`mailto:${cvData.header.email}`} className="bg-white text-indigo-600 px-10 py-5 rounded-2xl font-black text-lg shadow-xl hover:scale-105 active:scale-95 transition-all">
                  Write to me
                </a>
                <a href={`https://${cvData.header.linkedin}`} target="_blank" rel="noopener" className="bg-indigo-700/50 backdrop-blur-md text-white border border-indigo-400/30 px-10 py-5 rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="text-center py-12 text-[10px] font-black text-gray-300 dark:text-gray-600 uppercase tracking-[0.3em] print:hidden transition-colors duration-500">
        <p>© {new Date().getFullYear()} ENGINEER PORTFOLIO • LOGIC DRIVEN • AI INTEGRATED</p>
      </footer>
    </div>
  );
}
