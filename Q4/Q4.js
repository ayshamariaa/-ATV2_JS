function calcular() {
    const populacaoA = parseInt(document.getElementById("populacao-a").value);
    const taxaA = parseFloat(document.getElementById("taxa-a").value);
    const populacaoB = parseInt(document.getElementById("populacao-b").value);
    const taxaB = parseFloat(document.getElementById("taxa-b").value);

    let anos = 0;

    while (populacaoA < populacaoB) {
      populacaoA += populacaoA * (taxaA / 100);
      populacaoB += populacaoB * (taxaB / 100);
      anos++;
    }

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Serão necessários ${anos} anos para a população do país A ultrapassar ou igualar a população do país B.`;
  }