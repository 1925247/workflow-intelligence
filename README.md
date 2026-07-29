# Workflow Intelligence & Documentation System

The **Workflow Intelligence System** provides static code analysis, end-to-end execution path mapping, and visual workflow inspection for the Bizrok monorepo.

## Available Execution Scripts

Run these standalone scripts using Node or `npx ts-node` / `tsx`:

```bash
# 1. Scan codebase and produce project-map.json
npx ts-node workflow/scripts/scan-project.ts

# 2. Generate Markdown & Web Viewer data
npx ts-node workflow/scripts/generate-workflow.ts

# 3. Validate workflow integrity and paths
npx ts-node workflow/scripts/validate-workflow.ts

# 4. Build visual web viewer
npx ts-node workflow/scripts/build-web-view.ts

# 5. Start dev-time file watcher
npx ts-node workflow/scripts/watch-workflow.ts
```

## Interactive Visual Web Viewer

Open [workflow/web/index.html](file:///E:/bizrok.in/workflow/web/index.html) in any browser to inspect interactive workflows, search features, filter issues, and view ER diagrams.
