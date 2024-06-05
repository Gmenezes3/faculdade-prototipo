// Código jQuery para ocultar ou mostrar baseado nas informações salvas no LocalStorage
$(document).ready(function () {
    if (localStorage.getItem('loggedIn') === 'true') {
        $('#loginDropdown').show();
    } else {
        $('#loginDropdown').hide();
    }
});