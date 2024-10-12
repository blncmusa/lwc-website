import React, { useState, useEffect } from 'react';
import heroImage2 from '../../assets/doctor-patient.jpg';
import heroImage4 from "../../assets/doctor-visit.webp"
import heroImage5 from "../../assets/doctor-surgery.jpg"

const HeroImage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedWidth, setExpandedWidth] = useState(400);

  const images = [
    { src: heroImage5, alt: "Doctor Xray" },
    { src: heroImage2, alt: "Doctor with Patient" },
    { src: heroImage4, alt: "Doctor Visit" },
  ];

  // Rotate image every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      setExpandedWidth(600); // Reset width after each rotation
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length]);

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
    setExpandedWidth(expandedWidth === 800 ? 600 : 800);
  };

  return (
    <div className="w-full md:w-1/2 h-[600px] flex items-center justify-center">
      <div className="flex space-x-2">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`transition-all rounded-[10px] duration-1000 cursor-pointer ${
              index === activeIndex ? 'z-10' : 'z-0'
            }`}
            style={{
              width: index === activeIndex ? `${expandedWidth}px` : '200px',
              height: '400px',
              objectFit: 'cover',
              opacity: index === activeIndex ? 1 : 0.8,
              minWidth: '100px',
            }}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroImage;