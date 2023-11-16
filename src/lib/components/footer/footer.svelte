<script>
	import { t } from '$lib/translations';
	import Fa from 'svelte-fa';
	import { faFacebook, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
</script>

<div class="bg-primary flex flex-col items-center p-6 text-white">
	<div class="flex flex-row gap-16">
		<div>
			<div class="font-bold">{$t('footer.address')}</div>
			<div class="pl-2">гр. София 1680,<br /> ул. „Пирински проход“ № 55</div>
		</div>

		<div>
			<div class="font-bold">{$t('footer.telephone')}</div>
			<div class="pl-2">0888 832040</div>
			<div class="font-bold">{$t('footer.email')}</div>
			<div class="pl-2">info@energynet.bg</div>
		</div>
		<div class="flex flex-col gap-2 justify-center gap-2">
			<Fa size="2x" icon={faLinkedinIn} />
			<Fa size="2x" icon={faFacebook} />
			<Fa size="2x" icon={faInstagram} />
		</div>
	</div>
	<div class="flex text-center justify-center items-end gap-2 flex-col md:flex-row mt-6">
		<div class="order-2 md:order-1 self-center md:self-end">© Copyright 2023</div>
		<div class="flex justify-center items-center text-center gap-2 order-1">
			<img class="h-8" src="/logo-energynet.png" />
			<div class="whitespace-nowrap self-end">{$t('footer.company')}</div>
		</div>
	</div>
</div>
