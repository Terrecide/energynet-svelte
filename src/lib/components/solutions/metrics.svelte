<script>
	import { t } from '$lib/translations';
	import Fa from 'svelte-fa';
	import { faLayerGroup, faBolt, faGlobe } from '@fortawesome/free-solid-svg-icons';

	export let plants = 0;
	export let power = 0;
	export let nations = 0;
	export let hydro = false;
</script>

<div
	class="flex flex-col md:flex-row sm:justify-around items-center m-auto px-10 sm:px-24 md:px-43 xl:px-64 py-16 gap-12"
>
	<div class="flex gap-4 font-bold items-center">
		<Fa class="text-cyan" size="4x" icon={faLayerGroup} />
		<span class="flex flex-col text-primary gap-4">
			<span class="text-5xl">{plants}</span>
			<span class="text-3xl">{$t('shared.plants')}</span>
		</span>
	</div>
	<div class="flex gap-4 font-bold items-center">
		<Fa class="text-cyan" size="4x" icon={faBolt} />
		<span class="flex flex-col text-primary gap-4">
			<span class="text-5xl">{power}</span>
			<span class="text-3xl">{hydro ? $t('shared.gw') : $t('shared.mw')}</span>
		</span>
	</div>
	<div class="flex gap-4 font-bold items-center">
		<Fa class="text-cyan" size="4x" icon={faGlobe} />
		<span class="flex flex-col text-primary gap-4">
			<span class="text-5xl">{nations}</span>
			<span class="text-3xl">{$t('shared.nations')}</span>
		</span>
	</div>
</div>
