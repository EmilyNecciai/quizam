const sequelize = require('../config/connection');
const { subject, Question } = require('../models');

const subjectdata = [
  {
    id: ''
    name: 'HTML',
    question_id: '',
    instructor_id: ''
  },


  {
    id: '',
    name: 'CSS',
    question_id:''
    instructor_id: ''
  },

  {
    id: ''
    name: 'JavaScript',
    question_id: '',
    instructor_id: ''
  },

{...}
// Test
];

const seedSubject = () => User.bulkCreate(subjectdata, {individualHooks: true});

module.exports = seedSubject;/placeholder seed file.