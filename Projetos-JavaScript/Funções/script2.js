const pessoa1 = 
{
    nome: 'Rafael',
    idade: 48,
};
const pessoa2 = 
{
    nome: 'Renata',
    idade: 47,
};
const pessoa3 = 
   {
    nome: 'Regina',
    idade: 21,
};



// metodos call e aplly, uso do "this"

function calculaIdade(anos){
return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
  

}
 console.log(calculaIdade.call(pessoa1, 25)); // passar o parametro direto separado por " , "
 console.log(calculaIdade.apply(pessoa1, [25])); //passar o parametro dentro de " [] "