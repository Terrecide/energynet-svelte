export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","get-what-you-need/asset_manager_circle.png","get-what-you-need/cover.jpg","get-what-you-need/dno_circle.png","get-what-you-need/energytrader_circle.png","get-what-you-need/om_manager_circle.png","home/h-em.png","home/h-EM_big.png","home/s-em.png","home/s-EM_big.png","home/w-em.png","home/w-EM_bg.png","home/x-em.png","home/x-EM_big.png","logo-energynet.png","main.png"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.1c522d14.js","app":"_app/immutable/entry/app.2025bc6e.js","imports":["_app/immutable/entry/start.1c522d14.js","_app/immutable/chunks/scheduler.eab2348c.js","_app/immutable/chunks/singletons.6f4d9dc9.js","_app/immutable/chunks/index.9b1ad3a7.js","_app/immutable/entry/app.2025bc6e.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.eab2348c.js","_app/immutable/chunks/index.d1cb5841.js","_app/immutable/chunks/environment.60829b93.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/solutions/get-what-you-need",
				pattern: /^\/solutions\/get-what-you-need\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
