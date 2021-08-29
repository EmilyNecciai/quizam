const router = require("express").Router();
const withAuth = require("../utils/auth");
const createpdf = require('../utils/createPDF')
const path = require('path')

router.get('/pdf',withAuth,(req,res)=>{
  // replace 'pagepath' to the question api address 
    let pagepath = 'https://www.google.com';
  // replace 'pdfpath' to a local address
    let pdfpath = path.join(__dirname,'/questions.pdf');
    createpdf(pagepath,pdfpath).then(() =>{
    res.sendFile(pdfpath);
    })
})


module.exports = router;