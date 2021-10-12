import React, {useState} from "react/index";
import {Form , FloatingLabel, Button , OverlayTrigger, Tooltip} from 'react-bootstrap'
import { GoAlert } from 'react-icons/go';
import { BiCheck } from 'react-icons/bi'

export function validacion(input){
    let error = {}
     if(!input.username){
        error.username = "Usuario requerido"
     }else if( !/\S+@\S+\.\S+/.test(input.username)){
         error.username = "El usuario debe ser un correo electronico"
     }

     if(!input.asunto){
         error.asunto = "Asunto requerido"
     }else if(!/([A-Za-z0-9]+){10}/.test(input.asunto)){
         error.asunto = "El minimo de caracteres en el Asunto es de 10"
     }

     if(!input.mensaje){
         error.mensaje = "Falta escribir el detalle del mensaje"
     }else if(!/([A-Za-z0-9]+){0,256}/.test(input.mensaje)){
         error.mensaje = "Se llego al maximo de caracteres posibles"
     }

     return error
}

export default function FormularioControlado(){

    const [state, setState] = useState({
        username:'',
        asunto: "",
        mensaje:""
    })

    const [cont , setCont] = useState()

    const [fail , setFail] = useState({
        username: "Usuario requerido",
        asunto:"Asunto requerido",
        mensaje:"Mensaje requerido"
    })

    function onSubmitForm(e){
        e.preventDefault();
        alert(`el usuario es ${state.username} y el asunto es ${state.asunto}`)
    }

    function onHandleChange(e){
        setState({
            ...state,
            [e.target.name] : e.target.value
        })

        setFail(validacion({
            ...state,
            [e.target.name] : e.target.value
        }))

    }

    function onKeyUP(e){
        var cant = e.target.value.length +1
        var resultado;
        resultado =cant - 1
        setCont(resultado)

    }

    const css = {
        tamaño:{
            width: "650px",
            margin: "0 650px"
        },

        mensaje : {
            height: '200px',
            margin: '0 0 -5px'
            
        },
/*
        boton: {
            margin: '10px 0 0 260px'
        }*/
    }

    const renderTooltipCorreo = (props) => (
        <Tooltip id="button-tooltip" {...props}>
           {fail.username}
        </Tooltip>
      );

      const renderTooltipAsunto = (props) => (
        <Tooltip id="button-tooltip" {...props}>
        {fail.asunto}
        </Tooltip>
      );



    return(
        <>
        <div>
            <form onSubmit={(e) => onSubmitForm(e)} style={css.tamaño} >
                <div>
                    <FloatingLabel controlId="floatingInput" label="Correo Electronico" className="mb-3" >
                        <Form.Control 
                        type="email" 
                        placeholder="name@example.com" 
                        name="username"
                        value={state.username}
                        onChange={(e) => onHandleChange(e)}/>
                    </FloatingLabel>
                    
                    <p>{fail.username ? 
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltipCorreo}
                     > 
                    <Button variant="primary"> <GoAlert /> </Button> 
                    </OverlayTrigger> :
                    <Button variant="success"><BiCheck /></Button>}</p>
                         
                </div>

                <div>
                    <FloatingLabel controlId="floatingPassword" label="Asunto" className="mb-3">
                        <Form.Control 
                        type="text" 
                        name="asunto"
                        placeholder="Asunto" 
                        value={state.asunto}
                        onChange={(e) => onHandleChange(e)}/>
                    </FloatingLabel>
                    
                    <p>{fail.asunto ? 
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltipAsunto}
                     > 
                    <Button variant="primary"> <GoAlert /> </Button> 
                    </OverlayTrigger> :
                    <Button variant="success"><BiCheck /></Button>}
                    </p>
                </div>


                <div >
                    <FloatingLabel controlId="floatingInput"   label="Describa el mensaje lo mas que pueda" className="mb-2">
                        <Form.Control 
                        as="textarea" 
                        rows={3}
                        type="text"
                        name="mensaje"
                        placeholder="Describa el mensaje lo mas que pueda"
                        maxLength={256}
                        value={state.mensaje}
                        style={css.mensaje}
                        onChange={(e) => onHandleChange(e)}
                        onKeyUp={(e) => onKeyUP(e)}
                        />
                        <p style={{color : "white"}}>{256 - cont}</p>
                    </FloatingLabel>

                </div>

                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{fail.asunto || fail.username || fail.mensaje ? "Complete los campos requeridos" : false}</Tooltip>}>
                <span className="d-inline-block" >
                    <Button
                    variant="primary" 
                    type="submit" 
                    disabled={fail.asunto || fail.username || fail.mensaje ? true : false}>
                        Enviar
                    </Button>
                    </span>
                </OverlayTrigger>
            </form>
        </div>
        </>
    )

}

/*
<form onSubmit={(e) => onSubmitForm(e)}>
<div>
    <label> Correo Electronico del usuario</label>
    <input
        type="email"
        required
        name="username"
        placeholder="Correo Electronico"
        value={state.username}
        onChange={(e) => onHandleChange(e)}
    />
    {fail.username ? <p> {fail.username} </p> : <p> Todo ok</p>}
</div>

<div>
    <label> Asunto</label>
    <input
        type="text"
        required
        name="asunto"
        placeholder="Minimo 10 caracteres"
        value={state.asunto}
        onChange={(e) => onHandleChange(e)}
    />
    {fail.asunto ? <p> {fail.asunto} </p> : <p> Todo ok</p>}
</div>

<div>
    <label>Describir con detalles del mensaje</label>
    <input
        type="text"
        required
        name="mensaje"
        maxLength={256}
        value={state.mensaje}
        onChange={(cont = state.contM) => setState(cont -1)}
        onChange={(e) => onHandleChange(e)}
    />
    {state.cont === 0 ? <p> No puede poner mas caracteres</p> : <p></p>}
</div>
<div>
    <input
        type="submit"
        disabled={fail.asunto || fail.username || fail.mensaje ? true : false}
    />
</div>
</form>
*/