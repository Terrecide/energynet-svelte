<script>
	import HeaderSection from '$lib/components/headerSection.svelte';
	import { t } from '$lib/translations';
	import Metrics from '../../../lib/components/solutions/metrics.svelte';
	import { smoothScroll } from '$lib';
	import Fa from 'svelte-fa';
	import { faArrowUpLong, faCheck } from '@fortawesome/free-solid-svg-icons';
	import Pointer from '../../../lib/components/solutions/pointer.svelte';
</script>

<HeaderSection bgSecondImgSrc="/solutions/solarheader.png" spacerStyle="bg-hydro">
	<span class="flex flex-col items-center justify-center" slot="header">
		<img class="max-h-24 white-filter" src="/home/s-em.png" />
		<div class="pt-4 text-xl font-bold">{$t('solar.slogan')}</div>
	</span>
</HeaderSection>
<div
	class="flex flex-col md:flex-row justify-center items-center m-auto px-10 sm:px-24 md:px-43 xl:px-64 2xl:px-96 gap-12"
>
	<img class="max-h-24" src="/home/s-em.png" />
	<div>
		<h1 class="!text-secondary text-4xl mb-4 font-bold">{$t('solar.header')}</h1>
		<div class="flex flex-col gap-6 text-xl">
			{$t('solar.headerDesc')}
			<br /><br />
			{$t('solar.headerDesc2')}
		</div>
	</div>
</div>
<Metrics plants={400} power={300} nations={20} />
<div class="flex flex-col gap-6 justify-around py-12 px-12 lg:px-24 xl:px-40 text-center">
	<h1 class="text-primary text-4xl mb-4 font-bold">{$t('solar.solarBenefitsHead')}</h1>
	<div class="flex flex-col xl:flex-row gap-12 xl:gap-24 py-10">
		<div class="flex flex-col bg-white p-8 text-xl divide-y divide-divide w-full">
			<div class="flex flex-col text-center gap-2 pb-6">
				<div class="font-bold">{$t('solar.solarCard1Head')}</div>
				<img
					class="h-30 h-full w-full w-52 self-center"
					src="/solutions/solarcard1.jpg"
					alt="gridcard"
				/>
				<div class="font-bold text-2xl pt-2">{$t('solar.solarCard1Head2')}</div>
			</div>
			<div class="pt-8">
				<div class="flex flex-col pl-4 gap-2 text-start">
					<div class="flex gap-2 text-xl">
						<Fa size="1x" icon={faCheck} class="text-primary" />{$t('solar.solarCard1benefit1')}
					</div>
					<div class="flex gap-2 text-xl">
						<Fa size="1x" icon={faCheck} class="text-primary" />{$t('solar.solarCard1benefit2')}
					</div>
					<div class="flex gap-2 text-xl">
						<Fa size="1x" icon={faCheck} class="text-primary" />{$t('solar.solarCard1benefit3')}
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-col bg-white p-8 text-xl divide-y divide-divide w-full">
			<div class="flex flex-col text-center gap-2 pb-6">
				<div class="font-bold">{$t('solar.solarCard2Head')}</div>
				<img
					class="h-30 h-full w-full w-52 self-center"
					src="/solutions/solarcard2.jpg"
					alt="gridcard"
				/>
				<div class="font-bold text-2xl pt-2">{$t('solar.solarCard2Head2')}</div>
			</div>
			<div class="pt-8">
				<div class="flex flex-col pl-4 gap-2 text-start">
					<div class="flex gap-2 text-xl">
						<Fa size="1x" icon={faCheck} class="text-primary" />{$t('solar.solarCard2benefit1')}
					</div>
					<div class="flex gap-2 text-xl">
						<Fa size="1x" icon={faCheck} class="text-primary" />{$t('solar.solarCard2benefit2')}
					</div>
					<div class="flex gap-2 text-xl">
						<Fa size="1x" icon={faCheck} class="text-primary" />{$t('solar.solarCard2benefit3')}
					</div>
					<div class="flex gap-2 text-xl">
						<Fa size="1x" icon={faCheck} class="text-primary" />{$t('solar.solarCard2benefit4')}
					</div>
					<div class="flex gap-2 text-xl">
						<Fa size="1x" icon={faCheck} class="text-primary" />{$t('solar.solarCard2benefit5')}
					</div>
					<div class="flex gap-2 text-xl">
						<Fa size="1x" icon={faCheck} class="text-primary" />{$t('solar.solarCard2benefit6')}
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-col bg-white p-8 text-xl divide-y divide-divide w-full">
			<div class="flex flex-col text-center gap-2 pb-6">
				<div class="font-bold">{$t('solar.solarCard3Head')}</div>
				<img
					class="h-30 h-full w-full w-52 self-center"
					src="/solutions/solarcard3.jpg"
					alt="gridcard"
				/>
				<div class="font-bold text-2xl pt-2">{$t('solar.solarCard3Head2')}</div>
			</div>
			<div class="pt-8">
				<div class="flex flex-col pl-4 gap-2 text-start">
					<div class="flex gap-2 text-xl">
						<Fa size="1x" icon={faCheck} class="text-primary" />{$t('solar.solarCard3benefit1')}
					</div>
					<div class="flex gap-2 text-xl">
						<Fa size="1x" icon={faCheck} class="text-primary" />{$t('solar.solarCard3benefit2')}
					</div>
					<div class="flex gap-2 text-xl">
						<Fa size="1x" icon={faCheck} class="text-primary" />{$t('solar.solarCard3benefit3')}
					</div>
					<div class="flex gap-2 text-xl">
						<Fa size="1x" icon={faCheck} class="text-primary" />{$t('solar.solarCard3benefit4')}
					</div>
					<div class="flex gap-2 text-xl">
						<Fa size="1x" icon={faCheck} class="text-primary" />{$t('solar.solarCard3benefit5')}
					</div>
					<div class="flex gap-2 text-xl">
						<Fa size="1x" icon={faCheck} class="text-primary" />{$t('solar.solarCard3benefit6')}
					</div>
					<div class="flex gap-2 text-xl">
						<Fa size="1x" icon={faCheck} class="text-primary" />{$t('solar.solarCard3benefit7')}
					</div>
					<div class="flex gap-2 text-xl">
						<Fa size="1x" icon={faCheck} class="text-primary" />{$t('solar.solarCard3benefit8')}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="flex flex-col text-start px-24 md:px-48 xl:px-96">
	<h1 class="text-primary text-4xl mb-4 font-bold">{$t('solar.serviceHead')}</h1>
	<div class="text-xl text-start">{$t('solar.serviceContent')}</div>
