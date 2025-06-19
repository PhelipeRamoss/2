const db = require('../config/database');

const Aluno = {
  getAll: (callback) => {
    db.query('SELECT * FROM alunos', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM alunos WHERE id = ?', [id], callback);
  },
  create: (data, callback) => {
    db.query('INSERT INTO alunos SET ?', data, callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE alunos SET ? WHERE id = ?', [data, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM alunos WHERE id = ?', [id], callback);
  },
};

module.exports = Aluno;
