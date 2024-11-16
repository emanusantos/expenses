<script lang="ts">
	function handleClickNewExpense() {
		const newExpenseModal = document.getElementById('new-expense-modal');

		if (!newExpenseModal) return;

		const modal = newExpenseModal as HTMLElement & { showModal(): void };

		modal.showModal();
	}
</script>

<div class="navbar bg-base-100">
	<div class="flex-none">
		<button class="btn btn-square btn-ghost" aria-labelledby="drawer-trigger">
			<svg
				id="drawer-trigger"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block h-5 w-5 stroke-current"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				></path>
			</svg>
		</button>
	</div>
	<div class="flex-1">
		<a class="btn btn-ghost text-xl" href="/">Expenses</a>
	</div>

	<button class="btn btn-square btn-ghost mr-4" onclick={handleClickNewExpense}>New +</button>
</div>
