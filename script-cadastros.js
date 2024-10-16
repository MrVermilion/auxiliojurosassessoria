// Aplicando máscaras
$(document).ready(function() {
    $('#cpf').mask('000.000.000-00');
    $('#rg').mask('0.000.000');
    $('#telefone').mask('(00) 00000-0000', {
        onKeyPress: function(cep, e, field, options) {
            var masks = ['(00) 00000-0000', '(00) 0000-0000'];
            var mask = (cep.length > 13) ? masks[0] : masks[1];
            $('#telefone').mask(mask, options);
        }
    });
});


// Validação de CPF
function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g,''); // Remove caracteres não numéricos
    if (cpf == '' || cpf.length != 11 || /^(\d)\1+$/.test(cpf)) return false;
    var soma, resto;
    soma = 0;
    for (var i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i-1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(cpf.substring(9, 10))) return false;
    soma = 0;
    for (var i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i-1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(cpf.substring(10, 11))) return false;
    return true;
}

// Validação geral do formulário
function validarFormulario() {
    var cpf = $('#cpf').val();
    if (!validarCPF(cpf)) {
        alert("CPF inválido.");
        return false;
    }
    return true;
}
