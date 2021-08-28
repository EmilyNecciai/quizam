const sequelize = require('../config/connection');
const { Instructor, Question} = require('../models');

const instructordata = [
  {
    name: 'Emily Necciai Mayeski',
    email: 'Emily0@quizam.ca',
    password: 'password0123',
    subject_id: 3
  },

  {
    name: 'Baiyang Qi ',
    email: 'Baiyang0@gwu.ca',
    password: 'password1234',
    subject_id: 3
  },

  {
    name: 'Shane Crisostomo',
    email: 'Shane0@usc.ca',
    password: 'password2345',
    subject_id: 2
  },

  {
    name: 'Gaye Proctor ',
    email: 'Gaye0@inschool2.ca',
    password: 'password3456',
    subject_id: 1
  },


  {...}
// Test
];

const seedInstructors = () => User.bulkCreate(instructordata , {individualHooks: true});

module.exports = seedInstructors;