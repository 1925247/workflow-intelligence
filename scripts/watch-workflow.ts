import * as fs from 'fs';
import * as path from 'path';
import { scanProject } from './scan-project';
import { generateDocumentation } from './generate-workflow';
import { buildWebView } from './build-web-view';

const ROOT_DIR = path.resolve(__dirname, '../../');
const WATCH_DIRS = [
  path.join(ROOT_DIR, 'apps/backend/src'),
  path.join(ROOT_DIR, 'apps/frontend/src'),
  path.join(ROOT_DIR, 'apps/customer-website/src'),
  path.join(ROOT_DIR, 'packages/shared/src'),
];

let debounceTimer: NodeJS.Timeout | null = null;

function handleFileChange(eventType: string, filename: string | null) {
  if (!filename) return;
  if (
    filename.includes('node_modules') ||
    filename.includes('.next') ||
    filename.includes('dist') ||
    filename.includes('workflow/generated')
  ) {
    return;
  }

  console.log(`⚡ Source change detected: ${filename} (${eventType})`);

  if (debounceTimer) clearTimeout(debounceTimer);

  debounceTimer = setTimeout(() => {
    console.log('🔄 Triggering incremental workflow regeneration...');
    try {
      scanProject();
      generateDocumentation();
      buildWebView();
      console.log('✨ Workflow intelligence updated successfully!');
    } catch (err) {
      console.error('❌ Error during workflow update:', err);
    }
  }, 500);
}

export function startWatchMode() {
  console.log('👀 Starting Workflow Intelligence Watch Mode (Development-Time Only)...');
  for (const dir of WATCH_DIRS) {
    if (fs.existsSync(dir)) {
      console.log(`  - Watching: ${dir}`);
      fs.watch(dir, { recursive: true }, handleFileChange);
    }
  }
}

if (require.main === module) {
  startWatchMode();
}
