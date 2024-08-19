import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B1hHZn6t.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Ghost is a powerful, independent platform designed for creating and managing online content. It offers a clean, user-friendly interface with features specifically tailored for professional publishers and newsletter creators.</p>\n<p><b>Key features and benefits:</b></p>\n<ul>\n<li>Built-in newsletter tools: Send and manage email newsletters directly from the platform.</li>\n<li>Customizable themes: Choose from various designs or create your own to match your brand.</li>\n<li>Membership and subscriptions: Easily set up paid subscriptions for your content.</li>\n<li>SEO optimization: Includes tools to help your content rank well in search engines.</li>\n<li>Integration options: Connect with popular services and tools to extend functionality.</li>\n<li>Full content ownership: Your content and data remain yours, with no algorithm controlling reach.</li>\n</ul>\n<p>Ghost provides newsletter creators with a flexible, all-in-one solution for publishing and distributing their work. It’s particularly suitable for those who want more control over their platform and are looking to monetize their content effectively.</p>";

				const frontmatter = {"title":"Ghost","feat":"false","updateDate":"2024-04-02T00:00:00.000Z","description":"A platform for writers & bloggers wanting to run a blog or newsletter and monetize it with memberships.","link":"https://ghost.org","features":"https://ghost.org/creators/","thumbnailImage":"./images/ghost-thumb.png","thumbnailAlt":"Screenshot of the Ghost website","categories":["email-platform","website-builder","blog"],"topics":["launch","grow","monetise"],"icon":"./favicons/ghost.png"};
				const file = "/Users/new/Documents/GitHub/newsletter-supply/src/content/tools/ghost.md";
				const url = undefined;
				function rawContent() {
					return "\n\nGhost is a powerful, independent platform designed for creating and managing online content. It offers a clean, user-friendly interface with features specifically tailored for professional publishers and newsletter creators.\n\n<b>Key features and benefits:</b>\n\n- Built-in newsletter tools: Send and manage email newsletters directly from the platform.\n- Customizable themes: Choose from various designs or create your own to match your brand.\n- Membership and subscriptions: Easily set up paid subscriptions for your content.\n- SEO optimization: Includes tools to help your content rank well in search engines.\n- Integration options: Connect with popular services and tools to extend functionality.\n- Full content ownership: Your content and data remain yours, with no algorithm controlling reach.\n\nGhost provides newsletter creators with a flexible, all-in-one solution for publishing and distributing their work. It's particularly suitable for those who want more control over their platform and are looking to monetize their content effectively.\n\n\n\n";
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
