import React from "react";
import {Link} from 'react-router-dom';
import aaa from '../data.json';
import luffy from '../image/Monkey_D._Luffy.png';
import zoro from '../image/Roronoa_Zoro.png';
import sanji from '../image/Sanji.png';
import nami from '../image/Nami.png';
import usoop from '../image/Usopp.png';
import chopper from '../image/Tony_Tony_Chopper.png';
import franky from '../image/Franky.png';
import robin from '../image/Nico_Robin.png';
import brook from '../image/Brook.png';
import jinbe from '../image/Jinbe.png';


export default function character(){

        return(
            <div>
<table>
                    
                    <tr>
                        <td>{aaa.Personajes[0].nombre}</td>
                        <td><Link to={`/charDetail/${aaa.Personajes[0].nombre}/${aaa.Personajes[0].id}`}>{aaa.Personajes[1].nombre} </Link></td>
                        <td>{aaa.Personajes[2].nombre}</td>
                        <td>{aaa.Personajes[3].nombre}</td>
                        <td>{aaa.Personajes[4].nombre}</td>
                        <td>{aaa.Personajes[5].nombre}</td>
                        <td>{aaa.Personajes[6].nombre}</td>
                        <td>{aaa.Personajes[7].nombre}</td>
                        <td>{aaa.Personajes[8].nombre}</td>
                        <td>{aaa.Personajes[9].nombre}</td>
                    </tr>

                    <tr>
                        <td><Link to={`/charDetail2/${aaa.Personajes[0].id}`}><img src={luffy}/></Link></td>
                        <td><Link to={`/charDetail2/${aaa.Personajes[1].id}`}><img src={zoro} /></Link></td>
                        <td><Link to={`/charDetail2/${aaa.Personajes[2].id}`}><img src={nami} /></Link></td>
                        <td><Link to={`/charDetail2/${aaa.Personajes[3].id}`}><img src={usoop} /></Link></td>
                        <td><Link to={`/charDetail2/${aaa.Personajes[4].id}`}><img src={sanji} /></Link></td>
                        <td><Link to={`/charDetail2/${aaa.Personajes[5].id}`}><img src={chopper} /></Link></td>
                        <td><Link to={`/charDetail2/${aaa.Personajes[6].id}`}><img src={robin} /></Link></td>
                        <td><Link to={`/charDetail2/${aaa.Personajes[7].id}`}><img src={franky} /></Link></td>
                        <td><Link to={`/charDetail2/${aaa.Personajes[8].id}`}><img src={brook} /></Link></td>
                        <td><Link to={`/charDetail2/${aaa.Personajes[9].id}`}><img src={jinbe} /></Link></td>
                    </tr>


                </table>
            </div>
        )
}
//Mostrar la Foto y el Nombre del personaje recibidos por props.
/*
<div>
<h2> Imagen</h2>
<img src={this.props.fotos}/>
<h2> Nombre</h2>
<h3 >{this.props.nombre}</h3>
</div>*/