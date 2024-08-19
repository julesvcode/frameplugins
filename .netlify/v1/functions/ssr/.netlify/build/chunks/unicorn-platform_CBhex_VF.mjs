import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B1hHZn6t.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Unicorn Platform is a straightforward tool for creating landing pages without coding skills. It focuses on simplicity and speed, allowing users to quickly set up professional-looking pages for their projects or businesses.</p>\n<p><b>Key features and benefits:</b></p>\n<ul>\n<li>Easy-to-use editor: Design pages using a drag-and-drop interface with pre-made blocks.</li>\n<li>Responsive design: Automatically adjusts layouts for different screen sizes.</li>\n<li>Custom domains: Connect your own domain name for a professional look.</li>\n<li>Analytics integration: Track page performance with built-in analytics tools.</li>\n<li>SEO-friendly: Includes features to help optimize your page for search engines.</li>\n<li>Fast loading times: Ensures visitors can access your content quickly.</li>\n</ul>\n<p>Unicorn Platform helps newsletter creators quickly set up attractive landing pages to capture subscribers. It’s ideal for those who want a no-fuss solution to showcase their newsletter and grow their audience online.</p>";

				const frontmatter = {"title":"Unicorn Platform","feat":"false","updateDate":"2024-07-23T00:00:00.000Z","description":"Create websites with this AI website builder, without design or development skills.","link":"https://unicornplatform.com/","features":"https://unicornplatform.com/","thumbnailImage":"./images/unicornplatform-thumb.png","thumbnailAlt":"Screenshot of the Unicorn Platform website","categories":["website-builder"],"topics":["launch","grow","monetise"],"icon":"./favicons/unicorn.png"};
				const file = "/Users/new/Documents/GitHub/newsletter-supply/src/content/tools/unicorn-platform.md";
				const url = undefined;
				function rawContent() {
					return "\nUnicorn Platform is a straightforward tool for creating landing pages without coding skills. It focuses on simplicity and speed, allowing users to quickly set up professional-looking pages for their projects or businesses.\n\n<b>Key features and benefits:</b>\n\n- Easy-to-use editor: Design pages using a drag-and-drop interface with pre-made blocks.\n- Responsive design: Automatically adjusts layouts for different screen sizes.\n- Custom domains: Connect your own domain name for a professional look.\n- Analytics integration: Track page performance with built-in analytics tools.\n- SEO-friendly: Includes features to help optimize your page for search engines.\n- Fast loading times: Ensures visitors can access your content quickly.\n\nUnicorn Platform helps newsletter creators quickly set up attractive landing pages to capture subscribers. It's ideal for those who want a no-fuss solution to showcase their newsletter and grow their audience online.";
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
