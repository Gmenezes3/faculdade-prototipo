// Event listener para login (simulado)
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Simulação de login bem-sucedido
    var emailLogin = document.getElementById('email-login').value;
    var senhaLogin = document.getElementById('senha-login').value;

    var emailRegistrado = localStorage.getItem('email');
    var senhaRegistrada = localStorage.getItem('senha');

    if (emailLogin === emailRegistrado && senhaLogin === senhaRegistrada) {
        alert('Login bem-sucedido!');

        // Armazenar o estado de login no localStorage
        localStorage.setItem('loggedIn', 'true');

        // Atualizar dropdown
        atualizarDropdown();

        // Redirecionar para a página principal ou a página que desejar
        window.location.href = 'index.html';
    } else {
        alert('Email ou senha incorretos.');
    }
});