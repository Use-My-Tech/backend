exports.up = function(knex) {
  return knex.schema
    .createTable("Users", tbl => {
      tbl.increments();
      tbl
        .string("username", 20)
        .unique()
        .notNullable();
      tbl.string("password", 26).notNullable();
      tbl.string("department", 6).notNullable();
    })
    .createTable("Items", tbl => {
      tbl.increments();
      tbl.string("item_name", 30).notNullable();
      tbl.string("description", 144).notNullable();
      tbl
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("Users")
        .notNullable();
      tbl.boolean("availability").notNullable();
      tbl.integer("daily_rate").notNullable();
      tbl.string("condition", 20).notNullable();
      tbl.string("location", 30).notNullable();
      tbl.string("imgs");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("Users").dropTableIfExists("Items");
};
