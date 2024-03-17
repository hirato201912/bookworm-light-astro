import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_CsyUObx7.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>A content writer with over 12 years experience working across brand identity, publishing and digital products. Maecenas sit amet purus eget ipsum elementum venenatis. Aenean maximus urna magna elementum venenatis quis non purus.</p>\n<p>Purus eget ipsum elementum venenatis. Aenean maximus urna magna elementum venenatis, quis rutrum mi semper non purus eget ipsum elementum venenatis, aenean maximus urna magna elementum.</p>";

				const frontmatter = {"title":"I’m John Doe, A content writer based in LDN, Currently at Bookworm","meta_title":"About","image":"/images/author.png","draft":false,"what_i_do":{"title":"What I Do","items":[{"title":"Content Writing","description":"Purus eget ipsum elementum venenatis, quis rutrum mi semper nonpurus eget ipsum elementum venenatis."},{"title":"Photography","description":"Aenean maximus urna magna elementum, quis rutrum mi semper non purus eget ipsum venenatis."},{"title":"Web Research","description":"Aenean maximus urna magna elementum venenatis, quis semper non purus eget ipsum venenatis."}]}};
				const file = "C:/Users/snjhi/OneDrive/デスクトップ/usami-astro/src/content/about/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\nA content writer with over 12 years experience working across brand identity, publishing and digital products. Maecenas sit amet purus eget ipsum elementum venenatis. Aenean maximus urna magna elementum venenatis quis non purus.\r\n\r\nPurus eget ipsum elementum venenatis. Aenean maximus urna magna elementum venenatis, quis rutrum mi semper non purus eget ipsum elementum venenatis, aenean maximus urna magna elementum.\r\n";
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
