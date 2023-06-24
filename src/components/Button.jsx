import React from 'react';

const Button = ({ onClick }) => {
    return (
        <button className="button" onClick={onClick}>
            Probar mi suerte
        </button>
    );
};

export default Button;
