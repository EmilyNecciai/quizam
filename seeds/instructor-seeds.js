const sequelize = require('../config/connection');
const { Instructor, Questions } = require('../models');

const instructordata = [
  {
    name: 'alesmonde0',
    email: 'nwestnedge0@cbc.ca',
    password: 'password123',
    subject_id: 2
  },
{...}

];

const seedInstructors = () => User.bulkCreate(instructordata , {individualHooks: true});

module.exports = seedInstructors;