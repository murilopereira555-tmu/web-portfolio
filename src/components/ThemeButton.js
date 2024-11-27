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
            src="https://static.thenounproject.com/png/4808961-200.png"
            alt="Sun Icon"
            className={`icon sun-icon ${theme === "light" ? "visible" : "hidden"}`}
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/6714/6714978.png"
            alt="Moon Icon"
            className={`icon moon-icon ${theme === "dark" ? "visible" : "hidden"}`}
          />
        </span>
      </label>
    </div>
  );
};

export default ThemeButton;
