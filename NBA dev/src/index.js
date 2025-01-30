const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

btnAvancar.addEventListener("click", function () {
    if (cartaoAtual === cartoes.length - 1) return;

    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao(cartaoAtual);

    atualizarEstadoDosBotoes();
});

btnVoltar.addEventListener("click", function () {
    if (cartaoAtual === 0) return;

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao(cartaoAtual);

    atualizarEstadoDosBotoes();
});

function mostrarCartao(indice) {
    cartoes[indice].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    if (cartaoSelecionado) {
        cartaoSelecionado.classList.remove("selecionado");
    }
}

function atualizarEstadoDosBotoes() {
    btnAvancar.disabled = (cartaoAtual === cartoes.length - 1);
    btnVoltar.disabled = (cartaoAtual === 0);
}

// Inicialização dos botões
atualizarEstadoDosBotoes();
