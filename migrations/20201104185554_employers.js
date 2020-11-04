
exports.up = function(knex) {
  return knex.schema.createTable('employers', (table) => {
      table.increments('id').primary()
      table.string('company_name')
      table.string('company_size')
      table.string('company_expertise')
      table.string('company_location')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('employers')
};
