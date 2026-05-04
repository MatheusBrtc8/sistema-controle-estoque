// carregar produtos salvos
let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

// função para adicionar produto
function adicionarProduto() {
  let nome = document.getElementById("produto").value;
  let quantidade = document.getElementById("quantidade").value;

  // validação simples
  if (nome === "" || quantidade === "") {
    alert("Preencha todos os campos!");
    return;
  }

  let produto = { nome, quantidade };

  produtos.push(produto);

  // salvar no navegador
  localStorage.setItem("produtos", JSON.stringify(produtos));

  // atualizar lista
  mostrarProdutos();

  // limpar campos
  document.getElementById("produto").value = "";
  document.getElementById("quantidade").value = "";
}

// função para mostrar produtos na tela
function mostrarProdutos() {
  let lista = document.getElementById("lista");
  lista.innerHTML = "";

  produtos.forEach((p, index) => {
    let item = document.createElement("li");
    item.textContent = p.nome + " - " + p.quantidade;

    // botão remover
    let botao = document.createElement("button");
    botao.textContent = "Remover";

    botao.onclick = function () {
      produtos.splice(index, 1);

      // atualizar armazenamento
      localStorage.setItem("produtos", JSON.stringify(produtos));

      // atualizar tela
      mostrarProdutos();
    };

    item.appendChild(botao);
    lista.appendChild(item);
  });
}

// carregar produtos ao abrir a página
mostrarProdutos();
