<script>
	import HeaderSection from '../../../lib/components/headerSection.svelte';
	import { t } from '$lib/translations';
	import { smoothScroll } from '$lib';
	import Pointer from '../../../lib/components/solutions/pointer.svelte';
	import Metrics from '../../../lib/components/solutions/metrics.svelte';
	import Fa from 'svelte-fa';
	import {
		faArrowUpLong,
		faChartColumn,
		faChartLine,
		faCircleCheck,
		faCircleExclamation,
		faCircleMinus,
		faCloud,
		faHardDrive,
		faScrewdriverWrench,
		faTriangleExclamation,
		faWrench
	} from '@fortawesome/free-solid-svg-icons';
</script>

<HeaderSection bgSecondImgSrc="/solutions/windheader.png" spacerStyle="bg-hydro">
	<span class="flex flex-col items-center justify-center" slot="header">
		<img class="max-h-24 white-filter" src="/home/w-em.png" />
		<div class="pt-4 text-xl font-bold">{$t('wind.slogan')}</div>
	</span>
</HeaderSection>
<div
	class="flex flex-col md:flex-row justify-center items-center m-auto px-10 sm:px-24 md:px-43 xl:px-64 2xl:px-96 gap-12"
>
	<img class="max-h-24" src="/home/w-em.png" />
	<div>
		<h1 class="!text-secondary text-4xl mb-4 font-bold">{$t('wind.header')}</h1>
		<div class="flex flex-col gap-6 text-xl">
			{$t('wind.headerDesc')}
		</div>
	</div>
</div>
<div
	class="flex flex-col lg:flex-row justify-around items-center m-auto py-12 px-10 sm:px-24 md:px-43 xl:px-64 gap-12"
>
	<h1 class="!text-secondary text-4xl mb-4 font-bold">{$t('wind.pointerHeader')}</h1>
	<Pointer itemId="predictive" text={$t('wind.pointer1')} />
	<Pointer itemId="forecast" text={$t('wind.pointer2')} />
</div>
<Metrics plants={490} power={10} nations={20} />
<div class="flex flex-col gap-12 py-12 bg-gray" id="predictive">
	<div class="flex flex-col lg:flex-row gap-6 justify-between px-12 md:px-24 lg:px-40">
		<div class="flex flex-col gap-2 pb-6 lg:w-1/2">
			<h3 class="pb-4 text-2xl font-bold">{$t('wind.header')}</h3>
			<div class="text-third text-3xl pb-2 font-bold">{$t('wind.sectionHeader')}</div>
			<div class="text-third text-xl pb-2 font-bold">
				{$t('wind.sectionSubheader')}
			</div>
			<div class="text-xl">
				{$t('wind.sectionContent')}
			</div>
			<div class="flex mt-6">
				<img class="hidden sm:flex self-center" src="/solutions/windheader.png" alt="windheader" />
			</div>
			<a
				href="#footerForm"
				on:click={smoothScroll}
				class="mt-4 px-4 py-2 rounded-full self-start border-2 border-primary text-primary text-lg hover:text-white hover:bg-primary transition-all duration-300"
				>{$t('shared.contactUs')}
			</a>
		</div>
		<div class="flex flex-col gap-6 lg:w-2/4">
			<div
				class="flex flex-col gap-4 bg-white shadow px-4 sm:px-8 md:px-14 py-8 border border-border"
			>
				<div class="flex gap-2 pb-4 text-2xl text-secondary font-bold">
					<Fa size="1.3x" icon={faArrowUpLong} class="text-primary" />{$t('shared.features1')}
				</div>
				<div class="flex gap-2 text-xl">
					<Fa size="1.3x" icon={faCloud} class="text-primary" />{$t('wind.feature1')}
				</div>
				<div class="flex gap-2 text-xl">
					<Fa size="1.3x" icon={faChartColumn} class="text-primary" />{$t('wind.feature2')}
				</div>
				<div class="flex gap-2 text-xl">
					<Fa size="1.3x" icon={faTriangleExclamation} class="text-primary" />{$t('wind.feature3')}
				</div>
				<div class="flex gap-2 text-xl">
					<Fa size="1.3x" icon={faCircleExclamation} class="text-primary" />{$t('wind.feature4')}
				</div>
				<div class="flex gap-2 text-xl">
					<Fa size="1.3x" icon={faWrench} class="text-primary" />{$t('wind.feature5')}
				</div>
				<div class="flex gap-2 text-xl">
					<Fa size="1.3x" icon={faHardDrive} class="text-primary" />{$t('wind.feature6')}
				</div>
			</div>
			<div
				class="flex flex-col gap-4 bg-white shadow px-4 sm:px-8 md:px-14 py-8 border border-border"
			>
				<div class="flex gap-2 pb-4 text-2xl text-secondary font-bold">
					<Fa size="1.3x" icon={faArrowUpLong} class="text-primary" />{$t('shared.benefits')}
				</div>
				<div class="flex gap-2 text-xl">
					<Fa size="1.3x" icon={faChartLine} class="text-primary" />{$t('wind.benefit1')}
				</div>
				<div class="flex gap-2 text-xl">
					<Fa size="1.3x" icon={faCircleMinus} class="text-primary" />{$t('wind.benefit2')}
				</div>
				<div class="flex gap-2 text-xl">
					<Fa size="1.3x" icon={faScrewdriverWrench} class="text-primary" />{$t('wind.benefit3')}
				</div>
			</div>
		</div>
	</div>
