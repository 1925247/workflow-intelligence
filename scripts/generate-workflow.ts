import * as fs from 'fs';
import * as path from 'path';
import { ProjectMap } from './scan-project';

const ROOT_DIR = path.resolve(__dirname, '../../');
const GENERATED_DIR = path.join(ROOT_DIR, 'workflow/generated');
const WORKFLOW_DIR = path.join(ROOT_DIR, 'workflow');

export function generateDocumentation() {
  console.log('📝 Generating Workflow Documentation...');
  const mapPath = path.join(GENERATED_DIR, 'project-map.json');
  if (!fs.existsSync(mapPath)) {
    throw new Error('project-map.json not found. Run scan-project first.');
  }

  const projectMap: ProjectMap = JSON.parse(fs.readFileSync(mapPath, 'utf-8'));

  // 1. Generate master PROJECT_WORKFLOW.md
  const masterMd = `# BIZROK PROJECT WORKFLOW INTELLIGENCE

> **Source of Truth System**: Code-driven architectural mapping automatically generated from repository source code.
> **Last Generated**: ${projectMap.timestamp}

---

## Executive Summary & Architecture Overview

Bizrok is an enterprise monorepo platform designed for device trade-in lifecycle management (lead capture, valuation, quality control, procurement, inventory, refurbishment, sales, settlement, and accounting).

### Applications & Key Boundaries

| Layer | Workspace Path | Technology Stack | Purpose |
| --- | --- | --- | --- |
| **Backend** | \`apps/backend\` | NestJS 11, TypeORM, GraphQL (Apollo), SQLite/Postgres | Micro-monolith backend providing 18 domain modules |
| **Admin Panel** | \`apps/frontend\` | Next.js 16 (App Router), Tailwind CSS v4, Zustand | Administrative control center for catalog, inventory, pricing & QC |
| **Customer Website** | \`apps/customer-website\` | Next.js 16 (App Router), Tailwind CSS v4, Apollo Client | Customer-facing trade-in portal & valuation journey |
| **Shared Package** | \`packages/shared\` | TypeScript, Class Validator | Monorepo-wide DTOs, enums (\`EventNames\`), and type definitions |

---

## End-to-End Execution Flow

\`\`\`mermaid
flowchart TD
    subgraph Customer Journey
        A["Customer Portal (/sell)"] --> B["Device Selection & Assessment UI"]
        B --> C["Apollo Client GraphQL Mutation"]
    end

    subgraph Admin Management
        D["Admin Panel (/admin)"] --> E["Catalog / Inventory / QC UI"]
        E --> F["GraphQL Query / Mutation"]
    end

    subgraph NestJS Backend Layer
        C --> G["GraphQL Resolvers (AssessmentResolver, OrderResolver)"]
        F --> G
        G --> H["Domain Services (ValuationService, CatalogService)"]
        H --> I["TypeORM Repositories"]
    end

    subgraph Database Layer
        I --> J[("Database (SQLite / Postgres)")]
    end
\`\`\`

---

## Monorepo Domain Module Map

The backend consists of 18 domain modules registered in \`app.module.ts\`:

\`\`\`mermaid
graph LR
    subgraph Core Lifecycle Modules
        Lead["1. Lead"] --> Valuation["2. Valuation"]
        Valuation --> Offer["3. Offer"]
        Offer --> Order["4. Order"]
        Order --> Pickup["5. Pickup"]
        Pickup --> QC["6. QC Inspection"]
        QC --> Procurement["7. Procurement"]
        Procurement --> Inventory["8. Inventory"]
        Inventory --> Refurbishment["9. Refurbishment"]
        Refurbishment --> Sales["10. Sales"]
        Sales --> Settlement["11. Settlement"]
        Settlement --> Accounting["12. Accounting"]
        Accounting --> Profitability["13. Profitability"]
    end
    subgraph Supporting Modules
        Catalog["Catalog Management"]
        Auth["Auth & Customers"]
        Address["Address Service"]
        Referral["Referral System"]
        Payment["Payment Gateway Integration"]
    end
\`\`\`

---

## Detailed Generated Documentation Reports

- 📘 [Frontend Customer Workflow](file:///${path.join(GENERATED_DIR, 'frontend-workflow.md').replace(/\\/g, '/')})
- 🖥️ [Admin Panel Workflow](file:///${path.join(GENERATED_DIR, 'admin-workflow.md').replace(/\\/g, '/')})
- ⚙️ [Backend Architecture Map](file:///${path.join(GENERATED_DIR, 'backend-workflow.md').replace(/\\/g, '/')})
- 🗄️ [Database Entity & Table Map](file:///${path.join(GENERATED_DIR, 'database-map.md').replace(/\\/g, '/')})
- 🔌 [GraphQL & REST API Catalog](file:///${path.join(GENERATED_DIR, 'api-map.md').replace(/\\/g, '/')})
- 🔗 [End-to-End Dependency Map](file:///${path.join(GENERATED_DIR, 'dependency-map.md').replace(/\\/g, '/')})
- ⚠️ [Architectural Issues Report](file:///${path.join(GENERATED_DIR, 'issues.md').replace(/\\/g, '/')})

`;

  fs.writeFileSync(path.join(WORKFLOW_DIR, 'PROJECT_WORKFLOW.md'), masterMd, 'utf-8');

  // 2. Generate PROJECT_STATUS.md
  const statusMd = `# PROJECT STATUS DASHBOARD

> **Timestamp**: ${projectMap.timestamp}

## System Overview Metrics

- **Total Monorepo Applications**: ${projectMap.summary.totalApps}
- **Backend Modules**: ${projectMap.summary.totalModules}
- **TypeORM Entities**: ${projectMap.summary.totalEntities}
- **Database Tables**: ${projectMap.summary.totalTables}
- **NestJS Services**: ${projectMap.summary.totalServices}
- **GraphQL Resolvers**: ${projectMap.summary.totalResolvers}
- **GraphQL Operations**: ${projectMap.summary.totalGqlOperations}
- **Total Frontend Pages**: ${projectMap.summary.totalFrontendPages} (Admin: ${projectMap.summary.totalAdminPages}, Customer: ${projectMap.summary.totalCustomerPages})
- **Detected Issues**: ${projectMap.summary.totalIssues}

---

## End-to-End Feature Traceability Matrix

| Feature | UI Page | API Operation | Resolver / Service | Entity / DB Table | Implementation Status |
| --- | --- | --- | --- | --- | --- |
${projectMap.executionChains
  .map(
    c =>
      `| **${c.feature}** | \`${c.pageRoute}\` | \`${c.gqlOperation}\` | \`${c.resolver}\` / \`${c.service}\` | \`${c.entity}\` (\`${c.table}\`) | \`[x] ${c.status}\` |`
  )
  .join('\n')}

