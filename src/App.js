import React from 'react';
import './App.css';
import './NavBar.css';

function App() {
  return (
    <div>
      {/* Header Section */}
      <header className="main-header">
        <h1>Welcome to My Website</h1>
        <p>Your one-stop platform for connecting, learning, and sharing.</p>
      </header>

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="#">MyWebsite</a>
        </div>
        <ul className="navbar-menu">
          <li><a href="#about">About</a></li>
          <li><a href="#profiles">Profiles</a></li>
          <li><a href="#blogs">Blogs</a></li>
          <li><a href="#signup">Sign Up</a></li>
        </ul>
      </nav>

      {/* About Section */}
      <section id="about" className="about-section">
        <h2>About Us</h2>
        <p>
          Welcome to My Website! We aim to provide a platform for individuals
          to share their knowledge, connect with like-minded people, and grow together.
        </p>
      </section>

      {/* Profiles Section */}
      <section id="profiles" className="profiles-section">
        <h2>Featured Profiles</h2>
        <div className="card-grid">
          <div className="profile-card">
            <img src="https://as1.ftcdn.net/v2/jpg/01/81/37/82/1000_F_181378266_IgsWpFPDlNJMWY2Nq8uqWJLnpVeLiWar.jpg" alt="Profile 1" />
            <h3>John Doe</h3>
            <p>A passionate developer.</p>
          </div>
          <div className="profile-card">
            <img src="https://i.pinimg.com/736x/3a/4e/27/3a4e27ab7fe17d3bfe12c05861fa257a.jpg" alt="Profile 2" />
            <h3>Jane Smith</h3>
            <p>A creative designer.</p>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section id="blogs" className="blogs-section">
        <h2>Latest Blogs</h2>
        <div className="card-grid">
          <div className="blog-card">
            <img src="https://via.placeholder.com/300x200" alt="Blog 1" />
            <h3>React Basics</h3>
            <p>Learn the basics of React in this blog post.</p>
          </div>
          <div className="blog-card">
            <img src="https://via.placeholder.com/300x200" alt="Blog 2" />
            <h3>CSS Best Practices</h3>
            <p>Enhance your UI with these CSS tips.</p>
          </div>
        </div>
      </section>

      {/* Sign Up Section */}
      <section id="signup" className="signup-section">
        <h2>Sign Up</h2>
        <form className="signup-form">
          <label htmlFor="firstname">First Name</label>
          <input type="text" id="firstname" placeholder="Enter your first name" />
          <label htmlFor="lastname">Last Name</label>
          <input type="text" id="lastname" placeholder="Enter your last name" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default App;
