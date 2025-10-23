function showTab(tabId) {
  // Esconder todas as abas
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });
  
  // Remover classe ativa de todos os botões
  document.querySelectorAll('.tab-button').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Mostrar a aba selecionada
  document.getElementById(tabId).classList.add('active');
  
  // Adicionar classe ativa ao botão clicado
  event.currentTarget.classList.add('active');
}

function togglePacienteField(select) {
  const container = document.getElementById('nome_paciente_container');
  const campo = document.getElementById('nome_paciente');
  
  if (select.value === 'nao') {
    container.style.display = 'flex';
    campo.required = true;
  } else {
    container.style.display = 'none';
    campo.required = false;
    campo.value = '';
  }
}

// Adicionar validação de data (não permitir datas passadas)
document.addEventListener('DOMContentLoaded', function() {
  const dataInput = document.querySelector('input[type="date"]');
  const hoje = new Date().toISOString().split('T')[0];
  dataInput.setAttribute('min', hoje);
  
  // Adicionar efeito de foco suave nos campos do formulário
  const inputs = document.querySelectorAll('input, select');
  inputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
      if (this.value === '') {
        this.parentElement.classList.remove('focused');
      }
    });
  });
});