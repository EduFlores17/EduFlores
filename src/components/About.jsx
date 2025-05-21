function About() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Tailwind", "Git", "MySQL", "PHP"
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
      <p className="text-gray-700 max-w-2xl mx-auto mb-6">
        Tengo 22 años y soy egresado de Ingeniería en Software. Me estoy preparando en inglés, React, JavaScript, bases de datos y más. Busco mi primera oportunidad como desarrollador junior.
      </p>
      <h3 className="text-xl font-semibold mb-4">Tecnologías que manejo:</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, idx) => (
          <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default About;