`;

  fs.writeFileSync(path.join(WORKFLOW_DIR, 'PROJECT_STATUS.md'), statusMd, 'utf-8');

  // 3. Generate CHANGELOG.md
  const changelogMd = `# WORKFLOW SYSTEM CHANGELOG

## [1.0.0] - ${new Date().toISOString().split('T')[0]}

### Added
- Created initial standalone **Project Workflow Intelligence System** in \`/workflow\`.
- Implemented static code scanner (\`scan-project.ts\`) for NestJS, TypeORM, Next.js, and GraphQL.
- Built interactive HTML Web Viewer in \`workflow/web/index.html\`.
- Generated 7 core architecture documentation reports in \`workflow/generated/\`.
- Integrated multi-source GraphQL validation cross-checker.
- Established strict READ-ONLY boundary for existing application code.
`;

  fs.writeFileSync(path.join(WORKFLOW_DIR, 'CHANGELOG.md'), changelogMd, 'utf-8');

  // 4. Generate README.md
  const readmeMd = `# Workflow Intelligence & Documentation System

The **Workflow Intelligence System** provides static code analysis, end-to-end execution path mapping, and visual workflow inspection for the Bizrok monorepo.

## Available Execution Scripts

Run these standalone scripts using Node or \`npx ts-node\` / \`tsx\`:

\`\`\`bash
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
\`\`\`

## Interactive Visual Web Viewer

Open [workflow/web/index.html](file:///${path.join(WORKFLOW_DIR, 'web/index.html').replace(/\\/g, '/')}) in any browser to inspect interactive workflows, search features, filter issues, and view ER diagrams.
`;

  fs.writeFileSync(path.join(WORKFLOW_DIR, 'README.md'), readmeMd, 'utf-8');

  // 5. Generate sub-reports in generated/
  // database-map.md
  const dbMapMd = `# DATABASE ENTITY & TABLE MAP

Total Entities Detected: **${projectMap.entities.length}**

| Entity Name | Database Table | Source File | Columns | Primary Key | Relations |
| --- | --- | --- | --- | --- | --- |
${projectMap.entities
  .map(
    e =>
      `| **${e.name}** | \`${e.tableName}\` | [\`${e.filePath}\`](file:///${path.join(ROOT_DIR, e.filePath).replace(/\\/g, '/')}) | ${e.columns.length} columns | \`${e.columns.find(c => c.isPrimary)?.name || 'id'}\` | ${e.relations.length} relations |`
  )
  .join('\n')}
