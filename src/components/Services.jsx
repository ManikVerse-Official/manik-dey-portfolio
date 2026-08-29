import { Globe, Layout, Layers, Wrench, Bot, Code2, CheckCircle2, Smartphone } from 'lucide-react';
import { services } from '../data/services';

const iconMap = {
  Globe: Globe,
  Layout: Layout,
  Layers: Layers,
  Wrench: Wrench,
  Bot: Bot,
  Code: Code2,
  CheckCircle: CheckCircle2,
  Smartphone: Smartphone
};

const gradients = [
  'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
  'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
  'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
  'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
  'linear-gradient(135deg, #10B981 0%, #059669 100%)',
  'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
  'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
  'linear-gradient(135deg, #EC4899 0%, #DB2777 100%)'
];

const Services = () => {
  return (
    <section id="services" className="section-pad" style={{ backgroundColor: 'var(--color-light-bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="eyebrow mb-4 text-purple-600">
            Services
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
            style={{ color: 'var(--color-text-dark)' }}>
            What I can build for you
          </h2>
          <p className="mt-4 sm:mt-5 text-[15px] sm:text-[17px] leading-relaxed" style={{ color: 'var(--color-text-dark-secondary)' }}>
            Clear, practical services focused on delivering working software. From a single-page landing site to a full-stack application with backend logic.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Code2;
            return (
              <div key={service.name} className="card-light p-6 sm:p-7 flex flex-col h-full group">
                <div
                  className="inline-flex h-12 w-12 sm:h-14 sm:w-14 rounded-xl sm:rounded-2xl items-center justify-center mb-5 text-white shadow-md"
                  style={{ background: gradients[index % gradients.length], boxShadow: '0 10px 24px -12px rgba(59,130,246,0.45)' }}
                  aria-hidden="true"
                >
                  <IconComponent className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <h3 className="font-bold text-[18px] sm:text-lg mb-2.5 leading-snug" style={{ color: 'var(--color-text-dark)' }}>
                  {service.name}
                </h3>
                <p className="text-[15px] sm:text-sm leading-relaxed flex-grow" style={{ color: 'var(--color-text-dark-secondary)' }}>
                  {service.description}
                </p>
                <div className="mt-5 h-1 w-10 rounded-full transition-all duration-300 group-hover:w-full"
                  style={{ background: 'linear-gradient(90deg, #3B82F6, #8B5CF6)' }} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
