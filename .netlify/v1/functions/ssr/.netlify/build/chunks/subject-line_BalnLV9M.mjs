import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B1hHZn6t.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>The text that appears in the email header, briefly describing the email’s content. The subject line is like a mini-headline for your newsletter.</p>\n<p>It’s the first thing subscribers see in their inbox before opening your email. A good subject line should grab attention and give readers a clear idea of what to expect inside the newsletter.</p>\n<p>Crafting effective subject lines is a crucial skill for newsletter creators. They need to be concise yet intriguing, informative but not boring.</p>\n<p>The right subject line can significantly boost open rates, while a poor one might mean your carefully crafted content goes unread. Many newsletter writers spend considerable time testing and refining their subject lines to find what works best for their audience.</p>";

				const frontmatter = {"title":"Subject line","description":"The text that appears in the email header, briefly describing the email's content. The subject line is like a.."};
				const file = "/Users/new/Documents/GitHub/newsletter-supply/src/content/terms/subject-line.md";
				const url = undefined;
				function rawContent() {
					return "\nThe text that appears in the email header, briefly describing the email's content. The subject line is like a mini-headline for your newsletter. \n\nIt's the first thing subscribers see in their inbox before opening your email. A good subject line should grab attention and give readers a clear idea of what to expect inside the newsletter.\n\nCrafting effective subject lines is a crucial skill for newsletter creators. They need to be concise yet intriguing, informative but not boring. \n\nThe right subject line can significantly boost open rates, while a poor one might mean your carefully crafted content goes unread. Many newsletter writers spend considerable time testing and refining their subject lines to find what works best for their audience.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
