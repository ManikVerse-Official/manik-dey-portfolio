const focusAreas = [
  {
    title: 'Websites',
    description: 'Landing pages, portfolios, business sites & personal sites that load fast and work on every device.',
    gradient: 'linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)'
  },
  {
    title: 'Web Apps',
    description: 'Dashboards, admin panels, CRUD tools and interactive apps with real functionality behind the UI.',
    gradient: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)'
  },
  {
    title: 'Full-Stack',
    description: 'End-to-end work — React frontend, PHP/MySQL backend, forms, auth, data and deployment.',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)'
  },
  {
    title: 'Software & Utilities',
    description: 'Productivity tools, link organizers, editor-style interfaces and small utility applications.',
    gradient: 'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 100%)'
  }
];

const About = () => {
  return (
    <section id="about" className="section-pad" style={{ backgroundColor: 'var(--color-light-bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-3 order-2 lg:order-1">
            <div className="eyebrow text-blue-600 mb-3.5 sm:mb-4">
              About
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
              style={{ color: 'var(--color-text-dark)' }}>
              Building practical, working software
            </h2>

            <div className="mt-5 sm:mt-6 space-y-4 sm:space-y-5 leading-relaxed" style={{ color: 'var(--color-text-dark-secondary)' }}>
              <p className="text-[15px] sm:text-[16px]">
                I build websites, web applications, full-stack projects, and small software utilities. My focus is practical, working software that looks clean, responds on mobile, and doesn't break unexpectedly.
              </p>
              <p className="text-[15px] sm:text-[16px]">
                I use AI-assisted development tools as part of my workflow — they help me prototype quickly, scaffold features, explore options and speed up repetitive implementation.
              </p>
              <p className="text-[15px] sm:text-[16px]" style={{ color: '#1E293B' }}>
                What I do <span className="font-semibold" style={{ color: 'var(--color-text-dark)' }}>not</span> do is ship whatever an AI generated and call it done. Debugging, problem solving, testing, reviewing output, fixing edge cases and doing the final quality pass — that part is still me.
              </p>
              <p className="text-[15px] sm:text-[16px]">
                If I can't make a feature work reliably after reviewing and testing it, I won't pretend I delivered it.
              </p>
            </div>

            <div className="mt-9 sm:mt-10 lg:mt-11">
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-5" style={{ color: 'var(--color-text-dark)' }}>
                What I work on
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {focusAreas.map((area) => (
                  <div key={area.title} className="card-light p-5 sm:p-6">
                    <div className="inline-block h-1.5 w-11 rounded-full mb-3.5 sm:mb-4"
                      style={{ background: area.gradient }} />
                    <h4 className="font-bold text-[16px] sm:text-[17px] mb-2" style={{ color: 'var(--color-text-dark)' }}>
                      {area.title}
                    </h4>
                    <p className="text-[14px] sm:text-sm leading-relaxed" style={{ color: 'var(--color-text-dark-secondary)' }}>
                      {area.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 order-1 lg:order-2 mb-2 sm:mb-0">
            <div className="relative mx-auto max-w-md lg:sticky lg:top-28">
              <div className="card-light p-5.5 sm:p-6 sm:p-7 sm:p-8">
                <div className="flex items-start justify-between mb-5 sm:mb-6">
                  <div>
                    <div className="text-[13px] sm:text-sm font-medium" style={{ color: 'var(--color-text-dark-secondary)' }}>Currently focused on</div>
                    <div className="mt-1 text-lg sm:text-xl font-bold" style={{ color: 'var(--color-text-dark)' }}>
                      Delivering reliable work
                    </div>
                  </div>
                  <div className="h-10 w-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ border: '1px solid rgba(34,197,94,0.25)', backgroundColor: 'rgba(34,197,94,0.1)' }}>
                    <svg className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 5.29a1 1 0 010 1.42l-8 8a1 1 0 01-1.42 0l-4-4a1 1 0 011.42-1.42L8 12.584l7.29-7.294a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                <ul className="space-y-3 sm:space-y-3.5">
                  {[
                    'Responsive websites & landing pages',
                    'Web applications with real functionality',
                    'Full-stack implementations and integrations',
                    'Desktop-style / utility tool UIs',
                    'UI implementation from design or concept',
                    'Debugging, fixes & testing passes'
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[14px] sm:text-[15px]" style={{ color: 'var(--color-text-dark-secondary)' }}>
                      <span className="mt-1.5 h-2 w-2 rounded-full flex-shrink-0"
                        style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)' }} />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 sm:mt-8 pt-5.5 sm:pt-6" style={{ borderTop: '1px solid var(--color-light-border)' }}>
                  <div className="eyebrow mb-2.5 sm:mb-3" style={{ color: 'var(--color-text-dark-secondary)' }}>
                    Workflow
                  </div>
                  <div className="space-y-3 sm:space-y-4 text-[14px] sm:text-[15px]" style={{ color: 'var(--color-text-dark-secondary)' }}>
                    <p>
                      <span className="font-semibold" style={{ color: 'var(--color-text-dark)' }}>1. Plan &amp; prototype</span> — understand the goal, plan the structure, build a quick scaffold.
                    </p>
                    <p>
                      <span className="font-semibold" style={{ color: 'var(--color-text-dark)' }}>2. Implement with AI help</span> — use AI tools for speed, while guiding the direction.
                    </p>
                    <p>
                      <span className="font-semibold" style={{ color: 'var(--color-text-dark)' }}>3. Debug, test &amp; polish</span> — fix issues, test flows, review output and validate the end result.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
