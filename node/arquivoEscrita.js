const fs = require('fs');

const produto = {
    nome: 'Celular',
    preco: 1289.99,
    desconto: 2.5
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!');
})