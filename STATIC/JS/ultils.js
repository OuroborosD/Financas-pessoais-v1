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
//TODO gerar lista com todos de uma vez.
//TODO filtrar por data

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
            let dado = JSON.parse(bruto)
            //console.log(dado.nome)
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
            }else{
                
            }
            
          
        }
    
    
    }


    