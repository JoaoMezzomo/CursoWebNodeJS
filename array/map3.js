Array.prototype.map2 = function(callback){
    for(i = 0; i < this.length; i++)
    {
        callback(this[i], i, this);
    }
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
];

//Retornar um array apenas com os preços

//let precos = carrinho.map(function(valor){
//    let retorno = valor.split(':');
//    return retorno[retorno.length - 1].replace(' ', '').replace('}', '');
//})
//console.log(precos);

const paraObjeto = json => JSON.parse(json);
const apenasPreco = produto => produto.preco;

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco);
console.log(resultado);