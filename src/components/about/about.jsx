import React from "react";
import { NavLink } from "react-router-dom";
import estilo from './about.module.css'


export default function about(){
  /*  const  style={
        separacion:{
            margin:"0 20%"
        }*/

        return(

            <div className={estilo.letra}>
                <br/>
                <tr>
                    <th> Nombre </th>
                    <th> Apellido </th>
                    <th> DNI </th>
                    <th className={estilo.separacion}> Correo </th>
                </tr>
                <tr>
                    <td> Maximiliano </td>
                    <td> Motok </td>
                    <td > 40330508 </td>
                    <td className={estilo.separacion}> machimo1997@gmail.com </td>
                    <td><NavLink className={estilo.link} to="/form" > Contacto </NavLink> </td>
                </tr>        
                   
            </div>
            )
}
//Mostrar informacion sobre el creador de la APP.