const router = require('express').Router();
const sequelize = require('../config/connection');
const { Instructor, Question, Subject } = require('../models');

// router.get('/',(req,res) => {
//     console.log(req.session);
//     Question.findAll({
//         attributes:[
//             'id',
//             'title',
//         ],
//         include:[
//             {
//                 model: Subject,
//                 attributes:['id','name'],
//                 include:{
//                     model:Instructor,
//                     attributes:['name']
//                 }
//             }
//         ]
//     }).then(dbPostData =>{
//         const questions = dbPostData.map(question => question.get({plain:true}));
//         res.render('homepage',{
//             questions,
//             loggedIn: req.session.loggedIn
//         });
//     }).catch(err =>{
//         console.log(err);
//         res.status(500).json(err);
//     });
// });


router.get('/',(req,res) => {
    console.log(req.session);
    res.render('homepage', {
        loggedIn: req.session.loggedIn
      });
})


router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
  router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
  });

  module.exports = router;