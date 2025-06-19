const Disciplina = require('../models/disciplinaModel');

exports.getAll = (req, res) => {
  Disciplina.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getById = (req, res) => {
  const id = req.params.id;
  Disciplina.getById(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result[0]);
  });
};

exports.create = (req, res) => {
  Disciplina.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: 'Disciplina criada!', id: result.insertId });
  });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Disciplina.update(id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Disciplina atualizada!' });
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Disciplina.delete(id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Disciplina excluída!' });
  });
};
