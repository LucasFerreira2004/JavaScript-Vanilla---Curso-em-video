document.querySelector('input#submit').
addEventListener('click', contagem)

function contagem(){
    var inicioInput= document.querySelector('input#inicio')
    var fimInput= document.querySelector('input#fim')
    var passoInput= document.querySelector('input#passo')
    var respostaDiv= document.querySelector('div#resposta')

    if(inicioInput.value== "" || fimInput.value== "" || passoInput.value== "")
        respostaDiv.innerHTML= '<p>Impossível contar. Faltam dados</p>'
    else{
        if(Number(passoInput.value==0)){
            alert('Passo inválido! Considerando PASSO 1')
            passoInput=1
        }
        respostaDiv.innerHTML= `Contando: <br>`

        var inicio= Number(inicioInput.value)
        var fim= Number(fimInput.value)
        var passo= Number(passoInput.value)
        
        if(inicio < fim){
            for(var i= inicio; i< fim; i+= passo){
                respostaDiv.innerHTML+= ` ${i} \u{1F449}`
            }
            respostaDiv.innerHTML+= `\u{1F3c1}`
        }else{
            for(var i= inicio; i> fim; i-=passo){
                respostaDiv.innerHTML+= ` ${i} \u{1F449}`
            }
            respostaDiv.innerHTML+= `\u{1F3c1}`

        }
    }
    
    

  
}