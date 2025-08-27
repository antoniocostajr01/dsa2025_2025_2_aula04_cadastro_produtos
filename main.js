const produtoRepository = require("./repository/produto_repository")

function main() {
    let produto1 = {
        nome: "Arroz",
        categoria: "Alimento",
        preco: 4.5
    };
    
    let produto2 = {
        nome: "Coca-cola 2L",
        categoria: "Bebida",
        preco: 10.8
    };

    produtoRepository.inserir(produto1);
    produtoRepository.inserir(produto2);

    console.log(produtoRepository.listar());

}

main();