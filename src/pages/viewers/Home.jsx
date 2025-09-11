import  { useState, useEffect, useRef } from "react";
import { 
  Play, 
  Pause, 
  ChevronLeft, 
  ChevronRight, 
  Circle,
  Calendar,
  BookOpen
} from "lucide-react";

const images = [
  "/images/img1.png",
  "/images/img2.png",
  "/images/img3.png",
  "/images/img2.png",
];

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  // Function to jump to previous slide
  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Function to jump to next slide
  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // Pause/play toggle
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Slide container */}
      <div
        ref={slideRef}
        className="flex transition-transform duration-700 ease-in-out h-full w-full"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <img
              src={src}
              alt={`slide-${index}`}
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Overlay content - Pushed downward */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 text-center z-20 px-4 w-full max-w-4xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-lg mb-3">
          Find Support, Learn and Grow
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-white drop-shadow-md mb-6 max-w-xl mx-auto">
          Explore insightful events and access educational resources to enhance your well-being
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <button className="bg-gradient-to-r from-green-600 to-teal-500 text-white px-5 py-2.5 rounded-lg font-semibold hover:from-green-700 hover:to-teal-600 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
            <Calendar size={18} />
            Book a Session
          </button>
          <button className="bg-white text-green-700 px-5 py-2.5 rounded-lg font-semibold hover:bg-green-50 transition-all shadow-md hover:shadow-lg border border-green-100 flex items-center justify-center gap-2">
            <BookOpen size={18} />
            Explore Resources
          </button>
        </div>
      </div>

      {/* Controls panel - Updated colors */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 rounded-full flex items-center px-3 py-2 gap-2 sm:gap-3 shadow-lg select-none">
        {/* Pause/Play Icon */}
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause" : "Play"}
          className="text-gray-700 hover:text-green-600 focus:outline-none p-1 transition-colors"
        >
          {isPlaying ? (
            <Pause size={16} />
          ) : (
            <Play size={16} />
          )}
        </button>

        {/* Previous Arrow */}
        <button
          onClick={goPrev}
          aria-label="Previous"
          className="text-gray-700 hover:text-green-600 focus:outline-none p-1 transition-colors"
        >
          <ChevronLeft size={16} />
        </button>

        {/* Navigation dots */}
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className="p-1"
          >
            <Circle 
              size={8} 
              fill={index === currentIndex ? "currentColor" : "transparent"} 
              color={index === currentIndex ? "#059669" : "#9CA3AF"} 
              className="transition-colors"
            />
          </button>
        ))}

        {/* Next Arrow */}
        <button
          onClick={goNext}
          aria-label="Next"
          className="text-gray-700 hover:text-green-600 focus:outline-none p-1 transition-colors"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Indicator of current slide */}
      <div className="absolute top-6 right-6 bg-black bg-opacity-50 text-white text-xs py-1 px-2 rounded-full z-20">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default Home;