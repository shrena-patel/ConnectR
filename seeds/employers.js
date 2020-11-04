
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('employers').del()
    .then(function () {
      // Inserts seed entries
      return knex('employers').insert([
        {id: 1, company_name: 'Woods', company_size: 'medium', company_expertise: 'Engineering', company_location: 'Auckland'},
        {id: 2, company_name: 'Fletcher', company_size: 'large', company_expertise: 'Construction', company_location: 'Nationwide'},
        {id: 3, company_name: 'Resonant', company_size: 'small', company_expertise: 'Engineering', company_location: 'Christchurch'}
      ]);
    });
};
