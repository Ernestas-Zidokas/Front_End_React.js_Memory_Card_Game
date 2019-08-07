import React from 'react';
import './index.scss';

function SingleCard({ src, alt }) {
  return (
    <div className="SingleCard">
      <img src={src} alt={alt} />
    </div>
  );
}

export default SingleCard;
