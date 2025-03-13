import React, { ReactNode } from 'react';
import '../glass.css';
import '../index.css';

type GlassProps = {
    children: ReactNode;
};

const Glass: React.FC<GlassProps> = ({ children }) => {
    return (
        <div className='glass-container'>
            <button className="glass">
                <div className="glass-stroke"></div>
                <div className="glass-content">{children}</div>
            </button>
        </div>
    );
};

export default Glass;