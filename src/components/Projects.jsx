import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
      description: "Aplicación web simple para aaaaaaaaaa aaaa gestionar tareas.",
      link: "#",
      image: "/azteca.jpg",
    },
    {
      title: "Portafolio personal",
      description: "Sitio web donde muestro quién soy, mis habilidades y proyectos.",
      link: "https://edufloresfile.netlify.app/",
      image: "/dddd.png",
    },
    {
      title: "App de tareas",
      description: "Aplicación web simple para aaaaaaaaaa aaaa gestionar tareas.",
      link: "#",
      image: "/azteca.jpg",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-16 bg-gray-100 dark:bg-gray-950 text-center">
      <h2 className="text-4xl font-bold mb-12 dark:text-white">Proyectos</h2>

      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
          }}
          navigation={{
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((proj, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col h-full">
                <img src={proj.image} alt={proj.title} className="w-full h-48 object-cover rounded-xl mb-4" />
                <h3 className="text-2xl font-semibold dark:text-white mb-2">{proj.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">{proj.description}</p>
                <a
                  href={proj.link}
                  target="_blank"
                  className="mt-auto inline-block px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                >
                  Ver proyecto
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bullets de paginación más separados */}
        <div className="swiper-pagination mt-10 flex justify-center" />

        {/* Botones personalizados más separados y mejor posicionados */}
        <button className="swiper-prev absolute -left-6 top-[45%] transform -translate-y-1/2 bg-white dark:bg-gray-800 shadow p-2 rounded-full z-10 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
          <ChevronLeft className="w-6 h-6 text-black dark:text-white" />
        </button>
        <button className="swiper-next absolute -right-6 top-[45%] transform -translate-y-1/2 bg-white dark:bg-gray-800 shadow p-2 rounded-full z-10 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
          <ChevronRight className="w-6 h-6 text-black dark:text-white" />
        </button>
      </div>
    </section>
  );
}

export default Projects;
