"use client"


export default function Footer() {
  return (
    <footer className="bg-[rgb(0,83,128)] text-white py-12 border-t-4 border-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="font-heading text-xl md:text-2xl font-bold text-white-800 mb-4">Kashmir ArtStay</h3>
            <p className="font-text text-sm md:text-base text-gray-300 mb-4">
              Experience the soul of Kashmir through immersive craft tours and authentic artisan experiences. Discover
              traditional handicrafts and connect with local culture.
            </p>
            
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                </svg>
              </a>
            </div>
            {/* Need Help Box - Redesigned */}
            <div className="max-w-xs bg-transparent rounded-xl shadow-lg p-4 flex flex-col items-center space-y-2 mt-10 border border-dotted border-white-100">
              <div className="bg-blue-100 rounded-full p-2 mb-1">
                <svg className="w-7 h-7 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636a9 9 0 11-12.728 0M12 9v2m0 4h.01" />
                </svg>
              </div>
              <p className="font-heading font-semibold text-base text-white text-center">Need Help?</p>
              <p className="font-text text-xs text-blue-100 text-center">Our team is here to assist you with any questions or support you need. Reach out anytime!</p>
              <a href="mailto:info@kashmirartstay.com" className="inline-block w-full">
                  <button className="w-full bg-[#0085CC] hover:bg-[#0085CC]/50 text-white font-bold py-1.5 px-4 rounded-lg transition-colors text-sm mt-1">Contact Us</button>
              </a>
              <a href="tel:+911234567890" className="text-blue-200 text-xs hover:underline mt-1">or call +91 123 456 7890</a>
            </div>
          </div>

          {/* Quick Links & Business Listing */}
          <div>
            <h4 className="font-heading text-lg md:text-xl font-bold text-white mb-4">Quick Links</h4>
            <ul className="font-text text-sm md:text-base space-y-2 mb-6">
              <li>
                <a href="/about" className="text-gray-300 hover:text-blue-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/tours" className="text-gray-300 hover:text-blue-600 transition-colors">
                  Craft Tours
                </a>
              </li>
              <li>
                <a href="/experiences" className="text-gray-300 hover:text-blue-600 transition-colors">
                  Experiences
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-gray-300 hover:text-blue-600 transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-300 hover:text-blue-600 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
            <h4 className="font-heading text-lg md:text-xl font-bold text-white mb-4">Business Listing</h4>
            <ul className="font-text text-sm md:text-base space-y-2">
              <li>
                <a href="/artisans" className="text-gray-300 hover:text-blue-600 transition-colors">
                  Artisans
                </a>
              </li>
              <li>
                <a href="/craft-safari-organizers" className="text-gray-300 hover:text-blue-600 transition-colors">
                  Craft Safari Organizers
                </a>
              </li>
              <li>
                <a href="/craft-fair-organizers" className="text-gray-300 hover:text-blue-600 transition-colors">
                  Craft Fair Organizers
                </a>
              </li>
              <li>
                <a href="/craft-exhibition-organizers" className="text-gray-300 hover:text-blue-600 transition-colors">
                  Craft Exhibition Organizers
                </a>
              </li>
              <li>
                <a href="/craft-museum-organizers" className="text-gray-300 hover:text-blue-600 transition-colors">
                  Craft Museum Organizers
                </a>
              </li>
              <li>
                <a href="/craft-business-shops" className="text-gray-300 hover:text-blue-600 transition-colors">
                  Craft Business/Shops
                </a>
              </li>
              <li>
                <a href="/craft-photo-videography" className="text-gray-300 hover:text-blue-600 transition-colors">
                  Craft Photo/Videography
                </a>
              </li>
              <li>
                <a href="/tour-traveller-agents" className="text-gray-300 hover:text-blue-600 transition-colors">
                  Tour & Traveller agents
                </a>
              </li>
            </ul>
          </div>

          {/* Services & Affiliate Program */}
          <div>
            <h4 className="font-heading text-lg md:text-xl font-bold text-white mb-4">Our Services</h4>
            <ul className="font-text text-sm md:text-base space-y-2 mb-6">
              <li>
                <a href="/handicraft-tours" className="text-gray-300 hover:text-blue-600 transition-colors">
                  Handicraft Tours
                </a>
              </li>
              <li>
                <a href="/artisan-workshops" className="text-gray-300 hover:text-blue-600 transition-colors">
                  Artisan Workshops
                </a>
              </li>
              <li>
                <a href="/cultural-experiences" className="text-gray-300 hover:text-blue-600 transition-colors">
                  Cultural Experiences
                </a>
              </li>
              <li>
                <a href="/custom-packages" className="text-gray-300 hover:text-blue-600 transition-colors">
                  Custom Packages
                </a>
              </li>
              <li>
                <a href="/group-bookings" className="text-gray-300 hover:text-blue-600 transition-colors">
                  Group Bookings
                </a>
              </li>
            </ul>
            <h4 className="font-heading text-lg md:text-xl font-bold text-white mb-4">Affiliate Program</h4>
            <ul className="font-text text-sm md:text-base space-y-2">
              <li>
                <a href="/affiliate-program-overview" className="text-gray-300 hover:text-blue-600 transition-colors">
                  Program overview
                </a>
              </li>
              <li>
                <a href="/commission-structure" className="text-gray-300 hover:text-blue-600 transition-colors">
                  Commission structure
                </a>
              </li>
              <li>
                <a href="/affiliate-tools" className="text-gray-300 hover:text-blue-600 transition-colors">
                  Affiliate tools
                </a>
              </li>
              <li>
                <a href="/promotion-strategies" className="text-gray-300 hover:text-blue-600 transition-colors">
                  Promotion strategies
                </a>
              </li>
              <li>
                <a href="/application-process" className="text-gray-300 hover:text-blue-600 transition-colors">
                  Application process
                </a>
              </li>
              <li>
                <a href="/affiliate-support" className="text-gray-300 hover:text-blue-600 transition-colors">
                  Affiliate Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info & APIs */}
          <div>
            <h4 className="font-heading text-lg md:text-xl font-bold text-white mb-4">Contact Info</h4>
            <div className="font-text text-sm md:text-base space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-gray-300">Srinagar, Jammu & Kashmir, India 190001</p>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+911234567890" className="text-gray-300 hover:text-blue-600 transition-colors">
                  +91 123 456 7890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a
                  href="mailto:info@kashmirartstay.com"
                  className="text-gray-300 hover:text-blue-600 transition-colors"
                >
                  info@kashmirartstay.com
                </a>
              </div>
            </div>
            <h4 className="font-heading text-lg md:text-xl font-bold text-white mb-4 mt-20">APIs</h4>
            <ul className="font-text text-sm md:text-base space-y-2">
              <li>
                <a href="/api-documentation" className="text-gray-300 hover:text-blue-600 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="/api-installation" className="text-gray-300 hover:text-blue-600 transition-colors">
                  Installation
                </a>
              </li>
              <li>
                <a href="/api-how-to-use" className="text-gray-300 hover:text-blue-600 transition-colors">
                  How to use
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-text text-sm text-gray-400">
              © {new Date().getFullYear()} Kashmir ArtStay. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/privacy" className="font-text text-sm text-gray-400 hover:text-blue-600 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="font-text text-sm text-gray-400 hover:text-blue-600 transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="font-text text-sm text-gray-400 hover:text-blue-600 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}