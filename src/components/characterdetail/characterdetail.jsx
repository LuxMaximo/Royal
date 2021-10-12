import React, {  useState } from "react";
import Datos from "../data.json"
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import moneda from '../image/Berrysymbol.png';
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
import estilo from './characterdetail.module.css'
import { Form } from "react-bootstrap";


export default function CharacterDetail(){

    const [estado, setEstado] = useState({ 
        pj : [],
        amigos: []
    });
    const [mostrar , setMostrar] = useState(false);

    let array = [];

    async function obtenerValor(e){
        var v = e.target.value;

       array = [
           Datos.Personajes[v].nombre,
           Datos.Personajes[v].apodo,
           Datos.Personajes[v].posicion,
           Datos.Personajes[v].recompenza,
           Datos.Personajes[v].sueño,
           Datos.Personajes[v].id,
           Datos.Personajes[v].Ciudad
        ]
        estado.amigos = Datos.Personajes[v].amigos
        //console.log(array , "primer array") 
       await setEstado({pj: array, amigos : estado.amigos})
       setMostrar(true)
    }



    console.log(estado,"viendo estado")


    const estilo1 = {style : {width : "330px", margin: " 0 850px"}}

    console.log(estado.amigos , "Viendo el array 2")
    return(
            <div>
                <Form.Select aria-label="Default select example" style={estilo1.style} className={estilo.seleccion} onChange={(e) =>obtenerValor(e)}>
                    <option hidden={mostrar ? true : false}> Seleccione un personaje</option>
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
                </Form.Select>
               

            

                <Card className={estilo.posicionCard} hidden={mostrar === false ? true : false} >
                    <Card.Img variant="top" className={estilo.imagenes} src={
                        estado.pj[5] === 1 ? luffy : 
                        estado.pj[5] === 2 ? zoro : 
                        estado.pj[5] === 3 ? nami :
                        estado.pj[5] === 4 ? usoop :
                        estado.pj[5] === 5 ? sanji :
                        estado.pj[5] === 6 ? chopper :
                        estado.pj[5] === 7 ? robin :
                        estado.pj[5] === 8 ? franky :
                        estado.pj[5] === 9 ? brook :
                        estado.pj[5] === 10 ? jinbe : ""
                    } />
                    <Card.Body>
                        <Card.Title>{estado.pj[0]}</Card.Title>
                            <Card.Text>
                                {estado.pj[1]}
                            </Card.Text>
                        <ListGroup >
                            <ListGroupItem >Mi sueño es {estado.pj[4]}</ListGroupItem>
                            <ListGroupItem>Yo soy {estado.pj[2]}</ListGroupItem>
                            <ListGroupItem>Recompensa  <img src={moneda} alt="moneda de berry"/> {estado.pj[3]}</ListGroupItem>
                            <ListGroupItem>Mi ciudad es {estado.pj[6]}</ListGroupItem>
                            <ListGroupItem>Mis amigos son:</ListGroupItem>
                            <ListGroupItem>{estado.amigos[0]}</ListGroupItem>
                            <ListGroupItem>{estado.amigos[1]}</ListGroupItem>
                            <ListGroupItem>{estado.amigos[2]}</ListGroupItem>
                            <ListGroupItem>{estado.amigos[3]}</ListGroupItem>
                            <ListGroupItem>{estado.amigos[4]}</ListGroupItem>
                            <ListGroupItem>{estado.amigos[5]}</ListGroupItem>
                            <ListGroupItem>{estado.amigos[6]}</ListGroupItem>
                            <ListGroupItem>{estado.amigos[7]}</ListGroupItem>
                            <ListGroupItem>{estado.amigos[8]}</ListGroupItem>
                        </ListGroup>
                </Card.Body>

                

                </Card>
            </div>
            )}
            /*

*/
//Tener un select con los nombres de los personajes Mockeados en el archivo json.
//Al seleccionar alguno de los nombres en el Select, Mostrar la informacion mas detallada de ese personaje.