`;
  fs.writeFileSync(path.join(GENERATED_DIR, 'database-map.md'), dbMapMd, 'utf-8');

  // api-map.md
  const apiMapMd = `# GRAPHQL & REST API CATALOG

Total GraphQL Operations: **${projectMap.gqlOperations.length}**

| Operation Name | Type | Resolver | In Schema.gql | Admin Consumers | Customer Consumers |
| --- | --- | --- | --- | --- | --- |
${projectMap.gqlOperations
  .map(
    op =>
      `| \`${op.name}\` | **${op.type.toUpperCase()}** | \`${op.resolverId || 'N/A'}\` | ${op.inSchema ? 'Yes' : 'No'} | ${op.adminConsumers.length} | ${op.frontendConsumers.length} |`
  )
  .join('\n')}
`;
  fs.writeFileSync(path.join(GENERATED_DIR, 'api-map.md'), apiMapMd, 'utf-8');

  // issues.md
  const issuesMd = `# ARCHITECTURAL ISSUES REPORT

Total Detected Issues: **${projectMap.issues.length}**

| Issue ID | Severity | Category | Title | Target File | Suggested Action |
| --- | --- | --- | --- | --- | --- |
${projectMap.issues
  .map(
    iss =>
      `| **${iss.id}** | \`${iss.severity}\` | **${iss.category}** | ${iss.title} | \`${iss.filePath || 'N/A'}\` | ${iss.suggestedFix || 'Review statically.'} |`
  )
  .join('\n')}
`;
  fs.writeFileSync(path.join(GENERATED_DIR, 'issues.md'), issuesMd, 'utf-8');

  // backend-workflow.md
  const backendMd = `# BACKEND ARCHITECTURE & SERVICES MAP

Total Services: **${projectMap.services.length}**
Total Resolvers: **${projectMap.resolvers.length}**

### NestJS Services

${projectMap.services.map(s => `- **${s.name}** (\`${s.filePath}\`): Methods: ${s.methods.join(', ') || 'N/A'}`).join('\n')}

### GraphQL Resolvers

${projectMap.resolvers.map(r => `- **${r.name}** (\`${r.filePath}\`): Services Used: ${r.servicesUsed.join(', ') || 'N/A'}`).join('\n')}
`;
  fs.writeFileSync(path.join(GENERATED_DIR, 'backend-workflow.md'), backendMd, 'utf-8');

  // frontend-workflow.md
  const frontendMd = `# CUSTOMER WEBSITE WORKFLOW MAP

Total Customer Pages: **${projectMap.summary.totalCustomerPages}**

${projectMap.frontendPages
  .filter(p => p.app === 'customer')
  .map(p => `- **Route \`${p.route}\`**: [\`${p.filePath}\`](file:///${path.join(ROOT_DIR, p.filePath).replace(/\\/g, '/')})`)
  .join('\n')}
`;
  fs.writeFileSync(path.join(GENERATED_DIR, 'frontend-workflow.md'), frontendMd, 'utf-8');

  // admin-workflow.md
  const adminMd = `# ADMIN PANEL WORKFLOW MAP

Total Admin Pages: **${projectMap.summary.totalAdminPages}**

${projectMap.frontendPages
  .filter(p => p.app === 'admin')
  .map(p => `- **Route \`${p.route}\`**: [\`${p.filePath}\`](file:///${path.join(ROOT_DIR, p.filePath).replace(/\\/g, '/')})`)
  .join('\n')}
`;
  fs.writeFileSync(path.join(GENERATED_DIR, 'admin-workflow.md'), adminMd, 'utf-8');

  // dependency-map.md
  const depMd = `# END-TO-END DEPENDENCY MAP

\`\`\`mermaid
flowchart TD
${projectMap.executionChains
  .map(
    (c, i) =>
      `    subgraph Chain_${i}["${c.feature}"]\n        UI_${i}["${c.pageRoute}"] --> GQL_${i}["${c.gqlOperation}"]\n        GQL_${i} --> Svc_${i}["${c.service}"]\n        Svc_${i} --> DB_${i}[("${c.table}")]\n    end`
  )
  .join('\n')}
\`\`\`
`;
  fs.writeFileSync(path.join(GENERATED_DIR, 'dependency-map.md'), depMd, 'utf-8');

  console.log('✅ All workflow markdown files generated successfully!');
}

if (require.main === module) {
  generateDocumentation();
}
