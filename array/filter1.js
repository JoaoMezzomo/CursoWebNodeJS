const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad', preco: 5499, fragil: true},
    {nome: 'Copo de Vidro', preco: 10.99, fragil: true},
    {nome: 'Copo de Plástico', preco: 9.99, fragil: false},
    {nome: 'Vassoura', preco: 20.90, fragil: false}
]

//console.log(produtos.filter(function(p){
//    return p.preco > 2000;
//}));

const seECaro = function(p){
    return p.preco > 2000;
};

const seEFragil = function(p){
    return p.fragil === true;
};

console.log(produtos.filter(seECaro).filter(seEFragil));