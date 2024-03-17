import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_CsyUObx7.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr navigation et dolore magna aliqua.</p>";

				const frontmatter = {"title":"Mark Dinn","image":"/images/authors/mark-dinn.jpg","description":"this is meta description","social":{"facebook":"https://www.facebook.com/","twitter":"https://www.twitter.com/","instagram":"https://www.instagram.com/"}};
				const file = "C:/Users/snjhi/OneDrive/デスクトップ/usami-astro/src/content/authors/mark-dinn.md";
				const url = undefined;
				function rawContent() {
					return "\r\nlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr navigation et dolore magna aliqua.\r\n";
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
