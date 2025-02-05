// Wait for the document to fully load
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  // Contact Form Submission Handler
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you can add your AJAX form submission logic
    alert('Thank you for your message!');
    contactForm.reset();
  });
});
