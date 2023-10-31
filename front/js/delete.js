btnRemover.addEventListener("click", function () {
    remover();
})

function remover() {
    if (!alerta2()) {
        fetch("http://localhost:8080/" + putId.value, {
            headers: {
                'ContentType': 'application/json'
            },
            method: "DELETE"
        })
        removerProd();
        alert("Produto removido com sucesso!!");
    }
}

function removerProd(){
    var ids = document.querySelectorAll(".col-id");

    for(var i = 0; i < ids.length; i++){
        if(putId.value === ids[i].innerText){
            var row = ids[i].closest("tr");
            row.remove();
        }
    }
}