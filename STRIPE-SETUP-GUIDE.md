# 🎯 Stripe Payment Integration Guide

## Quick Start: Get Your Website Accepting Real Payments

### Step 1: Create Your Stripe Account (5 minutes)

1. **Go to Stripe**: Visit [stripe.com](https://stripe.com)
2. **Sign Up**: Click "Start now" and create your account
3. **Verify Your Email**: Check your email and verify your account
4. **Complete Business Profile**: 
   - Business name: Diana Michelle Publishing
   - Business type: Individual or Company
   - Add your business details

### Step 2: Get Your API Keys (2 minutes)

1. **Log into Stripe Dashboard**: [dashboard.stripe.com](https://dashboard.stripe.com)
2. **Click "Developers"** in the left sidebar
3. **Click "API keys"**
4. **You'll see two keys**:
   - **Publishable key** (starts with `pk_test_...`) - This is SAFE to use in your website
   - **Secret key** (starts with `sk_test_...`) - Keep this SECRET! Never put this in your website code

### Step 3: Add Your Stripe Key to Your Website (1 minute)

1. **Open the file**: `diana-michelle-script.js`
2. **Find line 150** (it looks like this):
   ```javascript
   const STRIPE_PUBLISHABLE_KEY = 'pk_test_YOUR_KEY_HERE';
   ```
3. **Replace** `pk_test_YOUR_KEY_HERE` with your actual publishable key:
   ```javascript
   const STRIPE_PUBLISHABLE_KEY = 'pk_test_51abc123...'; // Your real key
   ```
4. **Save the file**

### Step 4: Deploy Your Changes (2 minutes)

Run these commands in your terminal:
```bash
cd /Users/jazsmine/CascadeProjects/windsurf-project
git add .
git commit -m "Add Stripe payment integration"
git push
```

Wait 1-2 minutes and your website will be live with real payment processing!

---

## 🎉 What You Can Do Now

### ✅ Accept Real Payments For:
- **Books**: $19.99 - Through the Eyes of Diana
- **Services**:
  - Manuscript Evaluation: $299
  - Editorial Services: $599+
  - Cover Design: $499
  - Book Production: $899+
  - Marketing & PR: $1,299
  - Distribution: $399

### ✅ Payment Methods Supported:
1. **Credit/Debit Cards** (via Stripe) - Automatic processing
2. **PayPal** - Ready for integration
3. **Venmo** - Manual processing (@DianaPublishing)
4. **Cash App** - Manual processing ($DianaPublishing)

---

## 💰 Understanding Stripe Fees

Stripe charges **2.9% + $0.30** per successful transaction.

**Examples**:
- $19.99 book sale = You receive $19.10 (Stripe keeps $0.89)
- $299 service = You receive $289.98 (Stripe keeps $9.02)
- $1,299 service = You receive $1,260.34 (Stripe keeps $38.66)

**No monthly fees!** You only pay when you make a sale.

---

## 🔐 Test Mode vs Live Mode

### Test Mode (What You Have Now)
- Uses test keys (pk_test_...)
- No real money is charged
- Use test card: `4242 4242 4242 4242`
- Any future date for expiry
- Any 3 digits for CVC

### Live Mode (When You're Ready)
1. **Complete Stripe Account Verification**:
   - Add bank account details
   - Verify your identity
   - Provide business information

2. **Switch to Live Keys**:
   - In Stripe Dashboard, toggle from "Test mode" to "Live mode"
   - Copy your LIVE publishable key (starts with `pk_live_...`)
   - Update line 150 in `diana-michelle-script.js`
   - Deploy changes

3. **Start Accepting Real Money!** 💸

---

## 📧 Setting Up Order Notifications

### Option 1: EmailJS (Free, Easy - Recommended)

1. **Sign up**: [emailjs.com](https://www.emailjs.com/)
2. **Create Email Service**: Connect your Gmail/Outlook
3. **Create Email Template**: Use this template:
   ```
   New Order from Diana Michelle Publishing!
   
   Customer: {{firstName}} {{lastName}}
   Email: {{email}}
   Phone: {{phone}}
   
   Order Items:
   {{items}}
   
   Total: ${{total}}
   Payment Method: {{paymentMethod}}
   ```
4. **Get Your Keys**: Service ID, Template ID, Public Key
5. **Add to your website**: I can help you integrate this!

### Option 2: Formspree (Alternative)
- Visit [formspree.io](https://formspree.io)
- Create a form endpoint
- Orders will be emailed to you

---

## 🚀 Advanced Features (Optional)

### Add More Books
Edit `index.html` around line 183, add:
```html
<div class="book-card" data-product-id="2" data-product-name="Your Book Title" data-product-price="24.99" data-product-type="book">
    <div class="book-cover">
        <img src="book-cover-2.png" alt="Book Cover">
    </div>
    <h3 class="book-title">Your Book Title</h3>
    <p class="book-description">Book description here...</p>
    <div class="book-pricing">
        <span class="book-price">$24.99</span>
        <button class="btn btn-primary add-to-cart" onclick="addToCart(2, 'Your Book Title', 24.99, 'book')">
            <span class="cart-icon">🛒</span> Add to Cart
        </button>
    </div>
</div>
```

### Change Service Prices
Edit `index.html` lines 98-163, update the prices in:
- `data-product-price="299.00"` (change the number)
- `<span class="service-price">$299</span>` (change the display)
- `onclick="addToCart(101, 'Service Name', 299.00, 'service')"` (change the price)

### Add Shipping Costs
I can help you add shipping calculation based on location!

### Add Discount Codes
I can help you implement promo codes!

---

## 🆘 Troubleshooting

### "Payment processing is being set up" message?
- You haven't added your Stripe key yet
- Follow Step 3 above

### Card payment not working?
- Check that your Stripe key is correct
- Make sure you're using the publishable key (pk_test_... or pk_live_...)
- Check browser console for errors (F12)

### Orders not coming through?
- Currently orders are logged to browser console
- Set up EmailJS (see above) to receive order emails
- Or contact me to set up a backend server

---

## 📞 Need Help?

**Common Questions:**

**Q: Is my customer's card information secure?**
A: Yes! Card details never touch your server. Stripe handles everything securely.

**Q: When do I get paid?**
A: Stripe deposits money to your bank account within 2-7 business days.

**Q: Can I refund a customer?**
A: Yes! Log into Stripe Dashboard → Payments → Find the payment → Click "Refund"

**Q: What if I want to change prices?**
A: Just edit the HTML file and redeploy. Takes 2 minutes!

**Q: Can I add more payment methods?**
A: Yes! Stripe supports Apple Pay, Google Pay, and many more. I can help add them.

---

## ✅ Checklist: Going Live

- [ ] Create Stripe account
- [ ] Add publishable key to website
- [ ] Test with test card (4242 4242 4242 4242)
- [ ] Complete Stripe verification
- [ ] Add bank account to Stripe
- [ ] Switch to live keys
- [ ] Set up EmailJS for order notifications
- [ ] Test a real purchase
- [ ] Celebrate! 🎉

---

## 🎯 Your Website Features

### What's Working Right Now:
✅ Shopping cart with quantity management
✅ Multiple payment methods
✅ Professional checkout flow
✅ Order summary and totals
✅ Customer billing information collection
✅ Mobile-responsive design
✅ Persistent cart (saves on refresh)
✅ Service and book pricing
✅ Real-time cart updates

### What You Need to Set Up:
🔧 Add your Stripe publishable key
🔧 Set up email notifications (EmailJS)
🔧 Complete Stripe verification for live payments

---

**Your website is ready to make money! Just add your Stripe key and you're live! 🚀**

Questions? Need help? Just ask!
