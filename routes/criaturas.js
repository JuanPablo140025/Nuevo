const express = require('express');
const router = express.Router();
const criaturasController = require('../controllers/criaturasController');

router.get('/', criaturasController.getAllCriaturas);
router.get('/:id', criaturasController.getCriaturaById);
router.post('/', criaturasController.createCriatura);
router.put('/:id', criaturasController.updateCriatura);
router.delete('/:id', criaturasController.deleteCriatura);

module.exports = router;