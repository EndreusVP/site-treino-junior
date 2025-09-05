const bntEnviar = document.querySelector("form button");
const nome = document.querySelector("#nome")
const email = document.querySelector("#email");
const mensagem = document.querySelector("#mensagem");
const statusMensagem = document.querySelector("#status-mensagem");

bntEnviar.addEventListener("click", function(e) {
    e.preventDefault();
    if (nome.value.trim() !== "" && email.value.trim() !== "" && mensagem.value.trim() !== "") {
        statusMensagem.textContent = "mensagem enviada👍"
        statusMensagem.style.color = "black"
        statusMensagem.style.backgroundColor = "white"
        statusMensagem.style.border = "solid 1px black"
        statusMensagem.style.borderRadius = "5px"
        statusMensagem.style.width = "300px"
    } else {
       statusMensagem.textContent = "preencha os campos👎"
       statusMensagem.style.color = "red"
       statusMensagem.style.color = "black"
        statusMensagem.style.backgroundColor = "white"
        statusMensagem.style.border = "solid 1px black"
        statusMensagem.style.borderRadius = "5px"
        statusMensagem.style.width = "300px"
    }
    
})