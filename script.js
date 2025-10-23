
function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  event.target.classList.add('active');
}

function mostrarCampoPaciente() {
  const select = document.getElementById('atendimentoPara');
  const campo = document.getElementById('nomePaciente');
  campo.style.display = select.value === 'nao' ? 'block' : 'none';
}

function enviarFormulario(event) {
  event.preventDefault();
  document.getElementById('mensagemSucesso').style.display = 'block';
  return false;
}

// Simulador de contador de visitas
let visitas = localStorage.getItem('visitas') || 0;
visitas++;
localStorage.setItem('visitas', visitas);
document.getElementById('contador').textContent = visitas;
