import React , { Component } from "react";
import './pizza.css';

class Rotape extends Component {

constructor(props){
    super(props);
    this.state ={
  

    };
    this.enviar=this.enviar.bind(this);
    this.cancelar=this.cancelar.bind(this);
}


enviar(){
    alert("Pedido Enviado");
}


cancelar(){
  alert("Pedido cancelado")
}


render (){
    return (
<div className="pedidos">
<button onClick = {this.enviar}>
    Enviar pedido
</button>


<button onClick={this.cancelar}>Cancelar </button>
   

</div>

    );
}

}

export default Rotape;