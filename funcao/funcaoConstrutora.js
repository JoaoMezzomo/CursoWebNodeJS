function Carro(velocidadeMaxima = 200, delta = 5)
{
    let velocidadeAtual = 0;

    this.Acelerar = function()
    {
        if (velocidadeAtual + delta <= velocidadeMaxima)
        {
            velocidadeAtual += delta;
        }
        else
        {
            velocidadeAtual = velocidadeMaxima;
        }
    }

    this.GetVelocidadeAtual = function ()
    {
        return velocidadeAtual;
    }
}

const uno = new Carro();
uno.Acelerar();
console.log(uno.GetVelocidadeAtual());

const ferrari = new Carro(350, 20);
ferrari.Acelerar();
ferrari.Acelerar();
ferrari.Acelerar();
console.log(ferrari.GetVelocidadeAtual());