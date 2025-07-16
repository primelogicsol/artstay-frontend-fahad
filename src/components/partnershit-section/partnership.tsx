"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function PartnershipSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Partner data with images from /images/partner/
  const partners = [
    { id: 1, name: "Partner 1", logo: "/images/partnership/1.png" },
    { id: 2, name: "Partner 2", logo: "/images/partnership/2.png" },
    { id: 3, name: "Partner 3", logo: "/images/partnership/3.png" },
    { id: 4, name: "Partner 4", logo: "/images/partnership/4.png" },
    { id: 5, name: "Partner 5", logo: "/images/partnership/5.png" },
    { id: 6, name: "Partner 6", logo: "/images/partnership/6.png" },
    { id: 7, name: "Partner 7", logo: "/images/partnership/7.png" },
    { id: 8, name: "Partner 8", logo: "/images/partnership/8.png" },
  ]
  const itemsPerSlide = 5
  const totalSlides = Math.ceil(partners.length / itemsPerSlide)

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [totalSlides])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const getCurrentPartners = () => {
    const startIndex = currentSlide * itemsPerSlide
    return partners.slice(startIndex, startIndex + itemsPerSlide)
  }

  return (
    <div className="w-full bg-transparent py-16 ">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="text-white px-3 py-1 rounded-md text-lg font-bold mr-2" style={{backgroundColor: 'rgb(0,83,128)'}}>in</div>
            <h2 className="text-2xl font-bold" style={{color: 'rgb(0,83,128)'}}>PARTNERSHIP</h2>
          </div>

          <p className="text-gray-600 text-sm max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the
            industry&apos;s standard dummy text ever since the 1500s.
          </p>
        </div>

        {/* Partner Logos Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-[#0085CC] rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Previous partners"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-[#0085CC] rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Next partners"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>

          {/* Partners Container */}
          <div className="overflow-hidden ">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="flex justify-center items-center space-x-8">
                    {partners.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((partner) => (
                      <div
                        key={partner.id}
                        className="flex-shrink-0 w-32 h-32 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center border border-gray-100"
                      >
                        <Image
                          src={partner.logo || "/placeholder.svg"}
                          alt={partner.name}
                          width={128}
                          height={128}
                          className="rounded-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? "bg-[#0085CC]" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Partner Count Info */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
         {getCurrentPartners().length} of {partners.length}
          </p>
        </div>
      </div>
    </div>
  )
}
