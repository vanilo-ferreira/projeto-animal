import './App.css';
import React, { useState } from "react";
import CardAnimal from './components/CardAnimal';
import CardInformacoes from './components/CardInformacoes';
import Topo from './components/Topo';


function App() {

  const [tipoDoComponenteCard, setTipoDoComponenteCard] = useState("cachorro");

  return (
    <div className="App">
      <Topo tipoAnimal={tipoDoComponenteCard} setState={setTipoDoComponenteCard} />
      <CardAnimal tipoAnimal={tipoDoComponenteCard} />
      <CardInformacoes tipoAnimal={tipoDoComponenteCard} />
    </div>
  );
}


export default App;
