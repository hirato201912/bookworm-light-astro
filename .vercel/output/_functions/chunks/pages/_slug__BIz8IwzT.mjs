/* empty css                              */
import { d as createAstro, e as createComponent, r as renderTemplate, m as maybeRenderHead, h as renderComponent, g as addAttribute } from '../astro_CsyUObx7.mjs';
import 'kleur/colors';
import { $ as $$Image, m as markdownify, c as config, a as $$Base } from './404_DiHN9pEE.mjs';
import { BsArrowRightCircle } from 'react-icons/bs';
import { g as getSinglePage, $ as $$Posts } from './_category__iD1s_6gk.mjs';
import { s as sortByDate } from './_single__DTHRb2vE.mjs';
import 'clsx';

const $$Astro$3 = createAstro("https://bookworm-light-astro.vercel.app");
const $$Authors = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Authors;
  const { authors } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="row justify-center"> ${authors.map((author) => renderTemplate`<div class="col-12 mb-8 sm:col-6 md:col-4"> ${author.data.image && renderTemplate`<div class="mb-4"> ${renderComponent($$result, "Image", $$Image, { "src": author.data.image, "alt": author.data.title, "height": 150, "width": 150, "class": "mx-auto rounded-lg" })} </div>`} <h3 class="h4 mt-8 mb-3"> <a${addAttribute(`/authors/${author.slug}`, "href")} class="block hover:text-primary transition duration-200"> ${author.data.title} </a> </h3> <p class="mb-3">${markdownify(author.body.slice(0, 100))}</p> <a${addAttribute(`/authors/${author.slug}`, "href")} class="inline-flex items-center text-primary transition duration-200 hover:opacity-70">
Read More ${renderComponent($$result, "BsArrowRightCircle", BsArrowRightCircle, { "className": "inline ml-2" })} </a> </div>`)} </div>`;
}, "C:/Users/snjhi/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/usami-astro/src/layouts/Authors.astro", void 0);

const $$Astro$2 = createAstro("https://bookworm-light-astro.vercel.app");
const $$Pagination = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { section, currentPage, totalPages } = Astro2.props;
  const indexPageLink = currentPage === 2;
  const hasPrevPage = currentPage > 1;
  const hasNextPage = totalPages > currentPage;
  let pageList = [];
  for (let i = 1; i <= totalPages; i++) {
    pageList.push(i);
  }
  return renderTemplate`${totalPages > 1 && renderTemplate`${maybeRenderHead()}<nav class="mb-4 flex justify-center space-x-2 text-center" aria-label="Pagination">${hasPrevPage ? renderTemplate`<a${addAttribute(
    indexPageLink ? `${section ? "/" + section : "/"}` : `${section ? "/" + section : ""}/page/${currentPage - 1}`,
    "href"
  )} class="border border-primary hover:bg-primary hover:text-white rounded-md h-10 w-10 leading-[36px] font-semibold text-dark flex items-center justify-center transition duration-200"><span class="sr-only">Previous</span><svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></a>` : renderTemplate`<span class="border border-gray-400 opacity-40 rounded-md h-10 w-10 leading-[36px] font-semibold text-dark flex items-center justify-center pointer-events-none"><span class="sr-only">Previous</span><svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>`}${pageList.map(
    (pagination, i) => pagination === currentPage ? renderTemplate`<span aria-current="page"${addAttribute(`border border-primary bg-primary rounded-md h-10 w-10 leading-[35px] font-semibold text-white`, "class")}>${pagination}</span>` : renderTemplate`<a${addAttribute(
      i === 0 ? `${section ? "/" + section : "/"}` : `${section ? "/" + section : ""}/page/${pagination}`,
      "href"
    )} aria-current="page"${addAttribute(`border border-primary hover:bg-primary hover:text-white rounded-md h-10 w-10 leading-[36px] font-semibold text-dark flex items-center justify-center transition duration-200`, "class")}>${pagination}</a>`
  )}${hasNextPage ? renderTemplate`<a${addAttribute(`${section ? "/" + section : ""}/page/${currentPage + 1}`, "href")} class="border border-primary hover:bg-primary hover:text-white rounded-md h-10 w-10 leading-[36px] font-semibold text-dark flex items-center justify-center transition duration-200"><span class="sr-only">Next</span><svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a>` : renderTemplate`<span class="border border-gray-400 opacity-40 rounded-md h-10 w-10 leading-[36px] font-semibold text-dark flex items-center justify-center pointer-events-none"><span class="sr-only">Next</span><svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></span>`}</nav>`}`;
}, "C:/Users/snjhi/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/usami-astro/src/layouts/components/Pagination.astro", void 0);

const $$Astro$1 = createAstro("https://bookworm-light-astro.vercel.app");
async function getStaticPaths$1() {
  const authors = await getSinglePage("authors");
  const totalPages = Math.ceil(authors.length / config.settings.pagination);
  const paths = [];
  for (let i = 1; i < totalPages; i++) {
    paths.push({
      params: {
        slug: (i + 1).toString()
      }
    });
  }
  return paths;
}
const $$slug$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$slug$1;
  const { slug } = Astro2.params;
  const authors = await getSinglePage("authors");
  const sortedPosts = sortByDate(authors);
  const totalPages = Math.ceil(authors.length / config.settings.pagination);
  const currentPage = slug && !isNaN(Number(slug)) ? Number(slug) : 1;
  const indexOfLastPost = currentPage * config.settings.pagination;
  const indexOfFirstPost = indexOfLastPost - config.settings.pagination;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Authors" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container text-center"> <h1 class="page-heading h2">${markdownify("Authors")}</h1> ${renderComponent($$result2, "Authors", $$Authors, { "authors": currentPosts })} ${renderComponent($$result2, "Pagination", $$Pagination, { "section": "authors", "currentPage": currentPage, "totalPages": totalPages })} </div> </section> ` })}`;
}, "C:/Users/snjhi/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/usami-astro/src/pages/authors/page/[slug].astro", void 0);

const $$file$1 = "C:/Users/snjhi/OneDrive/デスクトップ/usami-astro/src/pages/authors/page/[slug].astro";
const $$url$1 = "/authors/page/[slug]";

const _slug_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug$1,
  file: $$file$1,
  getStaticPaths: getStaticPaths$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://bookworm-light-astro.vercel.app");
async function getStaticPaths() {
  const posts = await getSinglePage("posts");
  const totalPages = Math.ceil(posts.length / config.settings.pagination);
  const paths = [];
  for (let i = 1; i < totalPages; i++) {
    paths.push({
      params: {
        slug: (i + 1).toString()
      }
    });
  }
  return paths;
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const posts = await getSinglePage("posts") || [];
  const sortedPosts = sortByDate(posts);
  const totalPages = Math.ceil(posts.length / config.settings.pagination);
  const currentPage = slug && !isNaN(Number(slug)) ? Number(slug) : 1;
  const indexOfLastPost = currentPage * config.settings.pagination;
  const indexOfFirstPost = indexOfLastPost - config.settings.pagination;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> ${renderComponent($$result2, "Posts", $$Posts, { "className": "mb-16", "posts": currentPosts })} ${renderComponent($$result2, "Pagination", $$Pagination, { "totalPages": totalPages, "currentPage": currentPage })} </div> </section> ` })}`;
}, "C:/Users/snjhi/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/usami-astro/src/pages/page/[slug].astro", void 0);

const $$file = "C:/Users/snjhi/OneDrive/デスクトップ/usami-astro/src/pages/page/[slug].astro";
const $$url = "/page/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Authors as $, _slug_$1 as _, $$Pagination as a, _slug_ as b };
