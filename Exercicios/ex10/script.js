function carregar() {
    var divMsg= document.getElementById('msg')
    var imgImagem= document.getElementById('imagem')
    
    var data= new Date()
    var hora= data.getHours()
    
    divMsg.innerHTML= `Agora são ${hora} horas`

    if (hora>=0 && hora<12) {
        imgImagem.src= 'imagens/manha.png'
        document.body.style.background= 'rgb(255, 195, 49)'
    }else if(hora>=12 && hora<18){
        imgImagem.src= 'imagens/tarde.png'
        document.body.style.background= 'rgb(151, 96, 99)'
    }else{
        imgImagem.src= 'imagens/noite.png'
        document.body.style.background= 'rgb(9, 12, 29)'
    }
}