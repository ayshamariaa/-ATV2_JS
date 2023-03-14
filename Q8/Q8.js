let numeros = [];
for (let i = 1; i <= 5; i++) {
  let numero = Number(prompt(`Digite o número ${i}:`));
  numeros.push(numero);
}

let soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}

let media = soma / numeros.length;

console.log(`A soma dos números é ${soma}`);
console.log(`A média dos números é ${media}`);