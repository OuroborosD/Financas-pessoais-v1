let lista = [1,5,2,6,3]

function ordenar(lista = []){
    /*Description:não da para usar uma lista igual a outra, pois no JS ela referencia o endereço de memoria,
                  e não o valor caso alterasse em uma alterava em todas

        Algorithm INSERTION SORT
    
        parametros ----------------------
             (lista){LIST} -->lista de valores que iram colocados em ordem 
    
        variaveis ----------------------
            (){} --> 
    
        retorno ------------------------
            return (lista){LIST} --> lista com os valores já ordenados
    */
    let tamanho = lista.length
    for(let i =1 ;i < tamanho; i++){
        let valor = lista[i]
        let j = i - 1
        // serve para verificar e o valor de indice anterior é maior que o posterior.
        // se for maior, ele continua aqui, até qu
        while(j >= 0 && lista[j] > valor){
            lista[j + 1] = lista[j] //o primeiro valor passa para o segundo valor.
            j = j - 1 // j = -1, fazendo assim sair do loop
        }
        lista[j+ 1] = valor // caso tenha entrado no while, ele retorna na posição anterior.
                            // pois J deve um decremento de - 1 no for e no while, TOTALIZANDO -2
                            // caso não tenha entrado no while fica na mesma posição. pois tem o decremento de -1
    }
    return lista
}

let res =ordenar(lista)
console.log(res)
