exports.up = function (knex) {
  return knex.schema.createTable("cars", (tbl) => {
    tbl.increments();
    tbl.string("VIN", 100).notNullable().unique();
    tbl.string("MAKE", 100).notNullable();
    tbl.string("MODEL", 100).notNullable();
    tbl.string("MILEAGE", 100).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};

// The critical information for each car is the VIN, make, model, and mileage.
