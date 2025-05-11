
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Добро пожаловать в мир азарта",
      subtitle: "Получите бонус 200% на первый депозит",
      cta: "Начать игру",
      image: "https://images.unsplash.com/photo-1604275689235-fdd5b81add52?q=80&w=2574&auto=format&fit=crop",
      accent: "from-[#9b87f5] to-[#7E69AB]"
    },
    {
      title: "Еженедельные турниры",
      subtitle: "Призовой фонд 1 000 000 рублей",
      cta: "Участвовать",
      image: "https://images.unsplash.com/photo-1531264993542-93c05cc6a87d?q=80&w=2670&auto=format&fit=crop",
      accent: "from-[#FEC6A1] to-[#FDE1D3]"
    },
    {
      title: "VIP-программа лояльности",
      subtitle: "Эксклюзивные привилегии для постоянных игроков",
      cta: "Подробнее",
      image: "https://images.unsplash.com/photo-1559349907-3b73f51fb082?q=80&w=2670&auto=format&fit=crop",
      accent: "from-[#D6BCFA] to-[#E5DEFF]"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide 
              ? "opacity-100 translate-x-0" 
              : "opacity-0 translate-x-full"
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img 
            src={slide.image} 
            alt={slide.title} 
            className="w-full h-full object-cover" 
          />
          
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <div className="mb-4 inline-block animate-bounce">
                  <span className={`px-4 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${slide.accent} text-white`}>
                    Специальное предложение
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold font-playfair mb-6 text-white leading-tight">{slide.title}</h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">{slide.subtitle}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className={`bg-gradient-to-r ${slide.accent} text-white hover:opacity-90 transition-opacity text-lg px-8 py-6`}>
                    {slide.cta}
                    <Icon name="ChevronRight" className="ml-2" />
                  </Button>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6">
                    <Icon name="Info" className="mr-2" />
                    Узнать больше
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
