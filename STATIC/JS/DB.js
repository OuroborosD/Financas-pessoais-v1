

function  indexDb(tipo,bancoDeDados = true){
    /*irá pegar verificar o valor do index. caso não tenha nem um cadastrado, cria um novo.

    parametros ----------------------
        (tipo){string} --> pega a sigla para saber o tipo de index.
        (BancoDeDados){boolen} --> para saber qual a função que chama, caso não seja para adcionar 
                                   ao banco de dados, só consutar. não tem o incremento. por padrão é true.

    variaveis ----------------------    
       (id){string}  --> recebe o valor de index, caso seja NULL, criar um.

    retorno ------------------------   
       return (id){string} --> retorna  o index.

    */

    let nomeChave = `${tipo}Chave`//chave unica
    let id = localStorage.getItem(nomeChave)
    if(bancoDeDados == true){
        if(id == null){// caso não tenha n`${tipo}Chave`em um index, o valor é null
            localStorage.setItem(nomeChave, 0)
            id = localStorage.getItem(nomeChave)
            return id 
        }
    
        id ++ // incrementa o id, toda`${tipo}Chave` vez que é chamado.
        localStorage.setItem(nomeChave, id)
    }
    return id
    
}




function cadastrarDb(d,tipo = '',temIndex = 0){
      /* recebe dois paramentros, o d(OBjeto)com os dados, que vai entrar para o db, e o tipo(despesa,emprestimo, etc).
       para trocar a sigla da chave. assim, tendo uma diferente  para cada um. 

    parametros ----------------------
        (tipo){string} --> pega a sigla para saber o tipo de index.

    variaveis ----------------------    
       (d){objeto}  --> dados que iram para o local storage.
       (tipo){string}  --> qual o tipo.

    
    */

    if(temIndex == 0){
        index = indexDb(tipo)// chama a função para pegar o index.
        localStorage.setItem(`${index}-${tipo}`, JSON.stringify(d))
    }else{
        localStorage.setItem(`receitas`, JSON.stringify(d))
    }  
  
   
}