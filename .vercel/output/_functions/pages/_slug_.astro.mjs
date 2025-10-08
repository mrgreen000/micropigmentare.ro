/* empty css                                  */
import { c as createComponent, d as createAstro, r as renderComponent, e as renderScript, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CcnWJDd-.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, a as $$Navigation, b as $$Footer } from '../chunks/Footer_D-ab9cGx.mjs';
import { $ as $$CalendarBooking } from '../chunks/CalendarBooking_Cb8BgqGk.mjs';
import { g as getCollection } from '../chunks/_astro_content_Df7ieka2.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const articles = await getCollection("articles");
  return articles.map((article) => ({
    params: { slug: article.slug },
    props: { article }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { article } = Astro2.props;
  const { Content } = await article.render();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": article.data.title, "description": article.data.description, "data-astro-cid-yvbahnfj": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, { "data-astro-cid-yvbahnfj": true })}  ${maybeRenderHead()}<div class="text-white text-center py-3 mt-16 bg-gradient-to-r from-primary to-secondary shadow-md" data-astro-cid-yvbahnfj> <p class="text-sm md:text-base font-semibold" data-astro-cid-yvbahnfj>🎉 OFERTĂ SPECIALĂ: -20% la micropigmentare sprâncene până la 31 decembrie! 🎉</p> </div> <main class="pt-8 pb-20 bg-gray-50" data-astro-cid-yvbahnfj> <div class="max-w-4xl mx-auto px-4" data-astro-cid-yvbahnfj> <!-- Article Header --> <article class="bg-white rounded-2xl shadow-lg overflow-hidden" data-astro-cid-yvbahnfj> <header class="mb-12 px-8 pt-12 pb-8 bg-gradient-to-b from-gray-50 to-white" data-astro-cid-yvbahnfj> <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight" data-astro-cid-yvbahnfj>${article.data.title}</h1> <p class="text-xl text-gray-600 leading-relaxed" data-astro-cid-yvbahnfj>${article.data.description}</p> </header> <!-- Article Content --> <div class="px-8 pb-12" data-astro-cid-yvbahnfj> <div class="prose prose-lg max-w-none prose-headings:text-gray-900 prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-primary prose-strong:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-ul:my-4 prose-li:text-gray-700 prose-img:rounded-lg prose-img:shadow-md prose-img:my-4 prose-img:mx-1 prose-img:h-[150px] prose-img:w-auto prose-img:inline-block prose-img:border-2 prose-img:border-gray-100 prose-img:cursor-pointer prose-img:hover:shadow-xl prose-img:transition-shadow prose-img:object-cover md:prose-img:h-[200px] md:prose-img:mx-2" data-astro-cid-yvbahnfj> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-yvbahnfj": true })} </div> <!-- Tags Section --> <div class="mt-12 pt-8 border-t border-gray-200" data-astro-cid-yvbahnfj> <div class="flex flex-wrap gap-2" data-astro-cid-yvbahnfj> <span class="text-sm text-gray-500 font-medium mr-2" data-astro-cid-yvbahnfj>Etichete:</span> ${article.data.tags.map((tag) => renderTemplate`<span class="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium" data-astro-cid-yvbahnfj> ${tag} </span>`)} </div> </div> </div> <!-- CTA Section --> <div class="mx-8 mb-8 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20" data-astro-cid-yvbahnfj> <h3 class="text-2xl font-bold text-gray-900 mb-4 text-center" data-astro-cid-yvbahnfj>Gata să începi?</h3> <p class="text-gray-600 text-center mb-6 text-lg" data-astro-cid-yvbahnfj>
Programează o consultație gratuită și descoperă cum te pot ajuta!
</p> <div class="flex justify-center" data-astro-cid-yvbahnfj> <button class="open-calendar-booking text-white bg-primary hover:bg-primary-hover focus:ring-4 focus:ring-secondary font-medium rounded-lg text-lg px-8 py-3 shadow-md hover:shadow-lg transition-all" data-astro-cid-yvbahnfj> <i class="fas fa-calendar-check mr-2" data-astro-cid-yvbahnfj></i>
Programează-te Acum
</button> </div> </div> <!-- Back to Articles --> <div class="pb-8 text-center" data-astro-cid-yvbahnfj> <a href="/articole/" class="inline-flex items-center text-primary hover:text-primary-hover font-medium text-lg" data-astro-cid-yvbahnfj> <i class="fas fa-arrow-left mr-2" data-astro-cid-yvbahnfj></i>
Înapoi la articole
</a> </div> </article> </div> </main> ${renderComponent($$result2, "CalendarBooking", $$CalendarBooking, { "data-astro-cid-yvbahnfj": true })} ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-yvbahnfj": true })} ` })}  ${renderScript($$result, "/Users/mrgreen/Work_local/Local_dev/sites-by-llm/micropigmentation/src/pages/[slug].astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/mrgreen/Work_local/Local_dev/sites-by-llm/micropigmentation/src/pages/[slug].astro", void 0);

const $$file = "/Users/mrgreen/Work_local/Local_dev/sites-by-llm/micropigmentation/src/pages/[slug].astro";
const $$url = "/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
