var estados = {};

function slides(id, sl) {
    if (estados[sl] == undefined) {
        estados[sl] = 0;
    }

    $('#' + id).slideToggle();
    if (estados[sl] == 0) {
        $('#' + sl).empty();
        $('#' + sl).html('<a href="javascript:;" id="' + sl + '">></a>');
        estados[sl] = 1;
    } else if (estados[sl] == 1) {
        $('#' + sl).empty();
        $('#' + sl).html('<a href="javascript:;" id="' + sl + '">v</a>');
        estados[sl] = 0;
    }
}

function adicionarNovoProfessor() {
    var nomeNovoProf = $('#novoProfNome').val();
    var novoProf = $('<a>').addClass('col-3 text-center profLink').attr('href', 'PagProf.html?nome=' + encodeURIComponent(nomeNovoProf)).text(nomeNovoProf);
    $('#profsExist').append(novoProf);
}

function verificaValidade() {
    $('#adicionarProf').click(function (event) {
        var form = $('.needs-validation')[0];
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            adicionarNovoProfessor();
        }
        form.classList.add('was-validated');
        carregaOptions();
    });

    $('.needs-validation').click(function (event) {
        var form = $(this)[0];
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
    });
}

function carregaOptions() {
    var opcoes = $('.profLink');
    var select = $('#itemForm');

    select.empty();
    select.append('<option value="prof">Selecione o professor da turma</option>');

    opcoes.each(function() {
        var texto = $(this).text();
        var valor = texto.toLowerCase().replace(/\s/g, '_');

        var option = $('<option>', {
            value: valor,
            text: texto
        });
        select.append(option);
    });
}


function carregarFuncoes(ev) {
    $('#slide1').click(() => {
        slides('nota', 'slide1');
    });

    $('#slide2').click(() => {
        slides('profs', 'slide2');
    });

    $('#slide3').click(() => {
        slides('novaTurma', 'slide3');
    });

    verificaValidade();
    carregaOptions();
}

$(document).ready(carregarFuncoes);