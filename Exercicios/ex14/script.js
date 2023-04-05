document.getElementById('botaoAdicionar').
addEventListener('click', adicionarElemento)

document.getElementById('botaoFinalizar').
addEventListener('click', exibirElemento)

var arrayNumeros= new Array()
var divResultado= document.getElementById('divResultado')

function adicionarElemento(){
    var numeroInput=document.getElementById('numero')
    var numeroInputNumber= Number(document.getElementById('numero').value)
    var select= document.getElementsByTagName('select')[0]

    if(numeroInputNumber== NaN || numeroInputNumber<1 || 
        numeroInputNumber>100 || arrayNumeros.includes(numeroInputNumber)){        
            alert('Valor inválido ou já encontrado na lista')
    }else{
            arrayNumeros.push(numeroInputNumber)

            var option= document.createElement('option')
            option.text= `Número ${numeroInputNumber} adicionado`
            select.appendChild(option)

            divResultado.innerHTML=""
    }
    numeroInput.value=""
    numeroInput.focus()
}

function exibirElemento(){
    
    if(arrayNumeros.length== 0){
        alert('Adicione valores antes de finalizar')
    }else{    
        var QuantidadeElementos= arrayNumeros.length
        var maiorValor= arrayNumeros[0]
        var menorValor= arrayNumeros[0]
        var soma=0
        var media=0
       
        for(i in arrayNumeros){
            if(arrayNumeros[i]>maiorValor)
                maiorValor=arrayNumeros[i]
            if(arrayNumeros[i]<menorValor)
                menorValor=arrayNumeros[i]

                soma+= arrayNumeros[i] 
        }

        media= (soma/QuantidadeElementos).toFixed(2)

        divResultado.innerHTML= ""
        divResultado.innerHTML+= `<p>Ao todo, temos ${QuantidadeElementos} 
        números cadastrados.</p> 
        <p>O maior valor cadastrado é: ${maiorValor}</p>
        <p>O menor valor cadastrado é: ${menorValor}</p>
        <p>A soma dos valores cadastrados é: ${soma}</p>
        <p>A média dos valores cadastrados é: ${media}</p>`
    }
} 