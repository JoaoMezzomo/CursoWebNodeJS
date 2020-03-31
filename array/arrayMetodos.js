const pilotos = ['Vettel', 'Allonso', 'Raikkonen', 'Massa'];
pilotos.pop(); //Retira o ultimo
console.log(pilotos);

pilotos.push('Barrichelo'); //Adiciona
console.log(pilotos);

pilotos.shift() //Retira o primeiro
console.log(pilotos);

pilotos.unshift('Hamilton');
console.log(pilotos);

pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos);

pilotos.splice(3, 1);
console.log(pilotos);

const algunsPilotos = pilotos.slice(2);
console.log(algunsPilotos);

