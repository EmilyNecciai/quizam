const router = require("express").Router();
const withAuth = require("../utils/auth");
const createpdf = require('../utils/createPDF')
const path = require('path')
const { Instructor, Subject, Question } = require("../models");
const sequelize = require('../config/connection');

router.get("/", (req, res) => {
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
      res.render('pdf-question',{questions, loggedIn: true});
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/export-pdf',(req,res)=>{
  // replace 'pagepath' to the question api address 
    let pagepath = 'https://quizam.herokuapp.com/pdf';//for localhost using http install of https, https wii cause SSL error.
  // replace 'pdfpath' to a local address
    let pdfpath = path.join(__dirname,'/post.pdf');
    // let pdfpath = 'post.pdf';
    createpdf(pagepath,pdfpath).then(() =>{
    // let newpath = path.join(__dirname,"/post.pdf")
    res.sendFile(pdfpath);
    }).catch(e=>{console.log('Creating PDF Failed with message'+ e)})
})

// Heroku need to install: heroku buildpacks:add jontewks/puppeteer
// result from :https://stackoverflow.com/questions/63177218/puppeteer-on-heroku-failed-to-launch-the-browser-process

module.exports = router;