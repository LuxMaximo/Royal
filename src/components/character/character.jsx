import React from "react";
<<<<<<< HEAD



export default class character extends React.Component{
    constructor(props){
        super(props);
    }
     
    render(){
=======
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
import {Carousel} from 'react-bootstrap';



export default function character(){
    const style = {
        imagen:{
            margin: " 0 760px",
            width: "350px",
            height: "750px"
        },
        letra:{
            color: "yellow"
        }
    }
>>>>>>> 5e0f18f (TP de formulario y CSS)
        return(
            
            <div>
<<<<<<< HEAD
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
=======
               <Carousel>
                   
               <Carousel.Item>
                    <Link to={`/charDetail2/${aaa.Personajes[0].id}`}>
                        <img style={style.imagen} src={luffy} alt="no hay imagen"/>
                    </Link>
                <Carousel.Caption>
                    <h3 style={style.letra}>{aaa.Personajes[0].nombre}</h3>
                    <h5 style={style.letra}>{aaa.Personajes[0].apodo}</h5>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <Link to={`/charDetail2/${aaa.Personajes[1].id}`}>
                        <img style={style.imagen} src={zoro} alt="no hay imagen"/>
                    </Link>
                <Carousel.Caption>
                    <h3 style={style.letra}>{aaa.Personajes[1].nombre}</h3>
                    <h5 style={style.letra}>{aaa.Personajes[1].apodo}</h5>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <Link to={`/charDetail2/${aaa.Personajes[2].id}`}>
                        <img style={style.imagen} src={nami} alt="no hay imagen"/>
                    </Link>
                <Carousel.Caption>
                    <h3 style={style.letra}>{aaa.Personajes[2].nombre}</h3>
                    <h5 style={style.letra}>{aaa.Personajes[2].apodo}</h5>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <Link to={`/charDetail2/${aaa.Personajes[3].id}`}>
                        <img style={style.imagen} src={usoop} alt="no hay imagen"/>
                    </Link>
                <Carousel.Caption>
                    <h3 style={style.letra}>{aaa.Personajes[3].nombre}</h3>
                    <h5 style={style.letra}>{aaa.Personajes[3].apodo}</h5>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <Link to={`/charDetail2/${aaa.Personajes[4].id}`}>
                        <img style={style.imagen} src={sanji} alt="no hay imagen"/>
                    </Link>
                <Carousel.Caption>
                    <h3 style={style.letra}>{aaa.Personajes[4].nombre}</h3>
                    <h5 style={style.letra}>{aaa.Personajes[4].apodo}</h5>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <Link to={`/charDetail2/${aaa.Personajes[5].id}`}>
                        <img style={style.imagen} src={chopper} alt="no hay imagen"/>
                    </Link>
                <Carousel.Caption>
                    <h3 style={style.letra}>{aaa.Personajes[5].nombre}</h3>
                    <h5 style={style.letra}>{aaa.Personajes[5].apodo}</h5>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <Link to={`/charDetail2/${aaa.Personajes[6].id}`}>
                        <img style={style.imagen} src={robin} alt="no hay imagen"/>
                    </Link>
                <Carousel.Caption>
                    <h3 style={style.letra}>{aaa.Personajes[6].nombre}</h3>
                    <h5 style={style.letra}>{aaa.Personajes[6].apodo}</h5>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <Link to={`/charDetail2/${aaa.Personajes[7].id}`}>
                        <img style={style.imagen} src={franky} alt="no hay imagen"/>
                    </Link>
                <Carousel.Caption>
                    <h3 style={style.letra}>{aaa.Personajes[7].nombre}</h3>
                    <h5 style={style.letra}>{aaa.Personajes[7].apodo}</h5>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <Link to={`/charDetail2/${aaa.Personajes[8].id}`}>
                        <img style={style.imagen} src={brook} alt="no hay imagen"/>
                    </Link>
                <Carousel.Caption>
                    <h3 style={style.letra}>{aaa.Personajes[8].nombre}</h3>
                    <h5 style={style.letra}>{aaa.Personajes[8].apodo}</h5>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <Link to={`/charDetail2/${aaa.Personajes[9].id}`}>
                        <img style={style.imagen} src={jinbe} alt="no hay imagen"/>
                    </Link>
                <Carousel.Caption>
                    <h3 style={style.letra}>{aaa.Personajes[9].nombre}</h3>
                    <h5 style={style.letra}>{aaa.Personajes[9].apodo}</h5>
                    </Carousel.Caption>
                </Carousel.Item>

              

                </Carousel>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                
            </div>
        )
}/*
                <table> 
                    <tr>
                        <td><Link className={estilo.imagen} to={`/charDetail2/${aaa.Personajes[0].id}`}>{aaa.Personajes[0].nombre}</Link></td>
                        <td><Link to={`/charDetail2/${aaa.Personajes[1].id}`}>{aaa.Personajes[1].nombre} </Link></td>
                        <td><Link to={`/charDetail2/${aaa.Personajes[2].id}`}>{aaa.Personajes[2].nombre}</Link></td>
                        <td><Link to={`/charDetail2/${aaa.Personajes[3].id}`}>{aaa.Personajes[3].nombre}</Link></td>
                        <td><Link to={`/charDetail2/${aaa.Personajes[4].id}`}>{aaa.Personajes[4].nombre}</Link></td>
                        <td><Link to={`/charDetail2/${aaa.Personajes[5].id}`}>{aaa.Personajes[5].nombre}</Link></td>
                        <td><Link to={`/charDetail2/${aaa.Personajes[6].id}`}>{aaa.Personajes[6].nombre}</Link></td>
                        <td><Link to={`/charDetail2/${aaa.Personajes[7].id}`}>{aaa.Personajes[7].nombre}</Link></td>
                        <td><Link to={`/charDetail2/${aaa.Personajes[8].id}`}>{aaa.Personajes[8].nombre}</Link></td>
                        <td><Link to={`/charDetail2/${aaa.Personajes[9].id}`}>{aaa.Personajes[9].nombre}</Link></td>
                    </tr>

                    <tr>
                        <td><Link to={`/charDetail2/${aaa.Personajes[0].id}`}><img src={luffy} alt="no hay imagen"/></Link></td>
                        <td><Link to={`/charDetail2/${aaa.Personajes[1].id}`}><img src={zoro} alt="no hay imagen"/></Link></td>
                        <td><Link to={`/charDetail2/${aaa.Personajes[2].id}`}><img src={nami} alt="no hay imagen"/></Link></td>
                        <td><Link to={`/charDetail2/${aaa.Personajes[3].id}`}><img src={usoop} alt="no hay imagen"/></Link></td>
                        <td><Link to={`/charDetail2/${aaa.Personajes[4].id}`}><img src={sanji} alt="no hay imagen"/></Link></td>
                        <td><Link to={`/charDetail2/${aaa.Personajes[5].id}`}><img src={chopper} alt="no hay imagen" /></Link></td>
                        <td><Link to={`/charDetail2/${aaa.Personajes[6].id}`}><img src={robin} alt="no hay imagen"/></Link></td>
                        <td><Link to={`/charDetail2/${aaa.Personajes[7].id}`}><img src={franky} alt="no hay imagen"/></Link></td>
                        <td><Link to={`/charDetail2/${aaa.Personajes[8].id}`}><img src={brook} alt="no hay imagen"/></Link></td>
                        <td><Link to={`/charDetail2/${aaa.Personajes[9].id}`}><img src={jinbe} alt="no hay imagen"/></Link></td>
                    </tr>
                </table>*/
>>>>>>> 5e0f18f (TP de formulario y CSS)
