import { useEffect, useRef } from 'react';

const brands = [
  { name: 'Emaar Properties', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Emaar_Properties_logo.svg/200px-Emaar_Properties_logo.svg.png' },
  { name: 'Dubai Properties', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Dubai_Properties_logo.svg/200px-Dubai_Properties_logo.svg.png' },
  { name: 'Nakheel', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Nakheel_Properties_logo.svg/200px-Nakheel_Properties_logo.svg.png' },
  { name: 'DAMAC Properties', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/DAMAC_Properties_logo.svg/200px-DAMAC_Properties_logo.svg.png' },
  { name: 'Meraas', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Meraas_logo.svg/200px-Meraas_logo.svg.png' },
  { name: 'Sobha Realty', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Sobha_Realty_logo.svg/200px-Sobha_Realty_logo.svg.png' },
  { name: 'Azizi Developments', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Azizi_Developments_logo.svg/200px-Azizi_Developments_logo.svg.png' },
  { name: 'Deyaar', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Deyaar_logo.svg/200px-Deyaar_logo.svg.png' },
  { name: 'Aldar Properties', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Aldar_Properties_logo.svg/200px-Aldar_Properties_logo.svg.png' },
  { name: 'Omniyat', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/o/o1/Omniyat_logo.svg/200px-Omniyat_logo.svg.png' },
];

export default function TrustedBrands() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 1;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
    };

    const intervalId = setInterval(scroll, 30);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Brands
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We partner with Dubai's most prestigious property developers
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-12 overflow-x-hidden"
            style={{ scrollBehavior: 'auto' }}
          >
            {/* Duplicate brands for seamless loop */}
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-28 flex items-center justify-center bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-5 border border-gray-100"
              >
                <div className="flex flex-col items-center justify-center w-full h-full">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden h-12 w-full bg-gradient-to-r from-gray-100 to-gray-200 rounded flex items-center justify-center">
                    <span className="text-sm text-gray-600 font-bold">
                      {brand.name.split(' ')[0]}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 font-medium mt-2 text-center">
                    {brand.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
