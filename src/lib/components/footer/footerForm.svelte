<script>
	import { t } from '$lib/translations';
	import * as yup from 'yup';
	import { createForm } from 'felte';
	import { validator } from '@felte/validator-yup';
	import Message from '$lib/components/message.svelte';
	import { onMount } from 'svelte';
	import Fa from 'svelte-fa';
	import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

	const phoneRegex =
		'/^((+[1-9]{1,4}[ -]?)|(([0-9]{2,3})[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/';
	let fields = {
		name: '',
		surname: '',
		company: '',
		role: '',
		phone: '',
		email: '',
		msg: '',
		terms: false
	};

	let schema = yup.object().shape({
		name: yup.string().required($t('footer.required')).label('Name'),
		surname: yup.string().required($t('footer.required')).label('Surname'),
		company: yup.string().required($t('footer.required')).label('Company'),
		role: yup.string().label('Role'),
		phone: yup.string().required($t('footer.required')).label('Phone'),
		email: yup
			.string()
			.required($t('footer.required'))
			.email($t('footer.emailError'))
			.label('Email address'),
		msg: yup.string().max(300).label('Message'),
		terms: yup.boolean().default(false).oneOf([true], $t('footer.required'))
	});

	onMount(() => {
		setFields(schema.cast());
	});
	const { form, errors, setData, data, setFields } = createForm({
		extend: validator({ schema }),
		onSubmit: (values) => {
			console.log(values);
		}
	});
</script>

<div
	id="footerForm"
	class="flex flex-col w-full gap-10 md:flex-row px-12 sm:px-24 md:px-43 xl:px-64 py-10 text-white"
>
	<div class="bg-primary w-full p-12 rounded-xl flex flex-col md:flex-row gap-4">
		<div class="w-full md:w-2/5">
			<Fa size="8x" icon={faPenToSquare} class="text-white pb-4" />
			<h3 class="pb-4 text-3xl !text-white">{$t('footer.header1')}</h3>
			<div class="text-xl">
				{$t('footer.description')}
			</div>
		</div>
		<form use:form on:submit|preventDefault class="w-full md:w-3/5 gap-4 flex flex-col text-black">
			<h1 class="w-full text-white text-xl">{$t('footer.header2')}</h1>
			<div class="flex flex-row gap-2 w-full">
				<input
					class="px-4 py-2 w-1/2 rounded-lg {$errors['name'] && 'border-red-500'}"
					type="input"
					placeholder={$t('footer.placeholderName')}
					name="name"
				/>
				<input
					class="px-4 py-2 w-1/2 rounded-lg {$errors['surname'] && 'border-red-500'}"
					type="text"
					placeholder={$t('footer.placeholderSurname')}
					name="surname"
				/>
			</div>
			<div class="flex flex-row gap-2 -my-2 w-full">
				<div class="w-1/2 -my-1">
					{#if $errors['name']}
						<Message title={$errors['name']} />
					{/if}
				</div>
				<div class="w-1/2 -my-1">
					{#if $errors['surname']}
						<Message title={$errors['surname']} />
					{/if}
				</div>
			</div>
			<div class="flex flex-row gap-2 w-full">
				<input
					class="px-4 py-2 w-1/2 rounded-lg {$errors['company'] && 'border-red-500'}"
					type="text"
					placeholder={$t('footer.placeholderCompany')}
					name="company"
				/>
				<input
					class="px-4 py-2 w-1/2 rounded-lg {$errors['role'] && 'border-red-500'}"
					type="text"
					placeholder={$t('footer.placeholderRole')}
					name="role"
				/>
			</div>
			<div class="flex flex-row gap-2 -my-2 w-full">
				<div class="w-1/2 -my-1">
					{#if $errors['company']}
						<Message title={$errors['company']} />
					{/if}
				</div>
				<div class="w-1/2 -my-1">
					{#if $errors['role']}
						<Message title={$errors['role']} />
					{/if}
				</div>
			</div>
			<div class="flex flex-row gap-2 w-full">
				<input
					class="px-4 py-2 w-1/2 rounded-lg {$errors['phone'] && 'border-red-500'}"
					type="phone"
					placeholder={$t('footer.placeholderPhone')}
					name="phone"
				/>
				<input
					class="px-4 py-2 w-1/2 rounded-lg {$errors['email'] && 'border-red-500'}"
					type="email"
					placeholder={$t('footer.placeholderEmail')}
					name="email"
				/>
			</div>
			<div class="flex flex-row gap-2 -my-2 w-full">
				<div class="w-1/2 -my-1">
					{#if $errors['phone']}
						<Message title={$errors['phone']} />
					{/if}
				</div>
				<div class="w-1/2 -my-1">
					{#if $errors['email']}
						<Message title={$errors['email']} />
					{/if}
				</div>
			</div>
			<div class="flex w-full">
				<input
					class="px-4 py-2 w-full rounded-lg {$errors['msg'] && 'border-red-500'}"
					type="textfield"
					placeholder={$t('footer.placeholderMsg')}
					name="msg"
				/>
			</div>
			<div class="flex flex-row gap-2 -my-2 w-full">
				{#if $errors['msg']}
					<Message title={$errors['msg']} />
				{/if}
			</div>
			<div class="flex gap-2 text-white {$errors['terms'] && 'border-red-500'}">
				<input type="checkbox" bind:checked={fields.terms} name="terms" />
				<div>{$t('footer.terms')}</div>
			</div>
			<div class="flex flex-row gap-2 -my-4 pb-2 w-full">
				{#if $errors['terms']}
					<Message title={$errors['terms']} />
				{/if}
			</div>
			<div>
				<button type="submit" class="bg-cyan px-4 py-2 rounded-lg text-white text-2xl font-bold"
					>{$t('footer.submit')}</button
				>
			</div>
		</form>
	</div>
</div>

<style>
	.invalid {
		@apply border border-2 border-red-600;
	}
</style>
