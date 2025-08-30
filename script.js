// Mobile menu toggle functionality
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', function() {
  mainNav.classList.toggle('active');
  
  // Change icon based on menu state
  const icon = menuToggle.querySelector('i');
  if (mainNav.classList.contains('active')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId.startsWith('#')) {
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (mainNav.classList.contains('active')) {
          mainNav.classList.remove('active');
          const icon = menuToggle.querySelector('i');
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      }
    } else {
      window.location.href = targetId;
    }
  });
});

// Add animation on scroll
document.addEventListener('DOMContentLoaded', function() {
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.project-card, .contact-item');
    
    elements.forEach(element => {
      const position = element.getBoundingClientRect();
      
      // If element is in viewport
      if(position.top < window.innerHeight - 100) {
        element.style.opacity = 1;
        element.style.transform = 'translateY(0)';
      }
    });
  };
  
  // Initialize elements with initial styles
  const projectCards = document.querySelectorAll('.project-card');
  const contactItems = document.querySelectorAll('.contact-item');
  
  projectCards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease, background 0.3s ease';
  });
  
  contactItems.forEach(item => {
    item.style.opacity = 0;
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease, background 0.3s ease';
  });
  
  // Run on load and scroll
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);
});