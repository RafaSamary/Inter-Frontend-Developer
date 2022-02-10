function operacao(){

    let  num1 = Number(prompt('Digite o primeiro Número'));
    let  num2 = Number(prompt('Digite o segundo Número'));
    let resultado = num1 + num2;

    if(!num1 || !num2){
        alert('Digite somente números');
        operacao();
    }else{
         if (num1 == num2 && resultado >=10 ){
        alert(`Os numeros ${num1} e ${num2}, são iguais e soma é ${resultado}.Que é maior ou igual a 10`);
    }else if(num1 == num2 && resultado <10){
        alert(`Os numeros ${num1} e ${num2}, são iguais e soma é ${resultado}.Que é menor que 10`);
    }else if(num1 == num2 && resultado <=20){
        alert(`Os numeros ${num1} e ${num2}, são iguais e soma é ${resultado}.Que é menor ou igual 20`);
    }else if (num1 == num2 && resultado <20){
        alert(`Os numeros ${num1} e ${num2}, são iguais e soma é ${resultado}.Que é menor que 20`);   
    }else{
        alert(`Os numeros ${num1} e ${num2}, são diferentes e soma é ${resultado}.Que é menor a 10 ou maior que 20`);
    } 

    }
    novaOperacao();

  }
  function novaOperacao(){
      let opcao = prompt('Deseja fazer nova operação?\n 1 - Sim\n 2 - Não');
      if(opcao == 1){
          operacao();
      }else if(opcao == 2){
          alert('Obrigado por Usar esta Aplicação')
      }else{
          alert('Digite 1 ou 2');
          novaOperacao();
      }
  }