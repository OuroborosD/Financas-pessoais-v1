let a = 234
console.log(a.toString().length)

// pegar um JSON e transformar em array.
let json = '{"nome":"diego","idade":25}'
// coverta o objeto JSON com o parce
let bruto = JSON.parse(json);

var res = []
for(var i in bruto){
    res.push(bruto[i]);
}
console.log(res)// ---> [ 'diego', 25 ]