import {Link} from 'react-router-dom'
import './Home.css'
import hero from '../assets/Images/hero-placeholder.jpg'
import gallery1 from '../assets/Images/gallery1.jpg'
import gallery2 from '../assets/Images/gallery2.jpg'
import gallery3 from '../assets/Images/gallery3.jpg'
import gallery4 from '../assets/Images/gallery4.jpg'
import gallery5 from '../assets/Images/gallery5.jpg'
import gallery6 from '../assets/Images/gallery6.jpg'

export default function Home (){
  return(
   <div className='homepage'>
    
      {/*Hero section*/}
      <section className='hero'> 
        <img src={hero} alt='Hero' className="hero-image" />
        <div className='hero-text'>
          <h1>Welcome to Lenana Junior Sec School Narok</h1>
          <p>We empower young Kenyans through quality education</p>
          <Link to="/about" className='hero-text-btn'>Learn More</Link>
        </div>
      </section>

    {/*About section*/}
    <section className='about'>
      <h2>About our School</h2>
      <p>
         Lenana Junior Secondary School is dedicated to nurturing
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
         <img src={gallery1} alt="Gallery 1" />
          <img src={gallery2} alt="Gallery 2" />
          <img src={gallery3} alt="Gallery 3" />
          <img src={gallery4} alt="Gallery 4" />
          <img src={gallery5} alt="Gallery 5" />
          <img src={gallery6} alt="Gallery 6" />

      </div>
    </section>

    {/*Footer*/}
    <footer className='footer'>
       <p>© {new Date().getFullYear()} Lenana Junior Sec School| Narok</p>
    </footer>
   </div>
  );
}