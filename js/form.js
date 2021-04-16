var botaoAdicionar = document.querySelector('#adicionar-paciente')


botaoAdicionar.addEventListener('click',function(event){
    event.preventDefault()

    let form = document.querySelector('#form-adiciona')
    // extraindo informações do paciente do form
    const paciente = obtemPacienteDoFormulario(form)

    // cria tr e td do paciente
    let erros = validaPaciente(paciente)

    if(erros.length >0){
        exibeMensagensDeErro(erros)
        return        
    }
    
    // adicionar paciente na tabela
    adicionaPacienteTabela(paciente)
    form.reset()

    document.querySelector("#mensagens-erro").innerHTML = ""

})


function obtemPacienteDoFormulario(form){
    const paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value,form.altura.value)

    }
    return paciente
}

function montaTr(paciente){

    let pacienteTr = document.createElement("tr")
    pacienteTr.classList.add('paciente')
    
    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'))
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'))
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'))
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'))
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'))

    return pacienteTr
}

function montaTd(dado,classe){
    let td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)
    return td
}

function validaPaciente(paciente){

    let erros = []

    if(paciente.nome.length == 0) erros.push("O nome não pode ser em branco")
   
    if(paciente.gordura.length == 0) erros.push("A gordura não pode ser em branco")
   
    if(paciente.peso.length == 0) erros.push("O peso não pode ser em branco")
   
    if(paciente.altura.length == 0) erros.push("A Altura não pode ser em branco")
    
    if(!validaPeso(paciente.peso)) erros.push( "O Peso é inválido")

    if(!validaAltura(paciente.altura)) erros.push("A Altura é inválida")
    
    return erros
}

function exibeMensagensDeErro(erros){
    let ulErro = document.querySelector("#mensagens-erro")
    console.log(ulErro)
    ulErro.innerHTML = ""
        erros.forEach(erro => {
            let li = document.createElement('li')
            li.textContent = erro
            ulErro.appendChild(li)
        })
}

function adicionaPacienteTabela(paciente){
        let pacienteTr = montaTr(paciente)
        let tabela = document.querySelector("#tabela-pacientes")
        tabela.appendChild(pacienteTr)
}