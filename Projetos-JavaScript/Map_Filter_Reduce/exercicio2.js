

const ListaPreco = [45,33,15,35,26,49];
const saldo = 500;

function total(ListaPreco){

    return ListaPreco.reduce(function(prevValue, currenteValue){ 

        return (prevValue + currenteValue); // soma os numeros do array inicial em diante 

    })
}
 let resutado = saldo - total(ListaPreco);

console.log(` Seu Saldo era:${saldo}\n Suas compras foram de :${total(ListaPreco)}\n Sobrou:${resutado}`);