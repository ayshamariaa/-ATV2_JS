let numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));
let numero2 = parseInt(prompt("Digite o segundo número inteiro:"));

let menor, maior;
if (numero1 < numero2) {
  menor = numero1;
  maior = numero2;
} else {
  menor = numero2;
  maior = numero1;
}

for (let i = menor; i <= maior; i++) {
  console.log(i);
}