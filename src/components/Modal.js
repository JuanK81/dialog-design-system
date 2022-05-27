import AcctionButton from './AcctionButton';

const Modal = (props) => {
  if (props.type === 'warning') {
    return (
      <div className="modal-container">
        <div className="modal">
          <button className="modal_close" onClick={props.onClose}>
            X
          </button>
          <div className={`modal_type ${props.type}`}>!</div>
          <h2 className="modal_title">¡Cuidado!</h2>
          <p className="modal_text">No podrás volver atrás</p>
          <div className="modal_acctions">
            <AcctionButton className="acction-button" onClick={props.onErase} text='Borrar'/>

            <AcctionButton className="acction-button" type="white" onClick={props.onCancel} text='Cancelar'/> 
          </div>
        </div>
      </div>
    );
  } else if (props.type === 'success') {
    return (
      <div className="modal-container">
        <div className="modal">
          <button className="modal_close" onClick={props.onClose}>
            X
          </button>
          <div className={`modal_type ${props.type}`}>✔</div>
          <h2 className="modal_title">¡Vamos!</h2>
          <p className="modal_text">Todo Ha salido bien</p>
          <div className="modal_acctions">
            <AcctionButton className="acction-button" text='Cerrar pestaña' onClick={props.onClose}/>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="modal-container">
        <div className="modal">
          <button className="modal_close" onClick={props.onClose}>
            X
          </button>
          <div className={`modal_type ${props.type}`}>X</div>
          <h2 className="modal_title">Upss</h2>
          <p className="modal_text">Algo ha pasado</p>
        </div>
      </div>
    );
  }
};

export default Modal;
