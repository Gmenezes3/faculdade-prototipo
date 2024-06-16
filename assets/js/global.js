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