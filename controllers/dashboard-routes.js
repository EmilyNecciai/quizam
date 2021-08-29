const router = require("express").Router();
const { Instructor, Subject, Question } = require("../models");
const withAuth = require("../utils/auth");

// get all Subjects
router.get("/", withAuth, (req, res) => {
  Subject.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ["id", "name", "subject_id"],
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
    .then((dbSubjectData) => res.json(dbSubjectData))
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
    attributes: ["id", "name", "subject_id"],
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

module.exports = router;
