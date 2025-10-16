document.getElementById('form-agendamento').addEventListener('submit', async (e) => {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const servico = document.getElementById('servico').value;
  const horario = document.getElementById('horario').value;

  const resposta = await fetch('http://localhost:3000/api/agendamentos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, servico, horario })
  });

  const resultado = await resposta.json();
  alert(resultado.mensagem);
});
