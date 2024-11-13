// TextSizeButton.js
import React, { useState } from 'react';
import './TextSizeButton.css';

const TextSizeButton = () => {
    const [isLargeText, setIsLargeText] = useState(false); //Establishes large text boolean and set large text function with default value of false

    const toggleTextSize = () => {
        setIsLargeText(!isLargeText); //Toggle functionality
        document.body.classList.toggle('large-text', !isLargeText); //Toggles the body elements to contain class
    };

    return (
        <button onClick={toggleTextSize} className="theme-button">  {/*Button element that when clicked calls the toggle text size, given theme button class to make it easy for css*/}
            {isLargeText ? 'Reduce Text Size' : 'Enlarge Text Size'} 
        </button>
    );
};

export default TextSizeButton;
