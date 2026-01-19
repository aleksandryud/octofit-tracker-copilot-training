import React from 'react';

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      className={`btn btn-sm ms-2 ${darkMode ? 'btn-light' : 'btn-dark'}`}
      onClick={() => setDarkMode((d) => !d)}
      aria-label="Toggle dark mode"
    >
      {darkMode ? '🌙 Dark Mode On' : '☀️ Dark Mode Off'}
    </button>
  );
};

export default DarkModeToggle;
