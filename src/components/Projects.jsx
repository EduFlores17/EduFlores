import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: "BarberTap",
      description: "Plataforma web de practica para agendar citas y ofrecer productos y servicios.",
      link: "https://edufloresfile.netlify.app/",
      image: "/barbertap.jpg",
    },
    {
      title: "Bienes Raices",
      description: "Sitio web de practica enfocado a un asesor inmobiliario, enfocado al rol frontend.",
      link: "https://github.com/EduFlores17/bienesraices_inicio",
      image: "/bienesraices.jpg",
    },
    {
      title: "InsanaMusic24",
      description: "Sitio web de practica diseño UI/UX para un festival de musica ficticio.",
      link: "https://insanamusic24.netlify.app/",
      image: "/insanamusic.jpg",
    },
    {
      title: "Policard",
      description: "Sistema de credencialización digitalizada para la Universidad Politécnica de Tapachula.",
      link: "#",
      image: "/policard.jpg",
    },
    {
      title: "EduFloresv1",
      description: "Primer portafolio usado para presentarme y enseñar mis proyectos personales.",
      link: "https://edufloresfile.netlify.app/",
      image: "/yo.png",
    },
    {
      title: "Ingles Individual App",
      description: "App tipo CRM/ESP para la institución con sede en Tapachula como estadía profesional.",
      link: "https://edufloresfile.netlify.app/",
      image: "/ii.jpg",
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-16 bg-gray-100 dark:bg-gray-950 text-center">
      <h2 className="text-4xl font-bold mb-12 dark:text-white">Proyectos</h2>

      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
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
          autoplay={{
            delay: 2000,
            speed: 1200,
            disableOnInteraction: false,
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

        {/* Paginación */}
        <div className="swiper-pagination mt-10 flex justify-center" />

        {/* Botones de navegación */}
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
