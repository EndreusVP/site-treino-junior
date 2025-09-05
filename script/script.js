const bntEnviar = document.querySelector("form button");
const nome = document.querySelector("#nome")
const email = document.querySelector("#email");
const mensagem = document.querySelector("#mensagem")

bntEnviar.addEventListener("click", function(e) {
    e.preventDefault();
    if (nome.value.trim() !== "" && email.value.trim() !== "" && mensagem.value.trim() !== "") {
        alert("Sua resposta foi enviada")
    } else {
       alert("Preencha os campos")
    }
    
})