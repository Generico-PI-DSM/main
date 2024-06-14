var aux = 0;

function slides(){
    $('#salas').slideToggle();
    if (aux == 0){
        $('#slide').empty();
        $('#slide').html('<a href="javascript:;" id="slide">></a>');
        aux = 1;
    } else if (aux == 1){
        $('#slide').empty();
        $('#slide').html('<a href="javascript:;" id="slide">v</a>');
        aux = 0;
    }
}

function carregarFuncoes(ev){
    $('#slide').on('click', slides);
}

$(document).ready(carregarFuncoes);