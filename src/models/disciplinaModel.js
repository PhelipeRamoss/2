const db = require('../config/database');

const Disciplina = {
  getAll: (callback) => {
    db.query('SELECT * FROM disciplinas', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM disciplinas WHERE id = ?', [id], callback);
  },
  create: (data, callback) => {
    db.query('INSERT INTO disciplinas SET ?', data, callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE disciplinas SET ? WHERE id = ?', [data, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM disciplinas WHERE id = ?', [id], callback);
  },
};

module.exports = Disciplina;
