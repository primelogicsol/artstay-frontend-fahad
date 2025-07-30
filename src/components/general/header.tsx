"use client";

import { LogIn, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, type FC } from "react";
import { FaFacebook, FaLinkedin, FaSignal, FaTwitter } from "react-icons/fa6";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { LoginDialog } from "~/components/general/login-dialog";
import { useSession } from "next-auth/react";
import { UserAccountDropdown } from "~/components/general/sign-out";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";

interface HeaderProps {
  disabled?: boolean;
}

function getLinkProps(href: string, disabled?: boolean, baseClass?: string) {
  return {
    href: disabled ? "#" : href,
    onClick: disabled ? (e: React.MouseEvent) => e.preventDefault() : undefined,
    className: cn(
      baseClass,
      disabled && "cursor-not-allowed pointer-events-none text-gray-400",
    ),
  };
}

// Updated navigation structure with dropdowns
const navigationItems = [
  { 
    title: "Home", 
    href: "/", 
    type: "link" 
  },
  {
    title: "Cultural Craft Experiences",
    type: "dropdown",
    items: [
      { href: "/artisan", title: "Craft School" },
      { href: "/safari", title: "Craft Safari" },
      { href: "/fair", title: "Craft Fair" },
    ]
  },
  {
    title: "Verified Craft Marketplace",
    type: "dropdown",
    items: [
      { href: "/shop", title: "Craft Store" },
      { href: "/documentary", title: "Craft Documenter" },
    ]
  },
  {
    title: "Heritage & Eco Tours",
    type: "dropdown",
    items: [
      { href: "#", title: "Kashmir Tour" },
      { href: "/eco-retreat", title: "Eco Retreat" },
      { href: "/dining", title: "Dining Voyage" },
      { href: "/eco-transit", title: "Eco Transit" },
    ]
  },
  {
    title: "Planning & Services",
    type: "dropdown",
    items: [
      { href: "/travel", title: "Travel Planner" },
      { href: "/language", title: "Language Services" },
    ]
  }
];

