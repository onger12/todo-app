const EditarNota = ( { setCuerpo, setEditando } ) => {
    const handleNote = e => {
        e.preventDefault()
        setCuerpo(e.target[0].value)
        setEditando(false)
    }
    return(
        <div className="nota">
            <form onSubmit={handleNote}>
                <input type='text' autoFocus/>
                <button>OK</button>
            </form>
        </div>
    )
}

export default EditarNota