</div>
<div class="flex flex-col text-center py-24 px-10 sm:px-24 xl:px-48">
	<img src="/solutions/solarservicedeployment.png" alt="" />
</div>
<div class="flex flex-col gap-6 justify-around py-12 px-12 lg:px-24 xl:px-40 text-center bg-gray">
	<h1 class="text-primary text-4xl mb-4 font-bold">{$t('solar.solarBenefitsHead2')}</h1>
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 py-10">
		<div class="flex flex-col bg-white shadow p-8 text-xl divide-y divide-divide w-full">
			<div class="flex flex-col text-center gap-2 pb-6">
				<div class="flex relative pb-8">
					<img
						class="h-30 h-full w-full w-52 self-center"
						src="/solutions/solarbenefitscard1.png"
						alt="gridcard"
					/>
					<img
						class="h-20 absolute bottom-0 left-1/2 -translate-x-1/2"
						src="/solutions/solarbenefitsperson1.png"
						alt="person1"
					/>
				</div>
				<div class="font-bold">{$t('solar.solarBenefitsCard1Head')}</div>
				<div>{$t('solar.solarBenefitsCard1Desc')}</div>
			</div>
			<div class="pt-8">
				<ul class="flex flex-col list-disc pl-4 gap-2 text-start">
					<li class="text-xl">{$t('solar.solarBenefitsCard1Bullet1')}</li>
					<li class="text-xl">{$t('solar.solarBenefitsCard1Bullet2')}</li>
				</ul>
			</div>
		</div>
		<div class="flex flex-col bg-white shadow p-8 text-xl divide-y divide-divide w-full">
			<div class="flex flex-col text-center gap-2 pb-6">
				<div class="flex relative pb-8">
					<img
						class="h-30 h-full w-full w-52 self-center"
						src="/solutions/solarbenefitscard2.png"
						alt="gridcard"
					/>
					<img
						class="h-20 absolute bottom-0 left-1/2 -translate-x-1/2"
						src="/solutions/solarbenefitsperson2.png"
						alt="person1"
					/>
				</div>
				<div class="font-bold">{$t('solar.solarBenefitsCard2Head')}</div>
				<div>{$t('solar.solarBenefitsCard2Desc')}</div>
			</div>
			<div class="pt-8">
				<ul class="flex flex-col list-disc pl-4 gap-2 text-start">
					<li class="text-xl">{$t('solar.solarBenefitsCard2Bullet1')}</li>
					<li class="text-xl">{$t('solar.solarBenefitsCard2Bullet2')}</li>
					<li class="text-xl">{$t('solar.solarBenefitsCard2Bullet3')}</li>
					<li class="text-xl">{$t('solar.solarBenefitsCard2Bullet4')}</li>
				</ul>
			</div>
		</div>
		<div class="flex flex-col bg-white shadow p-8 text-xl divide-y divide-divide w-full">
			<div class="flex flex-col text-center gap-2 pb-6">
				<div class="flex relative pb-8">
					<img
						class="h-30 h-full w-full w-52 self-center"
						src="/solutions/solarbenefitscard3.png"
						alt="gridcard"
					/>
					<img
						class="h-20 absolute bottom-0 left-1/2 -translate-x-1/2"
						src="/solutions/solarbenefitsperson3.png"
						alt="person1"
					/>
				</div>
				<div class="font-bold">{$t('solar.solarBenefitsCard3Head')}</div>
				<div>{$t('solar.solarBenefitsCard3Desc')}</div>
			</div>
			<div class="pt-8">
				<ul class="flex flex-col list-disc pl-4 gap-2 text-start">
					<li class="text-xl">{$t('solar.solarBenefitsCard3Bullet1')}</li>
					<li class="text-xl">{$t('solar.solarBenefitsCard3Bullet2')}</li>
					<li class="text-xl">{$t('solar.solarBenefitsCard3Bullet3')}</li>
				</ul>
			</div>
		</div>
		<div class="flex flex-col bg-white shadow p-8 text-xl divide-y divide-divide w-full">
			<div class="flex flex-col text-center gap-2 pb-6">
				<div class="flex relative pb-8">
					<img
						class="h-30 h-full w-full w-52 self-center"
						src="/solutions/solarbenefitscard4.png"
						alt="gridcard"
					/>
					<img
						class="h-20 absolute bottom-0 left-1/2 -translate-x-1/2"
						src="/solutions/solarbenefitsperson4.png"
						alt="person1"
					/>
				</div>
				<div class="font-bold">{$t('solar.solarBenefitsCard4Head')}</div>
				<div>{$t('solar.solarBenefitsCard4Desc')}</div>
			</div>
			<div class="pt-8">
				<ul class="flex flex-col list-disc pl-4 gap-2 text-start">
					<li class="text-xl">{$t('solar.solarBenefitsCard4Bullet1')}</li>
				</ul>
			</div>
		</div>
		<div class="flex flex-col bg-white shadow p-8 text-xl divide-y divide-divide w-full">
			<div class="flex flex-col text-center gap-2 pb-6">
				<div class="flex relative pb-8">
					<img
						class="h-30 h-full w-full w-52 self-center"
						src="/solutions/solarbenefitscard5.png"
						alt="gridcard"
					/>
					<img
						class="h-20 absolute bottom-0 left-1/2 -translate-x-1/2"
						src="/solutions/solarbenefitsperson5.png"
						alt="person1"
					/>
				</div>
				<div class="font-bold">{$t('solar.solarBenefitsCard5Head')}</div>
				<div>{$t('solar.solarBenefitsCard5Desc')}</div>
			</div>
			<div class="pt-8">
				<ul class="flex flex-col list-disc pl-4 gap-2 text-start">
					<li class="text-xl">{$t('solar.solarBenefitsCard5Bullet1')}</li>
					<li class="text-xl">{$t('solar.solarBenefitsCard5Bullet2')}</li>
					<li class="text-xl">{$t('solar.solarBenefitsCard5Bullet3')}</li>
				</ul>
			</div>
		</div>
	</div>
