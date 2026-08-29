import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projects } from '../data/projects';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
    setTimeout(() => setSelectedProject(null), 250);
  };

  return (
    <section id="projects" className="section-pad" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="eyebrow mb-4 text-blue-400">
            Selected Work
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
            style={{ color: 'var(--color-text-light)' }}>
            Projects I've built
          </h2>
          <p className="mt-4 sm:mt-5 text-[15px] sm:text-[17px] leading-relaxed" style={{ color: 'var(--color-text-light-secondary)' }}>
            Three representative projects — from an AI-assisted code editor and a cross-platform link management tool to a full-stack web application.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={() => handleOpenModal(project)}
            />
          ))}
        </div>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
