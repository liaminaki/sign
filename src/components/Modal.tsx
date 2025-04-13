import React from 'react';
import Glass from './Glass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import '../modal.css';

interface ModalProps {
    onClose: () => void;
    src: string;
    onPractice: () => void;
    title: string;
}

const Modal: React.FC<ModalProps> = ({ onClose, src, title, onPractice }) => {
    return (
        <div className='modal-overlay' onClick={onClose}>
            <Glass className='modal-content' onClick={(e) => e.stopPropagation()}>
                <button className='close-button' onClick={onClose}>
                    <FontAwesomeIcon icon={faXmark} size="lg" />
                </button>
                <model-viewer
                    src={src}
                    camera-controls
                    autoplay
                    // disable-zoom
                    shadow-intensity="1"
                    style={{ width: '100%', height: '300px' }}
                    environment-image="legacy"
                ></model-viewer>
                <p>{title}</p>
                <button className='action-button' onClick={onPractice}>Practice</button>
            </Glass>
        </div>
    );
};

export default Modal;