



const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5]

function valoresUnicos(arr){

    const mySet = new Set(arr);

    return mySet;   

}

console.log(valoresUnicos(meuArray));

  // Saida:  Set(6) { 30, 40, 5, 223, 2049, 3034 }    -  retorna os valores do ARRAY como um SET

//____________________________________________________________________________________________________
  
const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5]

function valoresUnicos(arr){

    const mySet = new Set(arr);

    return [...mySet];   

}

console.log(valoresUnicos(meuArray));

 // Saida:   [30, 40, 5, 223, 2049, 3034 ]    -  tecnica spred , coloca o ARRAY dentro do SET