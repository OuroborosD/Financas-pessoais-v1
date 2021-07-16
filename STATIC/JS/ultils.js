function formatarData(data) {
    /*formata a data de 2021/06/07 para 07/06/2021

    parametros ----------------------
        (data){strring} --> caso 1 -- emprestimo
                         caso 2 -- despesas
                        caso 10 -- tipo
    variaveis ----------------------    
       (id){string}  --> recebe o valor de index, caso seja NULL, criar um.

    retorno ------------------------   
       return (id){string} --> retorna  o index.

    */
    let dia = ""
    let mes = ""
    let ano = ""
    for(let i = 0;i < data.length;i++ ){

        // recebe o valor do ano, que são são os primeiros
        if(i < 4){
            ano += data[i]
        }
        if(i >4  && i < 7){
            mes += data[i]
        }
        if(i > 7 ){
            dia += data[i]
        }
    }
    return `${dia}/${mes}/${ano}`
}

function dataToInt(data){
    /*Description:pega data e formata para int
    
        parametros ----------------------
             (data){String} -->data no formatado YYYY-MM-DD 
    
        variaveis ----------------------
            (){} --> 
    
        retorno ------------------------
            return (dataInt){Int} --> data no formato de indeito YYYYMMDD
    */
   console.log('valor da data dentro: ',data)
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
            console.log('tamanho da lista',lista
            
            )
            
            for(let i = 1 ;i < tamanho; i++){
                let valor = lista[i]//passa o objeto para a variavel.
                let j = i - 1
                // serve para verificar e o valor de indice anterior é maior que o posterior.
                // se for maior, ele continua aqui, até qu
                console.log('valor de dataToInt(lista[j].idade)',lista[j].idade)
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


function tipoPagamento(valor,categoria = 1) {
     /*converto o tipo, que vem em INT, para String.

    parametros ----------------------
        (valor){int} --> posição no array. 
                        caso 1 -- emprestimo
                        caso 2 -- despesas
                        caso 10 -- tipo
        (categoria){String} --> o tipo,se é emprestimo,despesa etc.
    variaveis ----------------------    
       (id){string}  --> recebe o valor de index, caso seja NULL, criar um.

    retorno ------------------------   
       return (id){string} --> retorna  o index.

    */
    let emprestimo= ['cartão','dinheiro', 'emprestimo']
    let despesas= ['cartão','dinheiro', 'emprestimo']
    let tipo = ['lanches','almoços','compras onlines','feira']
    let recebeValor = ''
    if(categoria ==1){
        recebeValor = emprestimo[valor]
    }   
    if(categoria ==2){
        recebeValor = despesas[valor]
    }  
    if(categoria ==3){
        recebeValor = tipo[valor]
    } 
    return recebeValor
}

//FINISHED gerar lista despesas e emprestimos
//FINISHED gerar lista com todos de uma vez.
//TODO Organizar por data

function listar(tipo){
    /*Description:pegar os dados no LOCALSTORAGE, e atraves deles gerar as listas.
    
        parametros ----------------------
             (tipo){Strig} --> qual parte vai pegar os dados
    
        variaveis ----------------------
            (index){string} --> o caminho de onde é
    
        retorno ------------------------
            return (){} --> 
    */

    
    if(tipo == 'todos'){
        //chamei a função nela mesma, para gerar os dois tipos
        listar('emprestimo')
        listar('despesa')
        
    }
    
    let index = indexDb(tipo,false)
    //elemento tbody
    let listarCoisas = document.getElementById('listaCoisas')

    for(let i = 0; i <= index; i++ ){
            //console.log(`${i}-${tipo}`,localStorage.getItem(`${i}-${tipo}`))
            let bruto = localStorage.getItem(`${i}-${tipo}`)
            if(bruto == null){
                continue
            }else{
                
            let dado = JSON.parse(bruto)
            console.log(dado)
            console.log(dataToInt(dado.data))
            // criar a tr 
            let linha = listarCoisas.insertRow()
             // cria a td
             //linha.insertCell(0).innerHTML = dado.nome
            if(tipo == 'emprestimo'){
                linha.insertCell(0).innerHTML = dado.nome
                linha.insertCell(1).innerHTML = "----------------------"
                linha.insertCell(2).innerHTML = formatarData(dado.data)
                linha.insertCell(3).innerHTML = tipoPagamento(dado.meioPagamentoRes,1)
                linha.insertCell(4).innerHTML = formatarData(dado.dataReceber)
                linha.insertCell(5).innerHTML = dado.valor
            }
            if(tipo == 'despesa'){
                linha.insertCell(0).innerHTML = dado.nome
                linha.insertCell(1).innerHTML = tipoPagamento(dado.categoria,3)
                linha.insertCell(2).innerHTML = formatarData(dado.data)
                linha.insertCell(3).innerHTML = tipoPagamento(dado.meioPagamentoRes,2)
                linha.insertCell(4).innerHTML = "----------------------"
                linha.insertCell(5).innerHTML = dado.valor
            }
            }}}

        
function listarV2(tipo){
    /*Description:pegar os dados do LOCALSTORAGE, transformar em objeto novamente, e colocar eles dentro de uma lista
                  para poder ordenar eles

        mudanças V2 -

        parametros ----------------------
             (tipo){Strig} --> qual parte vai pegar os dados
    
        variaveis ----------------------
            (index){string} --> o caminho de onde é
    
        retorno ------------------------
            return (){} --> 
    */

    let listaProvisoria = []
    if(tipo == 'todos'){
        //chamei a função nela mesma, para gerar os dois tipos
        listar('emprestimo')
        listar('despesa')
        
    }
    
    let index = indexDb(tipo,false)
    //elemento tbody
    

    for(let i = 0; i <= index; i++ ){
            //console.log(`${i}-${tipo}`,localStorage.getItem(`${i}-${tipo}`))
            let bruto = localStorage.getItem(`${i}-${tipo}`)

            if(bruto == null){
                continue
            
            }else{
            let dado = JSON.parse(bruto)
            console.log(dado)
            console.log(dataToInt(dado.data))
            listaProvisoria.push(dado)
            console.log('\n\n\n lista de nomes :\n',listaProvisoria) 
            
            if(index == i){
                let listaordenada = ordenarv2(listaProvisoria)
                //gerarTabela(tipo,listaordenada[i])
            }
            } }
            
       
    }

function gerarTabela(tipo,objeto){
    let dado = objeto
    // criar a tr 
    let recebeTbody = document.getElementById('listaCoisas')
    let linha = recebeTbody.insertRow()
    // cria a td
    //linha.insertCell(0).innerHTML = dado.nome
   if(tipo == 'emprestimo'){
       linha.insertCell(0).innerHTML = dado.nome
       linha.insertCell(1).innerHTML = "----------------------"
       linha.insertCell(2).innerHTML = formatarData(dado.data)
       linha.insertCell(3).innerHTML = tipoPagamento(dado.meioPagamentoRes,1)
       linha.insertCell(4).innerHTML = formatarData(dado.dataReceber)
       linha.insertCell(5).innerHTML = dado.valor
   }
   if(tipo == 'despesa'){
       linha.insertCell(0).innerHTML = dado.nome
       linha.insertCell(1).innerHTML = tipoPagamento(dado.categoria,3)
       linha.insertCell(2).innerHTML = formatarData(dado.data)
       linha.insertCell(3).innerHTML = tipoPagamento(dado.meioPagamentoRes,2)
       linha.insertCell(4).innerHTML = "----------------------"
       linha.insertCell(5).innerHTML = dado.valor
   }
}


    