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
        <div className="min-h-screen p-8 text-center bg-white dark:bg-gray-900 dark:text-white">
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <img src={project.image} alt={project.title} className="mx-auto rounded-xl max-w-md mb-4" />
            <p className="text-lg mb-6">{project.description}</p>
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
                Ver sitio en vivo
            </a>

            <button
                onClick={() => navigate('/')}
                className="mt-4 inline-block px-5 py-2 bg-gray-300 text-gray-800 rounded-full hover:bg-gray-400 transition"
            >
                Volver al portafolio
            </button>

        </div>
    );
}

export default ProjectDetail;

