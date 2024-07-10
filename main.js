let inputResultado = document.getElementById('resultado');
let valorAtual = '0';
let valorAnterior = null;
let operacaoPendente = null;

function concatena(digito) {
    if (valorAtual === '0' && digito !== '.') {
        valorAtual = '';
    }
    valorAtual += digito;
    inputResultado.value = valorAtual;
}

function limpar() {
    valorAtual = '0';
    valorAnterior = null;
    operacaoPendente = null;
    inputResultado.value = valorAtual;
}

function alternaSinal() {
    valorAtual = parseFloat(valorAtual) * -1;
    inputResultado.value = valorAtual;
}

function porcentagem() {
    valorAtual = parseFloat(valorAtual) / 100;
    inputResultado.value = valorAtual;
}

function operacao(op) {
    if (valorAnterior === null) {
        valorAnterior = parseFloat(valorAtual);
        operacaoPendente = op;
        valorAtual = '0';
    } else {
        calcular();
        operacaoPendente = op;
    }
}

function somar() {
    operacao('+');
}

function subtrair() {
    operacao('-');
}

function multiplicar() {
    operacao('*');
}

function dividir() {
    operacao('/');
}

function calcular() {
    if (operacaoPendente !== null) {
        switch (operacaoPendente) {
            case '+':
                valorAtual = valorAnterior + parseFloat(valorAtual);
                break;
            case '-':
                valorAtual = valorAnterior - parseFloat(valorAtual);
                break;
            case '*':
                valorAtual = valorAnterior * parseFloat(valorAtual);
                break;
            case '/':
                valorAtual = valorAnterior / parseFloat(valorAtual);
                break;
        }
        inputResultado.value = valorAtual;
        valorAnterior = null;
        operacaoPendente = null;
    }
}