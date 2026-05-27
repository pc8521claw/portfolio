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
      "Trading Platform": "Stock analysis platform with real-time quotes, candlestick charts, and technical indicators. Features 5 strategy backtests (MA Cross, RSI, MACD, Bollinger, Momentum) and multi-model price prediction. Includes HK stock search.",
      "Minervini-Trading": "Stock screening system based on Mark Minervini trend template. Identifies stocks with strong price momentum, earnings growth, and technical breakout patterns.",
      "Futures-Signals": "Daily futures and options trading signal system. Provides trend analysis, options strategy recommendations, and automated signal generation.",
      "OpenClaw-Dashboard": "System monitoring dashboard for OpenClaw AI. Tracks active sessions, token usage, cron jobs, and hardware metrics (CPU/RAM/disk).",
      "Psy-Profile": "Psychological profiling system. Analyzes personality traits and decision-making patterns for understanding behavioral tendencies.",
      "Webchat": "AI customer service system with RAG vector search. Integrates knowledge base for accurate responses and manages conversation history.",
      "ZImage-Generator": "AI image generation tool powered by ComfyUI and Z-Image Turbo model. Text-to-image generation with multiple style presets.",
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
      "Trading Platform": "股票分析平台 - 實時報價、K線圖、技術指標（MA/RSI/MACD/布林帶）。5種策略回測和多模型價格預測。包含港股搜索功能。",
      "Minervini-Trading": "智能選股系統 - 基於 Mark Minervini 趨勢模板，識別強勁股價動量、盈利增長和技術突破形態的股票。",
      "Futures-Signals": "期貨期權每日交易信號系統 - 提供趨勢分析、選擇權策略建議和自動化信號生成。",
      "OpenClaw-Dashboard": "OpenClaw AI 系統監控面板 - 追蹤活躍 Sessions、Token 使用量、Cron Jobs、以及硬件監控（CPU/記憶體/磁盤）。",
      "Psy-Profile": "心理側寫系統 - 分析人格特徵和決策模式，幫助了解行為傾向。",
      "Webchat": "AI 智能客服系統 - 具備 RAG 向量搜尋能力，整合知識庫提供準確回覆，管理對話歷史。",
      "ZImage-Generator": "AI 圖像生成工具 - 由 ComfyUI 和 Z-Image Turbo 模型驅動的文字轉圖像生成，支援多種風格預設。",
    },
  },
};

export type Language = "en" | "zh";
export type TranslationKeys = typeof translations.en;