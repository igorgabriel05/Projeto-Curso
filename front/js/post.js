document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    if (!alerta()) {
        const dadosForm = new FormData(this);
        fetch("http://localhost:8080/", {
            body: dadosForm,
            method: "POST"
        })
            .then(reposta => reposta.json())
            .then(produto => inserirProdutos(produto))
            .catch(erro => console.log("Ocorreu um erro ao cadastrar produto: " + erro))
        alert("Produto cadastrado com sucesso!!!");
        form.reset();
    }
});
