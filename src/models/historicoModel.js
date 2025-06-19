const db = require('../config/database');

const Historico = {
  getByAluno: (alunoId, callback) => {
    db.query('SELECT * FROM historico WHERE aluno_id = ?', [alunoId], callback);
  },
  create: (data, callback) => {
    db.query('INSERT INTO historico SET ?', data, callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE historico SET ? WHERE id = ?', [data, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM historico WHERE id = ?', [id], callback);
  }
};

module.exports = Historico;
