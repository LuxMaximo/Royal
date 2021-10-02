import React from "react";
import Datos from "../data.json"

function mostrarValor(){
    var valor = document.getElementsByName('seleccion').values;
    return console.log(valor);
}



export default function characterDetail(){


    return(
            <div>
                
                <select  name="seleccion" onChange={mostrarValor()}>
                    <option value={0} >{Datos.Personajes[0].nombre}</option>
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
               

            

            <table>
                <tr>
                    <td ></td>
                </tr>
            </table>
            </div>
            )}


//Tener un select con los nombres de los personajes Mockeados en el archivo json.
//Al seleccionar alguno de los nombres en el Select, Mostrar la informacion mas detallada de ese personaje.