export const Header: FC<HeaderProps> = ({ disabled = false }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const session = useSession();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDropdownToggle = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  const handleDropdownClose = () => {
    setActiveDropdown(null);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-[103] flex w-full flex-col ",
        isScrolled 
          ? "bg-gradient-to-br from-[#005380] to-[#0085CC] shadow-lg" 
          : "bg-[#054c72] text-white"
      )}
    >
      {/* Top Banner - only visible when not scrolled */}
      <div
        className={cn(
          "hidden gap-6 bg-[#0085CC] p-6 py-3 text-white lg:flex ",
          isScrolled && "lg:hidden",
        )}
      >
        <div className="mx-auto flex w-full max-w-7xl justify-center items-center">
          <div className="flex items-center gap-4 font-text">
            <p className="font-semibold text-sm xl:text-base px-2">
              De Koshur Crafts&apos; - Kashmir Craft & Tourism Convergence Marketplace
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-3">
              <Link
                {...getLinkProps(
                  "#",
                  disabled,
                  "hover:text-blue-200 transition-colors duration-200 text-sm",
                )}
              >
                <FaTwitter size={16} />
              </Link>
              <Link
                {...getLinkProps(
                  "#",
                  disabled,
                  "hover:text-blue-200 transition-colors duration-200 text-sm",
                )}
              >
                <FaFacebook size={16} />
              </Link>
              <Link
                {...getLinkProps(
                  "#",
                  disabled,
                  "hover:text-blue-200 transition-colors duration-200 text-sm",
                )}
              >
                <FaLinkedin size={16} />
              </Link>
              <Link
                {...getLinkProps(
                  "#",
                  disabled,
                  "hover:text-blue-200 transition-colors duration-200 text-sm",
                )}
              >
                <FaSignal size={16} />
              </Link>
            </div>
            <div className="hidden h-5 w-px bg-white/30 md:block" />
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="ghost"
                className={cn(
                  "text-xs text-white hover:bg-white/10 xl:text-sm",
                  disabled && "pointer-events-none cursor-not-allowed opacity-50",
                )}
                asChild
              >
                <Link {...getLinkProps("#", disabled)}>
                  <LogIn size={14} />
                  Login
                </Link>
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className={cn(
                  "text-xs text-white hover:bg-white/10 xl:text-sm",
                  disabled && "pointer-events-none cursor-not-allowed opacity-50",
                )}
                asChild
              >
                <Link {...getLinkProps("#", disabled)}>
                  <LogIn size={14} />
                  Sign in
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between p-3 sm:p-4">

        {/* Logo */}
        <div className="relative ml-1 h-[30px] w-[90px] sm:ml-2 sm:h-[35px] sm:w-[110px] md:ml-0 lg:h-[40px] lg:w-[120px] xl:h-[50px] xl:w-[130px]">
          <Image
            src="/logo/logo_2.png"
            alt="De Koshur Crafts Logo"
            fill
            sizes="(max-width: 640px) 90px, (max-width: 768px) 110px, (max-width: 1024px) 120px, 130px"
            priority
            className="object-contain"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 transition-colors lg:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileMenuOpen((v) => !v)}
        >
          {mobileMenuOpen ? <CloseIcon size={24} className="sm:size-7" /> : <MenuIcon size={24} className="sm:size-7" />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden w-full flex-1 items-center justify-between px-2 md:px-4 lg:px-6 lg:flex">
          <nav className="flex-1">
            <menu className="flex items-center justify-center gap-0.5 md:gap-1 xl:gap-2">
              {navigationItems.map((item, index) => (
                <li key={index} className="relative group">
                  {item.type === "link" ? (
                    <Button
                      variant="ghost"
                      className={cn(
                        "text-xs md:text-sm xl:text-base text-white hover:bg-white/10 transition-all duration-200 font-medium px-2 md:px-3 xl:px-4 py-2",
                        isScrolled && "text-white hover:bg-white/20",
                      )}
                      asChild
                    >
                      <Link href={disabled ? '#' : item.href}>{item.title}</Link>
                    </Button>
                  ) : (
                    <div className="relative">
                      <Button
                        variant="ghost"
                        className={cn(
                          "text-xs md:text-sm xl:text-base text-white hover:bg-white/10 transition-all duration-200 font-medium px-2 md:px-3 xl:px-4 py-2",
                          isScrolled && "text-white hover:bg-white/20",
                          activeDropdown === item.title && "bg-white/10"
                        )}
                        onClick={() => handleDropdownToggle(item.title)}
                        onMouseEnter={() => setActiveDropdown(item.title)}
                        onTouchStart={() => handleDropdownToggle(item.title)}
                      >
                        <span className="truncate">{item.title}</span>
                        <ChevronDown 
                          size={14} 
                          className={cn(
                            "ml-1 flex-shrink-0 transition-transform duration-200 md:size-4",
                            activeDropdown === item.title && "rotate-180"
                          )} 
                        />
                      </Button>
                      
                      {/* Dropdown Menu */}
                      {activeDropdown === item.title && (
                        <div 
                          className="absolute top-full left-0 mt-1 w-48 md:min-w-[200px] lg:min-w-[220px] bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-lg shadow-xl border border-[#005380] py-2 z-50"
                          onMouseLeave={handleDropdownClose}
                          onTouchEnd={handleDropdownClose}
                        >
                          {item.items?.map((dropdownItem, dropdownIndex) => (
                            <Link
                              key={dropdownIndex}
                              href={disabled ? '#' : dropdownItem.href}
                              className="block px-4 py-2.5 text-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-[#005380] transition-all duration-200 text-sm font-medium"
                              onClick={handleDropdownClose}
                            >
                              {dropdownItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </menu>
          </nav>
          
          {/* Auth Section */}
          <div className="ml-2 md:ml-4 flex-shrink-0">
            {session.data?.user ? <UserAccountDropdown /> : <LoginDialog />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="block w-full bg-gradient-to-br from-[#003d5c] to-[#005380] px-4 py-4 shadow-lg lg:hidden">
          <menu className="flex flex-col gap-1 max-h-[70vh] overflow-y-auto">
            {navigationItems.map((item, index) => (
              <li key={index}>
                {item.type === "link" ? (
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-left text-base sm:text-lg text-white hover:bg-white/10 py-3 px-4"
                    asChild
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Link href={disabled ? '#' : item.href}>{item.title}</Link>
                  </Button>
                ) : (
                  <div>
                    <Button
                      variant="ghost"
                      className="w-full justify-between text-left text-base sm:text-lg text-white hover:bg-white/10 py-3 px-4"
                      onClick={() => handleDropdownToggle(item.title)}
                    >
                      <span className="truncate pr-2">{item.title}</span>
                      <ChevronDown 
                        size={18} 
                        className={cn(
                          "flex-shrink-0 transition-transform duration-200",
                          activeDropdown === item.title && "rotate-180"
                        )} 
                      />
                    </Button>
                    {activeDropdown === item.title && (
                      <div className="ml-4 mt-1 space-y-1 bg-black/10 rounded-lg p-2">
                        {item.items?.map((dropdownItem, dropdownIndex) => (
                          <Button
                            key={dropdownIndex}
                            variant="ghost"
                            className="w-full justify-start text-left text-sm sm:text-base text-white/90 hover:bg-white/10 py-2.5 px-3"
                            asChild
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setActiveDropdown(null);
                            }}
                          >
                            <Link href={disabled ? '#' : dropdownItem.href}>
                              {dropdownItem.title}
                            </Link>
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </li>
            ))}
            <li className="mt-4 pt-4 border-t border-white/20">
              {session.data?.user ? <UserAccountDropdown /> : <LoginDialog />}
            </li>
          </menu>
        </nav>
      )}
    </header>
  );
};