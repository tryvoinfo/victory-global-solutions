import React, { useState } from 'react';
import { 
  Building2, HardHat, UtensilsCrossed, Zap, ShieldCheck, 
  Phone, Mail, MapPin, CheckCircle2, ArrowRight, Menu, X, 
  FileText, Users, Award, Clock, ChevronRight
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: 'Manpower Supply', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-gold selection:text-gold-foreground">
      
      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container-site flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center text-gold font-bold text-xl shadow-md">
              VG
            </div>
            <div>
              <span className="font-display font-bold text-lg tracking-tight text-navy block leading-none">VICTORY GLOBAL</span>
              <span className="text-[10px] tracking-widest text-muted-foreground uppercase font-semibold">Solutions LTD</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#approach" className="hover:text-primary transition-colors">Our Approach</a>
            <a href="#about" className="hover:text-primary transition-colors">About Us</a>
            <a href="#compliance" className="hover:text-primary transition-colors">Compliance</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:0786253639" className="flex items-center gap-2 text-xs font-semibold text-navy bg-secondary px-3 py-2 rounded-lg">
              <Phone className="w-4 h-4 text-gold" />
              <span>0786 253 639</span>
            </a>
            <a href="#contact" className="btn-gold text-sm h-10 px-4">Request Manpower</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden p-2 text-foreground focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-card border-b border-border px-6 py-6 space-y-4 shadow-xl">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block font-medium text-base">Services</a>
            <a href="#approach" onClick={() => setMobileMenuOpen(false)} className="block font-medium text-base">Our Approach</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block font-medium text-base">About Us</a>
            <a href="#compliance" onClick={() => setMobileMenuOpen(false)} className="block font-medium text-base">Compliance</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block font-medium text-base">Contact</a>
            <div className="pt-4 border-t border-border flex flex-col gap-3">
              <a href="tel:0786253639" className="flex items-center gap-2 text-sm font-semibold text-navy">
                <Phone className="w-4 h-4 text-gold" /> 0786 253 639
              </a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="btn-gold w-full text-center">Request Manpower</a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative bg-navy text-navy-foreground py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-hero-overlay opacity-90 z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent z-0"></div>
        
        <div className="container-site relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/15 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" /> Fully Registered RDB Company (TIN: 156267824)[cite: 6]
          </div>
          
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            Reliable Workforce. Quality Work. <span className="text-gold">Strong Partnerships.</span>
          </h1>
          
          <p className="text-navy-muted text-lg sm:text-xl max-w-3xl mx-auto font-normal">
            Rwanda’s trusted partner for professional manpower supply, general construction, technical installations, and premium hospitality staffing solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href="#services" className="btn-gold w-full sm:w-auto">
              Explore Our Services <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="btn-outline-light w-full sm:w-auto">
              Get in Touch Today
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-navy-muted/20 text-left">
            <div className="space-y-1">
              <div className="text-2xl lg:text-3xl font-bold text-gold">5+ Years</div>
              <div className="text-xs text-navy-muted">Industry Experience</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl lg:text-3xl font-bold text-gold">100%</div>
              <div className="text-xs text-navy-muted">Verified Compliance</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl lg:text-3xl font-bold text-gold">Skilled & Gen</div>
              <div className="text-xs text-navy-muted">Workforce Solutions</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl lg:text-3xl font-bold text-gold">Kigali, Rwanda</div>
              <div className="text-xs text-navy-muted">Operational Base</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-background">
        <div className="container-site space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="eyebrow">Comprehensive Expertise</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">Our Core Services</h2>
            <p className="text-muted-foreground text-base">
              Tailored workforce deployment and turnkey construction capabilities designed to meet international standards and project deadlines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Service 1 */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border flex flex-col justify-between hover:border-gold/50 transition-all group">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-gold group-hover:text-gold-foreground transition-all">
                  <Users className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-xl">Manpower Supply</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Supply of skilled and general workers, labourers, and short/long-term staffing support with robust attendance coordination[cite: 3].
                </p>
              </div>
              <ul className="space-y-2 pt-6 text-xs text-muted-foreground border-t border-border mt-6">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gold" /> General labourers & crew</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gold" /> Skilled technical staff</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gold" /> Flexible contract terms</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border flex flex-col justify-between hover:border-gold/50 transition-all group">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-gold group-hover:text-gold-foreground transition-all">
                  <Building2 className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-xl">General Construction</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Construction of non-residential buildings, civil engineering works, water mains, reservoirs, and site clearing services[cite: 7].
                </p>
              </div>
              <ul className="space-y-2 pt-6 text-xs text-muted-foreground border-t border-border mt-6">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gold" /> Commercial & industrial builds[cite: 7]</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gold" /> Civil engineering projects[cite: 7]</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gold" /> Site preparation & clearing[cite: 7]</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border flex flex-col justify-between hover:border-gold/50 transition-all group">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-gold group-hover:text-gold-foreground transition-all">
                  <Zap className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-xl">Specialized Installations</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Electrical wiring, lighting systems, HVAC, plumbing, fibre optics, fire alarms, and security network installations[cite: 7].
                </p>
              </div>
              <ul className="space-y-2 pt-6 text-xs text-muted-foreground border-t border-border mt-6">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gold" /> Electrical & solar systems[cite: 7]</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gold" /> Fibre optic & IT cabling[cite: 7]</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gold" /> Plumbing & HVAC ducting[cite: 7]</li>
              </ul>
            </div>

            {/* Service 4 - Hospitality Manpower */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border flex flex-col justify-between hover:border-gold/50 transition-all group">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-gold group-hover:text-gold-foreground transition-all">
                  <UtensilsCrossed className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-xl">Hospitality Services</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Professional front-of-house personnel, housekeeping, culinary support, and event attendants for hotels, restaurants, and corporate galas.
                </p>
              </div>
              <ul className="space-y-2 pt-6 text-xs text-muted-foreground border-t border-border mt-6">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gold" /> Front desk & reception</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gold" /> Housekeeping & service crew</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gold" /> Event & culinary staff</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* WORKING APPROACH */}
      <section id="approach" className="py-24 bg-secondary/50 border-y border-border">
        <div className="container-site space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="eyebrow">How We Operate</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">Our 5-Step Working Approach</h2>
            <p className="text-muted-foreground text-base">
              A streamlined, transparent workflow ensuring complete accountability from initial consultation to project sign-off.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: "01", title: "Understand", desc: "Discuss client workforce needs, project scope, and timelines[cite: 5]." },
              { step: "02", title: "Agree", desc: "Confirm responsibilities, worker count, safety terms, and pricing[cite: 4, 5]." },
              { step: "03", title: "Coordinate", desc: "Swift deployment of verified workforce and technical supervision[cite: 5]." },
              { step: "04", title: "Maintain", desc: "Continuous progress tracking, open dialogue, and quality assurance[cite: 5]." },
              { step: "05", title: "Review", desc: "Gather feedback and optimize performance for future assignments[cite: 5]." }
            ].map((item, idx) => (
              <div key={idx} className="bg-card p-6 rounded-xl border border-border space-y-4 relative shadow-sm">
                <span className="text-4xl font-extrabold text-gold/30 block font-display">{item.step}</span>
                <h3 className="font-display font-bold text-lg">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT & COMPLIANCE */}
      <section id="about" className="py-24 bg-background">
        <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="eyebrow">Corporate Identity</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Built on Integrity, Driven by Excellence
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              **Victory Global Solutions LTD** is a fully registered private company limited by shares under the Rwanda Development Board (RDB)[cite: 6]. Led by Managing Director Adelphine Mujawimana[cite: 6], we combine rigorous technical capabilities with dependable workforce management.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-secondary border border-border">
                <div className="font-bold text-navy text-lg">TIN: 156267824</div>
                <div className="text-xs text-muted-foreground">Registered Taxpayer ID[cite: 6]</div>
              </div>
              <div className="p-4 rounded-xl bg-secondary border border-border">
                <div className="font-bold text-navy text-lg">Kigali, Rwanda</div>
                <div className="text-xs text-muted-foreground">Headquarters Office[cite: 6]</div>
              </div>
            </div>
          </div>

          <div id="compliance" className="bg-navy text-navy-foreground p-8 lg:p-10 rounded-2xl shadow-xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <ShieldCheck className="w-40 h-40 text-gold" />
            </div>
            <h3 className="font-display font-bold text-2xl text-gold">Regulatory Compliance</h3>
            <p className="text-navy-muted text-sm leading-relaxed">
              We maintain full adherence to Rwandan labor and business laws, ensuring tax compliance, social contributions, EBM billing integration, and strict workplace safety protocols for all deployed personnel.
            </p>
            <ul className="space-y-3 text-sm font-medium">
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-gold shrink-0" /> Registered via RDB One Stop Centre[cite: 8]</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-gold shrink-0" /> Mandatory EBM & Tax Compliance[cite: 8]</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-gold shrink-0" /> Strict Occupational Health & Safety Rules</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-secondary/30 border-t border-border">
        <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div className="space-y-6">
            <span className="eyebrow">Get In Touch</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">Let's Discuss Your Project</h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Need skilled workers, construction support, or hospitality staffing? Reach out to our team today for a prompt consultation and quotation.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-gold/15 text-gold flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Call Us Directly</div>
                  <a href="tel:0786253639" className="font-bold text-foreground hover:text-primary">0786 253 639[cite: 6]</a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-gold/15 text-gold flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Email Address</div>
                  <a href="mailto:victorysolution19@gmail.com" className="font-bold text-foreground hover:text-primary">victorysolution19@gmail.com[cite: 6]</a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-gold/15 text-gold flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Office Location</div>
                  <div className="font-bold text-foreground">Nyarurembo, Kiyovu, Nyarugenge, Kigali, Rwanda[cite: 6]</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 lg:p-10 rounded-2xl shadow-card border border-border">
            {formSubmitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-2xl">Message Received!</h3>
                <p className="text-muted-foreground text-sm max-w-sm mx-auto">
                  Thank you for reaching out. Our management team will review your requirements and get back to you shortly.
                </p>
                <button 
                  onClick={() => setFormSubmitted(false)} 
                  className="btn-navy text-sm mt-4"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-display font-bold text-xl mb-6">Request a Service Quote</h3>
                
                <div className="space-y-1">
                  <label className="text-xs font-semibold">Full Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full h-11 px-4 rounded-lg bg-secondary border border-border text-sm focus:outline-none focus:border-gold"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full h-11 px-4 rounded-lg bg-secondary border border-border text-sm focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold">Phone Number</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="+250 780 000 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full h-11 px-4 rounded-lg bg-secondary border border-border text-sm focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold">Service Required</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full h-11 px-4 rounded-lg bg-secondary border border-border text-sm focus:outline-none focus:border-gold"
                  >
                    <option value="Manpower Supply">Manpower Supply (Skilled & General)</option>
                    <option value="General Construction">General Construction & Building</option>
                    <option value="Specialized Installations">Specialized Electrical & Mechanical Installations</option>
                    <option value="Hospitality Services">Hospitality Services Manpower</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold">Project Details / Message</label>
                  <textarea 
                    rows="4" 
                    required
                    placeholder="Tell us about your workforce or construction requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full p-4 rounded-lg bg-secondary border border-border text-sm focus:outline-none focus:border-gold"
                  ></textarea>
                </div>

                <button type="submit" className="btn-gold w-full mt-4">
                  Submit Request
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy text-navy-foreground py-12 border-t border-navy-muted/20">
        <div className="container-site flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gold text-navy font-bold flex items-center justify-center">
              VG
            </div>
            <div>
              <span className="font-display font-bold text-base tracking-tight block leading-none">VICTORY GLOBAL SOLUTIONS LTD</span>
              <span className="text-[10px] text-navy-muted tracking-widest uppercase">TIN: 156267824 | Kigali, Rwanda[cite: 6]</span>
            </div>
          </div>
          <p className="text-xs text-navy-muted">
            &copy; {new Date().getFullYear()} Victory Global Solutions LTD. All rights reserved. Reliable Workforce. Quality Work. Strong Partnerships[cite: 5].
          </p>
        </div>
      </footer>

    </div>
  );
}