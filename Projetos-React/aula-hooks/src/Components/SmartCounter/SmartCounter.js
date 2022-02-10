import {useState} from 'react';

function SmartCounter(){

    const [count, Increment] = useState(0); // retorna um vetor // "count" = variavel stateful // "Increment" = função amarrada a essa variavel que atualiza esse valor

    return(
       <div>

             <h1>{count}</h1>
             <button onClick={()=> Increment(count + 1)}>Aumemtar</button>

       </div>
             

    )
}

export default SmartCounter;