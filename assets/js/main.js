// Particle.js Configuration - "Connected Constellation"
particlesJS('particles-js',
    {
      "particles": {
        "number": {
          "value": 100,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": ["#6366f1", "#a855f7", "#ffffff"]
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          }
        },
        "opacity": {
          "value": 0.5,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 2,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#818cf8",
          "opacity": 0.2,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1.5,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "window",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 180,
            "line_linked": {
              "opacity": 0.6
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    }
  );
  
  // Dynamic Year
  document.addEventListener('DOMContentLoaded', () => {
      document.getElementById('year').textContent = new Date().getFullYear();
      
      // Initialize Theme
      initTheme();
  });
  
  // Theme Management
  const themeBtn = document.getElementById('theme-toggle-btn');
  const themeDropdown = document.querySelector('.theme-dropdown');
  const themeOptions = document.querySelectorAll('.theme-dropdown button');
  
  function initTheme() {
      const savedTheme = localStorage.getItem('theme');
      
      if (savedTheme === 'dark' || savedTheme === 'light') {
          setTheme(savedTheme);
      } else {
          setTheme('system');
      }
  }
  
  function setTheme(theme) {
      const root = document.documentElement;
      const icon = themeBtn.querySelector('i');
      
      // Remove active class from all options
      themeOptions.forEach(btn => btn.classList.remove('active'));
      
      if (theme === 'system') {
          // Check system preference
          const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          root.setAttribute('data-theme', systemDark ? 'dark' : 'light');
          localStorage.removeItem('theme');
          
          // Update icon to desktop/system
          icon.className = 'fas fa-desktop';
          document.querySelector('[data-theme="system"]').classList.add('active');
          
      } else {
          root.setAttribute('data-theme', theme);
          localStorage.setItem('theme', theme);
          
          // Update icon
          icon.className = theme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
          document.querySelector(`[data-theme="${theme}"]`).classList.add('active');
      }
  
      // Update Particles color for Light Mode contrast if needed
      if (window.pJSDom && window.pJSDom[0]) {
          const pJS = window.pJSDom[0].pJS;
          if (root.getAttribute('data-theme') === 'light') {
              pJS.particles.line_linked.color = "#4f46e5";
              pJS.particles.color.value = ["#4f46e5", "#7c3aed"];
          } else {
              pJS.particles.line_linked.color = "#818cf8";
              pJS.particles.color.value = ["#6366f1", "#a855f7", "#ffffff"];
          }
          window.pJSDom[0].pJS.fn.particlesRefresh();
      }
  }
  
  // Toggle Dropdown
  themeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      themeDropdown.classList.toggle('show');
  });
  
  // Close Dropdown when clicking outside
  document.addEventListener('click', (e) => {
      if (!themeBtn.contains(e.target) && !themeDropdown.contains(e.target)) {
          themeDropdown.classList.remove('show');
      }
  });
  
  // Handle Option Click
  themeOptions.forEach(btn => {
      btn.addEventListener('click', () => {
          const theme = btn.getAttribute('data-theme');
          setTheme(theme);
          themeDropdown.classList.remove('show');
      });
  });
  
  // Listen for System Theme Changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
          setTheme('system');
      }
  });

  
  // Mobile Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-links li:not(.theme-switch-wrapper)'); // Exclude theme switch
  
  hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
  });
  
  links.forEach(link => {
      link.addEventListener('click', () => {
          navLinks.classList.remove('active');
          hamburger.classList.remove('active');
      });
  });
  
  // Active Link Highlight on Scroll
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-links a');
  
  window.addEventListener('scroll', () => {
      let current = '';
      
      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
              current = section.getAttribute('id');
          }
      });
  
      navItems.forEach(a => {
          a.classList.remove('active');
          if (a.getAttribute('href').includes(current)) {
              a.classList.add('active');
          }
      });
  });
  
  // Form Submission
  const contactForm = document.getElementById('contact-form');
  if(contactForm) {
      contactForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const btn = contactForm.querySelector('button');
          const originalText = btn.innerText;
          
          btn.innerText = 'Sending...';
          btn.style.opacity = '0.7';
          btn.disabled = true;
          
          setTimeout(() => {
              btn.innerText = 'Message Sent!';
              btn.style.background = '#10b981'; // Success Green
              btn.style.opacity = '1';
              contactForm.reset();
              
              setTimeout(() => {
                  btn.innerText = originalText;
                  btn.style.background = ''; // Revert to gradient
                  btn.disabled = false;
              }, 3000);
          }, 1500);
      });
  }