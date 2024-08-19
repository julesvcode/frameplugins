import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B1hHZn6t.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>The percentage of email recipients who click on one or more links in a newsletter. Click-through rate measures how engaging your newsletter content is by tracking how many readers take action on the links you include.</p>\n<p>It’s calculated by dividing the number of unique clicks by the number of delivered emails, then multiplying by 100. For example, if 100 people received your newsletter and 5 of them clicked on a link, your CTR would be 5%.</p>\n<p>A high CTR suggests that your content is relevant and interesting to your audience, encouraging them to engage further.</p>\n<p>It’s a valuable metric for evaluating the effectiveness of your call-to-action buttons, article teasers, or any other clickable elements in your newsletter. By analysing your CTR, as well as your <a href=\"/terms/open-rate\">open rate</a> you can gain insights into what types of content or offers your subscribers find most compelling, helping you refine your newsletter strategy over time.</p>";

				const frontmatter = {"title":"Click-through rate (CTR)","description":"The percentage of email recipients who click on one or more links in a newsletter. Click-through rate measures how engaging your.."};
				const file = "/Users/new/Documents/GitHub/newsletter-supply/src/content/terms/click-through-rate.md";
				const url = undefined;
				function rawContent() {
					return "\nThe percentage of email recipients who click on one or more links in a newsletter. Click-through rate measures how engaging your newsletter content is by tracking how many readers take action on the links you include. \n\nIt's calculated by dividing the number of unique clicks by the number of delivered emails, then multiplying by 100. For example, if 100 people received your newsletter and 5 of them clicked on a link, your CTR would be 5%. \n\nA high CTR suggests that your content is relevant and interesting to your audience, encouraging them to engage further. \n\nIt's a valuable metric for evaluating the effectiveness of your call-to-action buttons, article teasers, or any other clickable elements in your newsletter. By analysing your CTR, as well as your [open rate](/terms/open-rate) you can gain insights into what types of content or offers your subscribers find most compelling, helping you refine your newsletter strategy over time.";
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
