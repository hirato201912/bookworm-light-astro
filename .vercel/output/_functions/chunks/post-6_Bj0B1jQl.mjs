import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_CsyUObx7.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Almost every day for the past nine or so months has felt like March 13, and that can sometimes make it difficult to want to wake up for the day ahead of you.</p>\n<p>To make a morning person out of you, the wake-up light simulates the sunrise to gradually ease you awake. This allows you to wake up more naturally rather than being jolted awake by the default iPhone alarm sound, which honestly triggers my fight or flight response.</p>\n<h3 id=\"creative-design\">Creative Design</h3>\n<p>Nam ut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.</p>\n<blockquote>\n<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!</p>\n</blockquote>\n<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!</p>";

				const frontmatter = {"title":"Become a morning person with the help of alarm clock","description":"meta description","image":"/images/posts/06.jpg","date":"2021-02-03T10:56:47.000Z","draft":false,"authors":["Mark Dinn"],"tags":["Alarm","Clock"],"categories":["LifeStyle"]};
				const file = "C:/Users/snjhi/OneDrive/デスクトップ/usami-astro/src/content/posts/post-6.md";
				const url = undefined;
				function rawContent() {
					return "\r\nAlmost every day for the past nine or so months has felt like March 13, and that can sometimes make it difficult to want to wake up for the day ahead of you.\r\n\r\nTo make a morning person out of you, the wake-up light simulates the sunrise to gradually ease you awake. This allows you to wake up more naturally rather than being jolted awake by the default iPhone alarm sound, which honestly triggers my fight or flight response.\r\n\r\n### Creative Design\r\n\r\nNam ut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.\r\n\r\n> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\r\n\r\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!\r\n";
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
