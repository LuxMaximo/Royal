import React from "react";
import "./navbar.css";
import {Link , NavLink} from 'react-router-dom';

export default class Navbar extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div class="navbar">
                <nav>
                    <Link to="/" >Royal</Link>
                    <Link to="/charDetail"> Detalles del personaje</Link>
                    <Link to="/about"> About</Link>
                </nav>
            </div>
                )}
}

//Mostrar el nombre de la aplicacion.
//Tener un link (no lleva a ninguna parte por ahora) al Character Detail.
//Tener un link (no lleva a ninguna parte por ahora) al About.