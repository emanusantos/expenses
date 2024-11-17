<script lang="ts">
	import { formatCurrency } from '$lib';

	let { gains, expenses }: { gains: number; expenses: number } = $props();

	let balance = $derived(gains - expenses);
</script>

<div class="stats w-full shadow">
	<div class="stat place-items-center">
		<div class="stat-title">entradas</div>
		<div class="stat-value text-success">{formatCurrency(gains)}</div>
		<div class="stat-desc">de 1 de janeiro a 1 de fevereiro</div>
	</div>

	<div class="stat place-items-center">
		<div class="stat-title">despesas</div>
		<div class="stat-value text-error">{formatCurrency(expenses)}</div>
		<div class="stat-desc">↗︎ 40 (2%)</div>
	</div>

	<div class="stat place-items-center">
		<div class="stat-title">saldo</div>
		<div class="stat-value" class:text-error={balance < 0} class:text-success={balance > 0}>
			{formatCurrency(balance)}
		</div>
		<div class="stat-desc">↘︎ 90 (14%)</div>
	</div>
</div>
