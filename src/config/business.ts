/**
 * Nandini Spa — Centralized Business Configuration
 * =====================================================
 * 
 * Update this file to modify office location, Google Maps integration,
 * contact email, phone status, or sanctuary operating hours.
 * 
 * All site components read directly from this configuration.
 */

export interface BusinessConfig {
  brandName: string;
  brandShort: string;
  tagline: string;
  shortDescription: string;
  siteUrl: string;
  city: string;
  state: string;
  country: string;
  locality?: string;
  zipCode?: string;
  zipFileName: string;
  
  /**
   * Official Brand Logo & Emblem configuration
   */
  logo: {
    horizontalUrl?: string;
    fullUrl: string;
    emblemUrl: string;
    originalUrl: string;
    useFullBadgeInHeader: boolean;
  };

  /**
   * Street address or office suite placeholder.
   */
  streetAddressPlaceholder: string;
  isExactStreetAddressConfigured: boolean;

  /**
   * Official contact email
   */
  email: string;

  /**
   * Business mobile number.
   * NOTE: Keep configurable as the actual phone number is pending client provision.
   */
  phone: string | null;
  phoneDisplayPlaceholder: string;
  isPhoneConfigured: boolean;

  /**
   * WhatsApp integration:
   * Enabled strictly after valid phone number is provided.
   */
  whatsappNumber: string | null;
  isWhatsappConfigured: boolean;


  /**
   * Google Maps Embed & Location Settings
   */
  maps: {
    latitude: number;
    longitude: number;
    zoomLevel: number;
    embedUrl: string;
    placeUrl?: string;
    directionsUrl: string;
    apiKey?: string;
  };

  /**
   * Operating and Appointment Hours
   */
  hours: {
    weekday: string;
    weekend: string;
    notes: string;
  };

  socials: {
    instagram?: string;
    facebook?: string;
    tripadvisor?: string;
  };
}

/**
 * Official Single Source of Truth for Business Location
 */
export const businessLocation = {
  name: "Nandini Spa",
  address: "22, Ram Gopal Maheshwari Marg, Near City Bank, Indira Press Complex, Zone-I, Maharana Pratap Nagar, Bhopal, Madhya Pradesh 462011, India",
  city: "Bhopal",
  state: "Madhya Pradesh",
  country: "India",
  postalCode: "462011",
  latitude: 23.231228599999998,
  longitude: 77.43317379999999,
  placeUrl:
    "https://www.google.com/maps/search/?api=1&query=22%2C%20Ram%20Gopal%20Maheshwari%20Marg%2C%20Near%20City%20Bank%2C%20Indira%20Press%20Complex%2C%20Zone-I%2C%20Maharana%20Pratap%20Nagar%2C%20Bhopal%2C%20Madhya%20Pradesh%20462011%2C%20India",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=22%2C+Ram+Gopal+Maheshwari+Marg%2C+Near+City+Bank%2C+Indira+Press+Complex%2C+Zone-I%2C+Maharana+Pratap+Nagar%2C+Bhopal%2C+Madhya+Pradesh+462011%2C+India",
};

