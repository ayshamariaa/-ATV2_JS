const form = document.querySelector("#form");
const errorMessage = document.querySelector("#error-message");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const username = form.elements.username.value;
  const password = form.elements.password.value;

  if (username === password) {
    errorMessage.textContent = alert("A senha não pode ser igual ao nome de usuário. Tente novamente.");
  } else {
    errorMessage.textContent = "";
    alert("Nome de usuário e senha aceitos.");
  }
});