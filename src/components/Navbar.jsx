import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('theme');
    
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const scrollToSection = (id) => {
  if (window.location.pathname !== '/') {
    navigate('/');
    // Espera a que el contenido cargue y luego hace scroll
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100); // tiempo para dar chance a que se renderice
  } else {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
  setMenuOpen(false); // cerrar el menú móvil si estaba abierto
};


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

  const navigate = useNavigate();


  return (

    
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-slate-950 shadow-md">
  <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
    <h1 className="text-2xl font-bold dark:text-white">
      <button
  onClick={() => navigate('/')}
  className="text-xl font-bold"
>
  EduFlores
</button>


    </h1>

    {/* Menú Desktop */}
    <ul className="hidden md:flex gap-8 text-lg font-medium">
  <li><button onClick={() => scrollToSection('projects')} className="hover:text-blue-500 dark:text-white">Proyectos</button></li>
  <li><button onClick={() => scrollToSection('about')} className="hover:text-blue-500 dark:text-white">Sobre mí</button></li>
  <li><button onClick={() => scrollToSection('contact')} className="hover:text-blue-500 dark:text-white">Contacto</button></li>
</ul>


    {/* Botones */}
    <div className="flex items-center gap-4">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-xl dark:text-white"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-2xl text-black dark:text-white"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </div>
  </div>

  {/* Menú móvil */}
  {menuOpen && (
    <ul className="md:hidden flex flex-col items-center bg-white dark:bg-slate-950 py-4 gap-4 text-lg font-medium">
  <li><button onClick={() => scrollToSection('projects')} className="hover:text-blue-500 dark:text-white">Proyectos</button></li>
  <li><button onClick={() => scrollToSection('about')} className="hover:text-blue-500 dark:text-white">Sobre mí</button></li>
  <li><button onClick={() => scrollToSection('contact')} className="hover:text-blue-500 dark:text-white">Contacto</button></li>
</ul>

  )}
</nav>

  );
}

export default Navbar;
