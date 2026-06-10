import React from 'react';
import { Link } from 'react-router-dom'; // <--- ADD THIS LINE RIGHT HERE
import Header from './Header'; // <--- Bring in the Header
import Footer from './Footer'; // <--- Bring in the Footer
import ReviewsCarousel from './ReviewsCarousel';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import all images directly from src/assets/
import bannerImg from './assets/banner.png';
import logoImg from './assets/Logo.png';
import facebookIcon from './assets/facebook.svg';
import instagramIcon from './assets/instagram.svg';
import tiktokIcon from './assets/tiktok.svg';
import linkedinIcon from './assets/linkedin.svg';
import nextdoorIcon from './assets/nextdoor.svg';
import facebookLogoSvg from './assets/Facebook-f_Logo.svg';
import smsIcon from './assets/generic-sms.svg';
import emailIcon from './assets/generic-email.svg';
import venmoQr from './assets/venmo-qr.png';
import venmoIcon from './assets/venmo.svg';
import paypalIcon from './assets/paypal.svg';
import amazonIcon from './assets/amazon.svg';

export default function Home() {
  return (
    <div className="container pb-5 text-center">
      <div className="column">
        
        {/* Banner Section */}
        {/* Replace 25 lines of code with this one tag! */}
        <Header />

        {/* Bio */}
        <div style={{ marginTop: '20px' }}>
          <p className="bg-white p-3 rounded-4 shadow-sm mb-3 border border-dark" style={{ color: 'black' }}>
            Crusty & Baked to Order 🌈🥖 Toaster-ready, small-batch sourdough made with love, pride, & a wild lil’ starter named Crustpell Roan 💅 Get them carbs
          </p>
        </div>

        {/* Main Content Rows */}
        <div className="row g-4 text-start">
          
          {/* Card 1: Shop & Info */}
          <div className="col-12">
            <div className="card shadow-sm border-0">
              <div className="card-body text-center d-flex flex-column justify-content-center pb-3">
                <h3 className="card-title h4 mb-3 mt-2 font-weight-bold">🍞 Fresh HomoMade Sourdough 🥖</h3>
                <p className="mb-4 text-muted">Order your loaves, bagels, english muffs, and specialty focaccia directly from our shop!</p>
                <a className="btn btn-cta" href="https://bakesy.shop/b/dylans-homomade-goods" target="_blank" rel="noopener noreferrer">
                  <img className="icon-logo" aria-hidden="true" src={logoImg} alt="Logo" style={{ marginRight: '12px' }} />Order Here, Get Crusty<img className="icon-logo" aria-hidden="true" src={logoImg} alt="Logo" style={{ marginLeft: '12px' }} />
                </a>
<Link className="btn btn-outline-info mt-2" to="/nutrition">Nutritional Information</Link>
                <a className="btn btn-outline-info mt-2" href="https://bakesy.shop/b/dylans-homomade-goods/faqs" target="_blank" rel="noopener noreferrer">Frequently Asked Questions</a>
                
                {/* Accordion: Care Tips */}
                <div className="accordion mt-2 w-100" id="breadCareAccordion">
                  <div className="accordion-item" style={{ border: 'none', background: 'transparent' }}>
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed shadow-sm" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBreadCare">
                        <span style={{ flex: 1, textAlign: 'center' }}>💡 Sourdough Care Tips 🥖</span>
                      </button>
                    </h2>
                    <div id="collapseBreadCare" className="accordion-collapse collapse" data-bs-parent="#breadCareAccordion">
                      <div className="accordion-body text-start mt-2 border border-dark" style={{ backgroundColor: '#f8f9fa', borderRadius: '20px', fontSize: '0.95rem', padding: '20px', color: 'black' }}>
                        <p className="mb-1 fw-bold text-center" style={{ fontSize: '1.1rem' }}>🥖 Bread Care ❤️</p>
                        <p style={{ lineHeight: '1.6' }}>
                          <strong>🥯 Bagels & English Muffs:</strong> Keep in bread bag 1 day, then move to a loosely closed plastic bag.<br />
                          <strong>🍞 Loaves:</strong> Store 1–2 days. Once cut, transfer to a plastic bag. Stays fresh 4–5 days at room temp.<br />
                          <strong>✨ Inclusions/Focaccia:</strong> Freeze after 2–3 days if not consumed.<br />
                          <strong>❄️ Freezing:</strong> Wrap tightly in plastic, then place in a freezer bag.<br />
                          <strong>🔥 Refresh:</strong> Mist and bake at 350°F for 8–12 mins. Toast slices as needed.<br />
                          <strong>💧 Dry bread?</strong> Lightly moisten, wrap in foil, and warm to revive.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Schedule */}
          <div className="col-12">
            <div className="card shadow-sm border-0">
              <div className="card-body text-center">
                <h3 className="card-title h5 mb-3 font-weight-bold">🍞📅 Sourdough Schedule 📅🥖</h3>
                <iframe src="https://calendar.google.com/calendar/embed?src=fa6f05beb1b59977c7330102413a07ac92ddea53dae7249e82ed1dfbd6bd161e%40group.calendar.google.com&ctz=America%2FDenver&mode=AGENDA" style={{ border: 0, width: '100%', height: '400px', borderRadius: '8px' }} scrolling="no"></iframe>
              </div>
            </div>
          </div>

          {/* Card 3: Facebook Feed */}
          <div className="col-12">
            <div className="card shadow-sm border-0">
              <div className="card-body text-center">
                <h3 className="card-title h5 mb-3 font-weight-bold d-flex align-items-center justify-content-center">
                  <img src={facebookLogoSvg} alt="Facebook Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                  The Latest on DHG
                  <img src={facebookLogoSvg} alt="Facebook Logo" style={{ width: '20px', height: '20px', marginLeft: '10px' }} />
                </h3>
                <div className="d-flex justify-content-center w-100">
                  <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FDylansHomoMadeGoods&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" width="500" height="500" style={{ border: 'none', overflow: 'hidden', display: 'block' }} scrolling="no" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Contact */}
          <div className="col-12">
            <div className="card shadow-sm border-0">
              <div className="card-body text-center">
                <h3 className="card-title h5 mb-3 font-weight-bold">📧 Get in Touch 📱</h3>
                <div className="row g-2 mb-2">
                  <div className="col-6"><a className="btn btn-outline-info m-0" href="sms:+13035917472" target="_blank" rel="noopener noreferrer"><img className="icon" aria-hidden="true" src={smsIcon} alt="Text Icon" />Text us</a></div>
                  <div className="col-6"><a className="btn btn-outline-info m-0" href="mailto:hello@dylanshomomadegoods.com" target="_blank" rel="noopener noreferrer"><img className="icon" aria-hidden="true" src={emailIcon} alt="Email Icon" />Email Us</a></div>
                </div>
                <a className="button button-whatsapp" href="https://wa.me/13035917472" target="_blank" rel="noopener noreferrer" role="button">
                  <i className="bi bi-whatsapp me-2"></i>WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Card 5: Combined Reviews Section & Links */}
          <div className="col-12">
            <div className="card shadow-sm border-0">
              <div className="card-body text-center pb-3">
                <h3 className="card-title h5 mb-3 font-weight-bold">📝 Reviews & Updates 💌</h3>
                
                {/* Dynamically Injecting our Custom Review Carousel Component */}
                <ReviewsCarousel />

                {/* Static Links */}
                <div className="row g-2">
                  <div className="col-6"><a className="btn btn-outline-info m-0" href="https://bakesy.shop/b/dylans-homomade-goods/reviews" target="_blank" rel="noopener noreferrer"> Bakesy Reviews</a></div>
                  <div className="col-6"><a className="btn btn-outline-info m-0" href="https://g.page/r/CRrDIEmyyP6HEAE/review" target="_blank" rel="noopener noreferrer">Google Reviews</a></div>
                  <div className="col-6"><a className="btn btn-outline-info m-0" href="https://voyagedenver.com/interview/check-out-dylan-daughenbaughs-story" target="_blank" rel="noopener noreferrer">Dylan's Story</a></div>
                  <div className="col-6"><a className="btn btn-outline-info m-0" href="https://subscribepage.io/JWJH7P" target="_blank" rel="noopener noreferrer">Subscribe</a></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 6: Support / Donations */}
          <div className="col-12">
            <div className="card shadow-sm border-0">
              <div className="card-body text-center pb-3">
                <h3 className="card-title h5 mb-3 mt-2 font-weight-bold">🎁 Support the Bakery 💸 </h3>
                <div className="row align-items-center mb-3">
                  <div className="col-6">
                    <img src={venmoQr} alt="Venmo QR Code" className="img-fluid border border-dark rounded-3" />
                  </div>
                  <div className="col-6">
                    <a className="button button-venmo m-0 mb-2" href="https://venmo.com/dylanshomomadegoods" target="_blank" rel="noopener noreferrer" role="button"><img className="icon" aria-hidden="true" src={venmoIcon} alt="Venmo Logo" />Venmo</a>
                    <a className="button button-paypal m-0" href="https://paypal.com/dylanshomomadegoods" target="_blank" rel="noopener noreferrer" role="button"><img className="icon" aria-hidden="true" src={paypalIcon} alt="PayPal Logo" />PayPal</a>
                  </div>
                </div>
                <a className="button button-amazon m-0" href="https://www.amazon.com/registries/gl/guest-view/1H8P7FQ2QP6O5?ref_=cm_sw_r_cp_ud_ggr-subnav-share_67DF586JW5W3XPYQJHNV" target="_blank" rel="noopener noreferrer" role="button">
                  <img className="icon" aria-hidden="true" src={amazonIcon} alt="Amazon Wishlist Logo" />Crusty Dreams Wishlist
                </a>
              </div>
            </div>
          </div>
          
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
