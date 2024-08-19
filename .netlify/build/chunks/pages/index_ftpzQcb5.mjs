/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, n as renderComponent, q as defineScriptVars } from '../astro_B1hHZn6t.mjs';
import 'kleur/colors';
import { a as getCollection, b as $$BaseLayout, $ as $$ToolCard } from './browse_Bq6E-AYY.mjs';
import 'clsx';

const $$Astro$6 = createAstro("https://newsletter.supply");
const $$CategoryCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$CategoryCard;
  const { category, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`categories/${link}`, "href")} class="relative flex flex-col justify-end gap-6 group overflow-hidden p-6 rounded-lg bg-zinc-200 border border-zinc-200 w-full cursor-pointer hover:border-zinc-300 hover:bg-zinc-200"> <!-- <Icon name={\`cat-\${icon}\`} class="text-zinc-950 text-2xl"/> --> <div class="flex flex-col w-full"> <h3 class="text-zinc-950 text-lg font-bold leading-8 capitalize"> ${category} </h3> </div> </a>`;
}, "/Users/new/Documents/GitHub/newsletter-supply/src/components/CategoryCard.astro", void 0);

const $$Astro$5 = createAstro("https://newsletter.supply");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index$2;
  const allTools = await getCollection("tools");
  const allCategories = [...new Set(allTools.map((tool) => tool.data.categories).flat())];
  let categoryDisplay;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "All Categories", "description": "Browse all categories" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-full flex gap-4 py-8"> <div class="flex flex-col md:basis-2/3 gap-4"> <h1>All categories</h1> <p class="text-lg">All the categories of tools you need to launch, grow and monetize your newsletter.</p> </div> </section> <section> <div class="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4"> ${allCategories.map(
    (category) => (categoryDisplay = (category.charAt(0).toUpperCase() + category.slice(1)).replace(/-/g, " ")) && renderTemplate`${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "link": category, "category": categoryDisplay })}`
  )} </div> </section> ` })}`;
}, "/Users/new/Documents/GitHub/newsletter-supply/src/pages/categories/index.astro", void 0);

const $$file$2 = "/Users/new/Documents/GitHub/newsletter-supply/src/pages/categories/index.astro";
const $$url$2 = "/categories";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$2,
    file: $$file$2,
    url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro("https://newsletter.supply");
const $$TermCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TermCard;
  const { terms } = Astro2.props;
  const { title, description } = terms.data;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-2"> <div class="flex flex-col gap-1"> <a${addAttribute(`/terms/${terms.slug}`, "href")} class="hover:underline"> <h2>${title}</h2> </a> <p>${description}</p> </div> <a${addAttribute(`/terms/${terms.slug}`, "href")} class="underline">
Read more
</a> </div>`;
}, "/Users/new/Documents/GitHub/newsletter-supply/src/components/TermCard.astro", void 0);

const $$Astro$3 = createAstro("https://newsletter.supply");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$1;
  const allTerms = await getCollection("terms");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Terms", "description": "Step into the world of newsletter with our glossary." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-full flex gap-4 py-8"> <div class="flex flex-col md:basis-2/3 gap-4"> <h1>Newsletter terms</h1> <p class="text-lg">Step into the world of newsletter with our glossary - a comprehensive guide to understand newsletters' terminology and tools.</p> </div> </section> <section class="w-full flex gap-4 pt- 4 pb-8"> <div class="flex flex-col md:basis-2/3 gap-12 pt-4"> ${allTerms.map((term) => renderTemplate`${renderComponent($$result2, "TermCard", $$TermCard, { "terms": term })}`)} </div> </section> ` })}`;
}, "/Users/new/Documents/GitHub/newsletter-supply/src/pages/terms/index.astro", void 0);

const $$file$1 = "/Users/new/Documents/GitHub/newsletter-supply/src/pages/terms/index.astro";
const $$url$1 = "/terms";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$1,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://newsletter.supply");
const $$SignupForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SignupForm;
  const { action = "/", containerWidth = "fit" } = Astro2.props;
  const makeWebhook = "https://hook.eu2.make.com/3u3s1b25q13fu7vw0mtq5wrpv5a3y6c4";
  const widthClass = containerWidth === "fill" ? "w-full" : "w-fit";
  return renderTemplate(_a || (_a = __template(["", '<form id="signup-form" class="flex gap-2 flex-wrap"> <input type="email" name="email" placeholder="Enter your email address" required', "> <button", ">\nSubscribe\n</button> </form> <script>(function(){", "\n    const form = document.getElementById('signup-form');\n    const errorMessage = document.getElementById('error-message');\n  \n    form.addEventListener('submit', async (e) => {\n      e.preventDefault();\n      \n      const email = form.email.value;\n      \n      try {\n        const response = await fetch(makeWebhook, {\n          method: 'POST',\n          headers: {\n            'Content-Type': 'application/json',\n          },\n          body: JSON.stringify({ email }),\n        });\n  \n        if (!response.ok) {\n          throw new Error('Failed to send data to the webhook');\n        }\n  \n        // Redirect after successful submission\n        window.location.href = action;\n        \n      } catch (error) {\n        errorMessage.textContent = error.message;\n        errorMessage.classList.remove('hidden');\n      }\n    });\n  })();</script>"])), maybeRenderHead(), addAttribute(`min-w-60 max-w-[420px] text-zinc-950 font-regular border border-zinc-200 text-sm leading-0 rounded-md w-60 py-2 px-4 ${widthClass}`, "class"), addAttribute(`bg-zinc-800 text-zinc-100 font-medium text-sm leading-0 rounded-md py-2 px-4 cursor-pointer hover:opacity-80 ${widthClass}`, "class"), defineScriptVars({ makeWebhook, action }));
}, "/Users/new/Documents/GitHub/newsletter-supply/src/components/SignupForm.astro", void 0);

const $$Astro$1 = createAstro("https://newsletter.supply");
const $$GoalCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$GoalCard;
  const { link, title, quantity } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")} class="relative flex flex-col gap-6 group overflow-hidden p-8 rounded-lg bg-zinc-200 border border-zinc-200 w-full cursor-pointer hover:border-zinc-300 hover:bg-zinc-200"> <!-- <Icon name={\`cat-\${icon}\`} class="text-zinc-950 text-2xl"/> --> <div class="flex flex-col w-full"> <h3 class="text-zinc-950 text-xl font-bold leading-8 capitalize"> ${title} </h3> <p class="text-zinc-600 text-sm leading-6 line-clamp-2">
Discover ${quantity} tools
</p> </div> </a>`;
}, "/Users/new/Documents/GitHub/newsletter-supply/src/components/GoalCard.astro", void 0);

