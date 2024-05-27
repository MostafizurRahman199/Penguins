"use client";
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function DarkMode({ toggleTheme : any}) {
  const [mode, setMode] = useState("moon");

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setMode(savedTheme === "dark" ? "sun" : "moon");
  }, []);

  const toggle = () => {
    const newMode = mode === "moon" ? "sun" : "moon";
    setMode(newMode);
    const theme = newMode === "moon" ? "light" : "dark";
    localStorage.setItem("theme", theme);
    toggleTheme(theme);
  };

  return (
    <div className='flex justify-center'>
      <FontAwesomeIcon 
        icon={mode === "moon" ? faMoon : faSun} 
        className="text-xl text-black-500 hover:text-black-300 cursor-pointer" 
        onClick={toggle} 
      />
    </div>
  );
}

export default DarkMode;
