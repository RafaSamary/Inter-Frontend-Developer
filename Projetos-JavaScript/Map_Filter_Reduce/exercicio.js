
// filtra os pares do array

const arr = [1,2,3,4,5,6,7,8,9,11,12];

function pares(arr){

    return arr.filter(function(resto){

       return resto %2 === 0;
    })
}

console.log(pares(arr));