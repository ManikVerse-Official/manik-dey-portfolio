import {
  FaWhatsapp,
  FaTelegramPlane,
  FaEnvelope,
  FaLinkedinIn,
  FaExternalLinkAlt,
} from 'react-icons/fa';

import { services } from '../data/services';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const whatsappLink =
    'https://wa.me/918295075752?text=Hi%20Manik%2C%20I%20want%20to%20discuss%20a%20project.';

  const telegramLink = 'https://t.me/manikdey2002';

  const linkedinLink =
    'https://www.linkedin.com/in/manikdey2002/';

  const emailLink =
    'mailto:deym85810@gmail.com?subject=Project%20Inquiry%20for%20Manik%20Dey&body=Hi%20Manik%2C%0A%0AI%20want%20to%20discuss%20a%20project%20with%20you.%0A%0AProject%20Details%3A';

  const contacts = [
    {
      name: 'WhatsApp',
      description: 'Quick message for project discussions',
      icon: FaWhatsapp,
      href: whatsappLink,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/20',
      external: true,
    },
    {
      name: 'Telegram',
      description: 'Message me directly on Telegram',
      icon: FaTelegramPlane,
      href: telegramLink,
      color: 'text-sky-400',
      bg: 'bg-sky-500/10',
      border: 'border-sky-500/20',
      external: true,
    },
    {
      name: 'LinkedIn',
      description: 'Connect professionally with me',
      icon: FaLinkedinIn,
      href: linkedinLink,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/20',
      external: true,
    },
    {
      name: 'Email',
      description: 'Send me your project details',
      icon: FaEnvelope,
      href: emailLink,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/20',
      external: false,
    },
  ];

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      href: whatsappLink,
      hover: 'hover:text-emerald-400',
    },
    {
      name: 'Telegram',
      icon: FaTelegramPlane,
      href: telegramLink,
      hover: 'hover:text-sky-400',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedinIn,
      href: linkedinLink,
      hover: 'hover:text-blue-400',
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      href: emailLink,
      hover: 'hover:text-purple-400',
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative overflow-visible bg-[#111827] border-t border-slate-800">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-[10%] w-80 h-80 bg-indigo-500/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-32 right-[10%] w-80 h-80 bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative overflow-visible max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand */}
          <div className="overflow-visible">
            <a
              href="#home"
              className="inline-block text-2xl font-bold text-white mb-4"
            >
              Manik Dey
            </a>

            <p className="text-slate-400 leading-relaxed text-sm max-w-xs">
              Web & App Developer building modern digital products and
              practical software solutions.
            </p>

            {/* Social Icons */}
            <div className="mt-7 overflow-visible">
              <p className="text-xs font-semibold tracking-wider uppercase text-slate-500 mb-4">
                Connect
              </p>

              <div className="flex items-center gap-3 overflow-visible py-1">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target={
                        social.name === 'Email'
                          ? undefined
                          : '_blank'
                      }
                      rel={
                        social.name === 'Email'
                          ? undefined
                          : 'noopener noreferrer'
                      }
                      aria-label={social.name}
                      title={social.name}
                      className={`group w-11 h-11 rounded-xl border border-slate-700 bg-slate-800/60 flex items-center justify-center text-slate-400 ${social.hover} hover:border-slate-500 hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/50 transition-all duration-300 active:scale-95`}
                    >
                      <Icon
                        size={18}
                        className="transition-transform duration-300 group-hover:rotate-12"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white mb-5">
              Quick Links
            </h4>

            <div className="grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-1">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-fit py-2 text-sm text-slate-400 hover:text-indigo-300 hover:translate-x-2 transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white mb-5">
              Services
            </h4>

            <div className="space-y-1">
              {services.slice(0, 5).map((service) => (
                <a
                  key={service.name}
                  href="#services"
                  className="block w-fit py-2 text-sm text-slate-400 hover:text-indigo-300 hover:translate-x-2 transition-all duration-300"
                >
                  {service.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="overflow-visible">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white mb-5">
              Get In Touch
            </h4>

            <div className="space-y-2 overflow-visible py-1">
              {contacts.map((contact) => {
                const Icon = contact.icon;

                return (
                  <a
                    key={contact.name}
                    href={contact.href}
                    target={contact.external ? '_blank' : undefined}
                    rel={
                      contact.external
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className="group flex items-center gap-3 rounded-xl p-2 hover:bg-white/[0.04] transition-all duration-300 active:scale-[0.98]"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl border ${contact.border} ${contact.bg} flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:shadow-md`}
                    >
                      <Icon
                        size={19}
                        className={`${contact.color} transition-transform duration-300 group-hover:rotate-6`}
                      />
                    </div>

                    <div className="min-w-0">
                      <div className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                        {contact.name}
                      </div>

                      <div className="text-xs text-slate-500 truncate">
                        {contact.description}
                      </div>
                    </div>

                    <FaExternalLinkAlt
                      size={13}
                      className="ml-auto flex-shrink-0 text-slate-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-7 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500 text-center sm:text-left">
              © {currentYear} Manik Dey. All rights reserved.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span>Designed & built by</span>

              <span className="font-medium text-slate-300">
                Manik Dey
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;