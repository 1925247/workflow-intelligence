import * as fs from 'fs';
import * as path from 'path';

const ROOT_DIR = path.resolve(__dirname, '../../');
const GENERATED_DIR = path.join(ROOT_DIR, 'workflow/generated');
const WEB_DIR = path.join(ROOT_DIR, 'workflow/web');

export function buildWebView() {
  console.log('🌐 Building Workflow Visual Web Viewer...');
  const mapPath = path.join(GENERATED_DIR, 'project-map.json');
  if (!fs.existsSync(mapPath)) {
    throw new Error('project-map.json not found. Run scan-project first.');
  }

  if (!fs.existsSync(WEB_DIR)) {
    fs.mkdirSync(WEB_DIR, { recursive: true });
  }

  const webGeneratedDir = path.join(WEB_DIR, 'generated');
  if (!fs.existsSync(webGeneratedDir)) {
    fs.mkdirSync(webGeneratedDir, { recursive: true });
  }

  // 1. Copy project-map.json
  const mapContent = fs.readFileSync(mapPath, 'utf-8');
  fs.writeFileSync(path.join(webGeneratedDir, 'project-map.json'), mapContent, 'utf-8');

  // 2. Generate project-map.js for instant local file:/// compatibility without CORS blocks
  const mapJsContent = `window.PROJECT_MAP_DATA = ${mapContent};`;
  fs.writeFileSync(path.join(webGeneratedDir, 'project-map.js'), mapJsContent, 'utf-8');

  console.log('✅ Synchronized project-map.json and project-map.js to workflow/web/generated/');
}

if (require.main === module) {
  buildWebView();
}
