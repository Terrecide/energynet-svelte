<script>
	import { smoothScroll } from '$lib';
	import Fa from 'svelte-fa';
	import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';

	export let itemId = '';
	export let text = '';
</script>

<a class="flex gap-4 hover:scale-110 transition-all" href="#{itemId}" on:click={smoothScroll}>
	<Fa size="2x" icon={faCircleChevronDown} class="text-primary" />
	<div class="text-primary font-bold text-xl">{text}</div>
</a>
