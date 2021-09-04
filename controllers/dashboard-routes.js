const router = require("express").Router();
const { Instructor, Subject, Question } = require("../models");
const withAuth = require("../utils/auth");
const sequelize = require('../config/connection');

// get all Subjects
router.get("/",withAuth, (req, res) => {
  console.log(req.session)
  Subject.findAll({
    where: {
      instructor_id: req.session.user_id,
    },
    attributes: ["id", "name"],
    include: [
      {
        model: Instructor,
        attributes: ["id", "name", "email"],
      },
      {
        model: Question,
        attributes: [
          "id",
          "title",
          "correct_answer",
          "choiceA",
          "choiceB",
          "choiceC",
          "choiceD",
          "subject_id",
        ],
      },
    ],
  })
    .then((dbSubjectData) => {
      const subjects = dbSubjectData.map(subject => subject.get({plain:true}));
      res.render('dashboard',{subjects, loggedIn: true});
      // res.json(dbSubjectData)
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});



router.get("/subjects",withAuth, (req, res) => {
  console.log(req.session)
  Subject.findAll({
    where: {
      instructor_id: req.session.user_id,
    },
    attributes: ["id", "name"],
    include: [
      {
        model: Instructor,
        attributes: ["id", "name", "email"],
      },
      {
        model: Question,
        attributes: [
          "id",
          "title",
          "correct_answer",
          "choiceA",
          "choiceB",
          "choiceC",
          "choiceD",
          "subject_id"
        ],
      },
    ],
  })
    .then((dbSubjectData) => {
      const subjects = dbSubjectData.map(subject => subject.get({plain:true}));
      res.render('subjects',{subjects, loggedIn: true});
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/addsubject',withAuth,(req,res)=>{
  Subject.findAll({
    where:{
      instructor_id:req.session.user_id
    },
    attributes:[
      'id',
      'name',
      'created_at'
    ],
    include:[
      {
        model:Question,
        attributes: [
          "id",
          "title",
          "correct_answer",
          "choiceA",
          "choiceB",
          "choiceC",
          "choiceD",
          "subject_id"
        ],
      },{
        model:Instructor,
        attributes:['name']
      }
    ]
  })
  .then(dbSubjectData => {
    const subjects = dbSubjectData.map(subject => subject.get({ plain: true }));
    res.render('add-subject', {subjects, loggedIn: true });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


router.get('/addquestion',withAuth,(req,res)=>{
  Subject.findAll({
    where:{
      instructor_id:req.session.user_id
    },
    attributes:[
      'id',
      'name',
      'created_at'
    ],
    include:[
      {
        model:Question,
        attributes: [
          "id",
          "title",
          "correct_answer",
          "choiceA",
          "choiceB",
          "choiceC",
          "choiceD",
          "subject_id"
        ],
      },{
        model:Instructor,
        attributes:['name']
      }
    ]
  })
  .then(dbSubjectData => {
    const subjects = dbSubjectData.map(subject => subject.get({ plain: true }));
    res.render('add-question', {subjects, loggedIn: true });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get("/questions",withAuth, (req, res) => {
  console.log(req.session)
  Question.findAll({
    attributes: [
      "id",
      "title",
      "correct_answer",
      "choiceA",
      "choiceB",
      "choiceC",
      "choiceD",
      "subject_id",
      [sequelize.literal('(SELECT name FROM subjects WHERE subjects.id = questions.subject_id)'), 'subject_name']
    ],
    include: [
      {
        model: Subject,
        attributes: [
          "id",
          "name"
        ],
      },
    ],
  })
    .then((dbQuestionData) => {
      const questions = dbQuestionData.map(question => question.get({plain:true}));
      res.render('questions',{questions, loggedIn: true});
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/answers",withAuth, (req, res) => {
  console.log(req.session)
  Question.findAll({
    attributes: [
      "id",
      "title",
      "correct_answer",
      "choiceA",
      "choiceB",
      "choiceC",
      "choiceD",
      "subject_id",
      [sequelize.literal('(SELECT name FROM subjects WHERE subjects.id = questions.subject_id)'), 'subject_name']
    ],
    include: [
      {
        model: Subject,
        attributes: [
          "id",
          "name"
        ],
      },
    ],
  })
    .then((dbQuestionData) => {
      const questions = dbQuestionData.map(question => question.get({plain:true}));
      res.render('answers',{questions, loggedIn: true});
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;

