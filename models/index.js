// import all models
const Instructor = require('./Instructor');
const Subject = require('./Subject');
const Question = require('./Question');
const AnswerChoices = require('./AnswerChoices');

// create associations
Instructor.hasMany(Subject, {
  foreignKey: 'instructor_id'
});

Question.belongsToMany(Subject, {
  foreignKey: 'question_id'
});

AnswerChoices.belongsToMany(Question, {
  foreignKey: 'answerchoices_id'
});

Question.hasMany(AnswerChoices, {
    foreignKey: 'question_id'
  });
  


module.exports = { 
    Instructor, 
    Subject, 
    Question, 
    AnswerChoices 
};
