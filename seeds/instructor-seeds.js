const sequelize = require("../config/connection");
const { Instructor } = require("../models");

const instructordata = [
  {
    name: "Baiyang Qi",
    email: "Baiyang0@guizam.ca",
    password: "password02",
    subject_id: "1",
  },
  {
    name: "Shane Crisostomo",
    email: "Shane0@quizam.ca",
    password: "password03",
    subject_id: "2",
  },
  {
    name: "Gaye Proctor",
    email: "Gaye0@guizam.ca",
    password: "password04",
    subject_id: "3",
  },
];

const seedInstructor = () =>
  Instructor.bulkCreate(instructordata, { individualHooks: true });

module.exports = seedInstructor;
