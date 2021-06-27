//TODO  criar as integrações.
console.log('hello world');

function criarPessoa(nome, idade,sexo){
    return(nome,idade,sexo)//JS cria um dicionario tipo esse nome:nome deixa deste jeito.
}

let pessoas = []

const lista = ['diego','maria','jose','adriana']
const idade = [25,22,10,50]
const sexo =['m']

console.log(typeof(lista.length))


for (let i = 0; i < lista.length;i++){
    console.log(lista[i],idade[i],sexo[0])
    pessoas.push(criarPessoa(lista[i],idade[i],sexo[0])) 
}
console.log(pessoas[2])



