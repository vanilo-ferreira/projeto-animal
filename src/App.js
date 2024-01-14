import './App.css';
import React, { useState } from "react";
import CardAnimal from './components/CardAnimal';
import CardInformacoes from './components/CardInformacoes';


function App() {

  const [tipoDoComponenteCard, setTipoDoComponenteCard] = useState("cachorro");

  const alterarState = () => {
    if (tipoDoComponenteCard === "cachorro") {
      setTipoDoComponenteCard("gato");
    } else {
      setTipoDoComponenteCard("cachorro");
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Projeto Props + useState</h1>
        <p>Clique no botão para mudar os componentes abaixo</p>
        <button onClick={alterarState}>Mudar Animal</button>
      </header>

      <CardAnimal tipoAnimal={tipoDoComponenteCard}/>
      <CardInformacoes tipoAnimal={tipoDoComponenteCard}/>

    </div>
  );
}

export default App;
