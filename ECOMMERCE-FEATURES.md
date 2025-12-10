# Diana Michelle Publishing - E-Commerce Features

## ✅ What's Been Added

### 1. **Shopping Cart System**
- **Floating Cart Button**: Fixed button in bottom-right corner showing cart item count
- **Sidebar Cart**: Slides in from the right with full cart details
- **Cart Features**:
  - Add/remove items
  - Adjust quantities (+/- buttons)
  - Real-time total calculation
  - Persistent storage (saves cart even if page is refreshed)

### 2. **Book Pricing**
- "Through the Eyes of Diana" now displays **$19.99**
- "Add to Cart" button with shopping cart icon
- Easy to add more books with pricing

### 3. **Checkout System**
- Full checkout modal with:
  - Order summary
  - Billing information form
  - Multiple payment methods

### 4. **Payment Methods Supported**
1. **💳 Credit/Debit Card**
   - Card number, expiry date, CVV fields
   
2. **🅿️ PayPal**
   - Redirect to PayPal option
   
3. **💰 Venmo**
   - Username: @DianaPublishing
   
4. **💵 Cash App**
   - Tag: $DianaPublishing

## 🎯 How It Works

### For Customers:
1. Click "Add to Cart" on any book
2. View cart by clicking the floating cart button (🛒)
3. Adjust quantities or remove items
4. Click "Proceed to Checkout"
5. Fill in billing information
6. Select payment method
7. Complete purchase

### For You (Admin):
Currently, the system shows success messages. To make it fully functional, you'll need to:

**Option 1: Use Stripe (Recommended)**
- Sign up at stripe.com
- Add Stripe.js integration
- Process real payments

**Option 2: Use PayPal**
- Set up PayPal Business account
- Integrate PayPal SDK

**Option 3: Manual Processing**
- Orders can be sent to your email
- Process payments manually via Venmo/Cash App

## 📝 Next Steps to Make It Live

1. **Set up a payment processor** (Stripe, PayPal, or Square)
2. **Add email notifications** for order confirmations
3. **Create an admin dashboard** to manage orders
4. **Add more books** with pricing
5. **Add shipping options** if selling physical books

## 🔧 Customization

### To Add More Books:
```html
<div class="book-card" data-product-id="2" data-product-name="Book Title" data-product-price="24.99" data-product-type="book">
    <div class="book-cover">
        <img src="book-cover-2.png" alt="Book Cover">
    </div>
    <h3 class="book-title">Book Title</h3>
    <p class="book-description">Description here...</p>
    <div class="book-pricing">
        <span class="book-price">$24.99</span>
        <button class="btn btn-primary add-to-cart" onclick="addToCart(2, 'Book Title', 24.99, 'book')">
            <span class="cart-icon">🛒</span> Add to Cart
        </button>
    </div>
</div>
```

### To Change Payment Usernames:
Edit in `index.html`:
- Line 383: Change `@DianaPublishing` (Venmo)
- Line 391: Change `$DianaPublishing` (Cash App)

## 🌐 Live Website
Your updated website is now live at:
**https://jmthorpe2016.github.io/Diana-michelle-publishing/**

Changes will be visible in 1-2 minutes!

## 💡 Features Summary
✅ Shopping cart with quantity management
✅ Persistent cart (saves on page refresh)
✅ Multiple payment methods
✅ Professional checkout flow
✅ Mobile responsive design
✅ Real-time total calculations
✅ Order summary before purchase

---

**Need help setting up real payment processing? Let me know!**
