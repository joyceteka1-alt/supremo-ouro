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
