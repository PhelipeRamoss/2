const express = require('express');
const router = express.Router();
const historicoController = require('../controllers/historicoController');

router.get('/:alunoId', historicoController.getByAluno);
router.post('/', historicoController.create);
router.put('/:id', historicoController.update);
router.delete('/:id', historicoController.delete);

module.exports = router;
