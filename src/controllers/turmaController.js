const Turma = require('../models/turmaModel');

exports.getAll = (req, res) => {
  Turma.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getById = (req, res) => {
  const id = req.params.id;
  Turma.getById(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result[0]);
  });
};

exports.create = (req, res) => {
  Turma.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: 'Turma criada!', id: result.insertId });
  });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Turma.update(id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Turma atualizada!' });
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Turma.delete(id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Turma excluída!' });
  });
};
