const dataAtual = new Date();
const dataPostagem = new Date('2023-05-12T00:00');

const timeAtual = dataAtual.getTime();
const timePostagem = dataPostagem.getTime();

const diferenca = timeAtual - timePostagem;

const segundos = diferenca / 1000;
const minutos = segundos / 60;
const horas = minutos / 60;

// console.log(horas.toFixed(2));

console.log( dataAtual.getTime() );
console.log( dataAtual.getTimezoneOffset() );
console.log( dataAtual.valueOf() );
