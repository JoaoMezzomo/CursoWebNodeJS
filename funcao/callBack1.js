const fabricantes = ["Mercedes", "Audi", "BMW"];

function Imprimir(nome, indice)
{
    console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(Imprimir);
fabricantes.forEach(fabricante => console.log(fabricante));