import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageSquare, Calendar, Clock, Navigation, ExternalLink, ShieldCheck, Award, Heart, CheckCircle2, Droplets, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { SEOHead } from '../components/SEOHead';
import { ROUTE_SEO, generateLocalBusinessSchema, generateFAQSchema, generateBreadcrumbsSchema, getProductionBaseUrl } from '../data/seoData';
import { GoogleMapsEmbed } from '../components/GoogleMapsEmbed';
import { trackBookingTrigger, trackPhoneClick, trackWhatsAppClick, trackDirectionsClick } from '../utils/analytics';
import { SPA_SERVICES, SpaService } from '../data/spaData';

interface MassageCentreMpNagarPageProps {
  onOpenBooking: (serviceId?: string) => void;
  onSelectService?: (service: SpaService) => void;
}

export const MassageCentreMpNagarPage: React.FC<MassageCentreMpNagarPageProps> = ({
  onOpenBooking,
}) => {
  const baseUrl = getProductionBaseUrl();
  const seo = ROUTE_SEO.massageCentreMpNagar;

  const faqs = [
    {
      q: 'Where is Nandini Spa located in MP Nagar, Bhopal?',
      a: 'Nandini Spa is situated in Maharana Pratap Nagar (MP Nagar), Bhopal, Madhya Pradesh (Coordinates: 23.2312, 77.4331). We are centrally located close to Habibganj (Rani Kamlapati Railway Station), DB City Mall, Chetak Bridge, and MP Nagar Zone 1 & Zone 2.',
    },
    {
      q: 'What are the operating hours of Nandini Spa in MP Nagar?',
      a: 'Nandini Spa operates 24 hours daily (24/7 round-the-clock service) Monday through Sunday. Whether you need a morning reset before business meetings, an afternoon decompression, or late-night restorative bodywork after transit, our sanctuary is open and staffed.',
    },
    {
      q: 'What types of massage and spa services are offered at the MP Nagar branch?',
      a: 'Our MP Nagar sanctuary offers therapeutic Full Body Massage (Deep Tissue, Swedish, Balinese), luxury Couple Spa VIP dual suites, authentic Traditional Thai Yoga Massage, warm Volcanic Basalt Stone therapy, Ayurvedic Shirodhara & Abhyanga rituals, and organic botanical facials.',
    },
    {
      q: 'Is parking available for guests visiting Nandini Spa in MP Nagar?',
      a: 'Yes, convenient vehicle parking and drop-off spaces are readily available for all sanctuary guests, ensuring effortless arrival from anywhere in Bhopal.',
    },
    {
      q: 'How far is Nandini Spa from Habibganj (Rani Kamlapati) Railway Station?',
      a: 'Nandini Spa is located approximately 1 to 2 kilometers from Habibganj / Rani Kamlapati Railway Station, making it the most convenient premium wellness stop for arriving travelers and hotel guests.',
    },
    {
      q: 'How do I book an appointment or get directions to Nandini Spa MP Nagar?',
      a: 'You can book online through our website, call our concierge desk at +91 90604 33848, message on WhatsApp, or click "Get Directions" to navigate directly via Google Maps.',
    },
  ];

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Massage Centre MP Nagar', path: '/massage-centre-mp-nagar' },
  ];

  const localHighlights = [
    {
      title: 'Near Habibganj / Rani Kamlapati Station',
      desc: 'Just minutes away from Bhopal’s world-class transit hub. Perfect for train travelers, hotel guests, and business visitors.',
    },
    {
      title: 'Centrally Positioned in MP Nagar',
      desc: 'Walking distance to MP Nagar Zone 1 and Zone 2 commercial complexes, DB City Mall, and major corporate offices.',
    },
    {
      title: '24/7 Round-the-Clock Service',
      desc: 'Open 24 hours Monday through Sunday with private ensuite rainfall showers and freshly sanitized suites.',
    },
    {
      title: 'Certified Master Therapists',
      desc: 'Every session is conducted by certified kinesiologists trained in anatomical trigger-points, never untrained staff.',
    },
  ];

  const structuredData = [
    generateLocalBusinessSchema(baseUrl),
    generateFAQSchema(faqs),
    generateBreadcrumbsSchema(baseUrl, breadcrumbs),
  ];

  const featuredTreatments = SPA_SERVICES.slice(0, 4);

  return (
    <div className="w-full bg-[#FAF7F2]">
      <SEOHead config={seo} structuredData={structuredData} />

      {/* Hero Section */}
      <section className="bg-[#201C17] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#332D26]">
        <div className="max-w-5xl mx-auto text-center">
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center justify-center gap-2 text-xs text-[#C5BBAF]">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#7A9988] font-medium">Massage Centre in MP Nagar</span>
          </nav>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2E2822] text-[#7A9988] text-xs font-semibold uppercase tracking-widest mb-4 border border-[#3E362E]">
            <MapPin className="w-3.5 h-3.5 text-[#7A9988]" />
            <span>Maharana Pratap Nagar (Zone 1 & 2), Bhopal</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-[#FAF7F2] leading-tight">
            Premier Massage Centre in MP Nagar, Bhopal
          </h1>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-[#ECE4D8] font-light max-w-3xl mx-auto leading-relaxed">
            Welcome to <strong>Nandini Spa</strong>, Bhopal’s highest-rated sanctuary for certified bodywork and therapeutic massage in MP Nagar. 
            Located minutes from Habibganj (Rani Kamlapati) Station, we offer 24/7 private suites, ensuite rainfall showers, 
            and authentic anatomical therapies designed for genuine physical renewal.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => {
                trackBookingTrigger(undefined, 'mp_nagar_hero');
                onOpenBooking();
              }}
              className="w-full sm:w-auto px-7 py-3.5 bg-[#446353] hover:bg-[#365143] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment Online</span>
            </button>

            {BUSINESS_CONFIG.phone && (
              <a
                href={`tel:${BUSINESS_CONFIG.phone.replace(/[^0-9+]/g, '')}`}
                onClick={() => trackPhoneClick('mp_nagar_hero', BUSINESS_CONFIG.phone!)}
                className="w-full sm:w-auto px-6 py-3.5 border border-[#ECE4D8] hover:border-white text-[#FAF7F2] hover:text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#7A9988]" />
                <span>Call {BUSINESS_CONFIG.phone}</span>
              </a>
            )}

            <a
              href={BUSINESS_CONFIG.maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackDirectionsClick('mp_nagar_hero')}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#2E2822] hover:bg-[#3E362E] text-white border border-[#3E362E] text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2"
            >
              <Navigation className="w-4 h-4 text-[#7A9988]" />
              <span>Google Maps Directions</span>
            </a>
          </div>
        </div>
      </section>

      {/* Local Landmark Proximity Bento */}
      <section className="py-8 bg-[#F3EFE6] border-b border-[#E3DACD] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-3">
            <MapPin className="w-6 h-6 text-[#446353] mx-auto mb-1.5" />
            <div className="text-xs font-semibold text-[#28231D]">MP Nagar Zone 1 & 2</div>
            <div className="text-[11px] text-[#685F53]">Heart of Bhopal's commercial district</div>
          </div>
          <div className="p-3">
            <Navigation className="w-6 h-6 text-[#446353] mx-auto mb-1.5" />
            <div className="text-xs font-semibold text-[#28231D]">Rani Kamlapati Station</div>
            <div className="text-[11px] text-[#685F53]">Convenient ~1 km from Habibganj station</div>
          </div>
          <div className="p-3">
            <Clock className="w-6 h-6 text-[#446353] mx-auto mb-1.5" />
            <div className="text-xs font-semibold text-[#28231D]">Open 24 Hours Daily</div>
            <div className="text-[11px] text-[#685F53]">24/7 service Monday through Sunday</div>
          </div>
          <div className="p-3">
            <ShieldCheck className="w-6 h-6 text-[#446353] mx-auto mb-1.5" />
            <div className="text-xs font-semibold text-[#28231D]">100% Suite Privacy</div>
            <div className="text-[11px] text-[#685F53]">Ensuite rainfall shower & autoclaved linens</div>
          </div>
        </div>
      </section>

      {/* Why Choose Nandini Spa in MP Nagar */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#446353]">
              Bhopal Local Landmark Authority
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#28231D] font-normal tracking-tight leading-tight">
              Why Nandini Spa is the Top-Ranked Massage Centre in MP Nagar
            </h2>
            <p className="text-sm sm:text-base text-[#685F53] leading-relaxed">
              Maharana Pratap Nagar (MP Nagar) is the bustling commercial and financial heartbeat of Bhopal. 
              Between long corporate work hours, highway commuting, and business travel, physical exhaustion accumulates rapidly. 
              <strong>Nandini Spa</strong> was established in MP Nagar to provide an accessible, world-class sanctuary where guests can decompress in complete peace.
            </p>
            <p className="text-sm sm:text-base text-[#685F53] leading-relaxed">
              Unlike generic massage parlours, Nandini Spa upholds strict hospital-grade hygiene, verified master practitioners, 
              single-origin botanical oils, and private en-suite rainfall showers in every room. 
              Whether you are a local resident of MP Nagar, Arera Colony, or Shivaji Nagar, or staying at Courtyard by Marriott or Taj Lakefront, 
              our concierge delivers discreet, professional care 24 hours a day.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {localHighlights.map((hl, i) => (
                <div key={i} className="p-4 rounded-lg bg-white border border-[#E3DACD] shadow-xs">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-[#446353]" />
                    <span className="text-xs font-semibold text-[#28231D]">{hl.title}</span>
                  </div>
                  <p className="text-xs text-[#685F53] leading-relaxed">{hl.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-xl border border-[#E3DACD] shadow-xs">
            <h3 className="font-serif text-2xl font-normal text-[#28231D] mb-4">
              Sanctuary NAP & Quick Contact
            </h3>
            <div className="space-y-4 text-xs sm:text-sm text-[#685F53]">
              <div>
                <span className="font-semibold text-[#28231D] block">Business Name:</span>
                <span>Nandini Spa</span>
              </div>
              <div>
                <span className="font-semibold text-[#28231D] block">Target Locality:</span>
                <span>Maharana Pratap Nagar (MP Nagar), Bhopal, Madhya Pradesh</span>
              </div>
              <div>
                <span className="font-semibold text-[#28231D] block">Nearest Railway Station:</span>
                <span>Habibganj (Rani Kamlapati) Station (~1.5 km)</span>
              </div>
              <div>
                <span className="font-semibold text-[#28231D] block">Geo Coordinates:</span>
                <span>23.2312° N, 77.4331° E</span>
              </div>
              <div>
                <span className="font-semibold text-[#28231D] block">Operating Hours:</span>
                <span className="text-[#446353] font-semibold">Open 24 Hours / 7 Days a Week (24/7)</span>
              </div>
              <div>
                <span className="font-semibold text-[#28231D] block">Reservations & Concierge:</span>
                <a href={`tel:${BUSINESS_CONFIG.phone?.replace(/[^0-9+]/g, '')}`} className="text-[#446353] font-semibold hover:underline">
                  {BUSINESS_CONFIG.phone || '+91 90604 33848'}
                </a>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-[#E3DACD] flex flex-col gap-2.5">
              <button
                onClick={() => onOpenBooking()}
                className="w-full py-2.5 bg-[#446353] hover:bg-[#365143] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors text-center cursor-pointer"
              >
                Book Appointment Online
              </button>
              <a
                href={BUSINESS_CONFIG.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackDirectionsClick('mp_nagar_nap_card')}
                className="w-full py-2.5 border border-[#446353] text-[#446353] hover:bg-[#E7EFEA] text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors text-center"
              >
                Open Google Maps Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Therapies in MP Nagar */}
      <section className="py-16 bg-[#F3EFE6] border-y border-[#E3DACD] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#446353] mb-2">
              Available at MP Nagar Sanctuary
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#28231D] font-normal tracking-tight">
              Popular Spa & Massage Therapies
            </h2>
            <p className="mt-3 text-sm text-[#685F53] leading-relaxed">
              Transparent INR tariffs, certified therapists, and private climate-controlled rooms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTreatments.map((t) => (
              <div key={t.id} className="bg-white rounded-xl p-6 border border-[#E3DACD] shadow-xs flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-[#446353] uppercase tracking-wider block mb-1">
                    {t.category}
                  </span>
                  <h3 className="font-serif text-lg font-medium text-[#28231D] mb-2">
                    {t.title}
                  </h3>
                  <p className="text-xs text-[#685F53] leading-relaxed mb-4">
                    {t.shortDesc}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E3DACD] flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#685F53] block">{t.duration}</span>
                    <span className="font-serif text-base font-bold text-[#28231D]">₹{t.price}</span>
                  </div>
                  <button
                    onClick={() => {
                      trackBookingTrigger(t.id, 'mp_nagar_treatment_card');
                      onOpenBooking(t.id);
                    }}
                    className="px-3.5 py-1.5 bg-[#446353] hover:bg-[#365143] text-white text-xs font-semibold rounded-sm transition-colors cursor-pointer"
                  >
                    Reserve
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#446353] hover:underline"
            >
              <span>View Complete Treatment Menu & Prices</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Local Navigation & Neighborhood Cross-Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-xl p-8 border border-[#E3DACD] shadow-xs">
          <h2 className="font-serif text-2xl font-normal text-[#28231D] mb-4">
            Serving Bhopal’s Prime Localities
          </h2>
          <p className="text-xs sm:text-sm text-[#685F53] leading-relaxed mb-6">
            Nandini Spa in MP Nagar is within easy driving and transit reach from every prominent sector of Bhopal:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-[#FAF7F2] border border-[#E3DACD]">
              <span className="text-xs font-semibold text-[#446353] block mb-1">Commercial Hub</span>
              <span className="text-sm font-medium text-[#28231D]">MP Nagar Zone 1 & 2</span>
              <p className="text-[11px] text-[#685F53] mt-1">Walking distance from DB Mall and banks.</p>
            </div>
            <div className="p-4 rounded-lg bg-[#FAF7F2] border border-[#E3DACD]">
              <span className="text-xs font-semibold text-[#446353] block mb-1">Transit Gateway</span>
              <span className="text-sm font-medium text-[#28231D]">Rani Kamlapati Station</span>
              <p className="text-[11px] text-[#685F53] mt-1">Convenient 3-minute transit for arrivals.</p>
            </div>
            <div className="p-4 rounded-lg bg-[#FAF7F2] border border-[#E3DACD]">
              <span className="text-xs font-semibold text-[#446353] block mb-1">Residential Enclave</span>
              <span className="text-sm font-medium text-[#28231D]">Arera Colony & 10 No. Market</span>
              <p className="text-[11px] text-[#685F53] mt-1">Quick 5-minute commute via Link Road.</p>
            </div>
            <div className="p-4 rounded-lg bg-[#FAF7F2] border border-[#E3DACD]">
              <span className="text-xs font-semibold text-[#446353] block mb-1">Administrative Center</span>
              <span className="text-sm font-medium text-[#28231D]">Shivaji Nagar & Vallabh Bhawan</span>
              <p className="text-[11px] text-[#685F53] mt-1">Direct access via Chetak Bridge & 6 No.</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#E3DACD] flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-[#685F53]">
              Need specific directions or parking guidance? Call our MP Nagar concierge:
            </span>
            <div className="flex items-center gap-3">
              <a
                href={`tel:${BUSINESS_CONFIG.phone?.replace(/[^0-9+]/g, '')}`}
                onClick={() => trackPhoneClick('mp_nagar_locality_strip', BUSINESS_CONFIG.phone!)}
                className="text-xs font-semibold text-[#446353] hover:underline flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{BUSINESS_CONFIG.phone || '+91 90604 33848'}</span>
              </a>
              <span className="text-[#C5BBAF]">·</span>
              <Link to="/contact" className="text-xs font-semibold text-[#446353] hover:underline">
                Contact Page →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#F3EFE6] border-t border-[#E3DACD] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#446353] mb-2">
              Local Guidance
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#28231D] font-normal tracking-tight">
              Frequently Asked Questions — MP Nagar Bhopal
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-5 sm:p-6 rounded-xl border border-[#E3DACD] shadow-xs">
                <h3 className="font-serif text-base sm:text-lg font-medium text-[#28231D] mb-2">
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-[#685F53] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Google Maps Section */}
      <section className="py-16 bg-white border-t border-[#E3DACD] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div className="max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#446353] mb-1">
                Verified Google Business Profile Location
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#28231D] font-normal tracking-tight">
                Google Maps Pin — Nandini Spa Bhopal
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-[#685F53] leading-relaxed">
                Use the interactive map below or launch turn-by-turn driving instructions to reach our sanctuary in MP Nagar, Bhopal.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={BUSINESS_CONFIG.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackDirectionsClick('mp_nagar_map_section')}
                className="px-5 py-2.5 bg-[#446353] hover:bg-[#365143] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center gap-2 shadow-xs"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Start Navigation</span>
                <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
              </a>
            </div>
          </div>
          <GoogleMapsEmbed className="w-full h-96 rounded-xl overflow-hidden shadow-xs border border-[#E3DACD]" />
        </div>
      </section>
    </div>
  );
};
