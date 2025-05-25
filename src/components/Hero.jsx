import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-6 bg-gray-100 pt-24 dark:bg-slate-950 text-center sm:text-left lg:flex-row">
      
      {/* Columna izquierda: Imagen y saludo */}
      <div className="flex flex-col items-center lg:items-start mb-12 lg:mb-0 lg:w-1/2">
        <img
          src="/yo.png"
          alt="Foto de Eduardo Flores"
          className="w-55 h-55 rounded-full mb-6 border-4 border-blue-500 object-cover"
        />
        <h1 className="text-4xl font-bold mb-4 dark:text-white">Hola, Soy Eduardo Flores</h1>
        <p className="text-xl text-gray-700 dark:text-gray-100 max-w-md">
          Desarrollador Web Junior especializado en frontend. Me apasiona crear interfaces limpias, modernas y funcionales.
        </p>
        <a href="#projects" className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
          Ver mis proyectos
        </a>
      </div>

      {/* Columna derecha: Sobre mí + Educación */}
      <div className="flex flex-col gap-6 max-w-md w-full lg:w-1/2">
        
        {/* Caja de info personal */}
        <div className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">Acerca de mí:</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            👨‍🎓 Ingeniero de Software <br />
            📍 Tapachula, Chiapas, México. <br />
            📧 fedu17t@gmail.com
          </p>

          <div className="flex gap-4 mb-4">
            <a href="https://github.com/EduFlores17" target="_blank" className="text-gray-700 dark:text-white hover:text-blue-500">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/eduardo-flores-de-le%C3%B3n-27019b248/" target="_blank" className="text-gray-700 dark:text-white hover:text-blue-500">
              <FaLinkedin size={24} />
            </a>
          </div>

          <a
            href="/CV2025 - Eduardo Flores de León.pdf"
            download
            className="inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
          >
            Descargar CV
          </a>
        </div>

        {/* Caja de educación */}
        <div className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">Educación</h2>
          <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside space-y-2">
            <li>CBTIS 88 - Técnico en Programación (2017-2020)</li>
            <li>Universidad Politécnica de Tapachula (UPTAP) - Ingeniería de Software (2020-2024)</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Hero;
