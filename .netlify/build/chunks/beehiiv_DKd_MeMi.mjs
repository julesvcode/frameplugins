import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B1hHZn6t.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Beehiiv is a user-friendly platform designed specifically for creating and managing newsletters. It offers a range of features to help content creators grow their audience and monetize their work efficiently.</p>\n<p><b>Key features and benefits:</b></p>\n<ul>\n<li>Easy-to-use editor: Write and design your newsletters with a simple, intuitive interface.</li>\n<li>Built-in analytics: Track your newsletter’s performance with detailed metrics and insights.</li>\n<li>Audience growth tools: Utilize referral programs and social sharing options to expand your readership.</li>\n<li>Monetization options: Implement paid subscriptions and sponsorships to earn money from your content.</li>\n<li>Customizable landing pages: Create attractive sign-up pages to capture new subscribers.</li>\n<li>Email automation: Set up automated welcome series and drip campaigns to engage your audience.</li>\n</ul>\n<p>Beehiiv streamlines the process of running a newsletter, making it easier for creators to focus on producing great content. Whether you’re just starting out or looking to take your newsletter to the next level, Beehiiv provides the tools you need to succeed.</p>";

				const frontmatter = {"title":"Beehiiv","feat":"true","updateDate":"2024-04-02T00:00:00.000Z","description":"Beehiiv is a modern newsletter platform well know for help businesses and content creators grow their audience. Its ease to use and impressive list of features makes it one of the most popular plarforms for creators.","link":"https://beehiiv.com?via=88pixels","features":"https://www.beehiiv.com/features?via=88pixels","thumbnailImage":"./images/beehiiv-thumb.png","thumbnailAlt":"Screenshot of the Beehiiv website","categories":["email-platform","website-builder"],"topics":["launch","grow","monetise"],"icon":"./favicons/beehiiv.png"};
				const file = "/Users/new/Documents/GitHub/newsletter-supply/src/content/tools/beehiiv.md";
				const url = undefined;
				function rawContent() {
					return "\nBeehiiv is a user-friendly platform designed specifically for creating and managing newsletters. It offers a range of features to help content creators grow their audience and monetize their work efficiently.\n\n<b>Key features and benefits:</b>\n\n- Easy-to-use editor: Write and design your newsletters with a simple, intuitive interface.\n- Built-in analytics: Track your newsletter's performance with detailed metrics and insights.\n- Audience growth tools: Utilize referral programs and social sharing options to expand your readership.\n- Monetization options: Implement paid subscriptions and sponsorships to earn money from your content.\n- Customizable landing pages: Create attractive sign-up pages to capture new subscribers.\n- Email automation: Set up automated welcome series and drip campaigns to engage your audience.\n\nBeehiiv streamlines the process of running a newsletter, making it easier for creators to focus on producing great content. Whether you're just starting out or looking to take your newsletter to the next level, Beehiiv provides the tools you need to succeed.";
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
