<script lang="ts">
	import { openNewExpenseModal } from '$lib';
</script>

<div role="alert" class="alert m-auto max-w-[50%] shadow-lg">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		class="h-6 w-6 shrink-0 stroke-info"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
		></path>
	</svg>
	<div>
		<h3 class="font-bold">nenhuma transação adicionada.</h3>
		<div class="text-xs">comece a adicionar suas transações para controlar seus gastos!</div>
	</div>

	<button class="btn btn-sm" onclick={openNewExpenseModal}>+ adicionar</button>
</div>
