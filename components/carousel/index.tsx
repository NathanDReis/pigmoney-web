'use client';

import { useEffect, useState } from 'react';

interface Slide {
  backgroundImage: string;
  content: React.ReactNode;
}

interface CarouselProps {
  slides: Slide[];
  showIndicators?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  controls?: boolean;
}

export default function Carousel({ 
  slides, 
  showIndicators = true,
  autoPlay = false,
  autoPlayInterval = 5000, 
  controls = true,
}: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (!autoPlay || pause) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, pause, slides.length, autoPlayInterval]);


  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const stopAutoPlay = () => {
    setPause(true);
  }
  
  const startAutoPlay = () => {
    setTimeout(() => {
      setPause(false);
    }, 2000);
  }

  const handleIndicatorClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative w-[100%] h-[60vh] flex items-center justify-between overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute min-w-[100%] h-[60vh] transition-opacity duration-300 ${
            index === activeIndex ? 'z-10 opacity-100' : 'z-0 opacity-0'
          }`}
          style={{
            backgroundImage: `url('${slide.backgroundImage}')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute top-0 left-0 w-[100%] h-full bg-gradient-to-br from-[#ff6b57ab] to-transparent" />
          
          {/* Content */}
          <div className="relative z-10 w-[100%] h-full flex items-center justify-center cursor-default">
            {slide.content}
          </div>
        </div>
      ))}

      {/* Previous Button */}
      {controls && (
        <button
          onClick={handlePrev}
          onMouseEnter={stopAutoPlay}
          onMouseLeave={startAutoPlay}
          className="z-20 flex items-center justify-center bg-black/70 p-2.5 cursor-pointer transition-colors duration-200 m-2.5 rounded-full hover:bg-[#1d1d1d]"
          aria-label="Slide anterior"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 -960 960 960" 
            className="w-6 h-6 fill-white rotate-180"
          >
            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
          </svg>
        </button>
      )}

      {/* Indicators */}
      {showIndicators && (
        <div className="absolute bottom-0 left-0 z-20 w-[100%] h-[5vh] flex items-center justify-center gap-5">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleIndicatorClick(index)}
              onMouseEnter={stopAutoPlay}
              onMouseLeave={startAutoPlay}
              className={`w-[2.5vh] h-[2.5vh] rounded-full transition-colors duration-300 border-0 cursor-pointer ${
                index === activeIndex ? 'bg-[#ff6b57]' : 'bg-white'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Next Button */}
      {controls && (
        <button
          onClick={handleNext}
          onMouseEnter={stopAutoPlay}
          onMouseLeave={startAutoPlay}
          className="z-20 flex items-center justify-center bg-black/70 p-2.5 cursor-pointer transition-colors duration-200 m-2.5 rounded-full hover:bg-[#1d1d1d]"
          aria-label="Próximo slide"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 -960 960 960" 
            className="w-6 h-6 fill-white"
          >
            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
          </svg>
        </button>
      )}
    </div>
  );
}
