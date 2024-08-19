import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B1hHZn6t.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>A short summary that appears after the subject line in email previews. The preheader, also known as preview text, is like a second chance to grab your reader’s attention.</p>\n<p>It’s the snippet of text that shows up in most email clients right after the <a href=\"/terms/subject-line\">subject line</a>, giving subscribers a peek at what’s inside before they open the email. This text is typically pulled from the first few lines of your newsletter if you don’t specify a custom preheader.</p>\n<p>Crafting an effective preheader can significantly boost your <a href=\"/terms/open-rate\">open rates</a>. It’s an opportunity to expand on your subject line, add a teaser for your main content, or include a call to action.</p>\n<p>Many newsletter creators use the preheader to complement their subject line, providing additional context or intrigue. When writing your preheader, keep in mind that different email clients and devices may display varying amounts of text, so it’s best to front-load the most important information.</p>";

				const frontmatter = {"title":"Preheader","description":"A short summary that appears after the subject line in email previews. The preheader, also known as preview text, is like.."};
				const file = "/Users/new/Documents/GitHub/newsletter-supply/src/content/terms/preheader.md";
				const url = undefined;
				function rawContent() {
					return "\nA short summary that appears after the subject line in email previews. The preheader, also known as preview text, is like a second chance to grab your reader's attention. \n\nIt's the snippet of text that shows up in most email clients right after the [subject line](/terms/subject-line), giving subscribers a peek at what's inside before they open the email. This text is typically pulled from the first few lines of your newsletter if you don't specify a custom preheader.\n\nCrafting an effective preheader can significantly boost your [open rates](/terms/open-rate). It's an opportunity to expand on your subject line, add a teaser for your main content, or include a call to action. \n\nMany newsletter creators use the preheader to complement their subject line, providing additional context or intrigue. When writing your preheader, keep in mind that different email clients and devices may display varying amounts of text, so it's best to front-load the most important information.";
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
