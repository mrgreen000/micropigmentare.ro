import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

// Remove sourcemap references from flowbite files
const files = [
  'assets/vendor/flowbite-pro/flowbite.min.js',
  'assets/vendor/flowbite-pro/flowbite.min.css'
];

files.forEach(file => {
  const filePath = join(process.cwd(), file);
  try {
    let content = readFileSync(filePath, 'utf-8');
    // Remove sourceMappingURL comments
    content = content.replace(/\/\*# sourceMappingURL=.*?\*\//g, '');
    content = content.replace(/\/\/# sourceMappingURL=.*/g, '');
    writeFileSync(filePath, content);
    console.log(`Removed sourcemap reference from ${file}`);
  } catch (err) {
    console.log(`File ${file} not found, skipping...`);
  }
});

console.log('Sourcemap references removed');