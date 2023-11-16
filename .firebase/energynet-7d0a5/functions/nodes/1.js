

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.7208491e.js","_app/immutable/chunks/scheduler.eab2348c.js","_app/immutable/chunks/index.d1cb5841.js","_app/immutable/chunks/stores.57c92dca.js","_app/immutable/chunks/singletons.6f4d9dc9.js","_app/immutable/chunks/index.9b1ad3a7.js"];
export const stylesheets = [];
export const fonts = [];
