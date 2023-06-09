import React from 'react';
import ReactDom from 'react-dom';

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,.7)',
    zIndex: 1000
}

export default function Modal({ children, isOpen, onClose }) {
    return ReactDom.createPortal(
        isOpen ? 
        <>
            <div style={OVERLAY_STYLES}></div>
            <div style={MODAL_STYLES}>
                {children}
                <button onClick={onClose}>Close Form</button>
            </div>
        </> 
        :
        null,
        document.getElementById('portal')
    )
}