</div>
<div class="flex flex-col gap-6 justify-around py-12 px-12 lg:px-24 xl:px-40 text-center">
	<h1 class="text-primary text-4xl mb-4 font-bold">{$t('solar.solarBenefitsHead')}</h1>
	<div class="flex flex-col xl:flex-row py-10 md:divide-x divide-divide">
		<div class="flex flex-col bg-white p-16 text-xl">
			<div class="flex flex-col text-center gap-2 pb-6">
				<h1 class="text-primary font-bold text-2xl">{$t('solar.examplesCard1Head')}</h1>
				<h1 class="font-bold text-xl pb-12">{$t('solar.examplesCard1Desc')}</h1>
				<h1 class="text-primary font-bold text-xl">{$t('solar.examplesCard1Head2')}</h1>
				<h1 class="font-bold text-xl pb-4 text-gray2">
					{$t('solar.examplesCard1Desc2')}
				</h1>
				<img
					class="h-30 h-full w-full w-52 self-center"
					src="/solutions/solarbenefitsexample1.jpg"
					alt="gridcard"
				/>
			</div>
			<div class="pt-8">
				<div class="flex flex-col pl-4 gap-2 text-start">
					<h1 class="text-primary font-bold text-xl uppercase pb-4">{$t('shared.benefits')}</h1>
					<div class="flex gap-2 text-xl">
						<Fa size="1x" icon={faCheck} class="text-primary" />{$t('solar.exampledCard1Benefit1')}
					</div>
					<div class="flex gap-2 text-xl">
						<Fa size="1x" icon={faCheck} class="text-primary" />{$t('solar.exampledCard1Benefit1')}
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-col bg-white p-16 text-xl">
			<div class="flex flex-col text-center gap-2 pb-6">
				<h1 class="text-primary font-bold text-2xl">{$t('solar.examplesCard2Head')}</h1>
				<h1 class="font-bold text-xl pb-12">{$t('solar.examplesCard2Desc')}</h1>
				<h1 class="text-primary font-bold text-xl">{$t('solar.examplesCard2Head2')}</h1>
				<h1 class="font-bold text-xl pb-4 text-gray2">
					{$t('solar.examplesCard2Desc2')}
				</h1>
				<img
					class="h-30 h-full w-full w-52 self-center"
					src="/solutions/solarbenefitsexample2.jpg"
					alt="gridcard"
				/>
			</div>
			<div class="pt-8">
				<div class="flex flex-col pl-4 gap-2 text-start">
					<h1 class="text-primary font-bold text-xl uppercase pb-4">{$t('shared.benefits')}</h1>
					<div class="flex gap-2 text-xl">
						<Fa size="1x" icon={faCheck} class="text-primary" />{$t('solar.exampledCard2Benefit1')}
					</div>
					<div class="flex gap-2 text-xl">
						<Fa size="1x" icon={faCheck} class="text-primary" />{$t('solar.exampledCard2Benefit1')}
					</div>
					<div class="flex gap-2 text-xl">
						<Fa size="1x" icon={faCheck} class="text-primary" />{$t('solar.exampledCard2Benefit3')}
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-col bg-white p-16 text-xl">
			<div class="flex flex-col text-center gap-2 pb-6">
				<h1 class="text-primary font-bold text-2xl">{$t('solar.examplesCard3Head')}</h1>
				<h1 class="font-bold text-xl pb-12">{$t('solar.examplesCard3Desc')}</h1>
				<h1 class="text-primary font-bold text-xl">{$t('solar.examplesCard3Head2')}</h1>
				<img
					class="h-30 h-full w-full w-52 self-center"
					src="/solutions/solarbenefitsexample3.jpg"
					alt="gridcard"
				/>
			</div>
			<div class="pt-8">
				<div class="flex flex-col pl-4 gap-2 text-start">
					<h1 class="text-primary font-bold text-xl uppercase pb-4">{$t('shared.benefits')}</h1>
					<div class="flex gap-2 text-xl">
						<Fa size="1x" icon={faCheck} class="text-primary" />{$t('solar.exampledCard3Benefit1')}
					</div>
					<div class="flex gap-2 text-xl">
						<Fa size="1x" icon={faCheck} class="text-primary" />{$t('solar.exampledCard3Benefit1')}
					</div>
					<div class="flex gap-2 text-xl">
						<Fa size="1x" icon={faCheck} class="text-primary" />{$t('solar.exampledCard3Benefit3')}
					</div>
					<div class="flex gap-2 text-xl">
						<Fa size="1x" icon={faCheck} class="text-primary" />{$t('solar.exampledCard3Benefit4')}
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="flex justify-center">
		<a
			href="#footerForm"
			on:click={smoothScroll}
			class="mt-4 px-4 py-2 rounded-full self-start border-2 border-primary text-primary text-lg hover:text-white hover:bg-primary transition-all duration-300"
			>{$t('shared.contactUs')}
		</a>
	</div>
