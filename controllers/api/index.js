const router = require('express').Router();

const instructorRoutes = require('./instructor-routes.js');
const answerChoicesRoutes = require('./answer-choice-routes');
const questionRoutes = require('./question-routes');
const subjectRoutes = require('./subject-routes');


router.use('/instructor', instructorRoutes);
router.use('/answer-choices', answerChoicesRoutes);
router.use('/questions', questionRoutes);
router.use('/subjects', subjectRoutes);


module.exports = router;
