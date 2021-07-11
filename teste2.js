let a = 234
//console.log(a.toString().length)

function converteJsonToString(){
    // pegar um JSON e transformar em array.
    let json = '{"nome":"diego","idade":25}'
    // coverta o objeto JSON com o parce
    let bruto = JSON.parse(json);

    var res = []
    for(var i in bruto){
        res.push(bruto[i]);
}
    console.log(res)
}


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

 //let oi = formatarData('2021-07-05')
converteJsonToString()

