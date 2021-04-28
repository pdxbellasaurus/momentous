const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./eventRoutes');

router.use('/users', userRoutes);
router.use('/posts', eventRoutes);

module.exports = router;
