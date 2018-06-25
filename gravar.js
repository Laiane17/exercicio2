const fs = require('fs');
let texto = process.argv[2];

fs.appendFile('teste.txt', texto, (error) => {
    if(error){
        console.log('Houve um erro ao gravar o arquivo');
    }else{
        console.log('Gravei o arquivo');
    }
});
