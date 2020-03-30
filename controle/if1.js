function SoBoaNoticia(nota)
{
    if(nota >= 7)
    {
        console.log("Aprovado com nota: " + nota);
    }
}

SoBoaNoticia(6);
SoBoaNoticia(7);
SoBoaNoticia(10);

function SeForVerdadeEuFalo(valor)
{
    if(valor)
    {
        console.log("É verdade... " + valor);
    }
}

SeForVerdadeEuFalo();
SeForVerdadeEuFalo(true);
SeForVerdadeEuFalo(false);
SeForVerdadeEuFalo(0);
SeForVerdadeEuFalo(1);
SeForVerdadeEuFalo(null);
SeForVerdadeEuFalo(undefined);
SeForVerdadeEuFalo(NaN);
SeForVerdadeEuFalo(-1);
SeForVerdadeEuFalo('');
SeForVerdadeEuFalo(' ');
SeForVerdadeEuFalo('?');
SeForVerdadeEuFalo([]);
SeForVerdadeEuFalo([3, 4]);
SeForVerdadeEuFalo({});