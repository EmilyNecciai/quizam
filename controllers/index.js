const router = require('express').Router();

const apiRoutes = require('./api/');
const dashboardRoutes = require('./dashboard-routes.js');
const pdfRoutes = require('./pdf-routes.js');
const homeRoutes = require('./home-routes.js');
const editorRoutes = require('./editor-routes.js');


router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/pdf', pdfRoutes);
router.use('/editor', editorRoutes);
router.use('/',homeRoutes);


module.exports = router;