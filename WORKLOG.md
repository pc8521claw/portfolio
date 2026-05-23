
## 2026-05-22

### 文檔：Portfolio 技術文檔記錄

**內容：**
- 創建 `memory/projects/portfolio.md` 詳細技術文檔
- 包含：技術架構、功能詳解、技能/專案列表、部署流程

**位置：** `memory/projects/portfolio.md`

**重點記錄：**
- Framework: Next.js 16.2.6 + React 19 + Tailwind CSS 4
- 部署網址: https://portfolio-six-phi-89.vercel.app
- GitHub: https://github.com/pc8521claw/portfolio
- 12項技能展示（Frontend/Backend/Tools）
- 3個專案展示（OpenClaw Dashboard、AI Image Generator、Trading Signal System）

## 2026-05-23

### Portfolio 網站更新

**變更：**
1. 移除 Skills 部分（完全刪除）
2. 更新 Projects 列表為 7 個項目
3. 修復項目編號顯示（從 "00, 1.5, 03..." 改為 "01, 02, 03..."）

**Projects 更新：**
- Trading Platform（股票分析平台）
- Minervini-Trading（智能選股系統）
- Futures-Signals（期貨期權信號系統）
- OpenClaw-Dashboard（系統監控面板）
- Psy-Profile（心理側寫與風險識別）
- Webchat（智能客服系統）
- ZImage-Generator（圖像生成工具）

**技術變更：**
- ProjectCard 從 delay prop 改為 index prop
- `String(index + 1).padStart(2, '0')` 顯示為 "01", "02"...

**部署：**
- 本地運行：http://192.168.31.249:3010
