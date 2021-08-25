const fakeAuthData = require("./00-users.json");

exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE users RESTART IDENTITY CASCADE")
    .then(function () {
      // Inserts seed entries
      return knex("users").insert(fakeAuthData);
    });
};
