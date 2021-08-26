const router = require('express').Router();

const apiRoutes = require('./api/');
const dashboardRoutes = require('./dashboard-routes.js');
const pdfRoutes = require('./pdf-routes.js')

router.use('/api', apiRoutes);
router.use('/', dashboardRoutes);
router.use('/',pdfRoutes);

module.exports = router;