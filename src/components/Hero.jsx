import { useState } from 'react';
import {
  ArrowRight,
  MessageCircle,
  Mail,
  Briefcase,
} from 'lucide-react';

import { siteConfig } from '../data/siteConfig';

const Hero = () => {
  const [imageError, setImageError] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappLink =
    'https://wa.me/918295075752?text=Hi%20Manik%2C%20I%20want%20to%20discuss%20a%20project.';

  const emailLink =
    'mailto:deym85810@gmail.com?subject=Project%20Inquiry%20for%20Manik%20Dey&body=Hi%20Manik%2C%0A%0AI%20want%20to%20discuss%20a%20project%20with%20you.%0A%0AProject%20Details%3A';

  return (
    <section
      id="home"
      className="relative overflow-visible section-pad min-h-[92vh] sm:min-h-screen flex items-center"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[-180px] sm:top-[-200px] left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] lg:w-[900px] h-[500px] sm:h-[700px] lg:h-[900px] rounded-full opacity-[0.08]"
          style={{
            background:
              'radial-gradient(circle, #3B82F6 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        <div
          className="absolute bottom-[-120px] sm:bottom-[-150px] right-[-80px] sm:right-[-100px] w-[350px] sm:w-[500px] lg:w-[600px] h-[350px] sm:h-[500px] lg:h-[600px] rounded-full opacity-[0.07]"
          style={{
            background:
              'radial-gradient(circle, #8B5CF6 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-16 sm:pt-10 pb-16 sm:pb-20 overflow-visible">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-20 items-center overflow-visible">
          
          {/* LEFT CONTENT */}
          <div className="animate-fade-in order-2 lg:order-1 text-center lg:text-left overflow-visible">

            <div
              className="inline-flex items-center gap-2.5 rounded-full px-3.5 sm:px-4 py-1.5 sm:py-2 mb-5 sm:mb-7"
              style={{
                border: '1px solid var(--color-border-dark)',
                backgroundColor: 'var(--color-bg-elevated)',
              }}
            >
              <span
                className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_0_4px_rgba(34,197,94,0.15)] animate-pulse-slow"
                aria-hidden="true"
              />

              <span
                className="text-[13px] sm:text-sm font-medium"
                style={{
                  color: 'var(--color-text-light-secondary)',
                }}
              >
                Available for new work
              </span>
            </div>

            <h1
              className="text-[32px] sm:text-5xl md:text-6xl lg:text-[64px] font-bold tracking-tight leading-[1.02]"
              style={{
                color: 'var(--color-text-light)',
              }}
            >
              {siteConfig.name}
            </h1>

            <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row sm:flex-wrap gap-x-3 gap-y-1.5 sm:gap-y-2 items-center justify-center lg:justify-start">
              <span className="text-lg sm:text-2xl font-semibold text-gradient">
                Web &amp; App Developer
              </span>

              <span
                className="hidden sm:inline text-xl sm:text-2xl font-semibold"
                style={{
                  color: 'var(--color-text-light-secondary)',
                }}
              >
                ·
              </span>

              <span
                className="text-lg sm:text-2xl font-semibold"
                style={{
                  color: 'var(--color-text-light-secondary)',
                }}
              >
                AI-Assisted Development
              </span>
            </div>

            <p
              className="mt-6 sm:mt-7 text-[15px] sm:text-[17px] sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
              style={{
                color: 'var(--color-text-light-secondary)',
              }}
            >
              I build modern websites, web applications, full-stack solutions,
              and software utilities using modern development workflows and
              AI-assisted development.
            </p>

            {/* Main CTA */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto sm:max-w-none sm:mx-0 overflow-visible py-2">
              <button
                onClick={() => scrollToSection('#projects')}
                className="relative z-10 inline-flex items-center justify-center gap-2.5 rounded-xl gradient-accent px-6 sm:px-7 py-3.5 sm:py-4 text-white font-semibold text-[15px] shadow-lg transition-all duration-300 ease-out min-h-[52px] sm:min-h-[56px] hover:scale-[1.03] hover:z-20 hover:opacity-90 active:scale-[0.98]"
                style={{
                  boxShadow:
                    '0 10px 30px -10px rgba(59, 130, 246, 0.45)',
                }}
              >
                View My Work
                <ArrowRight className="h-[18px] w-[18px]" />
              </button>

              <button
                onClick={() => scrollToSection('#contact')}
                className="relative z-10 inline-flex items-center justify-center gap-2.5 rounded-xl px-6 sm:px-7 py-3.5 sm:py-4 text-white font-semibold text-[15px] transition-all duration-300 ease-out min-h-[52px] sm:min-h-[56px] hover:scale-[1.03] hover:z-20 active:scale-[0.98]"
                style={{
                  border: '1px solid var(--color-border-dark)',
                  backgroundColor: 'var(--color-bg-elevated)',
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
                <Briefcase className="h-[18px] w-[18px]" />
                Contact Me
              </button>
            </div>

            {/* Contact buttons */}
            <div className="mt-7 sm:mt-9 flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start overflow-visible py-3 px-3 -mx-3">
              
              {/* WhatsApp */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative z-10 inline-flex items-center justify-center gap-2 rounded-xl px-3.5 sm:px-4 py-2.5 font-medium text-[14px] transition-all duration-300 ease-out min-h-[44px] hover:scale-105 hover:z-20 active:scale-95"
                style={{
                  border: '1px solid rgba(34,197,94,0.25)',
                  backgroundColor: 'rgba(34,197,94,0.08)',
                  color: '#4ADE80',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    'rgba(34,197,94,0.16)';
                  e.currentTarget.style.borderColor =
                    'rgba(34,197,94,0.5)';
                  e.currentTarget.style.boxShadow =
                    '0 8px 20px -8px rgba(34,197,94,0.45)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    'rgba(34,197,94,0.08)';
                  e.currentTarget.style.borderColor =
                    'rgba(34,197,94,0.25)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <MessageCircle className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                WhatsApp
              </a>

              {/* Email */}
              <a
                href={emailLink}
                className="group relative z-10 inline-flex items-center justify-center gap-2 rounded-xl px-3.5 sm:px-4 py-2.5 font-medium text-[14px] transition-all duration-300 ease-out min-h-[44px] hover:scale-105 hover:z-20 active:scale-95"
                style={{
                  border: '1px solid rgba(168,85,247,0.25)',
                  backgroundColor: 'rgba(168,85,247,0.08)',
                  color: '#C084FC',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    'rgba(168,85,247,0.16)';
                  e.currentTarget.style.borderColor =
                    'rgba(168,85,247,0.5)';
                  e.currentTarget.style.boxShadow =
                    '0 8px 20px -8px rgba(168,85,247,0.45)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    'rgba(168,85,247,0.08)';
                  e.currentTarget.style.borderColor =
                    'rgba(168,85,247,0.25)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Mail className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                Email
              </a>
            </div>
          </div>

          {/* PROFILE IMAGE */}
          <div className="order-1 lg:order-2 flex justify-center animate-slide-up mb-6 sm:mb-0 overflow-visible py-4 px-4">
            <div className="relative profile-photo-wrapper">

              {/* Glow */}
              <div
                className="absolute -inset-4 sm:-inset-6 rounded-full opacity-20 blur-2xl sm:blur-3xl pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle, #3B82F6 0%, #8B5CF6 60%, transparent 80%)',
                }}
                aria-hidden="true"
              />

              {/* Border */}
              <div
                className="relative rounded-full p-[2px]"
                style={{
                  background:
                    'linear-gradient(135deg, #60A5FA, #8B5CF6)',
                }}
              >
                <div
                  className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden"
                  style={{
                    backgroundColor: 'var(--color-bg-elevated)',
                  }}
                >
                  {!imageError ? (
                    <img
                      src="/assets/profile/profile.png"
                      alt={`${siteConfig.name} profile`}
                      className="w-full h-full object-cover"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="absolute inset-0 w-full h-full rounded-full flex items-center justify-center overflow-hidden">
                      <div className="flex flex-col items-center justify-center text-center px-4 max-w-full">
                        <div
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-2 flex-shrink-0"
                          style={{
                            border:
                              '1px solid rgba(59,130,246,0.35)',
                            background:
                              'linear-gradient(135deg, rgba(59,130,246,0.18), rgba(139,92,246,0.15))',
                          }}
                        >
                          <svg
                            className="w-5 h-5 sm:w-6 sm:h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="rgba(147,197,253,0.9)"
                            strokeWidth="1.5"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                            />
                          </svg>
                        </div>

                        <div
                          className="text-[10px] sm:text-xs font-medium"
                          style={{
                            color:
                              'var(--color-text-light-secondary)',
                          }}
                        >
                          Profile Photo
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll button */}
        <div className="mt-12 sm:mt-14 lg:mt-16 flex justify-center overflow-visible py-2">
          <button
            aria-label="Scroll to About section"
            onClick={() => scrollToSection('#about')}
            className="group relative z-10 rounded-full p-2 sm:p-2.5 transition-all duration-300 ease-out min-h-[40px] min-w-[40px] flex items-center justify-center hover:scale-110 hover:z-20"
            style={{
              border: '1px solid var(--color-border-dark)',
              color: 'var(--color-text-light-secondary)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color =
                'var(--color-text-light)';
              e.currentTarget.style.borderColor =
                'rgba(59,130,246,0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color =
                'var(--color-text-light-secondary)';
              e.currentTarget.style.borderColor =
                'var(--color-border-dark)';
            }}
          >
            <svg
              className="h-[18px] w-[18px] sm:h-5 sm:w-5 animate-bounce group-hover:animate-none"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 3a.75.75 0 01.75.75v9.19l2.97-2.97a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 11.03a.75.75 0 011.06-1.06l2.97 2.97V3.75A.75.75 0 0110 3z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;