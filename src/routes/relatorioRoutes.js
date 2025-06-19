const express = require('express');
const router = express.Router();
const relatorioController = require('../controllers/relatorioController');

router.get('/alunos-por-turma/:turmaId', relatorioController.alunosPorTurma);
router.get('/professores-por-disciplina/:disciplinaId', relatorioController.professoresPorDisciplina);
router.get('/boletim/:alunoId/:periodo', relatorioController.boletimPorPeriodo);

module.exports = router;
