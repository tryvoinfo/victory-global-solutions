import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  HardHat, 
  Wrench, 
  Users, 
  ShieldCheck, 
  Clock, 
  Award,
  Menu,
  X,
  MessageSquare,
  ChevronRight,
  Building,
  Briefcase,
  HelpCircle
} from 'lucide-react';

// ==========================================
// RULE-BASED CHATBOT COMPONENT
// ==========================================
function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Welcome to Victory Global Solutions LTD (RDB TIN: 156267824). How can we assist you today?',
      type: 'menu'
    }
  ]);

  const handleSelectOption = (optionKey) => {
    let userQuery = '';
    let botResponse = '';

    switch (optionKey) {
      case 'services':
        userQuery = 'What services do you offer?';
        botResponse = 'We specialize in four core areas:\n1. Manpower Supply (skilled & general)\n2. General Construction & Building Works\n3. Specialized Mechanical & Electrical Installations\n4. Hospitality Staffing';
        break;
      case 'quote':
        userQuery = 'How can I get a quote or contact you?';
        botResponse = 'For immediate project consultations or workforce quotes, reach our team directly:\n📞 Phone: 0786 253 639\n✉️ Email: info@victoryglobalsolutions.net';
        break;
      case 'compliance':
        userQuery = 'Are you a registered company?';
        botResponse = 'Yes, Victory Global Solutions LTD is officially registered with the Rwanda Development Board (RDB) under TIN: 156267824, based in Kigali and managed by Adelphine Mujawimana.';
        break;
      case 'jobs':
        userQuery = 'How can I apply for a job?';
        botResponse = 'For employment and recruitment inquiries, please send your CV and credentials directly to our official email at info@victoryglobalsolutions.net or call 0786 253 639.';
        break;
      default:
        break;
    }

    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: userQuery },
      { sender: 'bot', text: botResponse }
    ]);
  };

  const resetChat = () => {
    setMessages([
      {
        sender: 'bot',
        text: 'How else can we help you with Victory Global Solutions?',
        type: 'menu'
      }
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-navy text-gold p-4 rounded-full shadow-2xl hover:scale-105 transition-all flex items-center gap-3 border-2 border-gold/40 group"
          aria-label="Open Chat"
        >
          <MessageSquare className="w-6 h-6 text-gold group-hover:rotate-12 transition-transform" />
          <span className="font-display font-bold text-sm pr-1 hidden sm:inline">Client Inquiry Chat</span>
        </button>
      )}

      {isOpen && (
        <div className="w-[90vw] sm:w-[380px] h-[520px] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-navy text-primary-foreground p-4 flex items-center justify-between border-b border-gold/20">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gold text-navy font-bold flex items-center justify-center text-xs">
                VG
              </div>
              <div>
                <h4 className="font-display font-bold text-sm leading-tight">Victory Support</h4>
                <span className="text-[10px] text-gold tracking-widest uppercase">Online | Kigali, Rwanda</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-secondary/20 text-sm">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-xl whitespace-pre-line leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-navy text-primary-foreground rounded-br-none'
                      : 'bg-card border border-border text-foreground shadow-sm rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>

                {msg.sender === 'bot' && (
                  <div className="mt-3 flex flex-col gap-2 w-full">
                    <button
                      onClick={() => handleSelectOption('services')}
                      className="text-left text-xs bg-card hover:bg-gold/10 border border-border hover:border-gold p-2.5 rounded-lg flex items-center justify-between transition-all group font-medium"
                    >
                      <span className="flex items-center gap-2">
                        <Building className="w-4 h-4 text-gold" /> What services do you offer?
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
                    </button>

                    <button
                      onClick={() => handleSelectOption('quote')}
                      className="text-left text-xs bg-card hover:bg-gold/10 border border-border hover:border-gold p-2.5 rounded-lg flex items-center justify-between transition-all group font-medium"
                    >
                      <span className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-gold" /> How to get a quote / contact?
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
                    </button>

                    <button
                      onClick={() => handleSelectOption('compliance')}
                      className="text-left text-xs bg-card hover:bg-gold/10 border border-border hover:border-gold p-2.5 rounded-lg flex items-center justify-between transition-all group font-medium"
                    >
                      <span className="flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-gold" /> Are you registered in Rwanda (TIN)?
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
                    </button>

                    <button
                      onClick={() => handleSelectOption('jobs')}
                      className="text-left text-xs bg-card hover:bg-gold/10 border border-border hover:border-gold p-2.5 rounded-lg flex items-center justify-between transition-all group font-medium"
                    >
                      <span className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-gold" /> Looking for employment / jobs
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="p-3 bg-card border-t border-border flex items-center justify-between text-xs text-muted-foreground">
            <span>Victory Global Assistant</span>
            <button onClick={resetChat} className="text-gold hover:underline font-semibold">
              Restart Chat
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ==========================================
// MAIN APP COMPONENT
// ==========================================
export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-gold selection:text-navy">
      
      {/* NAVBAR */}
      <nav className="sticky top-0 z-40 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img src="/Logo.png" alt="Victory Global Solutions LTD Logo" className="h-10 w-auto object-contain" />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 font-medium text-sm">
            <a href="#services" className="hover:text-gold transition-colors">Services</a>
            <a href="#about" className="hover:text-gold transition-colors">About Us</a>
            <a href="#approach" className="hover:text-gold transition-colors">Approach</a>
            <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
          </div>

          {/* Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:0786253639" 
              className="flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-lg bg-navy text-primary-foreground hover:bg-navy/90 transition-all shadow-md"
            >
              <Phone className="w-4 h-4 text-gold" />
              <span>0786 253 639</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden p-2 text-foreground"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-card border-b border-border px-4 py-6 space-y-4 shadow-xl">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium">Services</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium">About Us</a>
            <a href="#approach" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium">Approach</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium">Contact</a>
            <div className="pt-2 border-t border-border">
              <a href="tel:0786253639" className="flex items-center justify-center gap-2 w-full py-3 bg-navy text-primary-foreground rounded-lg font-bold">
                <Phone className="w-4 h-4 text-gold" /> Call 0786 253 639
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-b from-secondary/40 to-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 text-gold text-xs font-bold uppercase tracking-widest border border-gold/30">
              <ShieldCheck className="w-4 h-4" /> RDB Registered (TIN: 156267824)
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
              Reliable Workforce, Quality Construction, <span className="text-gold">Strong Partnerships.</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Based in Kigali, Rwanda, Victory Global Solutions LTD delivers elite manpower supply, comprehensive construction works, mechanical & electrical installations, and hospitality staffing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gold text-gold-foreground font-bold hover:opacity-90 transition-all shadow-lg"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#services" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-card border border-border font-bold hover:bg-secondary/50 transition-all"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs uppercase tracking-widest text-gold font-bold">Core Offerings</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl">Comprehensive Business Solutions</h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Engineered for excellence across industrial, commercial, and hospitality sectors in Rwanda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Service 1 */}
            <div className="bg-card p-8 rounded-2xl border border-border shadow-card hover:border-gold transition-all group flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-gold/15 text-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-xl">Manpower Supply</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Provision of highly vetted skilled and general workers tailored for construction, logistics, and corporate operations.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-border flex items-center text-xs font-bold text-gold">
                <span>Vetted Professionals</span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-card p-8 rounded-2xl border border-border shadow-card hover:border-gold transition-all group flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-gold/15 text-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Building2 className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-xl">General Construction</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Full-scale building works, civil engineering projects, structural renovations, and site management.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-border flex items-center text-xs font-bold text-gold">
                <span>Commercial & Residential</span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-card p-8 rounded-2xl border border-border shadow-card hover:border-gold transition-all group flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-gold/15 text-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Wrench className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-xl">Specialized M&E</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Advanced mechanical and electrical installations executed by certified technical experts.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-border flex items-center text-xs font-bold text-gold">
                <span>Technical Precision</span>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-card p-8 rounded-2xl border border-border shadow-card hover:border-gold transition-all group flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-gold/15 text-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                  <HardHat className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-xl">Hospitality Staffing</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Professional front-of-house, housekeeping, and operational staff for hotels, restaurants, and events.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-border flex items-center text-xs font-bold text-gold">
                <span>Hospitality Excellence</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT & APPROACH SECTION */}
      <section id="about" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest text-gold font-bold">About Our Firm</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl">Committed to Quality and Compliance in Rwanda</h2>
              <p className="text-muted-foreground leading-relaxed">
                Managed under the leadership of Adelphine Mujawimana, Victory Global Solutions LTD operates with strict adherence to Rwandan regulatory standards. Registered with the Rwanda Development Board (RDB) under TIN: 156267824, we bridge the gap between corporate demand and reliable execution.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-secondary/40 border border-border">
                  <div className="font-display font-bold text-2xl text-gold">100%</div>
                  <div className="text-xs text-muted-foreground mt-1">Vetted Workforce</div>
                </div>
                <div className="p-4 rounded-xl bg-secondary/40 border border-border">
                  <div className="font-display font-bold text-2xl text-gold">RDB</div>
                  <div className="text-xs text-muted-foreground mt-1">Fully Registered</div>
                </div>
              </div>
            </div>

            <div id="approach" className="bg-card p-8 lg:p-10 rounded-2xl border border-border shadow-card space-y-6">
              <h3 className="font-display font-bold text-2xl">Our 5-Step Approach</h3>
              <div className="space-y-4">
                {[
                  "1. Requirements Analysis & Consultation",
                  "2. Workforce Vetting & Resource Allocation",
                  "3. Safety Compliance & Deployment",
                  "4. Project Execution & Quality Supervision",
                  "5. Client Review & Continuous Optimization"
                ].map((step, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 border border-border">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                    <span className="text-sm font-medium">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION WITH DIRECT CONTACT CARD */}
      <section id="contact" className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT COLUMN: Direct Info */}
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest text-gold font-bold">Get In Touch</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl">Let's Discuss Your Project</h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Need skilled workers, construction support, or hospitality staffing? Reach out to our team today for a prompt consultation and quotation.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-gold/15 text-gold flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase font-semibold">Call Us Directly</div>
                    <div className="font-bold text-base">0786 253 639</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-gold/15 text-gold flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase font-semibold">Email Address</div>
                    <div className="font-bold text-base break-all">info@victoryglobalsolutions.net</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-gold/15 text-gold flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase font-semibold">Office Location</div>
                    <div className="font-bold text-base">Nyarurembo, Kiyovu, Nyarugenge, Kigali, Rwanda</div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: DIRECT CONTACT CARD (Replacing Form) */}
            <div className="bg-card p-8 lg:p-10 rounded-2xl shadow-card border border-border flex flex-col justify-center space-y-8">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-gold font-bold">Direct Enquiries</span>
                <h3 className="font-display font-bold text-2xl">Connect With Our Team</h3>
                <p className="text-muted-foreground text-sm">
                  For immediate assistance, recruitment needs, or project consultations, please reach out directly via phone or email.
                </p>
              </div>

              <div className="space-y-6">
                <a 
                  href="tel:0786253639" 
                  className="flex items-center gap-4 p-5 rounded-xl bg-secondary/50 border border-border hover:border-gold transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-gold-foreground transition-all">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Call Us Now</div>
                    <div className="font-bold text-lg text-foreground">0786 253 639</div>
                  </div>
                </a>

                <a 
                  href="mailto:info@victoryglobalsolutions.net" 
                  className="flex items-center gap-4 p-5 rounded-xl bg-secondary/50 border border-border hover:border-gold transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-gold-foreground transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Email Us</div>
                    <div className="font-bold text-base text-foreground break-all">info@victoryglobalsolutions.net</div>
                  </div>
                </a>
              </div>

              <div className="pt-4 border-t border-border text-xs text-muted-foreground text-center">
                Available for manpower supply, general construction, and hospitality staffing inquiries.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy text-primary-foreground py-16 border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/Logo.png" alt="Victory Global Solutions LTD Logo" className="h-8 w-auto object-contain brightness-0 invert" />
            <div>
              <span className="text-[10px] text-gray-400 tracking-widest uppercase block">TIN: 156267824 | Kigali, Rwanda</span>
            </div>
          </div>
          <div className="text-xs text-gray-400 text-center md:text-right">
            &copy; {new Date().getFullYear()} Victory Global Solutions LTD. All rights reserved.
          </div>
        </div>
      </footer>

      {/* RULE-BASED CHATBOT WIDGET */}
      <Chatbot />

    </div>
  );
}