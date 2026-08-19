document.addEventListener("DOMContentLoaded", function () {
    const dataPublicacao = document.getElementById("data-publicacao");

    // Data definida para a publicação da notícia
    const data = new Date(2026, 7, 19);

    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = data.getFullYear();

    dataPublicacao.textContent = `${dia}/${mes}/${ano}`;
});