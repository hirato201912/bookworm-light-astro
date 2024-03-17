/* empty css                              */
import { d as createAstro, e as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as renderComponent, i as Fragment } from '../astro_CsyUObx7.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$Image, s as slugify, c as config, h as humanize, a as $$Base } from './404_DiHN9pEE.mjs';
import 'clsx';
import { format } from 'date-fns';
import { BiCalendarEdit, BiCategoryAlt } from 'react-icons/bi';

const $$Astro$3 = createAstro("https://bookworm-light-astro.vercel.app");
const getSinglePage = async (collectionName) => {
  const allPages = await getCollection(collectionName);
  const removeIndex = allPages.filter((data) => data.id.match(/^(?!-)/));
  const removeDrafts = removeIndex.filter((data) => !data.data.draft);
  return removeDrafts;
};
const $$ContentParser = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ContentParser;
  return renderTemplate``;
}, "C:/Users/snjhi/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/usami-astro/src/lib/contentParser.astro", void 0);

const dateFormat = (date, pattern = "dd MMM, yyyy") => {
  const dateObj = new Date(date);
  const output = format(dateObj, pattern);
  return output;
};

const $$Astro$2 = createAstro("https://bookworm-light-astro.vercel.app");
const $$Posts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Posts;
  const authors = await getSinglePage("authors");
  const { summary_length } = config.settings;
  const { className, posts, fluid } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`row gy-5 gx-4 ${className} ${posts.length == 1 ? "justify-center" : ""} `, "class")}> ${posts.map((post, i) => renderTemplate`<div${addAttribute(i === 0 && fluid != false ? "col-12" : "col-12 sm:col-6", "class")}> ${post.data.image && renderTemplate`<a${addAttribute(`/${post.slug}`, "href")} class="rounded-lg block hover:text-primary overflow-hidden group"> ${renderComponent($$result, "Image", $$Image, { "class": "group-hover:scale-[1.03] transition duration-300 w-full", "src": post.data.image, "alt": post.data.title, "width": i === 0 ? 925 : 445, "height": i === 0 ? 475 : 230 })} </a>`} <ul class="mt-6 mb-4 flex flex-wrap items-center text-text"> <li class="mr-5"> ${authors.filter(
    (author) => post.data.authors.map((author2) => slugify(author2)).includes(slugify(author.data.title))
  ).map((author) => renderTemplate`<a${addAttribute(`/authors/${slugify(author.data.title)}`, "href")} class="flex items-center hover:text-primary font-medium"> ${author.data.image && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": author.data.image, "alt": author.data.title, "height": 50, "width": 50, "class": "mr-2 h-6 w-6 rounded-full" })}`} <span>${author.data.title}</span> </a>`)} </li> <li class="mr-5 flex items-center flex-wrap font-medium"> ${renderComponent($$result, "BiCalendarEdit", BiCalendarEdit, { "className": "mr-1 h-5 w-5 text-gray-600" })} ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${dateFormat(post.data.date)}` })} </li> <li class="mr-5 flex items-center flex-wrap"> ${renderComponent($$result, "BiCategoryAlt", BiCategoryAlt, { "className": "mr-1 h-[18px] w-[18px] text-gray-600" })} ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <ul> ${post.data.categories.map((category, i2) => renderTemplate`<li class="inline-block"> <a${addAttribute(`/categories/${slugify(category)}`, "href")} class="mr-2 hover:text-primary font-medium"> ${humanize(category)}${i2 !== post.data.categories.length - 1 && ","} </a> </li>`)} </ul> ` })} </li> </ul> <h3 class="mb-4"> <a${addAttribute(`/${post.slug}`, "href")} class="block hover:text-primary transition duration-300"> ${post.data.title} </a> </h3> <p class="text-text"> ${post.body?.slice(0, Number(i === 0 && fluid != false ? summary_length * 2 : summary_length))}...
</p> </div>`)} </div>`;
}, "C:/Users/snjhi/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/usami-astro/src/layouts/Posts.astro", void 0);

const $$Astro$1 = createAstro("https://bookworm-light-astro.vercel.app");
const getTaxonomy = async (collection, name) => {
  const singlePages = await getSinglePage(collection);
  const taxonomyPages = singlePages.map((page) => page.data[name]);
  let taxonomies = [];
  for (let i = 0; i < taxonomyPages.length; i++) {
    const categoryArray = taxonomyPages[i];
    for (let j = 0; j < categoryArray.length; j++) {
      taxonomies.push(slugify(categoryArray[j]));
    }
  }
  const taxonomy = [...new Set(taxonomies)];
  return taxonomy;
};
const $$TaxonomyParser = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TaxonomyParser;
  return renderTemplate``;
}, "C:/Users/snjhi/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/usami-astro/src/lib/taxonomyParser.astro", void 0);

const taxonomyFilter = (posts, name, key) => posts.filter(
  (post) => post.data[name].map((name2) => slugify(name2)).includes(key)
);

const $$Astro = createAstro("https://bookworm-light-astro.vercel.app");
async function getStaticPaths() {
  const categories = await getTaxonomy("posts", "categories");
  return categories.map((category) => {
    return {
      params: { category }
    };
  });
}
const $$category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const { category } = Astro2.params;
  const posts = await getSinglePage("posts");
  const filterByCategory = taxonomyFilter(posts, "categories", category);
  const title = humanize(category || "");
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title || "Category" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="section"> <div class="container"> <p class="text-center mb-4">Showing Posts From</p> <h1 class="h2 mb-16 text-center text-primary">${title}</h1> ${renderComponent($$result2, "Posts", $$Posts, { "posts": filterByCategory, "fluid": false })} </div> </div> ` })}`;
}, "C:/Users/snjhi/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/usami-astro/src/pages/categories/[category].astro", void 0);

const $$file = "C:/Users/snjhi/OneDrive/デスクトップ/usami-astro/src/pages/categories/[category].astro";
const $$url = "/categories/[category]";

const _category_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$category,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Posts as $, _category_ as _, getTaxonomy as a, dateFormat as d, getSinglePage as g, taxonomyFilter as t };
