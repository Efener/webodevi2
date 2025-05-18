import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Slider() {
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch('http://localhost:5000/api/slidernews')
      .then(res => res.json())
      .then(data => setSlides(data))
      .catch(err => console.error('Slider API fetch error:', err));
  }, []);

  const total = slides.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  if (slides.length === 0) return <div>Yükleniyor...</div>;

  const currentSlide = slides[current];
  const placeholderImg = `https://placehold.co/800x400?text=${encodeURIComponent(currentSlide.heading)}`;

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <Link to={currentSlide._id ? `/news/${currentSlide._id}` : '#'}>
        <div className="relative h-64 sm:h-80 md:h-96 cursor-pointer">
          <img
            src={placeholderImg}
            alt={currentSlide.heading}
            className="w-full h-full object-cover transition duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 text-white">
            <h2 className="text-xl sm:text-2xl font-bold underline cursor-pointer">{currentSlide.heading}</h2>
          </div>
        </div>
      </Link>
      {/* Sol ve Sağ Oklar */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-gray-800 p-2 rounded-full shadow"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-gray-800 p-2 rounded-full shadow"
      >
        ▶
      </button>
      {/* Slide göstergesi */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full ${current === idx ? 'bg-white' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
}
