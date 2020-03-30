function Compras(trabalho1, trabalho2)
{
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTV50 = trabalho1 && trabalho2;
    const comprarTV32 = trabalho1 != trabalho2;
    const manterSaudavel = !comprarSorvete;

    return {comprarSorvete, comprarTV50, comprarTV32, manterSaudavel};
}

console.log(Compras(true, true));
console.log(Compras(true, false));
console.log(Compras(false, true));
console.log(Compras(false, false));