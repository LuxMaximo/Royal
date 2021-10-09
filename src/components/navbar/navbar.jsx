import React from "react";
import {Link } from 'react-router-dom';
import estilo from './navbar.module.css';
import {Nav} from 'react-bootstrap';

export default class Navbar extends React.Component{
   /* constructor(){
        super();
    }*/
    

    render(){
        const style={
            r:{
                color: 'aliceblue'
            }
        }
        return(
            
            <div>
                <Nav variant="pills"  defaultActiveKey="link-0" >
                <Nav.Item>
                    <Link className={estilo.r} to='/'>
                        <Nav.Link style={style.r} eventKey="link-0" href="/">Royal</Nav.Link>
                    </Link>
                </Nav.Item>

                <Nav.Item>
                    <Link className={estilo.r} to="/charDetail">
                        <Nav.Link style={style.r} eventKey="link-1" href="/charDetail">Detalles del personaje</Nav.Link>
                    </Link>
                </Nav.Item>

                <Nav.Item>
                    <Link className={estilo.r} to="/about">
                        <Nav.Link  style={style.r} eventKey="link-3" href='/about'> About</Nav.Link>
                    </Link>
                </Nav.Item>
                </Nav>
                <br/>
            </div>
                )}
}

//Mostrar el nombre de la aplicacion.
//Tener un link (no lleva a ninguna parte por ahora) al Character Detail.
//Tener un link (no lleva a ninguna parte por ahora) al About.
/*<nav className={estilo.navbar}>
<Link to="/" >Royal</Link>
<Link className={estilo.d} to="/charDetail"> Detalles del personaje</Link>
<Link className={estilo.a} to="/about"> About</Link>
</nav>*/