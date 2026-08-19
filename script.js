document.addEventListener("DOMContentLoaded", function () {
    const elementoData = document.getElementById("data-publicacao");

    const dataPublicacao = new Date(2026, 7, 19);

    const dia = String(dataPublicacao.getDate()).padStart(2, "0");
    const mes = String(dataPublicacao.getMonth() + 1).padStart(2, "0");
    const ano = dataPublicacao.getFullYear();

    elementoData.textContent = `${dia}/${mes}/${ano}`;
});