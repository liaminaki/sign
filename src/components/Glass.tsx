import React, { ReactNode } from 'react';
import '../glass.css';

type GlassProps = {
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    children: ReactNode;
    className?: string;
};

const Glass: React.FC<GlassProps> = ({ children, onClick, className }) => {
    return (
        <div className={`glass-card ${className}`} onClick={onClick}>
            <div className="glass-stroke"></div>
            <div className="glass-content">{children}</div>
        </div>
    );
};

export default Glass;