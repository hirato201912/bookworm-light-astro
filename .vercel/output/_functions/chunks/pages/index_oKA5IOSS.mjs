/* empty css                              */
import { d as createAstro, e as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead, g as addAttribute, i as Fragment } from '../astro_CsyUObx7.mjs';
import 'kleur/colors';
import { c as config, m as markdownify, a as $$Base, h as humanize } from './404_DiHN9pEE.mjs';
import { $ as $$Authors, a as $$Pagination } from './_slug__BIz8IwzT.mjs';
import { g as getSinglePage, a as getTaxonomy, $ as $$Posts } from './_category__iD1s_6gk.mjs';
import { s as sortByDate } from './_single__DTHRb2vE.mjs';
import { BiCategoryAlt } from 'react-icons/bi';
import { FaHashtag } from 'react-icons/fa';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';

const $$Astro$3 = createAstro("https://bookworm-light-astro.vercel.app");
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$3;
  const authors = await getSinglePage("authors");
  const sortedPosts = sortByDate(authors);
  const totalPages = Math.ceil(authors.length / config.settings.pagination);
  const currentPosts = sortedPosts.slice(0, config.settings.pagination);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Authors" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container text-center"> <h1 class="page-heading h2">${markdownify("Authors")}</h1> ${renderComponent($$result2, "Authors", $$Authors, { "authors": currentPosts })} ${renderComponent($$result2, "Pagination", $$Pagination, { "section": "authors", "currentPage": 1, "totalPages": totalPages })} </div> </section> ` })}`;
}, "C:/Users/snjhi/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/usami-astro/src/pages/authors/index.astro", void 0);

const $$file$3 = "C:/Users/snjhi/OneDrive/デスクトップ/usami-astro/src/pages/authors/index.astro";
const $$url$3 = "/authors";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$3,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro("https://bookworm-light-astro.vercel.app");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  const categories = await getTaxonomy("posts", "categories");
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Categories" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container text-center"> <h1 class="h2 page-heading">Categories</h1> <ul class="space-x-4"> ${categories.map((category) => renderTemplate`<li class="inline-block"> <a${addAttribute(`/categories/${category}`, "href")} class="rounded-lg bg-theme-light px-4 py-2 text-dark transition hover:bg-primary hover:text-white flex items-center group"> ${renderComponent($$result2, "BiCategoryAlt", BiCategoryAlt, { "className": "mr-1 text-primary group-hover:text-white transition h-6 w-6 scale-75" })} ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${humanize(category || "")}` })} </a> </li>`)} </ul> </div> </section> ` })}`;
}, "C:/Users/snjhi/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/usami-astro/src/pages/categories/index.astro", void 0);

const $$file$2 = "C:/Users/snjhi/OneDrive/デスクトップ/usami-astro/src/pages/categories/index.astro";
const $$url$2 = "/categories";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://bookworm-light-astro.vercel.app");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const tags = await getTaxonomy("posts", "tags");
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Tags" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container text-center"> <h1 class="h2 page-heading">Tags</h1> <ul class="space-x-4"> ${tags.map((tag) => renderTemplate`<li class="inline-block"> <a${addAttribute(`/tags/${tag}`, "href")} class="rounded-lg bg-theme-light px-4 py-2 text-dark transition hover:bg-primary hover:text-white flex items-center group"> ${renderComponent($$result2, "FaHashtag", FaHashtag, { "className": "mr-1 text-primary group-hover:text-white transition" })} ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${humanize(tag || "")}` })} </a> </li>`)} </ul> </div> </section> ` })}`;
}, "C:/Users/snjhi/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/usami-astro/src/pages/tags/index.astro", void 0);

const $$file$1 = "C:/Users/snjhi/OneDrive/デスクトップ/usami-astro/src/pages/tags/index.astro";
const $$url$1 = "/tags";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

function Form() {
  const [responseMessage, setResponseMessage] = useState("");
  async function submit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await fetch("/api/feedback", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    if (data.message) {
      setResponseMessage(data.message);
    }
  }
  return /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
    /* @__PURE__ */ jsxs("label", { htmlFor: "name", children: [
      "名前",
      /* @__PURE__ */ jsx("input", { type: "text", id: "name", name: "name", autoComplete: "name", required: true })
    ] }),
    /* @__PURE__ */ jsxs("label", { htmlFor: "email", children: [
      "Email",
      /* @__PURE__ */ jsx("input", { type: "email", id: "email", name: "email", autoComplete: "email", required: true })
    ] }),
    /* @__PURE__ */ jsxs("label", { htmlFor: "message", children: [
      "Message",
      /* @__PURE__ */ jsx("textarea", { id: "message", name: "message", autoComplete: "off", required: true })
    ] }),
    /* @__PURE__ */ jsx("button", { children: "Send" }),
    responseMessage && /* @__PURE__ */ jsx("p", { children: responseMessage })
  ] });
}

const $$Astro = createAstro("https://bookworm-light-astro.vercel.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = await getSinglePage("posts");
  const sortedPosts = sortByDate(posts);
  const totalPages = Math.ceil(posts.length / config.settings.pagination);
  const currentPosts = sortedPosts.slice(0, config.settings.pagination);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> ${renderComponent($$result2, "FeedbackForm", Form, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/FeedbackForm", "client:component-export": "default" })} ${renderComponent($$result2, "Posts", $$Posts, { "posts": currentPosts, "className": "mb-16" })} ${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": 1, "totalPages": totalPages })} </div> </section> ` })}`;
}, "C:/Users/snjhi/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/usami-astro/src/pages/index.astro", void 0);

const $$file = "C:/Users/snjhi/OneDrive/デスクトップ/usami-astro/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$2 as a, index$1 as b, index as c, index$3 as i };
