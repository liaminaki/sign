import React, { ReactNode } from 'react';
import '../glass.css';

type GlassProps = {
    children: ReactNode;
};

const Glass: React.FC<GlassProps> = ({ children }) => {
    return (
        <div className='glass-container'>
            <div className="glass">
                <div className="glass-stroke"></div>
                <div className="glass-content">{children}</div>
            </div>
        </div>
    );
};

export default Glass;