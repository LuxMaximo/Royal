import React from 'react';
import './App.css';
import NavBar from './components/navbar/navbar.jsx';
import Home from './components/home/home'
import Characters from './components/character/character.jsx'
import CharacterDetail from './components/characterdetail/characterdetail.jsx'
import CharacterDetail2 from './components/characterdetail/characterdetail2.jsx';
import About from './components/about/about.jsx'
import aaa from './components/data.json'
import luffy from "./components/image/Monkey_D._Luffy.png"
import { Switch , Route} from 'react-router-dom';


function App() {
  return (
    <>
    <NavBar/>
    <Switch>
      
          <Route exact path='/'>
              <Home/>
          </Route>

          <Route path="/about">
            <About/>
          </Route>



          <Route exact path='/charDetail2/:id'>
            <CharacterDetail2/>
          </Route>


          <Route exact path='/charDetail'>
            <CharacterDetail/>
          </Route>

          <Route >
            <h1>
              Error 404 NOT FOUND
            </h1>
          </Route>

    </Switch>
    </>


   /* <div>
      <NavBar />
      <div>
        <Home nombre={aaa.Personajes[0].nombre} foto={aaa.Personajes[0].foto}/>
        <Home nombre={aaa.Personajes[1].nombre} foto={aaa.Personajes[1].foto}/>
        <Home nombre={aaa.Personajes[2].nombre} foto={aaa.Personajes[2].foto}/>
      </div>

      <CharacterDetail />

      <div>
        <About/>
      </div>

    </div>*/
  );
}

export default App;
