// import all models
const Instructor = require('./Instructor');
const Subject = require('./Subject');
const Question = require('./Question');

// create associations
Instructor.hasMany(Subject, {
  foreignKey: 'instructor_id',
  // onDelete: 'CASCADE'
});

Subject.belongsTo(Instructor,{
  foreignKey:'instructor_id',
})

Subject.hasMany(Question, {
  foreignKey: 'subject_id',
  // onDelete: 'CASCADE'
});

Question.belongsTo(Subject, {
  foreignKey: 'question_id',
  // onDelete: 'CASCADE'
});

// export
module.exports = { 
    Instructor, 
    Subject, 
    Question, 
};
