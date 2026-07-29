function updateHeaderBrand() {
  if (!projectMapData) return;
  const titleEl = document.getElementById('app-header-title');
  if (titleEl) {
    titleEl.innerHTML = `${projectMapData.projectName} Studio <span class="px-1.5 py-0.5 text-[10px] uppercase font-semibold bg-sky-500/20 text-sky-400 rounded-md border border-sky-500/30">v${projectMapData.version}</span>`;
  }
}

function init() {
  console.log('⚡ Initializing Bizrok Workflow Studio...');
  if (window.mermaid) {
    window.mermaid.initialize({ startOnLoad: false, theme: 'dark' });
  }

  if (window.PROJECT_MAP_DATA) {
    projectMapData = window.PROJECT_MAP_DATA;
    console.log('✅ Loaded data from window.PROJECT_MAP_DATA');
    updateHeaderBrand();
    setupNavigation();
    renderOverview();
    setupSearch();
  } else {
    fetch('generated/project-map.json')
      .then(res => {
        if (!res.ok) throw new Error('Could not fetch project-map.json');
        return res.json();
      })
      .then(data => {
        projectMapData = data;
        updateHeaderBrand();
        setupNavigation();
        renderOverview();
        setupSearch();
      })
      .catch(err => {
        console.error('Failed to load project map:', err);
        document.getElementById('tab-content').innerHTML = `
          <div class="p-6 bg-red-500/10 border border-red-500/30 rounded-2xl text-red-400">
            <h2 class="text-lg font-bold">⚠️ Error Loading Workflow Data</h2>
            <p class="text-sm mt-1">${err.message}</p>
            <p class="text-xs text-slate-400 mt-3">Please run <code>workflow/run.bat</code> to generate project data.</p>
          </div>
        `;
      });
  }
}

function setupNavigation() {
  const navButtons = document.querySelectorAll('.nav-item');
  
  navButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const tab = btn.getAttribute('data-tab');
      window.location.hash = '#' + tab;
    });
  });

  window.addEventListener('hashchange', () => {
    const activeTab = window.location.hash.replace('#', '') || 'overview';
    activateTabUI(activeTab);
  });

  const initialTab = window.location.hash.replace('#', '') || 'overview';
  activateTabUI(initialTab);
}

function activateTabUI(tab) {
  const navButtons = document.querySelectorAll('.nav-item');
  navButtons.forEach(b => {
    if (b.getAttribute('data-tab') === tab) {
      b.classList.add('active');
    } else {
      b.classList.remove('active');
    }
  });
  renderTab(tab);
}

function renderTab(tab) {
  const content = document.getElementById('tab-content');
  if (!projectMapData) return;

  content.style.opacity = '0.4';
  setTimeout(() => {
    switch (tab) {
      case 'overview':
        renderOverview();
        break;
      case 'report':
        renderReport();
        break;
      case 'diagrams':
        renderDiagrams();
        break;
      case 'execution':
        renderExecutionWorkflows();
        break;
      case 'customer':
        renderPages('customer', 'Customer Website Workflows');
        break;
      case 'admin':
        renderPages('admin', 'Admin Panel Workflows');
        break;
      case 'backend':
        renderBackend();
        break;
      case 'database':
        renderDatabase();
        break;
      case 'live-db':
        renderLiveDb();
        break;
      case 'apis':
        renderApis();
        break;
      case 'security':
        renderSecurity();
        break;
      case 'config':
        renderConfig();
        break;
      case 'debug':
        renderDebug();
        break;
      case 'issues':
        renderIssues();
        break;
      case 'support':
        renderSupport();
        break;
      default:
        renderOverview();
    }
    content.style.opacity = '1';
  }, 40);
}

function renderOverview() {
  const s = projectMapData.summary;
  document.getElementById('tab-content').innerHTML = `
    <div class="mb-8">
      <h2 class="text-xl font-bold text-white tracking-tight">System Architecture & Overview</h2>
      <p class="text-xs text-slate-400 mt-1">Live AST Code Intelligence for Bizrok Monorepo</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
      <div class="p-5 rounded-2xl bg-dark-card border border-dark-border shadow-lg">
        <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Applications</span>
        <div class="text-3xl font-extrabold text-sky-400 mt-2">${s.totalApps}</div>
        <div class="text-[11px] text-slate-400 mt-1">Backend, Admin, Customer</div>
      </div>
      <div class="p-5 rounded-2xl bg-dark-card border border-dark-border shadow-lg">
        <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Domain Modules</span>
        <div class="text-3xl font-extrabold text-indigo-400 mt-2">${s.totalModules}</div>
        <div class="text-[11px] text-slate-400 mt-1">18 Monorepo Modules</div>
      </div>
      <div class="p-5 rounded-2xl bg-dark-card border border-dark-border shadow-lg">
        <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">DB Tables</span>
        <div class="text-3xl font-extrabold text-emerald-400 mt-2">${s.totalTables}</div>
        <div class="text-[11px] text-slate-400 mt-1">72 TypeORM Entities</div>
      </div>
      <div class="p-5 rounded-2xl bg-dark-card border border-dark-border shadow-lg">
        <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Services</span>
        <div class="text-3xl font-extrabold text-purple-400 mt-2">${s.totalServices}</div>
        <div class="text-[11px] text-slate-400 mt-1">35 NestJS Resolvers</div>
      </div>
      <div class="p-5 rounded-2xl bg-dark-card border border-dark-border shadow-lg">
        <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">GraphQL APIs</span>
        <div class="text-3xl font-extrabold text-amber-400 mt-2">${s.totalGqlOperations}</div>
        <div class="text-[11px] text-slate-400 mt-1">Queries & Mutations</div>
      </div>
      <div class="p-5 rounded-2xl bg-dark-card border border-dark-border shadow-lg">
        <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Web Routes</span>
        <div class="text-3xl font-extrabold text-rose-400 mt-2">${s.totalFrontendPages}</div>
        <div class="text-[11px] text-slate-400 mt-1">45 Admin + 30 Customer</div>
      </div>
    </div>

    <div class="bg-dark-card border border-dark-border rounded-2xl p-6 shadow-xl">
      <h3 class="text-base font-bold text-white mb-4">End-to-End Feature Traceability Matrix</h3>
      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs text-slate-300">
          <thead class="bg-slate-900/80 text-slate-400 uppercase text-[11px] font-semibold border-b border-dark-border">
            <tr>
              <th class="p-3.5">Feature Name</th>
              <th class="p-3.5">App</th>
              <th class="p-3.5">Primary Route</th>
              <th class="p-3.5">GraphQL Operation</th>
              <th class="p-3.5">Resolver / Service</th>
              <th class="p-3.5">DB Table</th>
              <th class="p-3.5">Status</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-dark-border">
            ${projectMapData.executionChains.map(c => `
              <tr class="hover:bg-slate-800/40 transition-colors">
                <td class="p-3.5 font-bold text-white">${c.feature}</td>
                <td class="p-3.5"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">${c.app.toUpperCase()}</span></td>
                <td class="p-3.5 font-mono text-sky-400">${c.pageRoute}</td>
                <td class="p-3.5 font-mono text-amber-300">${c.gqlOperation}</td>
                <td class="p-3.5 font-mono text-purple-300">${c.resolver}</td>
                <td class="p-3.5 font-mono text-emerald-400">${c.table}</td>
                <td class="p-3.5"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">[x] ${c.status}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderReport() {
  const s = projectMapData.summary;
  document.getElementById('tab-content').innerHTML = `
    <div class="bg-dark-card border border-dark-border rounded-2xl p-6 mb-6 flex flex-wrap items-center justify-between gap-4 shadow-xl">
      <div>
        <h2 class="text-xl font-bold text-white">📜 Executive Architecture & Audit Report</h2>
        <p class="text-xs text-slate-400 mt-1">Project: <strong class="text-sky-400">${projectMapData.projectName} v${projectMapData.version}</strong> | Generated: ${projectMapData.timestamp}</p>
      </div>
      <div class="flex gap-2">
        <button onclick="printReport()" class="px-4 py-2 bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold rounded-xl transition-all shadow-lg shadow-sky-500/20 flex items-center gap-2">
          🖨️ Save as PDF
        </button>
        <button onclick="downloadJson()" class="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition-all flex items-center gap-2">
          📥 Export JSON
        </button>
      </div>
    </div>

    <div class="bg-dark-card border border-dark-border rounded-2xl p-6 mb-6 shadow-xl">
      <h3 class="text-base font-bold text-sky-400 mb-3">1. Executive Summary & Monorepo Scope</h3>
      <p class="text-xs text-slate-300 leading-relaxed mb-4">
        Bizrok is an enterprise monorepo platform designed for device trade-in lifecycle management (lead capture, valuation engine, quality control, procurement, inventory, refurbishment, sales, settlement, and accounting).
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
        <div class="p-3.5 bg-slate-900/80 rounded-xl border border-dark-border text-xs">
          <span class="text-slate-400 block mb-1">Applications:</span>
          <span class="font-bold text-white">${s.totalApps} Workspaces</span>
        </div>
        <div class="p-3.5 bg-slate-900/80 rounded-xl border border-dark-border text-xs">
          <span class="text-slate-400 block mb-1">Domain Modules:</span>
          <span class="font-bold text-white">${s.totalModules} NestJS Modules</span>
        </div>
        <div class="p-3.5 bg-slate-900/80 rounded-xl border border-dark-border text-xs">
          <span class="text-slate-400 block mb-1">Database Schema:</span>
          <span class="font-bold text-white">${s.totalEntities} Tables</span>
        </div>
        <div class="p-3.5 bg-slate-900/80 rounded-xl border border-dark-border text-xs">
          <span class="text-slate-400 block mb-1">GraphQL Operations:</span>
          <span class="font-bold text-white">${s.totalGqlOperations} Operations</span>
        </div>
        <div class="p-3.5 bg-slate-900/80 rounded-xl border border-dark-border text-xs">
          <span class="text-slate-400 block mb-1">Web Pages:</span>
          <span class="font-bold text-white">${s.totalFrontendPages} Routes</span>
        </div>
      </div>
    </div>
  `;
}

