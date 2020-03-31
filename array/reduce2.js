const alunos = [
    {nome: 'João', nota: 10.0, bolsista: true},
    {nome: 'Maria', nota: 0, bolsista: true},
    {nome: 'Pedro', nota: 8.6, bolsista: false},
    {nome: 'Felizberto', nota: 7.8, bolsista: false},
    {nome: 'Ronaldo', nota: 6.0, bolsista: true}
];

//Desafio 1: Todos os alunos são bolsistas?
console.log('Todos os alunos são bolsistas?');
console.log(alunos.map(b => b.bolsista).reduce(function (acumulador, atual){
    if(acumulador === false || atual === false)
    {
        return false;
    }
    else
    {
        return true;
    }
}));

//Desafio 2: Algum aluno é bolsista?
console.log('Algum aluno é bolsista?');
console.log(alunos.map(b => b.bolsista).reduce(function (acumulador, atual){
    if(atual === true)
    {
        return atual;
    }
}));