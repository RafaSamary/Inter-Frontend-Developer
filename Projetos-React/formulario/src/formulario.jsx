import React from "react";
import { Component } from "react";


class NameForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = { value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit  = this.handleSubmit.bind(this);
    }

handleChange(event) {
    this.setState({ value: event.target.value });    
}

handleSubmit(event){
    alert('O seu nome é: ' + this.state.value);
    event.preventDefault();
}

 render()  {
     return(
         <form onSubmit={this.handleSubmit} style={{display:'flex', flexDiretion:'collumn'}} >
          <label>
             Nome:
             <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
         <input type="submit" value="Submit" />
         </form>


     )
 }

}
export default NameForm;