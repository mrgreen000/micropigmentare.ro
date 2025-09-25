import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const distPath = join(process.cwd(), 'dist', 'index.html');
let html = readFileSync(distPath, 'utf-8');

// Replace absolute paths with base-relative paths
html = html.replace(/src="\/assets\//g, 'src="/micropigmentare-site/assets/');
html = html.replace(/href="\/assets\//g, 'href="/micropigmentare-site/assets/');

writeFileSync(distPath, html);
console.log('Fixed asset paths for GitHub Pages deployment');