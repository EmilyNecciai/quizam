const sequelize = require('../config/connection');
const { subject, Questions } = require('../models');

const subjectdata = [
  {
    id: 'subject??'
    subjectname: 'HTML',
    question_id: 1??
  },


  {
    id: 'subject??'
    subjectname: 'CSS',
    question_id: 2??
  },

  {
    id: 'subject??'
    subjectname: 'JavaScript',
    question_id: 3??
  },

{...}
// Test
];

const seedInstructors = () => User.bulkCreate(instructordata , {individualHooks: true});

module.exports = seedInstructors;/placeholder seed file.