import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B1hHZn6t.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Jasper is an artificial intelligence tool that helps create various types of content quickly. It uses advanced language models to generate human-like text based on your inputs and prompts.</p>\n<p><b>Key features and benefits:</b></p>\n<ul>\n<li>Versatile content creation: Generates articles, social media posts, and email copy for diverse needs.</li>\n<li>Templates for different purposes: Offers pre-made templates to streamline content creation for specific formats.</li>\n<li>SEO optimization: Helps create content optimized for search engines to improve visibility.</li>\n<li>Plagiarism checker: Ensures your content is original and free from unintentional copying.</li>\n<li>Multiple language support: Creates content in various languages to reach a wider audience.</li>\n<li>Integration with other tools: Works with popular platforms like Grammarly and Copyscape for enhanced functionality.</li>\n</ul>\n<p>Jasper can be a valuable asset for newsletter creators, helping to generate ideas and produce content more efficiently. It can save time and boost productivity, allowing you to focus on refining and personalizing your newsletter’s voice.</p>";

				const frontmatter = {"title":"Jasper","feat":"false","updateDate":"2024-05-02T00:00:00.000Z","description":"An AI writing assistant that can be used to create and improve your newsletter copy. It can also be used for other marketing content, including blog posts, social media content, and website copy.","link":"https://www.jasper.ai","features":"https://www.jasper.ai/products/campaigns","thumbnailImage":"./images/jasper-thumb.png","thumbnailAlt":"Screenshot of the Jasper website","categories":["copywriting","ai"],"topics":["launch","grow"],"icon":"./favicons/jasper.png"};
				const file = "/Users/new/Documents/GitHub/newsletter-supply/src/content/tools/jasper.md";
				const url = undefined;
				function rawContent() {
					return "\nJasper is an artificial intelligence tool that helps create various types of content quickly. It uses advanced language models to generate human-like text based on your inputs and prompts.\n\n<b>Key features and benefits:</b>\n\n- Versatile content creation: Generates articles, social media posts, and email copy for diverse needs.\n- Templates for different purposes: Offers pre-made templates to streamline content creation for specific formats.\n- SEO optimization: Helps create content optimized for search engines to improve visibility.\n- Plagiarism checker: Ensures your content is original and free from unintentional copying.\n- Multiple language support: Creates content in various languages to reach a wider audience.\n- Integration with other tools: Works with popular platforms like Grammarly and Copyscape for enhanced functionality.\n\nJasper can be a valuable asset for newsletter creators, helping to generate ideas and produce content more efficiently. It can save time and boost productivity, allowing you to focus on refining and personalizing your newsletter's voice.";
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
