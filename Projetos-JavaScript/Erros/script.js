function validaArray(arr, num){ // declara um array e um numero

    try{

    if(!arr && !num)
     throw new ReferenceError("Digite os Parametros");

    if(typeof arr !== "object") 
    throw new TypeError("Precisa ser do tipo Object");

    if(typeof num !== "number")
     throw new TypeError("Precisa ser do tipo Number");

    if(arr.lenght !== num ) 
    throw new RangeError("O tamanho invalido");

    return arr; // retorna o arr caso esteja correto
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log("Esse erro é ReferenceError");
            console.log(e.message); 
        }
        else if(e instanceof TypeError){
            console.log("Esse erro é TypeError");
            console.log(e.message); 
        }
        else if(e instanceof RangeError){
            console.log("Esse erro é RangeError");
            console.log(e.message); 
        }else{
            console.log("Ocorreu um erro não esperado:" + e);
        }
    }
}
console.log(validaArray());