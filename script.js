function adicionarProduto() {
  let nome = document.getElementById("produto").value;
  let quantidade = document.getElementById("quantidade").value;

  let lista = document.getElementById("lista");

  let item = document.createElement("li");
item.textContent = nome + " - " + quantidade;

// botão remover
let botao = document.createElement("button");
botao.textContent = "Remover";

botao.onclick = function() {
  lista.removeChild(item);
};

item.appendChild(botao);
  lista.appendChild(item);

  // limpar campos
  document.getElementById("produto").value = "";
  document.getElementById("quantidade").value = "";
}
