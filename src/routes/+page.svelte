<script>
	import { t } from '$lib/translations';
	import { smoothScroll } from '$lib';
	const link = 'https://kit.svelte.dev';

	let props = [
		{
			initLocale: 'bg',
			initTranslations: {}
		},
		{
			initLocale: 'en',
			initTranslations: {}
		}
	];

	/** @type {import('./$types').Snapshot} */
	export const snapshot = {
		capture: () => props,
		restore: (value) => {
			props = value;
		}
	};
</script>

<div class="flex flex-col">
	<div class="relative">
		<div class="absolute h-full w-full flex bg-primary/50" />
		<div
			class="absolute text-center flex flex-col p-8 h-full w-full text-white justify-center xl:h-auto xl:w-auto xl:top-1/2 xl:left-1/2 xl:-translate-y-1/2 xl:-translate-x-1/2"
		>
			<h3 class="!text-3xl !text-white">{$t('home.title')}</h3>
			<div class="flex justify-center">
				<a
					href="#footerForm"
					on:click={smoothScroll}
					class="mt-10 uppercase text-primary text-center transition-all duration-300 hover:text-white bg-white hover:bg-primary t whitespace-nowrap text-xl my-2.5 py-2 px-7 rounded-full border-radius"
					>{$t('home.contactNow')}</a
				>
			</div>
		</div>
		<div class="landing-image">
			<img id="landing-image" src="/main.png" />
		</div>
	</div>
</div>
<div class="px-12 sm:px-24 md:px-43 xl:px-64 py-10">
	<h3 class="text-center text-2xl">{$t('home.title2')}</h3>
</div>
<div class="flex flex-col gap-10 md:flex-row px-12 sm:px-24 md:px-43 xl:px-64 py-10">
	<div class="lg:w-1/2">
		<img src="/home/s-EM_big.png" />
	</div>

	<div class="flex flex-col justify-center lg:justify-start lg:w-1/2">
		<img class="max-h-24 w-1/2" src="/home/s-em.png" />
		<h3 class="text-primary uppercase text-2xl py-4">{$t('home.s-em-title')}</h3>
		<p class="text-lg">{$t('home.s-em-desc')}</p>
		<button
			class="mt-10 px-4 py-2 rounded-full self-start border-2 border-primary text-primary text-lg hover:text-white hover:bg-primary transition-all duration-300"
			>{$t('home.discover')}</button
		>
	</div>
</div>
<div class="flex flex-col gap-10 md:flex-row px-12 sm:px-24 md:px-43 xl:px-64 py-10">
	<div class="flex flex-col justify-center lg:justify-start lg:w-1/2">
		<img class="max-h-24 w-1/2" src="/home/h-em.png" />
		<h3 class="text-primary uppercase text-2xl py-4">{$t('home.h-em-title')}</h3>
		<p class="text-lg">{$t('home.h-em-desc')}</p>
		<button
			class="mt-10 px-4 py-2 rounded-full self-start border-2 border-primary text-primary text-lg hover:text-white hover:bg-primary transition-all duration-300"
			>{$t('home.discover')}</button
		>
	</div>
	<div class="order-first lg:order-2 lg:w-1/2">
		<img src="/home/h-EM_big.png" />
	</div>
</div>
<div class="flex flex-col gap-10 md:flex-row px-12 sm:px-24 md:px-43 xl:px-64 py-10">
	<div class="lg:w-1/2">
		<img src="/home/w-EM_bg.png" />
	</div>

	<div class="flex flex-col justify-center lg:justify-start lg:w-1/2">
		<img class="max-h-24 w-1/2" src="/home/w-em.png" />
		<h3 class="text-primary uppercase text-2xl py-4">{$t('home.w-em-title')}</h3>
		<p class="text-lg">{$t('home.w-em-desc')}</p>
		<button
			class="mt-10 px-4 py-2 rounded-full self-start border-2 border-primary text-primary text-lg hover:text-white hover:bg-primary transition-all duration-300"
			>{$t('home.discover')}</button
		>
	</div>
</div>
<div class="flex flex-col gap-10 md:flex-row px-12 sm:px-24 md:px-43 xl:px-64 py-10">
	<div class="flex flex-col justify-center lg:justify-start lg:w-1/2">
		<img class="max-h-24 w-1/2" src="/home/x-em.png" />
		<h3 class="text-primary uppercase text-2xl py-4">{$t('home.x-em-title')}</h3>
		<p class="text-lg">{$t('home.x-em-desc')}</p>
		<button
			class="mt-10 px-4 py-2 rounded-full self-start border-2 border-primary text-primary text-lg hover:text-white hover:bg-primary transition-all duration-300"
			>{$t('home.discover')}</button
		>
	</div>
	<div class="order-first lg:order-2 lg:w-1/2">
		<img src="/home/x-EM_big.png" />
	</div>
</div>
