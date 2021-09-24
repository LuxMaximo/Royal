import React from "react";
import "./navbar.css";

export default class Navbar extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div class="navbar">
                
                    <h1 class="nombreApp"> Royal</h1>
                    <a href="#" class="d"> Character Detail</a>                   
                    <a href="#"> About</a>
                
            </div>
                )
    }
}

//Mostrar el nombre de la aplicacion.
//Tener un link (no lleva a ninguna parte por ahora) al Character Detail.
//Tener un link (no lleva a ninguna parte por ahora) al About.