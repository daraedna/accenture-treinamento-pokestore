import React from 'react';
import Modal from 'react-bootstrap/Modal';

import { Styled } from './styles';

function ModalComponent(props) {
  return (
    <Modal
      {...props}
      centered
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Styled.Container>
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="content-wrapper">
            {props.children}
          </div>
        </Modal.Body>
      </Styled.Container>
    </Modal>
  );
}

export default ModalComponent;