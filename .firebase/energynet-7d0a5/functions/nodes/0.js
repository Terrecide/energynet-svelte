import * as universal from '../entries/pages/_layout.js';
import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.4f835228.js","_app/immutable/chunks/index.8706bd57.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.9b1ad3a7.js","_app/immutable/chunks/scheduler.eab2348c.js","_app/immutable/chunks/index.d1cb5841.js","_app/immutable/chunks/environment.60829b93.js","_app/immutable/chunks/stores.57c92dca.js","_app/immutable/chunks/singletons.6f4d9dc9.js"];
export const stylesheets = ["_app/immutable/assets/0.f3119c6c.css"];
export const fonts = [];
