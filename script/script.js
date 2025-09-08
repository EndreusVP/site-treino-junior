const bntEnviar = document.querySelector("form button");
const nome = document.querySelector("#nome")
const email = document.querySelector("#email");
const mensagem = document.querySelector("#mensagem");
const statusMensagem = document.querySelector("#status-mensagem");

const imgProjeto = document.querySelector("#img-projeto");
const imgProjeto2 = document.querySelector("#img-projeto2");
const imgProjeto3 = document.querySelector("#img-projeto3");

const tituloProjeto = document.querySelector("#titulo-projeto");
const tituloProjeto2 = document.querySelector("#titulo-projeto2");
const tituloProjeto3 = document.querySelector("#titulo-projeto3");

const informacaoTexto = document.querySelector("#informacao-texto");
const informacaoTexto2 = document.querySelector("#informacao-texto2");
const informacaoTexto3 = document.querySelector("#informacao-texto3");

const lerMais = document.querySelector("#ler-mais");
const lerMais2 = document.querySelector("#ler-mais2");
const lerMais3 = document.querySelector("#ler-mais3");

const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const front = document.querySelector("#front");
const back = document.querySelector("#back");

const lermais = () => {

    if (informacaoTexto.style.opacity == "0") {
    
        lerMais.textContent = "ler menos"
        informacaoTexto.style.transition = "2s ease"
        informacaoTexto.style.opacity = "1"

    } else {    

        lerMais.textContent = "ler mais"
        informacaoTexto.style.transition = "2s ease"
        informacaoTexto.style.opacity = "0"

    }
}

const lermais2 = () => {

    if (informacaoTexto2.style.opacity == "0") {
    
        lerMais2.textContent = "ler menos"
        informacaoTexto2.style.transition = "2s ease"
        informacaoTexto2.style.opacity = "1"

    } else {    

        lerMais2.textContent = "ler mais"
        informacaoTexto2.style.transition = "2s ease"
        informacaoTexto2.style.opacity = "0"

    }

}

const lermais3 = () => {

    if (informacaoTexto3.style.opacity == "0") {
    
        lerMais3.textContent = "ler menos"
        informacaoTexto3.style.transition = "2s ease"
        informacaoTexto3.style.opacity = "1"

    } else {    

        lerMais3.textContent = "ler mais"
        informacaoTexto3.style.transition = "2s ease"
        informacaoTexto3.style.opacity = "0"

    }
}



bntEnviar.addEventListener("click", function (e) {
    e.preventDefault();

     const emailValido = email.checkValidity(); // verifica se o campo do email eh valido 

    if (nome.value.trim() !== "" && email.value.trim() !== "" && mensagem.value.trim() !== "" && emailValido) {
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
        statusMensagem.textContent = "preencha os campos corretamente👎"
        statusMensagem.style.color = "black"
        statusMensagem.style.backgroundColor = "white"
        statusMensagem.style.border = "solid 1px black"
        statusMensagem.style.borderRadius = "5px"
        statusMensagem.style.width = "300px";
        nome.value = "";
        email.value = "";
        mensagem.value = "";
    }
})

front.addEventListener("click", function (e) {
    tituloProjeto.textContent = "Projeto FrontEnd 1"
    imgProjeto.src = "../img/macacofront.png"
    tituloProjeto2.textContent = "Projeto FrontEnd 2"
    imgProjeto2.src = "../img/macacofront.png"
    tituloProjeto3.textContent = "Projeto FrontEnd 3"
    imgProjeto3.src = "../img/macacofront.png"

    informacaoTexto.style.opacity = "0";
    informacaoTexto2.style.opacity = "0";
    informacaoTexto3.style.opacity = "0";
});

back.addEventListener("click", function (e) {
    tituloProjeto.textContent = "Projeto BackEnd 1"
    imgProjeto.src = "../img/macacobackend.png"
    tituloProjeto2.textContent = "Projeto BackEnd 2"
    imgProjeto2.src = "../img/macacobackend.png"
    tituloProjeto3.textContent = "Projeto BackEnd 3"
    imgProjeto3.src = "../img/macacobackend.png"

    informacaoTexto.style.opacity = "0";
    informacaoTexto2.style.opacity = "0";
    informacaoTexto3.style.opacity = "0";
});

