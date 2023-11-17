<script>
	import { t } from '$lib/translations';
	import { smoothScroll } from '$lib';
	import Fa from 'svelte-fa';
	import {
		faSquarePollVertical,
		faScrewdriverWrench,
		faGlobe,
		faChartLine
	} from '@fortawesome/free-solid-svg-icons';
	import Typewriter from 'svelte-typewriter';
</script>

<div class="flex flex-col">
	<div class="relative">
		<div class="absolute h-full w-full flex bg-primary/50" />
		<div
			class="absolute flex flex-row p-8 gap-6 h-full w-full text-white justify-center items-center xl:h-auto xl:w-auto xl:top-1/2 xl:left-1/2 xl:-translate-y-1/2 xl:-translate-x-1/2"
		>
			<img class="hidden sm:flex self-center" id="asset-image" src="/logo-energynet-small.png" />
			<div>
				<h3 class="!text-6xl !text-white">{$t('get-what-you-need.header')}</h3>
				<Typewriter mode="loop" interval={100}>
					<div class="text-3xl pt-2 md:pt-6">
						{$t('get-what-you-need.assetManagers')}
					</div>
					<div class="text-3xl pt-2 md:pt-6">
						{$t('get-what-you-need.O&Ms')}
					</div>
					<div class="text-3xl pt-2 md:pt-6">
						{$t('get-what-you-need.DNOs')}
					</div>
					<div class="text-3xl pt-2 md:pt-6">
						{$t('get-what-you-need.energyTraders')}
					</div>
				</Typewriter>
			</div>
		</div>
		<div class="landing-image">
			<img id="landing-image" src="/main.png" />
		</div>
	</div>
</div>
<div class="flex gap-12 px-12 sm:px-24 md:px-43 xl:px-64 py-20">
	<div class="w-full lg:w-2/3 xl:w-1/2 flex flex-col mr-6">
		<h3 class="text-3xl pb-6 text-primary">{$t('get-what-you-need.weMeet')}</h3>
		<div class="text-xl text-secondary font-medium leading-loose">
			{$t('get-what-you-need.weMeetDesc')}
		</div>
	</div>
	<div class="hidden lg:w-1/3 xl:w-1/2 lg:flex flex-wrap gap-1 justify-center">
		<a
			href="#assetManager"
			on:click={smoothScroll}
			class="flex gap-2 font-semibold text-xl text-secondary hover:text-primary whitespace-nowrap shadow-sm my-2.5 mx-5 py-5 px-7 border border-border hover:border-primary bg-white rounded-xl border-radius self-center transition-all duration-300"
		>
			<Fa size="1.5x" class="text-primary" icon={faSquarePollVertical} />{$t(
				'get-what-you-need.assetManagers'
			)}
		</a>
		<a
			href="#O&M"
			on:click={smoothScroll}
			class="flex gap-2 font-semibold text-xl text-secondary hover:text-primary whitespace-nowrap shadow-sm my-2.5 mx-5 py-5 px-7 border border-border hover:border-primary bg-white rounded-xl border-radius self-center transition-all duration-300"
		>
			<Fa size="1.5x" class="text-primary" icon={faScrewdriverWrench} />{$t(
				'get-what-you-need.O&Ms'
			)}
		</a>
		<a
			href="#DNO"
			on:click={smoothScroll}
			class="flex gap-2 font-semibold text-xl text-secondary hover:text-primary whitespace-nowrap shadow-sm my-2.5 mx-5 py-5 px-7 border border-border hover:border-primary bg-white rounded-xl border-radius self-center transition-all duration-300"
		>
			<Fa size="1.5x" class="text-primary" icon={faGlobe} />{$t('get-what-you-need.DNOshort')}
		</a>
		<a
			href="#energyTrader"
			on:click={smoothScroll}
			class="flex gap-2 font-semibold text-xl text-secondary hover:text-primary whitespace-nowrap shadow-sm my-2.5 mx-5 py-5 px-7 border border-border hover:border-primary bg-white rounded-xl border-radius self-center"
		>
			<Fa size="1.5x" class="text-primary" icon={faChartLine} />{$t(
				'get-what-you-need.energyTraders'
			)}
		</a>
	</div>
