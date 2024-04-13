import React, { useState } from 'react';
import './imagepopup.css';
import NestedComments from './input';

const ImagePopup = ({ imageUrl, onClose }) => {

  return (
    <div>
      <div className="image-popup">
        <button className="close-btn" onClick={onClose}>X</button>
        <div className="popup-content">
          <img src={imageUrl} alt="Popup" />
        </div>
        <div>
          <NestedComments />
        </div>
      </div>
    </div>
  );
};

export default ImagePopup;