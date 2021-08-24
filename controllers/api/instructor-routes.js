const router = require('express').Router();
const { Instructor, Subject, Question} = require('../../models');

// get all users
router.get('/', (req, res) => {
  Instructor.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(dbInstructorData => res.json(dbInstructorData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Instructor.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Subject,
        attributes: ['id', 'name']
      },
      {
        model: Question,
        attributes: ['id', 'title', 'correct_answer', 'choiceA', 'choiceB', 'choiceC', 'choiceD', 'subject_id'],
      }
    ]
  })
    .then(dbInstructorData => {
      if (!dbInstructorData) {
        res.status(404).json({ message: 'No instructor found with this id' });
        return;
      }
      res.json(dbInstructorData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // expects {name: 'Emily Mayeski', email: 'enmayeski@gmail.com', password: 'password1234'}
  Instructor.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })
    .then(dbInstructorData => {
      req.session.save(() => {
        req.session.user_id = dbInstructorData.id;
        req.session.name = dbInstructorData.name;
        req.session.loggedIn = true;
  
        res.json(dbInstructorData);
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/login', (req, res) => {
  // expects {email: 'enmayeski@gmail.com', password: 'password1234'}
  Instructor.findOne({
    where: {
      email: req.body.email
    }
  }).then(dbInstructorData => {
    if (!dbInstructorData) {
      res.status(400).json({ message: 'No instructor with that email address!' });
      return;
    }

    const validPassword = dbInstructorData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbInstructorData.id;
      req.session.name = dbInstructorData.name;
      req.session.loggedIn = true;
  
      res.json({ user: dbInstructorData, message: 'You are now logged in!' });
    });
  });
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});

router.put('/:id', (req, res) => {
  // expects {name: 'Emily Mayeski', email: 'enmayeski@gmail.com', password: 'password1234'}

  // pass in req.body instead to only update what's passed through
  Instructor.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
    .then(dbInstructorData => {
      if (!dbInstructorData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbInstructorData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Instructor.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbInstructorData => {
      if (!dbInstructorData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbInstructorData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
