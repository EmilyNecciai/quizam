const router = require('express').Router();

const instructorRoutes = require('./instructor-routes.js');
const questionRoutes = require('./question-routes.js');
const subjectRoutes = require('./subject-routes.js');


router.use('/instructor', instructorRoutes);
router.use('/questions', questionRoutes);
router.use('/subjects', subjectRoutes);


module.exports = router;
