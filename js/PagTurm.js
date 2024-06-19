var myChartGlobal1 = criarGrafico('myChart1', [$('#mat1').val(), $('#mat2').val(), $('#mat3').val()], ['rgb(60, 166, 174)', 'rgb(47, 123, 129)', 'rgb(176, 195, 199)']);
var myChartGlobal2 = criarGrafico('myChart2', [$('#mat1').val(), $('#mat2').val(), $('#mat3').val()], ['rgb(60, 166, 174)', 'rgb(47, 123, 129)', 'rgb(176, 195, 199)']);
var myChartGlobal3 = criarGrafico('myChart3', [$('#mat1').val(), $('#mat2').val(), $('#mat3').val()], ['rgb(60, 166, 174)', 'rgb(47, 123, 129)', 'rgb(176, 195, 199)']);
var myChartGlobal4 = criarGrafico('myChart4', [$('#mat1').val(), $('#mat2').val(), $('#mat3').val()], ['rgb(60, 166, 174)', 'rgb(47, 123, 129)', 'rgb(176, 195, 199)']);

var estados = {};

function slides(target, sl) {

    if (estados[sl] == undefined) {
        estados[sl] = 0;
    }

    $(target).slideToggle();
    var selector = 'a[data-type="' + sl + '"]';
    if (estados[sl] == 0) {
        $(selector).empty();
        $(selector).html('<a href="javascript:;" data-type="' + sl + '" class="slide-btn slide" data-target="' + target + '">></a>');
        estados[sl] = 1;
    } else if (estados[sl] == 1) {
        $(selector).empty();
        $(selector).html('<a href="javascript:;" data-type="' + sl + '" class="slide-btn slide" data-target="' + target + '">v</a>');
        estados[sl] = 0;
    }
}

function criarGrafico(idCanvas, dados, cores) {
    var ctx = document.getElementById(idCanvas);
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Matéria 1', 'Matéria 2', 'Matéria 3'],
            datasets: [{
                label: 'Acertos',
                data: dados,
                borderColor: 'black',
                backgroundColor: cores
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: true,
            scales: {
                x: {
                    display: false
                },
                y: {
                    display: false
                }
            }
        }
    });
    return myChart;
}

function atualizarGrafico(chart, dadosValidados) {
    chart.data.datasets[0].data = dadosValidados;
    chart.update();
}

function validarDadosGrafico(dados) {
    var soma = dados.reduce(function (soma, valor) {
        return soma + parseFloat(valor);
    }, 0);

    if (soma > 10) {
        var fatorDeReducao = 10 / soma;
        return dados.map(function (valor) {
            return valor * fatorDeReducao;
        });
    } else {
        return dados;
    }
}

function fechaSlideAluno() {
    $('.slide-btn-aluno').each(function () {
        var target = $(this).data('target');
        $(target).slideUp();
    });
};


function carregarFuncoes(ev) {

    $('.slide-btn').click(function () {
        var target = $(this).data('target');
        var type = $(this).data('type');
        slides(target, type);
    });


    $('.slide-btn-aluno').click(function () {
        var target = $(this).data('target');
        $(target).slideToggle();
    });

    fechaSlideAluno();

    $('.attGrf').each(function () {
        let form = $(this);
        let chartId = form.data('chart');
        let chart = window[chartId];

        form.find('input[type="number"]').on('change', function () {
            var novosDados = form.find('input[type="number"]').map(function () {
                return $(this).val();
            }).get();
            var dadosValidados = validarDadosGrafico(novosDados, 10);
            atualizarGrafico(chart, dadosValidados);
        });
    });

    var urlParams = new URLSearchParams(window.location.search);
    var nomeTurma = urlParams.get('nomeTurma');
    if (nomeTurma) {
        $('.row h1 span').text(nomeTurma);
    }
}

$(document).ready(carregarFuncoes);