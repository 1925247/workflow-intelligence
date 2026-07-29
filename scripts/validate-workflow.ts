import * as fs from 'fs';
import * as path from 'path';
import { ProjectMap } from './scan-project';

const ROOT_DIR = path.resolve(__dirname, '../../');
const GENERATED_DIR = path.join(ROOT_DIR, 'workflow/generated');

export function validateWorkflow(): boolean {
  console.log('🧪 Validating Workflow System...');
  let hasErrors = false;

  // 1. Validate project-map.json
  const mapPath = path.join(GENERATED_DIR, 'project-map.json');
  if (!fs.existsSync(mapPath)) {
    console.error('❌ project-map.json missing!');
    return false;
  }

  let projectMap: ProjectMap;
  try {
    projectMap = JSON.parse(fs.readFileSync(mapPath, 'utf-8'));
    console.log('✅ project-map.json is valid JSON.');
  } catch (err) {
    console.error('❌ Failed to parse project-map.json:', err);
    return false;
  }

  // 2. Validate file paths in project-map.json
  let missingFiles = 0;
  for (const entity of projectMap.entities) {
    const fullPath = path.join(ROOT_DIR, entity.filePath);
    if (!fs.existsSync(fullPath)) {
      console.warn(`⚠️ Entity file not found: ${entity.filePath}`);
      missingFiles++;
    }
  }

  for (const service of projectMap.services) {
    const fullPath = path.join(ROOT_DIR, service.filePath);
    if (!fs.existsSync(fullPath)) {
      console.warn(`⚠️ Service file not found: ${service.filePath}`);
      missingFiles++;
    }
  }

  for (const page of projectMap.frontendPages) {
    const fullPath = path.join(ROOT_DIR, page.filePath);
    if (!fs.existsSync(fullPath)) {
      console.warn(`⚠️ Page file not found: ${page.filePath}`);
      missingFiles++;
    }
  }

  if (missingFiles === 0) {
    console.log('✅ All entity, service, and frontend page file paths exist on disk!');
  } else {
    console.warn(`⚠️ Warning: ${missingFiles} file references could not be verified on disk.`);
    hasErrors = true;
  }

  // 3. Redaction Check
  const mapContent = fs.readFileSync(mapPath, 'utf-8');
  const secretKeywords = ['password=', 'api_secret=', 'private_key=', 'DATABASE_URL=postgres://root:secret'];
  for (const key of secretKeywords) {
    if (mapContent.includes(key)) {
      console.error(`❌ SECURITY WARNING: Secret keyword '${key}' exposed in project-map.json!`);
      hasErrors = true;
    }
  }

  if (!hasErrors) {
    console.log('✅ Secret redaction check passed. No secret values exposed.');
  }

  console.log(hasErrors ? '⚠️ Validation finished with warnings.' : '🎉 WORKFLOW VALIDATION PASSED CLEARLY!');
  return !hasErrors;
}

if (require.main === module) {
  validateWorkflow();
}
