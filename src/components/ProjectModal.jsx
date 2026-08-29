import { X, ExternalLink, CheckCircle2, Code2, Folder } from 'lucide-react';

const initials = (name) => {
  if (!name) return '?';

  const firstClean = name.split('—')[0].split('|')[0].trim();
  const parts = firstClean
    .replace(/[^A-Za-z0-9 ]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);

  if (!parts.length) return '?';
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();

  return (
    parts[0].charAt(0) +
    parts[parts.length - 1].charAt(0)
  ).toUpperCase();
};

const ProjectModal = ({ project, onClose, isOpen }) => {
  if (!project || !isOpen) return null;

  const hasImage = !!project.image;
  const hasVideo = !!project.video && project.video.trim() !== '';
  const hasScreenshots =
    !!project.screenshots && project.screenshots.length > 0;
  const hasFeatures =
    !!project.features && project.features.length > 0;
  const hasLive =
    !!project.liveDemo && project.liveDemo.trim() !== '';
  const hasGithub =
    !!project.github && project.github.trim() !== '';

  const baseStyle = {
    backgroundColor: 'var(--color-bg-card)',
    border: '1px solid var(--color-border-dark)'
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={`project-${project.id}-title`}
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 sm:p-6"
      style={{
        backgroundColor: 'rgba(0,0,0,0.75)',
        backdropFilter: 'blur(6px)',
        transition: 'opacity 0.2s ease'
      }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl h-[92vh] overflow-hidden rounded-3xl flex flex-col"
        style={baseStyle}
        onClick={(e) => e.stopPropagation()}
      >
        {/* FIXED HEADER */}
        <header
          className="flex-shrink-0 flex items-start justify-between gap-4 px-5 sm:px-7 py-4 sm:py-5 z-10"
          style={{
            borderBottom: '1px solid var(--color-border-dark)',
            backgroundColor: 'rgba(17,26,43,0.98)'
          }}
        >
          <div className="min-w-0">
            <div
              className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-1"
              style={{ color: '#93C5FD' }}
            >
              {project.category}
            </div>

            <h2
              id={`project-${project.id}-title`}
              className="text-xl sm:text-2xl font-bold truncate"
              style={{ color: 'var(--color-text-light)' }}
            >
              {project.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="flex-shrink-0 h-10 w-10 rounded-xl flex items-center justify-center text-white transition-colors"
            style={{
              border: '1px solid var(--color-border-dark)',
              backgroundColor: 'var(--color-bg-secondary)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor =
                'var(--color-bg-elevated)';
              e.currentTarget.style.borderColor =
                'rgba(59,130,246,0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor =
                'var(--color-bg-secondary)';
              e.currentTarget.style.borderColor =
                'var(--color-border-dark)';
            }}
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        {/* SCROLLABLE CONTENT ONLY */}
        <div
          className="flex-1 min-h-0 overflow-y-auto px-5 sm:px-7 py-5 sm:py-7 space-y-7"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor:
              'rgba(148,163,184,0.45) transparent'
          }}
        >
          {/* VIDEO / COVER */}
          <div>
            {hasVideo ? (
              <div
                className="aspect-video w-full rounded-2xl overflow-hidden"
                style={{
                  border: '1px solid var(--color-border-dark)',
                  backgroundColor: 'var(--color-bg-elevated)'
                }}
              >
                <video
                  controls
                  preload="none"
                  poster={hasImage ? project.image : undefined}
                  playsInline
                  className="w-full h-full object-contain"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }}
                >
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>
              </div>
            ) : hasImage ? (
              <div
                className="aspect-video w-full rounded-2xl overflow-hidden"
                style={{
                  border: '1px solid var(--color-border-dark)',
                  backgroundColor: 'var(--color-bg-elevated)'
                }}
              >
                <img
                  src={project.image}
                  alt={`${project.title} showcase`}
                  className="w-full h-full object-cover"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  onError={(e) => {
                    e.currentTarget.remove();

                    const parent = e.currentTarget.parentElement;

                    const fb = document.createElement('div');

                    fb.className =
                      'w-full h-full flex items-center justify-center';

                    fb.style.background =
                      'radial-gradient(circle at 30% 20%, rgba(59,130,246,0.22), var(--color-bg-elevated) 70%)';

                    fb.innerHTML = `
                      <div class="flex flex-col items-center gap-3 text-center px-5">
                        <div
                          class="h-20 w-20 rounded-2xl flex items-center justify-center font-bold text-white text-2xl"
                          style="
                            background: linear-gradient(135deg, #3B82F6, #8B5CF6);
                            box-shadow: 0 10px 30px -10px rgba(59,130,246,0.5);
                          "
                        >
                          ${initials(project.title)}
                        </div>

                        <div
                          class="text-sm font-medium"
                          style="color: var(--color-text-light-secondary);"
                        >
                          ${project.title.replace(/"/g, '&quot;')}
                        </div>
                      </div>
                    `;

                    parent.appendChild(fb);
                  }}
                />
              </div>
            ) : (
              <div
                className="aspect-video w-full rounded-2xl overflow-hidden flex items-center justify-center"
                style={{
                  border: '1px solid var(--color-border-dark)',
                  background:
                    'radial-gradient(circle at 30% 20%, rgba(59,130,246,0.22), var(--color-bg-elevated) 70%)'
                }}
              >
                <div className="flex flex-col items-center gap-3 text-center px-5">
                  <div
                    className="h-20 w-20 rounded-2xl flex items-center justify-center font-bold text-white text-3xl"
                    style={{
                      background:
                        'linear-gradient(135deg, #3B82F6, #8B5CF6)',
                      boxShadow:
                        '0 10px 30px -10px rgba(59,130,246,0.5)'
                    }}
                  >
                    {initials(project.title)}
                  </div>

                  <div
                    className="font-semibold"
                    style={{
                      color: 'var(--color-text-light)'
                    }}
                  >
                    {project.title}
                  </div>

                  <div
                    className="text-sm"
                    style={{
                      color: 'var(--color-text-light-secondary)'
                    }}
                  >
                    Project showcase
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ABOUT */}
          <section className="space-y-3">
            <h3
              className="text-base sm:text-lg font-semibold flex items-center gap-2"
              style={{
                color: 'var(--color-text-light)'
              }}
            >
              <Folder className="h-5 w-5 text-blue-400" />
              About this project
            </h3>

            <p
              className="text-sm sm:text-[15px] leading-relaxed"
              style={{
                color: 'var(--color-text-light-secondary)'
              }}
            >
              {project.fullDescription}
            </p>
          </section>

          {/* TECHNOLOGIES */}
          <section className="space-y-3">
            <h3
              className="text-base sm:text-lg font-semibold flex items-center gap-2"
              style={{
                color: 'var(--color-text-light)'
              }}
            >
              <Code2 className="h-5 w-5 text-indigo-400" />
              Technologies
            </h3>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-lg text-xs sm:text-sm font-medium px-3 py-1.5"
                  style={{
                    border:
                      '1px solid var(--color-border-dark)',
                    backgroundColor:
                      'var(--color-bg-elevated)',
                    color: '#E2E8F0'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* FEATURES */}
          {hasFeatures && (
            <section className="space-y-3">
              <h3
                className="text-base sm:text-lg font-semibold flex items-center gap-2"
                style={{
                  color: 'var(--color-text-light)'
                }}
              >
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                Key features
              </h3>

              <ul className="grid sm:grid-cols-2 gap-3">
                {project.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 rounded-2xl px-4 py-3"
                    style={{
                      border:
                        '1px solid var(--color-border-dark)',
                      backgroundColor:
                        'var(--color-bg-elevated)'
                    }}
                  >
                    <span
                      className="mt-1 h-2 w-2 rounded-full flex-shrink-0"
                      style={{
                        background:
                          'linear-gradient(135deg, #3B82F6, #8B5CF6)'
                      }}
                    />

                    <span
                      className="text-sm leading-relaxed"
                      style={{
                        color:
                          'var(--color-text-light-secondary)'
                      }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* SCREENSHOTS */}
          {hasScreenshots && (
            <section className="space-y-3">
              <h3
                className="text-base sm:text-lg font-semibold"
                style={{
                  color: 'var(--color-text-light)'
                }}
              >
                Screenshots
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                {project.screenshots.map((src, idx) => (
                  <div
                    key={idx}
                    className="aspect-video rounded-xl overflow-hidden"
                    style={{
                      border:
                        '1px solid var(--color-border-dark)',
                      backgroundColor:
                        'var(--color-bg-elevated)'
                    }}
                  >
                    <img
                      src={src}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                      onError={(e) => {
                        e.currentTarget.remove();

                        const parent =
                          e.currentTarget.parentElement;

                        parent.style.background =
                          'radial-gradient(circle at 30% 20%, rgba(59,130,246,0.22), var(--color-bg-elevated) 70%)';

                        parent.style.display = 'flex';
                        parent.style.alignItems = 'center';
                        parent.style.justifyContent = 'center';

                        parent.innerHTML = `
                          <span
                            class="text-xs"
                            style="color: var(--color-text-light-secondary);"
                          >
                            Screenshot ${idx + 1}
                          </span>
                        `;
                      }}
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap gap-3 pt-3">
            {hasLive && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl gradient-accent px-5 py-3 text-white text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}

            {hasGithub && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition-colors"
                style={{
                  border:
                    '1px solid var(--color-border-dark)',
                  backgroundColor:
                    'var(--color-bg-elevated)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    'rgba(59,130,246,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    'var(--color-border-dark)';
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

                View on GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;