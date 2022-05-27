import { useState } from 'react';

import AcctionButton from './components/AcctionButton';
import Modal from './components/Modal';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');

  const modalattentionHandler = () => {
    setShowModal(true);
    setModalType('cuidado');
  };

  const modalErrorHandler = () => {
    setShowModal(true);
    setModalType('error');
  };
  const modalOkHandler = () => {
    setShowModal(true);
    setModalType('ok');
  };

  const closeHandler = () => {
    console.log('first');
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <Modal
          type={modalType}
          onClose={closeHandler}
          onErase={closeHandler}
          onCancel={closeHandler}
        />
      )}
      <div className="app">
        <h1>Dialog Design System</h1>
        <div className="app_acctions">
          <AcctionButton
            type="white"
            onClick={modalattentionHandler}
            text="Cuidado"
          />
          <AcctionButton type="white" onClick={modalOkHandler} text="Vamos" />
          <AcctionButton type="white" onClick={modalErrorHandler} text="Upss" />
        </div>
      </div>
    </>
  );
}

export default App;
