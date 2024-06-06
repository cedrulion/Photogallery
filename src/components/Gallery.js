import React, { useState } from 'react';
import './Gallery.css';
import fox from '../Assets/fox.jpg';
import monkey from '../Assets/monkey.jpg';
import deer from '../Assets/deer.jpg';
import hamback from '../Assets/hamback.jpg';

const images = [
  { src: fox, title: "FENNEC FOX", location: "India" },
  { src: hamback, title: "HUMPBACK WHALE", location: "South Africa" },
  { src: monkey, title: "COMMON BROWN BABOON", location: "South Africa" },
  { src: deer, title: "SPOTTED DEER", location: "Amazon" },
];

const GalleryItem = ({ image, onClick }) => (
  <div className="gallery-item" onClick={onClick}>
    <img src={image.src} alt={image.title} />
    <div className="info">
      <h3>{image.title}</h3>
      <p>{image.location}</p>
    </div>
    <div className="overlay">
      <div className="text">
        <a href="#" className="link">Know more →</a>
      </div>
    </div>
  </div>
);

const Thumbnail = ({ image, onClick }) => (
  <div className="thumbnail" onClick={onClick}>
    <img src={image.src} alt={image.title} />
  </div>
);

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(null);

  return (
    <div>
      <div className="gallery">
        {images.map((image, index) => (
          <GalleryItem 
            key={index} 
            image={image} 
            onClick={() => setCurrentImage(image)} 
          />
        ))}
      </div>
      {currentImage && (
        <div className="lightbox" onClick={() => setCurrentImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={currentImage.src} alt={currentImage.title} />
            <p>{currentImage.title} - {currentImage.location}</p>
          </div>
        </div>
      )}
      <div className="thumbnails">
        {images.map((image, index) => (
          <Thumbnail 
            key={index} 
            image={image} 
            onClick={() => setCurrentImage(image)} 
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
