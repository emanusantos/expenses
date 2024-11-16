import { db } from '$lib/server/db';
import { expense } from '$lib/server/db/schema';
import { error } from '@sveltejs/kit';

export async function load() {
	const expenses = await db.select().from(expense);

	return {
		expenses
	};
}

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const name = data.get('name');
		const value = data.get('value');

		if (!name || !value || typeof name !== 'string' || typeof value !== 'string')
			error(400, {
				message: 'Missing fields!'
			});

		const numericValue = parseInt(value);

		await db.insert(expense).values({ name, value: numericValue });
	}
};
