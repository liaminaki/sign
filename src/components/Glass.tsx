import React, { ReactNode } from 'react';
import '../glass.css';

type GlassProps = {
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    children: ReactNode;
    className?: string;
    contentClassName?: string;
};

const Glass: React.FC<GlassProps> = ({ children, onClick, className, contentClassName }) => {
    return (
        <div className={`glass-card ${className ?? ''}`} onClick={onClick}>
            <div className="glass-stroke"></div>
            <div className={`glass-content ${contentClassName ??  ''}`}>{children}</div>
        </div>
    );
};

export default Glass;