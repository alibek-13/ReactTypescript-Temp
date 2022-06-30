import React, { FC, ReactNode, useState } from 'react';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string;
    height?: string;
    variant: CardVariant;
    children?: ReactNode;
    onClikc: (num:  number) => void
}

const Card: FC<CardProps> = ({ width, height, children, variant, onClikc }) => {
    const [state, setState] = useState(20)
    return (
        <div style={{
            width, height, border: variant === CardVariant.outlined ? '1px solid teal' : 'none',
            background: variant === CardVariant.primary ? 'teal' : ''
        }}
            onClick={()=>onClikc(state)}
        >
            {children}
        </div>
    );
};

export default Card;