</div>
<div class="flex flex-col gap-12 py-12 bg-gray">
	<div class="flex flex-col lg:flex-row gap-6 justify-between px-12 md:px-24 lg:px-40">
		<div class="flex flex-col gap-2 pb-6 lg:w-1/2">
			<h3 class="pb-4 text-2xl font-bold">{$t('solar.header')}</h3>
			<div class="text-third text-3xl pb-2 font-bold">{$t('solar.section2Header')}</div>
			<div class="text-third text-xl pb-2 font-bold">
				{$t('solar.sectionSubheader')}
			</div>
			<div class="text-xl">
				{$t('solar.sectionContent')}
			</div>
			<div class="flex mt-6">
				<img
					class="hidden sm:flex self-center"
					src="/solutions/solarsection1.png"
					alt="windheader"
				/>
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
				<ul class="flex flex-col gap-1 list-disc pl-4">
					<li class="text-lg">{$t('solar.feature1')}</li>
					<li class="text-lg">{$t('solar.feature2')}</li>
					<li class="text-lg">{$t('solar.feature3')}</li>
					<li class="text-lg">{$t('solar.feature4')}</li>
					<li class="text-lg">{$t('solar.feature5')}</li>
					<li class="text-lg">{$t('solar.feature6')}</li>
					<li class="text-lg">{$t('solar.feature7')}</li>
				</ul>
			</div>
			<div
				class="flex flex-col gap-4 bg-white shadow px-4 sm:px-8 md:px-14 py-8 border border-border"
			>
				<div class="flex gap-2 pb-4 text-2xl text-secondary font-bold">
					<Fa size="1.3x" icon={faArrowUpLong} class="text-primary" />{$t('shared.benefits')}
				</div>
				<ul class="flex flex-col gap-1 list-disc pl-4">
					<li class="text-lg">{$t('solar.benefit1')}</li>
					<li class="text-lg">{$t('solar.benefit2')}</li>
				</ul>
			</div>
		</div>
	</div>
