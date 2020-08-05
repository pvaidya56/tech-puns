
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          firstName: 'Priya',
          lastName: 'Vaidya',
          email: 'priya@gmail.com',
          password: 'test123'
        }
      ]);
    });
};
