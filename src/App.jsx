import React from 'react';
import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Contador from './componentes/Contador';
import Boton from './componentes/Boton';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      numClics: 0
    };
    this.clicHandler = this.clicHandler.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
    console.log("Construyendo")
  }

  clicHandler() {
    this.setState(({ numClics }) => ({ numClics: numClics+1 }));
  }

  reiniciarContador() {
    this.setState({ numClics: 0});
  }

  render() {
    return (
      <div className="App">
        <div className='freecodecamp-logo-contenedor'>
          <img className='freecodecamp-logo' src={freeCodeCampLogo} alt='logo de freeCodeCamp'/>
        </div>

        <div className='contenedor-principal'>
          <Contador numClics={this.state.numClics}></Contador>
          <Boton texto={"Clic"} esDeClic={true} clicHandler={this.clicHandler}></Boton>
          <Boton texto={"Reiniciar"} esDeClic={false} clicHandler={this.reiniciarContador}></Boton>
        </div>
      </div>
    );
  }
}


export default App;
