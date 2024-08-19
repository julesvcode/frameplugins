/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, n as renderComponent, m as maybeRenderHead } from '../astro_B1hHZn6t.mjs';
import 'kleur/colors';
import { a as getCollection, $ as $$ToolCard, b as $$BaseLayout } from './browse_Bq6E-AYY.mjs';

const $$Astro = createAstro("https://newsletter.supply");
const $$Grow = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Grow;
  const allTools = await getCollection("tools");
  const topic = "grow";
  const filteredTools = allTools.filter((tool) => tool.data.topics.includes(topic));
  const topicCapitalized = topic.charAt(0).toUpperCase() + topic.slice(1);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${topicCapitalized} your newsletter`, "description": `All the tools you need to ${topic} your newsletter.` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-full flex gap-4 py-8"> <div class="flex flex-col gap-4"> <h1> <span class="relative capitalize"> <span class="absolute w-full bg-blue-500 right-0 bottom-1 h-3 -rotate-1 opacity-50 -z-10"></span> ${topic} </span>your newsletter.
</h1> <p class="text-lg">Browse through all the tools you need to ${topic} your newsletter.</p> <!-- from email platform, to branding and copywriting. --> </div> </section> <section id="tools"> <div class="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4"> ${filteredTools.map(
    (tool) => renderTemplate`${renderComponent($$result2, "ToolCard", $$ToolCard, { "tools": tool })}`
  )} </div></section> ` })}`;
}, "/Users/new/Documents/GitHub/newsletter-supply/src/pages/grow.astro", void 0);

const $$file = "/Users/new/Documents/GitHub/newsletter-supply/src/pages/grow.astro";
const $$url = "/grow";

export { $$Grow as default, $$file as file, $$url as url };
