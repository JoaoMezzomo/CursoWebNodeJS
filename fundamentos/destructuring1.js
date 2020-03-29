const pessoa = 
{
    Nome: 'Ana',
    Idade: 34,
    Endereco:
    {
        Logradouro: 'Rua ABCD',
        Numero: 3434
    }
};

const {Nome, Idade} = pessoa;
console.log(Nome, Idade);

const {Nome: n, Idade: i} = pessoa;
console.log(n, i);
