
function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  event.target.classList.add('active');
}

function togglePacienteField(select) {
  const campo = document.getElementById('nome_paciente');
  campo.style.display = select.value === 'nao' ? 'block' : 'none';
}
