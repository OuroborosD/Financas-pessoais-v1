

class  Emprestimo{
    constructor(nome,data,dataReceber,valor){
        this.nome = nome;
        this.data = data;
        this.dataReceber;
        this.valor = valor;
    }

    duplicar(){
       let duas = this.valor * 2
       return duas
    }
}

let hoje = new Date()
let emp1 = new Emprestimo("diego",`${hoje.getDay()}${hoje.getDate()}`, 0, 224);
console.log(`${emp1.data}  , ${emp1.valor} ${emp1.duplicar()}`)


let dada = ["05/03/1996",true]
console.log(dada[1])

import {
    formatarData
}
from "./teste2"


let oi = formatarData('2021-07-05')
console.log(oi)
