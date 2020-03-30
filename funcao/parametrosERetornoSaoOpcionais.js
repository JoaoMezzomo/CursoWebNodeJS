function Area(largura, altura)
{
    const area = largura * altura;
    if (area> 20)
    {
        console.log(`Valor acima do permitido: ${area}m2`);
    }
    else
    {
        return area;
    }
}

console.log(Area(2, 10));
console.log(Area(2, 32));
console.log(Area(2));
console.log(Area());