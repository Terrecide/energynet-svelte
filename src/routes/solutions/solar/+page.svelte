<script>
	import HeaderSection from '$lib/components/headerSection.svelte';
	import { t } from '$lib/translations';
</script>

<HeaderSection bgSecondImgSrc="/solutions/hydroheader.png" spacerStyle="bg-hydro">
	<span class="flex flex-col items-center justify-center" slot="header">
		<img class="max-h-24 white-filter" src="/home/s-em.png" />
		<div class="pt-4 text-xl">Get the best from your data gathering</div>
	</span>
</HeaderSection>
<div
	class="flex flex-col md:flex-row justify-center items-center m-auto px-10 sm:px-24 md:px-43 xl:px-64 gap-12"
>
	<img class="max-h-24" src="/home/s-em.png" />
	<div>
		<h1 class="!text-secondary text-4xl mb-4 font-bold">Solar</h1>
		<div class="flex flex-col gap-6 text-base">
			<span class="font-bold">
				Get the best value from solar assets data during the whole life-cycle plants phases and any
				role you play.
			</span>

			<span>
				s-EM enables Asset Owners, Asset Managers, O&M Operators , EPC contractors to access to
				<span class="font-bold"
					>different kinds of information according to their specific needs.</span
				>
			</span>
		</div>
	</div>
</div>
