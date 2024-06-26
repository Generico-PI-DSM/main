function resultado_media() {
    media = parseFloat(document.querySelector('.entrada').value)
    if (media < 6) {
        document.querySelector('.res').innerHTML = 'Atenção para a média baixa! Precisa estudar mais.'
    }

    else if( media == 10){
        document.querySelector('.res').innerHTML ='Excelelente 10! Continue assim!'

    }
     else {
        document.querySelector('.res').innerHTML = 'Parabéns! Média de acordo.'
    }
    
}