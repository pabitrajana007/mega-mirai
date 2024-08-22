// Basic JavaScript functionality, if needed
document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded');
    
    // Example form submission handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Form submitted!');
        });
    }
});
