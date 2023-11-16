<script>
	import '../app.postcss';
	import Footer from '../lib/components/footer/footer.svelte';
	import FooterForm from '../lib/components/footer/footerForm.svelte';
	import Navigation from '../lib/components/header/navigation.svelte';
</script>

<Navigation />
<slot />
<FooterForm />
<Footer />
