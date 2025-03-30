import React, { ReactNode } from 'react';
import Glass from './Glass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import '../modal.css';

interface ModalProps {
    onClose: () => void;
    children: ReactNode;
}

const ModalGeneral: React.FC<ModalProps> = ({ children, onClose }) => {
    return (
        <div className='modal-overlay' onClick={onClose}>
            <Glass className='modal-content' onClick={(e) => e.stopPropagation()}>
                <button className='close-button' onClick={onClose}>
                    <FontAwesomeIcon icon={faXmark} size="lg" />
                </button>
                {children}
            </Glass>
        </div>
    );
};

export default ModalGeneral;