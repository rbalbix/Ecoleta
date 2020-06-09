import Knex from 'knex';

export async function seed(knex: Knex) {
  // await knex('points').truncate();
  await knex.raw('TRUNCATE TABLE points CASCADE');
}
