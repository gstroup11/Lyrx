//   /api/...
 const router = require('express').Router();
 const songSearch = require('./songSearch');

 router.use('/songsearch', songSearch);

 module.exports = router;