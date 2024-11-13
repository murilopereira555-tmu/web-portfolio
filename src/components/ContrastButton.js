// ContrastButton.js
import React, { useState } from 'react';

const ContrastButton = () => {
    const [isHighContrast, setIsHighContrast] = useState(false);

    const toggleContrast = () => {
        setIsHighContrast(!isHighContrast);
        document.querySelector('.gradient-bg').classList.toggle('high-contrast', !isHighContrast);
        document.body.classList.toggle('high-contrast', !isHighContrast); // Ensure it affects all elements
    };

    return (
        <button onClick={toggleContrast} className="theme-button">
            {isHighContrast ? 'Normal Colors' : 'High Contrast'}
        </button>
    );
};

export default ContrastButton;
