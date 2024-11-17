export function openNewExpenseModal() {
	const newExpenseModal = document.getElementById('new-expense-modal');

	if (!newExpenseModal) return;

	const modal = newExpenseModal as HTMLElement & { showModal(): void };

	modal.showModal();
}

export function dismissNewExpenseModal() {
	const modal = document.getElementById('dialog-form') as HTMLFormElement;

	if (!modal) return;

	modal.submit();
}
