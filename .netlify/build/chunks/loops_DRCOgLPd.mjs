import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B1hHZn6t.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Loops is a modern newsletter tool that focuses on personalization and reader engagement. It offers features to help creators build stronger connections with their audience and adapt content to individual preferences.</p>\n<p><b>Key features and benefits:</b></p>\n<ul>\n<li>Dynamic content: Customize newsletter sections based on subscriber data and behavior.</li>\n<li>AI-powered recommendations: Suggest relevant content to each reader automatically.</li>\n<li>Interactive elements: Add polls, quizzes, and feedback forms to boost engagement.</li>\n<li>Detailed analytics: Track reader interactions and content performance with in-depth metrics.</li>\n<li>Monetization options: Implement paid subscriptions and sponsorships easily.</li>\n<li>Integration capabilities: Connect with other tools and platforms to streamline your workflow.</li>\n</ul>\n<p>Loops enables newsletter creators to deliver more personalized and engaging content to their readers. By tailoring the newsletter experience to individual preferences, it can help increase reader satisfaction and loyalty.</p>";

				const frontmatter = {"title":"Loops","feat":"false","updateDate":"2024-04-02T00:00:00.000Z","description":"A modern email marketing tool with a focus on SaaS businesses. Loops is the perfect platform to send marketing and transactional emails.","link":"https://loops.so/","features":"https://loops.so/","thumbnailImage":"./images/loops-thumb.png","thumbnailAlt":"Screenshot of the Loops website","categories":["email-platform","business"],"topics":["launch","grow"],"icon":"./favicons/loops.png"};
				const file = "/Users/new/Documents/GitHub/newsletter-supply/src/content/tools/loops.md";
				const url = undefined;
				function rawContent() {
					return "\n\nLoops is a modern newsletter tool that focuses on personalization and reader engagement. It offers features to help creators build stronger connections with their audience and adapt content to individual preferences.\n\n<b>Key features and benefits:</b>\n\n- Dynamic content: Customize newsletter sections based on subscriber data and behavior.\n- AI-powered recommendations: Suggest relevant content to each reader automatically.\n- Interactive elements: Add polls, quizzes, and feedback forms to boost engagement.\n- Detailed analytics: Track reader interactions and content performance with in-depth metrics.\n- Monetization options: Implement paid subscriptions and sponsorships easily.\n- Integration capabilities: Connect with other tools and platforms to streamline your workflow.\n\nLoops enables newsletter creators to deliver more personalized and engaging content to their readers. By tailoring the newsletter experience to individual preferences, it can help increase reader satisfaction and loyalty.";
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
