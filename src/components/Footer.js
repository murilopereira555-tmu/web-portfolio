import ThemeButton from './ThemeButton.js';
import TextSizeButton from './TextSizeButton.js';
import ContrastButton from './ContrastButton.js';
import Popup from './Popup.js';
import React, { useState } from "react";
import Card from './Card.js';

function Footer() {
  const [isLabsPopupOpen, setIsLabsPopupOpen] = useState(false);

  const toggleLabsPopup = () => {
    setIsLabsPopupOpen(!isLabsPopupOpen); // Fixed to toggle Lab 8 popup
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <ThemeButton />
        <ContrastButton />
        <TextSizeButton />
        <button className="labs-button" onClick={toggleLabsPopup}>
          Labs
        </button>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Murilo Pereira
        </p>
        <p className="email">murilo.pereira@torontomu.ca</p>
      </div>

      {/* Lab 8 Popup */}
      {isLabsPopupOpen && (
        <Popup isOpen={isLabsPopupOpen} closePopup={toggleLabsPopup}>
          <Card //Using a card element since the lab was originally done so
                    name={"Lab 8"}
                    description={"Submission for Lab8"}
                    expandedtext={"Here are my images, alt text, and audio player"}  // Pass expanded text if any
                    images={[{ 
                        url: "https://cdn.discordapp.com/attachments/1108482530417594461/1306057478772887652/IMG_0477.jpg?ex=6749b790&is=67486610&hm=bf1bcf7bb8902ac53eb1256fc1b40ed212ede023c737eea1083533499146feea&", 
                        title: "View from My Appartment, Toronto", 
                        description: "Date: Nov 10th, 2024",
                        altText: "The Toronto city skyline in the nightime rain with several apartment buildings that have a few units with their lights on, below there is some light trafic on the roads."
                    },
                    { 
                        url: "https://cdn.discordapp.com/attachments/1108482530417594461/1306057479498498180/IMG_0466.jpg?ex=6749b790&is=67486610&hm=315658dcf25a6307050a56feea0e3b0c389418ed257fc457dcf1d209447326c4&", 
                        title: "Coffee Cupping event at Subtext Roasters, Toronto", 
                        description: "Date: Nov 9th, 2024",
                        altText: "A table at the forefront with multiple ceramic cups for coffee tasting. A woman in the background is pouring water into the cups from a kettle."
                    },
                    { 
                        url: "https://cdn.discordapp.com/attachments/1108482530417594461/1306057480253734974/IMG_0450.jpg?ex=6749b790&is=67486610&hm=7d2b70775957400e54f3e32dcf54c8fa714893193946b5b71a827b20e4fbfa4f&", 
                        title: "Homemade Sushi, Toronto", 
                        description: "Date: Nov 6th, 2024",
                        altText: "A white plate with multiple salmon sushi rolls topped with micro green vegetables along with 2 salmon nigiri pieces topped with green onions."
                    }]} // Pass images with titles and descriptions
                    cardType={"projects"} // Pass the card type for styling
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
    </footer>
  );
}

export default Footer;
