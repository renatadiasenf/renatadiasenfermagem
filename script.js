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
  
  // Adicionar máscara para telefone
  const telefoneInput = document.querySelector('input[type="tel"]');
  telefoneInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.substring(0, 11);
    
    if (value.length > 10) {
      value = value.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (value.length > 6) {
      value = value.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
    } else if (value.length > 0) {
      value = value.replace(/^(\d{0,2})/, '($1');
    }
    
    e.target.value = value;
  });
});