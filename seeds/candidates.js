
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('candidates').del()
    .then(function () {
      // Inserts seed entries
      return knex('candidates').insert([
        {id: 1, role_seeking: 'Civil Engineer', current_role: 'Junior Civil Engineer', years_exp: 2, location: 'Hamilton', location_seeking: 'Nationwide', qualifications: 'BEng', work_rights: 'NZ Citizen'},
        {id: 2, role_seeking: 'Surveyor', current_role: 'Junior Surveyor', years_exp: 1, location: 'Auckland', location_seeking: 'Nationwide', qualifications: 'BEng', work_rights: 'NZ Resident'},
        {id: 3, role_seeking: 'Geotechnical Engineer', current_role: 'Junior Geotechnical Engineer', years_exp: 3, location: 'Wellington', location_seeking: 'Nationwide', qualifications: 'BEng', work_rights: 'NZ Permanent Resident'},
      
      ]);
    });
};
