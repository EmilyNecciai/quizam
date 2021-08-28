const sequelize = require('../config/connection');
const { Question, Subject} = require('../models');

const questionsdata = [
    // HTML id = 1
    // CSS id = 2
    // JS = 3


    // HTML QUIZ
  {
    id: 'HTML001'
    title: 'What does HTML stand for?',
    choiceA: 'Hyperlinks and Text Markup Language',
    choiceB: 'Home Tool Markup Language',
    choiceC: 'Hyper Text Markup Language',
    choiceD: null,
    correct_answer: 'ChoiceC',
    subject_id: 1
  },


  {
    id: 'HTML002'
    title: 'Choose the correct HTML element for the largest heading:',
    choiceA: '<h6>',
    choiceB: '<head>',
    choiceC: '<heading>',
    choiceD: '<h1>'
    correct_answer: 'ChoiceD',
    subject_id: 1 
  },

  {
    id: 'HTML003',
    title: 'What is the correct HTML for adding a background color?',
    choiceA: '<body style="background-color:yellow;">',
    choiceB: '<background>yellow</background>',
    choiceC: '<body bg="yellow">',
    choiceD: null,
    correct_answer: 'ChoiceA'
  },

// CSS QUIZ



// Test
];

const seedQuestions = () => User.bulkCreate(questionsdata , {individualHooks: true});

module.exports = seedQuestions;//