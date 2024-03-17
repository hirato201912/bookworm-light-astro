/* empty css                              */
import { d as createAstro, e as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead, u as unescapeHTML, g as addAttribute } from '../astro_CsyUObx7.mjs';
import 'kleur/colors';
import { d as getEntryBySlug, m as markdownify, a as $$Base, c as config } from './404_DiHN9pEE.mjs';
import { FaAddressCard, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const $$Astro = createAstro("https://bookworm-light-astro.vercel.app");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const entry = await getEntryBySlug("pages", "contact");
  const { contact_form_action } = config.params;
  const { address, email, phone } = config.contactinfo;
  const { title, description, meta_title, image } = entry.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "image": image }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> <h1 class="h2 page-heading">${unescapeHTML(markdownify(title))}</h1> <div class="row md:gx-5 gy-5"> <div class="sm:col-5 md:col-4"> <p class="mb-8 text-2xl font-bold text-theme-dark">Contact Info</p> <ul class="flex flex-col space-y-8"> <li> <div class="flex text-theme-dark items-center text-xl"> ${renderComponent($$result2, "FaAddressCard", FaAddressCard, { "className": "mr-3 text-primary" })} <p class="font-semibold">Address</p> </div> <p class="mt-2 leading-5 pl-8">${unescapeHTML(markdownify(address))}</p> </li> <li> <div class="flex text-theme-dark items-center text-xl"> ${renderComponent($$result2, "FaEnvelope", FaEnvelope, { "className": "mr-3 text-primary" })} <p class="font-semibold">Email</p> </div> <p class="mt-2 leading-5 pl-8 content">${unescapeHTML(markdownify(email))}</p> </li> <li> <div class="flex text-theme-dark items-center text-xl"> ${renderComponent($$result2, "FaPhoneAlt", FaPhoneAlt, { "className": "mr-3 text-primary" })} <p class="font-semibold">Phone</p> </div> <p class="mt-2 leading-5 pl-8">${unescapeHTML(markdownify(phone))}</p> </li> </ul> </div> <div class="sm:col-7 md:col-8"> <form enctype="multipart/form-data" class="contact-form row gy-2 justify-center" method="POST"${addAttribute(contact_form_action, "action")}> <div class="lg:col-6"> <label class="mb-2 block" for="name">Name <span class="text-red-600">*</span></label> <input class="form-input w-full" name="name" type="text" required> </div> <div class="lg:col-6"> <label class="mb-2 block" for="email">Email <span class="text-red-600">*</span></label> <input class="form-input w-full" name="email" type="email" required> </div> <div class="col-12"> <label class="mb-2 block" for="subject">Subject</label> <input class="form-input w-full" name="subject" type="text"> </div> <div class="col-12"> <label class="mb-2 block" for="message">Message </label> <textarea class="form-textarea w-full" rows="4"></textarea> </div> <div class="col-12"> <button class="btn btn-primary mt-2">Submit Now</button> </div> </form> </div> </div> </div> </section> ` })} `;
}, "C:/Users/snjhi/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/usami-astro/src/pages/contact.astro", void 0);

const $$file = "C:/Users/snjhi/OneDrive/デスクトップ/usami-astro/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };
