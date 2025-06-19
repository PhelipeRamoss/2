const express = require('express');
const router = express.Router();
const atribuicaoController = require('../controllers/atribuicaoController');

router.get('/', atribuicaoController.getAll);
router.get('/:id', atribuicaoController.getById);
router.post('/', atribuicaoController.create);
router.delete('/:id', atribuicaoController.delete);

module.exports = router;
