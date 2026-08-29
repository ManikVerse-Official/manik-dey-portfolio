import { ExternalLink, Play, Info } from 'lucide-react';

const initials = (name) => {
  if (!name) return '?';

  const firstClean = name.split('—')[0].split('|')[0].trim();

  const parts = firstClean
    .replace(/[^A-Za-z0-9 ]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);

  if (!parts.length) return '?';

  if (parts.length === 1) {
    return parts[0].charAt(0).toUpperCase();
  }

  return (
    parts[0].charAt(0) +
    parts[parts.length - 1].charAt(0)
  ).toUpperCase();
};

const ProjectCard = ({ project, onViewDetails }) => {
  const hasImage = Boolean(project.image?.trim());
  const hasVideo = Boolean(project.video?.trim());
  const hasLive = Boolean(project.liveDemo?.trim());
  const hasGithub = Boolean(project.github?.trim());

  return (
    <article className="group rounded-2xl card-dark overflow-hidden flex flex-col h-full">
      
      {/* PROJECT COVER IMAGE */}
      <div
        className="relative aspect-[16/10] overflow-hidden"
        style={{
          backgroundColor: 'var(--color-bg-elevated)',
          borderBottom: '1px solid var(--color-border-dark)',
        }}
      >
        {hasImage ? (
          <img
            src={project.image}
            alt={`${project.title} cover`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              background:
                'radial-gradient(circle at 30% 20%, rgba(59,130,246,0.2), var(--color-bg-elevated) 70%)',
            }}
          >
            <div className="flex flex-col items-center gap-3 text-center px-5">
              <div
                className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl flex items-center justify-center font-bold text-white text-xl sm:text-2xl"
                style={{
                  background:
                    'linear-gradient(135deg, #3B82F6, #8B5CF6)',
                  boxShadow:
                    '0 10px 30px -10px rgba(59,130,246,0.5)',
                }}
              >
                {initials(project.title)}
              </div>

              <div
                className="text-xs sm:text-sm font-medium"
                style={{
                  color: 'var(--color-text-light-secondary)',
                }}
              >
                {project.title}
              </div>
            </div>
          </div>
        )}

        {/* TOP BADGES */}
        <div className="absolute inset-x-0 top-0 p-4 flex items-start justify-between gap-3">
          
          {hasVideo && (
            <div
              className="inline-flex items-center gap-1.5 rounded-full text-white text-xs font-medium px-2.5 py-1.5"
              style={{
                backgroundColor: 'rgba(0,0,0,0.55)',
                backdropFilter: 'blur(4px)',
              }}
            >
              <Play
                className="h-3.5 w-3.5 fill-white"
                aria-hidden="true"
              />
              Video
            </div>
          )}

          <div
            className="inline-flex items-center rounded-full text-[11px] font-medium px-2.5 py-1.5 ml-auto"
            style={{
              backgroundColor: 'rgba(0,0,0,0.55)',
              backdropFilter: 'blur(4px)',
              color: '#E2E8F0',
            }}
          >
            {project.category}
          </div>
        </div>
      </div>

      {/* PROJECT CONTENT */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 gap-4">
        
        <header className="space-y-2.5">
          
          {/* TECHNOLOGIES */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-md text-xs font-medium px-2.5 py-1"
                style={{
                  border: '1px solid var(--color-border-dark)',
                  backgroundColor: 'var(--color-bg-elevated)',
                  color: '#CBD5E1',
                }}
              >
                {tech}
              </span>
            ))}

            {project.technologies.length > 3 && (
              <span
                className="inline-flex items-center rounded-md text-xs font-medium px-2.5 py-1"
                style={{
                  border: '1px solid var(--color-border-dark)',
                  backgroundColor: 'var(--color-bg-elevated)',
                  color: 'rgba(148,163,184,0.85)',
                }}
              >
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* TITLE */}
          <h3
            className="text-[17px] sm:text-xl font-bold leading-snug"
            style={{
              color: 'var(--color-text-light)',
            }}
          >
            {project.title}
          </h3>

          {/* DESCRIPTION */}
          <p
            className="text-[15px] sm:text-sm leading-relaxed line-clamp-3"
            style={{
              color: 'var(--color-text-light-secondary)',
            }}
          >
            {project.shortDescription}
          </p>
        </header>

        {/* BUTTONS */}
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          
          <button
            type="button"
            onClick={() =>
              onViewDetails && onViewDetails(project)
            }
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl gradient-accent px-4 py-3 text-white text-sm font-semibold hover:opacity-90 transition-opacity min-h-[44px]"
          >
            <Info className="h-4 w-4" />
            View Details
          </button>

          <div className="flex gap-2">
            
            {/* LIVE DEMO */}
            {hasLive && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live demo for ${project.title}`}
                title="Live Demo"
                className="inline-flex items-center justify-center rounded-xl text-white w-11 h-11 min-w-[44px] min-h-[44px] transition-colors"
                style={{
                  border: '1px solid var(--color-border-dark)',
                  backgroundColor: 'var(--color-bg-secondary)',
                }}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}

            {/* GITHUB */}
            {hasGithub && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub repository for ${project.title}`}
                title="GitHub"
                className="inline-flex items-center justify-center rounded-xl text-white w-11 h-11 min-w-[44px] min-h-[44px] transition-colors"
                style={{
                  border: '1px solid var(--color-border-dark)',
                  backgroundColor: 'var(--color-bg-secondary)',
                }}
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.486 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.486 17.522 2 12 2z"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;