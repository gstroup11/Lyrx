//   /api/...
 const router = require('express').Router();
 const songSearch = require('./songSearch');

 router.use('/songsearch', songSearch);
 router.use('/user', require('./user-routes.js'));

 module.exports = router;