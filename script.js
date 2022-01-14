const buttonValida = document.getElementById('buttom');
const conteudoTextarea = document.getElementById('textarea');
const inputNome = document.getElementById('input-name');
const inputSobrenome = document.getElementById('input-lastname');
const buttonEnviar = document.getElementById('submit-btn');
const inputCheckbox = document.getElementById('agreement');
const inputCasa = document.getElementById('house');
const conteudoForms = document.getElementById('evaluation-form');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const option5 = document.querySelector('#option5');
const option6 = document.querySelector('#option6');
const option7 = document.querySelector('#option7');
const option8 = document.querySelector('#option8');
const option9 = document.querySelector('#option9');
const option10 = document.querySelector('#option10');
const paragrafo = document.getElementById('counter');
const arrayInformacao = [];
const option = [
  option1.value,
  option2.value,
  option3.value,
  option4.value,
  option5.value,
  option6.value,
  option7.value,
  option8.value,
  option9.value,
  option10.value,
];
const materiaHofs = document.querySelector('#HoFs');
const materiaJest = document.querySelector('#Jest');
const materiaPromises = document.querySelector('#Promises');
const materiaReact = document.querySelector('#React');
const materiaSql = document.querySelector('#SQL');
const materiaPython = document.querySelector('#Python');
const materia = [
  materiaHofs.value,
  materiaJest.value,
  materiaPromises.value,
  materiaReact.value,
  materiaSql.value,
  materiaPython.value,
];

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
  const InputEmailValida = document.querySelector('#inputEmail');
  const inputSenha = document.querySelector('#inputSenha');
  const email = InputEmailValida.value;
  const password = inputSenha.value;
  const emailValido = 'tryber@teste.com';
  const senhaValido = '123456';
  if (email === emailValido && password === senhaValido) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
buttonValida.addEventListener('click', valida);

function checkMateria() {
  const materiaClass = document.getElementsByClassName('subject');
  const materiasCheck = [];
  for (let index = 0; index < materiaClass.length; index += 1) {
    if (materiaClass[index].checked === true) {
      materiasCheck.push(materia[index]);
    }
  }
  return materiasCheck.join(', ');
}

function checkFamilia() {
  const inputFamiliaFrontend = document.getElementById('frontend');
  const inputFamiliaBeckend = document.getElementById('backend');
  const inputFamiliaFullstack = document.getElementById('fullstack');
  if (inputFamiliaFrontend.checked === true) {
    arrayInformacao.push(`Família: ${inputFamiliaFrontend.value}`);
  } else if (inputFamiliaBeckend.checked === true) {
    arrayInformacao.push(`Família: ${inputFamiliaBeckend.value}`);
  } else {
    arrayInformacao.push(`Família: ${inputFamiliaFullstack.value}`);
  }
}

function checkAvaliacao() {
  const optionValidacao = [
    option1.checked,
    option2.checked,
    option3.checked,
    option4.checked,
    option5.checked,
    option6.checked,
    option7.checked,
    option8.checked,
    option9.checked,
    option10.checked,
  ];
  for (let index = 0; index < option.length; index += 1) {
    if (optionValidacao[index] === true) {
      arrayInformacao.push(`Avaliação: ${option[index]}`);
    }
  }
}

function removeFilho() {
  while (conteudoForms.firstChild) {
    conteudoForms.removeChild(conteudoForms.firstChild);
  }
}

function addElemento(array) {
  const elemento = document.querySelectorAll('.forms');
  for (let index = 0; index < elemento.length; index += 1) {
    elemento[index].innerHTML = array[index];
  }
}

function criarElemento(elemento, classe) {
  const newElemento = document.createElement(elemento);
  newElemento.className = classe;
  return newElemento;
}

function exibirForms(event) {
  event.preventDefault();
  const inputEmail = document.querySelector('#input-email');
  arrayInformacao.push(`Nome: John Doe'${inputNome.value}${inputSobrenome.value}`);
  arrayInformacao.push(`Email: ${inputEmail.value}`);
  arrayInformacao.push(`Casa: ${inputCasa.value}`);
  checkFamilia();
  arrayInformacao.push(`Matérias: ${checkMateria()}`);
  checkAvaliacao();
  arrayInformacao.push(`Observações: ${conteudoTextarea.value}`);
  removeFilho();
  for (let index = 0; index < arrayInformacao.length; index += 1) {
    const elemento = criarElemento('p', 'forms');
    conteudoForms.appendChild(elemento);
  }
  addElemento(arrayInformacao);
}
buttonEnviar.addEventListener('click', exibirForms);
