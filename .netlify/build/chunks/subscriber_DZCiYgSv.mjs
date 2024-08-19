import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B1hHZn6t.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>A person who signs up to receive regular updates from a newsletter. A subscriber is someone who has opted to receive content from a newsletter on an ongoing basis.</p>\n<p>This typically involves providing an email address to join a mailing list. Subscribers are the lifeblood of newsletters, as they represent an engaged audience interested in the content being shared.</p>\n<p>For newsletter creators, growing and maintaining a subscriber base is crucial. It’s not just about numbers, but about cultivating a community of readers who find value in the content.</p>\n<p>Effective newsletter strategies often focus on attracting new subscribers while keeping existing ones engaged and preventing unsubscribes.</p>";

				const frontmatter = {"title":"Subscriber","description":"A person who signs up to receive regular updates from a newsletter. A subscriber is someone who has opted to.."};
				const file = "/Users/new/Documents/GitHub/newsletter-supply/src/content/terms/subscriber.md";
				const url = undefined;
				function rawContent() {
					return "\nA person who signs up to receive regular updates from a newsletter. A subscriber is someone who has opted to receive content from a newsletter on an ongoing basis. \n\nThis typically involves providing an email address to join a mailing list. Subscribers are the lifeblood of newsletters, as they represent an engaged audience interested in the content being shared.\n\nFor newsletter creators, growing and maintaining a subscriber base is crucial. It's not just about numbers, but about cultivating a community of readers who find value in the content. \n\nEffective newsletter strategies often focus on attracting new subscribers while keeping existing ones engaged and preventing unsubscribes.";
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
