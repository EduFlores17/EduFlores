import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';



function Projects() {


  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-16 bg-gray-100  dark:bg-gray-900  text-center">
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
            delay: 3000,
            speed: 4200,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((proj, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white dark:bg-gray-950 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-3 flex flex-col h-full">
                <div className="w-full aspect-square overflow-hidden rounded-lg mb-3">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{proj.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 flex-1">{proj.description}</p>
                <Link to={`/projects/${proj.id}`} className="mt-auto inline-block px-3 py-1.5 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 transition">
                  Ver proyecto
                </Link>


                



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
