import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core';

export const transaction = sqliteTable('transaction', {
	id: integer('id').primaryKey(),
	created_at: integer('created_at', { mode: 'timestamp' }).default(new Date()).notNull(),
	updated_at: integer('updated_at', { mode: 'timestamp' }).default(new Date()).notNull(),
	name: text('name').notNull(),
	value: real('value').notNull(),
	expense: integer('expense', { mode: 'boolean' }).default(true).notNull()
});
