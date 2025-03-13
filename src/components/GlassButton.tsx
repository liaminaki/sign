import React, { ReactNode } from 'react';
import '../glass.css';
import '../index.css';

type GlassProps = {
    onClick?: () => void;
    children: ReactNode;
};

const Glass: React.FC<GlassProps> = ({ onClick, children }) => {
    return (
        <div className='glass-container'>
            <button className="glass" onClick={onClick}>
                <div className="glass-stroke"></div>
                <div className="glass-content">{children}</div>
            </button>
        </div>
    );
};

export default Glass;