function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <h1 className="text-xl font-bold">EduFlores</h1>
      <ul className="flex gap-4">
        <li><a href="#about" className="hover:text-blue-500">Sobre mí</a></li>
        <li><a href="#projects" className="hover:text-blue-500">Proyectos</a></li>
        <li><a href="#contact" className="hover:text-blue-500">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
