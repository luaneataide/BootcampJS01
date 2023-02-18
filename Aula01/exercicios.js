const { constant } = require("lodash")

// leia 4 valores e imprima a média desses valores
{  
    let valor1 = 10
    let valor2 = 20
    let valor3 = 15
    let valor4 = 13

    let media = (valor1+valor2+valor3+valor4/4)
    console.log("A média é igual a " + media)
    
}

// leia 4 valores e imprima a média ponderada desses valores ,
//valor 1 e 2 peso 2 ,e valor 3 e 4 peso 3

{  
    let valor1 = 2
    let valor2 = 2
    let valor3 = 3
    let valor4 = 6

    const peso1 = 2
    const peso2 = 3

    let mediaP = ((valor1*peso1) + (valor2*peso1) + (valor3*peso2) + (valor4*peso2))/((peso1*2)+(peso2*2))
    console.log ("A média ponderada é igual a " + mediaP)
    
}


// Leia o nome do produto ,quantidade comprada e valor unitário,imprimir o nome do prouto 
// total a ser pago , e total a ser pago com desconto de 15%

{
    let produto = "chocolate"
    let quantidadeComprada = 5
    let valorUnit = 10
    
    let total = (quantidadeComprada*valorUnit);
    console.log ("Voce comprou " + quantidadeComprada+ " unidades de " + produto + " o Valor total da compra è: "+total)
    //console.log ("O valor com desconto de 15% é "+ (total - (15/100)))
    console.log ("O valor com desconto de 15% é "+ (total - (total%15)))

}
