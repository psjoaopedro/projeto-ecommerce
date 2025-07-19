// Objetivo 1 - quando clicar no botão de adicionar ao carrinho, adicionar o produto no LocalStorage e atualizar o html do carrinho.
//     passo 1 - pegar os botões de adicionar ao carrinho do html.

const botoesAdicionarAoCarrinho = document.querySelectorAll('.adicionar-ao-carrinho');

// passo 2 - adicionar um evento de escuta nesses botões para quando clicar disparar uma ação.

botoesAdicionarAoCarrinho.forEach(botao => {
    botao.addEventListener("click", (evento) => {
        console.log("Botão de adicionar ao carrinho clicado!");
    });
});

