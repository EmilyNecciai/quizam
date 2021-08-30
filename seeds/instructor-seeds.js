const sequelize = require("../config/connection");
const { Instructor } = require("../models");

const instructordata = [
  {
    name: "Baiyang Qi",
    email: "Baiyang0@guizam.ca",
    password: "password02",
  },
  {
    name: "Shane Crisostomo",
    email: "Shane0@quizam.ca",
    password: "password03",
  },
  {
    name: "Gaye Proctor",
    email: "Gaye0@guizam.ca",
    password: "password04",
  },
];

const seedInstructor = () =>
  Instructor.bulkCreate(instructordata, { individualHooks: true });

module.exports = seedInstructor;
