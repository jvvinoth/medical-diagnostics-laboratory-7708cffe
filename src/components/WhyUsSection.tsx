import React, { useEffect, useRef } from 'react';
import { Award, Clock, Shield, Users, Lock, Heart } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const iconMap = {
  Award,
  Clock,
  Shield,
  Users,
  Lock,
  Heart,
};

export const WhyUsSection: React.FC = () => {
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

    const features = sectionRef.current?.querySelectorAll('[data-reveal]');
    features?.forEach((feature) => observer.observe(feature));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-us" ref={sectionRef} className="py-20 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-accent font-medium mb-4">
            {siteContent.whyUs.overline}
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-primary mb-6">
            {siteContent.whyUs.heading}
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {siteContent.whyUs.subtext}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteContent.whyUs.features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                data-reveal
                className="opacity-0 translate-y-8"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-2xl p-8 md:p-10 h-full shadow-sm hover:shadow-lg transition-shadow duration-300 border border-border">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-muted leading-relaxed">
                    {feature.description}
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
