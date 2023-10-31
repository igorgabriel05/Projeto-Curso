function getListar() {
    fetch("http://localhost:8080/")
        .then(resposta => resposta.json())
        .then(produtos => listar(produtos))
        .catch(erro => console.log("Ocorreu um erro ao listar: " + erro))
}

function listar(produtos) {
    produtos.forEach(p => {
        if (p.tipo === 1) {
            document.getElementById("brasileiras").appendChild(inserir(p));
        } else if (p.tipo === 2) {
            document.getElementById("internacional").appendChild(inserir(p));
        } else if (p.tipo === 3) {
            document.getElementById("selecoes").appendChild(inserir(p));
        }
    });
}

function inserir(p) {
    var divCamisa = document.createElement("div");
    divCamisa.classList.add("camisa");

    var img = document.createElement("img");
    img.src = 'data:image/jpg;base64,' + p.img;
    img.alt = p.descricao;
    img.classList.add("img-camisa");
    divCamisa.appendChild(img);

    var divLan = document.createElement("div");
    divLan.classList.add("lan");
    divCamisa.appendChild(divLan);

    var pLan = document.createElement("p");
    pLan.classList.add("lancamento");
    pLan.innerText = "Lançamento";
    divLan.appendChild(pLan);

    var pPerson = document.createElement("p");
    pPerson.classList.add("personalize");
    pPerson.innerText = "Personalize";
    divLan.appendChild(pPerson);

    var pDesc = document.createElement("p");
    pDesc.classList.add("p-descricao");
    pDesc.innerText = p.descricao;
    divCamisa.appendChild(pDesc);

    var pLinha = document.createElement("p");
    pLinha.classList.add("p-linha");
    pLinha.innerHTML = 'De: <s>' + valorFormatado(p.preco) + '</s></p>';
    divCamisa.appendChild(pLinha);

    var pPreco = document.createElement("p");
    pPreco.classList.add("p-preco");
    pPreco.innerText = valorFormatado(p.preco);
    divCamisa.appendChild(pPreco);

    var pDescont = document.createElement("p");
    pDescont.classList.add("p-desconto");
    pDescont.innerHTML = valorFormatado(p.preco) + ' à vista com desconto via PIX';
    divCamisa.appendChild(pDescont);

    return divCamisa;
}

getListar();

function valorFormatado(valor) {
    return (valor.toLocaleString("pt-br", {
        style: "currency",
        currency: "brl"
    }))
}