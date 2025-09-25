document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
            hamburger.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on links
    const navLinksItems = document.querySelectorAll('.nav-links a');
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
    
    // Smooth scrolling for anchor links
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
            }
        });
    });
    
    // Allow Netlify forms (waitlist/newsletter) to submit natively
    // We only tag the submission type for the success page UX
    const waitlistForm = document.getElementById('waitlist-form');
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', () => {
            localStorage.setItem('formSubmitted', 'waitlist');
        });
    }
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', () => {
            localStorage.setItem('formSubmitted', 'newsletter');
        });
    }
    
    // Add sticky header on scroll
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    });
    
    // Add CSS for success messages
    const style = document.createElement('style');
    style.textContent = `
        .success-message {
            text-align: center;
            padding: 20px;
            animation: fadeIn 0.5s;
        }
        
        .success-icon {
            font-size: 3rem;
            color: var(--success);
            margin-bottom: 16px;
        }
        
        .success-message h3 {
            font-size: 1.5rem;
            margin-bottom: 8px;
        }
        
        .success-message p {
            color: var(--text-secondary);
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        nav.sticky {
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            background-color: rgba(255, 255, 255, 0.95);
        }
        
        body.no-scroll {
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);
    
    // Check if we're on the success page after a form submission
    const isSuccessPage = window.location.pathname.includes('success');
    if (isSuccessPage) {
        const formType = localStorage.getItem('formSubmitted');
        if (formType) {
            localStorage.removeItem('formSubmitted');
            // Can add custom success message handling here if needed
        }
    }
}); 