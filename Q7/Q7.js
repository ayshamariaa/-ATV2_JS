let numeros = [];

for (let i = 1; i <= 5; i++) {
  let numero = Number(prompt(`Digite o número ${i}:`));
  numeros.push(numero);
}

let maior = numeros[0];
for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maior) {
    maior = numeros[i];
  }
}

console