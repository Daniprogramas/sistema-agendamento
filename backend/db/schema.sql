CREATE DATABASE IF NOT EXISTS agendamentos;
USE agendamentos;

CREATE TABLE IF NOT EXISTS agendamentos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  servico VARCHAR(100),
  horario DATETIME
);
