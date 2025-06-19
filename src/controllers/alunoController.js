const Aluno = require('../models/alunoModel');

exports.getAll = (req, res) => {
  Aluno.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getById = (req, res) => {
  const id = req.params.id;
  Aluno.getById(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result[0]);
  });
};

exports.create = (req, res) => {
  Aluno.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: 'Aluno criado!', id: result.insertId });
  });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Aluno.update(id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Aluno atualizado!' });
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Aluno.delete(id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Aluno excluído!' });
  });
};
