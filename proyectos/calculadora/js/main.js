const botonNumeros = document.getElementsByName('data-number');
const botonOpera = document.getElementsByName('data-opera');
const botonIgual = document.getElementsByName('data-igual')[0];
const botonDelete = document.getElementsByName('data-delete')[0];
var resultado = document.getElementById('resultado');
var opeActual = '';
var opeAnterior = '';
var operacion = undefined;

botonNumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText)
    })
});

botonOpera.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectOperacion(boton.innerText)
    })
});

botonIgual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
});

botonDelete.addEventListener('click', function(){
    clear();
    actualizarDisplay();
});

function selectOperacion(op){
    if(opeActual == '') return;
    if(opeActual !== ''){
        calcular()
    }
    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual = '';
};

function calcular(){
    var calculo;
    const anterior = parseFloat(opeActual);
    const actual = parseFloat(opeAnterior);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case '+': 
            calculo = anterior + actual;
            break;
        case '-': 
            calculo = anterior - actual;
            break;
        case '*': 
            calculo = anterior * actual;
            break;
        case '/': 
            calculo = anterior / actual;
            break;
        default:
            return;
    }
    opeActual = calculo;
    operacion = undefined;
    opeAnterior = '';
};

function agregarNumero(num){
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay(); 
};

function clear(){
    opeActual = '';
    opeAnterior = '';
    operacion = undefined;
};

function actualizarDisplay() {
    resultado.value = opeActual;
};

clear();