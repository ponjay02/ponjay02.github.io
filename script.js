// Dark mode toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check for saved theme preference or use system preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    
    // Back to top button
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.remove('opacity-0', 'invisible');
            backToTopButton.classList.add('opacity-100', 'visible');
        } else {
            backToTopButton.classList.remove('opacity-100', 'visible');
            backToTopButton.classList.add('opacity-0', 'invisible');
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu.classList.contains('hidden')) return;
                mobileMenu.classList.add('hidden');
            }
        });
    });

    var typed = new Typed(".text", {
        strings: ["Data Analyst", "Data Scientist",],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });


    
    // Project card hover effect enhancement
    const projectCards = document.querySelectorAll('#projects .bg-white, #projects .dark\\:bg-dark-800');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('img').style.transform = 'scale(1.05)';
            this.querySelector('img').style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('img').style.transform = 'scale(1)';
        });
    });
    
    // Form submission handler
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', data);
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
    
    // Initialize feather icons (will be replaced by actual icons)
    feather.replace();
});


// script.js

// Get elements
const viewCVBtn = document.getElementById('view-cv-btn'); // the button/link to view CV
const cvModal = document.getElementById('cv-modal'); // the modal container
const closeCV = document.getElementById('close-cv'); // the close button inside modal

// Open modal
viewCVBtn.addEventListener('click', () => {
    cvModal.classList.remove('hidden');
});

// Close modal
closeCV.addEventListener('click', () => {
    cvModal.classList.add('hidden');
});

// Close modal when clicking outside content
cvModal.addEventListener('click', (e) => {
    if (e.target === cvModal) {
        cvModal.classList.add('hidden');
    }
});



  const codeLines = `
while(true) {
  build("Website Portfolio");
}

function deploy() {
  return "pranjalbanjade.com.np";
}

for(let i = 0; i < Infinity; i++) {
  code();
}

console.log("Data • AI • ML");
  `;

  function startTyping() {
    const typed = new Typed("#typing-code", {
      strings: [codeLines],
      typeSpeed: 35,
      backSpeed: 0,
      showCursor: true,
      cursorChar: "▋",
      loop: true,
      backDelay: 2000
    });
  }

  document.addEventListener("DOMContentLoaded", startTyping);
