
function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  event.target.classList.add('active');
}

function togglePacienteField() {
  const select = document.getElementById('para_voce');
  const pacienteField = document.getElementById('nome_paciente');
  pacienteField.style.display = select.value === 'nao' ? 'block' : 'none';
}

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      document.getElementById('success-message').style.display = 'block';
      form.reset();
    }
  });
  return false;
}

window.onload = function() {
  let count = localStorage.getItem('visitCount') || 0;
  count++;
  localStorage.setItem('visitCount', count);
  document.getElementById('visit-count').textContent = count;
}
