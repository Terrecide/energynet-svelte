import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { B as BROWSER } from "../../chunks/dev-ssr.js";
import { v as validate_store, s as subscribe } from "../../chunks/utils.js";
import { p as page } from "../../chunks/stores.js";
import { t } from "../../chunks/index2.js";
const browser = BROWSER;
const app = "";
const SideBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style = "" } = $$props;
  let { showMenu = false } = $$props;
  let { direction = "left" } = $$props;
  function toggleMenu() {
    showMenu = !showMenu;
  }
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.showMenu === void 0 && $$bindings.showMenu && showMenu !== void 0)
    $$bindings.showMenu(showMenu);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.toggleMenu === void 0 && $$bindings.toggleMenu && toggleMenu !== void 0)
    $$bindings.toggleMenu(toggleMenu);
  {
    if (showMenu && browser) {
      document.documentElement.classList.add("overflow-hidden");
    }
  }
  return `${showMenu ? `<div class="bg-overlay"><div class="${"menu " + escape(style, true)}"><div class="menu-header"><div class="menu-close"><i class="mi-close text-3xl"></i></div></div> <div class="menu-content">${slots.content ? slots.content({}) : ``}</div></div></div>` : ``}`;
});
const navigationItems_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".main-nav--item.s-nSZgkEbu_oCt{font-size:1.25rem;line-height:1.75rem;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))\n}.active.s-nSZgkEbu_oCt{--tw-text-opacity:1;color:rgb(122 204 199 / var(--tw-text-opacity))\n}.active.s-nSZgkEbu_oCt:hover{color:rgb(122 204 199 / 0.7);transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:300ms\n}",
  map: null
};
const NavigationItems = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $t, $$unsubscribe_t;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  validate_store(t, "t");
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  $$unsubscribe_t();
  return `<li><a class="${[
    "main-nav--item s-nSZgkEbu_oCt",
    $page.url.pathname === "/solutions/get-what-you-need" ? "active" : ""
  ].join(" ").trim()}" href="/solutions/get-what-you-need">${escape($t("menu.whatYouNeed"))}</a></li> <li><a class="${[
    "main-nav--item s-nSZgkEbu_oCt",
    $page.url.pathname === "/solutions/" ? "active" : ""
  ].join(" ").trim()}" href="/solutions/get-what-you-need">${escape($t("menu.solutions"))}</a></li> <li><div class="flex gap-1 main-nav--item s-nSZgkEbu_oCt"><button>${escape($t(`lang.en`))}</button> <div data-svelte-h="svelte-1hduaae">|</div> <button>${escape($t(`lang.bg`))}</button></div> </li>`;
});
const navigation_svelte_svelte_type_style_lang = "";
const css = {
  code: ".header.s-PotONG-axbK3{position:fixed;top:0px;z-index:20;margin-left:auto;margin-right:auto;display:flex;width:100%;align-items:center;justify-content:space-between;padding:0.75rem;padding-top:2.5rem;padding-bottom:2.5rem;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:300ms\n}@media(min-width: 1024px){.header.s-PotONG-axbK3{padding-left:2.5rem;padding-right:2.5rem\n    }}@media(min-width: 1280px){.header.s-PotONG-axbK3{padding-left:6rem;padding-right:6rem\n    }}",
  map: null
};
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sideBar;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = ` <header class="${"header " + escape("bg-primary", true) + " s-PotONG-axbK3"}"><title data-svelte-h="svelte-73ky9j">ENERGYNET</title> <div class="px-2 flex"><a class="flex justify-between items-center text-xl font-manrope_bold" href="/"><img class="w-46 h-10" src="/logo-energynet.png"></a></div> <nav class="main-nav"><ul class="flex items-center gap-6">${`<li><span class="flex items-center cursor-pointer"><i class="mi-menu icon text-2xl pr-2"></i></span></li>`}</ul></nav></header> ${validate_component(SideBar, "SideBar").$$render(
      $$result,
      { this: sideBar },
      {
        this: ($$value) => {
          sideBar = $$value;
          $$settled = false;
        }
      },
      {
        content: () => {
          return `<span slot="content"><nav class="main-nav"><ul class="flex flex-col gap-6">${validate_component(NavigationItems, "NavigationItems").$$render($$result, {}, {}, {})}</ul></nav></span>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
