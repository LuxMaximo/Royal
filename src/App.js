import React from 'react';
import './App.css';
import NavBar from './components/navbar/navbar.jsx';
import Home from './components/home/home'
import Characters from './components/character/character.jsx'
import CharacterDetail from './components/characterdetail/characterdetail.jsx'
import About from './components/about/about.jsx'
import aaa from './components/data.json'
import luffy from "./components/image/Monkey_D._Luffy.png"


function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Home nombre={aaa.Personajes[0].nombre} foto={aaa.Personajes[0].foto}/>
        <Home nombre={aaa.Personajes[1].nombre} foto={aaa.Personajes[1].foto}/>
        <Home nombre={aaa.Personajes[2].nombre} foto={aaa.Personajes[2].foto}/>
        <Home nombre={aaa.Personajes[3].nombre} foto={aaa.Personajes[3].foto}/>
        <Home nombre={aaa.Personajes[4].nombre} foto={aaa.Personajes[4].foto}/>
        <Home nombre={aaa.Personajes[5].nombre} foto={aaa.Personajes[5].foto}/>
        <Home nombre={aaa.Personajes[6].nombre} foto={aaa.Personajes[6].foto}/>
        <Home nombre={aaa.Personajes[7].nombre} foto={aaa.Personajes[7].foto}/>
        <Home nombre={aaa.Personajes[8].nombre} foto={aaa.Personajes[8].foto}/>
        <Home nombre={aaa.Personajes[9].nombre} foto={aaa.Personajes[9].foto}/>
      </div>

      <CharacterDetail />

      <div>
        <About/>
      </div>

    </div>
  );
}

export default App;
