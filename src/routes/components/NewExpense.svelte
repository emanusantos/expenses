<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { dismissNewExpenseModal } from '$lib';

	let value = $state('');

	let form = $derived($page.form);

	$effect(() => {
		if (form?.success) dismissNewExpenseModal();
	});

	function handleInput(
		event: Event & {
			currentTarget: EventTarget & HTMLInputElement;
		}
	) {
		const v = (event.target as HTMLInputElement).value;

		value = v.replace(/[a-zA-Z]+/g, '');
	}
</script>

<dialog id="new-expense-modal" class="modal">
	<div class="modal-box">
		<h3 class="mb-4 text-lg font-bold">nova despesa</h3>

		<form method="POST" action="?/create" class="flex flex-col gap-4" id="main" use:enhance>
			<label class="form-control w-full">
				<div class="label">
					<span class="label-text">título</span>
				</div>
				<input
					type="text"
					placeholder="um título para a despesa"
					class="input input-bordered w-full"
					name="name"
					required
				/>
			</label>

			<label class="form-control w-full">
				<div class="label">
					<span class="label-text">valor</span>
				</div>
				<input
					type="text"
					placeholder="o valor da despesa"
					class="input input-bordered w-full"
					name="value"
					bind:value
					oninput={handleInput}
					required
				/>
			</label>
		</form>

		{#if form?.error}
			<p class="mt-2 text-error">{form?.error}</p>
		{/if}

		<div class="modal-action">
			<form id="dialog-form" method="dialog">
				<button class="btn btn-ghost">cancelar</button>
			</form>

			<button class="btn" form="main">criar</button>
		</div>
	</div>
</dialog>
