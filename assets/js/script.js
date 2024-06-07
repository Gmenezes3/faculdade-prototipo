// Função para salvar os campos de email e senha no LocalStorage
function salvarCredenciais() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    // Verifica se os campos não estão vazios
    if (email && senha) {
        localStorage.setItem('email', email);
        localStorage.setItem('senha', senha);

        // Redireciona para a tela de login
        window.location.href = "login.html";
    }
}

// Função para verificar se os dados de login estão armazenados no LocalStorage
function verificarLogin() {
    var email = localStorage.getItem('email');
    var senha = localStorage.getItem('senha');

    if (email && senha) {
        // Se os dados de login estiverem armazenados, mostra os itens do perfil e configurações, e esconde o login
        document.getElementById('loginItem').style.display = 'none';
        document.getElementById('profileItem').style.display = 'block';
        document.getElementById('settingsItem').style.display = 'block';
        document.getElementById('dividerItem').style.display = 'block';
        document.getElementById('logoutItem').style.display = 'block';
    } else {
        // Se os dados de login não estiverem armazenados, mostra apenas o login e esconde os itens do perfil e configurações
        document.getElementById('loginItem').style.display = 'block';
        document.getElementById('profileItem').style.display = 'none';
        document.getElementById('settingsItem').style.display = 'none';
        document.getElementById('dividerItem').style.display = 'none';
        document.getElementById('logoutItem').style.display = 'none';
    }
}

// Função para fazer logout e limpar os dados do LocalStorage
function fazerLogout() {
    localStorage.removeItem('email');
    localStorage.removeItem('senha');
    window.location.href = "login.html"; // Redireciona para a página de login
}

// Chama a função para verificar o estado do login quando a página é carregada
window.onload = function () {
    verificarLogin();
};

// Chama a função para salvar as credenciais quando o formulário for enviado
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio do formulário padrão
    salvarCredenciais();
});
