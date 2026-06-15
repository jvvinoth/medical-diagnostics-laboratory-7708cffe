import React, { useEffect, useRef } from 'react';
import { Droplet, Microscope, Activity, Stethoscope, Check } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const iconMap = {
  Droplet,
  Microscope,
  Activity,
  Stethoscope,
};

export const ServicesSection: React.FC = () => {
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

    const cards = sectionRef.current?.querySelectorAll('[data-reveal]');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-20 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-accent font-medium mb-4">
            {siteContent.services.overline}
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-primary mb-6">
            {siteContent.services.heading}
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {siteContent.services.subtext}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteContent.services.items.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                data-reveal
                className="opacity-0 translate-y-8"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-2xl p-8 h-full shadow-sm hover:shadow-lg transition-shadow duration-300 border border-border">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-heading font-semibold text-primary mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-muted leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-text-muted">
                        <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
