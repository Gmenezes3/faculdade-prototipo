document.getElementById('cep').addEventListener('input', function () {
    var cep = this.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (cep.length === 8 && /^[0-9]{8}$/.test(cep)) {
        cep = cep.replace(/^(\d{5})(\d)/, "$1-$2");
        consultarCEP(cep);
    }
});

function consultarCEP(cep) {
    var url = `https://viacep.com.br/ws/${cep}/json/`;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var endereco = JSON.parse(xhr.responseText);
            preencherFormulario(endereco);
        }
    };
    xhr.send();
}

function preencherFormulario(endereco) {
    document.getElementById('rua').value = endereco.logradouro || '';
    document.getElementById('bairro').value = endereco.bairro || '';
    document.getElementById('cidade').value = endereco.localidade || '';
    document.getElementById('estado').value = endereco.uf || '';
}
