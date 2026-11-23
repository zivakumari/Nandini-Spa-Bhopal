import { BUSINESS_CONFIG } from '../config/business';

export interface RouteSEOConfig {
  title: string;
  description: string;
  canonicalPath: string;
  robots?: string;
  keywords?: string;
  ogType?: 'website' | 'article' | 'place';
  ogImage?: string;
  h1: string;
}

/**
 * Verified absolute base URL for production
 */
export const getProductionBaseUrl = (): string => {
  if (typeof window !== 'undefined' && window.location.origin && !window.location.origin.includes('localhost') && !window.location.origin.includes('127.0.0.1')) {
    return window.location.origin.replace(/\/+$/, '');
  }
  return (BUSINESS_CONFIG.siteUrl || 'https://www.nandinispa.online').replace(/\/+$/, '');
};

/**
 * Route-by-route metadata registry
 */
export const ROUTE_SEO: Record<string, RouteSEOConfig> = {
  home: {
    title: 'Best Spa in Bhopal | Luxury Body Massage Centre in MP Nagar',
    description: 'Experience the best spa in Bhopal at Nandini Spa, MP Nagar. Therapeutic full body massage, luxury couple spa & 24/7 private suites. Call +91 90604 33848!',
    canonicalPath: '/',
    robots: 'index, follow',
    keywords: 'Best Spa in Bhopal, Spa in Bhopal, Massage Centre in Bhopal, Body Massage Centre in Bhopal, Full Body Massage in Bhopal, Luxury Spa in Bhopal, Spa in MP Nagar Bhopal, Spa Near Me',
    ogType: 'website',
    ogImage: '/nandini-spa-location-updated.png',
    h1: 'Best Spa in Bhopal — Luxury Body Massage & Wellness Sanctuary',
  },
  about: {
    title: 'About Nandini Spa Bhopal | Master Therapists & Sanctuary Ethos',
    description: 'Discover Nandini Spa in MP Nagar, Bhopal. Learn about our master kinesiology therapists, 100% private sound-damped suites & pure organic botanical standards.',
    canonicalPath: '/about',
    robots: 'index, follow',
    keywords: 'About Nandini Spa Bhopal, Professional Massage Centre Bhopal, Best Spa in Bhopal, Certified Massage Therapists Bhopal, MP Nagar Wellness Clinic',
    ogType: 'website',
    ogImage: '/nandini-logo-horizontal.png',
    h1: 'About Nandini Spa Sanctuary in Bhopal',
  },
  services: {
    title: 'Spa Services & Massage Pricing Bhopal | Nandini Spa Menu',
    description: 'Explore spa services and transparent massage prices in Bhopal at Nandini Spa. Full body massage, Swedish, Thai & couple packages from ₹1,799. Book 24/7!',
    canonicalPath: '/services',
    robots: 'index, follow',
    keywords: 'Spa Services in Bhopal, Massage Centre in Bhopal, Spa Prices Bhopal, Body Massage Price Bhopal, Deep Tissue Massage Bhopal, Best Spa Centre in Bhopal',
    ogType: 'website',
    ogImage: '/nandini-logo-horizontal.png',
    h1: 'Restorative Spa Therapies & Treatment Tariffs in Bhopal',
  },
  fullBodyMassage: {
    title: 'Full Body Massage in Bhopal | Best Body Massage Centre MP Nagar',
    description: 'Looking for full body massage in Bhopal? Nandini Spa MP Nagar offers deep tissue, Swedish & Balinese bodywork in private ensuite suites from ₹2,499. Call now!',
    canonicalPath: '/full-body-massage',
    robots: 'index, follow',
    keywords: 'Full Body Massage in Bhopal, Body Massage Centre in Bhopal, Best Body Massage Bhopal, Deep Tissue Massage Bhopal, Massage Centre in MP Nagar, Body Massage Near Me',
    ogType: 'website',
    ogImage: '/nandini-spa-location-updated.png',
    h1: 'Therapeutic Full Body Massage in Bhopal — Deep Tissue & Swedish Bodywork',
  },
  coupleSpa: {
    title: 'Couple Spa in Bhopal | Private VIP Suite Massage | Nandini Spa',
    description: 'Book a luxury couple spa in Bhopal at Nandini Spa MP Nagar. Private VIP suite, side-by-side synchronized massages, floral foot soaks & herbal tisanes. Reserve now!',
    canonicalPath: '/couple-spa',
    robots: 'index, follow',
    keywords: 'Couple Spa in Bhopal, Couple Massage in Bhopal, Couples Spa Package Bhopal, Romantic Spa Bhopal, VIP Couple Suite MP Nagar, Best Spa in Bhopal for Couples',
    ogType: 'website',
    ogImage: '/nandini-spa-location-updated.png',
    h1: 'Luxury Couple Spa in Bhopal — Private VIP Suite & Synchronized Massages',
  },
  luxurySpa: {
    title: 'Luxury Spa in Bhopal | 5-Star Wellness Sanctuary in MP Nagar',
    description: 'Experience Bhopal’s finest luxury spa at Nandini Spa, MP Nagar. Acoustically damped private suites, ensuite rainfall showers & organic botanicals. Open 24/7.',
    canonicalPath: '/luxury-spa',
    robots: 'index, follow',
    keywords: 'Luxury Spa in Bhopal, Premium Spa in Bhopal, 5 Star Spa Experience Bhopal, Best Spa in Bhopal, VIP Spa Sanctuary MP Nagar, Executive Wellness Bhopal',
    ogType: 'website',
    ogImage: '/nandini-spa-location-updated.png',
    h1: '5-Star Luxury Spa in Bhopal — Executive Wellness & Private Suites',
  },
  thaiMassage: {
    title: 'Thai Massage in Bhopal | Traditional Yoga Stretch & Mobility Spa',
    description: 'Authentic Thai massage in Bhopal at Nandini Spa, MP Nagar. Traditional Nuad Thai, assisted yoga stretching & Sen meridian pressure from ₹2,899. Call concierge!',
    canonicalPath: '/thai-massage',
    robots: 'index, follow',
    keywords: 'Thai Massage in Bhopal, Traditional Thai Massage Bhopal, Thai Bodywork MP Nagar Bhopal, Assisted Yoga Stretch Bhopal, Deep Stretch Massage Bhopal',
    ogType: 'website',
    ogImage: '/nandini-spa-location-updated.png',
    h1: 'Traditional Thai Massage in Bhopal — Assisted Yoga Stretch & Mobility',
  },
  aromatherapyMassage: {
    title: 'Aromatherapy Massage in Bhopal | Organic Essential Oil Spa',
    description: 'Restore calm with aromatherapy massage in Bhopal at Nandini Spa MP Nagar. Pure lavender, eucalyptus & chamomile essential oils for stress & sleep from ₹2,399.',
    canonicalPath: '/aromatherapy-massage',
    robots: 'index, follow',
    keywords: 'Aromatherapy Massage Bhopal, Aromatherapy Spa in Bhopal, Essential Oil Massage Bhopal, Relaxation Spa in Bhopal, Best Spa in MP Nagar Bhopal',
    ogType: 'website',
    ogImage: '/nandini-spa-location-updated.png',
    h1: 'Therapeutic Aromatherapy Massage in Bhopal — Organic Botanical Healing',
  },
  swedishMassage: {
    title: 'Swedish Massage in Bhopal | Stress & Neck Relief | Nandini Spa',
    description: 'Classic Swedish massage in Bhopal at Nandini Spa MP Nagar. Long rhythmic effleurage, neck & shoulder decompression & desk fatigue relief from ₹2,499. Book today!',
    canonicalPath: '/swedish-massage',
    robots: 'index, follow',
    keywords: 'Swedish Massage Bhopal, Swedish Massage in Bhopal, Relaxation Massage Bhopal, Neck and Shoulder Massage Bhopal, Body Massage Centre in Bhopal',
    ogType: 'website',
    ogImage: '/nandini-spa-location-updated.png',
    h1: 'Classic Swedish Massage in Bhopal — Stress Recovery & Muscular Decompression',
  },
  massageCentreMpNagar: {
    title: 'Massage Centre in MP Nagar Bhopal | Nandini Spa | Open 24/7',
    description: 'Visit Nandini Spa, the premier massage centre in MP Nagar, Bhopal. Near Habibganj (Rani Kamlapati) Station & DB City Mall. 24/7 private luxury suites. Call now!',
    canonicalPath: '/massage-centre-mp-nagar',
    robots: 'index, follow',
    keywords: 'Massage Centre in MP Nagar, Spa in MP Nagar Bhopal, Best Spa Near MP Nagar, Spa Near Habibganj Railway Station, Massage Centre Near Maharana Pratap Nagar, Massage Near Me Bhopal',
    ogType: 'place',
    ogImage: '/nandini-spa-location-updated.png',
    h1: 'Premier Massage Centre in MP Nagar, Bhopal — Nandini Spa Sanctuary',
  },
  contact: {
    title: 'Contact Nandini Spa Bhopal | Location, Directions & Phone',
    description: 'Contact Nandini Spa in MP Nagar, Bhopal. Open 24 hours daily. Call +91 90604 33848, chat on WhatsApp, or get Google Maps directions near Rani Kamlapati Station!',
    canonicalPath: '/contact',
    robots: 'index, follow',
    keywords: 'Contact Nandini Spa Bhopal, Spa in MP Nagar Bhopal, Nandini Spa Phone, Spa Directions Bhopal, Massage Centre Near Maharana Pratap Nagar, Spa Near Me',
    ogType: 'place',
    ogImage: '/nandini-spa-location-updated.png',
    h1: 'Contact Nandini Spa — Official Bhopal Location & Concierge',
  },
  booking: {
    title: 'Book Spa Appointment in Bhopal | Nandini Spa Online Reservation',
    description: 'Reserve your spa and massage appointment online at Nandini Spa Bhopal. Instant confirmation for full body massage, couples suites & Thai bodywork. Open 24/7.',
    canonicalPath: '/booking',
    robots: 'index, follow',
    keywords: 'Spa Booking in Bhopal, Book Spa Appointment Bhopal, Nandini Spa Reservation, Online Spa Booking MP Nagar, Massage Appointment Bhopal',
    ogType: 'website',
    ogImage: '/nandini-logo-horizontal.png',
    h1: 'Reserve Your Spa Sanctuary Appointment in Bhopal',
  },
  gallery: {
    title: 'Sanctuary Photo Gallery | Nandini Spa Bhopal Treatment Suites',
    description: 'Tour Nandini Spa Bhopal through our photo gallery. Explore private luxury suites, ensuite rainfall showers, basalt stone rituals & botanical spa amenities.',
    canonicalPath: '/gallery',
    robots: 'index, follow',
    keywords: 'Nandini Spa Gallery, Spa Photos Bhopal, Massage Therapy Rooms Bhopal, Spa Suite Images MP Nagar, Luxury Spa Bhopal Pictures',
    ogType: 'website',
    ogImage: '/nandini-spa-location-updated.png',
    h1: 'Visual Tour of Nandini Spa Sanctuary in Bhopal',
  },
  privacyPolicy: {
    title: 'Privacy Policy | Nandini Spa Bhopal',
    description: 'Read the privacy policy for Nandini Spa Bhopal. Learn how we handle guest inquiries, appointment details, website cookies, and personal data securely.',
    canonicalPath: '/privacy-policy',
    robots: 'index, follow',
    keywords: 'Nandini Spa Privacy Policy, Spa Data Protection Bhopal',
    ogType: 'website',
    ogImage: '/nandini-logo-horizontal.png',
    h1: 'Privacy Policy & Guest Data Protection',
  },
  terms: {
    title: 'Terms & Sanctuary Etiquette | Nandini Spa Bhopal',
    description: 'Review the terms of service, appointment cancellation policies, health contraindications, and sanctuary etiquette for Nandini Spa in Bhopal.',
    canonicalPath: '/terms',
    robots: 'index, follow',
    keywords: 'Nandini Spa Terms of Service, Spa Cancellation Policy Bhopal, Sanctuary Etiquette Guidelines',
    ogType: 'website',
    ogImage: '/nandini-logo-horizontal.png',
    h1: 'Terms of Service & Sanctuary Guidelines',
  },
  notFound: {
    title: 'Page Not Found (404) | Nandini Spa Bhopal',
    description: 'The page you requested could not be found. Explore our therapeutic spa treatments, full body massage options, or contact our concierge in Bhopal.',
    canonicalPath: '/404',
    robots: 'noindex, follow',
    keywords: 'Page Not Found, Nandini Spa Bhopal 404',
    ogType: 'website',
    ogImage: '/nandini-logo-horizontal.png',
    h1: '404 — Sanctuary Pathway Not Found',
  },
};

