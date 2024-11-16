<script>
	import { Expenses, NewExpense, NoExpenses } from './components';

	let { data } = $props();

	$inspect(data);
</script>

<main class="min-h-[90dvh]">
	{#if !data.expenses.length}
		<NoExpenses />
	{:else}
		<Expenses expenses={data.expenses} />
	{/if}

	<NewExpense />
</main>
