const buttonValida = document.getElementById("buttom");
const inputCheckbox = document.getElementById("agreement");
const buttonEnviar = document.getElementById("submit-btn");


function habilitaBotaoEnviar (){
    if(inputCheckbox.checked === true){
        buttonEnviar.disabled = false;
    }else{
        buttonEnviar.disabled = true;
    }
}
inputCheckbox.addEventListener('click', habilitaBotaoEnviar);

function valida(event) {
    event.preventDefault(); 
    let inputEmail = document.getElementById("inputEmail");
    let inputSenha = document.getElementById("inputSenha");    
    let email = inputEmail.value;
    let password = inputSenha.value;    
    let emailValido = "tryber@teste.com";
    let senhaValida = "123456";
    if(email === emailValido && password === senhaValida) {
        alert("Olá, Tryber!");
    } else {
       alert("Email ou senha inválidos.");   
    }
}
buttonValida.addEventListener('click', valida);