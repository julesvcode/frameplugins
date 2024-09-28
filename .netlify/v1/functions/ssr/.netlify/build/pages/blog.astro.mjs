/* empty css                                  */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BfjbwAM1.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$BaseLayout } from '../chunks/BaseLayout_BqO21NNh.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("posts");
  allPosts.sort(
    (a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Blog", "description": "Discover all the latest Framer plugins." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-full flex gap-4"> <div class="flex flex-col gap-4"> <h1>Blog</h1> <p class="text-lg max-w-xl">
A collection of useful articles for Framer designers and developers.
        Learn about the latest Framer plugins.
</p> </div> </section> <section class="w-full flex gap-4 pb-8"> <p class="text-base italic text-zinc-500">Coming soon..</p> <div class="min-h-48"></div> <!-- <div class="grid grid-col-1 md:grid-cols-2 gap-6 pt-4">
      {sortedPosts.map((post) => <PostCard posts={post} />)}
    </div> --> </section> ` })}`;
}, "/Users/new/Documents/GitHub/frameplugins/src/pages/blog/index.astro", void 0);

const $$file = "/Users/new/Documents/GitHub/frameplugins/src/pages/blog/index.astro";
const $$url = "/blog.html";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
