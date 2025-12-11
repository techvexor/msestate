import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
}

export function SEO({
  title,
  description,
  keywords,
  canonical,
  ogImage = 'https://msestate.in/og-image.jpg',
  ogType = 'website',
  structuredData,
}: SEOProps) {
  const fullTitle = `${title} | MS Estate`;
  const url = canonical || 'https://msestate.in';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}

// Predefined SEO configurations for each page
export const seoConfig = {
  home: {
    title: 'Premium Real Estate Properties in Noida, Greater Noida & NCR',
    description: 'MS Estate offers luxury apartments, villas, and commercial properties in Noida, Greater Noida & NCR. RERA certified real estate consultants with 15+ years experience. Find your dream property today!',
    keywords: 'real estate noida, properties in greater noida, apartments in noida, villas in noida, commercial property noida, buy property noida, MS Estate',
    canonical: 'https://msestate.in/',
  },
  properties: {
    title: 'Properties for Sale & Rent in Noida - Apartments, Villas, Commercial',
    description: 'Browse 500+ verified properties in Noida & Greater Noida. Luxury apartments, premium villas, commercial spaces. Ready to move & under construction properties. RERA approved listings.',
    keywords: 'properties for sale noida, apartments for sale noida, villas for sale noida, commercial property noida, buy apartment noida, rent property noida, residential property noida',
    canonical: 'https://msestate.in/properties',
  },
  services: {
    title: 'Real Estate Services in Noida - Property Buying, Selling & Consultation',
    description: 'Expert real estate services in Noida & NCR. Property buying assistance, selling support, legal documentation, home loans, property valuation, and investment consultation. 15+ years experience.',
    keywords: 'real estate services noida, property consultant noida, property buying services, property selling services, home loan assistance, property valuation noida, real estate consultation',
    canonical: 'https://msestate.in/services',
  },
  about: {
    title: 'About MS Estate - RERA Certified Real Estate Consultants in Noida',
    description: 'MS Estate is a RERA certified real estate company in Noida with 15+ years experience. 500+ properties sold, 1000+ happy clients. Your trusted partner for property buying, selling & investment.',
    keywords: 'about ms estate, real estate company noida, RERA certified property dealer, property consultant noida, trusted real estate agent noida',
    canonical: 'https://msestate.in/about',
  },
  contact: {
    title: 'Contact MS Estate - Real Estate Consultants in Noida | Get Free Consultation',
    description: 'Contact MS Estate for property buying, selling & investment consultation in Noida & NCR. Call +91-9999091927 or visit our office in Sector 90, Noida. Free property consultation available.',
    keywords: 'contact ms estate, real estate consultant noida contact, property dealer noida contact, ms estate phone number, ms estate address noida',
    canonical: 'https://msestate.in/contact',
  },
};
