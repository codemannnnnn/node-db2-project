exports.seed = function (knex) {
  return knex("cars")
    .truncate() // removes all rows from the table and reset ids back to 1
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert(generateData());
    });
};

function generateData() {
  return [
    {
      VIN: "1",
      Make: "Ford",
      Model: "Mustang",
      Mileage: "123",
      Transmission: "Manual",
      Title: "Clean",
    },
    {
      VIN: "2",
      Make: "Toyota",
      Model: "Tundra",
      Mileage: "1233",
      Transmission: "Auto",
      Title: "Clean",
    },
    {
      VIN: "3",
      Make: "Honda",
      Model: "Civic",
      Mileage: "12344",
      Transmission: "Manual",
      Title: "Clean",
    },
  ];
}
