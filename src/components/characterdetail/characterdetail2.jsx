import aaa from "../data.json"
import { useParams } from "react-router";

export default function characterDetail2(){
 
    const parametro = useParams();

    let array=[];

    function encontrado(e){
    array.forEach(element => {
        parametro.id === aaa.Personajes[element].id ? 
        array.map(aaa.Personajes[element].nombre,
            aaa.Personajes[element].apodo, 
            aaa.Personajes[element].posicion, 
            aaa.Personajes[element].recompenza,
            aaa.Personajes[element].sueño,
            aaa.Personajes[element].Ciudad,
            aaa.Personajes[element].amigos): "No existe"
        });
    }
       

    return(
        <>
        <h1>{parametro.id}</h1> 
        
        </>
    )

}