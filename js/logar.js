const meu_form = document.querySelector('.card');

meu_form.addEventListener('submit', event=>{
    event.preventDefault();
    let form_data = new FormData(meu_form);
    
    fetch('php/logar.php', {
        method: 'POST',
        body: form_data
    })
    .then(response =>{
        if(!response.ok){
            throw new Error('Falha na requisição');
        }
        return response.text();
    })
    .then(data =>{
        let alerta_nome = document.querySelector('.a_nome');
        let alerta_senha = document.querySelector('.a_senha');
        switch(data){
            case "Nome inválido":
                alerta_nome.style.height = '1rem';
                setTimeout(()=>{
                    alerta_nome.style.height = '0rem';
                }, 3000);
                break;
            case "Senha inválida":
                alerta_senha.style.height = '1rem';
                setTimeout(()=>{
                    alerta_senha.style.height = '0rem';
                }, 3000);
                break;
            case "Nome e senha inválidos":
                alerta_nome.style.height = '1rem';
                alerta_senha.style.height = '1rem';
                setTimeout(()=>{
                    alerta_nome.style.height = '0rem';
                    alerta_senha.style.height = '0rem';
                }, 3000);
                break;
            default:
                window.location.href = "http://localhost/quick_task_v2/teste_login.php";
                break;
        }
    })
    .catch(error =>{
        console.log(error);
    })

})