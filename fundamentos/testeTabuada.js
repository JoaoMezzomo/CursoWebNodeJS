//Exercício sobre For e If usando JavaScript

for(let i = 1; i <= 10; i++)
{
    console.log(`Tabuada do ${i}:`);
    
    for(let j = 1; j <= 10; j++)
    {
        if(j != 10)
        {
            console.log(`${i} x ${j}  = ${i * j}`); 
        }  
        else
        {
            console.log(`${i} x ${j} = ${i * j}`); 
        }
    }

    console.log('');
}