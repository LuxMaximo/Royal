import React from "react";
import Character from "../character/character";

export default class Home extends React.Component{
    /*constructor(props){
        super(props);
    }*/

    
    render(){
        return(
<<<<<<< HEAD
            <div class="menu">
                <ul>
                    <li><Character fotos={this.props.foto} nombre={this.props.nombre}/></li>
                </ul>
=======
            <div >
                <Character/>
>>>>>>> 5e0f18f (TP de formulario y CSS)
            </div>
            )
    }
}
//Mostrar la lista de minimo 5 personajes que se encuentren en la aplicacion (informacion Mockeada, creada en un archivo json dentro de mi aplicacion).
//Cada Character Debe mostrar su foto y Nombre