import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin, FlaskConical, FileCheck } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const iconMap = {
  Calendar,
  MapPin,
  FlaskConical,
  FileCheck,
};

export const ProcessSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-reveal');
          }
        });
      },
      { threshold: 0.1 }
    );

    const steps = sectionRef.current?.querySelectorAll('[data-reveal]');
    steps?.forEach((step) => observer.observe(step));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-accent font-medium mb-4">
            {siteContent.process.overline}
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-primary mb-6">
            {siteContent.process.heading}
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {siteContent.process.subtext}
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {siteContent.process.steps.map((step, index) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                data-reveal
                className="opacity-0 translate-y-8 relative"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Connector Line (hidden on mobile, visible on lg) */}
                {index < siteContent.process.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-2rem)] h-[2px] bg-border" />
                )}

                <div className="relative z-10 text-center">
                  {/* Number Badge */}
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-primary/5 border-2 border-primary/20 mb-6 relative">
                    <Icon className="w-10 h-10 text-primary" />
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-white text-sm font-semibold flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
