"use client";

import { useState, useEffect, useRef } from "react";
import { translations, type Language } from "@/i18n/translations";

const skills = [
  { name: "React", category: "Frontend", level: 90, icon: "⚛️", color: "#61DAFB" },
  { name: "TypeScript", category: "Frontend", level: 85, icon: "📘", color: "#3178C6" },
  { name: "Next.js", category: "Frontend", level: 85, icon: "▲", color: "#000000" },
  { name: "Tailwind CSS", category: "Frontend", level: 88, icon: "💨", color: "#38B2AC" },
  { name: "Node.js", category: "Backend", level: 85, icon: "🟢", color: "#339933" },
  { name: "Express", category: "Backend", level: 82, icon: "🚂", color: "#000000" },
  { name: "Python", category: "Backend", level: 78, icon: "🐍", color: "#3776AB" },
  { name: "PostgreSQL", category: "Backend", level: 75, icon: "🐘", color: "#4169E1" },
  { name: "Git", category: "Tools", level: 88, icon: "📂", color: "#F05032" },
  { name: "Docker", category: "Tools", level: 75, icon: "🐳", color: "#2496ED" },
  { name: "AWS", category: "Tools", level: 70, icon: "☁️", color: "#FF9900" },
  { name: "Linux", category: "Tools", level: 80, icon: "🐧", color: "#FCC624" },
];

const projects = [
  {
    name: "Trading Platform",
    tech: ["Next.js", "React", "Recharts", "yfinance"],
    color: "#3B82F6",
  },
  {
    name: "Minervini-Trading",
    tech: ["Python", "yfinance"],
    color: "#10B981",
  },
  {
    name: "Futures-Signals",
    tech: ["Python", "yfinance"],
    color: "#F59E0B",
  },
  {
    name: "OpenClaw-Dashboard",
    tech: ["React", "Express", "OpenClaw CLI"],
    color: "#8B5CF6",
  },
  {
    name: "Psy-Profile",
    tech: ["React", "Next.js"],
    color: "#EC4899",
  },
  {
    name: "Webchat",
    tech: ["Node.js", "AI API"],
    color: "#06B6D4",
  },
  {
    name: "ZImage-Generator",
    tech: ["React", "ComfyUI", "Z-Image Turbo"],
    color: "#EF4444",
  },
  {
    name: "Mind Notes",
    tech: ["React", "Express", "better-sqlite3", "Ollama"],
    color: "#8B5CF6",
  },
];

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

