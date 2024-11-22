// src/BlogCard.js
import React from 'react';

const BlogCard = ({ title, description, imageURL }) => {
  return (
    <div className="blog-card">
      <img src={imageURL} alt={title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default BlogCard;
