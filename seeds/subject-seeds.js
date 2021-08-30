const sequelize = require("../config/connection");
const { Subject } = require("../models");

const subjectdata = [
  {
    name: "HTML",
    instructor_id: "1",
  },

  {
    name: "CSS",
    instructor_id: "2",
  },

  {
    name: "JavaScript",
    instructor_id: "3",
  },
];

const seedSubject = () =>
  Subject.bulkCreate(subjectdata, { individualHooks: true });

module.exports = seedSubject;
//placeholder seed file.
