import { v as validate_store, s as subscribe } from "../../chunks/utils.js";
import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
import { t } from "../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  validate_store(t, "t");
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  let props = [
    { initLocale: "bg", initTranslations: {} },
    { initLocale: "en", initTranslations: {} }
  ];
  const snapshot = {
    capture: () => props,
    restore: (value) => {
      props = value;
    }
  };
  if ($$props.snapshot === void 0 && $$bindings.snapshot && snapshot !== void 0)
    $$bindings.snapshot(snapshot);
  $$unsubscribe_t();
  return `<div class="flex flex-col"><div class="relative"><div class="absolute h-full w-full flex bg-primary/50"></div> <div class="absolute text-center flex flex-col p-8 h-full w-full text-white justify-center xl:h-auto xl:w-auto xl:top-1/2 xl:left-1/2 xl:-translate-y-1/2 xl:-translate-x-1/2"><h3 class="!text-6xl !text-white">${escape($t("home.title"))}</h3> <div class="flex justify-center"><button class="mt-10 uppercase text-primary text-center transition-all duration-300 hover:text-white bg-white hover:bg-primary t whitespace-nowrap text-xl my-2.5 py-2 px-7 rounded-full border-radius w-1/3">${escape($t("home.contactNow"))}</button></div></div> <div class="landing-image"><img id="landing-image" src="/main.png"></div></div></div> <div class="px-12 sm:px-24 md:px-43 xl:px-64 py-10"><h3 class="text-center">${escape($t("home.title2"))}</h3></div> <div class="flex flex-col gap-10 md:flex-row px-12 sm:px-24 md:px-43 xl:px-64 py-10"><div class="lg:w-1/2"><img src="/home/s-EM_big.png"></div> <div class="flex flex-col justify-center lg:justify-start lg:w-1/2"><img class="max-h-24 w-1/2" src="/home/s-em.png"> <h3 class="text-primary uppercase text-2xl py-4">${escape($t("home.s-em-title"))}</h3> <p class="text-lg">${escape($t("home.s-em-desc"))}</p> <button class="mt-10 px-4 py-2 rounded-full self-start border-2 border-primary text-primary text-lg hover:text-white hover:bg-primary transition-all duration-300">${escape($t("home.discover"))}</button></div></div> <div class="flex flex-col gap-10 md:flex-row px-12 sm:px-24 md:px-43 xl:px-64 py-10"><div class="flex flex-col justify-center lg:justify-start lg:w-1/2"><img class="max-h-24 w-1/2" src="/home/h-em.png"> <h3 class="text-primary uppercase text-2xl py-4">${escape($t("home.h-em-title"))}</h3> <p class="text-lg">${escape($t("home.h-em-desc"))}</p> <button class="mt-10 px-4 py-2 rounded-full self-start border-2 border-primary text-primary text-lg hover:text-white hover:bg-primary transition-all duration-300">${escape($t("home.discover"))}</button></div> <div class="order-first lg:order-2 lg:w-1/2"><img src="/home/h-EM_big.png"></div></div> <div class="flex flex-col gap-10 md:flex-row px-12 sm:px-24 md:px-43 xl:px-64 py-10"><div class="lg:w-1/2"><img src="/home/w-EM_bg.png"></div> <div class="flex flex-col justify-center lg:justify-start lg:w-1/2"><img class="max-h-24 w-1/2" src="/home/w-em.png"> <h3 class="text-primary uppercase text-2xl py-4">${escape($t("home.w-em-title"))}</h3> <p class="text-lg">${escape($t("home.w-em-desc"))}</p> <button class="mt-10 px-4 py-2 rounded-full self-start border-2 border-primary text-primary text-lg hover:text-white hover:bg-primary transition-all duration-300">${escape($t("home.discover"))}</button></div></div> <div class="flex flex-col gap-10 md:flex-row px-12 sm:px-24 md:px-43 xl:px-64 py-10"><div class="flex flex-col justify-center lg:justify-start lg:w-1/2"><img class="max-h-24 w-1/2" src="/home/x-em.png"> <h3 class="text-primary uppercase text-2xl py-4">${escape($t("home.x-em-title"))}</h3> <p class="text-lg">${escape($t("home.x-em-desc"))}</p> <button class="mt-10 px-4 py-2 rounded-full self-start border-2 border-primary text-primary text-lg hover:text-white hover:bg-primary transition-all duration-300">${escape($t("home.discover"))}</button></div> <div class="order-first lg:order-2 lg:w-1/2"><img src="/home/x-EM_big.png"></div></div>`;
});
export {
  Page as default
};
