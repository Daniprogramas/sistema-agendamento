const express = require('express');
const router = express.Router();
const conexao = require('../db/conexao');

router.post('/', (req, res) => {
  const { nome, servico, horario } = req.body;
  const sql = 'INSERT INTO agendamentos (nome, servico, horario) VALUES (?, ?, ?)';
  conexao.query(sql, [nome, servico, horario], (err, resultado) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ mensagem: 'Erro ao agendar' });
    }
    res.status(201).json({ mensagem: 'Agendamento realizado com sucesso!' });
  });
});

module.exports = router;
