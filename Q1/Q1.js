function validarNota() {
    let nota = document.getElementById("nota").value;

    if (nota < 0 || nota > 10) {
      document.getElementById("mensagem").textContent = "Nota inválida. Tem que ser entre 0 e 10.";
      document.getElementById("nota").value = "";
    } else {
      document.getElementById("mensagem").textContent = "válida!";
    }
  }