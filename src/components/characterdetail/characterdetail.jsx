import React, {  useState } from "react";
import Datos from "../data.json"

<<<<<<< HEAD
export default class characterDetail extends React.Component{
    constructor(){
        super();
    }
=======

function obtenerValor(e){
    var v = e.target.value;
   console.log(v);
   let array = [];
   array = [ Datos.Personajes[v].nombre, 
   Datos.Personajes[v].apodo,
   Datos.Personajes[v].posicion,
   Datos.Personajes[v].recompenza,
   Datos.Personajes[v].sueño]
   console.log(array)
   return <td>{array}</td>;
}
>>>>>>> 5e0f18f (TP de formulario y CSS)

mostrar(){
    
    let valor = document.getElementById("seleccion").value;

    var datos = valor;
    return valor
}
    

    render(){
        return(
            <div>
                
<<<<<<< HEAD
                <select id="seleccion" onChange={this.mostrar}>
                    <option value={0}>{Datos.Personajes[0].nombre}</option>
=======
                <select  name="seleccion" id="seleccion" onChange={(e) =>obtenerValor(e)}>
                    <option> Seleccione un personaje</option>
                    <option value={0} >{Datos.Personajes[0].nombre}</option>
>>>>>>> 5e0f18f (TP de formulario y CSS)
                    <option value={1}>{Datos.Personajes[1].nombre} </option>
                    <option value={2}>{Datos.Personajes[2].nombre} </option>
                    <option value={3}>{Datos.Personajes[3].nombre} </option>
                    <option value={4}>{Datos.Personajes[4].nombre} </option>
                    <option value={5}>{Datos.Personajes[5].nombre} </option>
                    <option value={6}>{Datos.Personajes[6].nombre} </option>
                    <option value={7}>{Datos.Personajes[7].nombre} </option>
                    <option value={8}>{Datos.Personajes[8].nombre} </option>
                    <option value={9}>{Datos.Personajes[9].nombre} </option>
                </select>

            
            <ul>
                <li>{}</li>
            </ul>

<<<<<<< HEAD
=======
            <table>
                <tr>
                    <td> Nombre</td>
                </tr>
                <tr>
                    <td value="sssss"> {obtenerValor }</td>
                </tr>
            </table>
>>>>>>> 5e0f18f (TP de formulario y CSS)
            </div>
            )}
}

//Tener un select con los nombres de los personajes Mockeados en el archivo json.
//Al seleccionar alguno de los nombres en el Select, Mostrar la informacion mas detallada de ese personaje.