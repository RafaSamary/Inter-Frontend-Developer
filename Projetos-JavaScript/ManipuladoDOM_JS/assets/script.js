
const h1 = document.getElementById("page-title");
const button = document.getElementById("mode-selector");
const footer = document.getElementById("rodape");
const header = document.getElementsByTagName("header")[0]; 
const body = document.getElementsByTagName("body")[0];  // precisa declarar como array por se tratar do body



   button.addEventListener("click", changeMode) // não precisa do onclick no HTML

     // boa pratica separar as ações de cada função

   function changeMode(){  // essa chama a função para mudar todo o site
        
      changeClass()
      changeText()
         
                    
   }
    
    function changeClass(){   // essa é que muda cada elemento 

        body.classList.toggle("dark-mode"); // classList acessa o classe do CSS pelo JS
        footer.classList.toggle("dark-mode");
        button.classList.toggle("dark-mode");
        h1.classList.toggle("dark-mode");
        header.classList.toggle("dark-mode");

    }


    function changeText(){ // essa muda o texto dos elementos HTML
        
        if( button.classList.contains("dark-mode") || body.classList.contains("dark-mode")) {

            h1.innerHTML = "Dark Mode ON"
            button.innerHTML = "Light Mode"
        }else{

            h1.innerHTML = "Light Mode ON"
            button.innerHTML = "Dark Mode"
        }
               

    }