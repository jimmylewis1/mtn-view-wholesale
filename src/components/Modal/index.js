import React, { useState } from 'react';
import Modal from 'react-modal';

import { modalContentWrapper, closeModalBtn, modalTopWrapper,
  modalInstruction, modalPhoneInfo, modalH2, modalWrapper } from './modal.styles';
import { actionButton } from '../../styles/generic.styles';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    borderRadius          : '6px',
  }
};
 
export const ModalComponent = () => {
 const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className={modalWrapper}>
      <button 
        className={actionButton} 
        onClick={() => setModalOpen(true)}>Learn More</button>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className={modalTopWrapper}>
          <div className={closeModalBtn} onClick={() => setModalOpen(false)}>X</div>
        </div>
        <div className={modalContentWrapper}>
          <h2 className={modalH2}>Interested in this item?</h2>
          <div className={modalInstruction}>For more product information, or to schedule a time to see this item, please give Thor a call or send an email.</div>
          {/* TODO: Update Contact Info */}
          <div className={modalPhoneInfo}>555-555-5555</div>
          <a href="mailto: thor.grasteit@gmail.com">
            <div className={actionButton}>Email</div>
          </a>
        </div>
      </Modal>
    </div>
  );
}
