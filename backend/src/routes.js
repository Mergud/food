const router = require('express').Router();

router.use('/users', require('./users'));
router.use('/orders', require('./orders'));
router.use('/common_order', require('./specific_order'));
router.use('/menu', require('./menu'));

module.exports = router;
