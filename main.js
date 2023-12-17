// document.addEventListener('DOMContentLoaded',function(){
//     document.getElementById('btn-cep').addEventListener('click', function(){
//         const xhttp = new XMLHttpRequest();
//         const cep = document.getElementById('cep').value;
//         const endpoint = `https://viacep.com.br/ws/${cep}/json`;

//         xhttp.open('GET', endpoint);
//         xhttp.send();

//     })
// })
$(document).ready(function(){
    $('#cep').mask('00000-000')
    $('#btn-cep').click(function(){
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
        const botao = $(this);
        $(this).html('<i class="material-icons">cached</i>');
        // $.ajax(endpoint).done(function(resposta){
          
        //     const logradouro = resposta.logradouro;
        //     const bairro = resposta.bairro;
        //     const cidade = resposta.localidade;
        //     const estado = resposta.uf;
        //     const endereco = `${logradouro}, ${bairro} - ${cidade} (${estado})`
            
        //     $('#endereco').val(endereco)
        // })

        fetch(endpoint).then(function(resposta){
            return resposta.json();

        }).then(function(json){
               
            const logradouro = json.logradouro;
            const bairro = json.bairro;
            const cidade = json.localidade;
            const estado = json.uf;
            const endereco = `${logradouro}, ${bairro} - ${cidade} (${estado})`
            
            $('#endereco').val(endereco)
        }).catch(function(erro){
            alert('Ocorreu um erro ao buscar o endereço,tente novamente mais tarde.')
        })
        .finally(function(){
            setTimeout(function(){
                $("#btn-cep").html("buscar");
            }, 2000)
        })
    })
    
})
