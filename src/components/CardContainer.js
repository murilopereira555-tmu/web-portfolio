import React from 'react';
import Card from './Card';
import './CardContainer.css';

function CardContainer() {
    const cards = [
        {
            image: "https://media.licdn.com/dms/image/v2/D5603AQFNm_A77PZh0w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1680680808569?e=1736380800&v=beta&t=nvvUBEMlHxzLfWvgBiwxIcNqJRoEBau4tZItR0_BQaI",
            name: "About Me",
            description: "5th Year BTM Co-op Student",
            images: [
                { 
                    url: "https://via.placeholder.com/100", 
                    title: "First Image", 
                    description: "This is a paragraph for the first image." 
                },
                { 
                    url: "https://via.placeholder.com/100", 
                    title: "Second Image", 
                    description: "This is a paragraph for the second image." 
                },
                { 
                    url: "https://via.placeholder.com/100", 
                    title: "Third Image", 
                    description: "This is a paragraph for the third image." 
                },
                { 
                    url: "https://via.placeholder.com/100", 
                    title: "Fourth Image", 
                    description: "This is a paragraph for the fourth image." 
                }
            ],
            cardType: "about-me" // Add type for styling
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/TMU_logo.svg/800px-TMU_logo.svg.png",
            name: "Education",
            description: "Description for Education card.",
            images: [],
            cardType: "education" // Add type for styling
        },
        {
            name: "Professional Experience",
            description: "High-level info about the position.",
            images: [],
            jobPositions: [
                {
                    position: "Experienced Consultant",
                    companyName: "Cyber Risk & Emerging Tech",
                    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Logo-pwc.png",
                },
                {
                    position: "Product Manager",
                    companyName: "Avenue Eco",
                    companyLogo: "https://blog.avenuecode.com/hs-fs/hubfs/Avenue%20Code%20New%20Logos%20-%202023/Avenue%20Code-primary%20versions_logo%20white%20avenue%20code%20endorsement%202.png?width=1180&name=Avenue%20Code-primary%20versions_logo%20white%20avenue%20code%20endorsement%202.png",
                },
                {
                    position: "Systems Analyst",
                    companyName: "i-Stat R&D",
                    companyLogo: "https://mlt.org/wp-content/uploads/2018/04/logo-1.png",
                },
                {
                    position: "Head Coach",
                    companyName: "LOL Esports",
                    companyLogo: "https://cdn.thespike.gg/Teams%252010%2FTMU%20ESPORTS_1668436249432.png",
                },
            ],
            cardType: "professional-experience" // Add type for styling
        },
        {
            name: "Projects",
            description: "Description for Projects card.",
            images: [],
            cardType: "projects" // Add type for styling
        },
    ];

    return (
        <div className="card-container">
            {cards.map((card, index) => (
                <Card
                    key={index}
                    image={card.image}
                    name={card.name}
                    description={card.description}
                    images={card.images} // Pass images with titles and descriptions
                    cardType={card.cardType} // Pass the card type for styling
                    jobPositions={card.jobPositions} // Pass job positions
                />
            ))}
        </div>
    );
}

export default CardContainer;
