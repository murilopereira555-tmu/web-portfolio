import React, { useState, useEffect } from "react";
import "./ThemeButton.css"; // Import the CSS

const ThemeButton = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="theme-button">
      <input
        type="checkbox"
        id="toggle"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <label htmlFor="toggle" className="toggle-label">
        <span className="toggle-ball">
          {/* Sun and Moon icons, visible depending on theme */}
          <img
            src="https://static-00.iconduck.com/assets.00/mode-light-icon-2048x2048-no286vfd.png"
            alt="Sun Icon"
            className={`icon sun-icon ${theme === "light" ? "visible" : "hidden"}`}
          />
          <img
            src="https://static-00.iconduck.com/assets.00/mode-dark-icon-2048x2037-ue3955wk.png"
            alt="Moon Icon"
            className={`icon moon-icon ${theme === "dark" ? "visible" : "hidden"}`}
          />
        </span>
      </label>
    </div>
  );
};

export default ThemeButton;
