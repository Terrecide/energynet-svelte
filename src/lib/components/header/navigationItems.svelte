<script>
	import { page } from '$app/stores';
	import { t, setLocale, locales } from '$lib/translations';
	import { smoothScroll } from '$lib';
	import { slide } from 'svelte/transition';
	import Fa from 'svelte-fa';
	import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

	export const isMobile = false;

	const handleChange = (value) => {
		document.cookie = `lang=${value} ;`;
		setLocale(value);
	};

	let isExpanded = false;

	function toggleMenu() {
		isExpanded = !isExpanded;
	}
</script>

<li>
	<a
		class:active={$page.url.pathname === '/get-what-you-need'}
		class="main-nav--item"
		href="/get-what-you-need"
	>
		{$t('menu.whatYouNeed')}
	</a>
</li>
<!-- <li class="relative" on:mouseenter={toggleMenu}>
	{#if !isMobile}
		<button class:active={$page.url.pathname === '/solutions/'} class="main-nav--item flex">
			{$t('menu.solutions')}<Fa size="1x" icon={faCaretDown} class="pl-2 text-white" />
		</button>
		{#if isExpanded}
			<ul
				class="flex flex-col items-center gap-4 absolute text-white bg-white shadow rounded-lg px-2 py-4 !w-44 -left-1/2"
				transition:slide
			>
				<li>
					<a
						class:active={$page.url.pathname === '/solutions/hydro'}
						class="main-nav--item !text-primary"
						href="/solutions/hydro"
					>
						{$t('menu.hydro')}
					</a>
				</li>
				<li>
					<a
						class:active={$page.url.pathname === '/solutions/solar'}
						class="main-nav--item !text-primary"
						href="/solutions/solar"
					>
						{$t('menu.solar')}
					</a>
				</li>
				<li>
					<a
						class:active={$page.url.pathname === '/solutions/wind'}
						class="main-nav--item !text-primary"
						href="/solutions/wind"
					>
						{$t('menu.wind')}
					</a>
				</li>
				<li>
					<a
						class:active={$page.url.pathname === '/solutions/grid'}
						class="main-nav--item !text-primary"
						href="/solutions/grid"
					>
						{$t('menu.grid')}
					</a>
				</li>
			</ul>
		{/if}
	{:else}
		<li>
			<a
				class:active={$page.url.pathname === '/solutions/hydro'}
				class="main-nav--item !text-primary"
				href="/solutions/hydro"
			>
				{$t('menu.hydro')}
			</a>
		</li>
		<li>
			<a
				class:active={$page.url.pathname === '/solutions/solar'}
				class="main-nav--item !text-primary"
				href="/solutions/solar"
			>
				{$t('menu.solar')}
			</a>
		</li>
		<li>
			<a
				class:active={$page.url.pathname === '/solutions/wind'}
				class="main-nav--item !text-primary"
				href="/solutions/wind"
			>
				{$t('menu.wind')}
			</a>
		</li>
		<li>
			<a
				class:active={$page.url.pathname === '/solutions/grid'}
				class="main-nav--item !text-primary"
				href="/solutions/grid"
			>
				{$t('menu.grid')}
			</a>
		</li>
	{/if}
</li> -->
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
