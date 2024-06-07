//FUNÇÃO PARA FORMATAR CPF
document.getElementById('cpf').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/);
    e.target.value = !x[2] ? x[1] : x[1] + '.' + x[2] + (x[3] ? '.' + x[3] : '') + (x[4] ? '-' + x[4] : '');
});

//FUNÇÃO PARA FORMATAR CELULAR
document.getElementById('telefone_celular').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
});

//FUNÇÃO PARA FORMATAR TELEFONE FIXO
document.getElementById('telefone-fixo').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,4})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
});

function validarEmail(email) {
    // Expressão regular para verificar o formato do e-mail
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Exemplo de uso:
const email1 = 'usuario@example.com';
const email2 = 'invalido@exemplo';

console.log(validarEmail(email1)); // Saída esperada: true
console.log(validarEmail(email2)); // Saída esperada: false


//FUNÇÃO PARA VALIDAÇÃO DE CPF
function isValidCPF(cpf) {
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false;
    }
    var soma = 0, resto;

    for (var i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) {
        resto = 0;
    }
    if (resto !== parseInt(cpf.substring(9, 10))) {
        return false;
    }

    soma = 0;
    for (i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) {
        resto = 0;
    }
    if (resto !== parseInt(cpf.substring(10, 11))) {
        return false;
    }
    return true;
}