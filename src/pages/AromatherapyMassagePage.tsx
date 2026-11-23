import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Check, Sparkles, Phone, MessageSquare, MapPin, ShieldCheck, HeartHandshake, Award, Droplets, ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { SEOHead } from '../components/SEOHead';
import { ROUTE_SEO, generateServiceSchema, generateFAQSchema, generateBreadcrumbsSchema, getProductionBaseUrl } from '../data/seoData';
import { GoogleMapsEmbed } from '../components/GoogleMapsEmbed';
import { trackBookingTrigger, trackPhoneClick, trackWhatsAppClick } from '../utils/analytics';
import { SpaService } from '../data/spaData';

interface AromatherapyMassagePageProps {
  onOpenBooking: (serviceId?: string) => void;
  onSelectService?: (service: SpaService) => void;
}

export const AromatherapyMassagePage: React.FC<AromatherapyMassagePageProps> = ({ onOpenBooking }) => {
  const baseUrl = getProductionBaseUrl();
  const seo = ROUTE_SEO.aromatherapyMassage;

  const faqs = [
    {
      q: 'What is aromatherapy massage, and how does it work at Nandini Spa Bhopal?',
      a: 'Aromatherapy massage combines gentle, rhythmic Swedish effleurage strokes with pure, therapeutic-grade botanical essential oils. As the warm organic oils are absorbed through your skin and their natural aromas inhaled, they stimulate the brain’s limbic system to reduce cortisol, calm racing thoughts, and promote restorative cellular relaxation.',
    },
    {
      q: 'Which essential oils and carrier blends are used during the session?',
      a: 'We use 100% single-origin French lavender for anxiety relief, Australian eucalyptus for respiratory opening, grounding Himalayan vetiver for mental centering, and soothing Roman chamomile. These are blended into cold-pressed sweet almond and golden jojoba carrier oils free of parabens, mineral oils, and synthetic fragrances.',
    },
    {
      q: 'Is aromatherapy massage suitable for sensitive skin?',
      a: 'Yes. Before your therapy begins, our certified aromatherapist conducts a personal sensory and skin consultation. For guests with known allergies or ultra-sensitive skin, we offer hypoallergenic organic grapeseed oil with micro-dosages of calming calendula extract.',
    },
    {
      q: 'How does aromatherapy massage differ from deep tissue bodywork?',
      a: 'While deep tissue massage focuses on firm manual pressure and trigger-point breakdown for chronic muscular tightness, aromatherapy utilizes lighter, fluid gliding strokes designed specifically for sensory unwinding, nervous system restoration, and lymphatic circulation.',
    },
    {
      q: 'Where in Bhopal can I experience aromatherapy massage at Nandini Spa?',
      a: 'Nandini Spa is located in Maharana Pratap Nagar (MP Nagar), Bhopal, easily accessible near Habibganj (Rani Kamlapati) Railway Station and DB City Mall. We provide private climate-controlled suites with en-suite rainfall showers.',
    },
    {
      q: 'How can I book an aromatherapy massage session in Bhopal?',
      a: 'You can reserve online through our booking portal, call our concierge at +91 90604 33848, or message us on WhatsApp for instant booking confirmation.',
    },
  ];

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Aromatherapy Massage Bhopal', path: '/aromatherapy-massage' },
  ];

  const structuredData = [
    generateServiceSchema(
      baseUrl,
      'Aromatherapy Massage in Bhopal',
      seo.description,
      '/aromatherapy-massage',
      '2399'
    ),
    generateFAQSchema(faqs),
    generateBreadcrumbsSchema(baseUrl, breadcrumbs),
  ];

  const botanicalBlends = [
    {
      title: 'Serenity Lavender & Blue Chamomile',
      focus: 'Deep stress relief, insomnia reduction, and mental overstimulation',
      notes: 'High-altitude French lavender, German chamomile, and sweet marjoram in cold-pressed sweet almond oil.',
      duration: '60 / 90 Mins',
      price: '₹2,399',
    },
    {
      title: 'Vitality Eucalyptus & Sweet Orange',
      focus: 'Immunity boost, mental clarity, and post-travel respiratory freshness',
      notes: 'Nilgiri eucalyptus globulus, Italian sweet orange, and pine needle in virgin jojoba carrier.',
      duration: '60 / 90 Mins',
      price: '₹2,599',
    },
    {
      title: 'Earth-Grounding Vetiver & Sandalwood',
      focus: 'Nervous system grounding, emotional equilibrium, and chronic fatigue recovery',
      notes: 'Wildcrafted Indian vetiver (khus), Mysore sandalwood essence, and cold-pressed black sesame.',
      duration: '75 Mins',
      price: '₹2,799',
    },
  ];

  const therapyBenefits = [
    {
      title: 'Limbic System Stress Deactivation',
      desc: 'Inhaling pure botanical terpenes sends direct calming signals to the amygdala, dramatically reducing systemic stress and rapid heart rates.',
      icon: Droplets,
    },
    {
      title: 'Restorative REM Sleep Induction',
      desc: 'Active bio-compounds in lavender and chamomile ease nocturnal restlessness, fostering deeper and more refreshing sleep cycles.',
      icon: Sparkles,
    },
    {
      title: 'Gentle Lymphatic Drainage',
      desc: 'Rhythmic effleurage glides accelerate the elimination of cellular waste and fluid retention without painful manual pressure.',
      icon: HeartHandshake,
    },
    {
      title: 'Cellular Skin Nourishment',
      desc: 'Cold-pressed carrier oils deliver essential fatty acids and antioxidants directly into dry, climate-stressed skin layers.',
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="w-full bg-[#FAF7F2]">
      <SEOHead config={seo} structuredData={structuredData} />

      {/* Hero Section */}
      <section className="bg-[#201C17] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#332D26]">
        <div className="max-w-5xl mx-auto text-center">
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center justify-center gap-2 text-xs text-[#C5BBAF]">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#7A9988] font-medium">Aromatherapy Massage</span>
          </nav>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2E2822] text-[#7A9988] text-xs font-semibold uppercase tracking-widest mb-4 border border-[#3E362E]">
            <Droplets className="w-3.5 h-3.5 text-[#7A9988]" />
            <span>Maharana Pratap Nagar (MP Nagar), Bhopal</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-[#FAF7F2] leading-tight">
            Therapeutic Aromatherapy Massage in Bhopal
          </h1>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-[#ECE4D8] font-light max-w-3xl mx-auto leading-relaxed">
            Surrender sensory overload to the healing power of unadulterated botanical oils. Experience gentle rhythmic European effleurage, 
            custom essential oil formulations, and private suite tranquility at <strong>Nandini Spa Bhopal</strong> in MP Nagar.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => {
                trackBookingTrigger('aquatic-aromatherapy-flow', 'aromatherapy_hero');
                onOpenBooking('aquatic-aromatherapy-flow');
              }}
              className="w-full sm:w-auto px-7 py-3.5 bg-[#446353] hover:bg-[#365143] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Aromatherapy Session</span>
            </button>

            {BUSINESS_CONFIG.phone && (
              <a
                href={`tel:${BUSINESS_CONFIG.phone.replace(/[^0-9+]/g, '')}`}
                onClick={() => trackPhoneClick('aromatherapy_hero', BUSINESS_CONFIG.phone!)}
                className="w-full sm:w-auto px-6 py-3.5 border border-[#ECE4D8] hover:border-white text-[#FAF7F2] hover:text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#7A9988]" />
                <span>Call {BUSINESS_CONFIG.phone}</span>
              </a>
            )}

            {BUSINESS_CONFIG.isWhatsappConfigured && BUSINESS_CONFIG.whatsappNumber && (
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello Nandini Spa Bhopal, I would like to inquire about aromatherapy massage appointments in MP Nagar.')}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('aromatherapy_hero')}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Concierge</span>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Trust Highlights */}
      <section className="py-8 bg-[#F3EFE6] border-b border-[#E3DACD] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-3">
            <Sparkles className="w-6 h-6 text-[#446353] mx-auto mb-1.5" />
            <div className="text-xs font-semibold text-[#28231D]">100% Pure Essential Oils</div>
            <div className="text-[11px] text-[#685F53]">Zero synthetic perfumes or mineral fillers</div>
          </div>
          <div className="p-3">
            <ShieldCheck className="w-6 h-6 text-[#446353] mx-auto mb-1.5" />
            <div className="text-xs font-semibold text-[#28231D]">Private Ensuite Suites</div>
            <div className="text-[11px] text-[#685F53]">Private hot rainfall showers & sound damping</div>
          </div>
          <div className="p-3">
            <Award className="w-6 h-6 text-[#446353] mx-auto mb-1.5" />
            <div className="text-xs font-semibold text-[#28231D]">Certified Aromatherapists</div>
            <div className="text-[11px] text-[#685F53]">Expert sensory diagnosis & carrier blending</div>
          </div>
          <div className="p-3">
            <Clock className="w-6 h-6 text-[#446353] mx-auto mb-1.5" />
            <div className="text-xs font-semibold text-[#28231D]">Open 24/7 in MP Nagar</div>
            <div className="text-[11px] text-[#685F53]">Round-the-clock restorative reservations</div>
          </div>
        </div>
      </section>

      {/* Botanical Blends Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#446353] mb-2">
            Artisan Formulations · Bhopal
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#28231D] font-normal tracking-tight">
            Handcrafted Aromatherapeutic Blends
          </h2>
          <p className="mt-3 text-sm text-[#685F53] leading-relaxed">
            Prior to every treatment, your therapist presents our apothecary carousel for an intuitive olfactory selection, 
            ensuring your body receives exactly what it craves for equilibrium.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {botanicalBlends.map((blend, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 sm:p-8 border border-[#E3DACD] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#E7EFEA] text-[#446353] flex items-center justify-center mb-4">
                  <Droplets className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-medium text-[#28231D] mb-2">{blend.title}</h3>
                <p className="text-xs font-medium text-[#446353] mb-3">{blend.focus}</p>
                <p className="text-xs text-[#685F53] leading-relaxed mb-4">{blend.notes}</p>
              </div>
              <div className="pt-4 border-t border-[#E3DACD] flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#685F53] block">{blend.duration}</span>
                  <span className="font-serif text-lg font-semibold text-[#28231D]">{blend.price}</span>
                </div>
                <button
                  onClick={() => {
                    trackBookingTrigger('aquatic-aromatherapy-flow', 'aromatherapy_blend_card');
                    onOpenBooking('aquatic-aromatherapy-flow');
                  }}
                  className="px-4 py-2 bg-[#446353] hover:bg-[#365143] text-white text-xs font-semibold rounded-sm transition-colors cursor-pointer"
                >
                  Reserve
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Four Core Benefits */}
      <section className="py-16 bg-[#F3EFE6] border-y border-[#E3DACD] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#446353] mb-2">
              Holistic Benefits
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#28231D] font-normal tracking-tight">
              Why Choose Aromatherapy Massage in Bhopal?
            </h2>
            <p className="mt-3 text-sm text-[#685F53] leading-relaxed">
              Beyond surface muscle relaxation, botanical aromatherapeutics trigger profound neuro-chemical shifts that lower blood pressure and restore mental serenity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {therapyBenefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div key={i} className="bg-white p-6 rounded-xl border border-[#E3DACD] shadow-xs">
                  <div className="w-10 h-10 rounded-full bg-[#E7EFEA] text-[#446353] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#28231D] mb-2">{b.title}</h3>
                  <p className="text-xs text-[#685F53] leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Internal Navigation & Related Treatments */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-xl p-8 border border-[#E3DACD] shadow-xs">
          <h2 className="font-serif text-2xl font-normal text-[#28231D] mb-4">
            Complementary Therapies at Nandini Spa Bhopal
          </h2>
          <p className="text-xs sm:text-sm text-[#685F53] leading-relaxed mb-6">
            Looking to combine your aromatherapy session with deeper muscular alignment or a romantic couple’s retreat? 
            Explore our related restorative offerings in MP Nagar:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/full-body-massage" className="p-4 rounded-lg bg-[#FAF7F2] hover:bg-[#E7EFEA] border border-[#E3DACD] transition-colors group">
              <span className="text-xs font-semibold text-[#446353] block mb-1">Deep Bodywork</span>
              <span className="text-sm font-medium text-[#28231D] group-hover:text-[#446353]">Full Body Massage Bhopal →</span>
            </Link>
            <Link to="/swedish-massage" className="p-4 rounded-lg bg-[#FAF7F2] hover:bg-[#E7EFEA] border border-[#E3DACD] transition-colors group">
              <span className="text-xs font-semibold text-[#446353] block mb-1">Gentle Stress Relief</span>
              <span className="text-sm font-medium text-[#28231D] group-hover:text-[#446353]">Swedish Massage Bhopal →</span>
            </Link>
            <Link to="/couple-spa" className="p-4 rounded-lg bg-[#FAF7F2] hover:bg-[#E7EFEA] border border-[#E3DACD] transition-colors group">
              <span className="text-xs font-semibold text-[#446353] block mb-1">VIP Dual Suite</span>
              <span className="text-sm font-medium text-[#28231D] group-hover:text-[#446353]">Couple Spa in Bhopal →</span>
            </Link>
            <Link to="/massage-centre-mp-nagar" className="p-4 rounded-lg bg-[#FAF7F2] hover:bg-[#E7EFEA] border border-[#E3DACD] transition-colors group">
              <span className="text-xs font-semibold text-[#446353] block mb-1">Local MP Nagar Centre</span>
              <span className="text-sm font-medium text-[#28231D] group-hover:text-[#446353]">Massage Centre MP Nagar →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#F3EFE6] border-t border-[#E3DACD] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#446353] mb-2">
              Guest Inquiries
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#28231D] font-normal tracking-tight">
              Aromatherapy Massage FAQs
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

      {/* Google Maps Embed & Location Banner */}
      <section className="py-16 bg-white border-t border-[#E3DACD] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div className="max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#446353] mb-1">
                Sanctuary Location · MP Nagar Bhopal
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#28231D] font-normal tracking-tight">
                Visit Nandini Spa in MP Nagar, Bhopal
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-[#685F53] leading-relaxed">
                Conveniently situated in Maharana Pratap Nagar, Bhopal, within walking distance of prime commercial landmarks 
                and rapid transit from Habibganj (Rani Kamlapati) Station.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={BUSINESS_CONFIG.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-[#446353] hover:bg-[#365143] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors"
              >
                Get Directions
              </a>
              <button
                onClick={() => onOpenBooking('aquatic-aromatherapy-flow')}
                className="px-4 py-2.5 border border-[#446353] text-[#446353] hover:bg-[#E7EFEA] text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors"
              >
                Book Appointment
              </button>
            </div>
          </div>
          <GoogleMapsEmbed className="w-full h-80 rounded-xl overflow-hidden shadow-xs border border-[#E3DACD]" />
        </div>
      </section>
    </div>
  );
};
