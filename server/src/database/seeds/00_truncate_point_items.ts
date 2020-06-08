import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('point_items').delete();
}
