import { db } from '$lib/server/db';
import { expense } from '$lib/server/db/schema';
import { fail } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

export async function load() {
	const expenses = await db.select().from(expense);

	return {
		expenses
	};
}

export const actions = {
	create: async ({ request }) => {
		const data = await request.formData();

		const name = data.get('name');
		const value = data.get('value');

		if (!name || !value || typeof name !== 'string' || typeof value !== 'string')
			return fail(400, {
				error: 'requisição inválida.'
			});

		const numericValue = parseFloat(value.replace(',', '.'));

		if (isNaN(numericValue))
			return fail(400, {
				error: 'valor inválido.'
			});

		await db.insert(expense).values({ name, value: numericValue });

		return {
			success: true
		};
	},
	delete: async ({ request }) => {
		const data = await request.formData();

		const id = data.get('id');

		if (!id || typeof id !== 'string') return fail(400);

		const numericId = parseInt(id);

		await db.delete(expense).where(eq(expense.id, numericId));
	}
};
