// DarkModeToggle.js
import React, { useState } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', !isDarkMode);
  };

  return (
    <div className="dark-mode-toggle">
      <label>
        <input type="checkbox" onChange={handleDarkModeToggle} checked={isDarkMode} />
        Dark Mode
      </label>
    </div>
  );
};

export default DarkModeToggle;
