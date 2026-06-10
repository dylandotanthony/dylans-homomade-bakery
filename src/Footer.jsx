import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-5 text-center pb-4" style={{ color: '#000' }}>
      <div className="mb-2 fw-bold" style={{ fontSize: '1.1rem' }}> Dylan's HomoMade Goods &trade; est. 2025</div>
      <p className="text-muted mx-auto mb-3 px-3" style={{ fontSize: '0.7rem', maxWidth: '550px', lineHeight: '1.4' }}>
        This product was produced in a home kitchen that is not subject to state licensure or inspection and that may also process common food allergens such as tree nuts, peanuts, eggs, soy, wheat, milk, fish, and crustacean shellfish. This product is not intended for resale.
      </p>
      <a href="privacy.html" style={{ color: '#000', textDecoration: 'none' }}>Privacy Policy</a>
    </footer>
  );
}