function SkillCard({ skill, delay }: { skill: typeof skills[0]; delay: number }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`group transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-baseline justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-xl" style={{ filter: `drop-shadow(0 0 8px ${skill.color}40)` }}>
            {skill.icon}
          </span>
          <h3 className="text-lg font-medium text-stone-800">{skill.name}</h3>
        </div>
        <span className="text-sm text-stone-400">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-stone-200 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: isVisible ? `${skill.level}%` : "0%",
            backgroundColor: skill.color,
            boxShadow: `0 0 10px ${skill.color}60`
          }}
        />
      </div>
      <p className="text-xs text-stone-400 mt-2 uppercase tracking-wider">
        {skill.category}
      </p>
    </div>
  );
}

function ProjectCard({ project, index, lang }: { project: typeof projects[0]; index: number; lang: Language }) {
  const { ref, isVisible } = useScrollReveal();
  const t = translations[lang].projectDescriptions;
  const description = t[project.name as keyof typeof t] || project.name;
  
  const imageFileName = `project-${String(index + 1).padStart(2, '0')}-${project.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

  return (
    <div
      ref={ref}
      className={`group bg-white p-8 transition-all duration-500 hover:shadow-xl ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div 
        className="h-96 border-b-2 border-stone-100 pb-4 mb-6 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-current"
        style={{ borderColor: isVisible ? project.color : "rgb(226 232 240)" }}
      >
        <img 
          src={`/images/${imageFileName}.jpg`}
          alt={project.name}
          className="w-full h-full object-contain rounded transition-all duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            if (target.src.endsWith('.jpg')) {
              target.src = `/images/${imageFileName}.png`;
            } else {
              target.style.display = 'none';
            }
          }}
        />
      </div>
      <h3 className="text-lg font-medium mb-2 group-hover:text-blue-600 transition-colors flex items-center gap-2">
        {project.name}
        {project.name === "Trading Platform" && (
          <a
            href="https://trading-platform-six-kappa.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            🌐 Demo 示範
          </a>
        )}
      </h3>
      <p className="text-stone-500 text-sm mb-4 leading-relaxed whitespace-pre-line">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs text-stone-500 border border-stone-200 px-2 py-1 rounded-full hover:border-blue-400 hover:text-blue-600 transition-colors"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Language>("en");
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    // Check localStorage for saved language preference
    const savedLang = localStorage.getItem("portfolio-lang") as Language;
    if (savedLang && (savedLang === "en" || savedLang === "zh")) {
      setLang(savedLang);
    }
  }, []);

  const toggleLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("portfolio-lang", newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["home", "projects", "contact"];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-slate-50 text-stone-800 font-sans">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-stone-200/50" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-5xl mx-auto px-8 py-6">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-xl font-bold tracking-wider hover:text-blue-600 transition-colors"
              style={{ color: isScrolled ? undefined : undefined }}
            >
              <span className="text-blue-600">R</span>L.
            </button>
            
            <div className="flex items-center gap-6">
              <div className="flex gap-6 text-sm tracking-wide">
                {[
                  { id: "home", label: t.nav.home },
                  { id: "projects", label: t.nav.projects },
                  { id: "contact", label: t.nav.contact },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative hover:text-blue-600 transition-colors ${
                      activeSection === item.id ? "text-blue-600" : "text-stone-500"
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                    )}
                  </button>
                ))}
              </div>
              
              {/* Language Switcher */}
              <div className="flex items-center gap-1 bg-stone-100 rounded-lg p-1">
                <button
                  onClick={() => toggleLang("en")}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                    lang === "en" 
                      ? "bg-white text-blue-600 shadow-sm" 
                      : "text-stone-500 hover:text-stone-700"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => toggleLang("zh")}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                    lang === "zh" 
                      ? "bg-white text-blue-600 shadow-sm" 
                      : "text-stone-500 hover:text-stone-700"
                  }`}
                >
                  中文
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-8 pt-24 pb-16 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-50" />
        </div>
        
        <div className="text-center max-w-2xl relative z-10">
          <p className="text-sm tracking-widest text-blue-600 mb-4 uppercase font-medium animate-pulse">
            {t.hero.role}
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-stone-800 via-blue-600 to-stone-600 bg-clip-text text-transparent">
            Raymond Lam
          </h1>
          <p className="text-lg text-stone-500 font-light leading-relaxed mb-12 whitespace-pre-line">
            {t.hero.subtitle}
          </p>
          <div className="flex justify-center gap-6">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-blue-600 text-white text-sm tracking-wider font-medium rounded-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all hover:-translate-y-0.5"
            >
              {t.hero.viewWork}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border-2 border-stone-300 text-stone-700 text-sm tracking-wider font-medium rounded-lg hover:border-blue-400 hover:text-blue-600 transition-all hover:-translate-y-0.5"
            >
              {t.hero.contact}
            </button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-8 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm tracking-widest text-blue-600 mb-2 uppercase font-medium">
              {t.projects.title}
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-stone-800">{t.projects.selectedWork}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} lang={lang} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-8 bg-gradient-to-br from-stone-800 via-slate-900 to-stone-900 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <p className="text-sm tracking-widest text-blue-400 mb-2 uppercase font-medium">
            {t.contact.getInTouch}
          </p>
          <h2 className="text-4xl font-bold tracking-tight mb-6">{t.contact.letsWork}</h2>
          <p className="text-stone-400 mb-12 leading-relaxed">
            {t.contact.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:rlamwp@gmail.com"
              className="inline-flex items-center gap-2 px-10 py-4 border-2 border-blue-500 text-blue-400 text-sm tracking-wider font-medium rounded-lg hover:bg-blue-500 hover:text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25 w-full sm:w-auto sm:min-w-[160px] justify-center"
            >
              <span>✉️</span> Email
            </a>
            <a
              href="https://wa.me/85294215788"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 border-2 border-green-500 text-green-400 text-sm tracking-wider font-medium rounded-lg hover:bg-green-500 hover:text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/25 w-full sm:w-auto sm:min-w-[160px] justify-center"
            >
              <span>💬</span> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 bg-stone-900 border-t border-stone-800">
        <div className="max-w-5xl mx-auto flex justify-between items-center text-sm text-stone-500">
          <p>© {new Date().getFullYear()} Raymond Lam. {t.footer.rights}</p>
          <div className="flex gap-6">
            <a 
              href="https://github.com/pc8521claw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>{t.footer.github}</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}