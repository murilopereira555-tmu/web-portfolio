import React, { useState } from "react";
import Popup from "./Popup";

function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
    setIsFormSubmitted(false); // Reset form submission state when closing
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    setIsFormSubmitted(true); // Set form submission state
  };

  return (
    <>
      <nav className="navigation-bar">
        <div className="nav-logo">Murilo Pereira</div>
        <ul className="nav-links">
          <li className="nav-item">
            <a href="https://www.linkedin.com/in/murilo-pereira-it/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li className="nav-item">
            <a href="https://drive.google.com/file/d/1vpeqR-ronYRkARtulJB0cCf876Ao_0ml/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </li>
          <li className="nav-item">
            <button className="contact-button" onClick={togglePopup}>
              Contact
            </button>
          </li>
        </ul>
      </nav>

      {isPopupOpen && (
        <Popup isOpen={isPopupOpen} closePopup={togglePopup}>
          <h2>Contact Me</h2>
          {isFormSubmitted ? (
            <p className="success-message">Thank you for reaching out! I'll get back to you soon.</p>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <div>
                <button type="submit">Send</button>
                <button type="button" onClick={togglePopup}>
                  Cancel
                </button>
              </div>
            </form>
          )}
        </Popup>
      )}
    </>
  );
}

export default Header;
