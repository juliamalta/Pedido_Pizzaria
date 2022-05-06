import React , { Component } from "react";
import './pizza.css';

class Menu extends Component {
render (){
    return (
<div>
    <h1 className="tipo">Menu</h1>
   


<div id="divBusca">
  <input type="text" id="txtBusca" placeholder="Procurar Nome da Pizza"/>

</div>
</div>
    );
}

}

export default Menu;