console.log(typeof console);
console.log(Math.ceil(6.1));

const obj1 = {};
obj1.Nome = 'Bola';
//obj1['Nome'] = 'Bola2;'
console.log(obj1.Nome);

function Objt(nome)
{
    this.nome = nome;    
}

const objt2 = new Objt('Cadeira');
const objt3 = new Objt('Mesa');

console.log(objt2.nome);
console.log(objt3.nome);
