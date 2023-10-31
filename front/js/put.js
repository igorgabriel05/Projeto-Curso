btnAlterar.addEventListener("click", function () {
    alterar();
})

function alterar() {
    if (!alerta2()) {
        const dadosForm = new FormData(form);
        fetch("http://localhost:8080/", {
            body: dadosForm,
            method: "PUT"
        })
            .then(reposta => reposta.json())
            .then(produto => alterarProd(produto))
            .catch(erro => console.log("Ocorreu um erro ao cadastrar produto: " + erro))
        alert("Produto alterado com sucesso!!!");
    }
}

function alterarProd(produto) {
    var ids = document.querySelectorAll(".col-id");

    for (var i = 0; i < ids.length; i++) {
        if (putId.value === ids[i].innerText) {
            var row = ids[i].closest("tr");
            row.querySelector(".col-desc").innerText = produto.descricao;
            row.querySelector(".col-preco").innerText = produto.preco;

            if (produto.tipo === 1) {
                row.querySelector(".col-tipo").innerText = "BRASILEIRAS";
            } else if (produto.tipo === 2) {
                row.querySelector(".col-tipo").innerText = "INTERNACIONAIS";
            }else if(produto.tipo === 3){
                row.querySelector(".col-tipo").innerText = "SELEÇÕES";
            }
            row.querySelector("img").src = "data:img/jpg;base64," + produto.img;
        }
    }
    form.reset();
}
