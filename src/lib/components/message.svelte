<script>
	export let title;
	export let type = 'error';
	export let customClasses = '';
</script>

<div class="message message-{type} {customClasses}">{title}</div>

<style>
	.message {
		@apply text-center text-sm overflow-visible;
	}

	.message-error {
		@apply text-red-500;
	}

	.message-success {
		@apply text-green-500;
	}
</style>
