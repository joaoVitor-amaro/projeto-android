function btn_enviar() {
    var username = window.document.getElementById('username').value 
    var email = window.document.getElementById("email_user").value
    var duvida_user = window.document.getElementById("duvida_user").value 
    var msg_erro = window.document.getElementById("msg_erro")
    var dado_enviado = window.document.getElementById("dados_enviados")
    if (username == "" || email == "" || duvida_user == "") {
        msg_erro.innerHTML = "<p>Erro! Preencha os dados</p>"
    } else{
        msg_erro.style.display = "none"
        dado_enviado.innerHTML = "<p>Dados Enviados</p>"
    }
}