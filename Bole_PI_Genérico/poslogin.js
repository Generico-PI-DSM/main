function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login && senha =="professor"){
        alert('Sucesso');
        location.href = "????";

    }

    else if(login && senha == "aluno"){
        alert('Sucesso');
        location.href = "aluno.html"
    }
    else if(login && senha == "adm"){
        alert('Sucesso');
        location.href = "?????"
    }
    else if(login && senha == "responsável"){
        alert('Sucesso');
        location.href = "respon.html"
    }
    else  {
        alert('Usuario ou Senha incorretos');
    }

}