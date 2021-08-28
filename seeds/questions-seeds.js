const sequelize = require('../config/connection');
const { Question, Subject} = require('../models');

const questionsdata = [
    // HTML id = 1
    // CSS id = 2
    // JS = 3


    // HTML QUIZ
  {
    id: '',
    title: 'What does HTML stand for?',
    choiceA: 'Hyperlinks and Text Markup Language',
    choiceB: 'Home Tool Markup Language',
    choiceC: 'Hyper Text Markup Language',
    choiceD: null,
    correct_answer: 'choiceC',
    subject_id: 
  },


  {
    id: '',
    title: 'Choose the correct HTML element for the largest heading:',
    choiceA: '<h6>',
    choiceB: '<head>',
    choiceC: '<heading>',
    choiceD: '<h1>',
    correct_answer: 'choiceD',
    subject_id:  
  },

  {
    id: '',
    title: 'What is the correct HTML for adding a background color?',
    choiceA: '<body style="background-color:yellow;">',
    choiceB: '<background>yellow</background>',
    choiceC: '<body bg="yellow">',
    choiceD: null,
    correct_answer: 'choiceA',
    subject_id:
  },

// CSS QUIZ

  {
    id: '',
    title: 'What is the correct HTML for referring to an external style sheet?',
    choiceA: '<link rel="stylesheet" type="text/css" href="mystyle.css">',
    choiceB: 'Home<style src="mystyle.css">',
    choiceC: '<stylesheet>mystyle.css</stylesheet>',
    choiceD: null,
    correct_answer: 'choiceA',
    subject_id:
  }



// Test
];

const seedQuestions = () => User.bulkCreate(questionsdata , {individualHooks: true});

module.exports = seedQuestions;//