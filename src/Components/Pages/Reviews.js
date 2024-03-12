
import React from 'react';
import './Reviews.css';

function Reviews() {
  const reviews = [
    {
      id: 1,
      image: '/dogdog.jpg',
      name: 'John Doe',
      review: 'Amazing service! My dog had a great time and came back happy. Will definitely use their services again.',
      rating: 5,
    },
    {
      id: 2,
      image: '/dogdog2.jpg',
      name: 'Jane Smith',
      review: 'The staff is friendly, and the facilities are top-notch. I trust them completely with my furry friend.',
      rating: 5,
    },
    {
      id: 3,
      image: '/dogtrain.jpg',
      name: 'Michael Henry',
      review: 'Solid dog sitting experience. The staff was professional, and the pricing is reasonable. Will use again.',
      rating: 5,
    },
    {
      id: 4,
      image: '/dogtrain2.jpg',
      name: 'Cody Johnson',
      review: 'Outstanding experience. The care and attention to detail exceeded our expectations. Will definitely be repeat customers.',
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<span key={i} className={i <= rating ? 'star filled' : 'star'}>&#9733;</span>);
    }
    return stars;
  };

  return (
    <div className="reviews-container">
      <h2>Customer Reviews</h2>
      <div className="reviews-list">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <img src={review.image} alt={`Customer ${review.name}`} />
            <div className="review-details">
              <div className="rating">{renderStars(review.rating)}</div>
              <h3>{review.name}</h3>
              <p>{review.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;



