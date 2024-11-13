import React, { useState } from 'react';

import AudioPlayer from './AudioPlayer';

function Card({ image, name, description, expandedtext, images = [], jobPositions = [], cardType, includeAudio }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const [showAltText, setShowAltText] = useState(false); 

    const toggleExpanded = () => {
        setIsExpanded(true);
    };

    const closeCard = (e) => {
        e.stopPropagation();
        setIsExpanded(false);
    };

    const toggleAltText = () => {
        setShowAltText(!showAltText); // Toggle alt text visibility
    };

    return (
        <div className={`card ${isExpanded ? 'card-expanded' : ''} ${cardType}`} onClick={toggleExpanded}>
            {isExpanded && (
                <button className="close-button" onClick={closeCard}>
                    &times;
                </button>
            )}
            <img className="card-image" alt="Profile picture" src={image} />
            <h2 className="card-title">{name}</h2>
            <p className="card-text">{description}</p>

            {/* Display job positions for Professional Experience */}
            {jobPositions.length > 0 && (
                <div className="job-info">
                    {jobPositions.map((job, index) => (
                        <div key={index} className="job-position-info">
                            <img className="company-logo" src={job.companyLogo} alt={`${job.companyName} logo`} />
                            <p className="job-position">{job.position}</p>
                            <p className="company-name">{job.companyName}</p>
                        </div>
                    ))}
                </div>
            )}

            {isExpanded && (
                <div className="card-extra-content">
                    <p>{expandedtext}</p>
                    
                    {/* Additional Images and Descriptions Section */}
                    <div className="additional-images">
                        {images.map((image, index) => (
                            <div className="image-content" key={index}>
                                <div className="image-wrapper">
                                    <img src={image.url} alt={image.altText} className="extra-image" />
                                    <div className="image-details">
                                        <div className="image-title">{image.title}</div>
                                        <div className="image-description">{image.description}</div>
                                        {showAltText && (
                                            <div className="image-alt-text">Alt Text: {image.altText}</div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Conditionally render AudioPlayer if includeAudio is true */}
                    {includeAudio && <AudioPlayer />}

                     {/* Button to toggle visibility of alt text */}
                     <button onClick={toggleAltText} className="alt-text-toggle-button">
                        {showAltText ? 'Hide Alt Text' : 'Show Alt Text'}
                    </button>

                </div>
            )}
            <div className="card-arrow">➔</div>
        </div>
    );
}

Card.defaultProps = {
    image: "https://via.placeholder.com/100",
    name: "[insert name]",
    expandedtext: "[insert text]",
    description: "[insert description]",
    images: [],
    jobPositions: [], // Default to an empty array for job positions
    cardType: "default", // Default card type to ensure compatibility
    includeAudio: false
};

export default Card;
