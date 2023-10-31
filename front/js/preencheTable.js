function preencherTabela(produtos) {
    produtos.forEach(produto => {
        inserirProdutos(produto);
    });
}

fetch("http://localhost:8080/")
    .then(resposta => resposta.json())
    .then(produtos => preencherTabela(produtos))
    .catch(erro => console.log("Ocorreu um erro ao listar: " + erro))

function inserirProdutos(produto) {
    var newRow = document.createElement("tr");
    var ColumnId = document.createElement("td");
    var ColumnImg = document.createElement("td");
    var ColumnDesc = document.createElement("td");
    var ColumnPreco = document.createElement("td");
    var ColumnType = document.createElement("td");
    var ColumnSelect = document.createElement("td");

    ColumnId.classList.add("col-id");
    ColumnId.innerText = produto.id;

    ColumnImg.classList.add("col-img");
    var img = document.createElement("img");
    img.src = "data:img/jpg;base64," + produto.img;
    ColumnImg.appendChild(img);

    ColumnDesc.classList.add("col-desc");
    ColumnDesc.innerText = produto.descricao;

    ColumnPreco.classList.add("col-preco");
    ColumnPreco.innerText = produto.preco;

    ColumnType.classList.add("tipo");
    if (produto.tipo === 1) {
        ColumnType.innerText = "BRASILEIRAS";
    } else if (produto.tipo === 2) {
        ColumnType.innerText = "INTERNACIONAIS";
    } else if(produto.tipo === 3){
        ColumnType.innerText = "SELEÇÕES";
    }

    var btn = document.createElement("button");
    btn.classList.add("btn", "btn-success");
    btn.innerText = "Selecionar";
    ColumnSelect.appendChild(btn);
    selecionar(btn);


    newRow.appendChild(ColumnId);
    newRow.appendChild(ColumnImg);
    newRow.appendChild(ColumnDesc);
    newRow.appendChild(ColumnPreco);
    newRow.appendChild(ColumnType);
    newRow.appendChild(ColumnSelect);

    document.querySelector("tbody").appendChild(newRow);
}