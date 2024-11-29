import React, { useState } from 'react';

import AudioPlayer from './AudioPlayer';


function Card({ image, altText, name, description, expandedtext, images = [], jobPositions = [], cardType, includeAudio, courses, projects }) {
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
            <img className="card-image" src={image} alt={altText}/>
            <h2 className="card-title">{name}</h2>
            <p className="card-text">{description}</p>

            {isExpanded && (
                <div className="card-extra-content">
                    <p className='expandedtext'>{expandedtext}</p>
                    
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

                    {/*Project Card*/}
                    {cardType === "projects" && projects.length > 0 && (
                        <div className="projects-content">
                            {projects.map((project, index) => (
                            <div className="project-card" key={index}>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>

                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                     {project.linktitle}
                                    </a>
                                )}

                                {project.iframeSrc && (
                                    <div className="iframe-preview">
                                        <iframe
                                            src={project.iframeSrc}
                                            title={project.title}
                                            width="100%"
                                            height="400"
                                            style={{ border: "none" }}
                                        />
                                    </div>
                                )}

                                {project.image && (
                                    <div className="expandable-image">
                                        <img
                                            src={project.image}
                                            alt={project.imageAlt}
                                            className="project-image"
                                            width="50%"
                                            onClick={() => {
                                                const img = new Image();
                                                img.src = project.image;
                                                const newWindow = window.open("", "_blank");
                                                newWindow.document.write(img.outerHTML);
                                                newWindow.document.close();
                                            }}
                                        />
                                        <p>Click image to expand</p>
                                    </div>
                                )}

                                        {/* Skills Section */}
                                {project.skills && project.skills.length > 0 && (
                                <div className="skills-section">
                                    <h4>Skills:</h4>
                                    <div className="skills-tags">
                                    {project.skills.map((skill, skillIndex) => (
                                        <span className="skill-tag" key={skillIndex}>
                                        {skill}
                                        </span>
                                    ))}
                                    </div>
                                </div>
                                )}

                            </div>
                            ))}
                        </div>
                    )}
                        
                    {/* Education Table */}
                    {cardType === "education" && courses.length > 0 && (
                        <>
                        <div className="education-table">
                            <h3>Relevant Courses</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Course Code</th>
                                        <th>Course Name</th>
                                        <th>Applicable Skills</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {courses.map((course, index) => (
                                        <tr key={index}>
                                            <td>
                                                <a href={course.link} target="_blank" rel="noopener noreferrer">
                                                    {course.code}
                                                </a>
                                            </td>
                                            <td>{course.name}</td>
                                            <td>{course.skills}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="socials"> {/*Instagram Icon portion for lab10*/}
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                            
                            <h3>TMU Social Links:</h3>
                            {/* Instagram Icon*/}
                            <a href="https://www.instagram.com/torontomet/?hl=en" target="_blank" rel="noopener noreferrer"> {/* Make icon clickable*/}
                                <i class="fa fa-instagram"></i> {/* Instagram icon*/}
                            </a>

                            {/* Website Icon*/}
                            <a href="https://www.torontomu.ca/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-globe"></i>
                            </a>
                            
                        </div>
                        </>

                    )}
                    
                    {/*Submission card for lab 10*/}
                    {cardType === "lab10" && (
                        <div className="lab10-div">
                            <h3>SEO Techniques</h3>
                                <p><b>Meta Tags:</b></p>
                                <p>Meta Tags are hidden data (data within dat
                                    a) or tags in this case that communicate with search engines relevant information about your website. Additionally, meta tags can tell search engines how to display your site on its results with certain meta tags like meta titles or descriptions. It is important to ensure that these meta tags convey important information so that it incentivizes users to click on your website when it appears in search results. Additionally, other meta tags such as robots, facilitate the crawling activities of search engines, optimizing the structure of your website to make it easier to crawl. This highly improves your website performance on search engines and is more likely to bring it closer to the top. (Hardwick 2024)
                                </p>

                                <p><b>External Linking:</b></p>
                                <p>To put it simply, external linking is the practice of having other websites linked on your website. This can be anything such as social media links, articles, web pages, or any other site, as long as it is a different domain then the one it is linked on. According to Moz.com, “Top SEOs believe that external links are the most important source of ranking power.” (Moz 2024). A key factor as to why they are so effective is that these external links provide additional context as to what the website is about to search engines, greatly improving the score of your website. (Moz 2024)
                                </p>

                                <p><b>Keywords:</b></p>
                                <p>Keywords in terms of SEO are terms used across your website that provide improved search engine rankings. With this in mind, Keywords can be applied to any part of your website; including meta tags, paragraphs, headings, etc. Essentially, to take advantage of keywords, it is important to identify what words are being searched and which ones optimize search engine search ability and performance. Once these words are identified, they can be added to different elements of your website to increase visibility and reach. (Backlinko 2024)
                                </p>                                

                            <h3>SMO Techniques</h3>
                                <p><b>Social Media Links and Icons:</b></p>
                                <p>Heavily related to external linking as an SEO technique, embedding social media links and icons within a website can significantly improve social media optimization. There are several advantages besides just optimizing for search engines to do this. Namely, everyone uses social media in today's world, so it provides familiarity and another method of interaction for users with your site. Furthermore, with icons specifically, it makes your website feel more authentic and professional, presenting itself as being connected with current trends. (Kang 2024)
                                </p>

                                <p><b>Embeded Social Media Sharing Buttons:</b></p>
                                <p>This SMO Technique places sharing buttons on your website content from traditional social media platforms to allow users to easily spread your content. This greatly enhances the potential reach of your website and its content by making it as easy as possible for users to share externally on social media platforms. It is important to have a share button that allows for various platforms, that way users are not limited and reach can be maximized. (Atef 2024)
                                </p>

                                <p><b>Social Media Login Options:</b></p>
                                <p>Social media login options have become almost a standard in today's norms. Essentially, this allows users to authenticate themselves on your website using a current social media account of theirs such as Google, Facebook, or X. This is very advantageous for the user experience as it makes it less tedious to create an account since it's just a simple login. Additionally, it makes users feel more secure as their account password and credentials are not shared fully with your website, it is a more secure way to authenticate. Furthermore, you as the website owner are then able to easily collect more information on users. (Atef 2024)
                                </p>

                            <div className="lab10-application">
                                <h2>Application of Techniques</h2>
                                
                                <p><b>Social Media Icons</b></p>
                                <p>The Education Card on my portfolio main page has an instagram icon which leads to the university instagram</p>

                                <p><b>SEO Technique</b></p>
                                <p>Additionally, I have chose to implement "External Linking" as my SEO technique. As such, I have linked every course listed in the education card and in the table to the relevant course website by clicking on the course code.</p>

                            </div>

                            <div className="works-cited">
                                <h2>Works Cited</h2>
                                <ul className="workds-cited-list">
                                    <p>Atef, Muhammed, and Tahira Kainat AI Consultant. “What Are the Best Smo Tools for Website and Blog Integration?” Best SMO Tools for Website and Blog Integration, www.linkedin.com, 4 Mar. 2024, www.linkedin.com/advice/0/what-best-smo-tools-website-blog-integration-ctrfe.
                                    </p>
                                    <p>Hardwick, Joshua. “Meta Tags for SEO: A Simple Guide for Beginners.” SEO Blog by Ahrefs, 10 Apr. 2024, ahrefs.com/blog/seo-meta-tags/#meta-robots.
                                    </p>
                                    <p>Kang, Jay. “Why Are Social Media Links Important for Your Website?” SEOptimer, 4 Sept. 2024, www.seoptimer.com/blog/social-media-links/#:~:text=Social%20media%20links%20are%20clickable,Pinterest%2C%20YouTube%2C%20and%20more.
                                    </p>
                                    <p>“What Are External Links? Best Practices for Building Authority.” Moz, moz.com/learn/seo/external-link#:~:text=Whereas%20traffic%20is%20a%20%22messy,for%20a%20given%20search%20query. Accessed 28 Nov. 2024.
                                    </p>
                                    <p>“What Are SEO Keywords? Find Them & Rank Better in 2024.” Backlinko, 19 Nov. 2024, backlinko.com/hub/seo/seo-keywords. 
                                    </p>
                                </ul>
                            </div>
                        </div>
                    )}

                     {/* Button to toggle visibility of alt text */}
                     <button onClick={toggleAltText} className="alt-text-toggle-button">
                        {showAltText ? 'Hide Alt Text' : 'Show Alt Text'}
                    </button>

                </div>
            )}

            {/* Display job positions for Professional Experience */}
            {jobPositions.length > 0 && (
                <div className="job-info">
                    {jobPositions.map((job, index) => (
                        <div key={index}>
                            {/* Job Position Info */}
                            <div className="job-position-info">
                                <img className="company-logo" src={job.companyLogo} alt={job.companyAlt} />
                                    <h3 className="job-position">{job.position}</h3>
                                    <p className="company-name">{job.companyName}</p>
                                    {isExpanded && (
                                        <>
                                        <div className="job-description">
                                            {job.description}
                                        </div>
                                        <div className="job-date">
                                            {job.date}
                                        </div>
                                        </>
                                    )}
                            </div>
                        </div>
                    ))}
                </div>
            )}

           
            <div className="card-arrow">➔</div>
        </div>
    );
}

Card.defaultProps = {
    name: "[insert name]",
    expandedtext: "[insert text]",
    description: "[insert description]",
    images: [],
    jobPositions: [], // Default to an empty array for job positions
    cardType: "default", // Default card type to ensure compatibility
    includeAudio: false,
    projects: []
};

export default Card;
