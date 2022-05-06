
import react,{Component} from 'react';
import './App.css';
import Tipopizza from "./components/Tipopizza";
import Menu from "./components/Menu"
import Rotape from "./components/Rotape"



class App extends Component {

render() {
  return (
   
    <div className="App">
    <nav className="cabecalho">
    <h1>Pizzaria <font color="red">Malta</font></h1>

    </nav>
  <Menu/> 
    <Tipopizza/>
  <Rotape/>
  </div>

  );
}

}




export default App;

