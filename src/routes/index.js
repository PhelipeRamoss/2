const express = require('express');
const router = express.Router();

const alunoRoutes = require('./alunoRoutes');
const professorRoutes = require('./professorRoutes');
const disciplinaRoutes = require('./disciplinaRoutes');
const turmaRoutes = require('./turmaRoutes');
const atribuicaoRoutes = require('./atribuicaoRoutes');
const relatorioRoutes = require('./relatorioRoutes');
const historicoRoutes = require('./historicoRoutes');

router.use('/historico', historicoRoutes);
router.use('/relatorios', relatorioRoutes);
router.use('/atribuicoes', atribuicaoRoutes);
router.use('/turmas', turmaRoutes);
router.use('/alunos', alunoRoutes);
router.use('/professores', professorRoutes);
router.use('/disciplinas', disciplinaRoutes);

router.get('/', (req, res) => {
  res.send('API de Gestão Escolar');
});

module.exports = router;
