// StarRating.js

import React from 'react';
import './StarRating.css';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const StarRating = ({ rating }) => {
  const stars = [];
  const maxRating = 5; // assuming maximum rating is 5

  // for (let i = 1; i <= maxRating; i++) {
  //   const starClass = i <= rating ? 'star-rating__star' : 'star-rating__star star-rating__star--empty';
  //   stars.push(<i key={i} className={`fas fa-star ${starClass}`} />);
  // }
  for (let i = 1; i <= maxRating; i++) {
    const starClass = i <= rating ? 'fas fa-star star-rating__star' : 'far fa-star star-rating__star';
    stars.push(<i key={i} className={starClass} />);
  }
  return (
    <div className="star-rating">
      {/* <FontAwesomeIcon icon={faStar} /> */}
      {stars}
      <span className="star-rating__rating">{rating}/{maxRating}</span>
    </div>
  );
};

export default StarRating;
