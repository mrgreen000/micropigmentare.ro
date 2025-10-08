import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_IaLJGt6s.mjs';
import { manifest } from './manifest_CzwvccM8.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/calendar-availability.astro.mjs');
const _page2 = () => import('./pages/articole.astro.mjs');
const _page3 = () => import('./pages/_slug_.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/calendar-availability.ts", _page1],
    ["src/pages/articole/index.astro", _page2],
    ["src/pages/[slug].astro", _page3],
    ["src/pages/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "be72ce02-664e-49bd-8dea-90ba34bc0575",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
