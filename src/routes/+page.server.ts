import { db } from '$lib/server/db';
import { transaction } from '$lib/server/db/schema';
import { fail } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

export async function load() {
	const transactions = await db.select().from(transaction);

	return {
		transactions
	};
}

export const actions = {
	create: async ({ request }) => {
		const data = await request.formData();

		const name = data.get('name') as string;
		const value = data.get('value') as string;
		const type = data.get('type') as string;

		if (![name, value, type].every((field) => !!field || typeof field === 'string'))
			return fail(400, {
				error: 'requisição inválida.'
			});

		const expense = type === 'expense';
		const numericValue = parseFloat(value.replace(',', '.'));

		if (isNaN(numericValue))
			return fail(400, {
				error: 'valor inválido.'
			});

		await db.insert(transaction).values({ name, value: numericValue, expense });

		return {
			success: true
		};
	},
	delete: async ({ request }) => {
		const data = await request.formData();

		const id = data.get('id');

		if (!id || typeof id !== 'string') return fail(400);

		const numericId = parseInt(id);

		await db.delete(transaction).where(eq(transaction.id, numericId));
	}
};
