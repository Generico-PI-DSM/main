function logar(){
    var login = $('#user').val();
    var senha = $('#senha').val();

    if(login && senha === "professor"){
        alert('Sucesso');
        window.open("PagProf.html");
    }
    else if(login && senha === "aluno"){
        alert('Sucesso');
        window.open("aluno.html");
    }
    else if(login && senha === "adm"){
        alert('Sucesso');
        window.open("PagInst.html");
    }
    else if(login && senha === "responsável"){
        alert('Sucesso');
        window.open("respon.html");
    }
    else  {
        alert('Usuario ou Senha incorretos');
    }

}

function carregarFuncoes(ev){
    $('#botao').on('click', logar);
}


$(document).ready(carregarFuncoes);