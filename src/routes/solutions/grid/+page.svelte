<script>
	import HeaderSection from '$lib/components/headerSection.svelte';
	import { t } from '$lib/translations';
	import Features from '../../../lib/components/solutions/features.svelte';
	import { smoothScroll } from '$lib';
	import Fa from 'svelte-fa';
	import {
		faChartLine,
		faArrowUpLong,
		faLocationDot,
		faUpRightAndDownLeftFromCenter,
		faScaleUnbalanced,
		faSackDollar,
		faLink,
		faArrowsUpDownLeftRight,
		faTriangleExclamation,
		faNetworkWired,
		faCalendarDays,
		faFileLines,
		faCircleCheck,
		faKey,
		faGear
	} from '@fortawesome/free-solid-svg-icons';
</script>

<HeaderSection bgSecondImgSrc="/solutions/gridheader.png" spacerStyle="bg-hydro">
	<span class="flex flex-col items-center justify-center" slot="header">
		<img class="max-h-24 white-filter" src="/home/x-em.png" />
		<div class="pt-4 text-xl font-bold">{$t('grid.slogan')}</div>
	</span>
</HeaderSection>
<div
	class="flex flex-col md:flex-row justify-center items-center m-auto px-10 sm:px-24 md:px-43 xl:px-64 2xl:px-96 gap-12"
>
	<img class="max-h-24" src="/home/x-em.png" />
	<div>
		<h1 class="!text-secondary text-4xl mb-4 font-bold">{$t('grid.header')}</h1>
		<div class="flex flex-col gap-6 text-xl">
			{$t('grid.headerDesc')}
			<br /><br />
			{$t('grid.headerDesc2')}
		</div>
	</div>
</div>
<div class="flex flex-col text-center py-24 px-10 sm:px-24 xl:px-48">
	<h1 class="text-primary text-4xl mb-4 font-bold">{$t('grid.introHeader')}</h1>
	<img src="/solutions/grid2.png" alt="" />
</div>
<div class="flex flex-col text-center py-24 px-10 sm:px-24 xl:px-48">
	<h1 class="text-primary text-4xl mb-4 font-bold">{$t('grid.introHeader2')}</h1>
	<div class="flex flex-col lg:flex-row gap-16 py-10">
		<img class="lg:w-2/5" src="/solutions/gridintro.png" alt="" />
		<div class="lg:w-3/5 self-center text-start text-xl">
			<div>{$t('grid.introDesc')}</div>
			<br /><br />
			<div>{$t('grid.introDesc2')}</div>
		</div>
	</div>
</div>
<div class="flex flex-col gap-6 justify-around py-12 px-12 lg:px-24 xl:px-40 text-center bg-gray">
	<h1 class="text-primary text-4xl mb-4 font-bold">{$t('grid.introHeader2')}</h1>
	<div class="flex flex-col xl:flex-row gap-12 xl:gap-24 py-10">
		<div class="flex flex-col bg-white shadow p-8 text-xl divide-y divide-divide w-full">
			<div class="flex flex-col text-center gap-2 pb-6">
				<img
					class="h-30 h-full w-full w-52 self-center"
					src="/solutions/gridcard1.png"
					alt="gridcard"
				/>
				<div class="font-bold">{$t('grid.introCardHead')}</div>
				<div>{$t('grid.introCardHeadDesc')}</div>
			</div>
			<div class="pt-8">
				<ul class="flex flex-col list-disc pl-4 gap-2 text-start">
					<li class="text-xl">{$t('grid.introCardBullet1')}</li>
					<li class="text-xl">{$t('grid.introCardBullet2')}</li>
					<li class="text-xl">{$t('grid.introCardBullet3')}</li>
					<li class="text-xl">{$t('grid.introCardBullet4')}</li>
				</ul>
			</div>
		</div>
		<div class="flex flex-col bg-white shadow p-8 text-xl divide-y divide-divide w-full">
			<div class="flex flex-col text-center gap-2 pb-6">
				<img
					class="h-30 h-full w-full w-52 self-center"
					src="/solutions/gridcard2.png"
					alt="gridcard"
				/>
				<div class="font-bold">{$t('grid.introCard2Head')}</div>
				<div>{$t('grid.introCard2HeadDesc')}</div>
			</div>
			<div class="pt-8">
				<ul class="flex flex-col list-disc pl-4 gap-2 text-start">
					<li class="text-xl">{$t('grid.introCard2Bullet1')}</li>
					<li class="text-xl">{$t('grid.introCard2Bullet2')}</li>
					<li class="text-xl">{$t('grid.introCard2Bullet3')}</li>
					<li class="text-xl">{$t('grid.introCard2Bullet4')}</li>
				</ul>
			</div>
		</div>
		<div class="flex flex-col bg-white shadow p-8 text-xl divide-y divide-divide w-full">
			<div class="flex flex-col text-center gap-2 pb-6">
				<img
					class="h-30 h-full w-full w-52 self-center"
					src="/solutions/gridcard3.png"
					alt="gridcard"
				/>
				<div class="font-bold">{$t('grid.introCard3Head')}</div>
				<div>{$t('grid.introCard3HeadDesc')}</div>
			</div>
			<div class="pt-8">
				<ul class="flex flex-col list-disc pl-4 gap-2 text-start">
					<li class="text-xl">{$t('grid.introCard3Bullet1')}</li>
					<li class="text-xl">{$t('grid.introCard3Bullet2')}</li>
					<li class="text-xl">{$t('grid.introCard3Bullet3')}</li>
					<li class="text-xl">{$t('grid.introCard3Bullet4')}</li>
				</ul>
			</div>
		</div>
	</div>
