const router = require('express').Router();

const userController = require('../server/controllers/userController');
const furnitureController = require('../server/controllers/furnitureController');

router.use('/users', userController);
router.use('/data/furnitures', furnitureController);


module.exports = router;