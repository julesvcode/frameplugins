import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B1hHZn6t.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"main-features\">Main features</h2>\n<p>EmailOctopus is a cost-effective email marketing tool designed for businesses and individuals. It offers a range of features to help you create, send, and track email campaigns without breaking the bank.</p>\n<p><b>Key features and benefits:</b></p>\n<ul>\n<li>User-friendly interface: Create and manage email campaigns with an easy-to-use dashboard.</li>\n<li>Customizable templates: Design eye-catching emails using pre-made templates or build your own.</li>\n<li>List management: Organize and segment your subscribers for targeted messaging.</li>\n<li>Automation: Set up automated email sequences to engage your audience at the right time.</li>\n<li>Detailed analytics: Track open rates, click-through rates, and other important metrics.</li>\n<li>Affordable pricing: Offers competitive rates, especially for larger subscriber lists.</li>\n</ul>\n<p>EmailOctopus provides newsletter creators with essential email marketing tools at a budget-friendly price point. It’s particularly useful for those looking to grow their subscriber base without incurring high costs typically associated with larger email platforms.</p>";

				const frontmatter = {"title":"EmailOctopus","feat":"false","updateDate":"2024-04-02T00:00:00.000Z","description":"A simple and affordable email marketing tool to grow your business. It includes all the features you need to grow your audience, engage with your subscribers and get results.","link":"https://emailoctopus.com","features":"https://emailoctopus.com/features","thumbnailImage":"./images/emailoctopus-thumb.png","thumbnailAlt":"Screenshot of the EmailOctopus website","categories":["email-platform","business"],"topics":["launch","grow"],"icon":"./favicons/emailoctopus.png"};
				const file = "/Users/new/Documents/GitHub/newsletter-supply/src/content/tools/emailoctopus.md";
				const url = undefined;
				function rawContent() {
					return "\n\n## Main features\n\nEmailOctopus is a cost-effective email marketing tool designed for businesses and individuals. It offers a range of features to help you create, send, and track email campaigns without breaking the bank.\n\n<b>Key features and benefits:</b>\n\n- User-friendly interface: Create and manage email campaigns with an easy-to-use dashboard.\n- Customizable templates: Design eye-catching emails using pre-made templates or build your own.\n- List management: Organize and segment your subscribers for targeted messaging.\n- Automation: Set up automated email sequences to engage your audience at the right time.\n- Detailed analytics: Track open rates, click-through rates, and other important metrics.\n- Affordable pricing: Offers competitive rates, especially for larger subscriber lists.\n\nEmailOctopus provides newsletter creators with essential email marketing tools at a budget-friendly price point. It's particularly useful for those looking to grow their subscriber base without incurring high costs typically associated with larger email platforms.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"main-features","text":"Main features"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