</div>
<div class="flex flex-col gap-12 py-12" id="forecast">
	<div class="flex flex-col lg:flex-row gap-6 justify-between px-12 md:px-24 lg:px-40">
		<div class="flex flex-col gap-2 pb-6 lg:w-1/2">
			<h3 class="pb-4 text-2xl font-bold">{$t('wind.header')}</h3>
			<div class="text-third text-3xl pb-2 font-bold">{$t('wind.section2Header')}</div>
			<div class="text-third text-xl pb-2 font-bold">
				{$t('wind.section2Subheader')}
			</div>
			<div class="text-xl">
				{$t('wind.section2Content')}
			</div>
			<div class="flex mt-6">
				<img class="hidden sm:flex self-center" src="/solutions/wind2.jpg" alt="windheader" />
			</div>
			<a
				href="#footerForm"
				on:click={smoothScroll}
				class="mt-4 px-4 py-2 rounded-full self-start border-2 border-primary text-primary text-lg hover:text-white hover:bg-primary transition-all duration-300"
				>{$t('shared.contactUs')}
			</a>
		</div>
		<div class="flex flex-col gap-6 lg:w-2/4">
			<div
				class="flex flex-col gap-4 bg-white shadow px-4 sm:px-8 md:px-14 py-8 border border-border"
			>
				<div class="flex gap-2 pb-4 text-2xl text-secondary font-bold">
					<Fa size="1.3x" icon={faArrowUpLong} class="text-primary" />{$t('shared.features1')}
				</div>
				<div class="flex gap-2 text-xl">
					<Fa size="1.3x" icon={faCloud} class="text-primary" />{$t('wind.section2feature1')}
				</div>
				<div class="flex gap-2 text-xl">
					<Fa size="1.3x" icon={faChartColumn} class="text-primary" />{$t('wind.section2feature2')}
				</div>
				<div class="flex gap-2 text-xl">
					<Fa size="1.3x" icon={faTriangleExclamation} class="text-primary" />{$t(
						'wind.section2feature3'
					)}
				</div>
				<div class="flex gap-2 text-xl">
					<Fa size="1.3x" icon={faCircleExclamation} class="text-primary" />{$t(
						'wind.section2feature4'
					)}
				</div>
				<div class="flex gap-2 text-xl">
					<Fa size="1.3x" icon={faWrench} class="text-primary" />{$t('wind.section2feature5')}
				</div>
			</div>
			<div
				class="flex flex-col gap-4 bg-white shadow px-4 sm:px-8 md:px-14 py-8 border border-border"
			>
				<div class="flex gap-2 pb-4 text-2xl text-secondary font-bold">
					<Fa size="1.3x" icon={faArrowUpLong} class="text-primary" />{$t('shared.benefits')}
				</div>
				<div class="flex gap-2 text-xl">
					<Fa size="1.3x" icon={faChartLine} class="text-primary" />{$t('wind.section2benefit1')}
				</div>
				<div class="flex gap-2 text-xl">
					<Fa size="1.3x" icon={faCircleMinus} class="text-primary" />{$t('wind.section2benefit2')}
				</div>
				<div class="flex gap-2 text-xl">
					<Fa size="1.3x" icon={faCircleCheck} class="text-primary" />{$t('wind.section2benefit3')}
				</div>
			</div>
		</div>
	</div>
</div>
