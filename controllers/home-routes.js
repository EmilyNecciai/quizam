const router = require('express').Router();
const sequelize = require('../config/connection');
const { Instructor, Question, Subject } = require('../models');



router.get('/',(req,res) => {
    console.log(req.session);
    res.render('homepage', {
        loggedIn: req.session.loggedIn
      });
})


router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/dashboard');
      return;
    }
  
    res.render('login');
  });
  
  router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/dashboard');
      return;
    }
  
    res.render('signup');
  });

  module.exports = router;
