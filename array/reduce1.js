const alunos = [
    {nome: 'João', nota: 10.0, bolsista: true},
    {nome: 'Maria', nota: 0, bolsista: true},
    {nome: 'Pedro', nota: 8.6, bolsista: false},
    {nome: 'Felizberto', nota: 7.8, bolsista: false},
    {nome: 'Ronaldo', nota: 6.0, bolsista: true}
];

console.log(alunos.map(a => a.nota));
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual);
    return acumulador + atual;
})