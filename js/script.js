document.addEventListener("DOMContentLoaded", () => {
  console.log("Page loaded");

  // Highlight the active page link
  const currentPage = location.href;
  const page = document.querySelectorAll("ul li a");
  page.forEach(function (item) {
    if (item.href === currentPage) item.classList.add("active");
  });

  // Contact form submission handling
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Form submitted!");
    });
  }

  // Slider functionality
  const slides = document.querySelectorAll(".card");
  const slidesLen = slides.length;
  slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
  });
  let count = 0;

  setInterval(() => {
    slideNext();
  }, 3000);

  function slideNext() {
    if (count >= slidesLen - 1) count = 0;
    else count += 1;
    move();
  }

  const move = () => {
    slides.forEach((slide) => {
      slide.style.transform = `translateX(-${count * 100}%)`;
    });
  };

  // Mobile menu toggle functions
  window.openMenu = function () {
    const menu = document.getElementsByClassName("menu")[0];
    menu.style.visibility = "visible";
    menu.style.backgroundColor = "rgba(211,211,211,0.5)";
  }

  window.closeMenu = function () {
    const menu = document.getElementsByClassName("menu")[0];
    menu.style.visibility = "hidden";
  }

  // Initialize footer dropdowns
  function initializeFooterDropdowns() {
    const toggles = document.querySelectorAll('.footer-toggle');
    toggles.forEach(toggle => {
      toggle.removeEventListener('click', handleDropdownToggle); // Remove existing listener first
      toggle.addEventListener('click', handleDropdownToggle);   // Add new listener
    });
  }

  function handleDropdownToggle() {
    const dropdown = this.nextElementSibling;
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  }

  // Function to check viewport and initialize footer dropdowns
  function checkViewportAndInitializeFooter() {
    if (window.innerWidth <= 768) {
      console.log("Mobile view detected - initializing dropdowns");
      initializeFooterDropdowns();
    } else {
      console.log("Web view detected - resetting dropdowns");
      // Reset dropdowns in web view
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.style.display = 'none';
      });
    }
  }

  // Load the footer and attach dropdown functionality
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      const footerContainer = document.querySelector('#footer-container');
      // Clear existing footer content to ensure fresh load
      footerContainer.innerHTML = ''; 
      footerContainer.insertAdjacentHTML('beforeend', data);
      checkViewportAndInitializeFooter(); // Initialize dropdowns after footer loads
    })
    .catch(error => console.error('Error loading footer:', error));

  // Recheck on window resize
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(checkViewportAndInitializeFooter, 150); // Debounce resize event
  });
});
