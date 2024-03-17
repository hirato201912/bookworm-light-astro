/* empty css                              */
import { d as createAstro, e as createComponent, r as renderTemplate, m as maybeRenderHead, h as renderComponent, u as unescapeHTML, g as addAttribute, i as Fragment } from '../astro_CsyUObx7.mjs';
import 'kleur/colors';
import { m as markdownify, $ as $$Image, b as $$Social, s as slugify, h as humanize, a as $$Base } from './404_DiHN9pEE.mjs';
import { g as getSinglePage, d as dateFormat } from './_category__iD1s_6gk.mjs';
import { BiCalendarEdit, BiCategoryAlt } from 'react-icons/bi';

const sortByDate = (array) => {
  const sortedArray = array.sort(
    (a, b) => new Date(b.data.date && b.data.date) - new Date(a.data.date && a.data.date)
  );
  return sortedArray;
};

const $$Astro$1 = createAstro("https://bookworm-light-astro.vercel.app");
const $$AuthorSingle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AuthorSingle;
  const { author } = Astro2.props;
  const { title, image, social } = author.data;
  const { Content } = await author.render();
  return renderTemplate`${maybeRenderHead()}<section class="section"> <div class="container"> <div class="mb-4 text-center md:px-24"> ${image && renderTemplate`<div class="mb-8"> ${renderComponent($$result, "Image", $$Image, { "src": image, "class": "mx-auto rounded-lg", "height": 150, "width": 150, "alt": title })} </div>`} <h1 class="page-heading h2 mb-8">${unescapeHTML(markdownify(title))}</h1> ${renderComponent($$result, "Social", $$Social, { "source": social, "className": "social-icons-simple" })} <div class="content"> ${renderComponent($$result, "Content", Content, {})} </div> </div> </div> </section>`;
}, "C:/Users/snjhi/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/usami-astro/src/layouts/AuthorSingle.astro", void 0);

const $$Astro = createAstro("https://bookworm-light-astro.vercel.app");
async function getStaticPaths() {
  const authors = await getSinglePage("authors");
  const paths = authors.map((author) => ({
    params: {
      single: author.slug
    },
    props: { author }
  }));
  return paths;
}
const $$single = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$single;
  const { author } = Astro2.props;
  const { title, meta_title, description, image } = author.data;
  const posts = await getSinglePage("posts");
  const sortPostsByDate = sortByDate(posts);
  const currentPosts = sortPostsByDate.filter((post) => {
    return post.data.authors.map((author2) => slugify(author2)).includes(slugify(title));
  });
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "image": image }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AuthorSingle", $$AuthorSingle, { "author": author })} ${currentPosts.length > 0 && renderTemplate`${maybeRenderHead()}<section class="section pt-0"> <div class="container"> <h2 class="mb-8 text-center h3">Recent Posts</h2> <div${addAttribute(`row gy-4 ${currentPosts.length < 3 ? "justify-center" : ""}`, "class")}> ${currentPosts.map((post, i) => renderTemplate`<div class="col-12 sm:col-6 lg:col-4"> ${post.data.image && renderTemplate`<a${addAttribute(`/${post.slug}`, "href")} class="rounded-lg block hover:text-primary overflow-hidden group"> ${renderComponent($$result2, "Image", $$Image, { "class": "group-hover:scale-[1.05] transition duration-300 w-full", "src": post.data.image, "alt": post.data.title, "width": 445, "height": 230 })} </a>`} <ul class="mt-4 text-text flex flex-wrap items-center text-sm"> <li class="mb-2 mr-4 flex items-center flex-wrap font-medium"> ${renderComponent($$result2, "BiCalendarEdit", BiCalendarEdit, { "className": "mr-1 h-[16px] w-[16px] text-gray-600" })} ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${dateFormat(post.data.date)}` })} </li> <li class="mb-2 mr-4 flex items-center flex-wrap"> ${renderComponent($$result2, "BiCategoryAlt", BiCategoryAlt, { "className": "mr-1 h-[16px] w-[16px] text-gray-600" })} ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <ul> ${post.data.categories.map(
    (category, i2) => renderTemplate`<li class="inline-block"> <a${addAttribute(`/categories/${slugify(category)}`, "href")} class="mr-2 hover:text-primary font-medium"> ${humanize(category)} ${i2 !== post.data.categories.length - 1 && ","} </a> </li>`
  )} </ul> ` })} </li> </ul> <h3 class="h5"> <a${addAttribute(`/${post.slug}`, "href")} class="block hover:text-primary transition duration-300"> ${post.data.title} </a> </h3> </div>`)} </div> </div> </section>`}` })}`;
}, "C:/Users/snjhi/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/usami-astro/src/pages/authors/[single].astro", void 0);

const $$file = "C:/Users/snjhi/OneDrive/デスクトップ/usami-astro/src/pages/authors/[single].astro";
const $$url = "/authors/[single]";

const _single_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$single,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _single_ as _, sortByDate as s };
