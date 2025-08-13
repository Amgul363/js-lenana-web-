import { useState } from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import hero from '../assets/Images/hero-placeholder.jpg'
import gallery1 from '../assets/Images/gallery1.jpg'
import gallery2 from '../assets/Images/gallery2.jpg'
import gallery3 from '../assets/Images/gallery3.jpg'
import gallery4 from '../assets/Images/gallery4.jpg'
import gallery5 from '../assets/Images/gallery5.jpg'
import gallery6 from '../assets/Images/gallery6.jpg'

export default function Home() {
  const [showAll, setShowAll] = useState(false)
  const allImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6]
  const visibleImages = showAll ? allImages : allImages.slice(0, 3)

  const [expandedImg, setExpandedImg] = useState(null)

  return (
    <div className='homepage'>

      {/* Hero section */}
      <section className='hero'>
        <img src={hero} alt='Hero' className="hero-image" />
        <div className='hero-text'>
          <h1>Welcome to Lenana Junior School Narok</h1>
          <p>We empower young Kenyans through quality education</p>
          <a href="/about" className='hero-text-btn'>Learn More</a>
        </div>
      </section>

      {/* About section */}
      <section className='about'>
        <h2>About our School</h2>
        <p>
          Lenana Junior School Narok is a <strong>public school located in Narok North Sub-county</strong>.
          We nurture holistic learners in<strong> Grade 7, 8, and 9 through a supportive, 
          inclusive CBC-based environment.</strong>   We guide our learners in identifying their strengths, talents, and interests, 
          preparing them to choose senior school pathways that align with their abilities and future aspirations.
        </p>
      </section>

      {/* Academics */}
      <section className='academics'>
        <h2>Academics</h2>
        <div className='academic-cards'>
          <div className='card'>Sciences</div>
          <div className='card'>Mathematics</div>
          <div className='card'>Languages</div>
          <div className='card'>Humanities</div>
          <div className='card'>Technicals</div>
          <div className='card'>C. Art & Sports</div>
        </div>
      </section>

      {/* Gallery */}
      <section className='gallery'>
        <h2>School Life</h2>
        <div className='gallery-images'>
          {visibleImages.map((img, index) => (
            <div key={index} className='gallery-image-wrapper' onClick={() => setExpandedImg(img)}>
              <img src={img} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className='see-more-btn' onClick={() => setShowAll(!showAll)}>
          {!showAll ? 'See More' : 'See Less'}
        </button>
      </section>

      {/* Expanded Image */}
      {expandedImg && (
        <div className='fullscreen-img' onClick={() => setExpandedImg(null)}>
          <img src={expandedImg} alt="Expanded view" />
        </div>
      )}

      {/* Footer */}
      
<footer className="footer">
  <div className="footer-container">
    {/* About Section */}
    <div className="footer-section">
      <h4>About Us</h4>
      <p>
        Our school is committed to academic excellence and nurturing
        future leaders through quality education.
      </p>
    </div>

    {/* Quick Links */}
    <div className="footer-section">
      <h4>Quick Links</h4>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/academics">Academics</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>

    {/* Contact Info */}
    <div className="footer-section">
      <h4>Contact Us</h4>
      <p>Email:lenanajss@school.ac.ke</p>
      <p>Phone: +254 712 345 678</p>
      <p>Location: Narok, Kenya</p>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© {new Date().getFullYear()} Our School. All rights reserved.</p>
  </div>
</footer>



    </div>
  )
}
