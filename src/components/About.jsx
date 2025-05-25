import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaPhp } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiSass, SiFigma } from "react-icons/si";

function About() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    { name: "PHP", icon: <FaPhp className="text-indigo-600" /> },
    { name: "SASS", icon: <SiSass className="text-pink-500" /> },
    { name: "Diseño UI/UX", icon: <SiFigma className="text-purple-600" /> },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white pt-25 dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-4 dark:text-white">Sobre mí</h2>
      <p className="text-gray-700 dark:text-white max-w-2xl mx-auto mb-6">
        Tengo 23 años y soy egresado de Ingeniería en Software. Me estoy preparando en inglés, React, JavaScript, bases de datos y más Tecnologías Frontend con conocimientos básicos en Backend. Busco mi primera oportunidad laboral como desarrollador web.
      </p>
      <h3 className="text-xl dark:text-white font-semibold mb-4">Tecnologías que manejo:</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, idx) => (
          <div key={idx} className="relative group">
            <span
              className="flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium 
                         dark:bg-blue-900 dark:text-blue-200 transition transform hover:scale-105 cursor-default"
            >
              {skill.icon}
              {skill.name}
            </span>
            {/* Tooltip */}
            <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition duration-200 bg-black text-white text-xs rounded px-2 py-1 z-10">
              {skill.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
