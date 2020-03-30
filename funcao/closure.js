//Escopo criado quando uma função é declarada 
//e esse escopo permite a função acessar e manipular variáveis externas a função

const x = 'Global';

function Fora()
{
    const x = 'Local';

    function Dentro()
    {
        return x;
    }
    return Dentro;
}

const minhaFuncao = Fora();

console.log(minhaFuncao());
