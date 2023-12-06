<script>
	import { t } from '$lib/translations';

	export let imgSrc = '';
	export let imgOrder = 'order-1';
	export let header = '';
</script>

<div class="flex flex-col md:flex-row items-center md:px-24 lg:px-43 py-8 gap-12">
	<div class="w-1/2 order-5 w-full px-10 md:{imgOrder}">
		<img class="flex self-center" src={imgSrc} />
	</div>
	<div class="w-1/2 order-1 w-full px-10">
		<div class="text-third text-3xl pb-6 font-bold">{header}</div>

		<h3 class="pb-4 text-2xl font-bold">{$t('shared.goal')}</h3>
		<div class="pb-4">
			<slot name="goals" />
		</div>
		<h3 class="pb-4 text-2xl font-bold">{$t('shared.features')}</h3>
		<div class="pb-4">
			<slot name="features" />
		</div>
	</div>
</div>
