import './App.css';
import React, { useState } from "react";
import imagemCachorro from './assets/cachorro.jpg';
import imagemGato from './assets/gato.jpg';


function App() {

  let imagemAnimal = "";
  let informacaoAnimal = "";
  let tipoAnimal = "cachorro";

  const [tipoDoComponenteCard, setTipoDoComponenteCard] = useState("cachorro");

  const alterarState = () => {
    if (tipoDoComponenteCard === "cachorro"){
      setTipoDoComponenteCard("gato");
    } else {
      setTipoDoComponenteCard("cachorro");
    }
  }

  if(tipoDoComponenteCard === "cachorro") {
    imagemAnimal = imagemCachorro;
    informacaoAnimal = "É um mamífero carnívoro da família dos canídeos.";
    tipoAnimal = "cachorro";
  } else {
    imagemAnimal = imagemGato;
    informacaoAnimal = "É um mamífero carnívoro da família dos felídeos.";
    tipoAnimal = "Gato";
  }

  return (
    <div className="App">
      <header>
        <h1>Projeto Props + useState</h1>
        <p>Clique no botão para mudar os componentes abaixo</p>
        <button onClick={alterarState}>Mudar Animal</button>
      </header>

      <div id="cardAnimal">
        <img src={imagemAnimal} alt="animal" />
      </div>

      <div className="CardInformacao">
        <h3>Informação sobre o {tipoAnimal}</h3>
        <p>{informacaoAnimal}</p>
      </div>

    </div>
  );
}

export default App;
