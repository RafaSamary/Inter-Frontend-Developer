
let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;

    if (count > 10){
        document.getElementById("somar").disabled = true;
               
    }
 
}

function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
    if (count < 0){
        document.getElementById('currentNumber').style.color = "red";
      
        
    }
  

    
}

function alterar(){

    document.getElementById("texto").innerHTML = "rafael"
}
    