import React from "react";



export default class character extends React.Component{
    constructor(props){
        super(props);
    }
     
    render(){
        return(
            <div>
                <div>
                    <h2> Imagen</h2>
                    <img src={this.props.fotos}/>
                    <h2> Nombre</h2>
                    <h3 >{this.props.nombre}</h3>
                </div>
            </div>
        )}
}
//Mostrar la Foto y el Nombre del personaje recibidos por props.