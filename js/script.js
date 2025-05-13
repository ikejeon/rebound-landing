document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
    
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
    
    // Waitlist form submission
    const waitlistForm = document.getElementById('waitlist-form');
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            
            // Here you would normally send the data to your backend
            // For now, we'll just simulate success and show a message
            
            waitlistForm.innerHTML = `<div class="success-message">
                <div class="success-icon"><i class="fas fa-check-circle"></i></div>
                <h3>Thank you for joining our waitlist!</h3>
                <p>We've sent a confirmation email to <strong>${email}</strong>.</p>
            </div>`;
            
            // You could also store in localStorage or send to a service like Mailchimp
            console.log('Waitlist signup:', email);
        });
    }
    
    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('newsletter-email').value;
            
            // Simulate success
            const formGroup = newsletterForm.querySelector('.form-group');
            formGroup.innerHTML = `<div class="success-message">
                <p><i class="fas fa-check-circle"></i> Successfully subscribed!</p>
            </div>`;
            
            console.log('Newsletter signup:', email);
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
            background-color: rgba(18, 18, 18, 0.95);
        }
        
        body.no-scroll {
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);
}); 