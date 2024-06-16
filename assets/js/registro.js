// Event listener para o formulário de cadastro
document.getElementById('registroForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obter valores dos campos de email e senha
    var email = document.getElementById('email-registro').value;
    var senha = document.getElementById('senha-registro').value;

    // Armazenar valores no localStorage
    localStorage.setItem('email', email);
    localStorage.setItem('senha', senha);

    // Exibir alerta de sucesso
    alert('Cadastro realizado com sucesso!');

    // Redirecionar para a página de login
    window.location.href = 'login.html';
});
