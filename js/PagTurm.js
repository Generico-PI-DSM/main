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
    var mat1 = $('#mat1').value();
    var mat2 = $('#mat2').value();
    var mat3 = $('#mat3').value();
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Matéria 1', 'Matéria 2', 'Matéria 3'],
            datasets: [{
                label: 'Acertos',
                data: [mat1, mat2, mat3],
                borderColor: 'black',
                backgroundColor: ['blue', 'green', 'yellow']
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