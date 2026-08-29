import { CheckCircle2, Lightbulb, Shield, Users, Gauge, Eye } from 'lucide-react';

const reasons = [
  {
    icon: CheckCircle2,
    title: 'Actually working software',
    description: 'If something doesn\'t work, I don\'t ship it as done. I test the flows that matter and fix the bugs that break them.',
    gradient: 'linear-gradient(135deg, #10B981, #059669)'
  },
  {
    icon: Lightbulb,
    title: 'Practical problem solving',
    description: 'The goal isn\'t clever code or a flashy demo — it\'s a solution that fits the real use case you need.',
    gradient: 'linear-gradient(135deg, #F59E0B, #D97706)'
  },
  {
    icon: Gauge,
    title: 'AI-assisted speed',
    description: 'I use AI coding tools in the right places so I can move quickly without letting low-quality output through.',
    gradient: 'linear-gradient(135deg, #3B82F6, #6366F1)'
  },
  {
    icon: Shield,
    title: 'Human review & QA',
    description: 'Debugging, testing, logic review and edge cases — that part is still done manually, not copied from an AI answer.',
    gradient: 'linear-gradient(135deg, #8B5CF6, #7C3AED)'
  },
  {
    icon: Users,
    title: 'Straightforward communication',
    description: 'I tell you what I can do, what I can\'t, and when something has changed. No surprises late in the project.',
    gradient: 'linear-gradient(135deg, #EC4899, #DB2777)'
  },
  {
    icon: Eye,
    title: 'Detail-oriented polish',
    description: 'Mobile layout, spacing, alignment, empty states, loading screens, error handling — those details get real attention.',
    gradient: 'linear-gradient(135deg, #0EA5E9, #0284C7)'
  }
];

const WhyWorkWithMe = () => {
  return (
    <section id="why" className="section-pad" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="eyebrow mb-4 text-indigo-400">
            Approach
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
            style={{ color: 'var(--color-text-light)' }}>
            Why work with me
          </h2>
          <p className="mt-5 text-[17px]" style={{ color: 'var(--color-text-light-secondary)' }}>
            A few principles that shape how I approach development — designed for clients who want reliable, honest outcomes, not empty promises.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {reasons.map((reason) => {
            const IconComponent = reason.icon;
            return (
              <div key={reason.title} className="card-dark p-7 h-full flex flex-col">
                <div className="mb-5 h-12 w-12 rounded-2xl flex items-center justify-center text-white"
                  style={{ background: reason.gradient, boxShadow: '0 10px 30px -12px rgba(59,130,246,0.35)' }}
                  aria-hidden="true">
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg mb-2.5" style={{ color: 'var(--color-text-light)' }}>
                  {reason.title}
                </h3>
                <p className="text-[15px] leading-relaxed" style={{ color: 'var(--color-text-light-secondary)' }}>
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
