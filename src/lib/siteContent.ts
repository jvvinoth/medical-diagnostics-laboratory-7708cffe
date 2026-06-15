export const siteContent = {
  meta: {
    title: "Medical Diagnostics Laboratory | Trusted Lab Testing & Results",
    description: "Accredited medical diagnostics laboratory providing accurate lab results within 24-48 hours. From routine blood work to specialized diagnostics. Serving our community since 2008.",
  },
  
  header: {
    logo: "MedDiagnostics Lab",
    nav: [
      { label: "Services", href: "#services" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Why Us", href: "#why-us" },
      { label: "Contact", href: "#book-appointment" },
    ],
    cta: "Book Your Test",
  },
  
  hero: {
    badge: "Accredited Laboratory • Serving Since 2008",
    headline: "Trusted Diagnostics, Clear Answers",
    subtext: "Accurate lab results delivered within 24–48 hours. From routine blood work to specialized diagnostics, we provide the clarity you and your physician need to make informed health decisions.",
    primaryCTA: "Book your test",
    secondaryCTA: "View all services",
    trustIndicators: [
      { icon: "ShieldCheck", text: "CAP Accredited" },
      { icon: "Clock", text: "24-48hr Results" },
      { icon: "Award", text: "15+ Years Trusted" },
    ],
    imageCaption: "State-of-the-art lab facilities",
  },
  
  services: {
    overline: "Our Services",
    heading: "Comprehensive Testing for Every Need",
    subtext: "From routine screenings to specialized diagnostics, our full-service laboratory delivers precise results you can trust.",
    items: [
      {
        icon: "Droplet",
        title: "Blood Testing",
        description: "Complete blood counts, metabolic panels, lipid profiles, and hormone testing with fast, accurate results.",
        features: ["CBC", "Metabolic Panel", "Lipid Profile", "Thyroid Function"],
      },
      {
        icon: "Microscope",
        title: "Microbiology",
        description: "Comprehensive culture and sensitivity testing to identify infections and guide treatment decisions.",
        features: ["Urine Culture", "Throat Culture", "Wound Culture", "Stool Analysis"],
      },
      {
        icon: "Activity",
        title: "Specialized Diagnostics",
        description: "Advanced testing including molecular diagnostics, allergy panels, and disease-specific markers.",
        features: ["Allergy Testing", "Genetic Markers", "Tumor Markers", "Autoimmune Panels"],
      },
      {
        icon: "Stethoscope",
        title: "Wellness Screening",
        description: "Comprehensive health packages designed for preventive care and early detection of health issues.",
        features: ["Executive Checkup", "Diabetes Screening", "Cardiac Risk", "Vitamin Levels"],
      },
    ],
  },
  
  process: {
    overline: "How It Works",
    heading: "Simple, Fast, Accurate",
    subtext: "Getting your lab work done has never been easier. Our streamlined process ensures you get the answers you need quickly and conveniently.",
    steps: [
      {
        number: "01",
        title: "Schedule Your Test",
        description: "Book online, by phone, or walk in. We offer flexible appointment times including early morning and weekend slots.",
        icon: "Calendar",
      },
      {
        number: "02",
        title: "Visit Our Facility",
        description: "Our experienced phlebotomists ensure a comfortable, quick sample collection in our modern, welcoming environment.",
        icon: "MapPin",
      },
      {
        number: "03",
        title: "We Process & Analyze",
        description: "Your samples are analyzed using state-of-the-art equipment by our certified laboratory technicians.",
        icon: "FlaskConical",
      },
      {
        number: "04",
        title: "Receive Your Results",
        description: "Results delivered securely within 24-48 hours via our patient portal, with direct physician notification.",
        icon: "FileCheck",
      },
    ],
  },
  
  whyUs: {
    overline: "Why Choose Us",
    heading: "Excellence You Can Trust",
    subtext: "We combine cutting-edge technology with human expertise to deliver the most reliable diagnostic services in the region.",
    features: [
      {
        icon: "Award",
        title: "CAP Accredited",
        description: "Our laboratory meets the highest standards set by the College of American Pathologists, ensuring accuracy and reliability in every test.",
      },
      {
        icon: "Clock",
        title: "Rapid Turnaround",
        description: "Most results delivered within 24-48 hours. Stat testing available for urgent cases with same-day results when needed.",
      },
      {
        icon: "Shield",
        title: "Quality Assurance",
        description: "Rigorous quality control protocols, regular proficiency testing, and continuous staff training ensure consistent excellence.",
      },
      {
        icon: "Users",
        title: "Experienced Team",
        description: "Board-certified pathologists and certified medical technologists with decades of combined diagnostic experience.",
      },
      {
        icon: "Lock",
        title: "HIPAA Compliant",
        description: "Your privacy is paramount. We maintain strict confidentiality and security protocols for all patient data and results.",
      },
      {
        icon: "Heart",
        title: "Patient-Centered Care",
        description: "Comfortable facilities, minimal wait times, and compassionate staff who understand that quality care extends beyond the lab.",
      },
    ],
  },
  
  booking: {
    overline: "Book Your Appointment",
    heading: "Ready to Get Started?",
    subtext: "Schedule your lab work today. We accept walk-ins and appointments, and we work with most major insurance providers.",
    contact: {
      phone: "(555) 123-4567",
      email: "appointments@meddiaglab.com",
      hours: "Monday – Friday: 7:00 AM – 6:00 PM\nSaturday: 8:00 AM – 2:00 PM\nSunday: Closed",
      address: "123 Medical Plaza Drive\nSuite 200\nYour City, ST 12345",
    },
    cta: "Schedule an appointment",
    features: [
      { icon: "CalendarCheck", text: "Online booking available" },
      { icon: "CreditCard", text: "Insurance accepted" },
      { icon: "UserCheck", text: "Walk-ins welcome" },
    ],
  },
  
  footer: {
    tagline: "Trusted diagnostics for better health decisions.",
    copyright: "© 2024 MedDiagnostics Lab. All rights reserved.",
    links: {
      services: [
        { label: "Blood Testing", href: "#services" },
        { label: "Microbiology", href: "#services" },
        { label: "Specialized Diagnostics", href: "#services" },
        { label: "Wellness Screening", href: "#services" },
      ],
      company: [
        { label: "About Us", href: "#why-us" },
        { label: "Our Team", href: "#why-us" },
        { label: "Accreditation", href: "#why-us" },
        { label: "Careers", href: "#" },
      ],
      resources: [
        { label: "Patient Portal", href: "#" },
        { label: "Insurance", href: "#" },
        { label: "FAQ", href: "#" },
        { label: "Contact", href: "#book-appointment" },
      ],
    },
    social: [
      { icon: "Facebook", href: "#", label: "Facebook" },
      { icon: "Twitter", href: "#", label: "Twitter" },
      { icon: "Linkedin", href: "#", label: "LinkedIn" },
    ],
  },
} as const;

export type SiteContent = typeof siteContent;
