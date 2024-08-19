import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B1hHZn6t.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"main-features\">Main features</h2>\n<p>MailerLite’s main features include:</p>\n<ul>\n<li>Design your own emails to create beautiful campaigns.</li>\n<li>Set up advanced worklows to automate your email sequences.</li>\n<li>Build stunning websites and drive traffic to them with a blog.</li>\n<li>Collect email addresses via your own landing pages and sign up forms.</li>\n<li>Integrate your online store to your email campaigns.</li>\n</ul>";

				const frontmatter = {"title":"MailerLite","feat":"true","updateDate":"2024-04-02T00:00:00.000Z","description":"The all in one solution to grow and monetise your audience with email marketing. Collect email addresses from customers and strengthen your relationships with them via a wide range of features.","link":"https://mailerlite.com","features":"https://www.mailerlite.com/features","thumbnailImage":"./images/mailerlite-thumb.png","thumbnailAlt":"Screenshot of the MailerLite website","categories":["email-platform"],"topics":["launch","grow","monetise"],"icon":"./favicons/mailerlite.webp"};
				const file = "/Users/new/Documents/GitHub/newsletter-supply/src/content/tools/mailerlite.md";
				const url = undefined;
				function rawContent() {
					return "\n\n## Main features\n\nMailerLite's main features include:\n\n- Design your own emails to create beautiful campaigns.\n- Set up advanced worklows to automate your email sequences.\n- Build stunning websites and drive traffic to them with a blog.\n- Collect email addresses via your own landing pages and sign up forms.\n- Integrate your online store to your email campaigns.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"main-features","text":"Main features"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
