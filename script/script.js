const bntEnviar = document.querySelector("form button");
const nome = document.querySelector("#nome")
const email = document.querySelector("#email");
const mensagem = document.querySelector("#mensagem");
const statusMensagem = document.querySelector("#status-mensagem");
const imgProjeto = document.querySelector("#img-projeto");
const imgProjeto2 = document.querySelector("#img-projeto2");
const imgProjeto3= document.querySelector("#img-projeto3");
const tituloProjeto = document.querySelector("#titulo-projeto");
const tituloProjeto2 = document.querySelector("#titulo-projeto2");
const tituloProjeto3 = document.querySelector("#titulo-projeto3");
const front = document.querySelector("#front");
const back = document.querySelector("#back")

bntEnviar.addEventListener("click", function (e) {
    e.preventDefault();
    if (nome.value.trim() !== "" && email.value.trim() !== "" && mensagem.value.trim() !== "") {
        statusMensagem.textContent = "mensagem enviada👍"
        statusMensagem.style.color = "black"
        statusMensagem.style.backgroundColor = "white"
        statusMensagem.style.border = "solid 1px black"
        statusMensagem.style.borderRadius = "5px"
        statusMensagem.style.width = "300px"
        nome.value = "";
        email.value = "";
        mensagem.value = "";
    } else {
        statusMensagem.textContent = "preencha os campos👎"
        statusMensagem.style.color = "black"
        statusMensagem.style.backgroundColor = "white"
        statusMensagem.style.border = "solid 1px black"
        statusMensagem.style.borderRadius = "5px"
        statusMensagem.style.width = "300px"
    }
})

front.addEventListener("click", function (e) {
    tituloProjeto.textContent = "Projeto FrontEnd 1"
    imgProjeto.src = "../img/macaco.png"
    tituloProjeto2.textContent = "Projeto FrontEnd 2"
    imgProjeto2.src = "../img/macaco.png"
    tituloProjeto3.textContent = "Projeto FrontEnd 3"
    imgProjeto3.src = "../img/macaco.png"
});

back.addEventListener("click", function (e) {
    tituloProjeto.textContent = "Projeto BackEnd 1"
    imgProjeto.src = "../img/macacobackend.png"
    tituloProjeto2.textContent = "Projeto BackEnd 2"
    imgProjeto2.src = "../img/macacobackend.png"
    tituloProjeto3.textContent = "Projeto BackEnd 3"
    imgProjeto3.src = "../img/macacobackend.png"

})

