

/* Sintaxe Metodo Reduce

const callbackfn = function(accumulador, currentValue, Index, Array){

}

Array.reduce(callbackfn, initialValue);*/

// Somar todos os numeros de um Array

const arr = [1,2,3,4,5,6,7,8,9];

function somaArray(arr){

    return arr.reduce(function(prevValue, currentValue){

        return prevValue + currentValue; // somando o numero incial do array com o seguinte
    })
}

console.log(somaArray(arr));