</div>
<div class="flex flex-col gap-12 py-12 bg-gray" id="assetManager">
	<div class="flex flex-col lg:flex-row gap-6 justify-between px-12 sm:px-24 md:px-43 xl:px-64">
		<div class="flex flex-col gap-2 pb-6 lg:w-1/2">
			<h4 class="text-third uppercase">{$t('get-what-you-need.areYouAn')}</h4>
			<h3 class="pb-8 text-3xl">{$t('get-what-you-need.assetManager')}?</h3>
			<div class="text-third text-xl pb-2 font-bold">{$t('get-what-you-need.ourSolutions')}</div>
			<div class="text-xl">✅{$t('get-what-you-need.asset1')}</div>
			<div class="text-xl">✅{$t('get-what-you-need.asset2')}</div>
			<div class="text-xl pb-6">✅{$t('get-what-you-need.asset3')}</div>
			<div class="text-link text-lg pl-5">{$t('get-what-you-need.learnMore')}</div>
			<a
				href="#footerForm"
				on:click={smoothScroll}
				class="uppercase text-white text-center whitespace-nowrap text-xl font-extrabold my-2.5 py-4 px-7 button-gradiant rounded-xl border-radius"
				>{$t('get-what-you-need.contactNow')}</a
			>
		</div>
		<img
			class="hidden sm:flex self-center"
			id="asset-image"
			src="/get-what-you-need/asset_manager_circle.png"
		/>
	</div>
	<div class="flex px-12 md:px-24 lg:px-40">
		<div class="bg-white shadow lg:w-1/2 px-4 sm:px-8 md:px-14 py-10 border border-border">
			<div class="pb-4 text-xl text-secondary font-bold">{$t('get-what-you-need.solutions')}</div>
			<ul class="text-link list-disc pl-4">
				<li class="text-xl">
					{$t('get-what-you-need.asset4')}
				</li>
				<li class="text-xl">
					{$t('get-what-you-need.asset5')}
				</li>
				<li class="text-xl">
					{$t('get-what-you-need.asset6')}
				</li>
			</ul>
		</div>
	</div>
</div>
<div class="flex flex-col gap-12 py-12" id="O&M">
	<div class="flex flex-col lg:flex-row gap-6 justify-between px-12 sm:px-24 md:px-43 xl:px-64">
		<div class="flex flex-col gap-2 pb-6 lg:w-1/2">
			<h4 class="text-third uppercase">{$t('get-what-you-need.areYouAn')}</h4>
			<h3 class="pb-8 text-3xl">{$t('get-what-you-need.O&M')}?</h3>
			<div class="text-third text-xl pb-2 font-bold">{$t('get-what-you-need.ourSolutions')}</div>
			<div class="text-xl">✅{$t('get-what-you-need.O&M1')}</div>
			<div class="text-xl">✅{$t('get-what-you-need.O&M2')}</div>
			<div class="text-xl pb-6">✅{$t('get-what-you-need.O&M3')}</div>
			<div class="text-link text-lg pl-5">{$t('get-what-you-need.learnMore')}</div>
			<a
				href="#footerForm"
				on:click={smoothScroll}
				class="uppercase text-white text-center whitespace-nowrap text-xl font-extrabold my-2.5 py-4 px-7 button-gradiant rounded-xl border-radius"
				>{$t('get-what-you-need.contactNow')}</a
			>
		</div>
		<img
			class="hidden sm:flex self-center"
			id="om-image"
			src="/get-what-you-need/om_manager_circle.png"
		/>
	</div>
	<div class="flex px-12 md:px-24 lg:px-40">
		<div class="bg-white shadow lg:w-1/2 px-4 sm:px-8 md:px-14 py-10 border border-border">
			<div class="pb-4 text-xl text-secondary font-bold">{$t('get-what-you-need.solutions')}</div>
			<ul class="text-link list-disc pl-4">
				<li class="text-xl">
					{$t('get-what-you-need.O&M4')}
				</li>
				<li class="text-xl">
					{$t('get-what-you-need.O&M5')}
				</li>
				<li class="text-xl">
					{$t('get-what-you-need.O&M6')}
				</li>
				<li class="text-xl">
					{$t('get-what-you-need.O&M7')}
				</li>
			</ul>
		</div>
	</div>
