//Função sem retorno
function ImprimirSoma(a, b)
{
    console.log(a + b);
}

ImprimirSoma(2, 3);
ImprimirSoma(2);
ImprimirSoma(2, 6, 7, 9, 0);
ImprimirSoma();

//Função com retorno
function Soma(a, b = 0)
{
    return a + b;
}

console.log(Soma(2, 3));
console.log(Soma(2));