const Atribuicao = require('../models/atribuicaoModel');

exports.getAll = (req, res) => {
  Atribuicao.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getById = (req, res) => {
  const id = req.params.id;
  Atribuicao.getById(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result[0]);
  });
};

exports.create = (req, res) => {
  Atribuicao.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: 'Atribuição criada!', id: result.insertId });
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Atribuicao.delete(id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Atribuição excluída!' });
  });
};
