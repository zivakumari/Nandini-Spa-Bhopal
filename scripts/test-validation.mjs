import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const distDir = path.join(rootDir, 'dist');

console.log('--- Starting Automated SEO, Schema & File Validation ---');

let passedTests = 0;
let totalTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    console.log(`PASS: ${message}`);
    passedTests++;
  } else {
    console.error(`FAIL: ${message}`);
  }
}

const CANONICAL_DOMAIN = 'https://www.nandinispa.online';

// 1. Validate sitemap.xml
const sitemapPath = path.join(distDir, 'sitemap.xml');
assert(fs.existsSync(sitemapPath), 'dist/sitemap.xml exists');
if (fs.existsSync(sitemapPath)) {
  const content = fs.readFileSync(sitemapPath, 'utf8');
  assert(content.includes('<urlset'), 'sitemap.xml has <urlset>');
  assert(content.includes(`${CANONICAL_DOMAIN}/`), 'sitemap.xml contains homepage');
  assert(content.includes(`${CANONICAL_DOMAIN}/massage-centre-mp-nagar`), 'sitemap.xml contains /massage-centre-mp-nagar');
  assert(content.includes(`${CANONICAL_DOMAIN}/full-body-massage`), 'sitemap.xml contains /full-body-massage');
  assert(content.includes(`${CANONICAL_DOMAIN}/couple-spa`), 'sitemap.xml contains /couple-spa');
  assert(content.includes(`${CANONICAL_DOMAIN}/swedish-massage`), 'sitemap.xml contains /swedish-massage');
  assert(content.includes(`${CANONICAL_DOMAIN}/aromatherapy-massage`), 'sitemap.xml contains /aromatherapy-massage');
  assert(content.includes(`${CANONICAL_DOMAIN}/luxury-spa`), 'sitemap.xml contains /luxury-spa');
  assert(content.includes(`${CANONICAL_DOMAIN}/thai-massage`), 'sitemap.xml contains /thai-massage');
  assert(content.includes(`${CANONICAL_DOMAIN}/booking`), 'sitemap.xml contains /booking');
  assert(!content.includes('/404'), 'sitemap.xml correctly excludes 404 page');
  assert(!content.includes('github.io'), 'sitemap.xml contains zero github.io references');
}

// 2. Validate robots.txt
const robotsPath = path.join(distDir, 'robots.txt');
assert(fs.existsSync(robotsPath), 'dist/robots.txt exists');
if (fs.existsSync(robotsPath)) {
  const content = fs.readFileSync(robotsPath, 'utf8');
  assert(content.includes('User-agent: *'), 'robots.txt allows all crawlers');
  assert(content.includes('Allow: /'), 'robots.txt allows root and pages');
  assert(content.includes('Allow: /assets/'), 'robots.txt explicitly allows assets directory for rendering');
  assert(content.includes(`Sitemap: ${CANONICAL_DOMAIN}/sitemap.xml`), 'robots.txt points to canonical sitemap');
  assert(content.includes('Disallow: /*.zip$'), 'robots.txt blocks private zip files');
  assert(content.includes('Disallow: /404'), 'robots.txt blocks /404');
  assert(!content.includes('github.io'), 'robots.txt contains zero github.io references');
}

// 2a. Validate vercel.json headers & host redirects
const vercelConfigPath = path.join(rootDir, 'vercel.json');
assert(fs.existsSync(vercelConfigPath), 'vercel.json exists');
if (fs.existsSync(vercelConfigPath)) {
  const vContent = fs.readFileSync(vercelConfigPath, 'utf8');
  assert(vContent.includes('text/plain; charset=UTF-8'), 'vercel.json sets text/plain charset for robots.txt');
  assert(vContent.includes('application/xml; charset=UTF-8'), 'vercel.json sets application/xml charset for sitemap.xml');
  assert(vContent.includes('must-revalidate'), 'vercel.json enforces must-revalidate on robots.txt and sitemap.xml');
  assert(vContent.includes('https://www.nandinispa.online/$1'), 'vercel.json redirects non-www to canonical www domain');
}

