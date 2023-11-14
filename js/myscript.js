function trocarFrase(){
    var fraseAtual=document.getElementById("frase");
    fraseAtual.innerHTML= "Qualquer frase!";
    fraseAtual.style.color= "lightblue";
    fraseAtual.style.fontSize= "25px";
    fraseAtual.style.backgroundColor= "lightpink";
    document.body.style.backgroundColor= "purple";
    fraseAtual.innerHTML= "<img src=\'img/miamiheat.png\'/>";
}

function trocarClasse(){
    var fraseAtual=document.getElementById("frase");
    fraseAtual.className="h1_2";
}

function gebi(id){
    return document.getElementById(id)
}