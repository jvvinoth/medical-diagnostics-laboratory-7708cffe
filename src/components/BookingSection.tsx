import React from 'react';
import { Phone, Mail, Clock, MapPin, CalendarCheck, CreditCard, UserCheck } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const featureIconMap = {
  CalendarCheck,
  CreditCard,
  UserCheck,
};

export const BookingSection: React.FC = () => {
  return (
    <section id="book-appointment" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-accent font-medium mb-4">
            {siteContent.booking.overline}
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-primary mb-6">
            {siteContent.booking.heading}
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {siteContent.booking.subtext}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information Card */}
          <div className="bg-surface rounded-2xl p-8 md:p-10 border border-border">
            <h3 className="text-2xl font-heading font-semibold text-primary mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-primary mb-1">Phone</p>
                  <a
                    href={`tel:${siteContent.booking.contact.phone}`}
                    className="text-text-muted hover:text-primary transition-colors"
                  >
                    {siteContent.booking.contact.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-primary mb-1">Email</p>
                  <a
                    href={`mailto:${siteContent.booking.contact.email}`}
                    className="text-text-muted hover:text-primary transition-colors break-all"
                  >
                    {siteContent.booking.contact.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-primary mb-1">Hours</p>
                  <p className="text-text-muted whitespace-pre-line">
                    {siteContent.booking.contact.hours}
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-primary mb-1">Address</p>
                  <p className="text-text-muted whitespace-pre-line">
                    {siteContent.booking.contact.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="grid gap-4">
                {siteContent.booking.features.map((feature, index) => {
                  const Icon = featureIconMap[feature.icon as keyof typeof featureIconMap];
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-success" />
                      <span className="text-text-muted">{feature.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-primary rounded-2xl p-8 md:p-10 text-white lg:sticky lg:top-24">
            <h3 className="text-3xl font-heading font-semibold mb-4">
              Schedule Your Appointment
            </h3>
            <p className="text-white/90 leading-relaxed mb-8">
              Our friendly staff is ready to assist you with scheduling your lab work. Call us during business hours or use our online booking system for your convenience.
            </p>

            <div className="space-y-4">
              <a
                href={`tel:${siteContent.booking.contact.phone}`}
                className="flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-medium text-base hover:scale-105 transition-transform duration-300 w-full"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              
              <a
                href={`mailto:${siteContent.booking.contact.email}`}
                className="flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-medium text-base hover:scale-105 transition-transform duration-300 w-full"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-sm text-white/80 text-center">
                Most appointments available within 24-48 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
