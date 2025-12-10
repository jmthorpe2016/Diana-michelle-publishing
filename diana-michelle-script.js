// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scroll with offset for fixed navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
const animatedElements = document.querySelectorAll('.service-card, .author-card, .book-card, .stat-item');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the form data to a server
    // For now, we'll just show a success message
    alert(`Thank you, ${name}! Your message has been received. We'll get back to you at ${email} soon.`);
    
    // Reset form
    contactForm.reset();
});

// Newsletter Form Submission
const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing! We'll send updates to ${email}.`);
    newsletterForm.reset();
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// Add active class styling
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--accent-color);
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - scrolled / 700;
    }
});

// Counter animation removed - stats display as-is without animation

// Shopping Cart Functionality
let cart = [];

// Stripe Configuration
// IMPORTANT: Replace 'YOUR_PUBLISHABLE_KEY_HERE' with your actual Stripe publishable key
const STRIPE_PUBLISHABLE_KEY = 'pk_test_YOUR_KEY_HERE'; // Replace with your key
let stripe = null;

// Initialize Stripe when DOM is loaded
if (typeof Stripe !== 'undefined') {
    try {
        // Only initialize if a real key is provided
        if (STRIPE_PUBLISHABLE_KEY !== 'pk_test_YOUR_KEY_HERE') {
            stripe = Stripe(STRIPE_PUBLISHABLE_KEY);
        }
    } catch (error) {
        console.log('Stripe initialization pending - add your publishable key');
    }
}

function addToCart(id, name, price, type) {
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: id,
            name: name,
            price: price,
            type: type,
            quantity: 1
        });
    }
    
    updateCart();
    showCartNotification(name);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

function updateQuantity(id, change) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(id);
        } else {
            updateCart();
        }
    }
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');
    
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Calculate total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;
    
    // Update cart items display
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">📚</div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <div class="cart-item-quantity">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">🗑️</button>
            </div>
        `).join('');
    }
    
    // Save cart to localStorage
    localStorage.setItem('dmpCart', JSON.stringify(cart));
}

function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    cartSidebar.classList.toggle('active');
}

function showCartNotification(itemName) {
    // Optional: Add a toast notification
    alert(`"${itemName}" added to cart!`);
}

function proceedToCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    toggleCart();
    openCheckout();
}

function openCheckout() {
    const modal = document.getElementById('checkoutModal');
    const checkoutItems = document.getElementById('checkoutItems');
    const checkoutTotal = document.getElementById('checkoutTotal');
    
    // Calculate total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    checkoutTotal.textContent = `$${total.toFixed(2)}`;
    
    // Display items
    checkoutItems.innerHTML = cart.map(item => `
        <div class="checkout-item">
            <span>${item.name} x ${item.quantity}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
    `).join('');
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCheckout() {
    const modal = document.getElementById('checkoutModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Payment method switching
document.addEventListener('DOMContentLoaded', () => {
    // Load cart from localStorage
    const savedCart = localStorage.getItem('dmpCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
    
    // Payment method toggle
    const paymentRadios = document.querySelectorAll('input[name="paymentMethod"]');
    paymentRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            // Hide all payment fields
            document.querySelectorAll('.payment-fields').forEach(field => {
                field.style.display = 'none';
            });
            
            // Show selected payment fields
            const selectedMethod = e.target.value;
            const fieldId = selectedMethod + 'PaymentFields';
            const selectedField = document.getElementById(fieldId);
            if (selectedField) {
                selectedField.style.display = 'block';
            }
        });
    });
    
    // Checkout form submission
    const checkoutForm = document.getElementById('checkoutForm');
    checkoutForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(checkoutForm);
        const paymentMethod = formData.get('paymentMethod');
        
        // Disable submit button to prevent double submission
        const submitBtn = checkoutForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Processing...';
        
        try {
            if (paymentMethod === 'card' && stripe) {
                // Process with Stripe
                await processStripePayment(formData);
            } else if (paymentMethod === 'paypal') {
                // PayPal integration would go here
                alert('PayPal integration: You would be redirected to PayPal to complete payment.\n\nFor now, order is recorded.');
                completeOrder(formData, paymentMethod);
            } else if (paymentMethod === 'venmo' || paymentMethod === 'cashapp') {
                // Manual payment methods
                const username = paymentMethod === 'venmo' ? 
                    formData.get('venmoUsername') : 
                    formData.get('cashappTag');
                
                if (!username) {
                    alert(`Please enter your ${paymentMethod === 'venmo' ? 'Venmo username' : 'Cash App tag'}`);
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                    return;
                }
                
                alert(`Please send $${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)} to ${paymentMethod === 'venmo' ? '@DianaPublishing' : '$DianaPublishing'}\n\nOnce payment is confirmed, your order will be processed.`);
                completeOrder(formData, paymentMethod);
            } else {
                // Fallback for when Stripe is not configured
                alert('Payment processing is being set up. Your order has been recorded and we will contact you to complete payment.\n\nThank you for your order!');
                completeOrder(formData, paymentMethod);
            }
        } catch (error) {
            console.error('Payment error:', error);
            alert('There was an error processing your payment. Please try again or contact us directly.');
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });
    
    // Process Stripe payment
    async function processStripePayment(formData) {
        // In a real implementation, you would:
        // 1. Send cart data to your server
        // 2. Server creates a Stripe Payment Intent
        // 3. Server returns client secret
        // 4. Use stripe.confirmCardPayment() with the client secret
        
        // For now, simulate the process
        alert('Stripe Payment Processing:\n\nIn production, this will securely process your card through Stripe.\n\nYour order has been recorded!');
        completeOrder(formData, 'card');
    }
    
    // Complete order and clear cart
    function completeOrder(formData, paymentMethod) {
        // Here you would send order data to your server/email
        const orderData = {
            items: cart,
            total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
            customer: {
                firstName: formData.get('firstName'),
                lastName: formData.get('lastName'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                address: formData.get('address'),
                city: formData.get('city'),
                state: formData.get('state'),
                zip: formData.get('zip')
            },
            paymentMethod: paymentMethod,
            date: new Date().toISOString()
        };
        
        console.log('Order placed:', orderData);
        
        // Send order confirmation email (you would implement this with EmailJS or similar)
        // emailjs.send('service_id', 'template_id', orderData);
        
        // Clear cart
        cart = [];
        updateCart();
        closeCheckout();
        
        // Show success message
        alert(`✅ Order Confirmed!\n\nThank you for your order!\nConfirmation email will be sent to ${orderData.customer.email}`);
    }
    
    // Close modal when clicking outside
    const modal = document.getElementById('checkoutModal');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeCheckout();
        }
    });
});

console.log('Diana Michelle Publishing website loaded successfully!');
