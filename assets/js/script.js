// Função para atualizar o dropdown baseado no estado de login
function atualizarDropdown() {
    var emailRegistrado = localStorage.getItem('email');
    var senhaRegistrada = localStorage.getItem('senha');
    var loggedIn = localStorage.getItem('loggedIn');

    var loginItem = document.getElementById('loginItem');
    var profileItem = document.getElementById('profileItem');
    var settingsItem = document.getElementById('settingsItem');
    var dividerItem = document.getElementById('dividerItem');
    var logoutItem = document.getElementById('logoutItem');
    var vagasNavItem = document.getElementById('vagasNavItem');

    if (emailRegistrado && senhaRegistrada && loggedIn === 'true') {
        loginItem.style.display = 'none';
        profileItem.style.display = 'block';
        settingsItem.style.display = 'block';
        dividerItem.style.display = 'block';
        logoutItem.style.display = 'block';
        vagasNavItem.style.display = 'block';
    } else {
        loginItem.style.display = 'block';
        profileItem.style.display = 'none';
        settingsItem.style.display = 'none';
        dividerItem.style.display = 'none';
        logoutItem.style.display = 'none';
        vagasNavItem.style.display = 'none';
    }
}

// Executar a atualização do dropdown ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
    atualizarDropdown();
});

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

// Event listener para logout
document.getElementById('logoutItem').addEventListener('click', function () {
    // Remover os dados do localStorage
    localStorage.removeItem('email');
    localStorage.removeItem('senha');
    localStorage.removeItem('loggedIn');

    // Atualizar dropdown
    atualizarDropdown();

    // Redirecionar para a página de login
    window.location.href = 'login.html';
});

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