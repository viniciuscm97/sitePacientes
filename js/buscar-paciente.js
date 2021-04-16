let botaoBuscar = document.querySelector("#buscar-pacientes")

botaoBuscar.addEventListener('click', function () {
     console.log("TO FUNFANDO")
     let xhr = new XMLHttpRequest()
     xhr.open('GET','https://api-pacientes.herokuapp.com/pacientes')

     xhr.addEventListener('load', function(){
        let erroAjax = document.querySelector("#erro-ajax")
         if (xhr.status == 200) {
            erroAjax.classList.add("invisivel")

            var pacientes = JSON.parse(xhr.responseText)
            pacientes.forEach(e => adicionaPacienteTabela(e));
         }else{
             console.log(xhr.status)
             console.log(xhr.responseText)
             
             erroAjax.classList.remove("invisivel")
         }
        
     })
     xhr.send()
})