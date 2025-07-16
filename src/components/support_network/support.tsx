"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function SupportNetwork() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Support network partners data
  const partners = [
    {
      id: 1,
      name: "De Koshur",
      description: "e-Commerce",
      logo: "/images/support_network/1.png",
      
    },
    {
      id: 2,
      name: "KACR Craftlore",
      description: "Craft Repository",
      logo: "/images/support_network/2_.png",
    },
    {
      id: 3,
      name: "Hamadan",
      description: "Craft Valley Think Tank",
      subtitle: "since 1947",
      logo: "/images/support_network/3.png",
    },
    {
      id: 4,
      name: "Connect Portal",
      description: "Craft Vendor Portal",
      logo: "/images/support_network/4.png",
    },
    {
      id: 5,
      name: "P Logic",
      description: "IT & Marketing",
      logo: "/images/support_network/5.png",
    },
    {
      id: 6,
      name: "De Koshur",
      description: "e-Commerce",
      logo: "/images/support_network/6.png",
    },
  ]

  const itemsPerSlide = 5
  const totalSlides = Math.ceil(partners.length / itemsPerSlide)

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [totalSlides])

  return (
    <div className="w-full">
      <div className="flex min-h-[50px] border border-[#0085CC] border-dotted">
        {/* Left Section - Title */}
        <div className="bg-[rgb(0,83,128)] flex flex-col items-center justify-center px-6 py-8 min-w-[240px] relative overflow-hidden">
          <Image 
            src="/images/support_network.png"
            alt="Support Network Background"
            fill
            className="object-contain m-auto"
          />
        </div>
        {/* Right Section - Partners Slider */}
        <div className="flex-1 flex items-stretch justify-center py-4 px-4 bg-[#005380] hover:bg-[rgb(0,133,204)] transition-all duration-500 ease-in-out">
          <div className="w-full max-w-5xl transition-transform duration-300 ease-in-out hover:scale-105">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="flex justify-around items-center space-x-4 h-full">
                      {partners.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((partner) => (
                        <div key={`${partner.id}-${slideIndex}`} className="flex-shrink-0 flex items-center justify-center h-full">
                          <Image
                            src={partner.logo || "/placeholder.svg"}
                            alt={partner.name}
                            width={192}
                            height={128}
                            className="object-contain"
                            style={{ background: 'transparent' }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === currentSlide ? "bg-white" : "bg-gray-600"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}