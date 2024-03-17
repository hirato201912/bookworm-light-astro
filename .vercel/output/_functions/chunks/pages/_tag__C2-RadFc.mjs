/* empty css                              */
import { d as createAstro, e as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_CsyUObx7.mjs';
import 'kleur/colors';
import { h as humanize, a as $$Base } from './404_DiHN9pEE.mjs';
import { a as getTaxonomy, g as getSinglePage, t as taxonomyFilter, $ as $$Posts } from './_category__iD1s_6gk.mjs';

const $$Astro = createAstro("https://bookworm-light-astro.vercel.app");
async function getStaticPaths() {
  const tags = await getTaxonomy("posts", "tags");
  return tags.map((tag) => {
    return {
      params: { tag }
    };
  });
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.params;
  const posts = await getSinglePage("posts");
  const filterByTags = taxonomyFilter(posts, "tags", tag);
  const title = humanize(tag || "");
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title || "Tag" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="section"> <div class="container"> <p class="text-center mb-4">Showing Posts From</p> <h1 class="h2 mb-16 text-center text-primary">${title}</h1> ${renderComponent($$result2, "Posts", $$Posts, { "posts": filterByTags, "fluid": false })} </div> </div> ` })}`;
}, "C:/Users/snjhi/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/usami-astro/src/pages/tags/[tag].astro", void 0);

const $$file = "C:/Users/snjhi/OneDrive/デスクトップ/usami-astro/src/pages/tags/[tag].astro";
const $$url = "/tags/[tag]";

export { $$tag as default, $$file as file, getStaticPaths, $$url as url };
