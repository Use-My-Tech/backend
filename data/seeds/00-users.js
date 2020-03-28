
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Users').del()
    .then(function () {
      // Inserts seed entries
      return knex('Users').insert([
        {id: 1, username: 'zak', password: '123', department: "owner"},
        {id: 2, username: 'wesh', password: '321', department: "renter"},
        {id: 3, username: 'admin', password: '442', department: "owner"}
      ]);
    });
};
