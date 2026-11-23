import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Check, Sparkles, Phone, MessageSquare, MapPin, ShieldCheck, HeartHandshake, Award, Activity, ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { SEOHead } from '../components/SEOHead';
import { ROUTE_SEO, generateServiceSchema, generateFAQSchema, generateBreadcrumbsSchema, getProductionBaseUrl } from '../data/seoData';
import { GoogleMapsEmbed } from '../components/GoogleMapsEmbed';
import { trackBookingTrigger, trackPhoneClick, trackWhatsAppClick } from '../utils/analytics';
import { SpaService } from '../data/spaData';

interface SwedishMassagePageProps {
  onOpenBooking: (serviceId?: string) => void;
  onSelectService?: (service: SpaService) => void;
}

export const SwedishMassagePage: React.FC<SwedishMassagePageProps> = ({ onOpenBooking }) => {
  const baseUrl = getProductionBaseUrl();
  const seo = ROUTE_SEO.swedishMassage;

  const faqs = [
    {
      q: 'What is Swedish massage, and what does the therapy entail at Nandini Spa Bhopal?',
      a: 'Swedish massage is the classical European gold standard for full-body relaxation. It utilizes five fundamental therapeutic techniques: effleurage (long, flowing gliding strokes), petrissage (kneading and lifting muscle bundles), friction (deep circular pressure to break down adhesions), tapotement (rhythmic cupping/percussion), and gentle vibration. At Nandini Spa, this is performed with warmed sweet almond oil in private climate-controlled suites.',
    },
    {
      q: 'How does Swedish massage differ from deep tissue massage?',
      a: 'Swedish massage is designed primarily for overall nervous system calming, circulation enhancement, and mild-to-medium tension release using broad, gliding strokes. Deep tissue massage, by contrast, targets deep muscular connective tissue and stubborn myofascial adhesions with firm, focused pressure using forearms and thumbs.',
    },
    {
      q: 'Is Swedish massage effective for neck, shoulder, and desk fatigue?',
      a: 'Exceptionally so. Our Swedish protocol pays dedicated attention to the upper trapezius, levator scapulae, and cervical spine—the primary muscle groups congested by computer work, mobile device posture, and long commutes in Bhopal.',
    },
    {
      q: 'What should I wear, and is guest privacy guaranteed?',
      a: 'Your modesty is safeguarded at all times. We provide sterile single-use disposable modesty undergarments, plush waffle robes, and sanitized slippers. You remain fully draped beneath freshly autoclaved warm towels throughout the therapy, with only the limb or back area currently being treated uncovered.',
    },
    {
      q: 'Where is Nandini Spa located for Swedish massage appointments in Bhopal?',
      a: 'Nandini Spa is located in Maharana Pratap Nagar (MP Nagar), Bhopal, convenient to Habibganj (Rani Kamlapati) Railway Station, DB City Mall, and Arera Colony.',
    },
    {
      q: 'How do I book a Swedish massage slot?',
      a: 'You can book directly online through our instant booking calendar, call our concierge at +91 90604 33848, or message us on WhatsApp for real-time appointment scheduling.',
    },
  ];

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Swedish Massage Bhopal', path: '/swedish-massage' },
  ];

  const structuredData = [
    generateServiceSchema(
      baseUrl,
      'Swedish Massage in Bhopal',
      seo.description,
      '/swedish-massage',
      '2499'
    ),
    generateFAQSchema(faqs),
    generateBreadcrumbsSchema(baseUrl, breadcrumbs),
  ];

  const swedishTechniques = [
    {
      title: 'Effleurage (Gliding Strokes)',
      desc: 'Gentle, flowing strokes directed toward the heart that warm superficial tissues, soothe sensory nerves, and improve venous blood return.',
    },
    {
      title: 'Petrissage (Muscle Kneading)',
      desc: 'Rhythmic lifting, rolling, and compression of tight muscle groups that disperses metabolic waste and softens stubborn trapezius knots.',
    },
    {
      title: 'Frictional Cross-Fiber Work',
      desc: 'Controlled thumb friction across fibrous areas around shoulder blades to restore mobility and dissolve restricted fascia.',
    },
    {
      title: 'Assisted Cervical Traction',
      desc: 'Gentle passive neck elongation that releases pressure between compressed cervical vertebrae and eases computer-neck strain.',
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
            <span className="text-[#7A9988] font-medium">Swedish Massage</span>
          </nav>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2E2822] text-[#7A9988] text-xs font-semibold uppercase tracking-widest mb-4 border border-[#3E362E]">
            <Activity className="w-3.5 h-3.5 text-[#7A9988]" />
            <span>Maharana Pratap Nagar (MP Nagar), Bhopal</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-[#FAF7F2] leading-tight">
            Classic Swedish Massage in Bhopal
          </h1>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-[#ECE4D8] font-light max-w-3xl mx-auto leading-relaxed">
            Erase postural desk fatigue, neck tightness, and accumulated mental strain with authentic European bodywork. 
            Enjoy rhythmic effleurage gliding, warm sweet almond oil, and private ensuite shower suites at <strong>Nandini Spa Bhopal</strong>.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => {
                trackBookingTrigger('swedish-stress-recovery', 'swedish_hero');
                onOpenBooking('swedish-stress-recovery');
              }}
              className="w-full sm:w-auto px-7 py-3.5 bg-[#446353] hover:bg-[#365143] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Swedish Massage (₹2,499)</span>
            </button>

            {BUSINESS_CONFIG.phone && (
              <a
                href={`tel:${BUSINESS_CONFIG.phone.replace(/[^0-9+]/g, '')}`}
                onClick={() => trackPhoneClick('swedish_hero', BUSINESS_CONFIG.phone!)}
                className="w-full sm:w-auto px-6 py-3.5 border border-[#ECE4D8] hover:border-white text-[#FAF7F2] hover:text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#7A9988]" />
                <span>Call {BUSINESS_CONFIG.phone}</span>
              </a>
            )}

            {BUSINESS_CONFIG.isWhatsappConfigured && BUSINESS_CONFIG.whatsappNumber && (
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello Nandini Spa Bhopal, I would like to book a Swedish Massage session in MP Nagar.')}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('swedish_hero')}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Booking</span>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Trust Highlights */}
      <section className="py-8 bg-[#F3EFE6] border-b border-[#E3DACD] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-3">
            <Activity className="w-6 h-6 text-[#446353] mx-auto mb-1.5" />
            <div className="text-xs font-semibold text-[#28231D]">Circulation Boost</div>
            <div className="text-[11px] text-[#685F53]">Stimulates venous blood & oxygen flow</div>
          </div>
          <div className="p-3">
            <ShieldCheck className="w-6 h-6 text-[#446353] mx-auto mb-1.5" />
            <div className="text-xs font-semibold text-[#28231D]">Total Suite Privacy</div>
            <div className="text-[11px] text-[#685F53]">Private ensuite rainfall shower in every room</div>
          </div>
          <div className="p-3">
            <Award className="w-6 h-6 text-[#446353] mx-auto mb-1.5" />
            <div className="text-xs font-semibold text-[#28231D]">Certified Kinesiologists</div>
            <div className="text-[11px] text-[#685F53]">Proper anatomical drape and gentle touch</div>
          </div>
          <div className="p-3">
            <Sparkles className="w-6 h-6 text-[#446353] mx-auto mb-1.5" />
            <div className="text-xs font-semibold text-[#28231D]">Sweet Almond Oil</div>
            <div className="text-[11px] text-[#685F53]">Pure cold-pressed carrier oil hydration</div>
          </div>
        </div>
      </section>

      {/* Swedish Modality Techniques */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#446353] mb-2">
            The Five Classical Movements · Bhopal
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#28231D] font-normal tracking-tight">
            How Swedish Bodywork Renews Your Musculature
          </h2>
          <p className="mt-3 text-sm text-[#685F53] leading-relaxed">
            Originally developed by Pehr Henrik Ling, Swedish massage is scientifically organized to support cardiac venous return, 
            soften tight connective bands, and induce soothing parasympathetic nervous recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {swedishTechniques.map((item, idx) => (
            <div key={idx} className="bg-white p-6 sm:p-8 rounded-xl border border-[#E3DACD] shadow-xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#E7EFEA] text-[#446353] flex items-center justify-center shrink-0 font-serif font-bold text-sm">
                0{idx + 1}
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium text-[#28231D] mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#685F53] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Desk Worker Callout Section */}
      <section className="py-16 bg-[#201C17] text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#7A9988] block mb-2">
              Corporate & Executive Wellness in MP Nagar
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#FAF7F2]">
              Suffering from Tech Neck or Prolonged Desk Strain?
            </h2>
            <p className="mt-3 text-sm text-[#ECE4D8] font-light leading-relaxed">
              Extended hours in front of laptops in Bhopal’s corporate offices compress the spine and shorten shoulder fascia. 
              Our Swedish stress recovery protocol is specifically tuned to release trapped lactic acid and restore upright posture.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <button
              onClick={() => onOpenBooking('swedish-stress-recovery')}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#446353] hover:bg-[#365143] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors cursor-pointer text-center"
            >
              Reserve Desk Relief Session
            </button>
          </div>
        </div>
      </section>

      {/* Internal Linking & Related Pages */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-xl p-8 border border-[#E3DACD] shadow-xs">
          <h2 className="font-serif text-2xl font-normal text-[#28231D] mb-4">
            Explore Other Treatments at Nandini Spa Bhopal
          </h2>
          <p className="text-xs sm:text-sm text-[#685F53] leading-relaxed mb-6">
            Compare our massage modalities to find the ideal therapy for your wellness journey:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/full-body-massage" className="p-4 rounded-lg bg-[#FAF7F2] hover:bg-[#E7EFEA] border border-[#E3DACD] transition-colors group">
              <span className="text-xs font-semibold text-[#446353] block mb-1">Deeper Tension</span>
              <span className="text-sm font-medium text-[#28231D] group-hover:text-[#446353]">Full Body Massage Bhopal →</span>
            </Link>
            <Link to="/aromatherapy-massage" className="p-4 rounded-lg bg-[#FAF7F2] hover:bg-[#E7EFEA] border border-[#E3DACD] transition-colors group">
              <span className="text-xs font-semibold text-[#446353] block mb-1">Essential Oils</span>
              <span className="text-sm font-medium text-[#28231D] group-hover:text-[#446353]">Aromatherapy Massage →</span>
            </Link>
            <Link to="/thai-massage" className="p-4 rounded-lg bg-[#FAF7F2] hover:bg-[#E7EFEA] border border-[#E3DACD] transition-colors group">
              <span className="text-xs font-semibold text-[#446353] block mb-1">Yoga Stretches</span>
              <span className="text-sm font-medium text-[#28231D] group-hover:text-[#446353]">Thai Massage Bhopal →</span>
            </Link>
            <Link to="/massage-centre-mp-nagar" className="p-4 rounded-lg bg-[#FAF7F2] hover:bg-[#E7EFEA] border border-[#E3DACD] transition-colors group">
              <span className="text-xs font-semibold text-[#446353] block mb-1">MP Nagar Location</span>
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
              Common Questions
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#28231D] font-normal tracking-tight">
              Swedish Massage FAQs
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
                Centrally Located in Bhopal
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#28231D] font-normal tracking-tight">
                Visit Nandini Spa in MP Nagar, Bhopal
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-[#685F53] leading-relaxed">
                Nandini Spa is located in Maharana Pratap Nagar, Bhopal. Open 24 hours daily with valet parking access and 
                proximity to major hotels and Habibganj (Rani Kamlapati) Station.
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
                onClick={() => onOpenBooking('swedish-stress-recovery')}
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
