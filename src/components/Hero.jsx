import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 bg-slate-950 pt-18"
    >
      <div className="w-full max-w-5xl space-y-10">

        {/* Hero Principal */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 text-center lg:text-left">
          {/* Imagen */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="/yo.png"
              alt="Eduardo Flores"
              className="w-48 h-48 sm:w-60 sm:h-60 md:w-64 md:h-64 rounded-full border-4 border-blue-500 object-cover transition-transform hover:scale-105"
            />
          </div>

          {/* Texto principal */}
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Hola, Soy <span className="text-blue-400">Eduardo Flores</span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg">
              Desarrollador Web Junior especializado en frontend. Me apasiona crear interfaces limpias,
              modernas y funcionales. Tengo 23 años y soy egresado de Ingeniería en Software. Me estoy preparando en inglés, React, JavaScript, bases de datos
              y más tecnologías Frontend, con conocimientos básicos en Backend. Busco mi primera oportunidad laboral como desarrollador web.
            </p>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition"
            >
              Ver mis proyectos
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Acerca de mí y Contacto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Acerca de mí */}
          <div className="bg-slate-800 p-6 rounded-xl text-gray-200 shadow-md text-center sm:text-left">
            <h2 className="text-xl font-semibold mb-2 text-white">Acerca de mí:</h2>
            <p>🎓 Ingeniero de Software</p>
            <p>📍 Tapachula, Chiapas, México</p>
            <p>📧 fedu17t@gmail.com</p>
          </div>

          {/* Contacto */}
          <div className="bg-slate-800 p-6 rounded-xl text-gray-200 shadow-md text-center sm:text-left">
            <h2 className="text-2xl font-semibold mb-4 text-white">Contacto</h2>
            <div className="flex flex-col sm:flex-row items-center sm:justify-start gap-4 flex-wrap">
              <a
                href="https://linkedin.com/in/tu_usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition text-4xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/tu_usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition text-4xl"
              >
                <FaGithub />
              </a>
              <a
                href="/EduardoFloresCV.pdf"
                download
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-lg"
              >
                Descargar CV
              </a>
            </div>
          </div>
        </div>

        {/* Educación */}
        <div className="bg-slate-800 p-6 rounded-xl text-gray-200 shadow-md text-center sm:text-left mb-6">
          <h2 className="text-xl font-semibold mb-2 text-white">Educación</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>CBTIS 88 – Técnico en Programación (2017–2020)</li>
            <li>UPTAP – Ingeniería de Software (2020–2024)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
