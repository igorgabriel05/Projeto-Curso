function limpar(){
    putId.value      = "";
    putImg.value     = "";
    putDesc.value    = "";
    putPreco.value   = "";
    putType1.checked = false;
    putType2.checked = false;
    putType3.checked = false;
}

let form = document.querySelector("form");

function mostrarBtn(){
    if(mostrar){
        btnCadastrar.classList.toggle("visually-hidden");
        btnAlterar.classList.toggle("visually-hidden");
        btnRemover.classList.toggle("visually-hidden");
        btnCancelar.classList.toggle("visually-hidden");
    }
}

btnCancelar.addEventListener("click", function(){
    mostrar = true;
    mostrarBtn();
})

function alerta(){
    if(putImg.files.length === 0){
        alert("A imagem é obrigatoria!!");
        return true;
    }else if(putDesc.value.trim() === ""){
        alert("A descrição é obrigatoria!!");
        return true;
    }else if(putPreco.value.trim() === ""){
        alert("O preço é obrigatorio!!");
        return true;
    }else if(putType1.checked === false && putType2.checked === false && putType3.checked === false){
        alert("O tipo é obrigatorio!!");
        return true;
    }
}

function alerta2(){
    if(putDesc.value.trim() === ""){
        alert("A descrição é obrigatoria!!");
        return true;
    }else if(putPreco.value.trim() === ""){
        alert("O preço é obrigatorio!!");
        return true;
    }else if(putType1.checked === false && putType2.checked === false && putType3.checked === false){
        alert("O tipo é obrigatorio!!");
        return true;
    }
}