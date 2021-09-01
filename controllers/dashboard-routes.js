const router = require("express").Router();
const { Instructor, Subject, Question } = require("../models");
const withAuth = require("../utils/auth");

// get all Subjects
router.get("/", withAuth, (req, res) => {
  Subject.findAll({
    where: {
      user_id: req.session.user_id,
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
      const subject = dbSubjectData.map(subject => subject.get({plain:true}));
      res.render('home',{subject, loggedIn: false});
      // res.json(dbSubjectData)
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Find Specific Subject
router.get("/:id", withAuth, (req, res) => {
  Subject.findOne({
    where: {
      id: req.params.id,
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
      if (!dbSubjectData) {
        res.status(404).json({ message: "No subject found with this id" });
        return;
      }
      res.json(dbSubjectData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//login 

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});




// get all Questions
router.get("/", withAuth, (req, res) => {
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
    ],
    include: [
      {
        model: Instructor,
        attributes: ["id", "name", "email"],
      },
      {
        model: Subject,
        attributes: ["id", "name"],
      },
    ],
  })
    .then((dbQuestionData) => res.json(dbQuestionData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Find Specific Question
router.get("/:id", withAuth, (req, res) => {
  Question.findOne({
    where: {
      id: req.params.id,
    },
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
    include: [
      {
        model: Instructor,
        attributes: ["id", "name", "email"],
      },
      {
        model: Subject,
        attributes: ["id", "name"],
      },
    ],
  })
    .then((dbQuestionData) => {
      if (!dbQuestionData) {
        res.status(404).json({ message: "No question found with this id" });
        return;
      }
      res.json(dbQuestionData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

