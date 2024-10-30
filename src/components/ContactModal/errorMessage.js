import React from 'react';
import './errorMessage.css';

const ErrorMessage = ({ message, onClose }) => {
    return (
        <div className="error-modal-overlay">
            <div className="error-modal">
                <h2>Error</h2>
                <p>{message}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default ErrorMessage;
