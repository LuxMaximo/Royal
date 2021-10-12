import React from 'react';
import './App.css';
import NavBar from './components/navbar/navbar.jsx';
import Home from './components/home/home'
import CharacterDetail from './components/characterdetail/characterdetail.jsx'
import About from './components/about/about.jsx'
<<<<<<< HEAD
import aaa from './components/data.json'
import luffy from "./components/image/Monkey_D._Luffy.png"
=======
import { Switch , Route} from 'react-router-dom';
import Formulario from './components/form/formularioControlado.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> 5e0f18f (TP de formulario y CSS)


function App() {
  return (
<<<<<<< HEAD
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
=======
    <>
    <NavBar/>
    <Switch>
      
          <Route exact path='/'>
              <Home/>
          </Route>

          <Route exact path='/form'>
            <Formulario />
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

>>>>>>> 5e0f18f (TP de formulario y CSS)
  );
}

export default App;
