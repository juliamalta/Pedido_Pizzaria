
import React , { Component }  from 'react';

import './pizza.css';






class Tipopizza extends Component {


  
  


constructor(props){
    super(props);
    this.state = {
    
        Pizza: [
            {id : 1 , tipo:'Alho poro',tamanho : 'Grande 8 pedaços', descricao: 'Molho , Alho Poro, Gotas de Catupiry ,Alho frito , Oregano',preco : 'R$45,00'},
            {id : 2 , tipo:'Calabresa',tamanho : 'Grande 8 pedaços', descricao: 'Molho , Musarella ,Calabresa,Oregano' ,preco : 'R$45,00'},
            {id : 3 , tipo:'Bacon Crocante',tamanho : 'Grande 8 pedaços',descricao: 'Molho,mussarela,tomate,pimentao,palmito,milho,champignon ',preco : 'R$45,00'},
            {id : 4 , tipo:'Vegetariana',tamanho : 'Grande 8 pedaços',descricao: 'Molho , Alho Poro, Gotas de Catupiry ,Alho frito , Oregano',preco : 'R$45,00'},
            {id : 5 , tipo:'Frango com catupiry',tamanho : 'Grande 8 pedaços',descricao: 'Molho,mussarela,frango,catupity,oregano',preco : 'R$45,00'},
            
        ],

        contador:0,
      
    };
 
    this.aumentar=this.aumentar.bind(this);
    this.limpar=this.limpar.bind(this);
}

aumentar(){

    let state= this.state;
    state.contador += 1;
    this.setState(state);
 
    }
    

    limpar(){
        let state= this.state;
        state.contador = 0;
        this.setState(state);
    }




render (){
    return (
     
        
      <div>
{this.state.Pizza.map((item)=>{
    return(
<div className='menupizza'>
  
    <h3 className='tipo'>{item.tipo} : {item.preco} , {item.tamanho}  </h3><button onClick={this.aumentar}>+</button>{this.state.contador}
  
    <button onClick={this.limpar}>Limpar</button>

    <p className='Desc'>{item.descricao}</p>
 
   
    <div className='pedido'>

</div>

    </div>


    );
})}

        
      </div>
        
    );
}




}

export default Tipopizza;