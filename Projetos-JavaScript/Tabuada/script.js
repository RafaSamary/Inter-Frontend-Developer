function refazer(){

    let novatabuada = prompt("Deseja Refazer ?\n 1 - Sim\n 2 - Não")
}



function tabuada(){

    var tabuada = prompt('Escolha um numero para a Tabuada:');    
    var resultado;
    var contador;
    

    for( contador = 0;contador <= 10; contador++){
        resultado = tabuada * contador;
        document.write("" + contador + " X " + tabuada + " = " + resultado + "<br/>");
        document.getElementById("numero").innerHTML = tabuada;

      
        
        
    } 
       
   
   
}

tabuada()

