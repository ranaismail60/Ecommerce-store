import React from 'react';

const About = () => {
  return (
    <main className="about-page">
      <section className="about-hero">
        <h1>About Cloth Store</h1>
        <p className="about-intro">
          Welcome to Cloth Store – your destination for trendy, high-quality clothing with an easy shopping experience.
        </p>
      </section>

      <section className="about-content">
        <div className="about-item">
          <h2>Our Mission</h2>
          <p>
            We believe shopping for clothes should be simple and enjoyable. That's why we showcase each design with multiple photos so you can see exactly what you're getting before you order.
          </p>
        </div>

        <div className="about-item">
          <h2>How It Works</h2>
          <p>
            Browse our product collection, explore each design with up to three detailed photos, add your favorites to the cart, and complete your order directly via WhatsApp. No complicated checkout needed.
          </p>
        </div>

        <div className="about-item">
          <h2>Why Choose Us</h2>
          <ul>
            <li>Multiple photos per product for better decision-making</li>
            <li>Fast and simple ordering process</li>
            <li>Direct WhatsApp ordering – no registration required</li>
            <li>Fresh designs added regularly</li>
            <li>Best prices with seasonal discounts</li>
          </ul>
        </div>

        <div className="about-item">
          <h2>Contact & Support</h2>
          <p>
            Have questions? Reach out to us via WhatsApp or visit our Products page to explore our latest collection.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
