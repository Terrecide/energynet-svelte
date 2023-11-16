<script>
	import SideBar from '$lib/components/header/sideBar.svelte';
	import NavigationItems from '$lib/components/header/navigationItems.svelte';
	import { page } from '$app/stores';
	import Fa from 'svelte-fa';
	import { faBars } from '@fortawesome/free-solid-svg-icons';

	let sideBar;
	let innerWidth = null;
	let scrollY = 0;
</script>

<svelte:window bind:innerWidth bind:scrollY />

<header class="header {scrollY !== 0 && 'bg-primary'}">
	<title>ENERGYNET</title>
	<div class="px-2 flex">
		<a class="flex justify-between items-center text-xl font-manrope_bold" href="/">
			<img class="w-46 h-10" src="/logo-energynet.png" />
		</a>
	</div>
	<nav class="main-nav">
		<ul class="flex items-center gap-6">
			{#if innerWidth && innerWidth < 900}
				<li>
					<span class="flex items-center cursor-pointer" on:click={sideBar.toggleMenu}>
						<Fa size="2x" icon={faBars} class="pr-2 text-white" />
					</span>
				</li>
			{:else if innerWidth}
				<NavigationItems />
			{/if}
		</ul>
	</nav>
</header>

<SideBar bind:this={sideBar}>
	<span slot="content">
		<nav class="main-nav">
			<ul class="flex flex-col gap-6 mr-8" on:click={sideBar.toggleMenu}>
				<NavigationItems />
			</ul>
		</nav>
	</span>
</SideBar>

<style>
	.header {
		@apply fixed transition-all duration-300 top-0 z-20 w-full flex justify-between items-center p-3 py-10 mx-auto lg:px-10 xl:px-24;
	}
</style>
