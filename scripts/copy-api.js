import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const apiSource = path.join(__dirname, '../api');
const apiDest = path.join(__dirname, '../.vercel/output/functions/api');

console.log('Copying API functions to Vercel output...');
console.log('From:', apiSource);
console.log('To:', apiDest);

// Copy the API folder
fs.copySync(apiSource, apiDest, { overwrite: true });

// Create a .vc-config.json for each function
const files = fs.readdirSync(apiDest).filter(f => f.endsWith('.js'));

files.forEach(file => {
  const functionName = path.basename(file, '.js');
  const configPath = path.join(apiDest, `${functionName}.func`);

  // Create function directory
  fs.ensureDirSync(configPath);

  // Move the JS file into the function directory
  fs.moveSync(
    path.join(apiDest, file),
    path.join(configPath, 'index.js'),
    { overwrite: true }
  );

  // Create .vc-config.json
  const vcConfig = {
    runtime: 'nodejs20.x',
    handler: 'index.js',
    launcherType: 'Nodejs'
  };

  fs.writeJsonSync(
    path.join(configPath, '.vc-config.json'),
    vcConfig,
    { spaces: 2 }
  );

  // Create package.json
  const packageJson = {
    type: 'module'
  };

  fs.writeJsonSync(
    path.join(configPath, 'package.json'),
    packageJson,
    { spaces: 2 }
  );

  console.log(`✓ Created function: ${functionName}`);
});

console.log('✓ API functions copied successfully!');
