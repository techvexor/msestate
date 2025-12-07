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

function Home() {
  return (
    <div className="w-full min-h-screen">
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
