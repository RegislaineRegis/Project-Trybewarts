const buttonValida = document.getElementById('buttom');
const conteudoTextarea = document.getElementsByClassName('conteudoTextarea')

function atualizaContador() {
  const contador = conteudoTextarea.textLength;
  paragrafo.innerHTML = conteudoTextarea.maxLength - contador;
}

conteudoTextarea.addEventListener('input', atualizaContador);

const inputCheckbox = document.getElementsByClassName('inputCheckbox');
const buttonEnviar = document.getElementsByClassName('buttonEnviar');

function habilitaBotaoEnviar() {
  if (inputCheckbox.checked === true) {
    buttonEnviar.disabled === false;
  } else {
    buttonEnviar.disabled === true;
  }
}
inputCheckbox.addEventListener('click', habilitaBotaoEnviar);

function valida(event) {
  event.preventDefault();
  const inputEmail = document.getElementById('inputEmail');
  const inputSenha = document.getElementById('inputSenha');
  const email = inputEmail.value;
  const password = inputSenha.value;
  const emailValido = 'tryber@teste.com';
  const senhaValida = '123456';
  if (email === emailValido && password === senhaValida) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
buttonValida.addEventListener('click', valida);
