import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B1hHZn6t.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"main-features\">Main features</h2>\n<p>Here are the main reasons why you should consider picking Substack:</p>\n<ul>\n<li>Free forever. Substack only take a 10% cut of your revenues if you turn on paid subscriptions.</li>\n<li>Publications can include text, video, audio, and video.</li>\n<li>Lets you reach your subscribers in their inboxes as well as within the Substack app.</li>\n<li>Substack’s own network can help you grow your audience faster.</li>\n</ul>";

				const frontmatter = {"title":"Substack","feat":"false","updateDate":"2024-04-02T00:00:00.000Z","description":"A free newsletter platform that let you publish posts directly to subscribers with text, video, audio, and video. Anyone can start a publication on Substack in minutes.","link":"https://substack.com/","features":"https://substack.com/","thumbnailImage":"./images/substack-thumb.png","thumbnailAlt":"Screenshot of the Substack website","categories":["email-platform"],"topics":["launch","grow","monetise"],"icon":"./favicons/substack.png"};
				const file = "/Users/new/Documents/GitHub/newsletter-supply/src/content/tools/substack.md";
				const url = undefined;
				function rawContent() {
					return "\n\n## Main features\n\nHere are the main reasons why you should consider picking Substack:\n\n- Free forever. Substack only take a 10% cut of your revenues if you turn on paid subscriptions.\n- Publications can include text, video, audio, and video.\n- Lets you reach your subscribers in their inboxes as well as within the Substack app.\n- Substack's own network can help you grow your audience faster.";
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
