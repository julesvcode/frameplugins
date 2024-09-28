import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BfjbwAM1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Framer is a user-friendly tool for designers to design and publish websites without coding. It offers a drag-and-drop interface along with advanced features for creating responsive and interactive web designs.</p>\n<p><b>Key features and benefits:</b></p>\n<ul>\n<li>Intuitive design interface: Create layouts easily with a visual editor and pre-built components.</li>\n<li>Responsive design: Ensure your website looks great on all devices with automatic responsiveness.</li>\n<li>Custom interactions: Add animations and interactive elements to engage visitors.</li>\n<li>SEO optimization: Built-in tools to help improve your site’s search engine visibility.</li>\n<li>Integration options: Connect with various third-party tools and services for extended functionality.</li>\n<li>Hosting included: Publish your website directly from Framer with reliable hosting.</li>\n</ul>\n<p>Framer enables newsletter creators to build professional-looking landing pages and websites to showcase their content. It’s particularly useful for those who want to create a strong online presence without needing extensive web development skills.</p>";

				const frontmatter = {"title":"Framer","feat":true,"updateDate":"2024-05-02T00:00:00.000Z","description":"A website builder that empowers users to design and publish stunning websites without the need to code.","link":"/framer","features":"https://www.framer.com/features/design-layout?via=julesvcode","thumbnailImage":"./images/framer-thumb.png","thumbnailAlt":"Screenshot of the Framer website","categories":["website-builder"],"topics":["launch","grow"],"icon":"./favicons/framer.png"};
				const file = "/Users/new/Documents/GitHub/frameplugins/src/content/plugins/framer.md";
				const url = undefined;
				function rawContent() {
					return "\nFramer is a user-friendly tool for designers to design and publish websites without coding. It offers a drag-and-drop interface along with advanced features for creating responsive and interactive web designs.\n\n<b>Key features and benefits:</b>\n\n- Intuitive design interface: Create layouts easily with a visual editor and pre-built components.\n- Responsive design: Ensure your website looks great on all devices with automatic responsiveness.\n- Custom interactions: Add animations and interactive elements to engage visitors.\n- SEO optimization: Built-in tools to help improve your site's search engine visibility.\n- Integration options: Connect with various third-party tools and services for extended functionality.\n- Hosting included: Publish your website directly from Framer with reliable hosting.\n\nFramer enables newsletter creators to build professional-looking landing pages and websites to showcase their content. It's particularly useful for those who want to create a strong online presence without needing extensive web development skills.\n";
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
