const Professor = require('../models/professorModel');

exports.getAll = (req, res) => {
  Professor.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getById = (req, res) => {
  const id = req.params.id;
  Professor.getById(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result[0]);
  });
};

exports.create = (req, res) => {
  Professor.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: 'Professor criado!', id: result.insertId });
  });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Professor.update(id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Professor atualizado!' });
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Professor.delete(id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Professor excluído!' });
  });
};
