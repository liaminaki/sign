import React, { useState } from 'react';
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
    const [view, setView] = useState<'3d' | 'video'>('3d');

    return (
        <div className='modal-overlay' onClick={onClose}>
            <Glass className='modal-content' onClick={(e) => e.stopPropagation()}>
                <button className='close-button' onClick={onClose}>
                    <FontAwesomeIcon icon={faXmark} size="lg" />
                </button>
                {view === '3d' ? (
                    <model-viewer
                        src={src}
                        camera-controls
                        autoplay
                        shadow-intensity="1"
                        style={{ width: '90%', height: '300px' }}
                        environment-image="legacy"
                    ></model-viewer>
                ) : (
                    <iframe
                        src={`https://drive.google.com/file/d/12zYLRzaKGMcxdyNJ6S9XrVJa9oK8Wnnx/preview`}
                        width="70%"
                        height="300"
                        allow="autoplay"
                        style={{ border: 0 }}
                        title="Google Drive Video"
                    ></iframe>
                )}
                <p className='modal-title'>{title}</p>
                <div className="view-options">
                    <button
                        className={`sec-button${view === '3d' ? ' active' : ''}`}
                        onClick={() => setView('3d')}
                    >
                        3D
                    </button>
                    <button
                        className={`sec-button${view === 'video' ? ' active' : ''}`}
                        onClick={() => setView('video')}
                    >
                        Video
                    </button>
                </div>
                <button className='action-button' onClick={onPractice}>Practice</button>
            </Glass>
        </div>
    );
};

export default Modal;