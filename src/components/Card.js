import React, { useState } from 'react';

function Card({ image, name, description, expandedtext, images = [], jobPositions = [], cardType }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(true);
    };

    const closeCard = (e) => {
        e.stopPropagation();
        setIsExpanded(false);
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
                                <img src={image.url} alt={`Image ${index + 1}`} className="extra-image" />
                                <div className="image-title">{image.title}</div>
                                <div className="image-description">{image.description}</div>
                            </div>
                        ))}
                    </div>
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
    cardType: "default" // Default card type to ensure compatibility
};

export default Card;
