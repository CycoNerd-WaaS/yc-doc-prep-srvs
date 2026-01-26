/* ==============================================================================
 * Filename:    docs/assets/js/main.js
 * Created:     2026-01-25
 * Updated:     2026-01-25
   DOCUMENT ASSISTANCE - Main JavaScript
   Professional Tax Preparation, Notary Public & Document Assistance
   ============================================================================== */

(function() {
  'use strict';

  // ==============================================================================
  // LANGUAGE TOGGLE SYSTEM
  // ==============================================================================
  
  const LanguageManager = {
    currentLang: 'en',
    storageKey: 'docassist-lang',
    
    init() {
      // Check localStorage for saved preference
      const savedLang = localStorage.getItem(this.storageKey);
      if (savedLang && ['en', 'es'].includes(savedLang)) {
        this.currentLang = savedLang;
      }
      
      // Apply initial language
      this.applyLanguage(this.currentLang);
      
      // Setup toggle buttons
      this.setupToggleButtons();
    },
    
    setupToggleButtons() {
      const langButtons = document.querySelectorAll('.lang-btn');
      
      langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          const lang = btn.dataset.lang;
          if (lang && lang !== this.currentLang) {
            this.setLanguage(lang);
          }
        });
      });
    },
    
    setLanguage(lang) {
      this.currentLang = lang;
      localStorage.setItem(this.storageKey, lang);
      this.applyLanguage(lang);
      this.updateToggleButtons(lang);
    },
    
    applyLanguage(lang) {
      // Update document language attribute
      document.documentElement.lang = lang;
      document.body.dataset.lang = lang;
      
      // Find all elements with language data attributes
      const translatableElements = document.querySelectorAll('[data-lang-en], [data-lang-es]');
      
      translatableElements.forEach(el => {
        const translation = el.dataset[`lang${lang.charAt(0).toUpperCase() + lang.slice(1)}`];
        if (translation) {
          // Preserve child elements by only updating text nodes
          if (el.childElementCount === 0) {
            el.textContent = translation;
          } else {
            // For elements with children, update the first text node
            const textNodes = Array.from(el.childNodes).filter(
              node => node.nodeType === Node.TEXT_NODE && node.textContent.trim()
            );
            if (textNodes.length > 0) {
              // Don't modify if it's complex structure
            }
            // For simple cases, just set textContent of the element itself
            // This works for most translation scenarios
            el.textContent = translation;
          }
        }
      });
      
      // Update toggle buttons state
      this.updateToggleButtons(lang);
    },
    
    updateToggleButtons(lang) {
      const langButtons = document.querySelectorAll('.lang-btn');
      
      langButtons.forEach(btn => {
        const isActive = btn.dataset.lang === lang;
        btn.setAttribute('aria-pressed', isActive.toString());
      });
    }
  };

  // ==============================================================================
  // MOBILE NAVIGATION
  // ==============================================================================
  
  const MobileNav = {
    toggle: null,
    nav: null,
    isOpen: false,
    
    init() {
      this.toggle = document.querySelector('.mobile-menu-toggle');
      this.nav = document.querySelector('.main-nav');
      
      if (!this.toggle || !this.nav) return;
      
      this.toggle.addEventListener('click', () => this.toggleMenu());
      
      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (this.isOpen && !this.nav.contains(e.target) && !this.toggle.contains(e.target)) {
          this.closeMenu();
        }
      });
      
      // Close menu on escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.isOpen) {
          this.closeMenu();
          this.toggle.focus();
        }
      });
      
      // Close menu when nav link is clicked (for single-page sections)
      const navLinks = this.nav.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          if (this.isOpen) {
            this.closeMenu();
          }
        });
      });
    },
    
    toggleMenu() {
      this.isOpen ? this.closeMenu() : this.openMenu();
    },
    
    openMenu() {
      this.isOpen = true;
      this.toggle.setAttribute('aria-expanded', 'true');
      this.nav.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    },
    
    closeMenu() {
      this.isOpen = false;
      this.toggle.setAttribute('aria-expanded', 'false');
      this.nav.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  };

  // ==============================================================================
  // FAQ ACCORDION
  // ==============================================================================
  
  const FAQAccordion = {
    init() {
      const faqItems = document.querySelectorAll('.faq-item');
      
      faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        if (!question || !answer) return;
        
        // Generate unique ID for accessibility
        const id = `faq-answer-${Math.random().toString(36).substr(2, 9)}`;
        answer.id = id;
        question.setAttribute('aria-controls', id);
        question.setAttribute('aria-expanded', 'false');
        
        question.addEventListener('click', () => {
          const isActive = item.classList.contains('active');
          
          // Optional: Close other items (accordion behavior)
          // faqItems.forEach(otherItem => {
          //   if (otherItem !== item) {
          //     otherItem.classList.remove('active');
          //     otherItem.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
          //   }
          // });
          
          // Toggle current item
          item.classList.toggle('active');
          question.setAttribute('aria-expanded', (!isActive).toString());
        });
        
        // Keyboard accessibility
        question.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            question.click();
          }
        });
      });
    }
  };

  // ==============================================================================
  // SMOOTH SCROLL (for anchor links)
  // ==============================================================================
  
  const SmoothScroll = {
    init() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            e.preventDefault();
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        });
      });
    }
  };

  // ==============================================================================
  // FORM VALIDATION (Basic)
  // ==============================================================================
  
  const FormValidation = {
    init() {
      const forms = document.querySelectorAll('form[data-validate]');
      
      forms.forEach(form => {
        form.addEventListener('submit', (e) => {
          const requiredFields = form.querySelectorAll('[required]');
          let isValid = true;
          
          requiredFields.forEach(field => {
            if (!field.value.trim()) {
              isValid = false;
              this.showError(field, 'This field is required');
            } else if (field.type === 'email' && !this.isValidEmail(field.value)) {
              isValid = false;
              this.showError(field, 'Please enter a valid email');
            } else {
              this.clearError(field);
            }
          });
          
          if (!isValid) {
            e.preventDefault();
          }
        });
        
        // Clear errors on input
        form.querySelectorAll('input, textarea, select').forEach(field => {
          field.addEventListener('input', () => this.clearError(field));
        });
      });
    },
    
    isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    
    showError(field, message) {
      this.clearError(field);
      field.classList.add('has-error');
      
      const errorEl = document.createElement('span');
      errorEl.className = 'field-error';
      errorEl.textContent = message;
      errorEl.style.cssText = 'color: #EF4444; font-size: 0.875rem; display: block; margin-top: 0.25rem;';
      
      field.parentNode.appendChild(errorEl);
    },
    
    clearError(field) {
      field.classList.remove('has-error');
      const existingError = field.parentNode.querySelector('.field-error');
      if (existingError) {
        existingError.remove();
      }
    }
  };

  // ==============================================================================
  // HEADER SCROLL EFFECT
  // ==============================================================================
  
  const HeaderScroll = {
    init() {
      const header = document.querySelector('.site-header');
      if (!header) return;
      
      let lastScroll = 0;
      
      window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
          header.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
        } else {
          header.style.boxShadow = '0 1px 2px 0 rgb(0 0 0 / 0.05)';
        }
        
        lastScroll = currentScroll;
      }, { passive: true });
    }
  };

  // ==============================================================================
  // LDA SERVICE TOGGLE (Based on config)
  // ==============================================================================
  
  const LDAToggle = {
    init() {
      // Check if LDA services should be enabled
      // This is typically controlled by Jekyll's site.enable_lda_services
      // But we can also check a data attribute on body for client-side control
      const ldaEnabled = document.body.dataset.ldaEnabled === 'true';
      
      if (ldaEnabled) {
        document.body.classList.add('lda-enabled');
      }
      
      // Hide LDA-specific elements if not enabled
      if (!ldaEnabled) {
        document.querySelectorAll('.lda-only').forEach(el => {
          el.style.display = 'none';
        });
      }
    }
  };

  // ==============================================================================
  // INITIALIZE ALL MODULES
  // ==============================================================================
  
  document.addEventListener('DOMContentLoaded', () => {
    LanguageManager.init();
    MobileNav.init();
    FAQAccordion.init();
    SmoothScroll.init();
    FormValidation.init();
    HeaderScroll.init();
    LDAToggle.init();
    
    console.log('Document Assistance website initialized');
  });

})();
