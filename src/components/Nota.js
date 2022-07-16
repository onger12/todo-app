import { useEffect, useState } from "react"
import EditarNota from "./EditarNota"

const Nota = ( { cuerpoInicial } ) => {
    const [cuerpo, setCuerpo] = useState(cuerpoInicial)
    const [checked, setChecked] = useState(false)
    const [editando, setEditando] = useState(false)
    const [activo, setActivo] = useState(true)

    useEffect(() => {
        setChecked(false)
    }, [editando])

    if (!activo) return null

    return(
        editando ?
            <EditarNota setCuerpo={setCuerpo} setEditando={setEditando} /> :
            <div className="nota">
                <label>
                    <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>
                    {checked ? 
                        <del>{cuerpo}</del> :
                        cuerpo
                    }
                </label>
                <div className="nota-botones">
                    <button className="btn-editar" onClick={() => setEditando(!editando)}>Editar</button>
                    <button className="btn-eliminar" onClick={() => setActivo(!activo)}>Eliminar</button>
                </div>
            </div>
    )
}

export default Nota