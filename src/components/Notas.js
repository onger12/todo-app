import { useEffect, useState } from 'react'
import Nota from './Nota'
import '../css/nota.css'

const cuerposIniciales = [
    'Mi primera nota',
    'Mi segunda nota',
]

const Notas = ( {cuerpo} ) => {
    const [cuerpos, setCuerpos] = useState(cuerposIniciales)

    useEffect(function () {
        if(cuerpo !== '' && cuerpo !== null && cuerpo !== undefined) {
            setCuerpos(prevCuerpos => prevCuerpos.concat(cuerpo))
        }
    }, [cuerpo])

    return(
        cuerpos.map(cuerpo => <Nota key={cuerpo} cuerpoInicial={cuerpo} />)
    )
}

export default Notas