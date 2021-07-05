//TODO  criar as integrações.
function exe(){
    let nome = document.getElementById("nome").value
    let categoria = document.getElementById("categoria")
    //pegar o valor que está dentro das options.
    let categoriaRes = categoria.options[categoria.selectedIndex].value
    let descricao = document.getElementById("descricao").value
    let data  =  document.getElementById('data').value
    let meio  =  document.getElementById('meio-pagamento')
    let meio1 = meio.options[meio.selectedIndex].value
    let valor = document.getElementById("valor").value
    console.log(`despesa ${nome}`)
    console.log(`categoria $ categoriaRes}`)
    console.log(`data ${data}`)
    console.log(`descricao ${descricao}`)
    console.log(`meio de pagamento ${meio1}`)
    console.log(`valor  ${valor}`)
   
}
