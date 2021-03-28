const Modal = props => {
    const modal =
        <div className="modal-shadow">
        <div className="modal">
            <h3>Instrukcja:</h3>
            <p><i className="fas fa-play"></i> - start</p>
            <p><i className="fas fa-pause"></i> - pauza</p>
            <p><i className="fas fa-stop"></i> - stop</p>
            <p><i className="fas fa-times"></i> - skasuj wszystko (łącznie z archiwum)</p>
            <p><strong>archiwum</strong> - zobacz wcześniejsze pomiary</p>
            <button className="close" onClick={props.click}>Zamknij</button>
        </div>
    </div>
    
    return (
        <>
            {props.showModal && modal}
        </>
    )
}
    
export default Modal