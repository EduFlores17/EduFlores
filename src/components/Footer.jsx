import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <p className="mb-4">© 2025 Eduardo Flores. Todos los derechos reservados.</p>
      <div className="flex justify-center space-x-6 text-2xl">
        <a href="https://github.com/EduFlores17" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/eduardo-flores-de-león-27019b248/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <FaLinkedin />
        </a>
        <a href="mailto:tuemail@gmail.com" className="hover:text-blue-400">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
