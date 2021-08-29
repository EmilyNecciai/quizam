const sequelize = require('../config/connection');
const { Instructor, Question} = require('../models');

const instructordata = [
  {
    name: 'Emily Necciai Mayeski',
    email: 'Emily0@quizam.ca',
    password: 'password01',
    subject_id: 
  },

  {
    name: 'Baiyang Qi ',
    email: 'Baiyang0@guizam.ca',
    password: 'password02',
    subject_id: 
  },

  {
    name: 'Shane Crisostomo',
    email: 'Shane0@quizam.ca',
    password: 'password03',
    subject_id: 
  },

  {
    name: 'Gaye Proctor ',
    email: 'Gaye0@guizam.ca',
    password: 'password04',
    subject_id: 
  },


  {...}
// Test
];

const seedInstructors = () => User.bulkCreate(instructordata , {individualHooks: true});

module.exports = seedInstructors;