<script lang="ts">
	import type { expense } from '$lib/server/db/schema';

	let { expenses }: { expenses: Array<typeof expense.$inferSelect> } = $props();
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
				<th>Name</th>
				<th>Value</th>
				<th>Date</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			{#each expenses as expense}
				<tr>
					<th>
						<label>
							<input type="checkbox" class="checkbox" />
						</label>
					</th>

					<td>
						<div class="text-sm opacity-50">{expense.name}</div>
					</td>

					<td>
						{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
							expense.value
						)}
					</td>

					<td>{new Date(expense.created_at).toLocaleDateString('pt-BR')}</td>

					<th>
						<button class="btn btn-ghost btn-xs">details</button>
					</th>
				</tr>
			{/each}
		</tbody>
		<!-- foot -->
		<tfoot>
			<tr>
				<th></th>
				<th>Name</th>
				<th>Value</th>
				<th>Date</th>
				<th></th>
			</tr>
		</tfoot>
	</table>
</div>
