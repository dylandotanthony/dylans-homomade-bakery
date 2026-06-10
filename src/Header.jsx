import React from 'react';

// Import the images needed for the Header
import bannerImg from './assets/banner.png';
import facebookIcon from './assets/facebook.svg';
import instagramIcon from './assets/instagram.svg';
import tiktokIcon from './assets/tiktok.svg';
import linkedinIcon from './assets/linkedin.svg';
import nextdoorIcon from './assets/nextdoor.svg';

export default function Header() {
  return (
    <>
      {/* Banner Section - Removed inline styles so it relies on your index.css perfectly */}
      <div className="banner-container shadow-sm border border-dark mx-auto">
        <img className="banner-img" src={bannerImg} alt="Dylan's HomoMade Goods Banner" />
        <div className="position-absolute start-50 translate-middle-x w-100 px-3" style={{ bottom: '-40px' }}>
          <h1 className="responsive-title bg-white px-4 py-2 rounded-pill shadow-sm border border-dark m-0">
            Dylan's HomoMade Goods
          </h1>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="d-flex justify-content-center flex-wrap gap-3 mb-4 mt-5">
        <a href="https://www.facebook.com/DylansHomoMadeGoods" className="social-circle bg-facebook shadow-sm" target="_blank" rel="noopener noreferrer"><img src={facebookIcon} alt="Facebook" /></a>
        <a href="https://www.instagram.com/dylanshomomadegood" className="social-circle bg-instagram shadow-sm" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="Instagram" /></a>
        <a href="https://www.tiktok.com/@dylanshomomadegoods" className="social-circle bg-tiktok shadow-sm" target="_blank" rel="noopener noreferrer"><img src={tiktokIcon} alt="TikTok" /></a>
        <a href="https://www.linkedin.com/company/dylanshomomadegoods" className="social-circle bg-linkedin shadow-sm" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="LinkedIn" /></a>
        <a href="https://nextdoor.com/page/dylans-homomade-goods-westminster-co/" className="social-circle bg-nextdoor shadow-sm" target="_blank" rel="noopener noreferrer"><img src={nextdoorIcon} alt="Nextdoor" /></a>
      </div>
    </>
  );
}
