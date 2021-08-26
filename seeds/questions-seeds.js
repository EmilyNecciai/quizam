const sequelize = require('../config/connection');
const { Questions, Subject} = require('../models');

const questionsdata = [
  {
    id: 'Question ID??'
    title: 'What does HTML stand for?'
    <br>
    'A   Hyperlinks and Text Markup Language'
    'B   Home Tool Markup Language'
    'C   Hyper Text Markup Language',
    
    correct_answer: 'ChoiceC',
    
    choiceA: 'A   Hyperlinks and Text Markup Language',
    choiceB: 'B   Home Tool Markup Language',
    choiceC: 'C   Hyper Text Markup Language',
    choiceD: null,
    subject_id: (HTML Course)
  },


  {
    questions: 'Choose the correct HTML element for the largest heading.',
    subject_id: ?? (HTML)
  },

  {
    questions: 'What is the correct HTML for adding a background color?',
    subject_id: ?? (HTML)
  },

// Test
];

const seedQuestions = () => User.bulkCreate(questionsdata , {individualHooks: true});

module.exports = seedQuestions;//