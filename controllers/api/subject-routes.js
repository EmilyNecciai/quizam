const router = require("express").Router();
const { Instructor, Subject, Question } = require("../../models");
const withAuth = require("../../utils/auth");

// get all Subjects
router.get("/", (req, res) => {
  Subject.findAll({
    attributes: ["id", "name","instructor_id"],
    include: [
      {
        model: Instructor,
        attributes: ["name", "email"],
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
    .then(dbSubjectData => res.json(dbSubjectData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Find Specific Subject
router.get("/:id", (req, res) => {
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

//Create new Subject
router.post("/", withAuth, (req, res) => {
  // expects {title: 'Math!', instructor_id: 1}
  console.log(req.session)
  Subject.create({
    name: req.body.name,
    instructor_id: req.session.user_id,
  })
    .then((dbSubjectData) => res.json(dbSubjectData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Edit Subject Name
router.put("/:id", withAuth, (req, res) => {
  Subject.update(
    {
      name: req.body.name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
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

// Delete Subject
router.delete("/:id", withAuth, (req, res) => {
  console.log("id", req.params.id);
  Subject.destroy({
    where: {
      id: req.params.id,
    },
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