</div>
<div class="flex flex-col gap-12 py-12 bg-gray" id="DNO">
	<div class="flex flex-col lg:flex-row gap-6 justify-between px-12 sm:px-24 md:px-43 xl:px-64">
		<div class="flex flex-col gap-2 pb-6 lg:w-1/2">
			<h4 class="text-third uppercase">{$t('get-what-you-need.areYouAn')}</h4>
			<h3 class="pb-8 text-3xl">{$t('get-what-you-need.DNO')}?</h3>
			<div class="text-third text-xl pb-2 font-bold">{$t('get-what-you-need.ourSolutions')}</div>
			<div class="text-xl">✅{$t('get-what-you-need.DNO1')}</div>
			<div class="text-xl pb-6">✅{$t('get-what-you-need.DNO2')}</div>
			<div class="text-link text-lg pl-5">{$t('get-what-you-need.learnMore')}</div>
			<a
				href="#footerForm"
				on:click={smoothScroll}
				class="uppercase text-white text-center whitespace-nowrap text-xl font-extrabold my-2.5 py-4 px-7 button-gradiant rounded-xl border-radius"
				>{$t('get-what-you-need.contactNow')}</a
			>
		</div>
		<img
			class="hidden sm:flex self-center"
			id="dno-image"
			src="/get-what-you-need/dno_circle.png"
		/>
	</div>
	<div class="flex px-12 md:px-24 lg:px-40">
		<div class="bg-white shadow lg:w-1/2 px-4 sm:px-8 md:px-14 py-10 border border-border">
			<div class="pb-4 text-xl text-secondary font-bold">{$t('get-what-you-need.solutions')}</div>
			<ul class="text-link list-disc pl-4">
				<li class="text-xl">
					{$t('get-what-you-need.DNO3')}
				</li>
				<li class="text-xl">
					{$t('get-what-you-need.DNO4')}
				</li>
				<li class="text-xl">
					{$t('get-what-you-need.DNO5')}
				</li>
				<li class="text-xl">
					{$t('get-what-you-need.DNO6')}
				</li>
				<li class="text-xl">
					{$t('get-what-you-need.DNO7')}
				</li>
			</ul>
		</div>
	</div>
</div>
<div class="flex flex-col gap-12 py-12" id="energyTrader">
	<div class="flex flex-col lg:flex-row gap-6 justify-between px-12 sm:px-24 md:px-43 xl:px-64">
		<div class="flex flex-col gap-2 pb-6 lg:w-1/2">
			<h4 class="text-third uppercase">{$t('get-what-you-need.areYouAn')}</h4>
			<h3 class="pb-8 text-3xl">{$t('get-what-you-need.energyTrader')}?</h3>
			<div class="text-third text-xl pb-2 font-bold">{$t('get-what-you-need.ourSolutions')}</div>
			<div class="text-xl">✅{$t('get-what-you-need.energyTrader1')}</div>
			<div class="text-xl pb-6">✅{$t('get-what-you-need.energyTrader2')}</div>
			<div class="text-link text-lg pl-5">{$t('get-what-you-need.learnMore')}</div>
			<a
				href="#footerForm"
				on:click={smoothScroll}
				class="uppercase text-white text-center whitespace-nowrap text-xl font-extrabold my-2.5 py-4 px-7 button-gradiant rounded-xl border-radius"
				>{$t('get-what-you-need.contactNow')}</a
			>
		</div>
		<img
			class="hidden sm:flex self-center"
			id="energytrader-image"
			src="/get-what-you-need/energytrader_circle.png"
		/>
	</div>
	<div class="flex px-12 md:px-24 lg:px-40">
		<div class="bg-white shadow lg:w-1/2 px-4 sm:px-8 md:px-14 py-10 border border-border">
			<div class="pb-4 text-xl text-secondary font-bold">{$t('get-what-you-need.solutions')}</div>
			<ul class="text-link list-disc pl-4">
				<li class="text-xl">
					{$t('get-what-you-need.energyTrader3')}
				</li>
				<li class="text-xl">
					{$t('get-what-you-need.energyTrader4')}
				</li>
			</ul>
		</div>
	</div>
</div>

<style>
	.border-radius {
		border-radius: 300px 300px 300px 300px;
	}

	.button-gradiant {
		background-image: linear-gradient(270deg, #004684 0%, #2a81d3 100%);
	}
</style>
