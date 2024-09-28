/* empty css                                  */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BfjbwAM1.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$BaseLayout } from '../chunks/BaseLayout_BqO21NNh.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPlugins = await getCollection("plugins");
  [
    ...new Set(allPlugins.map((tool) => tool.data.categories).flat())
  ];
  [
    ...new Set(allPlugins.map((tool) => tool.data.topics).flat())
  ];
  allPlugins.filter((tool) => tool.data.feat === true);
  const latestPlugins = allPlugins.sort(
    (a, b) => new Date(b.data.updateDate).getTime() - new Date(a.data.updateDate).getTime()
  );
  latestPlugins.slice(0, 3);
  const allPosts = await getCollection("posts");
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
  );
  sortedPosts.slice(0, 5);
  const mainTopics = allPlugins.map((tool) => tool.data.topics).flat();
  mainTopics.reduce((acc, topic) => {
    const value = acc[topic] || 0;
    return {
      ...acc,
      [topic]: value + 1
    };
  }, {});
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "", "description": "All the best Framer plugins in one place" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-full flex gap-4 pt-16 pb-16"> <div class="flex flex-col md:basis-2/3 gap-4"> <h1>
All the best Framer plugins <br><span class="text-zinc-600">— in one place.</span> </h1> <p class="max-w-xl text-lg">
Discover a curated list of Framer plugins to help you supercharge your
        website. From typography to forms, you'll find the perfect plugins here
        with a few clicks.
</p> <p class="max-w-xl text-base italic text-zinc-400">Coming soon..</p> <div class="min-h-12"></div> </div> </section>   ` })}`;
}, "/Users/new/Documents/GitHub/frameplugins/src/pages/index.astro", void 0);

const $$file = "/Users/new/Documents/GitHub/frameplugins/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
