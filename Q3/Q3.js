const form = document.querySelector("form");
const nome = form.querySelector("#nome");
const idade = form.querySelector("#idade");
const salario = form.querySelector("#salario");
const sexo = form.querySelector("#sexo");
const estadoCivil = form.querySelector("#estadoCivil");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  if (nome.checkValidity() && idade.checkValidity() && salario.checkValidity() && sexo.checkValidity() && estadoCivil.checkValidity()) {
    console.log("Nome: " + nome.value);
    console.log("Idade: " + idade.value);
    console.log("Salário: " + salario.value);
    console.log("Sexo: " + sexo.value);
    console.log("Estado Civil: " + estadoCivil.value);
  } else {
    alert("Preencha todos os campos corretamente.");
  }
});