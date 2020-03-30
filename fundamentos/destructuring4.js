function Rand([min = 0, max = 1000])
{
    if(min > max) [min, max] = [max, min];
    
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(Rand([50, 80]));
console.log(Rand([50, 30]));
console.log(Rand([, 80]));
console.log(Rand([]));