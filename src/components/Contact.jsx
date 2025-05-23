function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-gray-900 text-center">
      <h2 className="text-3xl dark:text-white font-bold mb-6">Contáctame</h2>
      <form className="max-w-lg mx-auto text-left space-y-4">
        <input
          type="text"
          placeholder="Tu nombre"
          className="w-full border border-gray-300 p-3 rounded dark:bg-gray-300"
          required
        />
        <input
          type="email"
          placeholder="Tu correo"
          className="w-full border border-gray-300 p-3 rounded dark:bg-gray-300"
          required
        />
        <textarea
          placeholder="Tu mensaje"
          rows="5"
          className="w-full border border-gray-300 p-3 rounded dark:bg-gray-300"
          required
        ></textarea>
        <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
          Enviar mensaje
        </button>
      </form>
    </section>
  );
}

export default Contact;
