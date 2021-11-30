// Hamburguer Script

document.querySelector(".hamburguer").addEventListener("click" , () => 
    document.querySelector(".container").classList.toggle("show-menu")
);



// Calculo do orçamento

// cada página custa 100 reais
//script custa 10% sobre cada página
// layout custa 500 reais para fazer
// prazo 10% por semana por urgência - 10 semanas sem taxa



document.querySelector("#qtde").addEventListener("change", atualizarPreco)

document.querySelector("#js").addEventListener("change", atualizarPreco)

document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)

document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)

document.querySelector("#prazo").addEventListener("change", function () {

    const prazo = document.querySelector("#prazo").value

    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semana(s)`
    atualizarPreco()
})






function atualizarPreco(){
    const qtde = document.querySelector("#qtde").value 
    const temJS = document.querySelector("#js").checked
    const incluiLayout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value
    


    let preco = qtde*100;

    if(temJS) preco*=1.1
        // preco = preco + (preco * 10/100);
        // preco = preco*1.1
      
        
    if(incluiLayout) preco += 500
        // preco = preco + 500
    
    let taxaUrgencia = 1 - prazo*0.1

    preco *= 1 + taxaUrgencia
    
    document.querySelector("#preco").innerHTML = `Total: R$ ${preco.toFixed(2)}`
}

