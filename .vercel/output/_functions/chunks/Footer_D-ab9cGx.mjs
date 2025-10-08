import { c as createComponent, d as createAstro, a as renderTemplate, b as addAttribute, i as renderSlot, j as renderHead, m as maybeRenderHead } from './astro/server_CcnWJDd-.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = "Paula Lupu - Micropigmentare Profesională Ploiești | Sprâncene, Buze, Eyeliner",
    description = "Micropigmentare Ploiești - Paula Lupu. Micropigmentare sprâncene, buze, eyeliner și îndepărtare tatuaj cu laser. Experiență din 2016. Prețuri transparente."
  } = Astro2.props;
  const baseUrl = "/";
  return renderTemplate(_a || (_a = __template(['<html lang="ro"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"', '><meta name="keywords" content="micropigmentare ploiesti, micropigmentare sprancene, micropigmentare buze, indepartare tatuaj laser, paula lupu, salon micropigmentare prahova"><meta name="author" content="Paula Lupu"><title>', '</title><!-- Flowbite CSS --><link href="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.css" rel="stylesheet"><!-- Font Awesome --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"><!-- Schema.org markup for Google --><script type="application/ld+json">\n    {\n        "@context": "https://schema.org",\n        "@type": "BeautySalon",\n        "name": "Paula Lupu Micropigmentare",\n        "url": "https://micropigmentaresprancene.ro",\n        "image": "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",\n        "address": {\n            "@type": "PostalAddress",\n            "streetAddress": "Str. Ana Ipătescu nr 10",\n            "addressLocality": "Ploiești",\n            "addressRegion": "Prahova",\n            "postalCode": "100000",\n            "addressCountry": "RO"\n        },\n        "telephone": "+40732163268",\n        "openingHours": "Mo-Fr 09:00-18:00",\n        "priceRange": "300-1200 RON"\n    }\n    </script>', "</head> <body> ", ` <!-- Fix for missing theme toggle elements --> <script>
        // Prevent theme toggle errors when elements don't exist
        if (typeof window !== 'undefined') {
            window.addEventListener('DOMContentLoaded', function() {
                // Create dummy elements if they don't exist to prevent errors
                if (!document.getElementById('theme-toggle-dark-icon')) {
                    const dummyDark = document.createElement('div');
                    dummyDark.id = 'theme-toggle-dark-icon';
                    dummyDark.style.display = 'none';
                    document.body.appendChild(dummyDark);
                }
                if (!document.getElementById('theme-toggle-light-icon')) {
                    const dummyLight = document.createElement('div');
                    dummyLight.id = 'theme-toggle-light-icon';
                    dummyLight.style.display = 'none';
                    document.body.appendChild(dummyLight);
                }
            });
        }
    </script> <!-- Flowbite JS --> <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"></script> <!-- Main JS --> <script`, "></script> </body> </html>"])), addAttribute(description, "content"), title, renderHead(), renderSlot($$result, $$slots["default"]), addAttribute(`${baseUrl}assets/js/main.js`, "src"));
}, "/Users/mrgreen/Work_local/Local_dev/sites-by-llm/micropigmentation/src/layouts/BaseLayout.astro", void 0);

const logo = new Proxy({"src":"/_astro/logo.S1MOC9IH.webp","width":828,"height":289,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mrgreen/Work_local/Local_dev/sites-by-llm/micropigmentation/src/assets/logo.webp";
							}
							
							return target[name];
						}
					});

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="bg-white shadow-sm fixed w-full z-50 top-0 start-0"> <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2"> <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse"> <img${addAttribute(logo.src, "src")} alt="Paula Lupu - PMU Artist" class="h-10 md:h-12"> </a> <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"> <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"> <span class="sr-only">Open main menu</span> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path> </svg> </button> </div> <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky"> <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white"> <li><a href="/#acasa" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0">Acasă</a></li> <li><a href="/#servicii" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0">Servicii</a></li> <li><a href="/#despre" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0">Despre Mine</a></li> <li><a href="/#preturi" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0">Prețuri</a></li> <li><a href="/#galerie" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0">Galerie</a></li> <li><a href="/#contact" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0">Contact</a></li> </ul> </div> </div> </nav>`;
}, "/Users/mrgreen/Work_local/Local_dev/sites-by-llm/micropigmentation/src/components/Navigation.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-900 text-white py-16"> <div class="max-w-screen-xl mx-auto px-4"> <div class="grid md:grid-cols-4 gap-8 mb-8"> <div class="mt-4"> <img${addAttribute(logo.src, "src")} alt="Paula Lupu - PMU Artist" class="h-10 mb-4"> <p class="text-gray-400">
Specialist în micropigmentare cu experiență din 2017.
                    Frumusețea ta, pasiunea mea.
</p> </div> <div class="mt-4"> <h4 class="text-lg font-semibold mb-4">Servicii</h4> <ul class="space-y-2 text-gray-400"> <li><a href="#servicii" class="hover:text-primary">Micropigmentare Sprâncene</a></li> <li><a href="#servicii" class="hover:text-primary">Micropigmentare Buze</a></li> <li><a href="#servicii" class="hover:text-primary">Micropigmentare Eyeliner</a></li> <li><a href="#servicii" class="hover:text-primary">Îndepărtare cu Laser</a></li> </ul> </div> <div class="mt-4"> <h4 class="text-lg font-semibold mb-4">Link-uri Utile</h4> <ul class="space-y-2 text-gray-400"> <li><a href="#despre" class="hover:text-primary">Despre Mine</a></li> <li><a href="#preturi" class="hover:text-primary">Prețuri</a></li> <li><a href="#galerie" class="hover:text-primary">Portofoliu</a></li> <li><a href="#contact" class="hover:text-primary">Contact</a></li> </ul> </div> <div class="mt-4"> <h4 class="text-lg font-semibold mb-4">Urmărește-mă</h4> <div class="flex space-x-4 mb-4"> <a href="https://www.facebook.com/browsbypaula/" target="_blank" class="text-gray-400 hover:text-primary transition-colors"> <i class="fab fa-facebook text-2xl"></i> </a> <a href="https://www.instagram.com/micropigmentare.ploiesti" target="_blank" class="text-gray-400 hover:text-primary transition-colors"> <i class="fab fa-instagram text-2xl"></i> </a> <a href="https://www.tiktok.com/@paulalupu" target="_blank" class="text-gray-400 hover:text-primary transition-colors"> <i class="fab fa-tiktok text-2xl"></i> </a> <a href="https://api.whatsapp.com/send/?phone=40732163268&text&type=phone_number&app_absent=0" target="_blank" class="text-gray-400 hover:text-primary transition-colors"> <i class="fab fa-whatsapp text-2xl"></i> </a> </div> <p class="text-gray-400"> <i class="fas fa-phone mr-2"></i>+40 732 163 268
</p> </div> </div> <div class="border-t border-gray-800 pt-8 text-center text-gray-400"> <p>&copy; 2024 Paula Lupu Micropigmentare. Toate drepturile rezervate.</p> </div> </div> </footer>`;
}, "/Users/mrgreen/Work_local/Local_dev/sites-by-llm/micropigmentation/src/components/Footer.astro", void 0);

export { $$BaseLayout as $, $$Navigation as a, $$Footer as b };
