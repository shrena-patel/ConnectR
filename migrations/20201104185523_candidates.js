
exports.up = function(knex) {
  return knex.schema.createTable('candidates', (table) => {
      table.increments('id').primary()
      table.string('role_seeking')
      table.string('current_role')
      table.integer('years_exp')
      table.string('location')
      table.string('location_seeking')
      table.string('qualifications')
      table.string('work_rights')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('candidates')
};