export const BUSINESS_CONFIG: BusinessConfig = {
  brandName: "Nandini Spa",
  brandShort: "Nandini Spa",
  tagline: "Sanctuary of Restorative Spa & Holistic Bodywork",
  shortDescription: "An exquisite restorative wellness and spa sanctuary in Bhopal, Madhya Pradesh. Uniting therapeutic deep-tissue bodywork, warm basalt stone care, authentic Ayurvedic rituals, and calming botanical aromatherapy in quiet, climate-controlled suites.",
  siteUrl: typeof import.meta !== "undefined" && import.meta.env?.VITE_SITE_URL ? import.meta.env.VITE_SITE_URL : "https://www.nandinispa.online",
  zipFileName: "nandini-spa-project.zip",
  
  // Official Brand Logo (From user horizontal lockup: media_1793003978134)
  logo: {
    horizontalUrl: "/nandini-logo-horizontal.png",
    fullUrl: "/nandini-logo-horizontal.png",
    emblemUrl: "/nandini-emblem.png",
    originalUrl: "/nandini-logo-horizontal-original.png",
    useFullBadgeInHeader: true,
  },

  // Official Location
  city: businessLocation.city,
  state: businessLocation.state,
  country: businessLocation.country,
  locality: "Indira Press Complex, Zone-I, Maharana Pratap Nagar",
  zipCode: "462011",
  streetAddressPlaceholder: "22, Ram Gopal Maheshwari Marg, Near City Bank, Indira Press Complex, Zone-I, Maharana Pratap Nagar, Bhopal, Madhya Pradesh 462011, India",
  isExactStreetAddressConfigured: true,

  // Contact Information
  email: "anilbhai00555@gmail.com",
  
  // Mobile / Phone configuration
  phone: "+91 90604 33848",
  phoneDisplayPlaceholder: "+91 90604 33848",
  isPhoneConfigured: true,

  // WhatsApp configuration
  whatsappNumber: "+91 90604 33848",
  isWhatsappConfigured: true,


  // Google Maps Integration — Official verified listing for Nandini Spa, Bhopal
  maps: {
    latitude: businessLocation.latitude,
    longitude: businessLocation.longitude,
    zoomLevel: 16,
    embedUrl: "https://maps.google.com/maps?q=22%2C%20Ram%20Gopal%20Maheshwari%20Marg%2C%20Near%20City%20Bank%2C%20Indira%20Press%20Complex%2C%20Zone-I%2C%20Maharana%20Pratap%20Nagar%2C%20Bhopal%2C%20Madhya%20Pradesh%20462011%2C%20India&t=&z=16&ie=UTF8&iwloc=B&output=embed",
    placeUrl: businessLocation.placeUrl,
    directionsUrl: businessLocation.directionsUrl,
    apiKey: typeof import.meta !== "undefined" ? import.meta.env?.VITE_GOOGLE_MAPS_API_KEY : undefined,
  },

  // Operating Hours — 24 Hours / 7 Days a week service
  hours: {
    weekday: "Open 24 Hours (Monday – Sunday)",
    weekend: "24/7 Round-the-Clock Service",
    notes: "Available 24 hours daily. Private suites prepared freshly for every guest. Walk-ins and reservations welcome.",
  },

  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    tripadvisor: "https://tripadvisor.com",
  },
};

/**
 * Helper utility to build dynamic map embed URL with marker pin from any address query
 */
export function getGoogleMapsEmbedUrl(query?: string, zoom = 16): string {
  // If no custom query is provided or query matches Nandini Spa, return the verified exact embed URL
  if (!query || query.includes("Nandini") || query.includes("Indira Press") || query.includes("Ram Gopal") || query.includes("Maharana Pratap Nagar")) {
    return BUSINESS_CONFIG.maps.embedUrl;
  }

  const apiKey = typeof import.meta !== "undefined" ? import.meta.env?.VITE_GOOGLE_MAPS_API_KEY : undefined;
  const encoded = encodeURIComponent(query);
  
  // If an official Google Maps Platform API key is available, use Maps Embed API Place mode with tracking
  if (apiKey && apiKey.trim()) {
    return `https://www.google.com/maps/embed/v1/place?key=${apiKey.trim()}&q=${encoded}&center=${BUSINESS_CONFIG.maps.latitude},${BUSINESS_CONFIG.maps.longitude}&zoom=${zoom}&solution_id=gmp_git_agentskills_v1`;
  }
  
  // Standard zero-config embed with exact location pin marker
  return `https://maps.google.com/maps?q=${encoded}&t=&z=${zoom}&ie=UTF8&iwloc=B&output=embed`;
}

/**
 * Helper utility to build navigation directions URL pointing to destination
 */
export function getGoogleMapsDirectionsUrl(destinationQuery?: string): string {
  if (!destinationQuery || destinationQuery.includes("Nandini") || destinationQuery.includes("Indira Press") || destinationQuery.includes("Ram Gopal") || destinationQuery.includes("Bhopal")) {
    return businessLocation.directionsUrl;
  }
  const encoded = encodeURIComponent(destinationQuery);
  return `https://www.google.com/maps/dir/?api=1&destination=${encoded}&travelmode=driving`;
}
