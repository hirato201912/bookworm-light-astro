/* empty css                              */
import { d as createAstro, e as createComponent, r as renderTemplate, m as maybeRenderHead } from '../astro_CsyUObx7.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://bookworm-light-astro.vercel.app");
const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Register;
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(`Username: ${username}, Email: ${email}, Password: ${password}`);
  }
  return renderTemplate`${maybeRenderHead()}<h1>Register</h1> <form method="POST" enctype="multipart/form-data"> <label>
Username:
<input type="text" name="username" required> </label> <label>
Email:
<input type="email" name="email" required> </label> <label>
Password:
<input type="password" name="password" required minlength="6"> </label> <button>Submit</button> </form>`;
}, "C:/Users/snjhi/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/usami-astro/src/pages/register.astro", void 0);

const $$file = "C:/Users/snjhi/OneDrive/デスクトップ/usami-astro/src/pages/register.astro";
const $$url = "/register";

export { $$Register as default, $$file as file, $$url as url };
