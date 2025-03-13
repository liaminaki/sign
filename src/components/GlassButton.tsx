import React, { ReactNode } from 'react';
import '../glass.css';
import '../index.css';

type GlassProps = {
    onClick?: () => void;
    children: ReactNode;
    className?: string;
};

const Glass: React.FC<GlassProps> = ({ onClick, children, className }) => {
    return (
        <button className={`glass-card ${className}`} onClick={onClick}>
            <div className="glass-stroke"></div>
            <div className="glass-content">{children}</div>
        </button>
    );
};

export default Glass;