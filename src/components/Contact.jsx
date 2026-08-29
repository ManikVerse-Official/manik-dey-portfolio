import {
  FaWhatsapp,
  FaTelegramPlane,
  FaLinkedinIn,
  FaEnvelope,
  FaPaperPlane,
} from 'react-icons/fa';

const Contact = () => {
  const whatsappLink =
    'https://wa.me/918295075752?text=Hi%20Manik%2C%20I%20want%20to%20discuss%20a%20project.';

  const telegramLink = 'https://t.me/manikdey2002';

  const linkedinLink =
    'https://www.linkedin.com/in/manikdey2002/';

  const emailLink =
    'mailto:deym85810@gmail.com?subject=Project%20Inquiry%20for%20Manik%20Dey&body=Hi%20Manik%2C%0A%0AI%20want%20to%20discuss%20a%20project%20with%20you.%0A%0AProject%20Details%3A';

  const contactItems = [
    {
      title: 'WhatsApp',
      description: 'Quick message, usually the fastest response',
      icon: <FaWhatsapp size={28} />,
      link: whatsappLink,
      color: '#25D366',
    },
    {
      title: 'Telegram',
      description: 'Message me directly on Telegram',
      icon: <FaTelegramPlane size={28} />,
      link: telegramLink,
      color: '#229ED9',
    },
    {
      title: 'LinkedIn',
      description: 'Connect with me professionally',
      icon: <FaLinkedinIn size={28} />,
      link: linkedinLink,
      color: '#0A66C2',
    },
    {
      title: 'Email',
      description: 'Send a detailed project brief or documents',
      icon: <FaEnvelope size={27} />,
      link: emailLink,
      color: '#A855F7',
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-visible section-pad"
      style={{ backgroundColor: 'var(--color-dark-bg)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="eyebrow mb-4 text-blue-400">
            Contact
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Let&apos;s work together
          </h2>

          <p className="mt-4 sm:mt-5 text-[15px] sm:text-[17px] leading-relaxed text-slate-300">
            Let&apos;s discuss how I can help bring your ideas to life. Reach
            out through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 overflow-visible">
          {/* Contact Links */}
          <div className="lg:col-span-3 space-y-5 overflow-visible">
            {contactItems.map((item) => (
              <a
                key={item.title}
                href={item.link}
                target={item.title === 'Email' ? undefined : '_blank'}
                rel={
                  item.title === 'Email'
                    ? undefined
                    : 'noopener noreferrer'
                }
                className="group flex items-center gap-5 rounded-2xl border border-slate-700 bg-slate-800/70 p-5 sm:p-6 transition-all duration-300 hover:border-slate-500 hover:bg-slate-800 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/60 active:translate-y-0"
              >
                {/* Icon */}
                <div
                  className="h-16 w-16 flex-shrink-0 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                  style={{
                    color: item.color,
                    backgroundColor: `${item.color}18`,
                    border: `1px solid ${item.color}40`,
                  }}
                >
                  {item.icon}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm sm:text-base text-slate-400">
                    {item.description}
                  </p>
                </div>

                {/* Arrow */}
                <FaPaperPlane
                  size={22}
                  className="flex-shrink-0 transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-1"
                  style={{ color: item.color }}
                />
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="lg:col-span-2 overflow-visible">
            <div className="h-full rounded-2xl border border-slate-700 bg-slate-800/70 p-7 sm:p-9 transition-all duration-300 hover:border-slate-600 hover:shadow-xl hover:shadow-slate-900/40">
              <div className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                Response
              </div>

              <h3 className="mt-5 text-2xl sm:text-3xl font-bold text-white">
                Ready to discuss your project
              </h3>

              <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-400">
                I typically respond within a few hours. For the fastest
                response, send me a WhatsApp message with a brief project
                overview and I&apos;ll get back to you.
              </p>

              <div className="my-8 border-t border-slate-700" />

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

                  <p className="text-slate-300">
                    <span className="font-semibold text-white">
                      Available
                    </span>{' '}
                    for freelance projects and contract work
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />

                  <p className="text-slate-300">
                    <span className="font-semibold text-white">
                      Remote-first
                    </span>{' '}
                    — work with clients worldwide
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-purple-400" />

                  <p className="text-slate-300">
                    <span className="font-semibold text-white">
                      Clear communication
                    </span>{' '}
                    and regular progress updates
                  </p>
                </div>
              </div>

              {/* Quick WhatsApp CTA */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-9 inline-flex w-full items-center justify-center gap-3 rounded-xl px-5 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-900/50 active:translate-y-0"
                style={{
                  background:
                    'linear-gradient(135deg, #25D366, #128C7E)',
                }}
              >
                <FaWhatsapp
                  size={23}
                  className="transition-transform duration-300 group-hover:rotate-6"
                />

                Start a WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;