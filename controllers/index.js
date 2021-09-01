const router = require('express').Router();

const apiRoutes = require('./api/');
const dashboardRoutes = require('./dashboard-routes.js');
const pdfRoutes = require('./pdf-routes.js')

router.use('/', dashboardRoutes);
router.use('/api', apiRoutes);
router.use('/pdf', pdfRoutes);


module.exports = router;