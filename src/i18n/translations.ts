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
    },
    
    // Project descriptions
    projectDescriptions: {
      "Trading Platform": "• Real-time HK/US stock quotes\n• Candlestick charts with technical indicators\n• 5 strategy backtests (MA, RSI, MACD, Bollinger, Momentum)\n• Multi-model price prediction\n• HK stock search",
      "Mind Notes": "• Local AI chat integrated with Ollama\n• FTS5 full-text search engine\n• Smart notes with tag-based organization\n• Auto knowledge base builder\n• SQLite persistence with WAL protection\n• iOS Safari optimized",
      "Minervini-Trading": "• Mark Minervini trend template screening\n• Price momentum analysis\n• Earnings growth identification\n• Technical breakout detection",
      "Futures-Signals": "• Daily futures trading signals\n• Options strategy recommendations\n• Trend analysis\n• Automated signal generation",
      "OpenClaw-Dashboard": "• Real-time session tracking\n• Token usage statistics\n• Cron jobs management\n• Hardware monitoring (CPU/RAM/disk)",
      "Psy-Profile": "• Personality traits analysis\n• Decision-making pattern identification\n• MBTI personality analysis\n• Risk tolerance assessment",
      "Webchat": "• RAG vector search integration\n• Knowledge base management\n• Conversation history tracking\n• AI-powered responses",
      "ZImage-Generator": "• Text-to-image generation\n• ComfyUI backend integration\n• Z-Image Turbo model\n• Multiple style presets",
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
    },
    
    // Project descriptions
    projectDescriptions: {
      "Trading Platform": "• 實時港股/美股報價\n• K線圖技術指標\n• 5種策略回測（MA、RSI、MACD、布林帶、動量）\n• 多模型價格預測\n• 港股搜索",
      "Mind Notes": "• 本地 AI 對話（Ollama 整合）\n• FTS5 全文搜尋引擎\n• 智能筆記 + 標籤分類\n• 自動知識庫建立\n• SQLite WAL 持久化\n• iOS Safari 優化",
      "Minervini-Trading": "• Mark Minervini 趨勢模板篩選\n• 股價動量分析\n• 盈利增長識別\n• 技術突破形態檢測",
      "Futures-Signals": "• 每日期貨交易信號\n• 選擇權策略建議\n• 趨勢分析\n• 自動化信號生成",
      "OpenClaw-Dashboard": "• 即時 Sessions 追蹤\n• Token 使用量統計\n• Cron Jobs 管理\n• 硬件監控（CPU/記憶體/磁盤）",
      "Psy-Profile": "• 人格特徵分析\n• 決策模式識別\n• MBTI 人格分析\n• 風險承受評估",
      "Webchat": "• RAG 向量搜尋整合\n• 知識庫管理\n• 對話歷史追蹤\n• AI 智能回覆",
      "ZImage-Generator": "• 文字轉圖像生成\n• ComfyUI 後端整合\n• Z-Image Turbo 模型\n• 多種風格預設",
    },
  },
};

export type Language = "en" | "zh";
export type TranslationKeys = typeof translations.en;