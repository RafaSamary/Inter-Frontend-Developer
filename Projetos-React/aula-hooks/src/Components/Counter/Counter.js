function Counter(){

    let count = 0;

    function Increment(){
        
        count = count + 1;
        document.getElementById("counter-box").innerHTML = count;

       
    }
    function Decrement(){
        
        count = count - 1;
        document.getElementById("counter-box").innerHTML = count;

       
    }
 
                 
    return(

          <div>
           <h1>Contador</h1>
           <h1 id="counter-box" >{count}</h1>
           <button onClick={Increment}>Aumentar</button>
           <button onClick={Decrement}>Diminuir</button>
           
          </div>
           

    )
}
export default Counter;