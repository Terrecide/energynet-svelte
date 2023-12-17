<script>
	import HeaderSection from '$lib/components/headerSection.svelte';
	import { t } from '$lib/translations';
	import Metrics from '$lib/components/solutions/metrics.svelte';
	import Features from '../../../lib/components/solutions/features.svelte';
	import { smoothScroll } from '$lib';
	import Fa from 'svelte-fa';
	import {
		faChartLine,
		faMagnifyingGlass,
		faCircleExclamation,
		faLightbulb
	} from '@fortawesome/free-solid-svg-icons';
</script>

<HeaderSection bgSecondImgSrc="/solutions/hydroheader.png" spacerStyle="bg-hydro">
	<span class="flex flex-col items-center justify-center" slot="header">
		<img class="max-h-24 white-filter" src="/home/h-em.png" />
		<div class="pt-4 text-xl font-bold">{$t('hydro.slogan')}</div>
	</span>
</HeaderSection>
<div
	class="flex flex-col md:flex-row justify-center items-center m-auto px-10 sm:px-24 md:px-43 xl:px-64 2xl:px-96 gap-12"
>
	<img class="max-h-24" src="/home/h-em.png" />
	<div>
		<h1 class="!text-secondary text-4xl mb-4 font-bold">{$t('hydro.header')}</h1>
		<div class="flex flex-col gap-6 text-xl">
			{$t('hydro.headerDesc')}
		</div>
	</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-12 m-auto px-10 sm:px-24 md:px-43 xl:px-64 py-14">
	<div class="flex gap-6">
		<Fa class="text-primary" size="3x" icon={faChartLine} />
		<div class="flex flex-col">
			<div class="text-third text-xl pb-2 font-bold">{$t('hydro.reason1')}</div>
			<div class="text-third text-xl pb-2">
				{$t('hydro.reason1Desc')}
			</div>
		</div>
	</div>
	<div class="flex gap-6">
		<Fa class="text-primary" size="3x" icon={faMagnifyingGlass} />
		<div class="flex flex-col">
			<div class="text-third text-xl pb-2 font-bold">{$t('hydro.reason2')}</div>
			<div class="text-third text-xl pb-2">
				{$t('hydro.reason2Desc')}
			</div>
		</div>
	</div>
	<div class="flex gap-6">
		<Fa class="text-primary" size="3x" icon={faCircleExclamation} />
		<div class="flex flex-col">
			<div class="text-third text-xl pb-2 font-bold">{$t('hydro.reason3')}</div>
			<div class="text-third text-xl pb-2">
				{$t('hydro.reason3Desc')}
			</div>
		</div>
	</div>
	<div class="flex gap-6">
		<Fa class="text-primary" size="3x" icon={faLightbulb} />
		<div class="flex flex-col">
			<div class="text-third text-xl pb-2 font-bold">{$t('hydro.reason4')}</div>
			<div class="text-third text-xl pb-2">
				{$t('hydro.reason4Desc')}
			</div>
		</div>
	</div>
</div>
<Metrics plants={400} power={300} nations={20} hydro={true} />
<div class="flex flex-col gap-12 py-12 bg-gray" id="assetManager">
	<div class="flex flex-col lg:flex-row gap-6 justify-between px-12 md:px-24 lg:px-40">
		<div class="flex flex-col gap-2 pb-6 lg:w-1/2">
			<h3 class="pb-4 text-2xl font-bold">{$t('hydro.header')}</h3>
			<div class="text-third text-3xl pb-2 font-bold">{$t('hydro.header2')}</div>
			<div class="text-third text-xl pb-2 font-bold">
				{$t('hydro.subHeader2')}
			</div>
			<div class="text-xl">
				{$t('hydro.content2')}
			</div>
			<div class="flex mt-6">
				<img class="hidden sm:flex self-center" id="asset-image" src="/solutions/hydroheader.png" />
			</div>
			<a
				href="#footerForm"
				on:click={smoothScroll}
				class="mt-4 px-4 py-2 rounded-full self-start border-2 border-primary text-primary text-lg hover:text-white hover:bg-primary transition-all duration-300"
				>{$t('shared.contactUs')}
			</a>
		</div>
		<div class="bg-white shadow lg:w-2/4 px-4 sm:px-8 md:px-14 py-8 border border-border h-full">
			<div class="pb-4 text-2xl text-secondary font-bold">{$t('shared.resources')}</div>
			<ul class="text-link list-disc pl-4">
				<li class="text-lg">{$t('hydro.resource2')}</li>
			</ul>
		</div>
	</div>
</div>
<Features imgSrc="/solutions/hydro1.png" header={$t('hydro.header3')}>
	<span slot="goals">
		<ul class="list-disc pl-4">
			<li class="text-xl">{$t('hydro.goals3-1')}</li>
		</ul>
	</span>
	<span slot="features">
		<ul class="list-disc pl-4">
			<li class="text-xl">{$t('hydro.features3-1')}</li>
			<li class="text-xl">{$t('hydro.features3-2')}</li>
		</ul>
	</span>
</Features>
<Features imgOrder="order-2" imgSrc="/solutions/hydro2.png" header={$t('hydro.header4')}>
	<span slot="goals">
		<ul class="list-disc pl-4">
			<li class="text-xl">{$t('hydro.goals4-1')}</li>
		</ul>
	</span>
	<span slot="features">
		<ul class="list-disc pl-4">
			<li class="text-xl">{$t('hydro.features4-1')}</li>
			<li class="text-xl">{$t('hydro.features4-2')}</li>
		</ul>
	</span>
</Features>
<Features imgSrc="/solutions/hydro3.png" header={$t('hydro.header5')}>
	<span slot="goals">
		<ul class="list-disc pl-4">
			<li class="text-xl">{$t('hydro.goals5-1')}</li>
		</ul>
	</span>
	<span slot="features">
		<span class="font-bold text-xl">{$t('hydro.features5header')}</span>
		<ul class="list-disc pl-4">
			<li class="text-xl">{$t('hydro.features5-1')}</li>
			<li class="text-xl">{$t('hydro.features5-2')}</li>
			<li class="text-xl">{$t('hydro.features5-3')}</li>
			<li class="text-xl">{$t('hydro.features5-4')}</li>
			<li class="text-xl">{$t('hydro.features5-5')}</li>
		</ul>
	</span>
</Features>
<Features imgOrder="order-2" imgSrc="/solutions/hydro4.png" header={$t('hydro.header6')}>
	<span slot="goals">
		<ul class="list-disc pl-4">
			<li class="text-xl">{$t('hydro.goals6-1')}</li>
		</ul>
	</span>
	<span slot="features">
		<ul class="list-disc pl-4">
			<li class="text-xl">{$t('hydro.features6-1')}</li>
			<li class="text-xl">{$t('hydro.features6-2')}</li>
			<li class="text-xl">{$t('hydro.features6-3')}</li>
		</ul>
	</span>
</Features>
<Features imgSrc="/solutions/hydro5.png" header={$t('hydro.header7')}>
	<span slot="goals">
		<ul class="list-disc pl-4">
			<li class="text-xl">{$t('hydro.goals7-1')}</li>
		</ul>
	</span>
	<span slot="features">
		<ul class="list-disc pl-4">
			<li class="text-xl">{$t('hydro.features7-1')}</li>
			<li class="text-xl">{$t('hydro.features7-2')}</li>
			<li class="text-xl">{$t('hydro.features7-3')}</li>
			<li class="text-xl">{$t('hydro.features7-4')}</li>
		</ul>
	</span>
</Features>
