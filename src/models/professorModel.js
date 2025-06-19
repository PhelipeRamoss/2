const db = require('../config/database');

const Professor = {
  getAll: (callback) => {
    db.query('SELECT * FROM professores', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM professores WHERE id = ?', [id], callback);
  },
  create: (data, callback) => {
    db.query('INSERT INTO professores SET ?', data, callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE professores SET ? WHERE id = ?', [data, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM professores WHERE id = ?', [id], callback);
  },
};

module.exports = Professor;
