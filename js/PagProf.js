var aux = 0;

function slides() {
    $('#salas').slideToggle();
    if (aux == 0) {
        $('#slide').empty();
        $('#slide').html('<a href="javascript:;" id="slide">></a>');
        aux = 1;
    } else if (aux == 1) {
        $('#slide').empty();
        $('#slide').html('<a href="javascript:;" id="slide">v</a>');
        aux = 0;
    }
}

function carregarFuncoes(ev) {
    $('#slide').on('click', slides);

    var urlParams = new URLSearchParams(window.location.search);
    var nomeProf = urlParams.get('nome');
    if (nomeProf) {
        $('.row.py-5 h1 span').text(nomeProf);
    }

    $('.salaLink').on('click', function(event) {
        var nomeTurma = $(this).text();
        $(this).attr('href', 'PagTurm.html?nomeTurma=' + encodeURIComponent(nomeTurma));
    });
}

$(document).ready(carregarFuncoes);