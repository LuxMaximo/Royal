import aaa from "../data.json"
import { useParams } from "react-router";
import { useState } from "react";
import { Link } from "react-router-dom";
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
import estilo from './characterdetail2.module.css'

export default function CharacterDetail2(){
 
    const parametro = useParams();
    const [state] = useState({
        cont: 0,
        pj : [
            aaa.Personajes[parametro.id -1].nombre, //0
            aaa.Personajes[parametro.id -1].apodo, //1
            aaa.Personajes[parametro.id -1].posicion, //2
            aaa.Personajes[parametro.id -1].recompenza,//3
            aaa.Personajes[parametro.id -1].sueño,//4
            aaa.Personajes[parametro.id -1].Ciudad,//5
            aaa.Personajes[parametro.id -1].amigos,//6
            aaa.Personajes[parametro.id -1].id
        ]
    })
    let array = state.pj[6].map( function (e){
        return e
    })

//    let id = parametro.id
  //  console.log(id)
        

    return(
        <>
        <Card className={estilo.posicionCard}>
            <Card.Img className={estilo.imagenes} variant="top" src={
                        state.pj[7] === 1 ? luffy : 
                        state.pj[7] === 2 ? zoro : 
                        state.pj[7] === 3 ? nami :
                        state.pj[7] === 4 ? usoop :
                        state.pj[7] === 5 ? sanji :
                        state.pj[7] === 6 ? chopper :
                        state.pj[7] === 7 ? robin :
                        state.pj[7] === 8 ? franky :
                        state.pj[7] === 9 ? brook :
                        state.pj[7] === 10 ? jinbe : "No hay imagen"
            }/>
                <Card.Body>
                    <Card.Title>{state.pj[0]}</Card.Title>
                    <Card.Text>
                        {state.pj[1]}
                    </Card.Text>
                </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Mi sueño es {state.pj[4]}</ListGroupItem>
                <ListGroupItem>Yo soy {state.pj[2]}</ListGroupItem>
                <ListGroupItem>Recompensa  <img src={moneda} alt="moneda de berry"/>{state.pj[3]}</ListGroupItem>
                <ListGroupItem>Mi ciudad es {state.pj[5]}</ListGroupItem>
                <ListGroupItem>Mis amigos son:</ListGroupItem>
                <ListGroupItem>{array[0]}</ListGroupItem>
                <ListGroupItem>{array[1]}</ListGroupItem>
                <ListGroupItem>{array[2]}</ListGroupItem>
                <ListGroupItem>{array[3]}</ListGroupItem>
                <ListGroupItem>{array[4]}</ListGroupItem>
                <ListGroupItem>{array[5]}</ListGroupItem>
                <ListGroupItem>{array[6]}</ListGroupItem>
                <ListGroupItem>{array[7]}</ListGroupItem>
                <ListGroupItem>{array[8]}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Link to="/">Volver al Home</Link>
            </Card.Body>
        </Card>        
        </>
    )

}