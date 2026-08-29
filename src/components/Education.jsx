import { education } from '../data/education';
import { MapPin, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section className="section-pad-sm" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-block mb-4 text-xs font-semibold tracking-wider uppercase text-purple-400">
            Education
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Educational Background
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Academic foundation and qualifications
          </p>
        </div>

        <div className="max-w-3xl mx-auto timeline-container">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative pl-8 sm:pl-10 pb-8 sm:pb-10 last:pb-0"
            >
              <div className="absolute left-[7px] sm:left-[9px] top-1.5 w-3 h-3 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 ring-4 ring-bg-primary z-10" />
              <div className={`absolute left-[13px] sm:left-[15px] top-5 w-px h-full bg-gradient-to-b from-purple-500/30 via-indigo-500/30 to-transparent ${index === education.length - 1 ? 'hidden' : ''}`} />
              
              <div className="rounded-2xl card-surface card-surface-hover p-5 sm:p-6 ml-2">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">{edu.degree}</h3>
                    <p className="text-purple-400 font-medium text-sm">{edu.institution}</p>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm gap-2">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </div>
                </div>
                
                <div className="flex items-center text-gray-400 text-sm mb-4 gap-2">
                  <MapPin className="w-4 h-4" />
                  {edu.location}
                </div>
                
                <p className="text-gray-300 leading-relaxed text-[15px]">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
