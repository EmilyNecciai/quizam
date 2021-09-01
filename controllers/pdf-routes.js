const router = require("express").Router();
const withAuth = require("../utils/auth");
const createpdf = require('../utils/createPDF')
const path = require('path')

router.get('/',(req,res)=>{
  // replace 'pagepath' to the question api address 
    let pagepath = 'https://quizam.herokuapp.com/';//for localhost using http install of https, https wii cause SSL error.
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