</div>
<div class="flex flex-col gap-12 py-12">
	<div class="flex flex-col lg:flex-row gap-6 justify-between px-12 md:px-24 lg:px-40">
		<div class="flex flex-col gap-2 pb-6 lg:w-1/2">
			<h3 class="pb-4 text-2xl font-bold">{$t('solar.header')}</h3>
			<div class="text-third text-3xl pb-2 font-bold">{$t('solar.section2Header')}</div>
			<div class="text-third text-xl pb-2 font-bold">
				{$t('solar.section2Subheader')}
			</div>
			<div class="text-xl">
				{$t('solar.section2Content')}
			</div>
			<div class="flex mt-6">
				<img
					class="hidden sm:flex self-center"
					src="/solutions/solarsection2.png"
					alt="windheader"
				/>
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
				<ul class="flex flex-col gap-1 list-disc pl-4">
					<li class="text-lg">{$t('solar.section2feature1')}</li>
					<li class="text-lg">{$t('solar.section2feature2')}</li>
					<li class="text-lg">{$t('solar.section2feature3')}</li>
					<li class="text-lg">{$t('solar.section2feature4')}</li>
					<li class="text-lg">{$t('solar.section2feature5')}</li>
				</ul>
			</div>
			<div
				class="flex flex-col gap-4 bg-white shadow px-4 sm:px-8 md:px-14 py-8 border border-border"
			>
				<div class="flex gap-2 pb-4 text-2xl text-secondary font-bold">
					<Fa size="1.3x" icon={faArrowUpLong} class="text-primary" />{$t('shared.benefits')}
				</div>
				<ul class="flex flex-col gap-1 list-disc pl-4">
					<li class="text-lg">{$t('solar.section2benefit1')}</li>
					<li class="text-lg">{$t('solar.section2benefit2')}</li>
					<li class="text-lg">{$t('solar.section2benefit3')}</li>
				</ul>
			</div>
		</div>
	</div>
</div>
<div
	class="flex flex-col lg:flex-row justify-around items-center m-auto py-12 px-10 sm:px-24 md:px-43 xl:px-64 gap-12 bg-gray"
