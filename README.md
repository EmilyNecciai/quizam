# quiZAM

Finally, an app that allows instructors to quickly create quizzes and print the quiz to a PDF to distribute to their students, as well as keep a copy for themselves with the answer key!

> Project 2 of the GW Bootcamp

## Table of Contents
  - [The Team](#the-team)
  - [Live Site Link](#live-site)
  - [Using This Project](#using-this-project)
  - [Questions](#questions)

## The Team

| Name | Github | Owns... | 
| ---- | ------ | --------|
| Emily Mayeski | [EmilyNecciai](https://www.github.com/EmilyNecciai) | Project Leader, Routes, Models, Heroku, Bulma | 
| Shane Chrisostomo | [shaner3423](https://github.com/shaner3423) | Front End Design, Materialize, UX, Handlebars |
| Baiyang | [cffhr99](https://github.com/cffhr99) | Database Schema, Sql Queries, PDF Package - Puppeteer, Javascript, Debugger |
| Gaye Proctor | [gayebroni](https://github.com/gayebroni) | About Me, Presentation, Documentation, Sample Questions for Seed, Came Up with the name "Quizam" |

## Live Site 
To use this project, go to the live site [here](https://quizam.herokuapp.com/)!

## Using This Project
To use this project in your own project...
1. Fork the Repo into your own, new repo.
2. From there,  install all package dependencies listed in the `package.json` file
3. Set up heroku app from the commandline with `heroku create`.
4. Set up the JawsDB connection (see attached PDF) for that heroku app.
5. Set up the Puppeteer connection
6. Replace the `.env` file contents with the authentication information for the JawsDB connection (click into your jawsDB plugin from your heroku app).
7. Replace the line 10 "host" value with the host value as listed in the same JawsDB plugin Authentication page
8. Replace the `https://` address in pdf-route.js with your new heroku address.
9. Save the work to your new repo and merge it to the main branch
10. Push to heroku with `git push heroku main`. This may take several minutes, as heroku needs to install all of the dependencies that you installed, plus a few extras for the pdf, into your new site.

Then, make some edits in a new branch and submit a PR. It’ll be merged to our main branch upon testing and approval.

**Please be sure to give us credit by linking back to our repo!!**

## Questions
Reach out to the repo owner, EmilyNecciai at enmayeski@gmail.com.



