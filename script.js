// Navbar scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const menuToggle = document.getElementById('mobile-menu');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    // Change icon between menu and close
    const icon = menuToggle.querySelector('i');
    if (navbar.classList.contains('active')) {
        icon.classList.remove('bx-menu');
        icon.classList.add('bx-x');
    } else {
        icon.classList.remove('bx-x');
        icon.classList.add('bx-menu');
    }
});

// Close mobile menu when clicking a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('bx-x');
            icon.classList.add('bx-menu');
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset for fixed header
                behavior: 'smooth'
            });
        }
    });
});

console.log('Supremo Ouro Premium Store loaded.');

// WhatsApp Checkout Logic
const checkoutBtns = document.querySelectorAll('.checkout-btn');
const whatsappNumber = '5531982522868'; 

checkoutBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        
        const productName = btn.getAttribute('data-name');
        const productPrice = btn.getAttribute('data-price');
        
        let message = '';
        if (productPrice) {
            message = `Olá equipe Supremo Ouro! Tenho interesse em finalizar a compra do produto: *${productName}* no valor de *R$ ${productPrice}*. Podemos seguir com o atendimento?`;
        } else {
            message = `Olá equipe Supremo Ouro! Cheguei através da *Sacola do Site* e gostaria de um atendimento para adquirir uma joia.`;
        }

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        
        window.open(whatsappUrl, '_blank');
    });
});

/* =============================================
   LGPD – Cookie Consent Banner
============================================= */
(function () {
    const CONSENT_KEY = 'supremo_ouro_cookie_consent';
    const banner = document.getElementById('cookie-banner');
    const btnAccept = document.getElementById('cookie-accept');
    const btnReject = document.getElementById('cookie-reject');

    function hideBanner() {
        banner.classList.remove('is-visible');
        // Slide back down after transition
        setTimeout(() => { banner.style.display = 'none'; }, 600);
    }

    // Show banner only if user hasn't decided yet
    if (!localStorage.getItem(CONSENT_KEY)) {
        // Small delay for better UX (page loads first)
        setTimeout(() => {
            banner.style.display = '';
            requestAnimationFrame(() => banner.classList.add('is-visible'));
        }, 800);
    } else {
        banner.style.display = 'none';
    }

    btnAccept.addEventListener('click', () => {
        localStorage.setItem(CONSENT_KEY, 'all');
        hideBanner();
    });

    btnReject.addEventListener('click', () => {
        localStorage.setItem(CONSENT_KEY, 'essential');
        hideBanner();
    });
})();

/* =============================================
   LGPD – Modals (Privacy Policy & Terms)
============================================= */
(function () {
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) return;
        modal.classList.add('is-open');
        document.body.style.overflow = 'hidden';
        // Scroll modal body back to top each open
        const body = modal.querySelector('.lgpd-modal__body');
        if (body) body.scrollTop = 0;
    }

    function closeModal(modal) {
        modal.classList.remove('is-open');
        document.body.style.overflow = '';
    }

    // Wire up all [data-close-modal] elements inside each modal
    document.querySelectorAll('.lgpd-modal').forEach(modal => {
        modal.querySelectorAll('[data-close-modal]').forEach(el => {
            el.addEventListener('click', () => closeModal(modal));
        });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.lgpd-modal.is-open').forEach(m => closeModal(m));
        }
    });

    // Open triggers — footer bottom links
    document.getElementById('open-privacy')?.addEventListener('click', (e) => {
        e.preventDefault(); openModal('modal-privacy');
    });
    document.getElementById('open-terms')?.addEventListener('click', (e) => {
        e.preventDefault(); openModal('modal-terms');
    });

    // Open triggers — footer nav column links
    document.getElementById('open-privacy-nav')?.addEventListener('click', (e) => {
        e.preventDefault(); openModal('modal-privacy');
    });
    document.getElementById('open-terms-nav')?.addEventListener('click', (e) => {
        e.preventDefault(); openModal('modal-terms');
    });
})();

