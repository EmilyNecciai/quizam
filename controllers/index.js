const router = require('express').Router();

const apiRoutes = require('./api/');
const dashboardRoutes = require('./dashboard-routes.js');
const pdfRoutes = require('./pdf-routes.js')
const editorRoutes = require('./editor-routes.js')


router.use('/api', apiRoutes);
router.use('/', dashboardRoutes);
router.use('/pdf', pdfRoutes);
router.use('/editor', editorRoutes);


module.exports = router;