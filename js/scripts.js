let titulo = document.querySelector(".titulo");
titulo.textContent = "Vinicius Nutricionista";

let pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(paciente => {
    retornaImc(paciente)
});


function retornaImc(paciente){
    let tdPeso = paciente.querySelector(".info-peso")
    let peso = tdPeso.textContent
    
    let tdAltura = paciente.querySelector(".info-altura")
    let altura = tdAltura.textContent
    let tdImc = paciente.querySelector(".info-imc")

    let pesoValido = validaPeso(peso)
    let alturaValido = validaAltura(altura)

    if(!pesoValido){        
        tdImc.textContent = "Peso inválido"
        paciente.classList.add("paciente-invalido")

    }
    
    if(!alturaValido){
        tdImc.textContent = "Altura inválido"
        paciente.classList.add("paciente-invalido")
    } 

    if(pesoValido && alturaValido){
        let imc = calculaImc(peso,altura)
        tdImc.textContent = imc
    }

}
function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true
    }else{
        return false
    }

}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.00){
        return true
    }else{
        return false
    }

}
function calculaImc(peso,altura){
    return (peso/(altura * altura)).toFixed(2)
}