//TODO  criar as integrações.

tipo = ''

function botaoclick(){
    document.getElementById("botao").style.border = "3px solid #FFD700";
}

function  indexDb(tipo,bancoDeDados = true){
    /*irá pegar verificar o valor do index. caso não tenha nem um cadastrado, cria um novo.

    parametros ----------------------
        (tipo){string} --> pega a sigla para saber o tipo de index.
        (BancoDeDados){boolen} --> para saber qual a função que chama, caso não seja para adcionar 
                                   ao banco de dados, só consutar. não tem o incremento. por apdrão é true.

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

function cadastrarDb(d,tipo){
      /* recebe dois paramentros, o d(OBjeto)com os dados, que vai entrar para o db, e o tipo(despesa,emprestimo, etc).
       para trocar a sigla da chave. assim, tendo uma diferente  para cada um. 

    parametros ----------------------
        (tipo){string} --> pega a sigla para saber o tipo de index.

    variaveis ----------------------    
       (d){objeto}  --> dados que iram para o local storage.
       (tipo){string}  --> qual o tipo.

    
    */

    index = indexDb(tipo)// chama a função para pegar o index.
    localStorage.setItem(`${index}-${tipo}`, JSON.stringify(d))  
  
   
}

function listar(tipo){
    let index = indexDb(tipo,false)
    let va = 0
    let valor = document.getElementsByTagName('div')[0]
    if(index.toString().length = 1 ){
        for(let i = 0; i <= index; i++ ){
            console.log(localStorage.getItem(`${i}-${tipo}`))
            let bruto = localStorage.getItem(`${i}-${tipo}`)
            let dado = JSON.parse(bruto)
            console.log(dado.nome)
            
            va += parseInt(dado.valor)
            console.log(va)
        }
    
    }
   valor.innerHTML= "valor :"+ va;

}

class Despeas{
    constructor(nome,categoria,descricao,data,meio1,valor){
        this.nome = nome;
        this.categoria = categoria;
        this.descricao = descricao;
        this.data = data;
        this.meio1 = meio1;
        this.valor = valor;
    }}

class Emprestimo{
    constructor(nome,data,meioPagamentoRes,descricao,dataReceber,valor){
        this.nome = nome;
        this.data = data;
        this.meioPagamentoRes = meioPagamentoRes;
        this.descricao = descricao;
        this.dataReceber = dataReceber;
        this.valor = valor;
    }}

function addDespesa(){
    tipo = 'despesa'
    botaoclick()
    let nome = document.getElementById("nome").value
    let categoria = document.getElementById("categoria")
    //pegar o valor que está dentro das options.
    let categoriaRes = categoria.options[categoria.selectedIndex].value
    let descricao = document.getElementById("descricao").value
    let data  =  document.getElementById('data').value
    let meio  =  document.getElementById('meio-pagamento')
    let meio1 = meio.options[meio.selectedIndex].value
    let valor = document.getElementById("valor").value
    despesa = new Despeas(nome,categoriaRes,descricao,data,meio1,valor)
    cadastrarDb(despesa,tipo)
}

function addEmprestimo(){
    tipo = 'emprestimo'
    botaoclick()
    let nome = document.getElementsByClassName('nome-input')[0].value
    let data = document.getElementById('data').value
    let meioPagamento = document.getElementById('meio-pagamento')
    let meioPagamentoRes = meioPagamento.options[meioPagamento.selectedIndex].value
    let descricao = document.getElementById('descricao').value
    let dataReceber = document.getElementById('data-receber').value
    let valor =  document.getElementById('valor').value
    let emprestimo = new Emprestimo(nome,data,meioPagamentoRes,descricao,dataReceber,valor)
    cadastrarDb(emprestimo,tipo)
    
    //location.reload()
}

function lista(){
    listar('emprestimo')
}


