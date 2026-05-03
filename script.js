function adicionarProduto() {
  let nome = document.getElementById("produto").value;
  let quantidade = document.getElementById("quantidade").value;

  let lista = document.getElementById("lista");

  let item = document.createElement("li");
  item.textContent = nome + " - " + quantidade;

  lista.appendChild(item);
}
