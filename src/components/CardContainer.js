import React from 'react';
import Card from './Card';
import './CardContainer.css';

function CardContainer() {
    const cards = [
        {
            image: "https://media.licdn.com/dms/image/v2/D5603AQFNm_A77PZh0w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1680680808569?e=1736380800&v=beta&t=nvvUBEMlHxzLfWvgBiwxIcNqJRoEBau4tZItR0_BQaI",
            name: "About Me",
            description: "Experienced and Passionate Leader",
            images: [
                { 
                    url: "https://via.placeholder.com/100", 
                    title: "First Image", 
                    description: "This is a paragraph for the first image.",
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
            cardType: "about-me", // Added type for styling
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/TMU_logo.svg/800px-TMU_logo.svg.png",
            name: "Education",
            description: "5th Year BTM Co-op Student",
            images: [],
            cardType: "education" // Added type for styling
        },
        {
            name: "Professional Experience",
            description: "These are some of the companies I have worked with!",
            images: [],
            jobPositions: [
                {
                    position: "Experienced Consultant",
                    companyName: "Cyber Risk & Emerging Tech",
                    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Logo-pwc.png",
                    description: "Worked directly with clients to perfrom cyber security maturity assessments and provide actionable recomendations on improving security posture.",
                },
                {
                    position: "Product Manager",
                    companyName: "Avenue Eco",
                    companyLogo: "https://blog.avenuecode.com/hs-fs/hubfs/Avenue%20Code%20New%20Logos%20-%202023/Avenue%20Code-primary%20versions_logo%20white%20avenue%20code%20endorsement%202.png?width=1180&name=Avenue%20Code-primary%20versions_logo%20white%20avenue%20code%20endorsement%202.png",
                    description: "Within a start-up environment, I successfuly produced results in an agile manner, developing highly detailed user stories and requirements for new features. In particular, I was responsible for the development of a skill matrix function, allowing managers to track the skills of their workforce."
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
            expandedtext: "An experienced and passionate leader who enjoys working in fast paced collaborative team environments to build strong working relationships, develop innovative strategies, and achieve success.",
            cardType: "professional-experience" // Added type for styling
        },
        {
            //Used this for L8
            //Decided to use image links to discord because it is much easier to import liek this on react.
            name: "Projects",
            description: "My Submission items for L8. Accessibility",
            expandedtext: "Here are my images, alt text, and audio player",
            images: [{ 
                url: "https://cdn.discordapp.com/attachments/1108482530417594461/1306057478772887652/IMG_0477.jpg?ex=67354850&is=6733f6d0&hm=28beb7dce21599162107bcf5c78725a59c04c94a0b30b85fba145d66326444ea&", 
                title: "View from My Appartment, Toronto", 
                description: "Date: Nov 10th, 2024",
                altText: "The Toronto city skyline in the nightime rain with several apartment buildings that have a few units with their lights on, below there is some light trafic on the roads."
            },
            { 
                url: "https://media.discordapp.net/attachments/1108482530417594461/1306057479498498180/IMG_0466.jpg?ex=67354850&is=6733f6d0&hm=f6eca4d07f88d37616fa04d0441733e774e9a55e6e59f89f9287a14c4739b0f4&=&format=webp&width=507&height=676", 
                title: "Coffee Cupping event at Subtext Roasters, Toronto", 
                description: "Date: Nov 9th, 2024",
                altText: "A table at the forefront with multiple ceramic cups for coffee tasting. A woman in the background is pouring water into the cups from a kettle."
            },
            { 
                url: "https://media.discordapp.net/attachments/1108482530417594461/1306057480253734974/IMG_0450.jpg?ex=67354850&is=6733f6d0&hm=5ee1eadf5ae46f2110b3e599e14a86469556726826fd80d575ca11675424125b&=&format=webp&width=507&height=676", 
                title: "Homemade Sushi, Toronto", 
                description: "Date: Nov 6th, 2024",
                altText: "A white plate with multiple salmon sushi rolls topped with micro green vegetables along with 2 salmon nigiri pieces topped with green onions."
            }],
            cardType: "projects", // Added type for styling
            includeAudio: true
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
                    expandedtext={card.expandedtext}  // Pass expanded text if any
                    images={card.images} // Pass images with titles and descriptions
                    jobPositions={card.jobPositions} // Pass job positions
                    cardType={card.cardType} // Pass the card type for styling
                    includeAudio={card.includeAudio} // Pass includeAudio flag
                />
            ))}
        </div>
    );
}

export default CardContainer;
