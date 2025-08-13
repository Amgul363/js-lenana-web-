import { Link } from "react-router-dom";
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      
      {/* Hero Section */}
      <section className="about-hero animated-section">
        <div className="about-hero-text">
          <h1>About Us</h1>
          <p>Discipline and Exellence</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-mission-vision animated-section">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>To empower young Kenyans through quality Education.</p>
        </div>
        <div className="about-section">
          <h2>Our Vision</h2>
          <p>We are the Hill of Vision</p>
        </div>
      </section>

      {/* Our Story / Image */}
      <section className="about-story animated-section">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            Lenana Junior School was established to serve the growing educational needs of the Lenana community.
            We are committed to offering a well-rounded curriculum that not only emphasizes academics but also social and emotional growth.
          </p>
        </div>

        <div className='about-text'>
            <h2>Our Staff</h2>
            <p>
             Our staff is a dedicated team of passionate educators committed to guiding learners academically, socially, and emotionally.
              Together, we create a supportive environment where every child can thrive.
            </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="about-values animated-section">
        <h2>Our Core Values</h2>
        <ul>
          <li>Integrity</li>
          <li>Proffessionalism</li>
          <li>Team Work</li>
          <li>Respect</li>
          <li>Discipline</li>
        </ul>
      </section>

      {/* Link to Academics */}
      <section className="about-academics-link">
        <Link to="/academics" className="learn-more-btn">
          Our Academics
        </Link>
      </section>
    </div>
  );
}
