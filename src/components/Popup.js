// Popup.js
import React from "react";
import "./Popup.css"; // Add styles for the popup

const Popup = ({ isOpen, closePopup, children }) => {
  if (!isOpen) return null; // Render nothing if popup is not open

  return (
    <div className="popup-overlay" onClick={closePopup}>
      <div
        className="popup-content"
        onClick={(e) => e.stopPropagation()} // Prevent closing on clicking the content
      >
        <button className="popup-close" onClick={closePopup}>
          &times;
        </button>
        {children} {/* Allow dynamic content */}
      </div>
    </div>
  );
};

export default Popup;
