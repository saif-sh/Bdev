import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  Home,
  Info,
  Sparkles,
  Star,
  MessageCircle,
  Menu,
  X,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import lghome from "../assets/lghome.png";

/* -----------------------------
   Optimized helper hooks
   ----------------------------- */

/**
 * Locks body scroll when active.
 * Uses class-based approach for better performance
 */
function useLockBodyScroll(active) {
  useEffect(() => {
    if (!active) return;
    
    // Prevent scroll on body
    const originalStyle = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [active]);
}

/**
 * Improved focus trap with better error handling and performance
 */
function useFocusTrap(containerRef, active) {
  const previousActiveElementRef = useRef(null);

  useEffect(() => {
    if (!active || !containerRef.current) return;

    const container = containerRef.current;
    previousActiveElementRef.current = document.activeElement;

    const focusableSelector = [
      'a[href]',
      'area[href]', 
      'input:not([disabled]):not([type="hidden"])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'button:not([disabled])',
      '[tabindex]:not([tabindex="-1"])'
    ].join(', ');

    const getFocusableElements = () => {
      return Array.from(container.querySelectorAll(focusableSelector))
        .filter(el => !el.hasAttribute("disabled") && el.offsetParent !== null);
    };

    // Focus first element or container
    const focusableElements = getFocusableElements();
    const firstElement = focusableElements[0];
    
    if (firstElement) {
      firstElement.focus({ preventScroll: true });
    } else {
      container.setAttribute("tabindex", "-1");
      container.focus({ preventScroll: true });
    }

    const handleKeyDown = (e) => {
      if (e.key !== "Tab") return;
      
      const currentFocusable = getFocusableElements();
      if (currentFocusable.length === 0) {
        e.preventDefault();
        return;
      }

      const first = currentFocusable[0];
      const last = currentFocusable[currentFocusable.length - 1];

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        // Tab
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    container.addEventListener("keydown", handleKeyDown);
    
    return () => {
      container.removeEventListener("keydown", handleKeyDown);
      // Restore focus safely
      if (previousActiveElementRef.current && previousActiveElementRef.current.focus) {
        try {
          previousActiveElementRef.current.focus();
        } catch (err) {
          console.warn('Could not restore focus:', err);
        }
      }
    };
  }, [active]);
}

/* -----------------------------
   Theme constants & styles
   ----------------------------- */

const PALETTE = {
  ivory: '#FBF8F4',
  ivoryAlt: '#F7EFE6', 
  warmBeige: '#EDE3D9',
  sand: '#F1E6D6',
  champagne: '#F7E7CE',
  deep: '#2F4F4F',
  deepSoft: '#566F6F',
  accent: '#8B7355',
  textMuted: '#8A8174',
  textPrimary: '#2F4F4F',
  textSecondary: '#6B5B4F',
  gold: '#D4AF37',
  goldSoft: '#E8C547',
};

// Global font style injection
const fontStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@300;400;500;600&display=swap');
  
  .mongolian-font {
    font-family: 'Mongolian Baiti', 'Cinzel', serif;
    font-feature-settings: 'kern' 1, 'liga' 1;
    text-rendering: optimizeLegibility;
  }
  
  .elegant-shadow {
    box-shadow: 0 8px 32px rgba(47,79,79,0.08), 0 2px 8px rgba(47,79,79,0.06);
  }
  
  .glass-effect {
    backdrop-filter: blur(20px) saturate(120%);
    background: rgba(251,248,244,0.85);
    border: 1px solid rgba(237,227,217,0.6);
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Inject styles
if (typeof document !== 'undefined' && !document.getElementById('mobile-nav-styles')) {
  const style = document.createElement('style');
  style.id = 'mobile-nav-styles';
  style.textContent = fontStyle;
  document.head.appendChild(style);
}

/* -----------------------------
   Navigation data
   ----------------------------- */

const NAV_ITEMS = [
  {
    id: "home",
    icon: Home,
    label: "Home",
    href: "/",
    description: "Return to homepage",
  },
  {
    id: "about",
    icon: Info,
    label: "About",
    href: "/about",
    description: "Learn our story",
  },
  {
    id: "treatments",
    icon: Sparkles,
    label: "Treatments",
    href: "/treatments",
    description: "Explore our services",
  },
  {
    id: "gallery",
    icon: Star,
    label: "Gallery",
    href: "/gallery",
    description: "View our space",
  },
  {
    id: "contact",
    icon: MessageCircle,
    label: "Contact",
    href: "/contact",
    description: "Get in touch",
  },
];

const CONTACT_INFO = [
  { icon: MapPin, text: "Bandra West, Mumbai", href: null },
  { icon: Phone, text: "+91 98205 51300", href: "tel:+919820551300" },
  { icon: Clock, text: "11 AM - 10 PM", href: null },
];

/* -----------------------------
   Main component with optimizations
   ----------------------------- */

const MobileBottomNav = ({ 
  logoSrc = "/assets/lghome.png", 
  activeSection = "home",
  onNavigate
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const modalRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Custom hooks
  useLockBodyScroll(isMenuOpen);
  useFocusTrap(modalRef, isMenuOpen);

  // Restore focus when menu closes
  useEffect(() => {
    if (!isMenuOpen && menuButtonRef.current) {
      requestAnimationFrame(() => {
        if (menuButtonRef.current) {
          menuButtonRef.current.focus({ preventScroll: true });
        }
      });
    }
  }, [isMenuOpen]);

  // Event handlers with improved performance
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const current = window.scrollY;
          
          if (current < lastScrollY || current < 50) {
            setIsVisible(true);
          } else if (current > 100 && current > lastScrollY) {
            setIsVisible(false);
            setIsMenuOpen(false);
          }
          
          setLastScrollY(current);
          ticking = false;
        });
        ticking = true;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen, lastScrollY]);

  // Memoized handlers
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const handleBackdropClick = useCallback((e) => {
    if (modalRef.current && e.target === modalRef.current) {
      setIsMenuOpen(false);
    }
  }, []);

  const handleNavClick = useCallback((section) => {
    setIsMenuOpen(false);
    if (onNavigate) {
      onNavigate(section);
    }
  }, [onNavigate]);

  // Navigation button component with enhanced styling
  const NavButton = ({ item, isActive }) => (
    <a
      href={item.href}
      className="flex flex-col items-center justify-center py-3 px-2 group mongolian-font"
      onClick={() => handleNavClick(item.id)}
    >
      <div
        className={`p-3 rounded-2xl transition-all duration-500 transform ${
          isActive ? "scale-110 rotate-3" : "group-hover:scale-110 group-hover:-rotate-1"
        }`}
        style={{
          background: isActive 
            ? `linear-gradient(135deg, ${PALETTE.champagne}40, ${PALETTE.gold}20)`
            : 'transparent',
          boxShadow: isActive 
            ? `0 4px 20px ${PALETTE.gold}30, inset 0 1px 2px rgba(255,255,255,0.4)`
            : 'none',
          border: isActive 
            ? `1px solid ${PALETTE.gold}40`
            : 'none',
        }}
      >
        <item.icon 
          className="w-5 h-5 transition-all duration-300" 
          style={{ 
            color: isActive ? PALETTE.accent : PALETTE.deep,
            filter: isActive ? 'drop-shadow(0 1px 2px rgba(139,115,85,0.3))' : 'none'
          }} 
        />
      </div>
      <span
        className="text-xs mt-2 font-medium tracking-wider transition-all duration-300"
        style={{
          color: isActive ? PALETTE.accent : PALETTE.textMuted,
          fontWeight: isActive ? 600 : 500,
          textShadow: isActive ? '0 1px 2px rgba(139,115,85,0.2)' : 'none',
        }}
      >
        {item.label}
      </span>
    </a>
  );

  return (
    <>
      {/* Bottom Navigation Bar */}
      <nav
        aria-label="Bottom navigation"
        className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transform transition-transform duration-300 ease-out ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div
          className="relative backdrop-blur-lg"
          style={{
            background: `linear-gradient(180deg, ${PALETTE.ivory}CC, ${PALETTE.ivoryAlt}CC)`,
            borderTop: `1px solid ${PALETTE.warmBeige}80`,
            boxShadow: '0 -8px 24px rgba(47,79,79,0.06)',
          }}
        >
          {/* Glow line */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background: `linear-gradient(90deg, transparent, ${PALETTE.warmBeige}40, transparent)`,
              opacity: 0.6,
            }}
          />

          <div className="h-24 flex items-center justify-center relative px-6">
            {/* Elevated Logo */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20">
              <a
                href="/"
                className="group inline-flex items-center justify-center rounded-full"
                aria-label="Go to homepage"
                onClick={() => handleNavClick("home")}
              >
                <div
                  className="relative rounded-full flex items-center justify-center"
                  style={{
                    width: 72,
                    height: 72,
                    background: `linear-gradient(135deg, ${PALETTE.deep}11, transparent)`,
                    boxShadow: '0 6px 20px rgba(47,79,79,0.08)',
                    border: `4px solid ${PALETTE.ivory}`,
                  }}
                >
                  <div
                    className="absolute inset-1 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.12)' }}
                  />
                  <img
                    src={lghome}
                    alt="LG Home Logo"
                    className="relative z-10 w-10 h-10 rounded-full object-cover"
                    draggable={false}
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiM4QjczNTUiLz4KPHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeD0iMTAiIHk9IjEwIj4KPHA7dGggZD0iTTMgNkgxNFYxN0gzVjZaTTUgOFYxNUgxMlY4SDVaTTcgMTBIOVYxM0g3VjEwWiIgZmlsbD0iI0ZCRjhGNCIvPgo8L3N2Zz4KPC9zdmc+';
                    }}
                  />
                </div>
              </a>
            </div>

            {/* Navigation Grid */}
            <div className="w-full max-w-md grid grid-cols-4 items-center gap-4">
              <NavButton item={NAV_ITEMS[1]} isActive={activeSection === "about"} />
              <NavButton item={NAV_ITEMS[2]} isActive={activeSection === "treatments"} />
              <NavButton item={NAV_ITEMS[4]} isActive={activeSection === "contact"} />

              {/* Enhanced Menu Toggle */}
              <button
                ref={menuButtonRef}
                onClick={toggleMenu}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="flex flex-col items-center justify-center py-3 px-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-400 rounded-xl mongolian-font group"
              >
                <div
                  className={`p-3 rounded-2xl transition-all duration-500 transform ${
                    isMenuOpen 
                      ? "scale-110 rotate-180" 
                      : "group-hover:scale-110 group-hover:rotate-12"
                  }`}
                  style={{
                    background: isMenuOpen 
                      ? `linear-gradient(135deg, ${PALETTE.gold}30, ${PALETTE.goldSoft}20)`
                      : 'transparent',
                    boxShadow: isMenuOpen 
                      ? `0 4px 20px ${PALETTE.gold}25, inset 0 1px 2px rgba(255,255,255,0.4)`
                      : 'none',
                    border: isMenuOpen 
                      ? `1px solid ${PALETTE.gold}40`
                      : 'none',
                  }}
                >
                  <Menu 
                    className="w-5 h-5 transition-all duration-300" 
                    style={{ 
                      color: isMenuOpen ? PALETTE.accent : PALETTE.deep,
                      filter: isMenuOpen ? 'drop-shadow(0 1px 2px rgba(139,115,85,0.3))' : 'none'
                    }} 
                  />
                </div>
                <span
                  className="text-xs mt-2 font-medium tracking-wider transition-all duration-300"
                  style={{
                    color: isMenuOpen ? PALETTE.accent : PALETTE.textMuted,
                    fontWeight: isMenuOpen ? 600 : 500,
                    textShadow: isMenuOpen ? '0 1px 2px rgba(139,115,85,0.2)' : 'none',
                  }}
                >
                  {isMenuOpen ? "Close" : "Menu"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Modal Menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
        className="fixed inset-0 z-40 md:hidden"
        style={{
          pointerEvents: isMenuOpen ? 'auto' : 'none',
          opacity: isMenuOpen ? 1 : 0,
          transition: 'opacity 300ms ease',
        }}
      >
        {/* Enhanced Backdrop */}
        <div
          onClick={handleBackdropClick}
          className="absolute inset-0 backdrop-blur-xl"
          style={{
            background: `
              radial-gradient(circle at 50% 70%, rgba(47,79,79,0.15), transparent 60%),
              linear-gradient(180deg, rgba(20,20,20,0.25), rgba(47,79,79,0.4))
            `,
            transition: 'all 400ms ease',
          }}
        />

        {/* Sliding Panel */}
        <div className="absolute left-0 right-0 bottom-0 w-full flex items-end" style={{ maxHeight: 'calc(100vh - 100px)' }}>
          <div
            className="w-full"
            style={{
              transform: isMenuOpen ? 'translateY(0)' : 'translateY(100%)',
              transition: 'transform 360ms cubic-bezier(0.2, 0.9, 0.2, 1)',
            }}
          >
            <div
              ref={modalRef}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl mx-auto rounded-t-3xl shadow-2xl p-6 mongolian-font"
              style={{
                background: `
                  radial-gradient(circle at 80% 20%, ${PALETTE.champagne}20, transparent 50%),
                  linear-gradient(180deg, ${PALETTE.ivoryAlt}F8, ${PALETTE.ivory}F0, #FFFFFF)
                `,
                borderTop: `3px solid ${PALETTE.gold}40`,
                maxHeight: 'calc(100vh - 100px)',
                overflow: 'hidden',
                paddingBottom: '120px',
                boxShadow: `
                  0 -20px 60px rgba(47,79,79,0.15),
                  0 -8px 24px rgba(212,175,55,0.08),
                  inset 0 2px 4px rgba(255,255,255,0.6)
                `,
              }}
            >
              {/* Elegant Handle Bar */}
              <div className="flex items-center justify-center mb-6">
                <div
                  className="rounded-full transition-all duration-300 hover:scale-110"
                  style={{
                    height: 6,
                    width: 64,
                    background: `linear-gradient(90deg, ${PALETTE.gold}60, ${PALETTE.goldSoft}40, ${PALETTE.gold}60)`,
                    boxShadow: `0 2px 8px ${PALETTE.gold}20, inset 0 1px 2px rgba(255,255,255,0.3)`,
                  }}
                />
              </div>

              {/* Enhanced Header */}
              <div className="flex items-center justify-between mb-6 px-2">
                <div>
                  <h3
                    id="mobile-menu-title"
                    className="text-xl font-semibold tracking-wide"
                    style={{ 
                      color: PALETTE.textPrimary,
                      textShadow: '0 1px 3px rgba(47,79,79,0.1)',
                    }}
                  >
                    Explore
                  </h3>
                  <p 
                    className="text-sm mt-2 font-light tracking-wide" 
                    style={{ color: PALETTE.textSecondary }}
                  >
                    Luxury treatments & information
                  </p>
                </div>

                <button
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                  className="p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-400 transition-all duration-300 hover:scale-110 hover:rotate-90"
                  style={{ 
                    color: PALETTE.deepSoft,
                    background: `linear-gradient(135deg, ${PALETTE.champagne}30, transparent)`,
                    border: `1px solid ${PALETTE.gold}20`,
                    boxShadow: '0 2px 8px rgba(212,175,55,0.1)',
                  }}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div
                className="overflow-y-auto pr-2"
                style={{ maxHeight: 'calc(92vh - 200px)' }}
              >
                {/* Enhanced Navigation Items */}
                <div className="space-y-4">
                  {NAV_ITEMS.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <a
                        key={item.id}
                        href={item.href}
                        onClick={() => handleNavClick(item.id)}
                        className="block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-400 rounded-3xl group"
                        style={{
                          transform: `translateY(${index * 4}px)`,
                          animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                        }}
                      >
                        <div
                          className="flex items-center gap-5 p-4 rounded-3xl transition-all duration-400 group-hover:shadow-xl group-hover:scale-105"
                          style={{
                            background: `
                              radial-gradient(circle at 10% 20%, ${PALETTE.champagne}25, transparent 60%),
                              linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.4))
                            `,
                            border: `1.5px solid ${PALETTE.gold}30`,
                            boxShadow: `
                              0 8px 24px rgba(47,79,79,0.06),
                              0 2px 8px rgba(212,175,55,0.04),
                              inset 0 1px 2px rgba(255,255,255,0.6)
                            `,
                          }}
                        >
                          <div
                            className="flex items-center justify-center w-14 h-14 rounded-2xl group-hover:scale-110 transition-all duration-300"
                            style={{
                              background: `
                                radial-gradient(circle at 30% 30%, ${PALETTE.champagne}60, transparent 70%),
                                linear-gradient(135deg, ${PALETTE.ivory}F0, ${PALETTE.sand}E0)
                              `,
                              border: `2px solid ${PALETTE.gold}40`,
                              boxShadow: `
                                0 4px 16px rgba(212,175,55,0.15),
                                inset 0 1px 2px rgba(255,255,255,0.5)
                              `,
                            }}
                          >
                            <IconComponent 
                              className="w-6 h-6 transition-all duration-300 group-hover:scale-110" 
                              style={{ 
                                color: PALETTE.accent,
                                filter: 'drop-shadow(0 1px 2px rgba(139,115,85,0.2))'
                              }} 
                            />
                          </div>

                          <div className="flex-1">
                            <div 
                              className="font-semibold text-lg tracking-wide"
                              style={{ color: PALETTE.textPrimary }}
                            >
                              {item.label}
                            </div>
                            <div 
                              className="text-sm mt-1 font-light tracking-wide" 
                              style={{ color: PALETTE.textSecondary }}
                            >
                              {item.description}
                            </div>
                          </div>

                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                            style={{
                              background: `radial-gradient(circle, ${PALETTE.gold}20, transparent 70%)`,
                              border: `1px solid ${PALETTE.gold}30`,
                            }}
                          >
                            <div 
                              className="rounded-full transition-all duration-300 group-hover:scale-125"
                              style={{ 
                                width: 8, 
                                height: 8, 
                                background: `linear-gradient(135deg, ${PALETTE.gold}, ${PALETTE.goldSoft})`,
                                boxShadow: `0 1px 3px ${PALETTE.gold}40`,
                              }} 
                            />
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>

                {/* Elegant Divider */}
                <div className="my-8 px-4">
                  <div
                    className="h-px relative"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${PALETTE.gold}40, ${PALETTE.goldSoft}60, ${PALETTE.gold}40, transparent)`,
                    }}
                  >
                    <div
                      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
                      style={{
                        background: `radial-gradient(circle, ${PALETTE.gold}, ${PALETTE.goldSoft})`,
                        boxShadow: `0 0 8px ${PALETTE.gold}40`,
                      }}
                    />
                  </div>
                </div>

                {/* Enhanced Contact Info */}
                <div className="space-y-4">
                  <h4 
                    className="text-base font-semibold tracking-wide px-2" 
                    style={{ 
                      color: PALETTE.textPrimary,
                      textShadow: '0 1px 2px rgba(47,79,79,0.1)',
                    }}
                  >
                    Contact Information
                  </h4>

                  <div className="space-y-3">
                    {CONTACT_INFO.map((contact, idx) => {
                      const IconComponent = contact.icon;
                      
                      if (contact.href) {
                        return (
                          <a
                            key={idx}
                            href={contact.href}
                            className="flex items-center gap-4 p-3 rounded-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-400 group"
                            style={{
                              background: `
                                radial-gradient(circle at 15% 50%, ${PALETTE.champagne}20, transparent 60%),
                                linear-gradient(135deg, rgba(255,255,255,0.6), rgba(255,255,255,0.3))
                              `,
                              border: `1px solid ${PALETTE.gold}25`,
                              boxShadow: `0 4px 12px rgba(212,175,55,0.08), inset 0 1px 2px rgba(255,255,255,0.4)`,
                            }}
                          >
                            <div
                              className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                              style={{ 
                                background: `linear-gradient(135deg, ${PALETTE.ivory}E0, ${PALETTE.champagne}80)`,
                                border: `1.5px solid ${PALETTE.gold}40`,
                                boxShadow: `0 2px 8px ${PALETTE.gold}15, inset 0 1px 2px rgba(255,255,255,0.5)`,
                              }}
                            >
                              <IconComponent 
                                className="w-5 h-5 transition-all duration-300" 
                                style={{ color: PALETTE.accent }} 
                              />
                            </div>
                            <div 
                              className="font-medium tracking-wide transition-colors duration-300"
                              style={{ color: PALETTE.textMuted }}
                            >
                              {contact.text}
                            </div>
                          </a>
                        );
                      }
                      
                      return (
                        <div 
                          key={idx} 
                          className="flex items-center gap-4 p-3 rounded-2xl"
                          style={{
                            background: `
                              radial-gradient(circle at 15% 50%, ${PALETTE.champagne}15, transparent 60%),
                              linear-gradient(135deg, rgba(255,255,255,0.5), rgba(255,255,255,0.2))
                            `,
                            border: `1px solid ${PALETTE.gold}20`,
                            boxShadow: `0 2px 8px rgba(212,175,55,0.06), inset 0 1px 2px rgba(255,255,255,0.3)`,
                          }}
                        >
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center"
                            style={{ 
                              background: `linear-gradient(135deg, ${PALETTE.ivory}D0, ${PALETTE.champagne}70)`,
                              border: `1px solid ${PALETTE.gold}35`,
                              boxShadow: `0 1px 4px ${PALETTE.gold}10, inset 0 1px 2px rgba(255,255,255,0.4)`,
                            }}
                          >
                            <IconComponent 
                              className="w-5 h-5" 
                              style={{ color: PALETTE.accent }} 
                            />
                          </div>
                          <div 
                            className="font-medium tracking-wide"
                            style={{ color: PALETTE.textMuted }}
                          >
                            {contact.text}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Minimalistic CTA Button */}
                <div className="mt-8 mb-8 px-2">
                  <a
                    href="/book"
                    onClick={() => handleNavClick("book")}
                    className="block text-center py-4 px-6 rounded-2xl font-medium text-base transition-all duration-300 hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 group"
                    style={{
                      background: `linear-gradient(135deg, ${PALETTE.ivory}, ${PALETTE.ivoryAlt})`,
                      color: PALETTE.textPrimary,
                      border: `1px solid ${PALETTE.warmBeige}`,
                      boxShadow: `0 2px 8px rgba(47,79,79,0.06)`,
                      letterSpacing: '0.5px',
                    }}
                  >
                    <span className="inline-flex items-center gap-2">
                      Book a Treatment
                      <div 
                        className="w-1.5 h-1.5 rounded-full transition-all duration-300 group-hover:scale-150"
                        style={{ background: PALETTE.accent }}
                      />
                    </span>
                  </a>
                </div>

                {/* Extra bottom padding to clear the navbar */}
                <div style={{ height: 120 }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-20 md:hidden" />
    </>
  );
};

export default MobileBottomNav;