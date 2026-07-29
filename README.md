# 🧠 Workflow Intelligence & AST Documentation System

> **Universal AST Codebase Scanner, Architecture Documentation Generator, and Interactive Visual Flow Viewer for Monorepos, NestJS, Next.js, and Node.js Projects.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Repository](https://img.shields.io/badge/GitHub-1925247%2Fworkflow--intelligence-blue)](https://github.com/1925247/workflow-intelligence)

---

## 🚀 Overview

**Workflow Intelligence System** is a standalone AST-driven static analysis engine and interactive visual web dashboard. It scans complex monorepos and Node.js codebases to produce:

1. **`project-map.json`**: An ultra-compact, high-density JSON AST representation of your entire architecture (Entities, Resolvers, Services, Frontend Pages, Forms, Buttons, and GraphQL Operations).
2. **Markdown Documentation**: Auto-generated system flow maps and module specifications.
3. **Visual Web Viewer (`index.html`)**: An offline-capable, interactive web studio featuring:
   - **📐 Native Visual Flow Studio**: 6 interactive flowcharts (`System Execution Flow`, `18 Domain Modules`, `Database ER Schema Map`, `GraphQL Resolver Topology`, `Security Map`, `Action Topology`) with mouse wheel zoom & scroll.
   - **🧪 Live Debug & AST Console**: Search symbols, inspect methods (`ValuationService`, `calculateValuation`), and view syntax-highlighted **Source Code Snippets** in-browser.
   - **🔍 Action Glitch Inspector**: Scans all frontend pages to verify if `➕ Add`, `✏️ Edit`, `🗑️ Delete`, and `🔍 Search` buttons are properly connected to backend mutations.

---

## 💡 Why Use This in Your Own Project? (Benefits & Real-World Use Cases)

Adding **Workflow Intelligence** to any project or monorepo unlocks immense advantages for developers, QA engineers, and AI coding assistants:

### 🌟 Key Real-World Use Cases

1. **🤖 Instant AI Context Alignment (Zero AI Hallucinations)**:
   - When using AI tools like **Antigravity, Cursor, Claude, or ChatGPT**, reading thousands of codebase files leads to context limits and hallucinations.
   - By feeding `workflow/generated/project-map.json`, the AI instantly understands all **entities, resolvers, routes, form fields, buttons, and mutation links in 1 second**.

2. **🔍 Automated QA & Glitch Detection**:
   - Automatically detects **orphaned UI buttons** (buttons present on frontend without a corresponding backend mutation or click handler).
   - Detects **unconsumed GraphQL APIs** (APIs created in backend resolvers that are missing frontend UI callers).

3. **📐 100% Offline Interactive Visual Flowchart Studio**:
   - Provides a zero-latency, offline-capable `index.html` web application with 6 visual flowcharts (`System Flow`, `18 Domain Modules`, `ER Schema Map`, `GraphQL Topology`, `Security Map`, `Action Topology`) with mouse wheel zoom & vertical scrolling.

4. **⚡ Developer Onboarding & Source Inspection**:
   - Reduces developer onboarding time from **2 weeks to 5 minutes**.
   - Includes a **Live Debug AST Console** where developers can search symbols, inspect method signatures, and view syntax-highlighted **Source Code Snippets** without opening 10 IDE tabs.

---

## 🛠️ Step-by-Step Integration Guide (How to Add to ANY Project)

You can plug this Workflow Intelligence System into **ANY NestJS, Next.js, React, or Node.js project** in 4 simple steps:

### Step 1: Copy the `workflow/` Folder
Copy the `workflow/` directory into your project root:
```bash
git clone https://github.com/1925247/workflow-intelligence.git workflow
```

### Step 2: Configure Path Targets
Edit `workflow/config/workflow.config.json` to match your codebase structure:
```json
{
  "projectName": "Your Project Name",
  "backendPath": "apps/backend/src",
  "frontendPath": "apps/frontend/src"
}
```

### Step 3: Run One-Click Installer
- **Windows**: Double-click `workflow/install.bat` or run:
  ```cmd
  workflow\install.bat
  ```
- **Linux / macOS**:
  ```bash
  bash workflow/install.sh
  ```

### Step 4: Open Interactive Web Studio
Open `workflow/web/index.html` directly in your browser to inspect interactive workflows, AST code snippets, and glitch diagnostics!

---

## 🛠️ Cross-Platform Executable Scripts

| Operation | Windows (Batch) | Linux / macOS (Bash) |
| :--- | :--- | :--- |
| **📥 Install** | `install.bat` | `bash install.sh` |
| **🔄 Update** | `update.bat` | `bash update.sh` |
| **🗑️ Uninstall / Clean** | `uninstall.bat` | `bash uninstall.sh` |
| **🚀 Run Scanner & Viewer** | `run.bat` | `bash run.sh` |

---

## 🤝 Community Feedback & Contributions

Contributions, bug reports, and feature requests are welcome!
- **Submit Feedback / Issues**: [https://github.com/1925247/workflow-intelligence/issues](https://github.com/1925247/workflow-intelligence/issues)
- **Pull Requests**: [https://github.com/1925247/workflow-intelligence/pulls](https://github.com/1925247/workflow-intelligence/pulls)

---

## 📜 License

[MIT License](LICENSE) © 2026 [@1925247](https://github.com/1925247)
