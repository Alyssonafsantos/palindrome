let texto = document.getElementById('text-input');
let botao = document.getElementById('check-btn');
let resposta = document.getElementById('result');
botao.addEventListener('click', () => {
    const minuscula = texto.value.toLowerCase().replace(/[^A-Za-z0-9]/g,"");
    if(texto.value === ""){
        alert('Digite algum texto para ser verificado!')
    }else if(texto.value.length === 1){
        resposta.innerText = `${texto.value} é um palindrome`;
    }else if(minuscula === [...minuscula].reverse().join("")){
         resposta.innerText = `${texto.value} é um palindrome`
    }else{
         resposta.innerText = `${texto.value} não é um palindrome`
    }
});