</div>
<div class="flex flex-col gap-12 py-12 bg-gray">
	<div class="flex flex-col lg:flex-row gap-6 justify-between px-12 md:px-24 lg:px-40">
		<div class="flex flex-col gap-2 pb-6 lg:w-1/2">
			<h3 class="pb-4 text-2xl font-bold">{$t('grid.header2')}</h3>
			<div class="text-third text-3xl pb-2 font-bold">{$t('grid.sectionHeader')}</div>
			<div class="text-xl">
				{$t('grid.sectionContent')}
			</div>
			<div class="flex mt-6">
				<img class="hidden sm:flex self-center" src="/solutions/grid1.png" alt="windheader" />
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
					<Fa size="1.3x" icon={faScaleUnbalanced} class="text-primary" />{$t('grid.feature1')}
				</div>
				<div class="flex gap-2 text-xl">
					<Fa size="1.3x" icon={faUpRightAndDownLeftFromCenter} class="text-primary" />{$t(
						'grid.feature2'
					)}
				</div>
				<div class="flex gap-2 text-xl">
					<Fa size="1.3x" icon={faLocationDot} class="text-primary" />{$t('grid.feature3')}
				</div>
			</div>
			<div
				class="flex flex-col gap-4 bg-white shadow px-4 sm:px-8 md:px-14 py-8 border border-border"
			>
				<div class="flex gap-2 pb-4 text-2xl text-secondary font-bold">
					<Fa size="1.3x" icon={faArrowUpLong} class="text-primary" />{$t('shared.benefits')}
				</div>
				<div class="flex gap-2 text-xl">
					<Fa size="1.3x" icon={faSackDollar} class="text-primary" />{$t('grid.benefit1')}
				</div>
				<div class="flex gap-2 text-xl">
					<Fa size="1.3x" icon={faLink} class="text-primary" />{$t('grid.benefit2')}
				</div>
				<div class="flex gap-2 text-xl">
					<Fa size="1.3x" icon={faChartLine} class="text-primary" />{$t('grid.benefit3')}
				</div>
			</div>
		</div>
	</div>
