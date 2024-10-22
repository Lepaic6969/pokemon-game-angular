export const addNumber=(numbers:number[]):void=>{
    let newNumber=Math.floor(Math.random()*650);
    if(!numbers.includes(newNumber)){
        numbers.push(newNumber);
    }
}

//Este Método entrega un arreglo con 4 números entre el 1 y el 650, que corresponden a los pokemones
//de la petición.

export const getNumbers=():number[]=>{
    const numbers:number[]=[];
    while(numbers.length<4){
        addNumber(numbers);
    }
    return numbers;
}

    