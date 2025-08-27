let listaProdutos = [];
let autoIncrement = 1;

function listar() {
    return listaProdutos;
}

function inserir(produto) {
    produto.id = autoIncrement++;
    listaProdutos.push(produto);
}

module.exports = {
    listar,
    inserir
}