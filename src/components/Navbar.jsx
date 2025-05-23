import { useState, useEffect } from 'react';

function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (!localStorage.getItem('theme')) {
        setDarkMode(mediaQuery.matches);
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-slate-950 shadow-md">
      <h1 className="text-xl font-bold dark:text-white">EduFlores</h1>
      <ul className="flex gap-4">
        <li><a href="#about" className="hover:text-blue-500 dark:text-white">Sobre mí</a></li>
        <li><a href="#projects" className="hover:text-blue-500 dark:text-white">Proyectos</a></li>
        <li><a href="#contact" className="hover:text-blue-500 dark:text-white">Contacto</a></li>
      </ul>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="ml-4 px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
    </nav>
  );
}

export default Navbar;
