import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_CsyUObx7.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>A balloon is a flexible bag that can be inflated with a gas, such as helium, hydrogen, nitrous oxide, oxygen, and air. For special tasks, balloons can be filled with smoke, liquid water, granular media, or light sources.</p>\n<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!</p>\n<h3 id=\"creative-design\">Creative Design</h3>\n<p>Nam ut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.</p>\n<blockquote>\n<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!</p>\n</blockquote>\n<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!</p>";

				const frontmatter = {"title":"Why a balloon is a flexible bag that can be inflated with a gas","description":"meta description","image":"/images/posts/04.jpg","date":"2021-02-02T10:56:47.000Z","draft":false,"authors":["Mark Dinn"],"tags":["Balloon","Gas"],"categories":["Accessories"]};
				const file = "C:/Users/snjhi/OneDrive/デスクトップ/usami-astro/src/content/posts/post-4.md";
				const url = undefined;
				function rawContent() {
					return "\r\nA balloon is a flexible bag that can be inflated with a gas, such as helium, hydrogen, nitrous oxide, oxygen, and air. For special tasks, balloons can be filled with smoke, liquid water, granular media, or light sources.\r\n\r\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\r\n\r\n### Creative Design\r\n\r\nNam ut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.\r\n\r\n> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\r\n\r\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"creative-design","text":"Creative Design"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
