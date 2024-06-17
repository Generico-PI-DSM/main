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

function carregaGrafico() {
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
            datasets: [{
                label: 'Vendas',
                data: [65, 59, 80, 81, 56, 55],
                borderColor: 'black',
                backgroundColor: 'blue'
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
}


function carregarFuncoes(ev) {
    $('#slide1').click(() => {
        slides('notas', 'slide1');
    });

    $('#slide2').click(() => {
        slides('chamada', 'slide2');
    });

    carregaGrafico();
}

$(document).ready(carregarFuncoes);