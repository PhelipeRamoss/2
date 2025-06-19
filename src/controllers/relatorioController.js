const db = require('../config/database');

exports.alunosPorTurma = (req, res) => {
  const { turmaId } = req.params;
  const query = `SELECT a.id, a.nome, t.nome AS turma FROM alunos a
                 JOIN matriculas m ON a.id = m.aluno_id
                 JOIN turmas t ON m.turma_id = t.id
                 WHERE t.id = ?`;
  db.query(query, [turmaId], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.professoresPorDisciplina = (req, res) => {
  const { disciplinaId } = req.params;
  const query = `SELECT p.id, p.nome, d.nome AS disciplina FROM atribuicoes a
                 JOIN professores p ON a.professor_id = p.id
                 JOIN disciplinas d ON a.disciplina_id = d.id
                 WHERE d.id = ?`;
  db.query(query, [disciplinaId], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.boletimPorPeriodo = (req, res) => {
  const { alunoId, periodo } = req.params;
  const query = `SELECT d.nome AS disciplina, h.nota, h.periodo FROM historico h
                 JOIN disciplinas d ON h.disciplina_id = d.id
                 WHERE h.aluno_id = ? AND h.periodo = ?`;
  db.query(query, [alunoId, periodo], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};
