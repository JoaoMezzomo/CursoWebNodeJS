Array.prototype.forEach2 = function(callback){
    const newArray = [];

    for(let i= 0; i < this.length; i++)
    {
        newArray.push(callback(this[i], i, this))    
    }
    return newArray;
}

const aprovados = ['Daniel', 'Roger', 'Pedro', 'João', 'Maria', 'Rafaela'];

aprovados.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
});
