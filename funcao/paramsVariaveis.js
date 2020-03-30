function Soma()
{
    let soma = 0;

    for(i in arguments)
    {
        soma += arguments[i];
    }

    return soma;
}

console.log(Soma());
console.log(Soma(2));
console.log(Soma(2, 4, 6, 7, 8, 9));
console.log(Soma(1231232, 123, 23, 0));
console.log(Soma(101010));