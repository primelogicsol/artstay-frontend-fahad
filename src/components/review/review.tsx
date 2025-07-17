"use client"

import { useState, useEffect, useCallback } from "react"

const Review = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      text: "An absolutely incredible experience! The artisan workshops were so authentic and the guides were knowledgeable. I learned so much about Kashmiri handicrafts and even created my own piece to take home.",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Toronto, Canada",
      rating: 5,
      text: "Kashmir ArtStay exceeded all my expectations. The craft tours were beautifully organized, and meeting the local artisans was the highlight of my trip. Highly recommend for anyone interested in authentic cultural experiences.",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      name: "Emma Thompson",
      location: "London, UK",
      rating: 5,
      text: "What a wonderful way to experience Kashmir! The combination of beautiful landscapes and rich craft traditions made this trip unforgettable. The team was professional and passionate about their work.",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 4,
      name: "David Rodriguez",
      location: "Barcelona, Spain",
      rating: 5,
      text: "I&apos;ve traveled extensively, but this craft safari was unique. Learning traditional weaving techniques from master artisans while surrounded by Kashmir's natural beauty was truly special.",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 5,
      name: "Priya Sharma",
      location: "Mumbai, India",
      rating: 5,
      text: "As someone passionate about traditional crafts, this experience was perfect. The attention to detail and respect for local culture made this more than just a tour - it was an education.",
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length)
  }, [reviews.length])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextSlide, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, nextSlide])

  const renderStars = (rating: number) => {
    return Array.from({length: 5}).map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <section style={{ backgroundColor: 'rgb(245,251,255)' }} className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-4xl font-extrabold" style={{ color: 'rgb(0,83,128)' }} >
            Their Journey, Their Words
          </h2>
          <p className="font-text text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Every traveler carries home a story, hear how they connected with Kashmir’s soul through its crafts, people, and places.
          </p>
        </div>

        {/* Review Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div
            className="overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg shadow-lg p-8 hover:bg-[#0085CC]/5 mx-auto max-w-3xl border border-blue-800 border-dotted">
                    <div className="flex items-center mb-6">
                      {/* <img
                        src={review.image ||5"/placeholder.svg"}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      /> */}
                      <div>
                        <h4 className="font-heading text-base md:text-xl font-bold" style={{ color: 'rgb(49,165,221)' }}>{review.name}</h4>
                        <p className="font-text text-sm" style={{ color: 'rgb(49,165,221)' }}>{review.location}</p>
                      </div>
                      <div className="ml-auto flex space-x-1">{renderStars(review.rating)}</div>
                    </div>
                    <blockquote className="font-text text-base md:text-lg text-gray-700 leading-relaxed">
                      &ldquo;{review.text}&rdquo;
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-[#0085CC] rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
            aria-label="Previous review"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className=" absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-[#0085CC] rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
            aria-label="Next review"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="font-heading text-2xl md:text-3xl font-extrabold text-blue-600 mb-2" style={{ color: 'rgb(49,165,221)' }}>500+</div>
            <p className="font-text text-sm md:text-base text-gray-600">Happy Travelers</p>
          </div>
          <div className="text-center">
            <div className="font-heading text-2xl md:text-3xl font-extrabold text-blue-600 mb-2" style={{ color: 'rgb(49,165,221)' }}>4.9</div>
            <p className="font-text text-sm md:text-base text-gray-600">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="font-heading text-2xl md:text-3xl font-extrabold text-blue-600 mb-2" style={{ color: 'rgb(49,165,221)' }}>50+</div>
            <p className="font-text text-sm md:text-base text-gray-600">Craft Experiences</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Review
