import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CDAw6ds6.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_C73Bptzz.mjs');
const _page1 = () => import('./chunks/browse_Bxp7A219.mjs');
const _page2 = () => import('./chunks/_category__BQ4FkHCp.mjs');
const _page3 = () => import('./chunks/index_C7QStF9K.mjs');
const _page4 = () => import('./chunks/grow_BWN2PRSY.mjs');
const _page5 = () => import('./chunks/launch_BDm_GL0D.mjs');
const _page6 = () => import('./chunks/monetise_BEPKfLaW.mjs');
const _page7 = () => import('./chunks/index_BRZ-J5-m.mjs');
const _page8 = () => import('./chunks/_.._-NXT1U1E.mjs');
const _page9 = () => import('./chunks/_.._CCuOHR0w.mjs');
const _page10 = () => import('./chunks/index_Bd38ECtU.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/browse.astro", _page1],
    ["src/pages/categories/[category].astro", _page2],
    ["src/pages/categories/index.astro", _page3],
    ["src/pages/grow.astro", _page4],
    ["src/pages/launch.astro", _page5],
    ["src/pages/monetise.astro", _page6],
    ["src/pages/terms/index.astro", _page7],
    ["src/pages/terms/[...slug].astro", _page8],
    ["src/pages/tools/[...slug].astro", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "5f61ae09-bc6f-45e5-bacd-dee8b77e121c"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
