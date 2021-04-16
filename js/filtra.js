let campoFiltro = document.querySelector("#filtrar-tabela")

campoFiltro.addEventListener("input", function(){
    
    let pacientes = document.querySelectorAll(".paciente")

    if(this.value.length > 0){

        pacientes.forEach(paciente => {
            let nome = paciente.querySelector(".info-nome")

            let expressao = new RegExp(this.value, "i")
            
           if(!expressao.test(nome.textContent)){
                paciente.classList.add("invisivel")
            }else{
                paciente.classList.remove("invisivel")
            }

        })

    }else{
        pacientes.forEach(paciente => paciente.classList.remove("invisivel")
        );

    }
})