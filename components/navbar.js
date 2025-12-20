class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="bg-white dark:bg-dark-900 shadow-md fixed w-full z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
            <!-- Logo -->
            <div class="flex-shrink-0 text-2xl font-bold text-primary-500">
              Pranjal Banjade
            </div>

            <!-- Desktop Menu -->
            <ul class="hidden md:flex gap-6" id="navbar-menu">
              <li>
                <a href="#home" class="nav-link text-gray-800 dark:text-gray-200 relative px-1 py-2 transition-colors hover:text-primary-500 dark:hover:text-secondary-500">
                  Home
                  <span class="absolute left-0 bottom-0 w-0 h-0.5 bg-primary-500 dark:bg-secondary-500 transition-all"></span>
                </a>
              </li>
              <li>
                <a href="#about" class="nav-link text-gray-800 dark:text-gray-200 relative px-1 py-2 transition-colors hover:text-primary-500 dark:hover:text-secondary-500">
                  About
                  <span class="absolute left-0 bottom-0 w-0 h-0.5 bg-primary-500 dark:bg-secondary-500 transition-all"></span>
                </a>
              </li>
              <li>
                <a href="#projects" class="nav-link text-gray-800 dark:text-gray-200 relative px-1 py-2 transition-colors hover:text-primary-500 dark:hover:text-secondary-500">
                  Projects
                  <span class="absolute left-0 bottom-0 w-0 h-0.5 bg-primary-500 dark:bg-secondary-500 transition-all"></span>
                </a>
              </li>
              <li>
                <a href="#experience" class="nav-link text-gray-800 dark:text-gray-200 relative px-1 py-2 transition-colors hover:text-primary-500 dark:hover:text-secondary-500">
                  Experience
                  <span class="absolute left-0 bottom-0 w-0 h-0.5 bg-primary-500 dark:bg-secondary-500 transition-all"></span>
                </a>
              </li>
              <li>
                <a href="#contact" class="nav-link text-gray-800 dark:text-gray-200 relative px-1 py-2 transition-colors hover:text-primary-500 dark:hover:text-secondary-500">
                  Contact
                  <span class="absolute left-0 bottom-0 w-0 h-0.5 bg-primary-500 dark:bg-secondary-500 transition-all"></span>
                </a>
              </li>
            </ul>

               <button id="theme-toggle"
                aria-label="Toggle theme"
                class="relative flex items-center justify-center w-10 h-10
                      text-gray-700 dark:text-gray-300
                      hover:text-primary-500 dark:hover:text-primary-400
                      transition-colors duration-300">

                <!-- Moon -->
                <span
                  class="absolute inset-0 flex items-center justify-center
                        transform transition-all duration-500
                        scale-75 opacity-0 rotate-90
                        dark:scale-100 dark:opacity-100 dark:rotate-0">
                  <i data-feather="moon"></i>
                </span>

                <!-- Sun -->
                <span
                  class="absolute inset-0 flex items-center justify-center
                        transform transition-all duration-500
                        scale-100 opacity-100 rotate-0
                        dark:scale-75 dark:opacity-0 dark:-rotate-90">
                  <i data-feather="sun"></i>
                </span>
              </button>


          </div>
        </div>

      </nav>
    `;


   const themeToggle = this.querySelector('#theme-toggle');

// Apply saved theme
if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark');
}

themeToggle.addEventListener('click', () => {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');

  // Re-render feather icons (required)
  feather.replace();
});





    // Mobile menu toggle
    const menuToggle = this.querySelector('#menu-toggle');
    const mobileMenu = this.querySelector('#mobile-menu');
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Scroll spy for active section
    const sections = document.querySelectorAll('section[id]');
    const navLinks = this.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
      let scrollY = window.pageYOffset;

      sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 80; // navbar height offset
        const sectionId = section.getAttribute('id');

        if(scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);
