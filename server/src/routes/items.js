const { Router } = require('express');
const router = Router();

const itemController =  require('../controllers/items');

// *** Routes ***
router.get('/', (req, res) => {
    itemController.getItemsByFilter(req, res);
});

module.exports = router;