function Rand( { min = 0, max = 1000 } )
{
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(Rand( { max:50, min: 40 } ));

const obj = { max: 900, min: 200 };
console.log(Rand(obj));
console.log(Rand({min: 50}));
console.log(Rand({}));