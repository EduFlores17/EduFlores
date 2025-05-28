import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { useNavigate } from 'react-router-dom';

function ProjectDetail() {
    const { projectId } = useParams();
    const project = projects.find(p => p.id === projectId);
    const navigate = useNavigate();

    if (!project) {
        return <div className="p-10 text-center text-xl">Proyecto no encontrado.</div>;
    }

    return (
        <div className="min-h-screen px-6 py-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-white ">
            <h1 className="text-4xl font-bold text-center mb-10 pt-13">{project.title}</h1>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Columna Izquierda */}
                <div className="flex flex-col items-center">
                    <img src={project.image} alt={project.title} className="rounded-xl w-full max-w-md" />
                    
                    {/* Tecnologías */}
                    {project.technologies && (
                        <div className="flex flex-wrap gap-2 mt-6 justify-center">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Botones */}
                    <div className="mt-6 flex gap-4">
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer"
                               className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition">
                                Ver GitHub
                            </a>
                        )}
                        <a href={project.link} target="_blank" rel="noopener noreferrer"
                           className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
                            Ver proyecto
                        </a>
                    </div>
                </div>

                {/* Columna Derecha */}
                <div className="text-left space-y-6">
                    <p className="text-lg">{project.description}</p>
                    {project.extraDescription && (
                        <p className="text-md text-gray-600 dark:text-gray-300">{project.extraDescription}</p>
                    )}
                    <button
                        onClick={() => navigate('/')}
                        className="mt-4 bg-gray-300 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-400 transition"
                    >
                        Volver al portafolio
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetail;
