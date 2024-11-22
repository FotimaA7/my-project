// src/ProfileCard.js
import React from 'react';

const ProfileCard = ({ name, image, description }) => {
  return (
    <div className="profile-card">
      <img src={image} alt={name} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ProfileCard;
