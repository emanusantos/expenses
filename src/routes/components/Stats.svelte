<script lang="ts">
	import { formatCurrency } from '$lib';

	let entradas = 2000;
	let despesas = 1000;

	let saldo = entradas - despesas;
</script>

<div class="stats w-full shadow">
	<div class="stat place-items-center">
		<div class="stat-title">entradas</div>
		<div class="stat-value text-success">{formatCurrency(entradas)}</div>
		<div class="stat-desc">de 1 de janeiro a 1 de fevereiro</div>
	</div>

	<div class="stat place-items-center">
		<div class="stat-title">despesas</div>
		<div class="stat-value text-error">{formatCurrency(despesas)}</div>
		<div class="stat-desc">↗︎ 40 (2%)</div>
	</div>

	<div class="stat place-items-center">
		<div class="stat-title">saldo</div>
		<div class="stat-value" class:text-error={saldo < 0} class:text-success={saldo > 0}>
			{formatCurrency(saldo)}
		</div>
		<div class="stat-desc">↘︎ 90 (14%)</div>
	</div>
</div>