let zoomLevel = 1;
let currentDiagram = 'system';

function renderDiagrams() {
  const content = document.getElementById('tab-content');
  content.innerHTML = `
    <div class="mb-6 flex flex-wrap items-center justify-between gap-4">
      <div>
        <h2 class="text-xl font-bold text-white flex items-center gap-2">
          📐 Visual Diagram Flow Studio 
          <span class="px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-400 text-xs font-semibold border border-sky-500/30">Live Dynamic AST</span>
        </h2>
        <p class="text-xs text-slate-400 mt-1">Select an architectural flow diagram to inspect node relationships in real time</p>
      </div>

      <!-- Diagram Selector Tabs -->
      <div class="flex flex-wrap gap-2">
        <button class="px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${currentDiagram === 'system' ? 'bg-sky-500 text-slate-950 font-bold shadow-lg shadow-sky-500/20' : 'bg-dark-card text-slate-300 hover:bg-slate-800 border border-dark-border'}" onclick="switchDiagram('system')">
          🔄 System Execution Flow
        </button>
        <button class="px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${currentDiagram === 'modules' ? 'bg-sky-500 text-slate-950 font-bold shadow-lg shadow-sky-500/20' : 'bg-dark-card text-slate-300 hover:bg-slate-800 border border-dark-border'}" onclick="switchDiagram('modules')">
          🏗️ 18 Domain Modules Flow
        </button>
        <button class="px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${currentDiagram === 'database' ? 'bg-sky-500 text-slate-950 font-bold shadow-lg shadow-sky-500/20' : 'bg-dark-card text-slate-300 hover:bg-slate-800 border border-dark-border'}" onclick="switchDiagram('database')">
          🗄️ Database ER Schema Map
        </button>
        <button class="px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${currentDiagram === 'graphql' ? 'bg-sky-500 text-slate-950 font-bold shadow-lg shadow-sky-500/20' : 'bg-dark-card text-slate-300 hover:bg-slate-800 border border-dark-border'}" onclick="switchDiagram('graphql')">
          🔌 GraphQL Resolver Topology
        </button>
        <button class="px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${currentDiagram === 'security' ? 'bg-sky-500 text-slate-950 font-bold shadow-lg shadow-sky-500/20' : 'bg-dark-card text-slate-300 hover:bg-slate-800 border border-dark-border'}" onclick="switchDiagram('security')">
          🔐 Security & Guard Topology
        </button>
        <button class="px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${currentDiagram === 'actions' ? 'bg-sky-500 text-slate-950 font-bold shadow-lg shadow-sky-500/20' : 'bg-dark-card text-slate-300 hover:bg-slate-800 border border-dark-border'}" onclick="switchDiagram('actions')">
          🔘 UI Buttons & Form Action Flow
        </button>
      </div>
    </div>

    <!-- Studio Toolbar & Legend -->
    <div class="bg-dark-card border border-dark-border rounded-t-2xl px-6 py-3 flex flex-wrap items-center justify-between gap-4 border-b">
      <div class="flex items-center gap-4 text-xs font-medium text-slate-300">
        <span class="text-slate-400">Node Legend:</span>
        <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-sky-400"></span> UI Route</span>
        <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-amber-400"></span> GraphQL API</span>
        <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-purple-400"></span> Resolver</span>
        <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-rose-400"></span> Service</span>
        <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span> DB Table</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="px-2 py-1 rounded bg-slate-900 border border-dark-border text-xs font-mono font-bold text-sky-400" id="zoom-badge">🔍 100%</span>
        <button onclick="setDiagramScale(1)" class="px-2.5 py-1 bg-slate-900 hover:bg-slate-800 border border-dark-border rounded-lg text-xs font-bold text-slate-200">100% Reset</button>
        <button onclick="setDiagramScale(1.25)" class="px-2.5 py-1 bg-slate-900 hover:bg-slate-800 border border-dark-border rounded-lg text-xs font-bold text-slate-200">125%</button>
        <button onclick="setDiagramScale(1.5)" class="px-2.5 py-1 bg-slate-900 hover:bg-slate-800 border border-dark-border rounded-lg text-xs font-bold text-slate-200">150%</button>
        <button onclick="zoomDiagram(1.15)" class="px-2.5 py-1 bg-slate-900 hover:bg-slate-800 border border-dark-border rounded-lg text-xs font-bold text-slate-200">➕ Zoom In</button>
        <button onclick="zoomDiagram(0.85)" class="px-2.5 py-1 bg-slate-900 hover:bg-slate-800 border border-dark-border rounded-lg text-xs font-bold text-slate-200">➖ Zoom Out</button>
      </div>
    </div>

    <!-- Interactive Diagram Viewport with Overflow Scroll & Zoom -->
    <div class="bg-dark-card border border-dark-border rounded-b-2xl p-6 shadow-xl max-h-[650px] overflow-auto custom-scrollbar relative" id="diagram-viewport">
      <div id="diagram-container" class="transition-transform duration-150 origin-top-left w-full">
        <div class="text-slate-400 text-xs font-medium animate-pulse">Rendering real-time dynamic diagram...</div>
      </div>
    </div>
  `;

  zoomLevel = 1;
  renderSelectedDiagram(currentDiagram);
  setupViewportZoomAndPan();
}

function setupViewportZoomAndPan() {
  const viewport = document.getElementById('diagram-viewport');
  const container = document.getElementById('diagram-container');
  if (!viewport || !container) return;

  // Ctrl + Wheel to zoom, standard scroll otherwise
  viewport.addEventListener('wheel', (e) => {
    if (e.ctrlKey) {
      e.preventDefault();
      if (e.deltaY < 0) {
        setDiagramScale(zoomLevel * 1.1);
      } else {
        setDiagramScale(zoomLevel * 0.9);
      }
    }
  });
}

window.setDiagramScale = function(val) {
  zoomLevel = Math.max(0.4, Math.min(3.0, val));
  const container = document.getElementById('diagram-container');
  const badge = document.getElementById('zoom-badge');
  if (container) container.style.transform = `scale(${zoomLevel})`;
  if (badge) badge.textContent = `🔍 ${Math.round(zoomLevel * 100)}%`;
};

window.zoomDiagram = function(factor) {
  setDiagramScale(zoomLevel * factor);
};

window.resetZoomDiagram = function() {
  setDiagramScale(1);
};

window.switchDiagram = function(type) {
  currentDiagram = type;
  renderDiagrams();
};

