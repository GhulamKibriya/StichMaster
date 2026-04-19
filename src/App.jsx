import React, { useState, useEffect } from 'react';
import './App.css';

// SVG Icons as components
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const CartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
);

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const products = [
  {
    id: 1,
    title: "Batman Compression Tee",
    price: "Rs. 13,000.00",
    image: "https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?q=80&w=800&auto=format&fit=crop",
    badge: "Sale"
  },
  {
    id: 2,
    title: "Straight Leg Pumper Pants",
    price: "Rs. 6,000.00",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Fade Graphic T-Shirt",
    price: "Rs. 3,500.00",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop",
    badge: "New"
  },
  {
    id: 4,
    title: "Superman Compression Tee",
    price: "Rs. 9,000.00",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Oversized Drop Shoulder",
    price: "Rs. 4,500.00",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Essential Hoodie Black",
    price: "Rs. 8,500.00",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Classic Cuban Shirt",
    price: "Rs. 5,000.00",
    image: "https://plus.unsplash.com/premium_photo-1673356301535-224a0ececbca?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Men's Relaxed Joggers",
    price: "Rs. 5,500.00",
    image: "https://images.unsplash.com/photo-1550246140-5119ae4790b8?q=80&w=800&auto=format&fit=crop",
  }
];

const categories = [
  {
    id: 1,
    title: "Anabolic Drop",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Oversized Tees",
    image: "https://images.unsplash.com/photo-1529391409740-59f2cea08bc6?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Youngla for Her",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop"
  }
];

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-content">
            <button className="nav-menu-btn">
              <MenuIcon />
            </button>
            
            <div className="nav-logo">
              <h1>Exportify</h1>
            </div>

            <div className="nav-links">
              <a href="#power-drop">Power Drop</a>
              <a href="#categories">Categories</a>
              <a href="#compression">Compression</a>
              <a href="#hoodies">Hoodies</a>
            </div>

            <div className="nav-actions">
              <button aria-label="Search"><SearchIcon /></button>
              <button aria-label="Account"><UserIcon /></button>
              <button aria-label="Cart"><CartIcon /></button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <img 
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2000&auto=format&fit=crop" 
          alt="Streetwear Banner" 
          className="hero-img" 
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h2>Premium Export Leftovers</h2>
          <p>Authentic big brand quality. Unbeatable prices. Upgrade your wardrobe with our latest drops.</p>
          <a href="#power-drop" className="btn-primary">Shop The Drop</a>
        </div>
      </section>

      {/* Products Section */}
      <section id="power-drop" className="products-section">
        <div className="container">
          <div className="section-heading">
            <h3>Power Drop</h3>
            <div className="underline"></div>
          </div>
          
          <div className="products-grid">
            {products.map(product => (
              <div className="product-card" key={product.id}>
                <div className="product-image-wrapper">
                  {product.badge && (
                    <div className="product-badges">
                      <span className={`badge ${product.badge.toLowerCase()}`}>
                        {product.badge}
                      </span>
                    </div>
                  )}
                  <img src={product.image} alt={product.title} className="product-img" loading="lazy" />
                  <button className="product-action-btn">Quick Add</button>
                </div>
                <div className="product-info">
                  <h4 className="product-title">{product.title}</h4>
                  <p className="product-price">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="categories-section">
        <div className="container">
          <div className="section-heading">
            <h3>Shop by Category</h3>
            <div className="underline"></div>
          </div>
          
          <div className="categories-grid">
            {categories.map(category => (
              <div className="category-card" key={category.id}>
                <img src={category.image} alt={category.title} className="category-img" loading="lazy" />
                <div className="category-overlay"></div>
                <div className="category-content">
                  <h4>{category.title}</h4>
                  <span className="category-link">
                    Shop Now
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-col">
              <h5>Exportify.pk</h5>
              <p>Welcome to Exportify.pk, your go-to for high-quality export leftover clothing from big brands. Find authentic apparel at unbeatable prices.</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Enter your email" aria-label="Email address" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
            
            <div className="footer-col">
              <h5>Quick Links</h5>
              <div className="footer-links">
                <a href="#return">Return and Exchange</a>
                <a href="#contact">Contact Us</a>
                <a href="#sizing">Sizing Guide</a>
                <a href="#faqs">FAQs</a>
              </div>
            </div>
            
            <div className="footer-col">
              <h5>Contact Us</h5>
              <div className="footer-links">
                <p>WhatsApp: 0319-8378147</p>
                <p>Email: shopexportify@gmail.com</p>
                <p>Hours: 12:00 PM till 6:00 PM</p>
                <p>(Sunday off)</p>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Exportify.pk. All rights reserved.</p>
            <div className="social-links">
              <a href="#instagram" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
