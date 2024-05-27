
"use client"
import React, { useEffect, useState } from 'react';
import Navbar from '@/app/components/Nabvar';
import MainSection from '@/app/components/MainSection';
import Feature from '@/app/components/Feature';
import Testimonial from '@/app/components/Testimonial';
import Price from '@/app/components/Price';
import Gallary from '@/app/components/Gallary';
import Footer from '@/app/components/Footer';
import Form from '@/app/components/Form';

export default function Home() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = (newTheme:any) => {
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div className={`min-h-screen ${theme === "dark" ? "dark" : ""}`}>
      <div className={`bg-white dark:bg-gray-900 text-black dark:text-white`}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <MainSection />
        <Feature />
        <Testimonial />
        <Price />
        <Gallary />
        <Form></Form>
        <Footer />
      </div>
    </div>
  );
}
