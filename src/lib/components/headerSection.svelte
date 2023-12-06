<script>
	export let bgImgSrc = '/main.png';
	export let bgSecondImgSrc = false;
	export let bg;
	export let spacerStyle;
</script>

<div class="flex flex-col">
	<div class="relative">
		<div class="absolute h-screen w-full flex bg-primary/50" />
		<div
			class="absolute flex flex-row gap-6 h-full w-full text-white text-center justify-center items-center xl:h-auto xl:w-auto xl:top-1/3 xl:left-1/2 xl:-translate-y-1/2 xl:-translate-x-1/2"
		>
			<slot name="header" />
		</div>
		<div class="landing-image-2">
			<img id="landing-image-2" src={bgImgSrc} />
		</div>
	</div>
	{#if bgSecondImgSrc}
		<div class="h-8 {spacerStyle}" />
		<div class="flex justify-center p-10 second-image z-10">
			<img src={bgSecondImgSrc} />
		</div>
	{/if}
</div>

<style>
	.landing-image-2 {
		height: 100vh;
		overflow: hidden;
	}

	.landing-image-2 img {
		@apply h-full w-full object-cover;
	}

	.second-image {
		padding-top: 5%;
		margin-top: -30vw !important;
		width: 80%;
		max-width: 1080px;
		margin: auto;
	}
</style>
