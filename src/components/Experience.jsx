import { experience } from '../data/experience';
import { MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section-pad-sm" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-block mb-4 text-xs font-semibold tracking-wider uppercase text-blue-400">
          Experience
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Professional Journey
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Development experience and hands-on project work
          </p>
        </div>

        <div className="max-w-3xl mx-auto timeline-container">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 sm:pl-10 pb-8 sm:pb-10 last:pb-0"
            >
              <div className="absolute left-[7px] sm:left-[9px] top-1.5 w-3 h-3 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 ring-4 ring-bg-secondary z-10" />
              <div className={`absolute left-[13px] sm:left-[15px] top-5 w-px h-full bg-gradient-to-b from-blue-500/30 via-indigo-500/30 to-transparent ${index === experience.length - 1 ? 'hidden' : ''}`} />
              
              <div className="rounded-2xl card-surface card-surface-hover p-5 sm:p-6 ml-2">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">{exp.title}</h3>
                    <p className="text-blue-400 font-medium text-sm">{exp.company}</p>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm gap-2">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                </div>
                
                <div className="flex items-center text-gray-400 text-sm mb-4 gap-2">
                  <MapPin className="w-4 h-4" />
                  {exp.location}
                </div>
                
                <p className="text-gray-300 leading-relaxed text-[15px]">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
