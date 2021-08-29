const router = require("express").Router();
const { Instructor, Subject, Question } = require("../models");
const withAuth = require("../../utils/auth");

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
        attributes: ["id", "name", "subject_id"],
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
        attributes: ["id", "name", "subject_id"],
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
