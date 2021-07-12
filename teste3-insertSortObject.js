let lista = [1,5,2,6,3]

function dataToInt(data){
    /*Description:pega data e formata para int
    
        parametros ----------------------
             (data){String} -->data no formatado YYYY-MM-DD 
    
        variaveis ----------------------
            (){} --> 
    
        retorno ------------------------
            return (dataInt){Int} --> data no formato de indeito YYYYMMDD
    */
    let dataInt = data
    let tamanho = dataInt.length
    while(tamanho != 8){//enquanto não estiver com o formato correto de YYYY-MM-DD para YYYYMMDD continua rodando
        dataInt = dataInt.replace("-","")
        tamanho = dataInt.length
    }
        

    dataInt = parseInt(dataInt)
    console.log(`tipo ${typeof(dataInt)} valor: ${dataInt}`)
    return dataInt
}


function ordenar(lista){
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
            for(let k = 0; k < tamanho;k++){
                lista[k].idade = dataToInt(lista[k].idade )
            }
            
            for(let i =1 ;i < tamanho; i++){
                let valor = lista[i]//passa o objeto para a variavel.
                let j = i - 1
                // serve para verificar e o valor de indice anterior é maior que o posterior.
                // se for maior, ele continua aqui, até qu
                while(j >= 0 && lista[j].idade > valor.idade){
                    lista[j + 1] = lista[j] //o primeiro valor passa para o segundo valor.
                    j = j - 1 // j = -1, fazendo assim sair do loop
                }
                lista[j+ 1] = valor // caso tenha entrado no while, ele retorna na posição anterior.
                                    // pois J deve um decremento de - 1 no for e no while, TOTALIZANDO -2
                                    // caso não tenha entrado no while fica na mesma posição. pois tem o decremento de -1
            }
            return lista
        }




function ordenarv2(lista){
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
                let valor = lista[i]//passa o objeto para a variavel.
                let j = i - 1
                // serve para verificar e o valor de indice anterior é maior que o posterior.
                // se for maior, ele continua aqui, até qu
                while(j >= 0 && dataToInt(lista[j].idade) > dataToInt(valor.idade)){
                    lista[j + 1] = lista[j] //o primeiro valor passa para o segundo valor.
                    j = j - 1 // j = -1, fazendo assim sair do loop
                }
                lista[j+ 1] = valor // caso tenha entrado no while, ele retorna na posição anterior.
                                    // pois J deve um decremento de - 1 no for e no while, TOTALIZANDO -2
                                    // caso não tenha entrado no while fica na mesma posição. pois tem o decremento de -1
            }
            return lista
        }


//let res =ordenar(lista)
//console.log(res)


let pessoas = [{"nome": "diego", "idade":"2021-05-03"},{"nome": "joão", "idade":"2021-03-10"},{"nome": "maria", "idade":"2021-08-03"},
               {"nome": "XD", "idade":"2020-07-23"},{"nome": "sads", "idade":"2021-10-13"}]
//console.log(pessoas[0].idade)
let res = ordenarv2(pessoas)
console.log(res)

console.log(pessoas.teste)

