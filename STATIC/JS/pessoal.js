



class Despesas{
    constructor(descricao,valor,ano,mes,dia,tipo){
        this.ano =ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
        
    }
}

class Indice{
    constructor(atual){
        this.atual = 0
    }
    add(){
        this.atual +=1
    }
    
}

let index = new Indice()


function cadastrar(){
    let descricao = document.getElementById('descricao').value 
    let valor = document.getElementById('valor').value
    let ano = document.getElementById('ano').value
    let mes = document.getElementById('mes').value
    let dia = document.getElementById('dia').value
    let tipo = document.getElementById('tipo').value
    let despesa = new Despesas(descricao,valor,ano,mes,dia,tipo)
    

    if(descricao.length ==0 || valor.length == 0|| dia.length == 0 || mes.length == 0){
        alert('algum campo está vazio')
    }else{
        gravar(despesa)// função para gravar os dados no banco de dados
    }
    

}


function gravar(despesaParamatro){// g é o parametro
        console.log('antes do if',index.atual)
        if(localStorage.getItem(index.atual) !== null) {
            index.atual = localStorage.getItem('id')
            console.log('dentro do if',index.atual)
        }
        console.log('depois do if',index.atual)

        localStorage.setItem(index.atual, JSON.stringify(despesaParamatro))//esse metodo é usado para tranformar 
                                            // a classe em JSON, podendo assim, mandar
                                            // objetos completos em vez de só um item
                                            // despesa é a key do objeto
                                            //despesaPametro é o objeto
        index.add()
        localStorage.setItem('id', index.atual)
        console.log('final ',index.atual)
        //document.location.reload();
        

}