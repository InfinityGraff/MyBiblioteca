const FirstFunc = {}
const First=(e)=>!FirstFunc[e]&&(FirstFunc[e]=true)

function ProcCEP(){
    const cep = document.querySelector('#Cad-CEP').value.replace(/\D/g, '')
    if (cep.length !== 8){alert('CEP inválido!');return}
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(r=>r.json()).then(data => {
        if (data.erro){alert('CEP não encontrado!');return}
        document.querySelector('#Cad-Rua').value = data.logradouro;
        document.querySelector('#Cad-Brro').value = data.bairro;
        document.querySelector('#Cad-City').value = data.localidade;
        document.querySelector('#Cad-UF').value = data.uf;
    }).catch(error=>{console.error('Erro ao buscar o CEP:',error)})
}