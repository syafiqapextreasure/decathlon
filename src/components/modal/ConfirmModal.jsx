import React, { useState } from 'react';
import { Modal, Button} from 'react-bootstrap';

const ConfirmModal = (props) => {
    return (
        <Modal show={true} onHide={() => props.closeModal()} className='confirm-delete-modal'>
            <Modal.Body>
                <h2>DELETE CONFIRMATION</h2>
                <div dangerouslySetInnerHTML={{__html:props.description}}></div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => props.closeModal()} variant="dark" style={{background:'#92929D', borderColor:'#92929D'}}>CANCEL</Button>
                <Button onClick={() => props.closeModal()} variant="danger">DELETE</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ConfirmModal