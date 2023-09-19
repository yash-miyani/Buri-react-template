import React from "react";

const DarkMode = ({ toggleMode, isFakeDark }) => {
  return (
    <div>
      <button onClick={toggleMode} className="btn-fake-dark-mode">
        {isFakeDark ? "☀️" : "🌙"}
      </button>
    </div>
  );
};

export default DarkMode;
