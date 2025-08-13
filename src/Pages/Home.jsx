import { useState } from 'react'
import { Link } from 'react-router-dom'
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
  const visibleImages = showAll ? allImages : allImages.slice(0, 3);

  const [expandedImg, setExpandedImg] = useState(null);


  return (

    <div className='homepage'>

      {/*Hero section*/}
      <section className='hero'>
        <img src={hero} alt='Hero' className="hero-image" />
        <div className='hero-text'>
          <h1>Welcome to Lenana Junior School Narok</h1>
          <p>We empower young Kenyans through quality education</p>
          <Link to="/about" className='hero-text-btn'>Learn More</Link>
        </div>
      </section>

      {/*About section*/}
      <section className='about'>
        <h2>About our School</h2>
        <p>
          Lenana Junior School Narok is dedicated to nurturing
          holistic learners through a supportive and inclusive environment.
        </p>
      </section>

      {/*Academics */}
      <section className='academics'>
        <h2>Academics</h2>
        <div className='academic-cards'>
          <Link to="/academics/sciences" className='card'>Sciences</Link>
          <Link to="/academics/mathematics" className='card'>Mathematics</Link>
          <Link to="/academics/languages" className='card'>Languages</Link>
          <Link to="/academics/humanities" className='card'>Humanities</Link>
        </div>
      </section>

      {/*Gallery*/}
      <section className='gallery'>
        <h2>School Life</h2>
        <div className='gallery-images'>
          <div className='gallery-images'>
            {visibleImages.map((img, index) => (
              <div key={index} className='gallery-image-wrapper' onClick={() => setExpandedImg(img)}>
                <img src={img} alt={`Gallery ${index + 1}`} />
              </div>
            ))}
          </div>

        </div>
        <button className='see-more-btn' onClick={() => setShowAll(!showAll)}>
          {!showAll ? 'See More' : 'See less'}
        </button>

      </section>

      {expandedImg && (
        <div className='fullscreen-img' onClick={() => setExpandedImg(null)}>
          <img src={expandedImg} alt="Expanded view" />
        </div>
      )}


      {/*Footer*/}
      <footer className='footer'>
        <p>© {new Date().getFullYear()} Lenana Junior School| Narok</p>
      </footer>
    </div>
  );
}