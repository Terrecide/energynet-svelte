<script>
	import { clickOutside } from '$lib/utils/clickOutside';
	import { fade, fly } from 'svelte/transition';
	import { browser } from '$app/environment';

	export let style = '';
	export let showMenu = false;
	export let direction = 'left';

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
	<div class="bg-overlay" transition:fade={{ duration: 400 }}>
		<div
			class="menu {style}"
			use:clickOutside
			on:click_outside={toggleMenu}
			transition:fly={{ ...flyDirection(direction), duration: 500 }}
		>
			<div class="menu-header">
				<div class="menu-close" on:click={toggleMenu}>
					<i class="mi-close text-3xl" />
				</div>
			</div>
			<div class="menu-content">
				<slot name="content" />
			</div>
		</div>
	</div>
{/if}
