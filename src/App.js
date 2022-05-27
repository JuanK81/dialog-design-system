import { useState } from 'react';

import AcctionButton from './components/AcctionButton';
import Modal from './components/Modal';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');

  const modalWarningHandler = () => {
    setShowModal(true);
    setModalType('warning');
  };

  const modalErrorHandler = () => {
    setShowModal(true);
    setModalType('error');
  };
  const modalsuccessHandler = () => {
    setShowModal(true);
    setModalType('success');
  };

  const closeHandler = () => {
    setShowModal(false);
  };
  const cancelHandler = () => {
    setShowModal(false);
  };
  const eraseHandler = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <Modal
          type={modalType}
          onClose={closeHandler}
          onErase={eraseHandler}
          onCancel={cancelHandler}
        />
      )}
      <div className="app">
        <h1>Dialog Design System</h1>
        <div className="app_acctions">
          <AcctionButton
            type="white"
            onClick={modalWarningHandler}
            text="warning"
          />
          <AcctionButton
            type="white"
            onClick={modalsuccessHandler}
            text="success"
          />
          <AcctionButton
            type="white"
            onClick={modalErrorHandler}
            text="error"
          />
        </div>
      </div>
    </>
  );
}

export default App;

//  Task 1 → Que se pueda ver el diseño de los diálogos de warning

// ✅ Task 2 → Que se pueda ver el diseño para los diálogos de success

// ✅ Task 3 → Que se pueda ver el diseño para los diálogos de error

// ✅ Task 4 → Que se pueda ver 3 botones para abrir cada uno de los diálogos y las acciones de cerrar y aceptar son funcionales
