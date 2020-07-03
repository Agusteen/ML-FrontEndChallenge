const { Router } = require('express');
const router = Router();

const itemController =  require('../controllers/items');

// *** Routes ***
router.get('/', (req, res) => {
    itemController.getItemsByFilter(req, res);
});

router.get('/:id', (req, res) => {
    itemController.getItemById(req, res);
});

module.exports = router;