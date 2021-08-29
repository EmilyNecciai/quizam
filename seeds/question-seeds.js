const sequelize = require("../config/connection");
const { Question } = require("../models");

const questiondata = [
  // HTML id = 1
  // CSS id = 2
  // JS = 3

  // HTML QUIZ
  {
    title: "What does HTML stand for?",
    choiceA: "Hyperlinks and Text Markup Language",
    choiceB: "Home Tool Markup Language",
    choiceC: "Hyper Text Markup Language",
    choiceD: null,
    correct_answer: "choiceC",
    subject_id: "1",
  },

  {
    title: "Choose the correct HTML element for the largest heading:",
    choiceA: "<h6>",
    choiceB: "<head>",
    choiceC: "<heading>",
    choiceD: "<h1>",
    correct_answer: "choiceD",
    subject_id: "1",
  },

  {
    title: "What is the correct HTML for adding a background color?",
    choiceA: '<body style="background-color:yellow;">',
    choiceB: "<background>yellow</background>",
    choiceC: '<body bg="yellow">',
    choiceD: null,
    correct_answer: "choiceA",
    subject_id: "1",
  },

  // CSS QUIZ

  {
    title: "What is the correct HTML for referring to an external style sheet?",
    choiceA: '<link rel="stylesheet" type="text/css" href="mystyle.css">',
    choiceB: 'Home<style src="mystyle.css">',
    choiceC: "<stylesheet>mystyle.css</stylesheet>",
    choiceD: null,
    correct_answer: "choiceA",
    subject_id: "2",
  },

  {
    title:
      "Where in an HTML document is the correct place to refer to an external style sheet?",
    choiceA: "In the <body> section",
    choiceB: "In the <head> section",
    choiceC: "At the end of the document",
    choiceD: null,
    correct_answer: "choiceB",
    subject_id: "2",
  },

  {
    title: "Which is the correct CSS syntax?",
    choiceA: "body:color=black;",
    choiceB: "{body;color:black;",
    choiceC: "body {color:black;}",
    choiceD: "{body:color=black;}",
    correct_answer: "choiceC",
    subject_id: "2",
  },

  // JS QUIZ
  {
    title: "Inside which HTML element do we put the JavaScript?",
    choiceA: "<script>",
    choiceB: "<js>",
    choiceC: "<scripting>",
    choiceD: "<javascript>",
    correct_answer: "choiceA",
    subject_id: "3",
  },

  {
    title: "To declare an array in Java, define the variable type with:",
    choiceA: "()",
    choiceB: "{}",
    choiceC: "[]",
    choiceD: null,
    correct_answer: "choiceC",
    subject_id: "3",
  },

  {
    title:
      "In Java, it is possible to inherit attributes and methods from one class to another.",
    choiceA: "False",
    choiceB: "True",
    choiceC: null,
    choiceD: null,
    correct_answer: "choiceA",
    subject_id: "3",
  },
];

const seedQuestion = () =>
  Question.bulkCreate(questiondata, { individualHooks: true });

module.exports = seedQuestion; //