>
	<h1 class="!text-secondary text-4xl mb-4 font-bold">{$t('solar.pointerHeader')}</h1>
	<div class="flex gap-6">
		<div class="flex flex-col gap-6 w-1/2">
			<Pointer itemId="predictive" text={$t('solar.pointer1')} />
			<Pointer itemId="forecast" text={$t('solar.pointer2')} />
			<Pointer itemId="sensor" text={$t('solar.pointer3')} />
		</div>
		<div class="flex flex-col gap-6 w-1/2">
			<Pointer itemId="satellite" text={$t('solar.pointer4')} />
			<Pointer itemId="drone" text={$t('solar.pointer5')} />
			<Pointer itemId="phone" text={$t('solar.pointer6')} />
		</div>
	</div>
</div>
<div class="flex flex-col gap-12 py-12" id="predictive">
	<div class="flex flex-col lg:flex-row gap-6 justify-between px-12 md:px-24 lg:px-40">
		<div class="flex flex-col gap-2 pb-6 lg:w-1/2">
			<h3 class="pb-4 text-2xl font-bold">{$t('solar.header')}</h3>
			<div class="text-third text-3xl pb-2 font-bold">{$t('solar.section3Header')}</div>
			<div class="text-third text-xl pb-2 font-bold">
				{$t('solar.section3Subheader')}
			</div>
			<div class="text-xl">
				{$t('solar.section3Content')}
			</div>
			<div class="flex mt-6">
				<img
					class="hidden sm:flex self-center"
					src="/solutions/solarsection3.png"
					alt="windheader"
				/>
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
				<ul class="flex flex-col gap-1 list-disc pl-4">
					<li class="text-lg">{$t('solar.section3feature1')}</li>
					<li class="text-lg">{$t('solar.section3feature2')}</li>
					<li class="text-lg">{$t('solar.section3feature3')}</li>
					<li class="text-lg">{$t('solar.section3feature4')}</li>
					<li class="text-lg">{$t('solar.section3feature5')}</li>
				</ul>
			</div>
			<div
				class="flex flex-col gap-4 bg-white shadow px-4 sm:px-8 md:px-14 py-8 border border-border"
			>
				<div class="flex gap-2 pb-4 text-2xl text-secondary font-bold">
					<Fa size="1.3x" icon={faArrowUpLong} class="text-primary" />{$t('shared.benefits')}
				</div>
				<ul class="flex flex-col gap-1 list-disc pl-4">
					<li class="text-lg">{$t('solar.section3benefit1')}</li>
					<li class="text-lg">{$t('solar.section3benefit2')}</li>
					<li class="text-lg">{$t('solar.section3benefit3')}</li>
				</ul>
			</div>
		</div>
	</div>
</div>
<div class="flex flex-col gap-12 py-12 bg-gray" id="forecast">
	<div class="flex flex-col lg:flex-row gap-6 justify-between px-12 md:px-24 lg:px-40">
		<div class="flex flex-col gap-2 pb-6 lg:w-1/2">
			<h3 class="pb-4 text-2xl font-bold">{$t('solar.header')}</h3>
			<div class="text-third text-3xl pb-2 font-bold">{$t('solar.section4Header')}</div>
			<div class="text-third text-xl pb-2 font-bold">
				{$t('solar.section4Subheader')}
			</div>
			<div class="text-xl">
				{$t('solar.section4Content')}
			</div>
			<div class="flex mt-6">
				<img
					class="hidden sm:flex self-center"
					src="/solutions/solarsection4.jpg"
					alt="windheader"
				/>
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
				<ul class="flex flex-col gap-1 list-disc pl-4">
					<li class="text-lg">{$t('solar.section4feature1')}</li>
					<li class="text-lg">{$t('solar.section4feature2')}</li>
					<li class="text-lg">{$t('solar.section4feature3')}</li>
					<li class="text-lg">{$t('solar.section4feature4')}</li>
					<li class="text-lg">{$t('solar.section4feature5')}</li>
				</ul>
			</div>
			<div
				class="flex flex-col gap-4 bg-white shadow px-4 sm:px-8 md:px-14 py-8 border border-border"
			>
				<div class="flex gap-2 pb-4 text-2xl text-secondary font-bold">
					<Fa size="1.3x" icon={faArrowUpLong} class="text-primary" />{$t('shared.benefits')}
				</div>
				<ul class="flex flex-col gap-1 list-disc pl-4">
					<li class="text-lg">{$t('solar.section4benefit1')}</li>
					<li class="text-lg">{$t('solar.section4benefit2')}</li>
					<li class="text-lg">{$t('solar.section4benefit3')}</li>
				</ul>
			</div>
		</div>
	</div>
