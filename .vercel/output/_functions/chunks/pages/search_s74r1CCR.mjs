/* empty css                              */
import { d as createAstro, e as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_CsyUObx7.mjs';
import 'kleur/colors';
import { s as slugify, h as humanize, c as config, a as $$Base } from './404_DiHN9pEE.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useRef, useState, useEffect } from 'react';
import { d as dateFormat, g as getSinglePage } from './_category__iD1s_6gk.mjs';
import Fuse from 'fuse.js';
import { BiCalendarEdit, BiCategoryAlt } from 'react-icons/bi';

const { summary_length } = config.settings;
function SearchBar({ searchList }) {
  const inputRef = useRef(null);
  const [inputVal, setInputVal] = useState("");
  const [searchResults, setSearchResults] = useState(
    null
  );
  const handleChange = (e) => {
    setInputVal(e.currentTarget.value);
  };
  const fuse = new Fuse(searchList, {
    keys: ["data.title", "data.categories", "data.tags"],
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.5
  });
  useEffect(() => {
    const searchUrl = new URLSearchParams(window.location.search);
    const searchStr = searchUrl.get("q");
    if (searchStr)
      setInputVal(searchStr);
    setTimeout(function() {
      inputRef.current.selectionStart = inputRef.current.selectionEnd = searchStr?.length || 0;
    }, 50);
  }, []);
  useEffect(() => {
    let inputResult = inputVal.length > 2 ? fuse.search(inputVal) : [];
    setSearchResults(inputResult);
    if (inputVal.length > 0) {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set("q", inputVal);
      const newRelativePathQuery = window.location.pathname + "?" + searchParams.toString();
      history.pushState(null, "", newRelativePathQuery);
    } else {
      history.pushState(null, "", window.location.pathname);
    }
  }, [inputVal]);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-[45vh]", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        className: "form-input w-full text-center",
        placeholder: "Type here to Search posts",
        type: "text",
        name: "search",
        value: inputVal,
        onChange: handleChange,
        autoComplete: "off",
        autoFocus: true,
        ref: inputRef
      }
    ),
    inputVal.length > 1 && /* @__PURE__ */ jsxs("div", { className: "my-6 text-center", children: [
      "Found ",
      searchResults?.length,
      searchResults?.length && searchResults?.length === 1 ? " result" : " results",
      " ",
      "for '",
      inputVal,
      "'"
    ] }),
    /* @__PURE__ */ jsx("div", { className: "row", children: searchResults?.map(({ item }) => /* @__PURE__ */ jsxs("div", { className: "col-12 mb-8 sm:col-6", children: [
      item.data.image && /* @__PURE__ */ jsx(
        "a",
        {
          href: `/${item.slug}`,
          className: "rounded-lg block hover:text-primary overflow-hidden group",
          children: /* @__PURE__ */ jsx(
            "img",
            {
              className: "group-hover:scale-[1.03] transition duration-300 w-full",
              src: item.data.image,
              alt: item.data.title,
              width: 445,
              height: 230
            }
          )
        }
      ),
      /* @__PURE__ */ jsxs("ul", { className: "mt-6 mb-4 flex flex-wrap items-center text-text", children: [
        /* @__PURE__ */ jsxs("li", { className: "mr-5 flex items-center flex-wrap font-medium", children: [
          /* @__PURE__ */ jsx(BiCalendarEdit, { className: "mr-1 h-5 w-5 text-gray-600" }),
          /* @__PURE__ */ jsx(Fragment, { children: dateFormat(item.data.date) })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "mr-5 flex items-center flex-wrap", children: [
          /* @__PURE__ */ jsx(BiCategoryAlt, { className: "mr-1 h-[18px] w-[18px] text-gray-600" }),
          /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("ul", { children: item.data.categories.map((category, i) => /* @__PURE__ */ jsx("li", { className: "inline-block", children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: `/categories/${slugify(category)}`,
              className: "mr-2 hover:text-primary font-medium",
              children: [
                humanize(category),
                i !== item.data.categories.length - 1 && ","
              ]
            }
          ) }, i)) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("h3", { className: "mb-2", children: /* @__PURE__ */ jsx(
        "a",
        {
          href: `/${item.slug}`,
          className: "block hover:text-primary transition duration-300",
          children: item.data.title
        }
      ) }),
      /* @__PURE__ */ jsxs("p", { className: "text-text", children: [
        item.content?.slice(0, Number(summary_length)),
        "..."
      ] })
    ] }, item.slug)) })
  ] });
}

const $$Astro = createAstro("https://bookworm-light-astro.vercel.app");
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const posts = await getSinglePage("posts");
  const searchList = posts.map((item) => ({
    slug: item.slug,
    data: item.data,
    content: item.body
  }));
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": `Search` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> ${renderComponent($$result2, "SearchBar", SearchBar, { "client:load": true, "searchList": searchList, "client:component-hydration": "load", "client:component-path": "@/layouts/SearchBar", "client:component-export": "default" })} </div> </section> ` })}`;
}, "C:/Users/snjhi/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/usami-astro/src/pages/search.astro", void 0);

const $$file = "C:/Users/snjhi/OneDrive/デスクトップ/usami-astro/src/pages/search.astro";
const $$url = "/search";

export { $$Search as default, $$file as file, $$url as url };
