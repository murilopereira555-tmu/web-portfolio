import React from 'react';
import Card from './Card';
import './CardContainer.css';
import vscodeimg from './images/vscode.png';
import appusageimg from './images/Application Usage View.jpg';

function CardContainer() {
    const cards = [
        {
            image: "https://media.licdn.com/dms/image/v2/D5603AQFNm_A77PZh0w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1680680808569?e=1736380800&v=beta&t=nvvUBEMlHxzLfWvgBiwxIcNqJRoEBau4tZItR0_BQaI",
            name: "About Me",
            description: "Experienced and Passionate Leader",
            expandedtext: "Despite my professional skills and background, I have a diverse set of hobbies and passions that showcase who I am as a person. Namely, I have always been interested in culinary excellence and fine dining, having worked briefly as a sushi chef during highschool. I enjoy trying new things and other realms within the cullinary arts such as Coffee, Wine, and Tea.",
            images: [{ 
                url: "https://cdn.discordapp.com/attachments/1108482530417594461/1306057478772887652/IMG_0477.jpg?ex=67486610&is=67471490&hm=023a688575e672855acab1fe7fc2f2f38674b28519b56b32e1f5ac7b05b632eb&", 
                title: "View from My Appartment, Toronto", 
                description: "Date: Nov 10th, 2024",
                altText: "The Toronto city skyline in the nightime rain with several apartment buildings that have a few units with their lights on, below there is some light trafic on the roads."
            },
            { 
                url: "https://media.discordapp.net/attachments/1108482530417594461/1306057479498498180/IMG_0466.jpg?ex=67486610&is=67471490&hm=fae784bf35d36854c6a5913fd14b05b3a1b26baf5fb5df6f2cc962aeade14ad9&=&format=webp&width=507&height=676", 
                title: "Coffee Cupping event at Subtext Roasters, Toronto", 
                description: "Date: Nov 9th, 2024",
                altText: "A table at the forefront with multiple ceramic cups for coffee tasting. A woman in the background is pouring water into the cups from a kettle."
            },
            { 
                url: "https://media.discordapp.net/attachments/1108482530417594461/1306057480253734974/IMG_0450.jpg?ex=67486610&is=67471490&hm=eed5a686ecb4b3d9e7e33686cc5ff170e77efc59ae600f303e7cd49046b2e543&=&format=webp&width=507&height=676", 
                title: "Homemade Sushi, Toronto", 
                description: "Date: Nov 6th, 2024",
                altText: "A white plate with multiple salmon sushi rolls topped with micro green vegetables along with 2 salmon nigiri pieces topped with green onions."
            }],
            cardType: "about-me", // Added type for styling
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/TMU_logo.svg/800px-TMU_logo.svg.png",
            name: "Education",
            description: "5th Year BTM Co-op Student, Philosophy Minor",
            images: [],
            expandedtext: "As a Business Technology Management Student, I am heavily involved with innovative technology and its intersection with business applications. Additionally, with a minor in philosophy, I am actively looking at things from a critical perspective while applying logic and reason to solve complex problems and deliver impactful solutions",
            courses: [
                { code: "ITM305", name: "Systems Analysis and Design", skills: "Information Systems, UML, Systems Architecture", link: "https://www.torontomu.ca/calendar/2024-2025/courses/information-technology-management/ITM/305/" },
                { code: "ITM820", name: "Information Systems Security and Privacy", skills: "Defense in Depth, ISO27001, NIST CSF, Encryption", link: "https://www.torontomu.ca/calendar/2024-2025/courses/information-technology-management/ITM/820/" },
                { code: "ITM706", name: "Enterprise Architecure", skills: "Archimate, TOGAF, Business Process Management", link: "https://www.torontomu.ca/calendar/2024-2025/courses/information-technology-management/ITM/706/" },
                { code: "ITM618", name: "Business Intelligence and Analytics", skills: "Big Data, Data Warehousing, Machine Learning Models, Python Pandas Library", link: "https://www.torontomu.ca/calendar/2024-2025/courses/information-technology-management/ITM/618/" },
                { code: "ITM750", name: "IS Project Management", skills: "Project Management, MS Project, Project Planning, Budgeting", link: "https://www.torontomu.ca/calendar/2024-2025/courses/information-technology-management/ITM/750/" },
                { code: "ITM706", name: "Strategy, Management, and Acquisition", skills: "Case Analysis, IS Strategy, Business Strategy, Strategic Allignment", link: "https://www.torontomu.ca/calendar/2024-2025/courses/information-technology-management/ITM/707/" },
                { code: "ITM711", name: "Cloud Computing", skills: "Cloud Mechanisms, Security Mechanisms, Redundancy, Resource Pooling ", link: "https://www.torontomu.ca/calendar/2024-2025/courses/information-technology-management/ITM/711/" },
                { code: "PHL551", name: "Metaphysics", skills: "Critical Thinking, Logical Analysis, Reality, Universals, Conceptualism", link: "https://www.torontomu.ca/calendar/2024-2025/courses/philosophy/PHL/551/" }
            ],
            cardType: "education" // Added type to ensure courses are added
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
                    date: "September-December 2023 & May-August 2024"
                },
                {
                    position: "Product Manager",
                    companyName: "Avenue Eco",
                    companyLogo: "https://blog.avenuecode.com/hs-fs/hubfs/Avenue%20Code%20New%20Logos%20-%202023/Avenue%20Code-primary%20versions_logo%20white%20avenue%20code%20endorsement%202.png?width=1180&name=Avenue%20Code-primary%20versions_logo%20white%20avenue%20code%20endorsement%202.png",
                    description: "Within a start-up environment, I successfuly produced results in an agile manner, developing highly detailed user stories and requirements for new features. In particular, I was responsible for the development of a skill matrix function, allowing managers to track the skills of their workforce.",
                    date: "May-August 2023"
                },
                {
                    position: "Systems Analyst",
                    companyName: "i-Stat R&D",
                    companyLogo: "https://mlt.org/wp-content/uploads/2018/04/logo-1.png",
                    description: "Worked on the management of the clinical research system which was responsible for the transmission of clinical trial data from over 70 sites accross the US to our Electronic Trial Master File database.",
                    date: "May-December 2022"
                },
                {
                    position: "Head Coach",
                    companyName: "LOL Esports",
                    companyLogo: "https://cdn.thespike.gg/Teams%252010%2FTMU%20ESPORTS_1668436249432.png",
                    description: "Led overall team strategy, draft, and identity, while fostering a collaborative environment to achieve results and accelerate player improvement. Made playoffs during first season with a top 3 placement within the eastern conference.",
                    date: "January 2021 - May 2022",
                },
            ],
            expandedtext: "An experienced and passionate leader who enjoys working in fast paced collaborative team environments to build strong working relationships, develop innovative strategies, and achieve success.",
            cardType: "professional-experience" // Added type for styling
        },
        {
            //Projects Card
            name: "Projects",
            description: "Some things I have worked on or am currently working on!",
            expandedtext: "Through my school years I have been able to work on a variety of projects ranging from technical programing such as this website itself to philosophy research papers!",
            projects: [
                {
                    title: "Web Portfolio",
                    description: "This is the very website you are currently browsing. It was built from scratch using tools such as VScode and github to program the site in React.js, HTML, and CSS.",
                    link: "https://github.com/murilopereira555-tmu/web-portfolio",
                    linktitle: "Github Repository",
                    image: vscodeimg,
                    skills: ["React.js", "JavaScript","HTML", "CSS", "GIT", "Node.js", "Web Design", "VScode"]
                },
                {
                    title: "Philosophy Research Paper (Proposal)",
                    description: "A proposal for a research paper exploring metaphysical questions about identity. The final paper shall be published before the end of the year :)",
                    link: "https://docs.google.com/document/d/1sM9vOYcRwZ9z9MkJBoIFftL7Ik87BqW82Oh6YYIRRZ4/edit?usp=sharing",
                    linktitle: "View Full Paper", 
                    iframeSrc: "https://docs.google.com/document/d/e/2PACX-1vTNrM5euX2zKQChqp2nCWnVOngYR9xCsqhI2vT6k6eMkH4A50vKkD1LkkFoK6Au_mUPh6P_4oyhZV_h/pub?embedded=true", 
                },
                {
                    title: "Enterprise Architecture: Application Usage Diagram",
                    description: "Among several Enterprise Architecture Diagrams, I worked on building out an entire application usage diagram and process for a tool rental company.",
                    image: appusageimg, 
                    imageAlt: "Enterprise Architecture Diagram",
                    skills: ["Archimate", "TOGAF", "Enterprise Architecture", "Application Usage Infrastructure", "Business Process Management"]
                },
            ],
            cardType: "projects", // Added type for styling
        },
    ];

    return (
        <div className="card-container">
            {cards.map((card, index) => (
                <Card
                //Pass the card elements
                    key={index}
                    image={card.image}
                    name={card.name}
                    description={card.description}
                    expandedtext={card.expandedtext}  
                    images={card.images} 
                    jobPositions={card.jobPositions} 
                    cardType={card.cardType} 
                    includeAudio={card.includeAudio}
                    courses={card.courses || []} 
                    projects={card.projects || []}
                />
            ))}
        </div>
    );
}

export default CardContainer;
