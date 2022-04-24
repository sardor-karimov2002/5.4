import React from 'react';
import "./Modal.scss"

const Modal = ({reference}) => {
    return (
        <div ref={reference} className='modal'>
            <div className='modal__content'>hello sardor</div>
        </div>
    );
}

export default Modal;
