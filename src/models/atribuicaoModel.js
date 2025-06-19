const db = require('../config/database');

const Atribuicao = {
  getAll: (callback) => {
    db.query(`
      SELECT atribuicoes.id, professores.nome AS professor, disciplinas.nome AS disciplina, turmas.nome AS turma
      FROM atribuicoes
      INNER JOIN professores ON atribuicoes.professor_id = professores.id
      INNER JOIN disciplinas ON atribuicoes.disciplina_id = disciplinas.id
      INNER JOIN turmas ON atribuicoes.turma_id = turmas.id
    `, callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM atribuicoes WHERE id = ?', [id], callback);
  },
  create: (data, callback) => {
    db.query('INSERT INTO atribuicoes SET ?', data, callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM atribuicoes WHERE id = ?', [id], callback);
  }
};

module.exports = Atribuicao;
