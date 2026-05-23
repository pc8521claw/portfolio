"use client";

import { useState, useEffect, useRef } from "react";

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
    description: "股票分析平台 - 股票查詢、K線圖技術分析、策略回測、價格預測",
    tech: ["Next.js", "React", "Recharts", "yfinance"],
    color: "#3B82F6",
  },
  {
    name: "Minervini-Trading",
    description: "智能選股系統 - 基於Mark Minervini趨勢模板的量化選股系統",
    tech: ["Python", "yfinance"],
    color: "#10B981",
  },
  {
    name: "Futures-Signals",
    description: "期貨期權信號系統 - 每日期貨交易信號、選擇權策略分析",
    tech: ["Python", "期貨API"],
    color: "#F59E0B",
  },
  {
    name: "OpenClaw-Dashboard",
    description: "系統監控面板 - 即時系統狀態、Sessions追蹤、硬件監控",
    tech: ["React", "Express", "OpenClaw CLI"],
    color: "#8B5CF6",
  },
  {
    name: "Psy-Profile",
    description: "心理側寫與風險識別 - 心理側寫分析、風險識別評估",
    tech: ["React", "Next.js"],
    color: "#EC4899",
  },
  {
    name: "Webchat",
    description: "智能客服系統 - AI公司客戶服務、RAG向量搜尋、對話管理",
    tech: ["Node.js", "AI API"],
    color: "#06B6D4",
  },
  {
    name: "ZImage-Generator",
    description: "圖像生成工具 - 文字轉圖像生成、多風格支援",
    tech: ["React", "ComfyUI", "Z-Image Turbo"],
    color: "#EF4444",
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

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`group bg-white p-8 transition-all duration-500 hover:shadow-xl ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div 
        className="h-32 border-b-2 border-stone-100 pb-6 mb-6 flex items-center justify-center transition-all duration-300 group-hover:border-current"
        style={{ borderColor: isVisible ? project.color : "rgb(226 232 240)" }}
      >
        <span 
          className="text-4xl font-bold text-stone-300 transition-all duration-300"
          style={{ color: isVisible ? "rgb(203 213 225)" : "rgb(226 232 240)" }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <h3 className="text-lg font-medium mb-2 group-hover:text-blue-600 transition-colors">
        {project.name}
      </h3>
      <p className="text-stone-500 text-sm mb-4 leading-relaxed">
        {project.description}
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
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

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
            <div className="flex gap-8 text-sm tracking-wide">
              {[
                { id: "home", label: "Home" },
                { id: "projects", label: "Projects" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`capitalize relative hover:text-blue-600 transition-colors ${
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
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-8 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-50" />
        </div>
        
        <div className="text-center max-w-2xl relative z-10">
          <p className="text-sm tracking-widest text-blue-600 mb-4 uppercase font-medium animate-pulse">
            Full-Stack Developer
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-stone-800 via-blue-600 to-stone-600 bg-clip-text text-transparent">
            Raymond Lam
          </h1>
          <p className="text-lg text-stone-500 font-light leading-relaxed mb-12">
            Building elegant web solutions with modern technologies.
            Focused on clean code and intuitive user experiences.
          </p>
          <div className="flex justify-center gap-6">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-blue-600 text-white text-sm tracking-wider font-medium rounded-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all hover:-translate-y-0.5"
            >
              VIEW WORK
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border-2 border-stone-300 text-stone-700 text-sm tracking-wider font-medium rounded-lg hover:border-blue-400 hover:text-blue-600 transition-all hover:-translate-y-0.5"
            >
              CONTACT
            </button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-8 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm tracking-widest text-blue-600 mb-2 uppercase font-medium">
              Portfolio
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-stone-800">Selected Work</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
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
            Get in Touch
          </p>
          <h2 className="text-4xl font-bold tracking-tight mb-6">Let's Work Together</h2>
          <p className="text-stone-400 mb-12 leading-relaxed">
            Have a project in mind? I'd love to hear about it.
            Drop me a message and let's create something amazing.
          </p>
          <a
            href="mailto:pc8521@example.com"
            className="inline-flex items-center gap-2 px-10 py-4 border-2 border-blue-500 text-blue-400 text-sm tracking-wider font-medium rounded-lg hover:bg-blue-500 hover:text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25"
          >
            <span>✉️</span> GET IN TOUCH
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 bg-stone-900 border-t border-stone-800">
        <div className="max-w-5xl mx-auto flex justify-between items-center text-sm text-stone-500">
          <p>© {new Date().getFullYear()} Raymond Lam. All rights reserved.</p>
          <div className="flex gap-6">
            <a 
              href="https://github.com/pc8521" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>🐙</span> GitHub
            </a>
            <a 
              href="https://linkedin.com/in/pc8521" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>💼</span> LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
