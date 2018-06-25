const dicionario = require('./dicionario.json');

let palavra = process.argv;
let traducao = dicionario[palavra];

if(palavra == 'listar-tudo'){
    console.log(dicionario);
}else if(traducao == undefined){
    console.log('Não tem essa palavra, pô!');
}else{
    console.log(traducao);
}

