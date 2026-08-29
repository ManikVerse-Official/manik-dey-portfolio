import {
  FaGithub,
  FaGoogle,
  FaRobot,
  FaInfinity,
  FaCode,
  FaTerminal,
  FaAngleUp,
  FaBrain,
} from 'react-icons/fa';

import { VscVscode } from 'react-icons/vsc';

import { tools } from '../data/tools';

const Tools = () => {
  const getIcon = (name) => {
    const iconProps = {
      size: 38,
      'aria-hidden': true,
    };

    switch (name) {
      case 'ChatGPT':
        return <FaBrain {...iconProps} />;

      case 'Cursor':
        return <FaCode {...iconProps} />;

      case 'Trae':
        return <FaTerminal {...iconProps} />;

      case 'Gemini':
        return <FaGoogle {...iconProps} />;

      case 'Meta AI':
        return <FaInfinity {...iconProps} />;

      case 'VS Code':
        return <VscVscode {...iconProps} />;

      case 'GitHub':
        return <FaGithub {...iconProps} />;

      case 'Vercel':
        return <FaAngleUp {...iconProps} />;

      default:
        return <FaRobot {...iconProps} />;
    }
  };

  return (
    <section
      id="tools"
      className="section-pad"
      style={{
        backgroundColor: 'var(--color-light-bg)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="eyebrow mb-4 text-indigo-600">
            Tools
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
            style={{
              color: 'var(--color-text-dark)',
            }}
          >
            Tools I use every day
          </h2>

          <p
            className="mt-4 sm:mt-5 text-[15px] sm:text-[17px] leading-relaxed"
            style={{
              color: 'var(--color-text-dark-secondary)',
            }}
          >
            The development and productivity tools in my workflow — from AI
            assistants and code editors to development tools.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="card-light p-5 sm:p-6 flex flex-col items-center text-center group"
            >
              <div
                className="mb-4 h-14 w-14 sm:h-16 sm:w-16 rounded-xl sm:rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{
                  border: '1px solid var(--color-light-border)',
                  backgroundColor: 'var(--color-light-bg)',
                  color: 'var(--color-primary)',
                }}
              >
                {getIcon(tool.name)}
              </div>

              <h3
                className="font-bold text-[15px] sm:text-base mb-1"
                style={{
                  color: 'var(--color-text-dark)',
                }}
              >
                {tool.name}
              </h3>

              <p
                className="text-[13px] sm:text-sm leading-relaxed"
                style={{
                  color: 'var(--color-text-dark-secondary)',
                }}
              >
                {tool.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Tools;