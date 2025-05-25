import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [menuOpen, setMenuOpen] = useState(false);

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

  const handleLinkClick = () => {
    setMenuOpen(false); // Cierra el menú al hacer clic en un enlace
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-slate-950 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold dark:text-white"><a href="#hero">EduFlores</a> </h1>

        {/* Menú Desktop */}
        <ul className="hidden md:flex gap-6">
          <li><a href="#about" onClick={handleLinkClick} className="hover:text-blue-500 dark:text-white">Sobre mí</a></li>
          <li><a href="#projects" onClick={handleLinkClick} className="hover:text-blue-500 dark:text-white">Proyectos</a></li>
          <li><a href="#contact" onClick={handleLinkClick} className="hover:text-blue-500 dark:text-white">Contacto</a></li>
        </ul>

        {/* Botón modo oscuro */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>

        {/* Botón menú hamburguesa (solo en móviles) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden ml-4 text-2xl text-black dark:text-white"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-white dark:bg-slate-950 py-4 gap-4">
          <li><a href="#about" onClick={handleLinkClick} className="hover:text-blue-500 dark:text-white">Sobre mí</a></li>
          <li><a href="#projects" onClick={handleLinkClick} className="hover:text-blue-500 dark:text-white">Proyectos</a></li>
          <li><a href="#contact" onClick={handleLinkClick} className="hover:text-blue-500 dark:text-white">Contacto</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
