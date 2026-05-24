export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      projects: "Projects",
      contact: "Contact",
    },
    
    // Hero
    hero: {
      role: "Full-Stack Developer",
      subtitle: "Building elegant web solutions with modern technologies. Focused on clean code and intuitive user experiences.",
      viewWork: "VIEW WORK",
      contact: "CONTACT",
    },
    
    // Skills
    skills: {
      title: "Skills",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        tools: "Tools",
      },
    },
    
    // Projects
    projects: {
      title: "Portfolio",
      selectedWork: "Selected Work",
    },
    
    // Contact
    contact: {
      getInTouch: "Get in Touch",
      letsWork: "Let's Work Together",
      description: "Have a project in mind? I'd love to hear about it. Drop me a message and let's create something amazing.",
      getInTouchBtn: "GET IN TOUCH",
    },
    
    // Footer
    footer: {
      rights: "All rights reserved.",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    
    // Project descriptions
    projectDescriptions: {
      "Trading Platform": "Stock analysis platform - Stock query, candlestick charts, technical analysis, strategy backtesting, price prediction",
      "Minervini-Trading": "Intelligent stock screening system - Quantitative trading based on Mark Minervini trend template",
      "Futures-Signals": "Futures & options signal system - Daily trading signals, options strategy analysis",
      "OpenClaw-Dashboard": "System monitoring dashboard - Real-time system status, session tracking, hardware monitoring",
      "Psy-Profile": "Psychological profiling & risk identification - Psychological analysis, risk assessment",
      "Webchat": "AI customer service system - Corporate customer service, RAG vector search, conversation management",
      "ZImage-Generator": "Image generation tool - Text-to-image generation, multiple style support",
    },
  },
  
  zh: {
    // Navigation
    nav: {
      home: "主頁",
      projects: "作品",
      contact: "聯絡",
    },
    
    // Hero
    hero: {
      role: "全端開發者",
      subtitle: "以現代技術構建優雅的網頁解決方案。專注於簡潔程式碼和直觀的用戶體驗。",
      viewWork: "查看作品",
      contact: "聯絡我",
    },
    
    // Skills
    skills: {
      title: "技能",
      categories: {
        frontend: "前端",
        backend: "後端",
        tools: "工具",
      },
    },
    
    // Projects
    projects: {
      title: "作品集",
      selectedWork: "精選作品",
    },
    
    // Contact
    contact: {
      getInTouch: "與我聯絡",
      letsWork: "一起合作吧",
      description: "有任何項目想法嗎？我很期待聆聽。給我發個訊息，一起創造精彩的作品。",
      getInTouchBtn: "聯絡我",
    },
    
    // Footer
    footer: {
      rights: "版權所有。",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    
    // Project descriptions
    projectDescriptions: {
      "Trading Platform": "股票分析平台 - 股票查詢、K線圖技術分析、策略回測、價格預測",
      "Minervini-Trading": "智能選股系統 - 基於Mark Minervini趨勢模板的量化選股系統",
      "Futures-Signals": "期貨期權信號系統 - 每日期貨交易信號、選擇權策略分析",
      "OpenClaw-Dashboard": "系統監控面板 - 即時系統狀態、Sessions追蹤、硬件監控",
      "Psy-Profile": "心理側寫與風險識別 - 心理側寫分析、風險識別評估",
      "Webchat": "智能客服系統 - AI公司客戶服務、RAG向量搜尋、對話管理",
      "ZImage-Generator": "圖像生成工具 - 文字轉圖像生成、多風格支援",
    },
  },
};

export type Language = "en" | "zh";
export type TranslationKeys = typeof translations.en;