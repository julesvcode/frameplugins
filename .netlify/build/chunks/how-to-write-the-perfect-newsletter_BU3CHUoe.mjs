import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BfjbwAM1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Text</p>\n<h2 id=\"title-1\">Title 1</h2>\n<h2 id=\"title-2\">Title 2</h2>\n<h2 id=\"title-3\">Title 3</h2>";

				const frontmatter = {"title":"Title","description":"description","pubDate":"2024-09-27T00:00:00.000Z","readingSpeed":3};
				const file = "/Users/new/Documents/GitHub/frameplugins/src/content/posts/how-to-write-the-perfect-newsletter.md";
				const url = undefined;
				function rawContent() {
					return "\nText\n\n## Title 1\n\n## Title 2\n\n## Title 3\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"title-1","text":"Title 1"},{"depth":2,"slug":"title-2","text":"Title 2"},{"depth":2,"slug":"title-3","text":"Title 3"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