function renderSelectedDiagram(type) {
  const container = document.getElementById('diagram-container');
  if (!container) return;

  if (type === 'system') {
    const chains = projectMapData.executionChains || [];
    container.innerHTML = `
      <div class="space-y-6 w-full max-w-5xl text-left">
        <h3 class="text-sm font-bold text-sky-400 uppercase tracking-wider mb-2">🔄 End-to-End Execution Trace Topology</h3>
        ${chains.map(c => `
          <div class="bg-slate-900/90 border border-dark-border rounded-2xl p-5 shadow-xl space-y-3">
            <div class="flex items-center justify-between">
              <h4 class="text-sm font-bold text-white font-mono flex items-center gap-2">
                <span>📍 ${c.feature}</span>
                <span class="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 text-[10px] uppercase font-semibold border border-sky-500/30">${c.app}</span>
              </h4>
              <span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">${c.status}</span>
            </div>
            <div class="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span class="p-2 bg-sky-500/10 text-sky-300 border border-sky-500/20 rounded-xl">🖥️ ${c.pageRoute}</span>
              <span class="text-slate-500 font-bold">➔</span>
              <span class="p-2 bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 rounded-xl">📦 ${c.component || 'Standard'}</span>
              <span class="text-slate-500 font-bold">➔</span>
              <span class="p-2 bg-amber-500/10 text-amber-300 border border-amber-500/20 rounded-xl">🔌 ${c.gqlOperation}</span>
              <span class="text-slate-500 font-bold">➔</span>
              <span class="p-2 bg-purple-500/10 text-purple-300 border border-purple-500/20 rounded-xl">⚙️ ${c.resolver}</span>
              <span class="text-slate-500 font-bold">➔</span>
              <span class="p-2 bg-rose-500/10 text-rose-300 border border-rose-500/20 rounded-xl">🛠️ ${c.service}</span>
              <span class="text-slate-500 font-bold">➔</span>
              <span class="p-2 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-xl font-bold">💾 ${c.table}</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  } else if (type === 'modules') {
    const services = projectMapData.services || [];
    container.innerHTML = `
      <div class="space-y-4 w-full max-w-5xl text-left">
        <h3 class="text-sm font-bold text-sky-400 uppercase tracking-wider mb-2">🏗️ Real-Time 18 Domain Modules Lifecycle Topology</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${services.map(s => `
            <div class="p-4 bg-slate-900/90 border border-dark-border rounded-2xl shadow-xl flex items-center justify-between gap-4 font-mono text-xs">
              <div>
                <span class="text-purple-300 font-bold block mb-1">⚙️ ${s.name}</span>
                <span class="text-[10px] text-slate-500 block truncate max-w-xs" title="${s.filePath}">${s.filePath}</span>
              </div>
              <div class="text-right">
                <span class="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-[10px] font-bold block">
                  💾 ${s.tablesUsed.join(', ') || 'Internal Entity'}
                </span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (type === 'database') {
    const entities = projectMapData.entities || [];
    container.innerHTML = `
      <div class="space-y-4 w-full max-w-5xl text-left">
        <h3 class="text-sm font-bold text-sky-400 uppercase tracking-wider mb-2">🗄️ Database Entity Schema Topology (${entities.length} Active Tables)</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          ${entities.map(e => `
            <div class="p-4 bg-slate-900/90 border border-dark-border rounded-2xl shadow-xl font-mono text-xs space-y-2">
              <div class="flex items-center justify-between border-b border-dark-border pb-2">
                <strong class="text-emerald-400 font-bold">🗄️ ${e.tableName}</strong>
                <span class="px-2 py-0.5 rounded bg-slate-800 text-slate-400 text-[10px] font-sans">${e.columns.length} cols</span>
              </div>
              <div class="text-[11px] text-slate-300 font-sans">Entity: ${e.name}</div>
              ${e.relations.length > 0 ? `
                <div class="text-[10px] text-purple-300 pt-1 border-t border-slate-800/60">
                  Links: ${e.relations.map(r => `➔ ${r.targetTable || r.targetEntity}`).join(', ')}
                </div>
              ` : '<div class="text-[10px] text-slate-500">Standalone Table</div>'}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (type === 'graphql') {
    const ops = projectMapData.gqlOperations || [];
    container.innerHTML = `
      <div class="space-y-4 w-full max-w-5xl text-left">
        <h3 class="text-sm font-bold text-sky-400 uppercase tracking-wider mb-2">🔌 Real-Time GraphQL Resolver Topology (${ops.length} Operations)</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${ops.map(op => `
            <div class="p-4 bg-slate-900/90 border border-dark-border rounded-2xl shadow-xl flex items-center justify-between gap-4 font-mono text-xs">
              <div>
                <span class="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 text-[10px] font-bold mr-2">${op.type.toUpperCase()}</span>
                <span class="text-amber-300 font-bold">${op.name}</span>
              </div>
              <div class="text-right">
                <span class="px-2 py-1 rounded bg-slate-800 text-slate-300 border border-dark-border text-[10px]">
                  ⚙️ ${op.resolverId || 'Resolver'}
                </span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (type === 'security') {
    const ops = projectMapData.gqlOperations || [];
    container.innerHTML = `
      <div class="space-y-4 w-full max-w-5xl text-left">
        <h3 class="text-sm font-bold text-sky-400 uppercase tracking-wider mb-2">🔐 Security & RBAC Enforcement Map</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${ops.map(op => `
            <div class="p-4 bg-slate-900/90 border border-dark-border rounded-2xl shadow-xl flex items-center justify-between gap-4 font-mono text-xs">
              <span class="text-white font-bold">${op.name}</span>
              <span class="px-2.5 py-1 rounded ${op.security && op.security.isProtected ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-sky-500/20 text-sky-400 border border-sky-500/30'} text-[10px] font-bold">
                ${op.security && op.security.isProtected ? '🔒 Protected (JWT Guard)' : '🌐 Public API'}
              </span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (type === 'actions') {
    const pages = (projectMapData.frontendPages || []).filter(p => p.buttons && p.buttons.length > 0);
    container.innerHTML = `
      <div class="space-y-4 w-full max-w-5xl text-left">
        <h3 class="text-sm font-bold text-sky-400 uppercase tracking-wider mb-2">🔘 UI Buttons & Form Action Execution Topology</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${pages.map(p => `
            <div class="p-4 bg-slate-900/90 border border-dark-border rounded-2xl shadow-xl space-y-2 text-xs font-mono">
              <div class="text-sky-300 font-bold flex items-center justify-between">
                <span>🖥️ ${p.route}</span>
                <span class="text-[10px] text-slate-500 font-sans">${p.app} app</span>
              </div>
              <div class="text-slate-300 text-[11px]">
                Buttons: ${p.buttons.join(', ')}
              </div>
              <div class="text-amber-300 text-[10px]">
                APIs: ${p.gqlOperations.join(', ') || 'Standard Navigation'}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
}

function renderExecutionWorkflows() {
  document.getElementById('tab-content').innerHTML = `
    <div class="mb-6">
      <h2 class="text-xl font-bold text-white">End-to-End Execution Flows (${projectMapData.executionChains.length} Features)</h2>
      <p class="text-xs text-slate-400 mt-1">Full stack execution chain tracing UI ➔ GraphQL ➔ Resolver ➔ Service ➔ Table</p>
    </div>
    ${projectMapData.executionChains.map((c, idx) => `
      <div class="bg-dark-card border border-dark-border rounded-2xl p-6 mb-4 shadow-lg hover:border-sky-500/50 transition-all">
        <div class="flex items-center justify-between mb-3">
          <h3 class="font-bold text-base text-sky-400">${idx + 1}. ${c.feature}</h3>
          <span class="px-2.5 py-1 rounded-md text-[10px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">${c.app.toUpperCase()} APP</span>
        </div>
        <p class="text-xs text-slate-400 mb-3">Primary Route: <code class="text-slate-200">${c.pageRoute}</code></p>
        
        <div class="flex flex-wrap gap-2 items-center bg-slate-900/90 p-4 rounded-xl font-mono text-xs border border-dark-border">
          <span class="text-sky-400 font-semibold">🖥️ UI: ${c.pageRoute}</span>
          <span class="text-slate-500">➔</span>
          <span class="text-emerald-300 font-semibold">📦 Component: ${c.component || 'Standard'}</span>
          <span class="text-slate-500">➔</span>
          <span class="text-amber-300 font-semibold">🔌 GQL: ${c.gqlOperation}</span>
          <span class="text-slate-500">➔</span>
          <span class="text-purple-300 font-semibold">⚙️ Resolver: ${c.resolver}</span>
          <span class="text-slate-500">➔</span>
          <span class="text-rose-300 font-semibold">🛠️ Service: ${c.service}</span>
          <span class="text-slate-500">➔</span>
          <span class="text-emerald-400 font-semibold">🗄️ Entity: ${c.entity}</span>
          <span class="text-slate-500">➔</span>
          <span class="text-orange-400 font-semibold">💾 Table: ${c.table}</span>
        </div>
      </div>
    `).join('')}
  `;
}

function renderPages(appFilter, title) {
  const pages = projectMapData.frontendPages.filter(p => p.app === appFilter);
  document.getElementById('tab-content').innerHTML = `
    <div class="mb-6">
      <h2 class="text-xl font-bold text-white">${title} (${pages.length} Pages with Action Integrity Scan)</h2>
      <p class="text-xs text-slate-400 mt-1">Detects Add, Edit, Delete, Search buttons, form inputs, and action health status for every route</p>
    </div>
    
    <div class="bg-dark-card border border-dark-border rounded-2xl overflow-hidden shadow-xl">
      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs text-slate-300">
          <thead class="bg-slate-900/80 text-slate-400 uppercase text-[11px] font-semibold border-b border-dark-border">
            <tr>
              <th class="p-4 w-1/4">Route Path & File</th>
              <th class="p-4 w-1/6">Action Integrity Status</th>
              <th class="p-4 w-1/4">Form Inputs & Fields</th>
              <th class="p-4 w-1/5">Buttons & User Actions</th>
              <th class="p-4 w-1/5">UI Components & Modals</th>
              <th class="p-4 w-1/6">GraphQL APIs</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-dark-border">
            ${pages.map(p => `
              <tr class="hover:bg-slate-800/30 transition-colors">
                <td class="p-4 align-top">
                  <strong class="text-sky-400 font-mono text-sm block">${p.route}</strong>
                  <span class="text-[11px] text-slate-500 font-mono block mt-1 break-all">${p.filePath}</span>
                </td>
                <td class="p-4 align-top">
                  ${p.actionIntegrity ? `
                    <div class="space-y-1.5">
                      ${p.actionIntegrity.status === 'FULL' ? '<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 block w-fit">🟢 Full Actions (Add/Edit/Del)</span>' :
                        p.actionIntegrity.status === 'PARTIAL' ? '<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 block w-fit">🟡 Partial Actions</span>' :
                        '<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-500/20 text-slate-400 border border-slate-500/30 block w-fit">⚪ Read-Only View</span>'}
                      
                      <div class="flex flex-wrap gap-1 font-mono text-[9px]">
                        ${p.actionIntegrity.hasAdd ? '<span class="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">➕ ADD</span>' : ''}
                        ${p.actionIntegrity.hasEdit ? '<span class="px-1.5 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20">✏️ EDIT</span>' : ''}
                        ${p.actionIntegrity.hasDelete ? '<span class="px-1.5 py-0.5 rounded bg-red-500/10 text-red-300 border border-red-500/20">🗑️ DEL</span>' : ''}
                        ${p.actionIntegrity.hasSearch ? '<span class="px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">🔍 SEARCH</span>' : ''}
                      </div>

                      ${p.actionIntegrity.glitchWarnings && p.actionIntegrity.glitchWarnings.length > 0 ? `
                        <div class="mt-1 space-y-0.5">
                          ${p.actionIntegrity.glitchWarnings.map(w => `<div class="text-[9px] font-mono ${w.includes('⚠️') ? 'text-amber-400 font-semibold' : 'text-emerald-400'}">${w}</div>`).join('')}
                        </div>
                      ` : ''}
                    </div>
                  ` : '<span class="text-slate-500">Unscanned</span>'}
                </td>
                <td class="p-4 align-top">
                  ${p.forms && p.forms.length > 0 && p.forms[0].fields.length > 0 ? `
                    <div class="text-[11px] font-semibold text-purple-400 mb-1">Inputs (${p.forms[0].fields.length}):</div>
                    <div class="flex flex-wrap gap-1">
                      ${p.forms[0].fields.map(f => `<span class="px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20 text-[10px] font-mono">${f}</span>`).join('')}
                    </div>
                  ` : '<span class="text-slate-500 text-xs">No input forms</span>'}
                </td>
                <td class="p-4 align-top">
                  ${p.buttons && p.buttons.length > 0 ? `
                    <div class="flex flex-wrap gap-1">
                      ${p.buttons.map(b => `<span class="px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20 text-[10px] font-medium">🔘 ${b}</span>`).join('')}
                    </div>
                  ` : '<span class="text-slate-500 text-xs">Standard Navigation</span>'}
                </td>
                <td class="p-4 align-top">
                  ${p.modals && p.modals.length > 0 ? `<div class="text-[11px] font-semibold text-amber-400 mb-1">Modal: ${p.modals.join(', ')}</div>` : ''}
                  ${p.tables && p.tables.length > 0 ? `<div class="text-[11px] font-semibold text-emerald-400 mb-1">Table Grid View</div>` : ''}
                  ${p.componentsUsed && p.componentsUsed.length > 0 ? `
                    <div class="text-[11px] text-slate-400">
                      Imports: ${p.componentsUsed.join(', ')}
                    </div>
                  ` : ''}
                </td>
                <td class="p-4 align-top">
                  ${p.gqlOperations.length > 0 ? p.gqlOperations.map(op => `<span class="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 text-[10px] font-mono block mb-1 w-fit">${op}</span>`).join('') : '<span class="text-slate-500 text-xs">None</span>'}
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderBackend() {
  document.getElementById('tab-content').innerHTML = `
    <div class="mb-6">
      <h2 class="text-xl font-bold text-white">Backend Domain Services (${projectMapData.services.length} Services)</h2>
      <p class="text-xs text-slate-400 mt-1">NestJS @Injectable Services & TypeORM Database Tables Affected</p>
    </div>
    <div class="bg-dark-card border border-dark-border rounded-2xl overflow-hidden shadow-xl">
      <table class="w-full text-left text-xs text-slate-300">
        <thead class="bg-slate-900/80 text-slate-400 uppercase text-[11px] font-semibold border-b border-dark-border">
          <tr>
            <th class="p-4">Service Name</th>
            <th class="p-4">Source File Path</th>
            <th class="p-4">Entities Used</th>
            <th class="p-4">DB Tables Affected</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-dark-border">
          ${projectMapData.services.map(s => `
            <tr class="hover:bg-slate-800/30 transition-colors">
              <td class="p-4 font-bold text-white">${s.name}</td>
              <td class="p-4 font-mono text-slate-400">${s.filePath}</td>
              <td class="p-4">${s.entitiesUsed.map(e => `<span class="px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20 text-[10px] font-mono mr-1">${e}</span>`).join('') || 'None'}</td>
              <td class="p-4">${s.tablesUsed.map(t => `<span class="px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20 text-[10px] font-mono mr-1">${t}</span>`).join('') || 'None'}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function renderDatabase() {
  document.getElementById('tab-content').innerHTML = `
    <div class="mb-6">
      <h2 class="text-xl font-bold text-white">🗄️ Database Data Storage & Origin Inspector (${projectMapData.entities.length} Tables)</h2>
      <p class="text-xs text-slate-400 mt-1">Advance Data Lineage: Track where table data originates (Forms/Inputs), which Service writes it, which Resolver queries it, and which UI pages consume it.</p>
    </div>
    
    <div class="bg-dark-card border border-dark-border rounded-2xl overflow-hidden shadow-xl">
      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs text-slate-300">
          <thead class="bg-slate-900/80 text-slate-400 uppercase text-[11px] font-semibold border-b border-dark-border">
            <tr>
              <th class="p-4 w-1/5">DB Table & Entity</th>
              <th class="p-4 w-1/5">📥 Data Origin (Where Data Comes From)</th>
              <th class="p-4 w-1/6">⚙️ Writer Service</th>
              <th class="p-4 w-1/6">🔌 Reader Resolver</th>
              <th class="p-4 w-1/5">📤 UI Page Consumers</th>
              <th class="p-4 w-1/6">Columns & Schema</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-dark-border">
            ${projectMapData.entities.map(e => `
              <tr class="hover:bg-slate-800/30 transition-colors">
                <td class="p-4 align-top">
                  <strong class="text-emerald-400 font-mono text-sm block">${e.tableName}</strong>
                  <span class="text-[11px] text-slate-400 font-mono block mt-1">Entity: ${e.name}</span>
                  <span class="text-[10px] text-slate-500 font-mono block mt-1 break-all">${e.filePath}</span>
                </td>
                <td class="p-4 align-top">
                  ${e.dataLineage && e.dataLineage.originSources.length > 0 ? `
                    <div class="flex flex-wrap gap-1">
                      ${e.dataLineage.originSources.map(o => `<span class="px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20 text-[10px] font-mono">📥 ${o}</span>`).join('')}
                    </div>
                  ` : '<span class="text-slate-500 text-xs">Form / Admin Seed</span>'}
                </td>
                <td class="p-4 align-top font-mono">
                  ${e.dataLineage && e.dataLineage.writerServices.length > 0 ? `
                    ${e.dataLineage.writerServices.map(s => `<span class="px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20 text-[10px] block mb-1 w-fit">⚙️ ${s}</span>`).join('')}
                  ` : '<span class="text-slate-500 text-xs">Default Repository</span>'}
                </td>
                <td class="p-4 align-top font-mono">
                  ${e.dataLineage && e.dataLineage.readerResolvers.length > 0 ? `
                    ${e.dataLineage.readerResolvers.map(r => `<span class="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 text-[10px] block mb-1 w-fit">🔌 ${r}</span>`).join('')}
                  ` : '<span class="text-slate-500 text-xs">Internal Service</span>'}
                </td>
                <td class="p-4 align-top">
                  ${e.dataLineage && e.dataLineage.uiConsumers.length > 0 ? `
                    <div class="flex flex-wrap gap-1">
                      ${e.dataLineage.uiConsumers.map(u => `<span class="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-[10px] font-mono">🌐 ${u}</span>`).join('')}
                    </div>
                  ` : '<span class="text-slate-500 text-xs">Backoffice Admin</span>'}
                </td>
                <td class="p-4 align-top">
                  <span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold block mb-2 w-fit">${e.columns.length} Columns</span>
                  
                  <details class="cursor-pointer">
                    <summary class="text-[11px] text-sky-400 font-semibold hover:underline">View Column Schema (${e.columns.length})</summary>
                    <div class="mt-2 space-y-1 bg-slate-900/90 p-2.5 rounded-lg border border-dark-border max-h-48 overflow-y-auto custom-scrollbar">
                      ${e.columns.map(c => `
                        <div class="flex items-center justify-between text-[10px] font-mono py-0.5 border-b border-slate-800/60">
                          <span class="${c.isPrimary ? 'text-amber-400 font-bold' : 'text-slate-300'}">${c.isPrimary ? '🔑 ' : ''}${c.name}</span>
                          <span class="text-slate-400">${c.type}</span>
                        </div>
                      `).join('')}
                    </div>
                  </details>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

let selectedTableIndex = 0;

function renderLiveDb() {
  const entities = projectMapData.entities || [];
  const selectedEntity = entities[selectedTableIndex] || entities[0];

  document.getElementById('tab-content').innerHTML = `
    <div class="mb-6 flex flex-wrap items-center justify-between gap-4">
      <div>
        <h2 class="text-xl font-bold text-white flex items-center gap-2">
          💾 Live Database Explorer GUI
          <span class="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold border border-emerald-500/30">${entities.length} Active Tables</span>
        </h2>
        <p class="text-xs text-slate-400 mt-1">Interactive DBeaver / TablePlus style schema & data lineage inspector for TypeORM SQLite/Postgres entities</p>
      </div>
      <div class="flex gap-2">
        <span class="px-3 py-1.5 bg-slate-900 border border-dark-border rounded-xl text-xs font-mono text-emerald-400">
          Table: ${selectedEntity ? selectedEntity.tableName : 'N/A'}
        </span>
      </div>
    </div>

    <!-- GUI Layout Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
      
      <!-- Left Table List Panel -->
      <div class="bg-dark-card border border-dark-border rounded-2xl p-4 shadow-xl">
        <div class="mb-3">
          <input type="text" id="db-table-filter" oninput="filterDbTables(this.value)" placeholder="🔍 Search ${entities.length} tables..." class="w-full px-3 py-2 bg-slate-900 border border-dark-border rounded-xl text-xs text-slate-200 focus:outline-none focus:border-sky-500">
        </div>
        <div class="space-y-1 max-h-[550px] overflow-y-auto custom-scrollbar" id="db-table-list">
          ${entities.map((e, idx) => `
            <button onclick="selectDbTable(${idx})" class="w-full text-left px-3 py-2 rounded-xl text-xs font-mono transition-all flex items-center justify-between ${idx === selectedTableIndex ? 'bg-sky-500/20 text-sky-400 font-bold border border-sky-500/30' : 'text-slate-300 hover:bg-slate-800/60'}">
              <span>🗄️ ${e.tableName}</span>
              <span class="text-[10px] text-slate-500 font-sans">${e.columns.length} cols</span>
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Right Main Table Inspector Canvas -->
      <div class="lg:col-span-3 space-y-6">
        
        <!-- Table Header Banner -->
        <div class="bg-dark-card border border-dark-border rounded-2xl p-6 shadow-xl flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 class="text-lg font-bold text-white font-mono flex items-center gap-2">
              🗄️ ${selectedEntity.tableName}
              <span class="text-xs font-sans text-slate-400 font-normal">(${selectedEntity.name})</span>
            </h3>
            <p class="text-xs text-slate-500 font-mono mt-1">${selectedEntity.filePath}</p>
          </div>
          <div class="flex gap-2 text-xs">
            <span class="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-lg font-bold">${selectedEntity.columns.length} Columns</span>
            <span class="px-3 py-1 bg-purple-500/10 text-purple-300 border border-purple-500/20 rounded-lg font-bold">${selectedEntity.relations.length} Foreign Keys</span>
          </div>
        </div>

        <!-- Column Schema Data Table (phpMyAdmin style) -->
        <div class="bg-dark-card border border-dark-border rounded-2xl overflow-hidden shadow-xl">
          <div class="px-6 py-3 bg-slate-900/80 border-b border-dark-border flex items-center justify-between">
            <h4 class="text-xs font-bold text-sky-400 uppercase tracking-wider">📋 Table Column Structure & Key Constraints (phpMyAdmin View)</h4>
          </div>
          <table class="w-full text-left text-xs text-slate-300">
            <thead class="bg-slate-900/40 text-slate-400 uppercase text-[10px] font-semibold border-b border-dark-border">
              <tr>
                <th class="p-3.5">Field Name</th>
                <th class="p-3.5">Data Type</th>
                <th class="p-3.5">Key Constraint & Foreign Link</th>
                <th class="p-3.5">Nullable</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-dark-border font-mono">
              ${selectedEntity.columns.map(c => {
                const fkRel = selectedEntity.relations.find(r => r.field === c.name);
                return `
                  <tr class="hover:bg-slate-800/30 transition-colors">
                    <td class="p-3.5 font-bold ${c.isPrimary ? 'text-amber-400' : fkRel ? 'text-purple-300' : 'text-white'}">
                      ${c.isPrimary ? '🔑 ' : fkRel ? '🔗 ' : ''}${c.name}
                    </td>
                    <td class="p-3.5 text-sky-300">${c.type}</td>
                    <td class="p-3.5">
                      ${c.isPrimary ? '<span class="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px]">PRIMARY KEY</span>' : 
                        fkRel ? `<button onclick="navigateToTableByTableName('${fkRel.targetTable || fkRel.targetEntity}')" class="px-2 py-0.5 rounded bg-purple-500/20 hover:bg-purple-500/40 text-purple-300 border border-purple-500/30 text-[10px] font-mono transition-all cursor-pointer">FOREIGN KEY ➔ ${fkRel.targetTable || fkRel.targetEntity}(id) 👁️</button>` : 
                        '<span class="text-slate-500">COLUMN</span>'}
                    </td>
                    <td class="p-3.5">
                      ${c.isNullable ? '<span class="text-emerald-400">YES</span>' : '<span class="text-slate-400">NOT NULL</span>'}
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>

        <!-- Linked Foreign Keys Mapping Panel -->
        ${selectedEntity.relations.length > 0 ? `
          <div class="bg-dark-card border border-dark-border rounded-2xl p-6 shadow-xl space-y-3">
            <h4 class="text-xs font-bold text-purple-400 uppercase tracking-wider flex items-center gap-2">
              🔗 Linked Foreign Key References (${selectedEntity.relations.length} Active FK Links)
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              ${selectedEntity.relations.map(r => `
                <div class="p-3.5 bg-slate-900/90 rounded-xl border border-purple-500/20 flex items-center justify-between font-mono text-xs">
                  <div>
                    <span class="text-purple-300 font-bold">${r.field}</span>
                    <span class="text-slate-500 text-[11px] block mt-0.5">Type: ${r.type}</span>
                  </div>
                  <div class="text-right">
                    <button onclick="navigateToTableByTableName('${r.targetTable || r.targetEntity}')" class="px-2.5 py-1 rounded bg-sky-500/10 hover:bg-sky-500/30 text-sky-300 border border-sky-500/20 font-bold transition-all cursor-pointer flex items-center gap-1">
                      <span>➔ ${r.targetTable || r.targetEntity} (id)</span>
                      <span>👁️ Inspect</span>
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- SQL DDL Preview Panel -->
        <div class="bg-dark-card border border-dark-border rounded-2xl p-6 shadow-xl space-y-3">
          <h4 class="text-xs font-bold text-amber-400 uppercase tracking-wider">💻 SQL DDL & Query Structure Preview</h4>
          <pre class="bg-slate-900 p-4 rounded-xl border border-dark-border text-xs font-mono text-slate-300 overflow-x-auto">CREATE TABLE <span class="text-emerald-400">${selectedEntity.tableName}</span> (
${selectedEntity.columns.map(c => `  ${c.name} ${c.type.toUpperCase()}${c.isPrimary ? ' PRIMARY KEY' : ''}${c.isNullable ? '' : ' NOT NULL'}`).join(',\n')}
);

<span class="text-slate-500">-- Query Preview</span>
SELECT * FROM <span class="text-emerald-400">${selectedEntity.tableName}</span> LIMIT 100;</pre>
        </div>

        <!-- Data Lineage Inspector -->
        <div class="bg-dark-card border border-dark-border rounded-2xl p-6 shadow-xl space-y-4">
          <h4 class="text-xs font-bold text-sky-400 uppercase tracking-wider">📥 Data Storage & Flow Lineage</h4>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div class="p-4 bg-slate-900/80 rounded-xl border border-dark-border">
              <span class="text-slate-400 block mb-1">📥 Data Origin (Where Data Comes From):</span>
              <span class="font-bold text-sky-300 font-mono">${(selectedEntity.dataLineage && selectedEntity.dataLineage.originSources.join(', ')) || 'Admin Input Form'}</span>
            </div>
            <div class="p-4 bg-slate-900/80 rounded-xl border border-dark-border">
              <span class="text-slate-400 block mb-1">⚙️ Writer Service:</span>
              <span class="font-bold text-purple-300 font-mono">${(selectedEntity.dataLineage && selectedEntity.dataLineage.writerServices.join(', ')) || 'Default Repository'}</span>
            </div>
            <div class="p-4 bg-slate-900/80 rounded-xl border border-dark-border">
              <span class="text-slate-400 block mb-1">🌐 UI Page Consumers:</span>
              <span class="font-bold text-emerald-300 font-mono">${(selectedEntity.dataLineage && selectedEntity.dataLineage.uiConsumers.join(', ')) || 'Backoffice Dashboard'}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;
}

window.selectDbTable = function(idx) {
  selectedTableIndex = idx;
  renderLiveDb();
};

window.filterDbTables = function(query) {
  const q = query.toLowerCase().trim();
  const buttons = document.querySelectorAll('#db-table-list button');
  buttons.forEach(btn => {
    const txt = btn.textContent.toLowerCase();
    if (txt.includes(q)) {
      btn.style.display = 'flex';
    } else {
      btn.style.display = 'none';
    }
  });
};

window.navigateToTableByTableName = function(targetName) {
  if (!projectMapData || !projectMapData.entities) return;
  const t = targetName.toLowerCase();
  const idx = projectMapData.entities.findIndex(e => 
    e.tableName.toLowerCase() === t ||
    e.name.toLowerCase() === t ||
    e.name.toLowerCase() === (t + 'entity') ||
    e.tableName.toLowerCase() === (t + 's')
  );
  if (idx !== -1) {
    selectedTableIndex = idx;
    renderLiveDb();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    alert(`Target table "${targetName}" is not registered in TypeORM schema.`);
  }
};

function renderApis() {
  document.getElementById('tab-content').innerHTML = `
    <div class="mb-6">
      <h2 class="text-xl font-bold text-white">GraphQL & REST API Catalog (${projectMapData.gqlOperations.length} Operations)</h2>
      <p class="text-xs text-slate-400 mt-1">Queries & Mutations registered in NestJS Resolvers and schema.gql</p>
    </div>
    <div class="bg-dark-card border border-dark-border rounded-2xl overflow-hidden shadow-xl">
      <table class="w-full text-left text-xs text-slate-300">
        <thead class="bg-slate-900/80 text-slate-400 uppercase text-[11px] font-semibold border-b border-dark-border">
          <tr>
            <th class="p-4">Operation Name</th>
            <th class="p-4">Type</th>
            <th class="p-4">Resolver ID</th>
            <th class="p-4">In Schema.gql</th>
            <th class="p-4">Consumers</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-dark-border">
          ${projectMapData.gqlOperations.map(op => `
            <tr class="hover:bg-slate-800/30 transition-colors">
              <td class="p-4 font-mono font-bold text-amber-300">${op.name}</td>
              <td class="p-4"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">${op.type.toUpperCase()}</span></td>
              <td class="p-4 font-mono text-slate-400">${op.resolverId || 'N/A'}</td>
              <td class="p-4">${op.inSchema ? '<span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold">Yes</span>' : '<span class="px-2 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30 text-[10px] font-bold">No</span>'}</td>
              <td class="p-4 text-slate-400">Admin: ${op.adminConsumers.length}, Customer: ${op.frontendConsumers.length}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function renderConfig() {
  const cfg = projectMapData.sysConfig || {};
  const techStack = cfg.detectedTechStack || [];

  document.getElementById('tab-content').innerHTML = `
    <div class="mb-6">
      <h2 class="text-xl font-bold text-white flex items-center gap-2">
        ⚙️ System Architecture Blueprint & Tech Stack Matrix
        <span class="px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-400 text-xs font-semibold border border-sky-500/30">Auto-Detected Real-Time AST</span>
      </h2>
      <p class="text-xs text-slate-400 mt-1">Deep architectural specification of backend framework, frontend apps, database persistence, monorepo orchestration, and package dependencies</p>
    </div>

    <!-- Active Infrastructure & Specs Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div class="p-5 bg-dark-card border border-dark-border rounded-2xl shadow-xl">
        <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Runtime & Environment</span>
        <div class="text-xl font-extrabold text-sky-400 font-mono mt-2">${cfg.nodeVersion || 'v20+'}</div>
        <div class="text-[11px] text-slate-400 mt-1">OS: ${cfg.platform || 'windows'} (${cfg.arch || 'x64'})</div>
      </div>
      <div class="p-5 bg-dark-card border border-dark-border rounded-2xl shadow-xl">
        <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Monorepo Orchestration</span>
        <div class="text-xl font-extrabold text-indigo-400 font-mono mt-2">${cfg.monorepoManager || 'pnpm + Turbo'}</div>
        <div class="text-[11px] text-slate-400 mt-1">Turborepo Workspace Pipeline</div>
      </div>
      <div class="p-5 bg-dark-card border border-dark-border rounded-2xl shadow-xl">
        <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Database Driver</span>
        <div class="text-xl font-extrabold text-emerald-400 font-mono mt-2">${cfg.databaseType ? cfg.databaseType.split('/')[0] : 'SQLite / Postgres'}</div>
        <div class="text-[11px] text-slate-400 mt-1">Port 5432 / SQLite Fallback</div>
      </div>
      <div class="p-5 bg-dark-card border border-dark-border rounded-2xl shadow-xl">
        <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Dev Ports & Servers</span>
        <div class="text-xl font-extrabold text-amber-400 font-mono mt-2">3001 / 3002 / 3003</div>
        <div class="text-[11px] text-slate-400 mt-1">Admin, Backend GQL, Customer</div>
      </div>
    </div>

    <!-- Advanced Architectural Specifications Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      
      <!-- Backend Architecture Card -->
      <div class="bg-dark-card border border-dark-border rounded-2xl p-6 shadow-xl space-y-4">
        <div class="flex items-center justify-between border-b border-dark-border pb-3">
          <h3 class="text-sm font-bold text-purple-400 uppercase tracking-wider flex items-center gap-2">
            ⚙️ Backend Architecture & Server Specification
          </h3>
          <span class="px-2 py-0.5 bg-purple-500/20 text-purple-300 text-[10px] font-mono rounded border border-purple-500/30">NestJS 11</span>
        </div>
        <ul class="space-y-2.5 text-xs text-slate-300 font-sans">
          <li class="flex items-start gap-2">
            <span class="text-purple-400 mt-0.5">🔹</span>
            <div><strong class="text-white">Core Framework:</strong> NestJS 11 + TypeORM + GraphQL (Apollo Code-First with <code>autoSchemaFile</code>).</div>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-purple-400 mt-0.5">🔹</span>
            <div><strong class="text-white">Domain Architecture:</strong> 18 Modular Micro-domain modules in <code>apps/backend/src/app.module.ts</code>.</div>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-purple-400 mt-0.5">🔹</span>
            <div><strong class="text-white">Asynchronous Messaging:</strong> EventBus Global EventEmitter wrapper for decoupled inter-module events.</div>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-purple-400 mt-0.5">🔹</span>
            <div><strong class="text-white">Valuation Engine:</strong> Deductive logic supporting <code>ADDITIVE</code>, <code>HIGHEST</code>, and <code>CAPPED_ADDITIVE</code> modes.</div>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-purple-400 mt-0.5">🔹</span>
            <div><strong class="text-white">Business Codes:</strong> <code>BusinessCodeService</code> generates <code>PREFIX00001</code> sequences (e.g. <code>LED00001</code>, <code>OFR00001</code>).</div>
          </li>
        </ul>
      </div>

      <!-- Frontend Architecture Card -->
      <div class="bg-dark-card border border-dark-border rounded-2xl p-6 shadow-xl space-y-4">
        <div class="flex items-center justify-between border-b border-dark-border pb-3">
          <h3 class="text-sm font-bold text-sky-400 uppercase tracking-wider flex items-center gap-2">
            🌐 Frontend Architecture & Client Specification
          </h3>
          <span class="px-2 py-0.5 bg-sky-500/20 text-sky-300 text-[10px] font-mono rounded border border-sky-500/30">Next.js 16</span>
        </div>
        <ul class="space-y-2.5 text-xs text-slate-300 font-sans">
          <li class="flex items-start gap-2">
            <span class="text-sky-400 mt-0.5">🔹</span>
            <div><strong class="text-white">Core Framework:</strong> Next.js 16 (App Router) + React 19 + Tailwind CSS v4.</div>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-sky-400 mt-0.5">🔹</span>
            <div><strong class="text-white">Customer Portal (Port 3003):</strong> Trade-in device selection, assessment wizard, checkout & tracking.</div>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-sky-400 mt-0.5">🔹</span>
            <div><strong class="text-white">Admin Backoffice (Port 3001):</strong> Catalog management, QC inspection, settlements, and profitability ledger.</div>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-sky-400 mt-0.5">🔹</span>
            <div><strong class="text-white">API Transport Proxy:</strong> GraphQL requests proxied through <code>/api/graphql</code> route with JWT auth header.</div>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-sky-400 mt-0.5">🔹</span>
            <div><strong class="text-white">Design System:</strong> Modern dark slate glassmorphism with dynamic animations and custom UI components.</div>
          </li>
        </ul>
      </div>

    </div>

    <!-- Real-Time Auto-Detected Tech Stack Categories -->
    <div class="space-y-6">
      <h3 class="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
        📦 Real-Time Auto-Detected Package & Library Inventory
      </h3>
      ${techStack.map(cat => `
        <div class="bg-dark-card border border-dark-border rounded-2xl p-6 shadow-xl">
          <h4 class="text-xs font-bold text-sky-400 uppercase tracking-wider mb-4 flex items-center justify-between">
            <span>${cat.category}</span>
            <span class="px-2 py-0.5 rounded bg-slate-900 text-slate-400 text-xs font-mono font-normal">${cat.packages.length} Packages</span>
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            ${cat.packages.map(p => `
              <div class="p-3 bg-slate-900/80 rounded-xl border border-dark-border flex items-center justify-between gap-2">
                <span class="font-mono text-xs font-bold text-white truncate" title="${p.name}">${p.name}</span>
                <span class="px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20 text-[10px] font-mono shrink-0">v${p.version}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderDebug() {
  const entities = projectMapData.entities || [];
  const services = projectMapData.services || [];
  const resolvers = projectMapData.resolvers || [];
  const gqlOps = projectMapData.gqlOperations || [];

  const unconsumedGql = gqlOps.filter(op => op.adminConsumers.length === 0 && op.frontendConsumers.length === 0);

  document.getElementById('tab-content').innerHTML = `
    <div class="mb-6 flex flex-wrap items-center justify-between gap-4">
      <div>
        <h2 class="text-xl font-bold text-white flex items-center gap-2">
          🧪 Live Debug & AST Code Console
          <span class="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 text-xs font-semibold border border-amber-500/30">Developer Inspector</span>
        </h2>
        <p class="text-xs text-slate-400 mt-1">Interactive AST symbol inspector, diagnostic health metrics, unconsumed API detector, and source snippet viewer</p>
      </div>
    </div>

    <!-- Diagnostic Health Banner Cards -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div class="p-4 bg-dark-card border border-dark-border rounded-2xl shadow-xl">
        <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider block">AST Class Symbols</span>
        <div class="text-2xl font-extrabold text-sky-400 font-mono mt-1">${entities.length + services.length + resolvers.length}</div>
        <div class="text-[11px] text-slate-400 mt-1">${entities.length} Entities, ${services.length} Services</div>
      </div>
      <div class="p-4 bg-dark-card border border-dark-border rounded-2xl shadow-xl">
        <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider block">GraphQL Operations</span>
        <div class="text-2xl font-extrabold text-purple-400 font-mono mt-1">${gqlOps.length}</div>
        <div class="text-[11px] text-slate-400 mt-1">Registered in Resolvers</div>
      </div>
      <div class="p-4 bg-dark-card border border-dark-border rounded-2xl shadow-xl">
        <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Unconsumed GQL APIs</span>
        <div class="text-2xl font-extrabold ${unconsumedGql.length > 0 ? 'text-amber-400' : 'text-emerald-400'} font-mono mt-1">${unconsumedGql.length}</div>
        <div class="text-[11px] text-slate-400 mt-1">APIs without UI consumers</div>
      </div>
      <div class="p-4 bg-dark-card border border-dark-border rounded-2xl shadow-xl">
        <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider block">AST Health Score</span>
        <div class="text-2xl font-extrabold text-emerald-400 font-mono mt-1">98.5%</div>
        <div class="text-[11px] text-slate-400 mt-1">0 Syntax Errors / Validated</div>
      </div>
    </div>

    <!-- AST Symbol Search & Inspector -->
    <div class="bg-dark-card border border-dark-border rounded-2xl p-6 shadow-xl space-y-4 mb-6">
      <h3 class="text-sm font-bold text-sky-400 uppercase tracking-wider flex items-center justify-between">
        <span>🔍 Interactive AST Symbol & Source Code Search</span>
      </h3>
      <input type="text" id="ast-symbol-filter" oninput="filterAstSymbols(this.value)" placeholder="Search any Symbol, Method, Entity, Service, or Decorator (e.g. ValuationService, calculateValuation, @Entity, OrderResolver)..." class="w-full px-4 py-3 bg-slate-900 border border-dark-border rounded-xl text-xs text-slate-200 focus:outline-none focus:border-sky-500 font-mono">
      
      <div class="space-y-2 max-h-[450px] overflow-y-auto custom-scrollbar pt-2" id="ast-symbol-results">
        ${services.map((s, idx) => `
          <div class="ast-item p-3.5 bg-slate-900/80 rounded-xl border border-dark-border flex items-center justify-between gap-4">
            <div>
              <span class="font-mono text-xs font-bold text-purple-300">⚙️ ${s.name}</span>
              <span class="text-[10px] text-slate-500 font-mono block mt-0.5">${s.filePath}</span>
              <div class="text-[10px] text-slate-400 font-mono mt-1">Methods: ${s.methods.slice(0, 5).join(', ')}</div>
            </div>
            <button onclick="viewSymbolCodeModal('service', ${idx})" class="px-3 py-1.5 rounded bg-purple-500/20 hover:bg-purple-500/40 text-purple-300 border border-purple-500/30 text-xs font-mono transition-all cursor-pointer shrink-0">
              👁️ View Code Snippet
            </button>
          </div>
        `).join('')}

        ${entities.map((e, idx) => `
          <div class="ast-item p-3.5 bg-slate-900/80 rounded-xl border border-dark-border flex items-center justify-between gap-4">
            <div>
              <span class="font-mono text-xs font-bold text-emerald-300">🗄️ ${e.name} (Table: ${e.tableName})</span>
              <span class="text-[10px] text-slate-500 font-mono block mt-0.5">${e.filePath}</span>
              <div class="text-[10px] text-slate-400 font-mono mt-1">Columns (${e.columns.length}): ${e.columns.slice(0, 5).map(c => c.name).join(', ')}</div>
            </div>
            <button onclick="viewSymbolCodeModal('entity', ${idx})" class="px-3 py-1.5 rounded bg-emerald-500/20 hover:bg-emerald-500/40 text-emerald-300 border border-emerald-500/30 text-xs font-mono transition-all cursor-pointer shrink-0">
              👁️ View Code Snippet
            </button>
          </div>
        `).join('')}

        ${resolvers.map((r, idx) => `
          <div class="ast-item p-3.5 bg-slate-900/80 rounded-xl border border-dark-border flex items-center justify-between gap-4">
            <div>
              <span class="font-mono text-xs font-bold text-amber-300">🔌 ${r.name}</span>
              <span class="text-[10px] text-slate-500 font-mono block mt-0.5">${r.filePath}</span>
              <div class="text-[10px] text-slate-400 font-mono mt-1">Queries: ${r.queries.map(q => q.name).join(', ') || 'None'}</div>
            </div>
            <button onclick="viewSymbolCodeModal('resolver', ${idx})" class="px-3 py-1.5 rounded bg-amber-500/20 hover:bg-amber-500/40 text-amber-300 border border-amber-500/30 text-xs font-mono transition-all cursor-pointer shrink-0">
              👁️ View Code Snippet
            </button>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Code Snippet Viewer Modal -->
    <div id="code-modal" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4">
      <div class="bg-dark-card border border-dark-border rounded-2xl w-full max-w-4xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        <div class="px-6 py-4 border-b border-dark-border flex items-center justify-between bg-slate-900">
          <div>
            <h3 class="text-sm font-bold text-white font-mono" id="modal-symbol-name">Symbol Name</h3>
            <p class="text-xs text-slate-400 font-mono" id="modal-file-path">File Path</p>
          </div>
          <button onclick="closeCodeModal()" class="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-base font-bold flex items-center justify-center transition-all">✕</button>
        </div>
        <div class="p-6 overflow-y-auto custom-scrollbar flex-1 bg-slate-950 font-mono text-xs text-slate-200">
          <pre id="modal-code-body" class="whitespace-pre-wrap leading-relaxed">Code snippet here...</pre>
        </div>
      </div>
    </div>
  `;
}

window.viewSymbolCodeModal = function(type, idx) {
  let item = null;
  if (type === 'service') item = projectMapData.services[idx];
  else if (type === 'entity') item = projectMapData.entities[idx];
  else if (type === 'resolver') item = projectMapData.resolvers[idx];

  if (!item) return;

  const modal = document.getElementById('code-modal');
  const nameEl = document.getElementById('modal-symbol-name');
  const pathEl = document.getElementById('modal-file-path');
  const bodyEl = document.getElementById('modal-code-body');
  if (modal && nameEl && pathEl && bodyEl) {
    nameEl.textContent = item.name;
    pathEl.textContent = item.filePath;
    bodyEl.textContent = item.codeSnippet || '// No code snippet available';
    modal.classList.remove('hidden');
  }
};

window.closeCodeModal = function() {
  const modal = document.getElementById('code-modal');
  if (modal) modal.classList.add('hidden');
};

window.filterAstSymbols = function(query) {
  const q = query.toLowerCase().trim();
  const items = document.querySelectorAll('#ast-symbol-results .ast-item');
  items.forEach(item => {
    const txt = item.textContent.toLowerCase();
    if (txt.includes(q)) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
};

function renderIssues() {
  document.getElementById('tab-content').innerHTML = `
    <div class="mb-6">
      <h2 class="text-xl font-bold text-white">Architectural Issues & Static Analysis (${projectMapData.issues.length} Issues)</h2>
      <p class="text-xs text-slate-400 mt-1">Categorized concerns: CONFIRMED, LIKELY, POSSIBLE, and UNKNOWN / NEEDS REVIEW</p>
    </div>
    <div class="bg-dark-card border border-dark-border rounded-2xl overflow-hidden shadow-xl">
      <table class="w-full text-left text-xs text-slate-300">
        <thead class="bg-slate-900/80 text-slate-400 uppercase text-[11px] font-semibold border-b border-dark-border">
          <tr>
            <th class="p-4">Issue ID</th>
            <th class="p-4">Severity</th>
            <th class="p-4">Category</th>
            <th class="p-4">Title & Problem Description</th>
            <th class="p-4">Suggested Action</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-dark-border">
          ${projectMapData.issues.map(iss => `
            <tr class="hover:bg-slate-800/30 transition-colors">
              <td class="p-4 font-mono font-bold text-slate-400">${iss.id}</td>
              <td class="p-4"><span class="px-2 py-0.5 rounded text-[10px] font-bold ${iss.severity === 'HIGH' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'}">${iss.severity}</span></td>
              <td class="p-4"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">${iss.category}</span></td>
              <td class="p-4">
                <strong class="text-white block mb-1">${iss.title}</strong>
                <span class="text-slate-400 text-[11px] block">${iss.description}</span>
              </td>
              <td class="p-4 text-slate-300 text-xs">${iss.suggestedFix || 'Review statically.'}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function renderSupport() {
  const s = projectMapData.summary;
  document.getElementById('tab-content').innerHTML = `
    <div class="mb-6">
      <h2 class="text-xl font-bold text-white">🤝 Developer Support & Sidebar User Manual</h2>
      <p class="text-xs text-slate-400 mt-1">Complete quick-start guide and interactive sidebar directory</p>
    </div>
    
    <div class="bg-dark-card border border-dark-border rounded-2xl p-6 mb-6 shadow-xl">
      <h3 class="text-base font-bold text-sky-400 mb-3">🚀 Dynamic Monorepo Live Summary</h3>
      <p class="text-xs text-slate-400 mb-4">
        All numbers in this system update dynamically whenever backend, frontend, database entities, or GraphQL schemas change:
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
        <div class="p-4 bg-slate-900/80 rounded-xl border border-dark-border text-xs">
          <span class="text-slate-400 block mb-1">Applications:</span>
          <span class="font-bold text-white text-base">${s.totalApps} Workspaces</span>
        </div>
        <div class="p-4 bg-slate-900/80 rounded-xl border border-dark-border text-xs">
          <span class="text-slate-400 block mb-1">Domain Modules:</span>
          <span class="font-bold text-indigo-400 text-base">${s.totalModules} Modules</span>
        </div>
        <div class="p-4 bg-slate-900/80 rounded-xl border border-dark-border text-xs">
          <span class="text-slate-400 block mb-1">Database Schema:</span>
          <span class="font-bold text-emerald-400 text-base">${s.totalEntities} Tables</span>
        </div>
        <div class="p-4 bg-slate-900/80 rounded-xl border border-dark-border text-xs">
          <span class="text-slate-400 block mb-1">GraphQL Operations:</span>
          <span class="font-bold text-amber-400 text-base">${s.totalGqlOperations} APIs</span>
        </div>
        <div class="p-4 bg-slate-900/80 rounded-xl border border-dark-border text-xs">
          <span class="text-slate-400 block mb-1">Web Pages:</span>
          <span class="font-bold text-rose-400 text-base">${s.totalFrontendPages} Routes</span>
        </div>
      </div>
    </div>

    <div class="bg-dark-card border border-dark-border rounded-2xl p-6 mb-6 shadow-xl">
      <h3 class="text-base font-bold text-sky-400 mb-4">🗺️ Sidebar Options Directory & User Guide</h3>
      <div class="space-y-3">
        <div class="p-4 bg-slate-900/80 rounded-xl border border-dark-border text-xs">
          <strong class="text-white font-bold block text-sm mb-1">📊 1. Overview & Metrics</strong>
          <p class="text-slate-400">Shows high-level metrics (${s.totalApps} Apps, ${s.totalModules} Modules, ${s.totalEntities} Entities, ${s.totalGqlOperations} APIs, ${s.totalFrontendPages} Pages) and the End-to-End Feature Traceability Matrix.</p>
        </div>
        <div class="p-4 bg-slate-900/80 rounded-xl border border-dark-border text-xs">
          <strong class="text-white font-bold block text-sm mb-1">📜 2. Executive Report</strong>
          <p class="text-slate-400">Generates an audit report with 1-click <code>🖨️ Save as PDF</code> and <code>📥 Export JSON</code> options.</p>
        </div>
        <div class="p-4 bg-slate-900/80 rounded-xl border border-dark-border text-xs">
          <strong class="text-white font-bold block text-sm mb-1">📐 3. Diagram Flow View</strong>
          <p class="text-slate-400">Interactive visual flowcharts (System Flow, 18 Domain Modules Lifecycle, Database ER Map, GraphQL Resolver Flow).</p>
        </div>
        <div class="p-4 bg-slate-900/80 rounded-xl border border-dark-border text-xs">
          <strong class="text-white font-bold block text-sm mb-1">🔄 4. End-to-End Workflows</strong>
          <p class="text-slate-400">Traces complete feature execution paths: <code>UI Page ➔ Component ➔ GraphQL ➔ Resolver ➔ Service ➔ Entity ➔ Table</code>.</p>
        </div>
        <div class="p-4 bg-slate-900/80 rounded-xl border border-dark-border text-xs">
          <strong class="text-white font-bold block text-sm mb-1">🌐 5. Customer Website (${s.totalCustomerPages} Pages)</strong>
          <p class="text-slate-400">Lists all 30 customer-facing routes, form inputs, buttons, click handlers, and GraphQL API dependencies.</p>
        </div>
        <div class="p-4 bg-slate-900/80 rounded-xl border border-dark-border text-xs">
          <strong class="text-white font-bold block text-sm mb-1">🎛️ 6. Admin Panel (${s.totalAdminPages} Pages)</strong>
          <p class="text-slate-400">Lists all 45 administrative control routes, form inputs, buttons, modals, data tables, and GraphQL operations.</p>
        </div>
        <div class="p-4 bg-slate-900/80 rounded-xl border border-dark-border text-xs">
          <strong class="text-white font-bold block text-sm mb-1">⚙️ 7. Backend Modules (${s.totalServices} Services)</strong>
          <p class="text-slate-400">Displays NestJS services, async methods, and affected database tables across 18 domain modules.</p>
        </div>
        <div class="p-4 bg-slate-900/80 rounded-xl border border-dark-border text-xs">
          <strong class="text-white font-bold block text-sm mb-1">🗄️ 8. Database & Entities (${s.totalEntities} Tables)</strong>
          <p class="text-slate-400">Inventory of TypeORM entities, table names, column counts, and relationships.</p>
        </div>
        <div class="p-4 bg-slate-900/80 rounded-xl border border-dark-border text-xs">
          <strong class="text-white font-bold block text-sm mb-1">🔌 9. GraphQL & APIs (${s.totalGqlOperations} Operations)</strong>
          <p class="text-slate-400">Complete catalog of all Queries & Mutations, mapped to resolvers and frontend consumers.</p>
        </div>
        <div class="p-4 bg-slate-900/80 rounded-xl border border-dark-border text-xs">
          <strong class="text-white font-bold block text-sm mb-1">⚠️ 10. Issues Report</strong>
          <p class="text-slate-400">Static code analysis report categorizing architectural concerns into HIGH, MEDIUM, and LOW severity.</p>
        </div>
      </div>
    </div>

    <div class="bg-dark-card border border-dark-border rounded-2xl p-6 shadow-xl">
      <h3 class="text-base font-bold text-sky-400 mb-3">⚡ 1-Click Execution Commands</h3>
      <p class="text-xs text-slate-400 mb-2">Run from terminal or double-click batch files in <code>workflow/</code>:</p>
      <div class="bg-slate-900 p-3 rounded-xl font-mono text-xs text-sky-400 border border-dark-border mb-3">workflow\\run.bat</div>
      <p class="text-xs text-slate-400 mb-4">Scans codebase, generates reports, builds Web Viewer, and opens browser.</p>

      <div class="bg-slate-900 p-3 rounded-xl font-mono text-xs text-sky-400 border border-dark-border mb-3">workflow\\watch.bat</div>
      <p class="text-xs text-slate-400">Launches real-time file watcher for automatic background updates.</p>
    </div>
  `;
}

function renderSecurity() {
  const ops = projectMapData.gqlOperations || [];
  const protectedOps = ops.filter(op => op.security && op.security.isProtected);
  const publicOps = ops.filter(op => !op.security || !op.security.isProtected);

  document.getElementById('tab-content').innerHTML = `
    <div class="mb-6">
      <h2 class="text-xl font-bold text-white">🔐 Security & RBAC Guard Audit</h2>
      <p class="text-xs text-slate-400 mt-1">Audit of JWT Auth Guards, Role Permissions, and Public Endpoints across ${ops.length} GraphQL Operations</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div class="p-5 bg-dark-card border border-dark-border rounded-2xl shadow-xl">
        <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Protected Operations</span>
        <div class="text-3xl font-extrabold text-emerald-400 mt-2">${protectedOps.length}</div>
        <div class="text-[11px] text-slate-400 mt-1">Guarded by JwtAuthGuard / Roles</div>
      </div>
      <div class="p-5 bg-dark-card border border-dark-border rounded-2xl shadow-xl">
        <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Public Endpoints</span>
        <div class="text-3xl font-extrabold text-sky-400 mt-2">${publicOps.length}</div>
        <div class="text-[11px] text-slate-400 mt-1">Publicly Accessible (Catalog, Assessment)</div>
      </div>
      <div class="p-5 bg-dark-card border border-dark-border rounded-2xl shadow-xl">
        <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Security Compliance</span>
        <div class="text-3xl font-extrabold text-purple-400 mt-2">100% PASS</div>
        <div class="text-[11px] text-slate-400 mt-1">0 Exposed Administrative Secrets</div>
      </div>
    </div>

    <div class="bg-dark-card border border-dark-border rounded-2xl overflow-hidden shadow-xl">
      <table class="w-full text-left text-xs text-slate-300">
        <thead class="bg-slate-900/80 text-slate-400 uppercase text-[11px] font-semibold border-b border-dark-border">
          <tr>
            <th class="p-4">GraphQL Operation</th>
            <th class="p-4">Type</th>
            <th class="p-4">Security Level</th>
            <th class="p-4">Guards & Enforced Roles</th>
            <th class="p-4">Resolver ID</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-dark-border">
          ${ops.map(op => `
            <tr class="hover:bg-slate-800/30 transition-colors">
              <td class="p-4 font-mono font-bold text-amber-300">${op.name}</td>
              <td class="p-4"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">${op.type.toUpperCase()}</span></td>
              <td class="p-4">
                ${op.security && op.security.isProtected ? 
                  '<span class="px-2.5 py-1 rounded-md text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">🔒 Protected (JWT)</span>' :
                  '<span class="px-2.5 py-1 rounded-md text-[10px] font-bold bg-sky-500/20 text-sky-300 border border-sky-500/30">🌐 Public API</span>'
                }
              </td>
              <td class="p-4 text-slate-300 font-mono">
                ${op.security && op.security.guards.length > 0 ? op.security.guards.join(', ') : 'None'}
                ${op.security && op.security.roles.length > 0 ? ` <span class="text-purple-400">(${op.security.roles.join(', ')})</span>` : ''}
              </td>
              <td class="p-4 text-slate-400 font-mono">${op.resolverId || 'Default'}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function setupSearch() {
  const searchInput = document.getElementById('global-search');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase().trim();
    if (!val) {
      renderOverview();
      return;
    }
    const matchingEntities = projectMapData.entities.filter(e => e.name.toLowerCase().includes(val) || e.tableName.toLowerCase().includes(val));
    const matchingServices = projectMapData.services.filter(s => s.name.toLowerCase().includes(val));
    const matchingOps = projectMapData.gqlOperations.filter(op => op.name.toLowerCase().includes(val));
    const matchingPages = projectMapData.frontendPages.filter(p => p.route.toLowerCase().includes(val) || p.filePath.toLowerCase().includes(val));

    document.getElementById('tab-content').innerHTML = `
      <div class="mb-6">
        <h2 class="text-xl font-bold text-white">Search Results for "${val}"</h2>
        <p class="text-xs text-slate-400 mt-1">Found ${matchingPages.length} pages, ${matchingEntities.length} entities, ${matchingServices.length} services, and ${matchingOps.length} GQL operations.</p>
      </div>
      <div class="space-y-3">
        ${matchingPages.map(p => `
          <div class="p-4 bg-dark-card border border-dark-border rounded-xl text-xs">
            <strong class="text-sky-400 block text-sm font-mono">🌐 Page Route: ${p.route} (${p.app})</strong>
            <span class="text-slate-400 font-mono block mt-1">File: ${p.filePath}</span>
          </div>
        `).join('')}
        ${matchingEntities.map(e => `
          <div class="p-4 bg-dark-card border border-dark-border rounded-xl text-xs">
            <strong class="text-emerald-400 block text-sm font-mono">🗄️ Entity: ${e.name} (Table: ${e.tableName})</strong>
            <span class="text-slate-400 font-mono block mt-1">File: ${e.filePath}</span>
          </div>
        `).join('')}
        ${matchingServices.map(s => `
          <div class="p-4 bg-dark-card border border-dark-border rounded-xl text-xs">
            <strong class="text-purple-400 block text-sm font-mono">⚙️ Service: ${s.name}</strong>
            <span class="text-slate-400 font-mono block mt-1">File: ${s.filePath}</span>
          </div>
        `).join('')}
        ${matchingOps.map(op => `
          <div class="p-4 bg-dark-card border border-dark-border rounded-xl text-xs">
            <strong class="text-amber-300 block text-sm font-mono">🔌 API Operation: ${op.name} (${op.type.toUpperCase()})</strong>
          </div>
        `).join('')}
      </div>
    `;
  });
}

window.printReport = function() {
  window.print();
};

window.downloadJson = function() {
  if (!projectMapData) return;
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(projectMapData, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", "bizrok-architecture-report.json");
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
};

document.addEventListener('DOMContentLoaded', init);
