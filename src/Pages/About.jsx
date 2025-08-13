import './About.css';
import aboutImage from '../assets/Images/about-page.jpg'; // Update this path if needed

export default function About() {
  return (
    <div className="about-page">
      
      {/* Hero Section */}
      <section className="about-hero animated-section">
        <div className="about-hero-text">
          <h1>About Us</h1>
          <p>Shaping young minds for a brighter tomorrow.</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-mission-vision animated-section">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>To provide a nurturing environment that empowers learners to reach their full potential through quality, inclusive education.</p>
        </div>
        <div className="about-section">
          <h2>Our Vision</h2>
          <p>To be a center of academic excellence and character development in the heart of Narok.</p>
        </div>
      </section>

      {/* Our Story / Image */}
      <section className="about-story animated-section">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            Lenana Junior Secondary School was established to serve the growing educational needs of the Lenana community.
            We are committed to offering a well-rounded curriculum that not only emphasizes academics but also social and emotional growth.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="School Overview" />
        </div>
      </section>

      {/* Core Values */}
      <section className="about-values animated-section">
        <h2>Our Core Values</h2>
        <ul>
          <li>Integrity</li>
          <li>Inclusivity</li>
          <li>Innovation</li>
          <li>Respect</li>
          <li>Discipline</li>
        </ul>
      </section>
    </div>
  );
}
