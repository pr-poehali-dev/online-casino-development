import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Погрузись в глубины азарта",
      subtitle: "Получи бонус 200% на первый депозит и 50 фриспинов",
      cta: "Начать игру",
      image:
        "https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=2670&auto=format&fit=crop",
      accent: "from-teender-primary to-teender-secondary",
    },
    {
      title: "Турнир 'Морские сокровища'",
      subtitle: "Призовой фонд 1 000 000 рублей каждую неделю",
      cta: "Участвовать",
      image:
        "https://images.unsplash.com/photo-1498623116890-37e912163d5d?q=80&w=2670&auto=format&fit=crop",
      accent: "from-teender-accent to-teender-accent/80",
    },
    {
      title: "VIP-программа 'Глубоководный клуб'",
      subtitle: "Эксклюзивные привилегии для постоянных игроков",
      cta: "Подробнее",
      image:
        "https://images.unsplash.com/photo-1551244072-3fb55c5b66a5?q=80&w=2670&auto=format&fit=crop",
      accent: "from-teender-success to-teender-secondary",
    },
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
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-wave-pattern bg-repeat-x opacity-30 z-10 animate-wave"></div>

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full"
          }`}
        >
          <div className="absolute inset-0 bg-teender-dark/60 z-10"></div>
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <div className="mb-4 inline-block animate-bounce">
                  <span
                    className={`px-4 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${slide.accent} text-white`}
                  >
                    Специальное предложение
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold font-playfair mb-6 text-white leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className={`bg-gradient-to-r ${slide.accent} text-white hover:opacity-90 transition-opacity text-lg px-8 py-6`}
                  >
                    {slide.cta}
                    <Icon name="ChevronRight" className="ml-2" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6"
                  >
                    <Icon name="Info" className="mr-2" />
                    Узнать больше
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Bubbles animation */}
          <div className="absolute bottom-20 left-1/4 h-4 w-4 rounded-full bg-teender-accent/50 animate-bubbles"></div>
          <div className="absolute bottom-10 left-1/3 h-3 w-3 rounded-full bg-teender-accent/50 animate-bubbles delay-1000"></div>
          <div className="absolute bottom-16 left-2/3 h-5 w-5 rounded-full bg-teender-accent/50 animate-bubbles delay-500"></div>
          <div className="absolute bottom-12 left-3/4 h-2 w-2 rounded-full bg-teender-accent/50 animate-bubbles delay-1500"></div>
          <div className="absolute bottom-24 left-1/5 h-3 w-3 rounded-full bg-teender-accent/50 animate-bubbles delay-750"></div>
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-teender-accent w-8" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