</div>
<div class="flex flex-col gap-12 py-12">
	<div class="flex flex-col lg:flex-row gap-6 justify-between px-12 md:px-24 lg:px-40">
		<div class="flex flex-col gap-2 pb-6 lg:w-1/2">
			<h3 class="pb-4 text-2xl font-bold">{$t('grid.header2')}</h3>
			<div class="text-third text-3xl pb-2 font-bold">{$t('grid.section2Header')}</div>
			<div class="text-xl">
				{$t('grid.section2Content')}
			</div>
			<div class="flex mt-6">
				<img class="hidden sm:flex self-center" src="/solutions/gridheader.png" alt="windheader" />
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
					<Fa size="1.3x" icon={faChartLine} class="text-primary" />{$t('grid.section2feature1')}
				</div>
				<div class="flex gap-2 text-xl">
					<Fa size="1.3x" icon={faArrowsUpDownLeftRight} class="text-primary" />{$t(
						'grid.section2feature2'
					)}
				</div>
				<div class="flex gap-2 text-xl">
					<Fa size="1.3x" icon={faTriangleExclamation} class="text-primary" />{$t(
						'grid.section2feature3'
					)}
				</div>
				<div class="flex gap-2 text-xl">
					<Fa size="1.3x" icon={faNetworkWired} class="text-primary" />{$t('grid.section2feature4')}
				</div>
			</div>
			<div
				class="flex flex-col gap-4 bg-white shadow px-4 sm:px-8 md:px-14 py-8 border border-border"
			>
				<div class="flex gap-2 pb-4 text-2xl text-secondary font-bold">
					<Fa size="1.3x" icon={faArrowUpLong} class="text-primary" />{$t('shared.benefits')}
				</div>
				<div class="flex gap-2 text-xl">
					<Fa size="1.3x" icon={faUpRightAndDownLeftFromCenter} class="text-primary" />{$t(
						'grid.section2benefit1'
					)}
				</div>
				<div class="flex gap-2 text-xl">
					<Fa size="1.3x" icon={faScaleUnbalanced} class="text-primary" />{$t(
						'grid.section2benefit2'
					)}
				</div>
				<div class="flex gap-2 text-xl">
					<Fa size="1.3x" icon={faSackDollar} class="text-primary" />{$t('grid.section2benefit3')}
				</div>
			</div>
		</div>
	</div>
</div>
<div class="flex flex-col gap-12 py-12 bg-gray">
	<div class="flex flex-col lg:flex-row gap-6 justify-between px-12 md:px-24 lg:px-40">
		<div class="flex flex-col gap-2 pb-6 lg:w-1/2">
			<h3 class="pb-4 text-2xl font-bold">{$t('grid.header2')}</h3>
			<div class="text-third text-3xl pb-2 font-bold">{$t('grid.section3Header')}</div>
			<div class="text-xl">
				{$t('grid.section3Content')}
			</div>
			<div class="flex mt-6">
				<img class="hidden sm:flex self-center" src="/solutions/grid3.png" alt="windheader" />
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
					<Fa size="1.3x" icon={faChartLine} class="text-primary" />{$t('grid.section3feature1')}
				</div>
				<div class="flex gap-2 text-xl">
					<Fa size="1.3x" icon={faCalendarDays} class="text-primary" />{$t('grid.section3feature2')}
				</div>
				<div class="flex gap-2 text-xl">
					<Fa size="1.3x" icon={faFileLines} class="text-primary" />{$t('grid.section3feature3')}
				</div>
			</div>
			<div
				class="flex flex-col gap-4 bg-white shadow px-4 sm:px-8 md:px-14 py-8 border border-border"
			>
				<div class="flex gap-2 pb-4 text-2xl text-secondary font-bold">
					<Fa size="1.3x" icon={faArrowUpLong} class="text-primary" />{$t('shared.benefits')}
				</div>
				<div class="flex gap-2 text-xl">
					<Fa size="1.3x" icon={faCircleCheck} class="text-primary" />{$t('grid.section3benefit1')}
				</div>
				<div class="flex gap-2 text-xl">
					<Fa size="1.3x" icon={faKey} class="text-primary" />{$t('grid.section3benefit2')}
				</div>
				<div class="flex gap-2 text-xl">
					<Fa size="1.3x" icon={faSackDollar} class="text-primary" />{$t('grid.section3benefit3')}
				</div>
				<div class="flex gap-2 text-xl">
					<Fa size="1.3x" icon={faGear} class="text-primary" />{$t('grid.section3benefit4')}
				</div>
			</div>
		</div>
	</div>
</div>
