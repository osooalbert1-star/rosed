document.addEventListener('DOMContentLoaded', () => {
    // Header background change on scroll
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.05)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.8)';
            header.style.boxShadow = 'none';
        }
    });

    // Cart functionalitiy
    let cartCount = 0;
    const cartCountElement = document.querySelector('.cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            cartCount++;
            cartCountElement.textContent = cartCount;

            // Subtle button animation
            const originalText = button.textContent;
            button.textContent = 'Added!';
            button.style.background = '#8DAFB5';
            button.style.color = 'white';

            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = 'transparent';
                button.style.color = '#8DAFB5';
            }, 1000);

            // Add simple feedback animation to cart icon
            const cartIcon = document.querySelector('.cart-btn');
            cartIcon.style.transform = 'scale(1.2)';
            setTimeout(() => {
                cartIcon.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Reveal animation on scroll (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.product-card, .category-card, .about-text, .about-img').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});
