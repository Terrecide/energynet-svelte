<script>
	import { page } from '$app/stores';
	import { t, setLocale, locales } from '$lib/translations';
	import { smoothScroll } from '$lib';

	const handleChange = (value) => {
		document.cookie = `lang=${value} ;`;
		setLocale(value);
	};
</script>

<li>
	<a
		class:active={$page.url.pathname === '/solutions/get-what-you-need'}
		class="main-nav--item"
		href="/solutions/get-what-you-need"
	>
		{$t('menu.whatYouNeed')}
	</a>
</li>
<li>
	<a
		class:active={$page.url.pathname === '/solutions/'}
		class="main-nav--item"
		href="/solutions/get-what-you-need"
	>
		{$t('menu.solutions')}
	</a>
</li>
<li>
	<a class="main-nav--item" href="#footerForm" on:click={smoothScroll}>
		{$t('menu.contacts')}
	</a>
</li>
<li>
	<div class="flex gap-1 main-nav--item">
		<button on:click={() => handleChange('en')}>{$t(`lang.en`)}</button>
		<div>|</div>
		<button on:click={() => handleChange('bg')}>{$t(`lang.bg`)}</button>
	</div>
</li>

<style lang="postcss">
	.main-nav--item {
		@apply text-white text-xl;
	}
	.active {
		@apply text-cyan;
	}
	.active:hover {
		@apply text-cyan/70 transition-all duration-300;
	}
</style>