/**
 * Generate LocalBusiness / DaySpa Schema.org JSON-LD
 */
export const generateLocalBusinessSchema = (baseUrl: string) => {
  return {
    '@context': 'https://schema.org',
    '@type': ['DaySpa', 'HealthAndBeautyBusiness'],
    '@id': `${baseUrl}/#spa`,
    name: BUSINESS_CONFIG.brandName,
    alternateName: `${BUSINESS_CONFIG.brandName} & Wellness Sanctuary Bhopal`,
    description: BUSINESS_CONFIG.shortDescription,
    url: baseUrl,
    telephone: BUSINESS_CONFIG.phone ? BUSINESS_CONFIG.phone.replace(/[^0-9+]/g, '') : '+919060433848',
    email: BUSINESS_CONFIG.email,
    logo: `${baseUrl}/nandini-logo-horizontal.png`,
    image: [
      `${baseUrl}/nandini-spa-location-updated.png`,
      `${baseUrl}/nandini-logo-horizontal.png`,
      `${baseUrl}/nandini-emblem.png`,
    ],
    priceRange: '₹₹ (₹1,799 – ₹5,899)',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI, Credit Card, Debit Card, Net Banking',
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_CONFIG.streetAddressPlaceholder,
      addressLocality: BUSINESS_CONFIG.city,
      addressRegion: BUSINESS_CONFIG.state,
      ...(BUSINESS_CONFIG.zipCode ? { postalCode: BUSINESS_CONFIG.zipCode } : {}),
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_CONFIG.maps.latitude,
      longitude: BUSINESS_CONFIG.maps.longitude,
    },
    hasMap: BUSINESS_CONFIG.maps.embedUrl,
    sameAs: [
      BUSINESS_CONFIG.maps.placeUrl,
      BUSINESS_CONFIG.socials?.instagram,
      BUSINESS_CONFIG.socials?.facebook,
      BUSINESS_CONFIG.socials?.tripadvisor,
    ].filter(Boolean),
    openingHours: 'Mo-Su 00:00-24:00',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: 'Bhopal',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Maharana Pratap Nagar',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Habibganj',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Arera Colony',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Shivaji Nagar',
      },
    ],
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Private Climate-Controlled En-Suite Showers',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Autoclaved Fresh Linens for Every Guest',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Organic Wildcrafted Carrier & Essential Oils',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Certified Kinesiologists & Ayurvedic Practitioners',
        value: true,
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Nandini Spa Restorative Treatments Catalog',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Nandini Kinetic Muscle Reset & Deep Tissue',
            description: 'Precision targeted trigger point therapy addressing dense sub-layer tightness, postural compression, and physical fatigue.',
          },
          price: '2699',
          priceCurrency: 'INR',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Warm Basalt Stone & Geothermal Therapy',
            description: 'Mineral-rich volcanic basalt stones smoothed by ocean waves, heated to therapeutic perfection to melt stress away.',
          },
          price: '3199',
          priceCurrency: 'INR',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Authentic Shirodhara & Golden Abhyanga',
            description: 'A rhythmic flow of warm medicated herbal oils poured over the brow accompanied by synchronized dosha bodywork.',
          },
          price: '3499',
          priceCurrency: 'INR',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Nandini Sanctuary Couples Haven',
            description: 'Synchronized dual massage in our premier VIP suite featuring private hydro-tub, floral foot bath, and artisan refreshments.',
          },
          price: '5899',
          priceCurrency: 'INR',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Botanical Eucalyptus & Lavender Aromatherapy',
            description: 'Feather-light flowing Swedish effleurage enriched with pure single-origin lavender, vetiver, and eucalyptus botanicals in Bhopal.',
          },
          price: '2399',
          priceCurrency: 'INR',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Swedish Stress Recovery & Neck Decompression',
            description: 'Classic European rhythmic bodywork dedicated to erasing postural desk strain, trapezius stiffness, and fatigue in MP Nagar.',
          },
          price: '2499',
          priceCurrency: 'INR',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Traditional Thai Assisted Stretch & Mobility',
            description: 'Dynamic mat bodywork combining acupressure along Sen energy lines with assisted yoga-based passive stretches in Bhopal.',
          },
          price: '2899',
          priceCurrency: 'INR',
        },
      ],
    },
  };
};

