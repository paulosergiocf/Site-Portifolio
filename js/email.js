document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contato form');
  const mensagemEnviada = document.getElementById('mensagem-enviada');

  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Previne o comportamento padrão do formulário

      const formData = new FormData(form);

      fetch(form.action, {
          method: form.method,
          body: formData
      })
      .then(() => {
          // Reseta o formulário e exibe mensagem de sucesso
          form.reset();
          mensagemEnviada.style.display = 'block';
      })
      .catch(error => {
          console.error('Erro ao enviar mensagem:', error);
          mensagemEnviada.style.display = 'none'; // Oculta mensagem caso ocorra erro
      });
  });
});

