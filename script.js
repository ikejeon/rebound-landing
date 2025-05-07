document.addEventListener('DOMContentLoaded', function() {
    const waitlistForm = document.getElementById('waitlistForm');
    const emailInput = document.getElementById('emailInput');
    const waitlistMessage = document.getElementById('waitlistMessage');
    const ctaButton = document.getElementById('cta-button');

    if (waitlistForm) {
        waitlistForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = emailInput.value;

            if (email && email.includes('@')) {
                // Simulate API call
                waitlistMessage.textContent = 'Thanks for joining the waitlist! We\'ll be in touch.';
                waitlistMessage.style.color = 'green';
                emailInput.value = ''; // Clear the input
                // Here you would typically send the email to your backend/service
                console.log('Waitlist sign-up:', email);
            } else {
                waitlistMessage.textContent = 'Please enter a valid email address.';
                waitlistMessage.style.color = 'red';
            }

            setTimeout(() => {
                waitlistMessage.textContent = '';
            }, 5000); // Clear message after 5 seconds
        });
    }

    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            // Smooth scroll to the waitlist form or a specific section
            const waitlistSection = document.getElementById('footer'); // or a more specific ID if you have one for the form
            if (waitlistSection) {
                waitlistSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Optional: Simple smooth scroll for any anchor links if you add them later
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         try {
    //             document.querySelector(this.getAttribute('href')).scrollIntoView({
    //                 behavior: 'smooth'
    //             });
    //         } catch (error) {
    //             console.warn('Smooth scroll target not found:', this.getAttribute('href'));
    //         }
    //     });
    // });
}); 