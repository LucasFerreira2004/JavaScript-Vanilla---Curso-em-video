document.getElementById('submit').
addEventListener('click', tabuada)

function tabuada(){
    var numeroInput= document.getElementById('numero')
    var select= document.getElementsByTagName('select')[0]

    if(numeroInput=="")
        alert('Por favor digite um número')
    else{
        var numero= Number(numeroInput.value)
 
        select.innerHTML=''
        for(i = 1; i <= 10; i++){
            var option= document.createElement('option')
            option.text= `${numero} x ${i} = ${numero*i}`
            select.appendChild(option)
        }
    }
}