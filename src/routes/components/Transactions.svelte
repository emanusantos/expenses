<script lang="ts">
	import { enhance } from '$app/forms';
	import { formatCurrency } from '$lib';
	import type { transaction } from '$lib/server/db/schema';

	let { transactions }: { transactions: Array<typeof transaction.$inferSelect> } = $props();
</script>

<div class="overflow-x-auto">
	<table class="table">
		<thead>
			<tr>
				<th>
					<label>
						<input type="checkbox" class="checkbox" />
					</label>
				</th>
				<th>nome</th>
				<th>valor</th>
				<th>data</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			{#each transactions as transaction}
				<tr>
					<th>
						<label>
							<input type="checkbox" class="checkbox" />
						</label>
					</th>

					<td>
						<div class="text-sm opacity-50">{transaction.name}</div>
					</td>

					<td class:text-error={transaction.expense} class:text-success={!transaction.expense}>
						{formatCurrency(transaction.value)}
					</td>

					<td>{new Date(transaction.created_at).toLocaleDateString('pt-BR')}</td>

					<th>
						<div class="flex gap-4">
							<button class="btn btn-ghost btn-xs">detalhes</button>

							<form method="POST" action={`?/delete`} use:enhance>
								<input type="hidden" name="id" value={transaction.id} />
								<button class="btn btn-error btn-xs">remover</button>
							</form>
						</div>
					</th>
				</tr>
			{/each}
		</tbody>

		<tfoot>
			<tr>
				<th></th>
				<th>nome</th>
				<th>valor</th>
				<th>data</th>
				<th></th>
			</tr>
		</tfoot>
	</table>
</div>
