function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4">
      <img
        src="/yo.png"
        alt="Foto de Eduardo Flores"
        className="w-32 h-32 rounded-full mb-6 border-4 border-blue-500 object-cover"
      />
      <h1 className="text-4xl font-bold mb-4">¡Hola! Soy Eduardo Flores</h1>
      <p className="text-xl text-gray-700 mb-6 max-w-md">
        Desarrollador Web Junior especializado en frontend. Me apasiona crear interfaces limpias, modernas y funcionales.
      </p>
      <a href="#projects" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
        Ver mis proyectos
      </a>
    </section>
  );
}

export default Hero;