</div>
<div class="flex flex-col gap-12 py-12" id="sensor">
	<div class="flex flex-col lg:flex-row gap-6 justify-between px-12 md:px-24 lg:px-40">
		<div class="flex flex-col gap-2 pb-6 lg:w-1/2">
			<h3 class="pb-4 text-2xl font-bold">{$t('solar.header')}</h3>
			<div class="text-third text-3xl pb-2 font-bold">{$t('solar.section5Header')}</div>
			<div class="text-third text-xl pb-2 font-bold">
				{$t('solar.section5Subheader')}
			</div>
			<div class="text-xl">
				{$t('solar.section5Content')}
			</div>
			<div class="flex mt-6">
				<img
					class="hidden sm:flex self-center"
					src="/solutions/solarsection5.png"
					alt="windheader"
				/>
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
				<ul class="flex flex-col gap-1 list-disc pl-4">
					<li class="text-lg">{$t('solar.section5feature1')}</li>
					<li class="text-lg">{$t('solar.section5feature2')}</li>
					<li class="text-lg">{$t('solar.section5feature3')}</li>
					<li class="text-lg">{$t('solar.section5feature4')}</li>
					<li class="text-lg">{$t('solar.section5feature5')}</li>
				</ul>
			</div>
			<div
				class="flex flex-col gap-4 bg-white shadow px-4 sm:px-8 md:px-14 py-8 border border-border"
			>
				<div class="flex gap-2 pb-4 text-2xl text-secondary font-bold">
					<Fa size="1.3x" icon={faArrowUpLong} class="text-primary" />{$t('shared.benefits')}
				</div>
				<ul class="flex flex-col gap-1 list-disc pl-4">
					<li class="text-lg">{$t('solar.section5benefit1')}</li>
					<li class="text-lg">{$t('solar.section5benefit2')}</li>
					<li class="text-lg">{$t('solar.section5benefit3')}</li>
				</ul>
			</div>
		</div>
	</div>
</div>
<div class="flex flex-col gap-12 py-12 bg-gray" id="satellite">
	<div class="flex flex-col lg:flex-row gap-6 justify-between px-12 md:px-24 lg:px-40">
		<div class="flex flex-col gap-2 pb-6 lg:w-1/2">
			<h3 class="pb-4 text-2xl font-bold">{$t('solar.header')}</h3>
			<div class="text-third text-3xl pb-2 font-bold">{$t('solar.section6Header')}</div>
			<div class="text-third text-xl pb-2 font-bold">
				{$t('solar.section6Subheader')}
			</div>
			<div class="text-xl">
				{$t('solar.section6Content')}
			</div>
			<div class="flex mt-6">
				<img
					class="hidden sm:flex self-center"
					src="/solutions/solarsection6.png"
					alt="windheader"
				/>
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
				<ul class="flex flex-col gap-1 list-disc pl-4">
					<li class="text-lg">{$t('solar.section6feature1')}</li>
					<li class="text-lg">{$t('solar.section6feature2')}</li>
					<li class="text-lg">{$t('solar.section6feature3')}</li>
					<li class="text-lg">{$t('solar.section6feature4')}</li>
					<li class="text-lg">{$t('solar.section6feature5')}</li>
				</ul>
			</div>
			<div
				class="flex flex-col gap-4 bg-white shadow px-4 sm:px-8 md:px-14 py-8 border border-border"
			>
				<div class="flex gap-2 pb-4 text-2xl text-secondary font-bold">
					<Fa size="1.3x" icon={faArrowUpLong} class="text-primary" />{$t('shared.benefits')}
				</div>
				<ul class="flex flex-col gap-1 list-disc pl-4">
					<li class="text-lg">{$t('solar.section6benefit1')}</li>
					<li class="text-lg">{$t('solar.section6benefit2')}</li>
					<li class="text-lg">{$t('solar.section6benefit3')}</li>
					<li class="text-lg">{$t('solar.section6benefit4')}</li>
				</ul>
			</div>
		</div>
	</div>
