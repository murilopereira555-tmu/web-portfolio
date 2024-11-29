import ThemeButton from './ThemeButton.js';
import TextSizeButton from './TextSizeButton.js';
import ContrastButton from './ContrastButton.js';
import Popup from './Popup.js';
import React, { useState } from "react";
import Card from './Card.js';

import sushiimg from './images/sushi.jpg';
import skylineimg from './images/view.jpg';
import coffeimg from './images/coffee-cupping.jpg';

function Footer() {
  const [isLabsPopupOpen, setIsLabsPopupOpen] = useState(false);
  const [isAccPopupOpen, setIsAccPopupOpen] = useState(false);

  const toggleLabsPopup = () => {
    setIsLabsPopupOpen(!isLabsPopupOpen); // Fixed to toggle Lab 8 popup
  };

  const toggleAccPopup = () => {
    setIsAccPopupOpen(!isAccPopupOpen);
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <ThemeButton />
        <button className="labs-button" onClick={toggleLabsPopup}>
          Labs
        </button>
        
        <button className="acc-button" onClick={toggleAccPopup}>
          Accessibility
        </button>

        <p className="copyright">
          &copy; {new Date().getFullYear()} Murilo Pereira
        </p>
        <p className="email">murilo.pereira@torontomu.ca</p>
      </div>

      {/* Lab 8 Popup */}
      {isLabsPopupOpen && (
        <Popup isOpen={isLabsPopupOpen} closePopup={toggleLabsPopup} className="labs-popup">
          <Card //Using a card element since the lab was originally done so
                    name={"Lab 8"}
                    description={"Submission for Lab8"}
                    expandedtext={"Here are my images, alt text, and audio player"}  // Pass expanded text if any
                    images={[{ 
                        url: skylineimg,
                        title: "View from My Appartment, Toronto", 
                        description: "Date: Nov 10th, 2024",
                        altText: "The Toronto city skyline in the nightime rain with several apartment buildings that have a few units with their lights on, below there is some light trafic on the roads."
                    },
                    { 
                        url: coffeimg,
                        title: "Coffee Cupping event at Subtext Roasters, Toronto", 
                        description: "Date: Nov 9th, 2024",
                        altText: "A table at the forefront with multiple ceramic cups for coffee tasting. A woman in the background is pouring water into the cups from a kettle."
                    },
                    { 
                        url: sushiimg,
                        title: "Homemade Sushi, Toronto", 
                        description: "Date: Nov 6th, 2024",
                        altText: "A white plate with multiple salmon sushi rolls topped with micro green vegetables along with 2 salmon nigiri pieces topped with green onions."
                    }]} // Pass images with titles and descriptions
                    cardType={"lab8"} // Pass the card type for styling
                    includeAudio={true}
                />
            <Card 
                    name={"Lab10"}
                    description={"Submission for Lab10"}
                    expandedtext={"SEO and SMO Techniques"}
                    cardType={"lab10"}
                > 
                <p>Hello</p>
            </Card>
        </Popup>
      )}

      {/*Acc Popup button*/}
      {isAccPopupOpen && (
        <Popup isOpen={isAccPopupOpen} closePopup={toggleAccPopup} className="acc-popup">
          <TextSizeButton/>
          <ContrastButton/>
        </Popup>
      )}

    </footer>
  );
}

export default Footer;
