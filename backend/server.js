require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const agendamentos = require('./routes/agendamentos');

app.use(cors());
app.use(express.json());
app.use('/api/agendamentos', agendamentos);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
