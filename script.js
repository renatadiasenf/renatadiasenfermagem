// Função para alternar a exibição do campo nome do paciente
function togglePacienteField() {
    const select = document.getElementById('para_voce');
    const container = document.getElementById('nome_paciente_container');
    if (select.value === 'nao') {
        container.style.display = 'block';
    } else {
        container.style.display = 'none';
    }
}

// Função para alternar entre abas
function showTab(tabId) {
    // Esconde todas as abas
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => {
        tab.classList.remove('active');
    });

    // Remove a classe active de todos os botões
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Mostra a aba selecionada
    document.getElementById(tabId).classList.add('active');

    // Adiciona a classe active ao botão clicado
    event.currentTarget.classList.add('active');
}

// Configuração do botão de confirmação via WhatsApp
document.addEventListener('DOMContentLoaded', function() {
    const whatsappConfirm = document.getElementById('whatsappConfirm');
    if (whatsappConfirm) {
        whatsappConfirm.addEventListener('click', function() {
            const tipoAtendimento = document.getElementById('tipo_atendimento').value;
            const mensagem = `Olá! Acabei de fazer um agendamento pelo site para ${tipoAtendimento || 'um serviço'}. Gostaria de confirmar os detalhes.`;
            const whatsappUrl = `https://wa.me/5514981066366?text=${encodeURIComponent(mensagem)}`;
            window.open(whatsappUrl, '_blank');
        });
    }

    // Envio do formulário
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Aqui você pode adicionar lógica para enviar o formulário
            // Por enquanto, apenas mostra uma mensagem
            alert('Formulário enviado com sucesso! Agora confirme pelo WhatsApp.');
            // Aqui você pode adicionar o código para realmente enviar o formulário
            // this.submit();
        });
    }

    // Adiciona evento de change ao select para_voce
    const paraVoceSelect = document.getElementById('para_voce');
    if (paraVoceSelect) {
        paraVoceSelect.addEventListener('change', togglePacienteField);
    }
});
