


let tipo = ['todos','despesa','emprestimo']

function botaoclick(){
    document.getElementById("botao").style.border = "3px solid #FFD700";
}




class Despeas{
    constructor(nome,categoria,descricao,data,meio1,valor){
        this.nome = nome;
        this.categoria = categoria;
        this.descricao = descricao;
        this.data = data;
        this.meioPagamentoRes = meio1;
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
    tipo = tipo[0]
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
    tipo = tipo[1]
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
   
    listar(tipo[0])
}

function filtro(){
    //vai apagar as linhas até dar erro, depois disso vai execultar as coisas da função
    try{
       while(true){
            let corpoTabela = document.getElementById("listaCoisas").deleteRow(0)
        }
    }
    catch(e){
        let filtro = document.querySelector('input[name="filtro"]:checked').value
    
    let tr = document.getElementsByTagName('tr')[0].value
    console.log(tr)
    
    //
    listarV2(tipo[filtro]);
    }
    
    
    
}



