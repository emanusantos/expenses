<dialog id="new-expense-modal" class="modal">
	<div class="modal-box">
		<h3 class="mb-4 text-lg font-bold">New Transaction</h3>

		<form method="POST" class="flex flex-col gap-4" id="main">
			<label class="form-control w-full">
				<div class="label">
					<span class="label-text">Name</span>
				</div>
				<input
					type="text"
					placeholder="Expense name"
					class="input input-bordered w-full"
					name="name"
				/>
			</label>

			<label class="form-control w-full">
				<div class="label">
					<span class="label-text">Value</span>
				</div>
				<input
					type="text"
					placeholder="Expense value"
					class="input input-bordered w-full"
					name="value"
				/>
			</label>
		</form>

		<div class="modal-action">
			<form method="dialog">
				<!-- if there is a button in form, it will close the modal -->
				<button class="btn btn-ghost">Cancel</button>
			</form>

			<button class="btn" form="main">Create</button>
		</div>
	</div>
</dialog>
