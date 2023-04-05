document.getElementById('botaoVerificar').
addEventListener('click', verificar)

function verificar() {
    var data= new Date()
    var ano= data.getFullYear()

    var anoFormulario= document.querySelector('input#txtAno')
    var resultado= document.querySelector('div#resultado')

    if(anoFormulario.value== "" || anoFormulario.value>ano){
        alert('Verifique os dados e tente novamente') 
    }else{
        var idade= ano- Number(anoFormulario.value)
        var sexoFormulario= document.getElementsByName('RadioSexo')
        var genero
        var img= document.createElement('img')

        if(sexoFormulario[0].checked){
            genero= 'homem'

            if(idade<=10)
                img.setAttribute('src', 'imagens/CriancaHomem.png')
            else if(idade<=22)
                img.setAttribute('src', 'imagens/JovemHomem.png')
            else if(idade<=45)
                img.setAttribute('src', 'imagens/AdultoHomem.png')
            else
                img.setAttribute('src', 'imagens/IdosoHomem.png')
            
        }else{
            genero='mulher'
            
            if(idade<=10)
                img.setAttribute('src', 'imagens/CriancaMulher.png')
            else if(idade<=22)
                img.setAttribute('src', 'imagens/JovemMulher.png')
            else if(idade<=45)
                img.setAttribute('src', 'imagens/AdultaMulher.png')
            else
                img.setAttribute('src', 'imagens/IdosaMulher.png')
        }
        
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`
        resultado.appendChild(img);
    }
}

