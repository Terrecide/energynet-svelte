

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.ed113ec6.js","_app/immutable/chunks/scheduler.eab2348c.js","_app/immutable/chunks/index.d1cb5841.js","_app/immutable/chunks/index.8706bd57.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.9b1ad3a7.js"];
export const stylesheets = [];
export const fonts = [];
