import React, {useState, useEffect} from "react";
import ifoodcounter from '../IfoodCounter/ifoodcounter.css';
import logo from "../img/logo.jpg";
import pedido from "../img/pedido.jpg";





export default function IfooCounter(){

    const [value, setValue] = useState(0);
    const [buttonStyle, setButtonStyle ] = useState("counter-button-minus-active");

    useEffect(()=>{
        document.getElementById("multiplicar").innerHTML = "R$: " + 4 * value;
    }, [value])

   

    function dow(){

        if(value <= 1){

            setButtonStyle("counter-button-minus-desactive");

        }

        if(value > 0)
        setValue(value - 1)
    }
    function up(){
        setValue(value + 1)
        setButtonStyle("counter-button-minus-active");
    }

    return( 
       
       <div>
           <img className="logo"  src={logo}></img>

        <div className="countex-wrapper">
            
        
            
            <button className={buttonStyle} onClick={dow}>
                -
            </button>
            <p>{value}</p>
            <button className="counter-button-plus-active" onClick={up}>
                +
            </button>          
              
        
        

        </div>
        <img className="pedido" src={pedido}></img>
        <h2>Item R$ 4,00</h2>       

        <p>Valor Total: </p>
        <p Id="multiplicar"></p>
        
        </div>


    )
}