import * as fs from 'fs';
import * as path from 'path';

console.log('⚡ Initializing Universal Workflow Studio for Project...');

const ROOT_DIR = path.resolve(__dirname, '../../');
const pkgPath = path.join(ROOT_DIR, 'package.json');

if (fs.existsSync(pkgPath)) {
  try {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
    pkg.scripts = pkg.scripts || {};
    
    pkg.scripts['workflow:scan'] = 'pnpm --filter @bizrok/backend ts-node ../../workflow/scripts/scan-project.ts';
    pkg.scripts['workflow:web'] = 'workflow\\run.bat';
    pkg.scripts['workflow:watch'] = 'workflow\\watch.bat';

    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2), 'utf-8');
    console.log(`✅ Attached workflow npm scripts to ${pkg.name || 'target project'} package.json!`);
  } catch (err: any) {
    console.error('⚠️ Could not update package.json:', err.message);
  }
}

const configPath = path.join(ROOT_DIR, 'workflow/config/workflow.config.json');
if (fs.existsSync(configPath)) {
  try {
    const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
    if (fs.existsSync(pkgPath)) {
      const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
      if (pkg.name) config.projectName = pkg.name;
      if (pkg.version) config.version = pkg.version;
    }
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2), 'utf-8');
    console.log('✅ Configured workflow/config/workflow.config.json dynamically!');
  } catch (err: any) {
    console.error('⚠️ Could not update workflow.config.json:', err.message);
  }
}

console.log('🎉 Universal Workflow Studio initialized successfully!');
console.log('👉 Run `workflow\\run.bat` or `pnpm workflow:web` to launch studio.');