/**
 * Generate WebSite Schema.org JSON-LD
 */
export const generateWebSiteSchema = (baseUrl: string) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    name: BUSINESS_CONFIG.brandName,
    alternateName: `${BUSINESS_CONFIG.brandName} Bhopal`,
    url: baseUrl,
    description: BUSINESS_CONFIG.shortDescription,
    inLanguage: 'en-IN',
    publisher: {
      '@id': `${baseUrl}/#spa`,
    },
  };
};

/**
 * Generate BreadcrumbList Schema.org JSON-LD
 */
export const generateBreadcrumbsSchema = (
  baseUrl: string,
  crumbs: Array<{ name: string; path: string }>
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: crumb.name,
      item: `${baseUrl}${crumb.path === '/' ? '' : crumb.path}`,
    })),
  };
};

/**
 * Generate FAQPage Schema.org JSON-LD
 */
export const generateFAQSchema = (faqs: Array<{ q: string; a: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
};

/**
 * Generate Service Schema.org JSON-LD
 */
export const generateServiceSchema = (
  baseUrl: string,
  serviceName: string,
  description: string,
  serviceUrl: string,
  price?: string,
  providerName = BUSINESS_CONFIG.brandName
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: description,
    url: `${baseUrl}${serviceUrl}`,
    provider: {
      '@type': 'DaySpa',
      name: providerName,
      url: baseUrl,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Bhopal',
    },
    ...(price
      ? {
          offers: {
            '@type': 'Offer',
            price: price,
            priceCurrency: 'INR',
          },
        }
      : {}),
  };
};
