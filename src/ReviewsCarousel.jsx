import React, { useState, useEffect, useRef } from 'react';

export default function ReviewsCarousel() {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const rotationInterval = useRef(null);

  const apiUrl = "https://sheetdb.io/api/v1/viw0o8stf9r05";

  // This function handles the 5-second timer
  const startRotation = () => {
    clearInterval(rotationInterval.current);
    rotationInterval.current = setInterval(() => {
      if (reviews.length) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      }
    }, 5000);
  };

  // Fetch data when the component first loads
  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Filter for only verified orders
        const verified = data.filter(review => review["Verified Order"] === "Yes");
        setReviews(verified);
      })
      .catch(err => console.error("Error loading reviews:", err));

    // Cleanup: stop the timer if the user leaves the page
    return () => clearInterval(rotationInterval.current);
  }, []);

  // Start the timer once we actually have reviews
  useEffect(() => {
    if (reviews.length > 0) {
      startRotation();
    }
  }, [reviews]);

  const handleNext = () => {
    if (!reviews.length) return;
    setCurrentIndex((currentIndex + 1) % reviews.length);
    startRotation(); // Reset timer so it doesn't skip immediately
  };

  const handlePrev = () => {
    if (!reviews.length) return;
    setCurrentIndex((currentIndex - 1 + reviews.length) % reviews.length);
    startRotation(); // Reset timer so it doesn't skip immediately
  };

  if (reviews.length === 0) {
    return (
      <section className="reviews-section">
        <h2>What Our Crusties Are Saying 🍞</h2>
        <p className="text-muted my-3">Loading verified reviews...</p>
      </section>
    );
  }

  const currentReview = reviews[currentIndex];

  return (
    <section className="reviews-section mb-4 border-bottom border-dark pb-3">
      <h2>What Our Crusties Are Saying 🍞</h2>
      <div className="review-card flex-column my-2">
        <div className="stars text-warning fs-5">
          {"⭐".repeat(Number(currentReview["Number Rating"]) || 5)}
        </div>
        <h3 className="review-title">{currentReview["Review Title"]}</h3>
        <p className="review-text">"{currentReview["Review Text"]}"</p>
        <h4 className="review-name">— {currentReview["Reviewer Name"]}</h4>
        <div className="review-date">{currentReview["Date / Timeframe"]}</div>
      </div>
      <div className="carousel-controls d-flex justify-content-center gap-3 mt-2">
        <button onClick={handlePrev} aria-label="Previous Review">←</button>
        <button onClick={handleNext} aria-label="Next Review">→</button>
      </div>
    </section>
  );
}
