let buttonValida = document.getElementById('buttom');

buttonValida.addEventListener('click', valida);

function valida(event){
    event.preventDefault(); 
    let inputEmail = document.getElementById('inputEmail');
    let inputSenha = document.getElementById('inputSenha');    
    let email = inputEmail.value;
    let password = inputSenha.value;    
    let emailValido = 'tryber@teste.com'
    let senhaValida = '123456'
    if(email === emailValido && password === senhaValida){
        alert("Olá, Tryber!");
    }else{
       alert("Email ou senha inválidos.");   
    }
}


