import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B1hHZn6t.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Make (formerly Integromat) is a powerful platform that connects apps and automates workflows without needing to code. It allows you to create complex automation scenarios by linking various online services and tools.</p>\n<p><b>Key features and benefits:</b></p>\n<ul>\n<li>Visual workflow builder: Design your automations using an intuitive drag-and-drop interface.</li>\n<li>Wide range of app integrations: Connect over 1000 apps to create custom workflows tailored to your needs.</li>\n<li>Flexible scheduling: Set your automations to run at specific times or trigger them based on certain events.</li>\n<li>Data mapping and transformation: Easily manipulate and transfer data between different apps and formats.</li>\n<li>Error handling and notifications: Get alerts when something goes wrong and set up automatic error resolution.</li>\n<li>Robust logging: Keep track of all your automation runs and troubleshoot issues with detailed logs.</li>\n</ul>\n<p>For newsletter creators, Make is a powerhouse that can streamline repetitive tasks and connect all your tools seamlessly. It frees up your time so you can focus on creating great content and growing your audience, rather than getting bogged down in manual processes.</p>";

				const frontmatter = {"title":"Make","feat":"false","updateDate":"2024-07-22T00:00:00.000Z","description":"Build and automate anything, from tasks and workflows to apps and systems.","link":"https://make.com/","features":"https://www.make.com/en/product","thumbnailImage":"./images/make-thumb.png","thumbnailAlt":"Screenshot of the Make website","categories":["automation"],"topics":["grow","monetise"],"icon":"./favicons/make.png"};
				const file = "/Users/new/Documents/GitHub/newsletter-supply/src/content/tools/make.md";
				const url = undefined;
				function rawContent() {
					return "\nMake (formerly Integromat) is a powerful platform that connects apps and automates workflows without needing to code. It allows you to create complex automation scenarios by linking various online services and tools.\n\n<b>Key features and benefits:</b>\n\n- Visual workflow builder: Design your automations using an intuitive drag-and-drop interface.\n- Wide range of app integrations: Connect over 1000 apps to create custom workflows tailored to your needs.\n- Flexible scheduling: Set your automations to run at specific times or trigger them based on certain events.\n- Data mapping and transformation: Easily manipulate and transfer data between different apps and formats.\n- Error handling and notifications: Get alerts when something goes wrong and set up automatic error resolution.\n- Robust logging: Keep track of all your automation runs and troubleshoot issues with detailed logs.\n\nFor newsletter creators, Make is a powerhouse that can streamline repetitive tasks and connect all your tools seamlessly. It frees up your time so you can focus on creating great content and growing your audience, rather than getting bogged down in manual processes.\n";
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
