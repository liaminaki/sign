import React, { useState } from 'react';
import Glass from './Glass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import '../modal.css';

interface ModalProps {
    onClose: () => void;
    src: string;
    video: string;
    onPractice: () => void;
    title: string;
}

const Modal: React.FC<ModalProps> = ({ onClose, src, title, video, onPractice }) => {
    const [view, setView] = useState<'3d' | 'video'>('3d');

    return (
        <div className='modal-overlay' onClick={onClose}>
            <Glass className='modal-content' onClick={(e) => e.stopPropagation()}>
                <button className='close-button' onClick={onClose}>
                    <FontAwesomeIcon icon={faXmark} size="lg" />
                </button>
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
                    <>
                        <iframe
                            src={video}
                            width="70%"
                            height="300"
                            allow="autoplay"
                            style={{ border: 0 }}
                            title={title}
                        ></iframe>
                        <p className='credit'>© MediSIGN by UP Medical Students for Social Responsibility</p>
                    </>
                )}
                <p className='modal-title'>{title}</p>

                <button className='action-button' onClick={onPractice}>Practice</button>
            </Glass>
        </div>
    );
};

export default Modal;