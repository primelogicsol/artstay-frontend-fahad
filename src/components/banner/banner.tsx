"use client"
import React, { useEffect, useRef, useState, useMemo } from 'react';
import { FaUserTie, FaMapMarkedAlt, FaRoute, FaSmileBeam } from 'react-icons/fa';

const banner = {
  title: "Call Our Agent To Book",
  subtitle: "Your Gateway to Authentic Cultural Experiences",
  ctaText: "Explore Now",
  ctaLink: "/explore",
  imageUrl: "/images/callbanner.jpg",
};

export const Banner = () => {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  const items = useMemo(() => [
    { icon: <FaUserTie size={24} />, number: 320, label: 'Pro Tour Guides' },
    { icon: <FaMapMarkedAlt size={24} />, number: 150, label: 'Tours are Completed' },
    { icon: <FaRoute size={24} />, number: 152, label: 'Traveling Experience' },
    { icon: <FaSmileBeam size={24} />, number: 523, label: 'Happy Customers' },
  ], []);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          items.forEach((item, index) => {
            let start = 0;
            const end = item.number;
            const duration = 1000;
            const increment = end / (duration / 16);

            const animate = () => {
              start += increment;
              if (start >= end) {
                start = end;
              } else {
                setTimeout(animate, 16);
              }
              setCounts((prev) => {
                const newCounts = [...prev];
                newCounts[index] = Math.round(start);
                return newCounts;
              });
            };
            animate();
          });
        }
      },
      { threshold: 0.5 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [items]);

  return (
    <div className='mt-8 md:mt-16 mb-8 md:mb-16'>
      <section
        ref={sectionRef}
        className="relative h-[30vh] md:h-[50vh] w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${banner.imageUrl})` }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: '#0085CC',
            mixBlendMode: 'multiply',
            opacity: 0.9,
          }}
        />
        
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="font-heading text-3xl font-bold md:text-5xl">{banner.title}</h1>
          <p className="mt-2 max-w-2xl font-text text-sm md:text-base">{banner.subtitle}</p>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full p-4 md:p-6" style={{ transform: 'translateY(50%)' }}>
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg shadow-sm hover:scale-105 transition-all duration-300 ease-in-out bg-white"
                >
                  <span className="text-2xl md:text-3xl text-brown-800">{item.icon}</span>
                  <p className="text-2xl md:text-3xl font-bold" style={{ color: 'rgb(0,83,128)' }}>
                    {counts[index]}
                  </p>
                  <p className="text-sm md:text-base mt-1" style={{ color: 'rgb(0,83,128)' }}>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};