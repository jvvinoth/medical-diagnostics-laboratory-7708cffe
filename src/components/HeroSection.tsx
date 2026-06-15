import React from 'react';
import { Calendar, ArrowRight, ShieldCheck, Clock, Award, Microscope } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const iconMap = {
  ShieldCheck,
  Clock,
  Award,
};

export const HeroSection: React.FC = () => {
  const handleCTAClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative bg-white pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-surface rounded-full blur-3xl opacity-50 -z-10 translate-x-1/3 -translate-y-1/3" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 items-center min-h-[70vh] md:min-h-[85vh]">
          {/* Left Column - Text Content */}
          <div className="space-y-6 animate-fade-up">
            {/* Badge */}
            <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium inline-block">
              {siteContent.hero.badge}
            </span>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-heading font-semibold text-primary leading-[1.1] tracking-tight">
              {siteContent.hero.headline}
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-xl">
              {siteContent.hero.subtext}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => handleCTAClick('#book-appointment')}
                className="flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-medium text-base hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                {siteContent.hero.primaryCTA}
                <Calendar className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleCTAClick('#services')}
                className="flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-full font-medium hover:bg-primary hover:text-white transition-all duration-300"
              >
                {siteContent.hero.secondaryCTA}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              {siteContent.hero.trustIndicators.map((indicator, index) => {
                const Icon = iconMap[indicator.icon as keyof typeof iconMap];
                return (
                  <div key={index} className="flex items-center gap-2">
                    <Icon className="w-5 h-5 text-success" />
                    <span className="text-sm text-text-muted font-medium">{indicator.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative animate-fade-left">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-primary/5 to-accent/10">
              {/* Placeholder with icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Microscope className="w-24 h-24 text-primary/20" />
              </div>
              
              {/* Image overlay caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-white text-sm font-medium">{siteContent.hero.imageCaption}</p>
              </div>

              {/* Actual image - using Unsplash for medical laboratory */}
              <img
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1600&q=80"
                alt="Modern medical laboratory equipment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