// 2b. Validate Google Maps Integration & Official Address
const NEW_MAPS_EMBED_URL = "https://maps.google.com/maps?q=22%2C%20Ram%20Gopal%20Maheshwari%20Marg%2C%20Near%20City%20Bank%2C%20Indira%20Press%20Complex%2C%20Zone-I%2C%20Maharana%20Pratap%20Nagar%2C%20Bhopal%2C%20Madhya%20Pradesh%20462011%2C%20India&t=&z=16&ie=UTF8&iwloc=B&output=embed";
const NEW_DIRECTIONS_URL = "https://www.google.com/maps/dir/?api=1&destination=22%2C+Ram+Gopal+Maheshwari+Marg%2C+Near+City+Bank%2C+Indira+Press+Complex%2C+Zone-I%2C+Maharana+Pratap+Nagar%2C+Bhopal%2C+Madhya+Pradesh+462011%2C+India";
const NEW_SEARCH_URL = "https://www.google.com/maps/search/?api=1&query=22%2C%20Ram%20Gopal%20Maheshwari%20Marg%2C%20Near%20City%20Bank%2C%20Indira%20Press%20Complex%2C%20Zone-I%2C%20Maharana%20Pratap%20Nagar%2C%20Bhopal%2C%20Madhya%20Pradesh%20462011%2C%20India";
const OFFICIAL_ADDRESS = "22, Ram Gopal Maheshwari Marg, Near City Bank, Indira Press Complex, Zone-I, Maharana Pratap Nagar, Bhopal, Madhya Pradesh 462011, India";

const businessConfigPath = path.join(rootDir, 'src', 'config', 'business.ts');
assert(fs.existsSync(businessConfigPath), 'src/config/business.ts exists');
if (fs.existsSync(businessConfigPath)) {
  const bContent = fs.readFileSync(businessConfigPath, 'utf8');
  assert(bContent.includes(NEW_MAPS_EMBED_URL), 'business.ts contains new exact Google Maps embed URL for Nandini Spa');
  assert(bContent.includes(OFFICIAL_ADDRESS), 'business.ts contains full official new business address');
  assert(bContent.includes('Ram Gopal Maheshwari Marg'), 'business.ts contains Ram Gopal Maheshwari Marg');
  assert(bContent.includes('Indira Press Complex'), 'business.ts contains Indira Press Complex');
  assert(bContent.includes('Zone-I'), 'business.ts contains Zone-I');
  assert(bContent.includes('462011'), 'business.ts contains postal code 462011');
  assert(bContent.includes('23.231228599999998'), 'business.ts contains verified latitude 23.231228599999998');
  assert(bContent.includes('77.43317379999999'), 'business.ts contains verified longitude 77.43317379999999');
  assert(bContent.includes(NEW_DIRECTIONS_URL), 'business.ts directions URL references new official address');
  assert(bContent.includes(NEW_SEARCH_URL), 'business.ts placeUrl references new Google Maps search URL');
  assert(bContent.includes('9:00 AM') && bContent.includes('10:00 PM'), 'business.ts specifies verified daily hours (9:00 AM – 10:00 PM)');
  assert(!bContent.includes('24/7'), 'business.ts contains zero unverified 24/7 claims');
  assert(bContent.includes('anilbhai00555@gmail.com'), 'business.ts contains new official email anilbhai00555@gmail.com');
  assert(!new RegExp(['karan','bhai'].join(''), 'i').test(bContent), 'business.ts contains zero old email references');
  assert(!bContent.includes('github.io'), 'business.ts contains zero github.io references');
  assert(!bContent.includes('Anna Nagar'), 'business.ts contains zero old Anna Nagar references');
}

