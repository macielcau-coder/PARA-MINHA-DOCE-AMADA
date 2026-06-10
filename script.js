let pages = document.querySelectorAll(".page");
let currentPage = 0;

function nextPage() {

    pages[currentPage].classList.remove("active");

    currentPage++;

    if (currentPage < pages.length) {
        pages[currentPage].classList.add("active");
    }

}

function atualizarContador() {

    const tempo = document.getElementById("tempo");

    if (!tempo) return;

    const inicio = new Date("2024-07-20T00:00:00");
    const agora = new Date();

    const diferenca = agora - inicio;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    tempo.innerHTML =
        "❤️<br><br>" +
        dias + " dias<br>" +
        horas + " horas<br>" +
        minutos + " minutos<br>" +
        segundos + " segundos";
}

function mostrarResposta() {

    const resposta = document.getElementById("resposta");
    const botao = document.getElementById("btnContinuar");

    if (resposta) resposta.style.display = "block";
    if (botao) botao.style.display = "inline-block";
}

setInterval(atualizarContador, 1000);
atualizarContador();
function criarCoracao() {

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random() * window.innerWidth + "px";

    heart.style.animationDuration =
        (6 + Math.random() * 6) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    },12000);

}

setInterval(criarCoracao, 800);