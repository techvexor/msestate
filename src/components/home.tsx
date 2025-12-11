import Navigation from "./Navigation";
import Hero from "./Hero";
import SearchBar from "./SearchBar";
import FeaturedProperties from "./FeaturedProperties";
import TrustIndicators from "./TrustIndicators";
import ServicePillars from "./ServicePillars";
import LocationMap from "./LocationMap";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import { SEO, seoConfig } from "@/utils/seo";

function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "MS Estate",
    "url": "https://msestate.in",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://msestate.in/properties?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div className="w-full min-h-screen">
      <SEO
        title={seoConfig.home.title}
        description={seoConfig.home.description}
        keywords={seoConfig.home.keywords}
        canonical={seoConfig.home.canonical}
        structuredData={structuredData}
      />
      <Navigation />
      <Hero />
      <SearchBar />
      <FeaturedProperties />
      <TrustIndicators />
      <ServicePillars />
      <LocationMap />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default Home;