const $$Astro = createAstro("https://newsletter.supply");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allTools = await getCollection("tools");
  const allCategories = [...new Set(allTools.map((tool) => tool.data.categories).flat())];
  const allTopics = [...new Set(allTools.map((tool) => tool.data.topics).flat())];
  const mainTopics = allTools.map((tool) => tool.data.topics).flat();
  const processedTopics = mainTopics.reduce((acc, topic) => {
    const value = acc[topic] || 0;
    return {
      ...acc,
      [topic]: value + 1
    };
  }, {});
  let categoryDisplay;
  let topicDisplay;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "", "description": "All the tools you need to launch ,grow and monetize your newsletter." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-full flex gap-4 pt-8 pb-16"> <div class="flex flex-col md:basis-2/3 gap-4"> <h1>All the tools you need to
<span class="relative"> <span class="absolute w-full bg-blue-500 right-0 bottom-1 h-3 -rotate-1 opacity-50 -z-10"></span>
launch
</span>,
<span class="relative"> <span class="absolute w-full bg-blue-500 right-0 bottom-1 h-3 -rotate-1 opacity-50 -z-10"></span>
grow
</span> and
<span class="relative"> <span class="absolute w-full bg-blue-500 right-0 bottom-1 h-3 -rotate-1 opacity-50 -z-10"></span>
monetize
</span>your newsletter.
</h1> <p class="max-w-md text-lg">Discover a curated list of tools, apps and software to help you run your newsletter like a pro.</p> ${renderComponent($$result2, "SignupForm", $$SignupForm, { "action": "/", "containerWidth": "fit" })} </div> </section> <section class="py-4"> <h2 class=""> <span class="relative"> <span class="absolute w-full bg-blue-500 right-0 bottom-1 h-2 -rotate-1 opacity-50 -z-10"></span>
Top
</span>
Categories
</h2> <div class="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4"> ${allTopics.map(
    (topic) => (topicDisplay = (topic.charAt(0).toUpperCase() + topic.slice(1)).replace(/-/g, " ")) && renderTemplate`${renderComponent($$result2, "GoalCard", $$GoalCard, { "icon": topic, "link": `/${topic}`, "title": topicDisplay, "quantity": processedTopics[topic] })}`
  )} </div> </section> <section class="py-4"> <div class="group flex items-end justify-between"> <h2 class=""> <span class="relative"> <span class="absolute w-full bg-blue-500 right-0 bottom-1 h-2 -rotate-1 opacity-50 -z-10"></span>
Featured
</span>
Tools
</h2> <a href="/browse" class="text-sm hover:underline">
View all →
</a> </div> <div class="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4"> ${allTools.map(
    (tool) => tool.data.feat === "true" && renderTemplate`${renderComponent($$result2, "ToolCard", $$ToolCard, { "tools": tool })}`
  )} </div> </section> <section id="categories" class="py-4"> <div class="group flex items-end justify-between"> <h2> <span class="relative"> <span class="absolute w-full bg-blue-500 right-0 bottom-1 h-2 -rotate-1 opacity-50 -z-10"></span>
All
</span>
Categories
</h2> <a href="/categories" class="text-sm hover:underline">
View all →
</a> </div> <div class="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4"> ${allCategories.map(
    (category) => (categoryDisplay = (category.charAt(0).toUpperCase() + category.slice(1)).replace(/-/g, " ")) && renderTemplate`${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "link": category, "category": categoryDisplay })}`
  )} </div> </section> ` })}`;
}, "/Users/new/Documents/GitHub/newsletter-supply/src/pages/index.astro", void 0);

const $$file = "/Users/new/Documents/GitHub/newsletter-supply/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$SignupForm as $, index$1 as a, index as b, index$2 as i };
