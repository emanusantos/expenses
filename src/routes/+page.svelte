<script>
	import { Transactions, NewTransaction, NoTransactions, Stats } from './components';

	let { data } = $props();
</script>

<main class="min-h-[90dvh]">
	{#if !data.transactions.length}
		<NoTransactions />
	{:else}
		<div class="flex flex-col gap-10">
			<Stats gains={data.gains} expenses={data.expenses} />

			<Transactions transactions={data.transactions} />
		</div>
	{/if}

	<NewTransaction />
</main>
