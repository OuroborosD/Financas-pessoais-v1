function formatarData(data) {
    
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




function tipoPagamento(valor,categoria) {
    /*colocar a nomeclatura

    parametros ----------------------
        (valor){int} --> caso 1 -- emprestimo
                         caso 2 -- despesas
                        caso 10 -- tipo
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

