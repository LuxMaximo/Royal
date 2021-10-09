import React from "react";
import Character from "../character/character";



export default class Home extends React.Component{
    /*constructor(props){
        super(props);
    }*/

    
    render(){
        return(
            <div >
                <Character/>
            </div>
            )
    }
}
//Mostrar la lista de minimo 5 personajes que se encuentren en la aplicacion (informacion Mockeada, creada en un archivo json dentro de mi aplicacion).
//Cada Character Debe mostrar su foto y Nombre