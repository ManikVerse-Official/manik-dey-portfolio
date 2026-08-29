import { skills } from '../data/skills';

const categories = [
  { key: 'frontend',  title: 'Frontend',                 description: 'UI, markup, client-side interactivity',  tone: 'blue'   },
  { key: 'backend',   title: 'Backend',                  description: 'Server logic, databases, APIs & auth',   tone: 'indigo' },
  { key: 'fullstack', title: 'Full-Stack',               description: 'Connecting UI, server and data',         tone: 'purple' },
  { key: 'ai',        title: 'AI-Assisted Development',  description: 'Workflow around AI coding tools',         tone: 'blue'   },
  { key: 'software',  title: 'Software / Tools',         description: 'Utility and desktop-style software',      tone: 'indigo' },
  { key: 'testing',   title: 'Testing & QA',             description: 'Practical testing & debugging passes',    tone: 'purple' }
];

const chipStyles = (tone) => {
  switch (tone) {
    case 'blue':
      return { border: '1px solid rgba(59,59,59,0.2)', bg: 'rgba(59,58,95,0.08)', text: '#93C5FD' };
    case 'indigo':
      return { border: '1px solid rgba(99,102,241,0.25)', bg: 'rgba(99,102,241,0.08)', text: '#C4B5FD' };
    case 'purple':
    default:
      return { border: '1px solid rgba(91,33,182,0.25)', bg: 'rgba(91,87,255,0.08)', text: '#C4B5FD' };
  }
};

const headingTone = (tone) => {
  switch (tone) {
    case 'blue': return '#3B82F6';
    case 'indigo': return '#8B5CF6';
    default: return '#7C3AED';
  }
};

const Skills = () => {
  return (
    <section id="skills" className="section-pad" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="eyebrow mb-4 text-blue-400">
            Technologies
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
            style={{ color: 'var(--color-text-light)' }}>
            Technologies &amp; workflows I use
          </h2>
          <p className="mt-4 sm:mt-5 text-[15px] sm:text-[17px] leading-relaxed" style={{ color: 'var(--color-text-light-secondary)' }}>
            Practical groups of technologies and workflows — the tags below are things I have hands-on experience building with, no arbitrary percentages.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {categories.map((category) => {
            const list = skills[category.key] || [];
            const chip = chipStyles(category.tone);
            const headColor = headingTone(category.tone);
            return (
              <div key={category.key} className="relative card-dark p-6 sm:p-7 overflow-hidden">
                <div className="absolute -top-14 -right-14 sm:-top-16 sm:-right-16 h-36 w-36 sm:h-44 sm:w-44 rounded-full opacity-40 blur-3xl pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.25), transparent 70%)' }}
                  aria-hidden="true" />
                <div className="relative">
                  <h3 className="text-base sm:text-lg font-semibold mb-1.5" style={{ color: headColor }}>
                    {category.title}
                  </h3>
                  <p className="text-[13px] sm:text-sm mb-5" style={{ color: 'rgba(148,163,184,0.9)' }}>
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {list.map((skill) => (
                      <span
                        key={skill.name}
                        className="inline-flex items-center rounded-lg px-3 py-1.5 text-sm font-medium"
                        style={{ border: chip.border, backgroundColor: chip.bg, color: chip.text }}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
