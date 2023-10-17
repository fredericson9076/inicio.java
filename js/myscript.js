//aqui vai javascript
function mudarFrase(){
    var elemento = document.getElementById("frase")
    elemento.innerHTML = "Qualquer frase"
    elemento.style.color = "red";
    elemento.style.fontSize = "25px";
    elemento.style.backgroundColor = "yellow";
    //altera o fundo da página
    document.body.style.backgroundColor = "blue";
    elemento.innerHTML = "<img src=\'img/gatofofo.jpg\' />"
}

function trocarClasse(){
    var fraseAtual = document.getElementById("frase");
    fraseAtual.className = "h1_2";
}

function trocarTexto(){
    var elemento = document.getElementById("frase")
    var nova = document.getElementById("novaFrase").value
    elemento.innerHTML = nova
}

function gebi(id){
    return document.getElementById(id)
}
