<script lang="ts">
	import { enhance } from '$app/forms';
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
				<th>nome</th>
				<th>valor</th>
				<th>data</th>
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
						<div class="flex gap-4">
							<button class="btn btn-ghost btn-xs">detalhes</button>

							<form method="POST" action={`?/delete`} use:enhance>
								<input type="hidden" name="id" value={expense.id} />
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
