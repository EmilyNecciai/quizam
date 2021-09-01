const router = require('express').Router();

const apiRoutes = require('./api/');
const dashboardRoutes = require('./dashboard-routes.js');
const pdfRoutes = require('./pdf-routes.js')
const homeRoutes = require('./home-routes.js')

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);
router.use('/pdf', pdfRoutes);


module.exports = router;