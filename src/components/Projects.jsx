function Projects() {
  const projects = [
    {
      title: "Portafolio personal",
      description: "Sitio web donde muestro quién soy, mis habilidades y proyectos.",
      link: "https://edufloresfile.netlify.app/",
      image: "/dddd.png",
    },
    {
      title: "App de tareas",
      description: "Aplicación web simple para gestionar tareas.",
      link: "#",
      image: "/azteca.jpg",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">Proyectos</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, index) => (
          <div key={index} className="bg-white p-4 rounded shadow hover:shadow-lg transition">
            <img src={proj.image} alt={proj.title} className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-gray-600 mb-4">{proj.description}</p>
            <a href={proj.link} target="_blank" className="text-blue-500 hover:underline">
              Ver proyecto
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
