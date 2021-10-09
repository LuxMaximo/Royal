import React from 'react';
import './App.css';
import NavBar from './components/navbar/navbar.jsx';
import Home from './components/home/home'
import CharacterDetail from './components/characterdetail/characterdetail.jsx'
import CharacterDetail2 from './components/characterdetail/characterdetail2.jsx';
import About from './components/about/about.jsx'
import { Switch , Route} from 'react-router-dom';
import Formulario from './components/form/formularioControlado.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
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

  );
}

export default App;
