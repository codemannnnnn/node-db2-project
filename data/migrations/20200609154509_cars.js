exports.up = function (knex) {
  return knex.schema.createTable("cars", (tbl) => {
    tbl.increments();
    tbl.string("VIN", 100).notNullable().unique();
    tbl.string("Make", 100).notNullable();
    tbl.string("Model", 100).notNullable();
    tbl.string("Mileage", 100).notNullable();
    tbl.string("Transmission", 100);
    tbl.string("Title", 100);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};

// The critical information for each car is the VIN, make, model, and mileage.
