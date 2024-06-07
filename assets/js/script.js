// Função para salvar os campos de email e senha no LocalStorage
function salvarCredenciais() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    // Verifica se os campos não estão vazios
    if (email.trim() !== '' && senha.trim() !== '') {
        localStorage.setItem('email', email);
        localStorage.setItem('senha', senha);

        // Exibe o toast de cadastro bem-sucedido
        mostrarToastCadastro();

        // Redireciona para a tela de login após o cadastro
        window.location.href = "login.html";
    } else {
        // Exibe uma mensagem de erro se os campos estiverem vazios
        alert("Por favor, preencha todos os campos.");
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

//Função para exibir o toast de login bem-sucedido
function mostrarToastLogin() {
    var toast = document.getElementById("toast-login");
    toast.innerText = "Login realizado com sucesso!";
    toast.className = "toast show";
    setTimeout(function () {
        toast.className = toast.className.replace("show", "");
    }, 3000);
}

//Função para exibir o toast de cadastro bem-sucedido
function mostrarToastCadastro() {
    var toast = document.getElementById("toast-registro");
    toast.innerText = "Cadastro realizado com sucesso!";
    toast.className = "toast show";
    setTimeout(function () {
        toast.className = toast.className.replace("show", "");
    }, 3000);
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
