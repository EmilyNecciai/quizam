const router = require('express').Router();

const instructorRoutes = require('./instructor-routes');
const questionRoutes = require('./question-routes');
const subjectRoutes = require('./subject-routes');


router.use('/instructor', instructorRoutes);
router.use('/questions', questionRoutes);
router.use('/subjects', subjectRoutes);


module.exports = router;
