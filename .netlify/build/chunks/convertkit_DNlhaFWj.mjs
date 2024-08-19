import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B1hHZn6t.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>ConvertKit is a user-friendly platform designed for creators and newsletter publishers. It simplifies email marketing with tools that help you grow and engage your audience.</p>\n<p><b>Key features and benefits:</b></p>\n<ul>\n<li>Easy-to-use email editor: Create eye-catching emails without needing to be a design pro.</li>\n<li>Automated email sequences: Set up welcome series or courses that send automatically to new subscribers.</li>\n<li>Customizable sign-up forms: Make forms that match your style and grab attention on your website.</li>\n<li>Subscriber tagging and segmentation: Organize your audience based on their interests or actions for targeted content.</li>\n<li>Landing page builder: Whip up quick landing pages to promote your newsletter or special offers.</li>\n<li>Visual automation workflows: Map out complex email journeys with a simple drag-and-drop interface.</li>\n</ul>\n<p>ConvertKit is a game-changer for newsletter creators, offering the tools to grow your subscriber list and keep your audience hooked. With its straightforward interface and powerful features, it takes the headache out of email marketing so you can focus on creating great content.</p>";

				const frontmatter = {"title":"ConvertKit","feat":"false","updateDate":"2024-04-02T00:00:00.000Z","description":"An email platform built for creators to grow and connect with their audience, as well as run their whole email marketing strategy and earn money from digital products.","link":"https://convertkit.com/","features":"https://convertkit.com/features","thumbnailImage":"./images/convertkit-thumb.png","thumbnailAlt":"Screenshot of the ConvertKit website","categories":["email-platform"],"topics":["launch","grow","monetise"],"icon":"./favicons/convertkit.png"};
				const file = "/Users/new/Documents/GitHub/newsletter-supply/src/content/tools/convertkit.md";
				const url = undefined;
				function rawContent() {
					return "\nConvertKit is a user-friendly platform designed for creators and newsletter publishers. It simplifies email marketing with tools that help you grow and engage your audience.\n\n<b>Key features and benefits:</b>\n\n- Easy-to-use email editor: Create eye-catching emails without needing to be a design pro.\n- Automated email sequences: Set up welcome series or courses that send automatically to new subscribers.\n- Customizable sign-up forms: Make forms that match your style and grab attention on your website.\n- Subscriber tagging and segmentation: Organize your audience based on their interests or actions for targeted content.\n- Landing page builder: Whip up quick landing pages to promote your newsletter or special offers.\n- Visual automation workflows: Map out complex email journeys with a simple drag-and-drop interface.\n\nConvertKit is a game-changer for newsletter creators, offering the tools to grow your subscriber list and keep your audience hooked. With its straightforward interface and powerful features, it takes the headache out of email marketing so you can focus on creating great content.\n";
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
