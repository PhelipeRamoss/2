const Historico = require('../models/historicoModel');

exports.getByAluno = (req, res) => {
  const alunoId = req.params.alunoId;
  Historico.getByAluno(alunoId, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.create = (req, res) => {
  Historico.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: 'Registro criado!', id: result.insertId });
  });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Historico.update(id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Registro atualizado!' });
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Historico.delete(id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Registro excluído!' });
  });
};
