document.getElementById('form-email').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que o formulário seja submetido normalmente
    
    var assunto = document.getElementById('assunto').value.trim();
    var mensagem = document.getElementById('mensagem').value.trim();
    var telefone = document.getElementById('telefone').value.trim();
    
    // Constrói o corpo do e-mail com os dados do formulário
    var corpoEmail = mensagem + '\n\n' +  'Telefone do remetente: ' + telefone;
    
    var mailtoLink = 'mailto:contato@paulosergiocf.com' + '?subject=' + encodeURIComponent(assunto) + '&body=' + encodeURIComponent(corpoEmail);
    
    // Abre o cliente de e-mail padrão do usuário com os campos preenchidos
    window.location.href = mailtoLink;
})