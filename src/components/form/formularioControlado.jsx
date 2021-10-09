import React, {useState} from "react/index";

export function validacion(input){
    let error = {}
     if(!input.username){
        error.username = "Usuario requerido"
     }else if( !/\S + @ \S+ \. \S+/.test(input.username)){
         error.username = "El usuario debe ser un correo electronico"
     }

     if(!input.asunto){
         error.asunto = "Asunto requerido"
     }else if(input.asunto<10){
         error.asunto = "El minimo de caracteres en el asunto es de 10"
     }

     if(!input.mensaje){
         error.mensaje = "Falta escribir el detalle del mensaje"
     }else if(input.mensaje > 256){
         error.mensaje = "Se llego al maximo de caracteres posibles"
     }

     return error
}

export default function formularioControlado(){

    const [state, setState] = useState({
        username:'',
        asunto:'',
        mensaje:'',
        cont: 256
    })

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
    return(
        <>
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
                        minLength={10}
                        value={state.asunto}
                        onChange={(e) => onHandleChange(e)}
                    />
                    {fail.asunto ? <p> {fail.asunto} </p> : <p> Todo ok</p>}
                </div>

                <div>
                    <label>Describir con detalles el mensaje</label>
                    <input
                        type="text"
                        required
                        name="mensaje"
                        maxLength={256}
                        value={state.mensaje}
                        onChange={(cont = state.cont) => setState(cont -1)}
                        onChange={(e) => onHandleChange(e)}
                    />
                    {state.cont === 0 ? <p> No puede poner mas caracteres</p> : <p></p>}
                </div>
                <div>
                    <input
                        type="submit"
                        disabled={fail.asunto || fail.username ? true : false}
                    />
                </div>
            </form>
        </>
    )

}