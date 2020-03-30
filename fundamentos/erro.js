function ImprimirNomeGritado(obj)
{
    try
    {
        console.log(obj.Name.toUpperCase() + "!!!");
    }
    catch (e)
    {
        TratarErro(e);
    }
    finally
    {
        console.log("Fim");
    }
}

function TratarErro(erro)
{
    throw {msg: erro.message};
}

const obj = {Nome: "Roberto"};
ImprimirNomeGritado(obj);