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
    <section id="about" className="py-20 px-6 bg-white dark:bg-gray-950 text-center">
  <h2 className="text-3xl font-bold mb-8 dark:text-white">Tecnologías que manejo:</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 justify-items-center">
    {skills.map((skill, idx) => (
      <div key={idx} className="group w-24 h-24 flex flex-col items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-center p-4 shadow hover:scale-105 transition-all cursor-default">
        <div className="text-4xl mb-2">{skill.icon}</div>
        <span className="text-sm font-semibold dark:text-white">{skill.name}</span>
      </div>
    ))}
  </div>
</section>

  );
}

export default About;