</div>
<div class="flex flex-col gap-12 py-12" id="drone">
	<div class="flex flex-col lg:flex-row gap-6 justify-between px-12 md:px-24 lg:px-40">
		<div class="flex flex-col gap-2 pb-6 lg:w-1/2">
			<h3 class="pb-4 text-2xl font-bold">{$t('solar.header')}</h3>
			<div class="text-third text-3xl pb-2 font-bold">{$t('solar.section7Header')}</div>
			<div class="text-third text-xl pb-2 font-bold">
				{$t('solar.section7Subheader')}
			</div>
			<div class="text-xl">
				{$t('solar.section7Content')}
			</div>
			<div class="flex mt-6">
				<img
					class="hidden sm:flex self-center"
					src="/solutions/solarsection7.png"
					alt="windheader"
				/>
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
				<ul class="flex flex-col gap-1 list-disc pl-4">
					<li class="text-lg">{$t('solar.section7feature1')}</li>
					<li class="text-lg">{$t('solar.section7feature2')}</li>
					<li class="text-lg">{$t('solar.section7feature3')}</li>
					<li class="text-lg">{$t('solar.section7feature4')}</li>
					<li class="text-lg">{$t('solar.section7feature5')}</li>
				</ul>
			</div>
			<div
				class="flex flex-col gap-4 bg-white shadow px-4 sm:px-8 md:px-14 py-8 border border-border"
			>
				<div class="flex gap-2 pb-4 text-2xl text-secondary font-bold">
					<Fa size="1.3x" icon={faArrowUpLong} class="text-primary" />{$t('shared.benefits')}
				</div>
				<ul class="flex flex-col gap-1 list-disc pl-4">
					<li class="text-lg">{$t('solar.section7benefit1')}</li>
					<li class="text-lg">{$t('solar.section7benefit2')}</li>
					<li class="text-lg">{$t('solar.section7benefit3')}</li>
				</ul>
			</div>
		</div>
	</div>
</div>
<div class="flex flex-col gap-12 py-12 bg-gray" id="phone">
	<div class="flex flex-col lg:flex-row gap-6 justify-between px-12 md:px-24 lg:px-40">
		<div class="flex flex-col lg:flex-row pb-6 lg:w-1/2">
			<div class="flex w-full lg:w-2/6 self-start">
				<img
					class="hidden sm:flex self-center"
					src="/solutions/solarsection8.png"
					alt="windheader"
				/>
			</div>
			<div class="flex flex-col gap-2 w-full lg:w-4/6">
				<h3 class="pb-4 text-2xl font-bold">{$t('solar.header')}</h3>
				<div class="text-third text-3xl pb-2 font-bold">{$t('solar.section8Header')}</div>
				<div class="text-third text-xl pb-2 font-bold">
					{$t('solar.section8Subheader')}
				</div>
				<div class="text-xl">
					{$t('solar.section8Content')}
				</div>
				<a
					href="#footerForm"
					on:click={smoothScroll}
					class="mt-4 px-4 py-2 rounded-full self-start border-2 border-primary text-primary text-lg hover:text-white hover:bg-primary transition-all duration-300"
					>{$t('shared.contactUs')}
				</a>
			</div>
		</div>
		<div class="flex flex-col gap-6 lg:w-2/4">
			<div
				class="flex flex-col gap-4 bg-white shadow px-4 sm:px-8 md:px-14 py-8 border border-border"
			>
				<div class="flex gap-2 pb-4 text-2xl text-secondary font-bold">
					<Fa size="1.3x" icon={faArrowUpLong} class="text-primary" />{$t('shared.features1')}
				</div>
				<ul class="flex flex-col gap-1 list-disc pl-4">
					<li class="text-lg">{$t('solar.section8feature1')}</li>
					<li class="text-lg">{$t('solar.section8feature2')}</li>
					<li class="text-lg">{$t('solar.section8feature3')}</li>
					<li class="text-lg">{$t('solar.section8feature4')}</li>
				</ul>
			</div>
			<div
				class="flex flex-col gap-4 bg-white shadow px-4 sm:px-8 md:px-14 py-8 border border-border"
			>
				<div class="flex gap-2 pb-4 text-2xl text-secondary font-bold">
					<Fa size="1.3x" icon={faArrowUpLong} class="text-primary" />{$t('shared.benefits')}
				</div>
				<ul class="flex flex-col gap-1 list-disc pl-4">
					<li class="text-lg">{$t('solar.section8benefit1')}</li>
					<li class="text-lg">{$t('solar.section8benefit2')}</li>
					<li class="text-lg">{$t('solar.section8benefit3')}</li>
					<li class="text-lg">{$t('solar.section8benefit4')}</li>
				</ul>
			</div>
		</div>
	</div>
</div>
