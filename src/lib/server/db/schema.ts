import { sql } from 'drizzle-orm';
import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core';

export const expense = sqliteTable('expense', {
	id: integer('id').primaryKey(),
	created_at: integer('created_at', { mode: 'timestamp' }).default(new Date()).notNull(),
	updated_at: integer('updated_at', { mode: 'timestamp' }).default(new Date()).notNull(),
	name: text('name').notNull(),
	value: real('value').notNull()
});
