const db = require('../config/database');

const Turma = {
  getAll: (callback) => {
    db.query('SELECT * FROM turmas', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM turmas WHERE id = ?', [id], callback);
  },
  create: (data, callback) => {
    db.query('INSERT INTO turmas SET ?', data, callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE turmas SET ? WHERE id = ?', [data, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM turmas WHERE id = ?', [id], callback);
  }
};

module.exports = Turma;