// 2c. Validate Verified Service Hours Schema in index.html
const indexHtmlPath = path.join(rootDir, 'index.html');
assert(fs.existsSync(indexHtmlPath), 'index.html exists');
if (fs.existsSync(indexHtmlPath)) {
  const iContent = fs.readFileSync(indexHtmlPath, 'utf8');
  assert(iContent.includes('"opens": "09:00"') && iContent.includes('"closes": "22:00"'), 'index.html Schema.org specifies verified daily hours (09:00 to 22:00)');
  assert(iContent.includes('9:00 AM – 10:00 PM'), 'index.html noscript specifies verified daily operating hours');
  assert(!iContent.includes('24/7'), 'index.html contains zero unverified 24/7 claims');
  assert(iContent.includes('anilbhai00555@gmail.com'), 'index.html contains new official email anilbhai00555@gmail.com');
  assert(!new RegExp(['karan','bhai'].join(''), 'i').test(iContent), 'index.html contains zero old email references');
  assert(iContent.includes('22, Ram Gopal Maheshwari Marg'), 'index.html contains new official address in structured data');
  assert(iContent.includes('Indira Press Complex'), 'index.html contains Indira Press Complex');
  assert(iContent.includes('462011'), 'index.html contains postal code 462011');
  assert(iContent.includes(CANONICAL_DOMAIN), 'index.html has canonical domain');
  assert(!iContent.includes('github.io'), 'index.html contains zero github.io references');
  assert(!iContent.includes('Anna Nagar'), 'index.html contains zero old Anna Nagar references');
}

const mapsEmbedComponentPath = path.join(rootDir, 'src', 'components', 'GoogleMapsEmbed.tsx');
assert(fs.existsSync(mapsEmbedComponentPath), 'src/components/GoogleMapsEmbed.tsx exists');
if (fs.existsSync(mapsEmbedComponentPath)) {
  const gContent = fs.readFileSync(mapsEmbedComponentPath, 'utf8');
  assert(gContent.includes('title="Nandini Spa location on Google Maps"'), 'GoogleMapsEmbed.tsx uses meaningful title attribute');
  assert(gContent.includes('loading="lazy"'), 'GoogleMapsEmbed.tsx preserves lazy loading');
  assert(gContent.includes('referrerPolicy="strict-origin-when-cross-origin"'), 'GoogleMapsEmbed.tsx preserves referrerpolicy');
  assert(gContent.includes('allowFullScreen'), 'GoogleMapsEmbed.tsx enables allowFullScreen');
}

// 3. Validate Prerendered HTML routes
const routesToCheck = [
  { file: 'index.html', title: 'Spa in Bhopal', canonical: `${CANONICAL_DOMAIN}/` },
  { file: 'about/index.html', title: 'About Nandini Spa', canonical: `${CANONICAL_DOMAIN}/about` },
  { file: 'services/index.html', title: 'Spa Services', canonical: `${CANONICAL_DOMAIN}/services` },
  { file: 'massage-centre-mp-nagar/index.html', title: 'Massage Centre in MP Nagar', canonical: `${CANONICAL_DOMAIN}/massage-centre-mp-nagar` },
  { file: 'full-body-massage/index.html', title: 'Full Body Massage in Bhopal', canonical: `${CANONICAL_DOMAIN}/full-body-massage` },
  { file: 'couple-spa/index.html', title: 'Couple Spa in Bhopal', canonical: `${CANONICAL_DOMAIN}/couple-spa` },
  { file: 'swedish-massage/index.html', title: 'Swedish Massage in Bhopal', canonical: `${CANONICAL_DOMAIN}/swedish-massage` },
  { file: 'aromatherapy-massage/index.html', title: 'Aromatherapy Massage in Bhopal', canonical: `${CANONICAL_DOMAIN}/aromatherapy-massage` },
  { file: 'luxury-spa/index.html', title: 'Luxury Spa in Bhopal', canonical: `${CANONICAL_DOMAIN}/luxury-spa` },
  { file: 'thai-massage/index.html', title: 'Thai Massage in Bhopal', canonical: `${CANONICAL_DOMAIN}/thai-massage` },
  { file: 'booking/index.html', title: 'Book Spa Appointment', canonical: `${CANONICAL_DOMAIN}/booking` },
  { file: 'gallery/index.html', title: 'Sanctuary Photo Gallery', canonical: `${CANONICAL_DOMAIN}/gallery` },
  { file: 'contact/index.html', title: 'Contact Nandini Spa', canonical: `${CANONICAL_DOMAIN}/contact` },
  { file: 'privacy-policy/index.html', title: 'Privacy Policy', canonical: `${CANONICAL_DOMAIN}/privacy-policy` },
  { file: 'terms/index.html', title: 'Terms & Sanctuary Etiquette', canonical: `${CANONICAL_DOMAIN}/terms` },
  { file: '404.html', title: 'Page Not Found (404)', canonical: `${CANONICAL_DOMAIN}/404`, robots: 'noindex, follow' },
];

