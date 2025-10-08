/* empty css                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_CcnWJDd-.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, a as $$Navigation, b as $$Footer } from '../chunks/Footer_D-ab9cGx.mjs';
import { g as getCollection } from '../chunks/_astro_content_Df7ieka2.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const articles = await getCollection("articles");
  const sortedArticles = articles.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Articole - Paula Lupu Micropigmentare", "description": "Articole \u0219i ghiduri despre micropigmentare, \xEEngrijire \u0219i tehnici profesionale." }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})}  ${maybeRenderHead()}<div class="text-white text-center py-3 mt-16 bg-gradient-to-r from-primary to-secondary shadow-md"> <p class="text-sm md:text-base font-semibold">🎉 OFERTĂ SPECIALĂ: -20% la micropigmentare sprâncene până la 31 decembrie! 🎉</p> </div> <main class="pt-8 pb-20"> <div class="max-w-screen-xl mx-auto px-4"> <!-- Header --> <div class="text-center mb-16"> <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Articole</h1> <p class="text-lg text-gray-600 max-w-2xl mx-auto">
Ghiduri complete despre serviciile de micropigmentare și îngrijire
</p> </div> <!-- Articles Grid --> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> ${sortedArticles.map((article) => renderTemplate`<article class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col"> <div class="p-6 flex flex-col flex-grow"> <h2 class="text-2xl font-bold text-gray-900 mb-3"> <a${addAttribute(`/${article.slug}/`, "href")} class="hover:text-primary transition-colors"> ${article.data.title} </a> </h2> <p class="text-gray-600 mb-4 flex-grow">${article.data.description}</p> <div class="flex flex-wrap gap-2 mb-4"> ${article.data.tags.map((tag) => renderTemplate`<span class="text-xs bg-primary/10 text-primary px-2 py-1 rounded"> ${tag} </span>`)} </div> <div class="mt-auto"> <div class="flex items-center text-sm text-gray-500 mb-3"> <span>${article.data.author}</span> <span class="mx-2">•</span> <time${addAttribute(article.data.pubDate.toISOString(), "datetime")}> ${article.data.pubDate.toLocaleDateString("ro-RO", { year: "numeric", month: "long", day: "numeric" })} </time> </div> <a${addAttribute(`/${article.slug}/`, "href")} class="inline-flex items-center text-primary hover:text-primary-hover font-medium">
Citește mai mult <i class="fas fa-arrow-right ml-2"></i> </a> </div> </div> </article>`)} </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/mrgreen/Work_local/Local_dev/sites-by-llm/micropigmentation/src/pages/articole/index.astro", void 0);

const $$file = "/Users/mrgreen/Work_local/Local_dev/sites-by-llm/micropigmentation/src/pages/articole/index.astro";
const $$url = "/articole";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
