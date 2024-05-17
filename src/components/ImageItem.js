import React, { useState } from 'react';

const ImageItem = ({ image }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="image-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img 
        src={image.urls.small} 
        alt={image.description} 
        className={isHovered ? "hovered" : ""} 
      />
      {isHovered && (
        <div className="image-popup">
          <p>{image.description || 'No description available'}</p>
          <p>By: {image.user.name}</p>
        </div>
      )}
    </div>
  );
};

export default ImageItem;