for (const r of routesToCheck) {
  const filePath = path.join(distDir, r.file);
  assert(fs.existsSync(filePath), `HTML file exists: ${r.file}`);
  if (fs.existsSync(filePath)) {
    const html = fs.readFileSync(filePath, 'utf8');
    assert(html.includes(r.title), `${r.file} contains expected title keyword (${r.title})`);
    assert(html.includes(`canonical" href="${r.canonical}"`), `${r.file} has correct absolute canonical URL (${r.canonical})`);
    
    if (r.robots) {
      assert(html.includes(`robots" content="${r.robots}"`), `${r.file} has explicit robots directive (${r.robots})`);
    } else {
      assert(html.includes('robots" content="index, follow"'), `${r.file} has index, follow robots directive`);
    }

    assert(html.includes('property="og:title"'), `${r.file} has Open Graph title`);
    assert(html.includes('property="og:image"'), `${r.file} has Open Graph image`);
    assert(html.includes('name="twitter:card"'), `${r.file} has Twitter card`);
    assert(html.includes('application/ld+json'), `${r.file} has JSON-LD structured data`);
    assert(html.includes('<noscript>'), `${r.file} has static noscript fallback for non-JS crawlers`);
    assert(!html.includes('github.io'), `${r.file} contains zero github.io references`);
    const oldEmailPattern = new RegExp(['karan','bhai'].join(''), 'i');
    assert(!oldEmailPattern.test(html), `${r.file} contains zero old email references`);
    if (r.file !== '404.html') {
      assert(html.includes('anilbhai00555@gmail.com'), `${r.file} contains official business email anilbhai00555@gmail.com`);
      assert(html.includes('22, Ram Gopal Maheshwari Marg'), `${r.file} contains Ram Gopal Maheshwari Marg in new official address`);
      assert(html.includes('Indira Press Complex'), `${r.file} contains Indira Press Complex in new official address`);
      assert(html.includes('Zone-I'), `${r.file} contains Zone-I in new official address`);
      assert(html.includes('462011'), `${r.file} contains postal code 462011`);
      assert(!html.includes('Anna Nagar'), `${r.file} contains zero old Anna Nagar references`);
    }

    // Verify JSON-LD parses cleanly
    const jsonLdMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
    assert(jsonLdMatch !== null, `${r.file} contains JSON-LD script block`);
    if (jsonLdMatch) {
      try {
        const parsed = JSON.parse(jsonLdMatch[1]);
        assert(parsed['@context'] === 'https://schema.org', `${r.file} JSON-LD has schema.org context`);
        assert(parsed['@type'] !== undefined || parsed['@graph'] !== undefined, `${r.file} JSON-LD has @type or @graph`);
      } catch (err) {
        assert(false, `${r.file} JSON-LD parse error: ${err.message}`);
      }
    }
  }
}

console.log(`\nValidation Summary: ${passedTests} / ${totalTests} tests passed.`);
if (passedTests === totalTests) {
  console.log('SUCCESS: All Technical SEO, Sitemap, Robots, and Schema tests passed!');
  process.exit(0);
} else {
  console.error('FAILURE: Some tests failed.');
  process.exit(1);
}