/* empty css                              */
import { d as createAstro, e as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead, u as unescapeHTML } from '../astro_CsyUObx7.mjs';
import 'kleur/colors';
import { d as getEntryBySlug, $ as $$Image, m as markdownify, a as $$Base } from './404_DiHN9pEE.mjs';

const $$Astro = createAstro("https://bookworm-light-astro.vercel.app");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const entry = await getEntryBySlug("about", "index");
  const { Content } = await entry.render();
  const { title, description, meta_title, image, what_i_do } = entry.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "image": image }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> <div class="row md:gx-4"> <div class="sm:col-5 md:col-4"> ${image && renderTemplate`<div class="img-cover mb-8"> ${renderComponent($$result2, "Image", $$Image, { "src": image, "width": 295, "height": 395, "alt": title, "class": "rounded-lg w-full" })} </div>`} </div> <div class="sm:col-7 md:col-8"> <h1 class="h3 mb-8">${unescapeHTML(markdownify(title))}</h1> <div class="content"> ${renderComponent($$result2, "Content", Content, {})} </div> <a href="/contact" class="btn btn-primary text-white py-2">コンタクト5</a> </div> </div> </div> </section> <section class="section pt-0"> <div class="container"> <h3 class="page-heading mb-20">${what_i_do.title}</h3> <div class="row justify-center gy-4 text-center"> ${what_i_do.items.map((item) => renderTemplate`<div class="lg:col-4 md:col-6"> <i class="{{.icon}} fa-3x text-primary mb-4"></i> <h4 class="text-dark font-weight-700 mb-3">${item.title}</h4> <p>${item.description}</p> </div>`)} </div> </div> </section> ` })}`;
}, "C:/Users/snjhi/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/usami-astro/src/pages/about.astro", void 0);

const $$file = "C:/Users/snjhi/OneDrive/デスクトップ/usami-astro/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
