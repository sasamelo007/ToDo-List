const deletar_conta = document.querySelector('.excluir-conta');

deletar_conta.addEventListener('click', (event)=>{
    event.preventDefault();
    var confirmacao = confirm('Deseja excluir sua conta?');
    if (confirmacao){
        fetch('php/excluir_conta.php',{
            method: 'POST'
        })
        .then((response)=>{
            if (!response.ok){
                throw new Error('Falha na requisição');
            }
            else{
                window.location.href = "login.html";
            }
        })
        .catch((erro)=>{
            console.log(erro);
        })
    }
})