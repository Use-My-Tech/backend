
exports.up = function(knex) {
  return knex.schema
  .createTable("something", tbl => {
      tbl.increments()
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("something")
};
