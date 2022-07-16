import { useState } from 'react'
import Notas from './components/Notas'
import './css/index.css'

const App = () => {
    const [cuerpo, setCuerpo] = useState('')

    return (
        <main>
            <h1>App</h1>
            <section>
                <h3>Lista de tareas</h3>
                <form onSubmit={e => {
                    e.preventDefault()
                    setCuerpo(e.target[0].value)
                    e.target[0].value = ''
                }}>
                    <input placeholder="Escribe una nota..." autoFocus />
                    <button>+</button>
                </form>
                <div className='notas'>
                    <Notas cuerpo={cuerpo} />
                </div>
            </section>
        </main>
    )
}
export default App