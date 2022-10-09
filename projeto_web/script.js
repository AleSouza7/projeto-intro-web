//semana 11
const conteudo =document.getElementById("texto")
const frase = document.getElementById("paragrafo")

function acaoClicar(){
    frase.innerHTML = conteudo.value;
    conteudo.value = "";
}