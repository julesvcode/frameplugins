/* empty css                                  */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BfjbwAM1.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$BaseLayout } from '../chunks/BaseLayout_BqO21NNh.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPlugins = await getCollection("plugins");
  [
    ...new Set(allPlugins.map((plugin) => plugin.data.categories).flat())
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "All Framer Plugins Categories", "description": "Browse all the categories of Framer plugins" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-full flex gap-4"> <div class="flex flex-col md:basis-2/3 gap-4"> <h1>All Framer Plugins Categories</h1> <p class="text-lg">Browse all the categories of Framer plugins.</p> </div> </section> <section> <p class="text-base italic text-zinc-500">Coming soon..</p> <div class="min-h-48"></div> <!-- <div class="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4">
            {alphabeticalCategories.map((category) =>
                (categoryDisplay = (category.charAt(0).toUpperCase() + category.slice(1)).replace(/-/g, ' ')) &&
                <CategoryCard 
                    link={category}
                    category={categoryDisplay}/>
            )}
        </div> --> </section> ` })}`;
}, "/Users/new/Documents/GitHub/frameplugins/src/pages/categories/index.astro", void 0);

const $$file = "/Users/new/Documents/GitHub/frameplugins/src/pages/categories/index.astro";
const $$url = "/categories.html";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
