







function dados(){

    let text = document.getElementById("texto").value;
    let lista = document.getElementById("lista").innerHTML;

    lista =  lista + "<li>" + text + "</li>";
    document.getElementById("lista").innerHTML = lista;


   
   

  

}

