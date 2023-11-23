/* eslint-disable react/prop-types */
import React from "react";
import "../hojas-de-estilo/Boton.css";

class Boton extends React.Component {
  render() {
    return (
    <button className={this.props.esDeClic ? 'boton-clic' : 'boton-reiniciar'}
      onClick={this.props.clicHandler}>
      {this.props.texto}
    </button>

    )
  }
}

export default Boton;