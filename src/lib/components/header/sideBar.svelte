<script>
	import { clickOutside } from '$lib/utils/clickOutside';
	import { fade, fly } from 'svelte/transition';
	import { browser } from '$app/environment';
	import Fa from 'svelte-fa';
	import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

	export let style = '';
	export let showMenu = false;
	export let direction = 'right';

	export function toggleMenu() {
		showMenu = !showMenu;
	}

	function flyDirection(direction) {
		if (direction === 'top') {
			return { y: 500 };
		} else if (direction === 'bottom') {
			return { y: -500 };
		} else if (direction === 'right') {
			return { x: 500 };
		} else {
			return { x: -500 };
		}
	}

	$: if (showMenu && browser) {
		document.documentElement.classList.add('overflow-hidden');
	} else if (browser) {
		document?.documentElement.classList.remove('overflow-hidden');
	}
</script>

{#if showMenu}
	<div class="bg-overlay" transition:fade={{ duration: 200 }}>
		<div
			class="menu {style}"
			use:clickOutside
			on:click_outside={toggleMenu}
			transition:fly={{ ...flyDirection(direction), duration: 200 }}
		>
			<div class="menu-header">
				<div class="menu-close" on:click={toggleMenu}>
					<Fa size="2x" icon={faCircleXmark} class="text-white" />
				</div>
			</div>
			<div class="menu-content">
				<slot name="content" />
			</div>
		</div>
	</div>
{/if}

<style>
	.bg-overlay {
		@apply flex justify-end overflow-auto z-30 fixed top-0 left-0 w-full h-full;
		background-color: rgb(0, 0, 0);
		background-color: rgba(0, 0, 0, 0.4);
	}

	.menu {
		@apply bg-primary h-full p-4 flex flex-col z-40 overflow-auto relative;
		min-width: 50vw;
	}

	.menu-header {
		@apply flex justify-between items-end p-4 absolute top-0 right-0 z-10;
	}

	.menu-content {
		@apply flex flex-col;
	}

	.menu-close {
		@apply flex self-end cursor-pointer;
	}
</style>
