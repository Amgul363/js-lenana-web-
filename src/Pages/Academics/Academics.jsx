import './Academics.css';
import banner from '../../assets/Images/academics-banner.jpg';

export default function Academics() {
  return (
    <div className="academics-page">
      {/* Hero */}
      <section className="academics-hero">
        <div className="academics-hero-text">
          <h1>Academics in Lenana JSS</h1>
          <p>Fostering Excellence across disciplines.</p>
        </div>
        <img
          src={banner}
          alt="Academics Banner"
          className="academics-hero-img"
        />
      </section>

      {/* Subject Overview */}
      <section className="subjects">
        <h2>Learning Areas</h2>
        <div className="subjects-cards">
          <div className="subject-card">
            <h3>Sciences</h3>
            <p>Explore Integrated Science</p>
          </div>

          <div className="subject-card">
            <h3>Mathematics</h3>
            <p>Strengthening logic & problem-solving</p>
          </div>

          <div className="subject-card">
            <h3>Languages</h3>
            <p>Proficiency in English, Kiswahili & more</p>
          </div>

          <div className="subject-card">
            <h3>Humanities</h3>
            <p>Understanding people, cultures & Religion</p>
          </div>

          <div className="subject-card">
            <h3>Technicals</h3>
            <p>Explore Agriculture, Home Science and B. studies</p>
          </div>

          <div className="subject-card">
            <h3>C. Art & Sport</h3>
            <p>Indulge in Creativity and Talents</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h3>Curious about our curriculum?</h3>
        <a href="/contact" className="cta-btn">
          Contact Us
        </a>
      </section>
    </div>
  );
}
