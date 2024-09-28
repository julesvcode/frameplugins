import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import 'devalue';
import { k as decodeKey } from './chunks/astro/server_BfjbwAM1.mjs';
import 'clsx';
import 'html-escaper';
import { compile } from 'path-to-regexp';

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/new/Documents/GitHub/frameplugins/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const t=document.getElementById(\"menu\");t.addEventListener(\"click\",()=>{[...document.querySelectorAll(\".navmenu-toggle\")].forEach(e=>{e.classList.toggle(\"hidden\")})});\n"}],"styles":[{"type":"external","src":"/_astro/_slug_.FbX9RKPo.css"},{"type":"external","src":"/_astro/_slug_.mh_-f0id.css"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const t=document.getElementById(\"menu\");t.addEventListener(\"click\",()=>{[...document.querySelectorAll(\".navmenu-toggle\")].forEach(e=>{e.classList.toggle(\"hidden\")})});\n"}],"styles":[{"type":"external","src":"/_astro/_slug_.FbX9RKPo.css"},{"type":"external","src":"/_astro/_slug_.mh_-f0id.css"}],"routeData":{"route":"/categories","isIndex":true,"type":"page","pattern":"^\\/categories$","segments":[[{"content":"categories","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/categories/index.astro","pathname":"/categories","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const t=document.getElementById(\"menu\");t.addEventListener(\"click\",()=>{[...document.querySelectorAll(\".navmenu-toggle\")].forEach(e=>{e.classList.toggle(\"hidden\")})});\n"}],"styles":[{"type":"external","src":"/_astro/_slug_.FbX9RKPo.css"},{"type":"external","src":"/_astro/_slug_.mh_-f0id.css"}],"routeData":{"route":"/plugins","isIndex":true,"type":"page","pattern":"^\\/plugins$","segments":[[{"content":"plugins","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/plugins/index.astro","pathname":"/plugins","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const t=document.getElementById(\"menu\");t.addEventListener(\"click\",()=>{[...document.querySelectorAll(\".navmenu-toggle\")].forEach(e=>{e.classList.toggle(\"hidden\")})});\n"}],"styles":[{"type":"external","src":"/_astro/_slug_.FbX9RKPo.css"},{"type":"external","src":"/_astro/_slug_.mh_-f0id.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}}],"site":"https://frameplugins.com","base":"/","trailingSlash":"never","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/new/Documents/GitHub/frameplugins/src/layouts/TwoColumnsLayout.astro",{"propagation":"in-tree","containsHead":false}],["/Users/new/Documents/GitHub/frameplugins/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/new/Documents/GitHub/frameplugins/src/pages/plugins/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/plugins/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/new/Documents/GitHub/frameplugins/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/new/Documents/GitHub/frameplugins/src/pages/categories/[category].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/categories/[category]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/new/Documents/GitHub/frameplugins/src/pages/categories/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/categories/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/new/Documents/GitHub/frameplugins/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/new/Documents/GitHub/frameplugins/src/pages/plugins/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/plugins/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/categories/[category]@_@astro":"pages/categories/_category_.astro.mjs","\u0000@astro-page:src/pages/categories/index@_@astro":"pages/categories.astro.mjs","\u0000@astro-page:src/pages/plugins/index@_@astro":"pages/plugins.astro.mjs","\u0000@astro-page:src/pages/plugins/[...slug]@_@astro":"pages/plugins/_---slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_d-q9Xbpv.mjs","/Users/new/Documents/GitHub/frameplugins/src/content/plugins/framer.md?astroContentCollectionEntry=true":"chunks/framer_BA2_pbgt.mjs","/Users/new/Documents/GitHub/frameplugins/src/content/posts/how-to-write-the-perfect-newsletter.md?astroContentCollectionEntry=true":"chunks/how-to-write-the-perfect-newsletter_RwTHY4W_.mjs","/Users/new/Documents/GitHub/frameplugins/src/content/plugins/framer.md?astroPropagatedAssets":"chunks/framer_tL_qrkcD.mjs","/Users/new/Documents/GitHub/frameplugins/src/content/posts/how-to-write-the-perfect-newsletter.md?astroPropagatedAssets":"chunks/how-to-write-the-perfect-newsletter_e-V8WkdZ.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","/Users/new/Documents/GitHub/frameplugins/src/content/plugins/framer.md":"chunks/framer_DSrtTO-Y.mjs","/Users/new/Documents/GitHub/frameplugins/src/content/posts/how-to-write-the-perfect-newsletter.md":"chunks/how-to-write-the-perfect-newsletter_BU3CHUoe.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.0wY_rlk5.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/framer.CRTGaRzI.png","/_astro/framer-thumb.BTWcYR5K.png","/_astro/beehiiv_ad_square.qVjhernl.png","/_astro/_slug_.FbX9RKPo.css","/_astro/_slug_.mh_-f0id.css","/_redirects","/favicon.png","/og-banner.png"],"buildFormat":"file","checkOrigin":false,"serverIslandNameMap":[],"key":"lqw3HrQwKyeYhwCw8oeQVI3CP+llWzPmO+0LF7t4fH4=","experimentalEnvGetSecretEnabled":false});

export { manifest };
