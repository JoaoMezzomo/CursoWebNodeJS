const notas = [7.7, 8.9, 9.0, 6.9, 5.0, 3.2, 1.5];

//Sem callback
let notasBaixas = [];

for(let i in notas)
{
    if(notas[i] < 7)
    {
        notasBaixas.push(notas[i]);
    }
}

console.log(notasBaixas);

//Com callback
notasBaixas = notas.filter(function (nota) 
{
    return nota < 7;
});

console.log(notasBaixas);

notasBaixas = notas.filter(nota => nota < 7);
console.log(notasBaixas);