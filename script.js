const buttonValida = document.getElementById('buttom');
const conteudoTextarea = document.getElementById('textarea');
const exibeForms = document.getElementById('exibirform');
const inputNome = document.getElementById('input-name');
const inputSobrenome = document.getElementById('input-lastname');
const buttonEnviar = document.getElementById('submit-btn');
const inputCheckbox = document.getElementById('agreement');
const inputEmail = document.getElementById('input-email');
const inputCasa = document.getElementById('house');
const inputFamiliaFrontend = document.getElementById('frontend');
const inputFamiliaBeckend = document.getElementById('backend');
const inputFamiliaFullstack = document.getElementById('fullstack');

//const tagForms = document.getElementById('evaluation-form');
const paragrafo = document.getElementById('counter');

paragrafo.innerHTML = conteudoTextarea.maxLength;

function atualizaContador() {
  const contador = conteudoTextarea.textLength;
  paragrafo.innerHTML = conteudoTextarea.maxLength - contador;
}
conteudoTextarea.addEventListener('input', atualizaContador);

function habilitaBotaoEnviar() {
  if (inputCheckbox.checked === true) {
    buttonEnviar.disabled = false;
  } else {
    buttonEnviar.disabled = true;
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

function exibirForms(event) {
  event.preventDefault();
  let arrayInformacao = [];
  
  arrayInformacao.push('Nome:' + inputNome.value + ' ' + inputSobrenome.value);
  arrayInformacao.push('Casa:' + inputCasa.value);
  arrayInformacao.push('Email:' + inputEmail.value);
    
  exibeForms.innerHTML = arrayInformacao;
  
  
  

  // exibeForms.innerHTML = Object.value(exibe);  

/*
  if(inputFamiliaFrontend.checked === true){
    arrayInformacao.push('Família:' + inputFamiliaFrontend);
  } else if (inputFamiliaBeckend.checked === true) {
    arrayInformacao.push('Família:' + inputFamiliaBeckend);
  }else {
    arrayInformacao.push('Família:' + inputFamiliaFullstack);
  }*/
  
}
buttonEnviar.addEventListener('click', exibirForms);
