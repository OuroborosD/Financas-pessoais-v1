



class Despesas{
    constructor(descricao,valor,ano,mes,dia,tipo){
        this.ano =ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
        
    }
    verificardados(){// verificar dados
        for (let i in this){
           console.log(i, this[i])// parcorre cada elemento no objeto
                                  // o this[i], é a mesma coisa que
                                  //this.ano , this.mes etc  
            if(this[i] == undefined || this[i] == null ||this[i] == ''){// caso seja uma destas coisas
                return false // no como ele retorna false
            }else{
                return true
            }
        }
    }
}

class Indice{
    constructor(atual){
        this.atual = localStorage.getItem('id')
        if(localStorage.getItem('id') == null){
            localStorage.setItem('id', 0)
            this.atual = localStorage.getItem('id')
        }
    }
    add(){
        this.atual = parseInt(localStorage.getItem('id')) +1
        
        
        localStorage.setItem('id', this.atual)
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
    if(despesa.verificardados()){// caso de false  na função aqui pula diret para o else
        gravar(despesa)
    }else{
        alert('falta o preencimento de algum campo')
    }

}


function gravar(despesaParamatro){// g é o parametro
        let index = new Indice()
        
        if(localStorage.getItem(index.atual) !== null) {
            
            index.atual = localStorage.getItem('id')
        }
        
        localStorage.setItem(index.atual, JSON.stringify(despesaParamatro))//esse metodo é usado para tranformar 
                                            // a classe em JSON, podendo assim, mandar
                                            // objetos completos em vez de só um item
                                            // despesa é a key do objeto
                                            //despesaPametro é o objeto
        index.add()
      
        localStorage.setItem('id', index.atual)
        
        //document.location.reload();
        

}